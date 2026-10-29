/**
 * A small SMTP client for Cloudflare Workers (no libraries).
 * Speaks just enough SMTP to log in and send one plain-text message:
 * EHLO, optional STARTTLS, AUTH PLAIN, MAIL FROM, RCPT TO, DATA, QUIT.
 * Port 25 is blocked for Workers; use 465 (implicit TLS) or 587 (STARTTLS).
 */

export interface SocketLike {
  readable: ReadableStream<Uint8Array>;
  writable: WritableStream<Uint8Array>;
  /** Present when the socket was opened with secureTransport "starttls". */
  startTls?: () => SocketLike;
  close?: () => Promise<void> | void;
}

/** Opens a connection. `secure` is "on" (implicit TLS), "starttls" or "off" (tests only). */
export type ConnectFn = (host: string, port: number, secure: "on" | "starttls" | "off") => SocketLike;

export interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  /** "tls" = implicit TLS (port 465); "starttls" = upgrade after EHLO (port 587); "none" = tests only. */
  mode: "tls" | "starttls" | "none";
  timeoutMs?: number;
}

export interface Mail {
  fromName: string;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
}

const ADDRESS_RE = /^[^\s<>@"]+@[^\s<>@"]+\.[^\s<>@"]{2,}$/;
const encoder = new TextEncoder();
const decoder = new TextDecoder();

function toBase64(value: string | Uint8Array): string {
  const bytes = typeof value === "string" ? encoder.encode(value) : value;
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

/** RFC 2047 encoded word for header text that is not plain ASCII. */
function encodeHeader(value: string): string {
  const clean = value.replace(/[\r\n]+/g, " ").trim();
  return /^[\x20-\x7e]*$/.test(clean) ? clean : `=?UTF-8?B?${toBase64(clean)}?=`;
}

function wrap76(base64: string): string {
  return base64.match(/.{1,76}/g)?.join("\r\n") ?? "";
}

function assertAddress(address: string): void {
  if (!ADDRESS_RE.test(address)) throw new Error("smtp: invalid address");
}

/** Builds the full message (headers + base64 body), CRLF line endings, ready for DATA. */
export function buildMessage(config: SmtpConfig, mail: Mail, now: Date = new Date()): string {
  const domain = config.user.split("@")[1];
  const id = `<${crypto.randomUUID()}@${domain}>`;
  const headers = [
    `From: ${encodeHeader(mail.fromName)} <${config.user}>`,
    `To: ${mail.to.join(", ")}`,
    `Reply-To: ${mail.replyTo}`,
    `Subject: ${encodeHeader(mail.subject)}`,
    `Date: ${now.toUTCString().replace("GMT", "+0000")}`,
    `Message-ID: ${id}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
  ];
  return `${headers.join("\r\n")}\r\n\r\n${wrap76(toBase64(mail.text))}\r\n`;
}

interface Reply {
  code: number;
  text: string;
}

class Session {
  private reader: ReadableStreamDefaultReader<Uint8Array>;
  private writer: WritableStreamDefaultWriter<Uint8Array>;
  private buffer = "";
  private socket: SocketLike;
  private timeoutMs: number;

  constructor(socket: SocketLike, timeoutMs: number) {
    this.socket = socket;
    this.timeoutMs = timeoutMs;
    this.reader = socket.readable.getReader();
    this.writer = socket.writable.getWriter();
  }

  private withTimeout<T>(promise: Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("smtp: timed out")), this.timeoutMs);
      promise.then(
        (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        (error) => {
          clearTimeout(timer);
          reject(error);
        },
      );
    });
  }

  /** Reads one complete reply (a multi-line reply ends at the first line whose code is followed by a space). */
  async reply(): Promise<Reply> {
    for (;;) {
      const lines = this.buffer.split("\r\n");
      for (let i = 0; i < lines.length - 1; i++) {
        if (/^\d{3} /.test(lines[i]) || /^\d{3}$/.test(lines[i])) {
          const used = lines.slice(0, i + 1);
          this.buffer = lines.slice(i + 1).join("\r\n");
          return { code: Number(used[i].slice(0, 3)), text: used.join("\n") };
        }
      }
      const { value, done } = await this.withTimeout(this.reader.read());
      if (done) throw new Error("smtp: connection closed");
      this.buffer += decoder.decode(value, { stream: true });
    }
  }

  async send(line: string): Promise<void> {
    await this.withTimeout(this.writer.write(encoder.encode(`${line}\r\n`)));
  }

  /** Sends a command and requires one of the expected reply codes. */
  async expect(command: string | null, ...codes: number[]): Promise<Reply> {
    if (command !== null) await this.send(command);
    const reply = await this.reply();
    if (!codes.includes(reply.code)) {
      const detail = reply.text.slice(4, 120).split(String.fromCharCode(10))[0];
      throw new Error(`smtp: unexpected reply ${reply.code} (${detail})`);
    }
    return reply;
  }

  /** Upgrades the connection after the server agreed to STARTTLS. */
  upgrade(): void {
    if (!this.socket.startTls) throw new Error("smtp: STARTTLS not available");
    this.reader.releaseLock();
    this.writer.releaseLock();
    this.socket = this.socket.startTls();
    this.reader = this.socket.readable.getReader();
    this.writer = this.socket.writable.getWriter();
    this.buffer = "";
  }

  /** Says goodbye and waits briefly for the server's answer; the message is already accepted by now. */
  async quit(): Promise<void> {
    try {
      await this.send("QUIT");
      await Promise.race([this.reply(), new Promise((resolve) => setTimeout(resolve, 1000))]);
    } catch {
      // nothing to do: delivery was already confirmed
    }
  }

  async close(): Promise<void> {
    try {
      await this.socket.close?.();
    } catch {
      // closing is best effort
    }
  }
}

export async function sendMail(config: SmtpConfig, mail: Mail, connect: ConnectFn): Promise<void> {
  assertAddress(config.user);
  assertAddress(mail.replyTo);
  mail.to.forEach(assertAddress);
  if (mail.to.length === 0) throw new Error("smtp: no recipients");

  const secure = config.mode === "tls" ? "on" : config.mode === "starttls" ? "starttls" : "off";
  const session = new Session(connect(config.host, config.port, secure), config.timeoutMs ?? 15_000);
  const helo = config.user.split("@")[1];
  try {
    await session.expect(null, 220);
    await session.expect(`EHLO ${helo}`, 250);
    if (config.mode === "starttls") {
      await session.expect("STARTTLS", 220);
      session.upgrade();
      await session.expect(`EHLO ${helo}`, 250);
    }
    await session.expect(`AUTH PLAIN ${toBase64(`\0${config.user}\0${config.pass}`)}`, 235);
    await session.expect(`MAIL FROM:<${config.user}>`, 250);
    for (const address of mail.to) await session.expect(`RCPT TO:<${address}>`, 250, 251);
    await session.expect("DATA", 354);
    await session.send(`${buildMessage(config, mail)}.`);
    await session.expect(null, 250);
    await session.quit();
  } finally {
    await session.close();
  }
}
