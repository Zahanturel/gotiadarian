import { connect } from "cloudflare:sockets";
import { handle, type Env } from "./handler.ts";
import { sendMail, type ConnectFn } from "./smtp.ts";

const openSocket: ConnectFn = (host, port, secure) =>
  connect({ hostname: host, port }, { secureTransport: secure });

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    const port = Number(env.SMTP_PORT || "465");
    return handle(request, env, (mail) => {
      if (!env.SMTP_PASS) return Promise.reject(new Error("smtp: SMTP_PASS is not set"));
      return sendMail(
        {
          host: env.SMTP_HOST,
          port,
          user: env.SMTP_USER,
          pass: env.SMTP_PASS,
          mode: port === 465 ? "tls" : "starttls",
        },
        mail,
        openSocket,
      );
    });
  },
};
