import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company = "N/A", email, phone = "N/A", message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing required fields." }), {
        status: 400,
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "jackson@adapt22.ai",
      to: "jackson@adapt22.ai",
      subject: "New Contact Form Submission - Adapt22",
      text: `
New Contact Submission:

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}

Message:
${message}
      `.trim(),
    });

    return new Response(JSON.stringify({ success: true, data: response }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}