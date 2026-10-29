# Contact form handler

A small Cloudflare Worker that receives the contact form on gotiadarian.com, checks it, emails it through Resend, and sends the visitor to the thank-you page.

- `src/handler.ts`: the logic (validation, trap field, rate limit, email).
- `src/index.ts`: the Worker entry point.
- `test/handler.test.ts`: unit tests. Run `npm test`.
- `wrangler.toml`: public settings only. Secrets are set with `wrangler secret put` and are never stored in this repository.

## Secrets (set with `npx wrangler secret put NAME`)
| Name | What it is |
| --- | --- |
| `RESEND_API_KEY` | API key from Resend |
| `MAIL_TO` | main recipient |
| `MAIL_CC` | optional second recipient |

## Local development
Create a `.dev.vars` file (ignored by git) with the three secrets, then `npm run dev`.

## Deploy
`npm run deploy`
