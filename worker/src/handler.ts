/**
 * Contact form handler for gotiadarian.com.
 * Receives the plain HTML form post, checks it, emails it through the temple's own mailbox over SMTP, then redirects the visitor.
 * No secrets live in this file: they come from the Worker's settings (see wrangler.toml).
 */

import type { Mail } from "./smtp.ts";

export interface KV {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export interface Env {
  /** Var. Mail server, e.g. "smtp.titan.email". */
  SMTP_HOST: string;
  /** Var. 465 (implicit TLS) or 587 (STARTTLS). */
  SMTP_PORT: string;
  /** Var. Mailbox the message is sent from; also the SMTP login. */
  SMTP_USER: string;
  /** Secret. Password of that mailbox. */
  SMTP_PASS: string;
  /** Secret. Main recipient (the temple's contact address). */
  MAIL_TO: string;
  /** Secret, optional. Second recipient. */
  MAIL_CC?: string;
  /** Var. Only posts from this origin are accepted, e.g. "https://gotiadarian.com". */
  ALLOWED_ORIGIN: string;
  /** Var. Where to send the visitor after a successful message. */
  THANKS_URL: string;
  /** Var. Where the "back to the form" link on the error page points. */
  CONTACT_URL: string;
  /** Optional KV namespace used to rate-limit by IP. */
  RATE?: KV;
}

export const LIMITS = { name: 100, email: 200, subject: 150, message: 5000, body: 20_000 } as const;
const RATE_LIMIT = 5; // messages per IP
const RATE_WINDOW_SECONDS = 3600; // per hour

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Sends one message. In production this is the SMTP sender; tests pass a stub. */
export type SendFn = (mail: Mail) => Promise<void>;

function oneLine(value: string): string {
  const separators = new RegExp("[" + "\\r\\n" + String.fromCharCode(0x2028, 0x2029) + "]+", "g");
  return value.replace(separators, " ").trim();
}

function errorPage(status: number, contactUrl: string): Response {
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Message not sent - Goti Adarian</title>
<style>body{margin:0;font-family:system-ui,sans-serif;background:#f9f6f1;color:#223a5e;display:grid;min-height:100vh;place-items:center;padding:24px}
main{max-width:34rem}h1{font-family:Georgia,serif;font-weight:400;font-size:2rem;margin:0 0 16px}a{color:#223a5e}</style></head>
<body><main><h1>Your message could not be sent</h1>
<p>Sorry about that. Please call <a href="tel:+917573013336">+91 7573013336</a> or write to
<a href="mailto:contact@gotiadarian.com">contact@gotiadarian.com</a>.</p>
<p><a href="${contactUrl}">Back to the contact page</a></p></main></body></html>`;
  return new Response(html, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

function redirect(url: string): Response {
  return new Response(null, { status: 303, headers: { location: url, "cache-control": "no-store" } });
}

function requestOrigin(request: Request): string | null {
  const origin = request.headers.get("origin");
  if (origin) return origin;
  const referer = request.headers.get("referer");
  if (!referer) return null;
  try {
    return new URL(referer).origin;
  } catch {
    return null;
  }
}

async function overRateLimit(env: Env, ip: string): Promise<boolean> {
  if (!env.RATE) return false;
  const key = `rl:${ip}`;
  const count = Number((await env.RATE.get(key)) ?? "0");
  if (count >= RATE_LIMIT) return true;
  await env.RATE.put(key, String(count + 1), { expirationTtl: RATE_WINDOW_SECONDS });
  return false;
}

export async function handle(request: Request, env: Env, send: SendFn): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
  }
  if (requestOrigin(request) !== env.ALLOWED_ORIGIN) {
    return new Response("Forbidden", { status: 403 });
  }
  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > LIMITS.body) return errorPage(413, env.CONTACT_URL);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return errorPage(400, env.CONTACT_URL);
  }

  // Hidden trap field: real visitors never fill it. Pretend success so bots learn nothing.
  if (String(form.get("website") ?? "").trim() !== "") return redirect(env.THANKS_URL);

  const name = oneLine(String(form.get("name") ?? ""));
  const email = oneLine(String(form.get("email") ?? ""));
  const subject = oneLine(String(form.get("subject") ?? ""));
  const message = String(form.get("message") ?? "").replace(/\r\n/g, "\n").trim();

  const valid =
    name !== "" &&
    name.length <= LIMITS.name &&
    EMAIL_RE.test(email) &&
    email.length <= LIMITS.email &&
    subject !== "" &&
    subject.length <= LIMITS.subject &&
    message !== "" &&
    message.length <= LIMITS.message;
  if (!valid) return errorPage(400, env.CONTACT_URL);

  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  if (await overRateLimit(env, ip)) return errorPage(429, env.CONTACT_URL);

  const to = [env.MAIL_TO, env.MAIL_CC].filter((a): a is string => Boolean(a && a.trim()));
  const text = [
    "New message from the website contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message,
    "",
  ].join("\n");

  try {
    await send({ fromName: "Goti Adarian Website", to, replyTo: email, subject: `[Website] ${subject}`, text });
  } catch (error) {
    console.error("contact: could not send the message", error instanceof Error ? error.message : "unknown");
    return errorPage(502, env.CONTACT_URL);
  }
  return redirect(env.THANKS_URL);
}
