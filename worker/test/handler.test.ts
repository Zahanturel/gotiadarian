import { test } from "node:test";
import assert from "node:assert/strict";
import { handle, type Env, type KV, type SendFn } from "../src/handler.ts";
import type { Mail } from "../src/smtp.ts";

const ORIGIN = "https://gotiadarian.com";

function memoryKV(): KV {
  const store = new Map<string, string>();
  return {
    async get(key) {
      return store.get(key) ?? null;
    },
    async put(key, value) {
      store.set(key, value);
    },
  };
}

function makeEnv(extra: Partial<Env> = {}): Env {
  return {
    SMTP_HOST: "smtp.example.test",
    SMTP_PORT: "465",
    SMTP_USER: "contact@gotiadarian.com",
    SMTP_PASS: "secret-password",
    MAIL_TO: "contact@gotiadarian.com",
    MAIL_CC: "someone@example.com",
    ALLOWED_ORIGIN: ORIGIN,
    THANKS_URL: `${ORIGIN}/contact/thanks/`,
    CONTACT_URL: `${ORIGIN}/contact/`,
    ...extra,
  };
}

function formRequest(fields: Record<string, string>, headers: Record<string, string> = {}): Request {
  return new Request("https://goti-contact.example.workers.dev/", {
    method: "POST",
    headers: { origin: ORIGIN, "content-type": "application/x-www-form-urlencoded", ...headers },
    body: new URLSearchParams(fields),
  });
}

const good = { name: "Asha Mehta", email: "asha@example.com", subject: "Navjote", message: "Hello there" };

function recorder(): { send: SendFn; sent: Mail[] } {
  const sent: Mail[] = [];
  return {
    sent,
    send: async (mail) => {
      sent.push(mail);
    },
  };
}

test("valid post sends to both recipients and redirects to the thank-you page", async () => {
  const { send, sent } = recorder();
  const res = await handle(formRequest(good), makeEnv(), send);
  assert.equal(res.status, 303);
  assert.equal(res.headers.get("location"), `${ORIGIN}/contact/thanks/`);
  assert.equal(sent.length, 1);
  assert.deepEqual(sent[0].to, ["contact@gotiadarian.com", "someone@example.com"]);
  assert.equal(sent[0].replyTo, "asha@example.com");
  assert.equal(sent[0].subject, "[Website] Navjote");
  assert.match(sent[0].text, /Name: Asha Mehta/);
  assert.match(sent[0].text, /Hello there/);
});

test("works when only one recipient is configured", async () => {
  const { send, sent } = recorder();
  await handle(formRequest(good), makeEnv({ MAIL_CC: "" }), send);
  assert.deepEqual(sent[0].to, ["contact@gotiadarian.com"]);
});

test("filled trap field looks like success but sends nothing", async () => {
  const { send, sent } = recorder();
  const res = await handle(formRequest({ ...good, website: "http://spam.example" }), makeEnv(), send);
  assert.equal(res.status, 303);
  assert.equal(sent.length, 0);
});

test("rejects posts from another origin", async () => {
  const { send, sent } = recorder();
  const res = await handle(formRequest(good, { origin: "https://evil.example" }), makeEnv(), send);
  assert.equal(res.status, 403);
  assert.equal(sent.length, 0);
});

test("rejects posts with no origin or referer", async () => {
  const { send } = recorder();
  const req = new Request("https://x.example/", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(good),
  });
  assert.equal((await handle(req, makeEnv(), send)).status, 403);
});

test("accepts a matching referer when origin is absent", async () => {
  const { send } = recorder();
  const req = new Request("https://x.example/", {
    method: "POST",
    headers: { referer: `${ORIGIN}/contact/`, "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(good),
  });
  assert.equal((await handle(req, makeEnv(), send)).status, 303);
});

test("GET is not allowed", async () => {
  const { send } = recorder();
  const res = await handle(new Request("https://x.example/", { method: "GET" }), makeEnv(), send);
  assert.equal(res.status, 405);
});

test("missing or invalid fields give an error page and send nothing", async () => {
  for (const bad of [
    { ...good, name: "" },
    { ...good, email: "not-an-email" },
    { ...good, subject: "   " },
    { ...good, message: "" },
    { ...good, message: "x".repeat(5001) },
  ]) {
    const { send, sent } = recorder();
    const res = await handle(formRequest(bad), makeEnv(), send);
    assert.equal(res.status, 400);
    assert.equal(sent.length, 0);
    assert.match(await res.text(), /could not be sent/);
  }
});

test("line breaks cannot be smuggled into the subject or name", async () => {
  const { send, sent } = recorder();
  await handle(formRequest({ ...good, subject: "Hi\r\nBcc: victim@example.com", name: "A\nB" }), makeEnv(), send);
  assert.equal(sent[0].subject, "[Website] Hi Bcc: victim@example.com");
  assert.doesNotMatch(sent[0].subject, /[\r\n]/);
  assert.match(sent[0].text, /Name: A B/);
});

test("the sixth message from one address in an hour is refused", async () => {
  const env = makeEnv({ RATE: memoryKV() });
  const { send, sent } = recorder();
  const headers = { "cf-connecting-ip": "203.0.113.9" };
  for (let i = 0; i < 5; i++) {
    assert.equal((await handle(formRequest(good, headers), env, send)).status, 303);
  }
  assert.equal((await handle(formRequest(good, headers), env, send)).status, 429);
  assert.equal(sent.length, 5);
  assert.equal((await handle(formRequest(good, { "cf-connecting-ip": "203.0.113.10" }), env, send)).status, 303);
});

test("a sending failure shows the error page instead of the thank-you page", async () => {
  const failing: SendFn = async () => {
    throw new Error("smtp: unexpected reply 535");
  };
  const res = await handle(formRequest(good), makeEnv(), failing);
  assert.equal(res.status, 502);
  assert.match(await res.text(), /contact@gotiadarian\.com/);
});

test("an oversized body is refused before parsing", async () => {
  const { send, sent } = recorder();
  const res = await handle(formRequest(good, { "content-length": "50000" }), makeEnv(), send);
  assert.equal(res.status, 413);
  assert.equal(sent.length, 0);
});
