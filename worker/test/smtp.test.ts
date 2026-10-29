import { test } from "node:test";
import assert from "node:assert/strict";
import net from "node:net";
import { Duplex } from "node:stream";
import { sendMail, buildMessage, type ConnectFn, type Mail, type SmtpConfig } from "../src/smtp.ts";

interface Script {
  /** Reply to AUTH: "235 ok" by default. */
  auth?: string;
  /** Reject this recipient with 550. */
  rejectRcpt?: string;
}

interface Capture {
  commands: string[];
  data: string;
}

/** A tiny plain-text SMTP server that records what the client sends. */
async function startServer(script: Script = {}): Promise<{ port: number; capture: Capture; close: () => void }> {
  const capture: Capture = { commands: [], data: "" };
  const server = net.createServer((socket) => {
    let inData = false;
    let buffer = "";
    socket.write("220 mock ESMTP ready\r\n");
    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      for (;;) {
        if (inData) {
          const end = buffer.indexOf("\r\n.\r\n");
          if (end === -1) return;
          capture.data = buffer.slice(0, end + 2);
          buffer = buffer.slice(end + 5);
          inData = false;
          socket.write("250 queued\r\n");
          continue;
        }
        const eol = buffer.indexOf("\r\n");
        if (eol === -1) return;
        const line = buffer.slice(0, eol);
        buffer = buffer.slice(eol + 2);
        capture.commands.push(line);
        if (line.startsWith("EHLO")) socket.write("250-mock\r\n250-AUTH PLAIN\r\n250 8BITMIME\r\n");
        else if (line.startsWith("AUTH")) socket.write((script.auth ?? "235 authenticated") + "\r\n");
        else if (line.startsWith("MAIL FROM")) socket.write("250 ok\r\n");
        else if (line.startsWith("RCPT TO")) {
          socket.write(script.rejectRcpt && line.includes(script.rejectRcpt) ? "550 no such user\r\n" : "250 ok\r\n");
        } else if (line === "DATA") {
          inData = true;
          socket.write("354 go ahead\r\n");
        } else if (line === "QUIT") {
          socket.end("221 bye\r\n");
        } else socket.write("500 what\r\n");
      }
    });
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address() as net.AddressInfo;
  return { port, capture, close: () => server.close() };
}

function connectTo(port: number): ConnectFn {
  return () => {
    const socket = net.connect(port, "127.0.0.1");
    const web = Duplex.toWeb(socket) as unknown as {
      readable: ReadableStream<Uint8Array>;
      writable: WritableStream<Uint8Array>;
    };
    return { readable: web.readable, writable: web.writable, close: () => void socket.destroy() };
  };
}

const config = (port: number): SmtpConfig => ({
  host: "127.0.0.1",
  port,
  user: "contact@gotiadarian.com",
  pass: "s3cret!",
  mode: "none",
  timeoutMs: 2000,
});

const mail: Mail = {
  fromName: "Goti Adarian Website",
  to: ["contact@gotiadarian.com", "owner@example.com"],
  replyTo: "asha@example.com",
  subject: "[Website] Navjote",
  text: "Hello there\n.\nA line that starts with a dot",
};

function decodeBody(data: string): string {
  const body = data.split("\r\n\r\n")[1].replace(/\r\n/g, "");
  return Buffer.from(body, "base64").toString("utf8");
}

test("sends the full SMTP conversation and the message arrives intact", async () => {
  const server = await startServer();
  try {
    await sendMail(config(server.port), mail, connectTo(server.port));
    const { commands, data } = server.capture;
    assert.equal(commands[0], "EHLO gotiadarian.com");
    const auth = commands.find((c) => c.startsWith("AUTH PLAIN "))!;
    assert.equal(Buffer.from(auth.slice(11), "base64").toString("utf8"), "\0contact@gotiadarian.com\0s3cret!");
    assert.ok(commands.includes("MAIL FROM:<contact@gotiadarian.com>"));
    assert.ok(commands.includes("RCPT TO:<contact@gotiadarian.com>"));
    assert.ok(commands.includes("RCPT TO:<owner@example.com>"));
    assert.ok(commands.includes("DATA"));
    assert.ok(commands.includes("QUIT"));
    assert.match(data, /^From: Goti Adarian Website <contact@gotiadarian\.com>\r\n/);
    assert.match(data, /\r\nTo: contact@gotiadarian\.com, owner@example\.com\r\n/);
    assert.match(data, /\r\nReply-To: asha@example\.com\r\n/);
    assert.match(data, /\r\nSubject: \[Website\] Navjote\r\n/);
    assert.match(data, /\r\nContent-Transfer-Encoding: base64\r\n/);
    assert.equal(decodeBody(data), mail.text);
  } finally {
    server.close();
  }
});

test("a rejected password fails with the server's code", async () => {
  const server = await startServer({ auth: "535 5.7.8 authentication failed" });
  try {
    await assert.rejects(sendMail(config(server.port), mail, connectTo(server.port)), /unexpected reply 535/);
    assert.ok(!server.capture.commands.includes("DATA"));
  } finally {
    server.close();
  }
});

test("a rejected recipient fails before any message is sent", async () => {
  const server = await startServer({ rejectRcpt: "owner@example.com" });
  try {
    await assert.rejects(sendMail(config(server.port), mail, connectTo(server.port)), /unexpected reply 550/);
    assert.ok(!server.capture.commands.includes("DATA"));
  } finally {
    server.close();
  }
});

test("an unreachable server fails instead of hanging", async () => {
  const server = await startServer();
  const port = server.port;
  server.close();
  await new Promise((r) => setTimeout(r, 50));
  await assert.rejects(sendMail(config(port), mail, connectTo(port)));
});

test("a non-ASCII subject and name are encoded and the body stays UTF-8", async () => {
  const server = await startServer();
  try {
    await sendMail(
      config(server.port),
      { ...mail, fromName: "Goti Adarián", subject: "[Website] Jashan – નમસ્તે", text: "Namaste – નમસ્તે" },
      connectTo(server.port),
    );
    const { data } = server.capture;
    assert.match(data, /\r\nSubject: =\?UTF-8\?B\?[A-Za-z0-9+/=]+\?=\r\n/);
    assert.match(data, /^From: =\?UTF-8\?B\?[A-Za-z0-9+/=]+\?= <contact@gotiadarian\.com>/);
    assert.equal(decodeBody(data), "Namaste – નમસ્તે");
  } finally {
    server.close();
  }
});

test("addresses with spaces, brackets or line breaks are refused before connecting", async () => {
  let connected = false;
  const connect: ConnectFn = () => {
    connected = true;
    throw new Error("should not connect");
  };
  for (const bad of ["a b@example.com", "a@example.com\r\nRCPT TO:<x@y.zz>", "<a@example.com>", "nobody"]) {
    await assert.rejects(sendMail(config(1), { ...mail, to: [bad] }, connect), /invalid address/);
    await assert.rejects(sendMail(config(1), { ...mail, replyTo: bad }, connect), /invalid address/);
  }
  assert.equal(connected, false);
});

test("buildMessage uses CRLF line endings and never puts a bare dot line in the body", () => {
  const message = buildMessage(config(1), { ...mail, text: "line one\n.\nline three" }, new Date("2026-10-29T10:00:00Z"));
  assert.match(message, /\r\nDate: Thu, 29 Oct 2026 10:00:00 \+0000\r\n/);
  assert.doesNotMatch(message.replace(/\r\n/g, ""), /\n/);
  assert.ok(message.split("\r\n").every((l) => l !== "."));
});
