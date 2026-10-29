# Contact form handler

A small Cloudflare Worker that receives the contact form on gotiadarian.com, checks it, sends it by email through the temple's own mailbox (SMTP), and sends the visitor to the thank-you page. No third-party email service and no libraries.

- `src/handler.ts`: the logic (origin check, trap field, validation, rate limit).
- `src/smtp.ts`: a minimal SMTP client (EHLO, STARTTLS, AUTH PLAIN, MAIL FROM, RCPT TO, DATA).
- `src/index.ts`: the Worker entry point; opens the socket with `cloudflare:sockets`.
- `test/`: unit tests, including a mock SMTP server. Run `npm test`.
- `wrangler.toml`: public settings only. Secrets are set with `wrangler secret put` and are never stored in this repository.

Workers cannot use port 25. Use 465 (implicit TLS) or 587 (STARTTLS) via `SMTP_PORT`.

## Secrets (set with `npx wrangler secret put NAME`)
| Name | What it is |
| --- | --- |
| `SMTP_PASS` | password of the mailbox named in `SMTP_USER` |
| `MAIL_TO` | main recipient |
| `MAIL_CC` | optional second recipient |

## Local development
Create a `.dev.vars` file (ignored by git) with the three secrets, then `npm run dev`.

## Deploy
`npm run deploy`
