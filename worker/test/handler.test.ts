import { test } from "node:test";
import assert from "node:assert/strict";
import { handle, type Env, type KV } from "../src/handler.ts";

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
    RESEND_API_KEY: "re_test_key",
    MAIL_TO: "contact@gotiadarian.com",
    MAIL_CC: "someone@example.com",
    MAIL_FROM: "Goti Adarian Website <no-reply@gotiadarian.com>",
    ALLOWED_ORIGIN: ORIGIN,
    THANKS_URL: `${ORIGIN}/contact/thanks/`,
    CONTACT_URL: `${ORIGIN}/contact/`,
    ...extra,
  };
}

function formRequest(fields: Record<string, string>, headers: Record<string, string> = {}): Request {
  const body = new URLSearchParams(fields);
  return new Request("https://goti-contact.example.workers.dev/", {
    method: "POST",
    headers: { origin: ORIGIN, "content-type": "application/x-www-form-urlencoded", ...headers },
    body,
  });
}

const good = { name: "Asha Mehta", email: "asha@example.com", subject: "Navjote", message: "Hello there" };

function okFetch() {
  const calls: { url: string; init: RequestInit }[] = [];
  const fn = async (url: string, init?: RequestInit) => {
    calls.push({ url, init: init as RequestInit });
    return new Response("{}", { status: 200 });
  };
  return { fn, calls };
}

test("valid post emails both recipients and redirects to the thank-you page", async () => {
  const { fn, calls } = okFetch();
  const res = await handle(formRequest(good), makeEnv(), fn);
  assert.equal(res.status, 303);
  assert.equal(res.headers.get("location"), `${ORIGIN}/contact/thanks/`);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.resend.com/emails");
  const sent = JSON.parse(String(calls[0].init.body));
  assert.deepEqual(sent.to, ["contact@gotiadarian.com", "someone@example.com"]);
  assert.equal(sent.reply_to, "asha@example.com");
  assert.equal(sent.subject, "[Website] Navjote");
  assert.match(sent.text, /Hello there/);
  assert.equal(
    (calls[0].init.headers as Record<string, string>).authorization,
    "Bearer re_test_key",
  );
});

test("works when only one recipient is configured", async () => {
  const { fn, calls } = okFetch();
  await handle(formRequest(good), makeEnv({ MAIL_CC: "" }), fn);
  assert.deepEqual(JSON.parse(String(calls[0].init.body)).to, ["contact@gotiadarian.com"]);
});

test("filled trap field looks like success but sends nothing", async () => {
  const { fn, calls } = okFetch();
  const res = await handle(formRequest({ ...good, website: "http://spam.example" }), makeEnv(), fn);
  assert.equal(res.status, 303);
  assert.equal(calls.length, 0);
});

test("rejects posts from another origin", async () => {
  const { fn, calls } = okFetch();
  const res = await handle(formRequest(good, { origin: "https://evil.example" }), makeEnv(), fn);
  assert.equal(res.status, 403);
  assert.equal(calls.length, 0);
});

test("rejects posts with no origin or referer", async () => {
  const { fn } = okFetch();
  const req = new Request("https://x.example/", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(good),
  });
  assert.equal((await handle(req, makeEnv(), fn)).status, 403);
});

test("accepts a matching referer when origin is absent", async () => {
  const { fn } = okFetch();
  const req = new Request("https://x.example/", {
    method: "POST",
    headers: { referer: `${ORIGIN}/contact/`, "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(good),
  });
  assert.equal((await handle(req, makeEnv(), fn)).status, 303);
});

test("GET is not allowed", async () => {
  const { fn } = okFetch();
  const res = await handle(new Request("https://x.example/", { method: "GET" }), makeEnv(), fn);
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
    const { fn, calls } = okFetch();
    const res = await handle(formRequest(bad), makeEnv(), fn);
    assert.equal(res.status, 400);
    assert.equal(calls.length, 0);
    assert.match(await res.text(), /could not be sent/);
  }
});

test("line breaks cannot be smuggled into the subject or sender fields", async () => {
  const { fn, calls } = okFetch();
  await handle(
    formRequest({ ...good, subject: "Hi\r\nBcc: victim@example.com", name: "A\nB" }),
    makeEnv(),
    fn,
  );
  const sent = JSON.parse(String(calls[0].init.body));
  assert.equal(sent.subject, "[Website] Hi Bcc: victim@example.com");
  assert.doesNotMatch(sent.subject, /[\r\n]/);
  assert.match(sent.text, /Name: A B/);
});

test("the sixth message from one address in an hour is refused", async () => {
  const env = makeEnv({ RATE: memoryKV() });
  const { fn, calls } = okFetch();
  const headers = { "cf-connecting-ip": "203.0.113.9" };
  for (let i = 0; i < 5; i++) {
    assert.equal((await handle(formRequest(good, headers), env, fn)).status, 303);
  }
  const sixth = await handle(formRequest(good, headers), env, fn);
  assert.equal(sixth.status, 429);
  assert.equal(calls.length, 5);
  // a different address is unaffected
  assert.equal(
    (await handle(formRequest(good, { "cf-connecting-ip": "203.0.113.10" }), env, fn)).status,
    303,
  );
});

test("an email-service error shows the error page instead of the thank-you page", async () => {
  const failing = async () => new Response("nope", { status: 500 });
  const res = await handle(formRequest(good), makeEnv(), failing);
  assert.equal(res.status, 502);
  assert.match(await res.text(), /contact@gotiadarian\.com/);
});

test("a network failure also shows the error page", async () => {
  const throwing = async () => {
    throw new Error("network");
  };
  assert.equal((await handle(formRequest(good), makeEnv(), throwing)).status, 502);
});

test("an oversized body is refused before parsing", async () => {
  const { fn, calls } = okFetch();
  const res = await handle(formRequest(good, { "content-length": "50000" }), makeEnv(), fn);
  assert.equal(res.status, 413);
  assert.equal(calls.length, 0);
});
