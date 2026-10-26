import { Resend } from "resend";
import { handleContact } from "../../../lib/contact.mjs";
export const runtime = "nodejs";
export async function POST(req) {
  return handleContact(req, {
    send: (payload, options) =>
      new Resend(process.env.RESEND_API_KEY).emails.send(payload, options),
  });
}
