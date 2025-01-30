import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, company, email, phone, message } = await req.json();

    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const response = await resend.emails.send({
      from: "jackson@adapt22.ai", // This must match an authorized sender in Resend
      to: "jackson@adapt22.ai", // This is where the form submissions go
      subject: "New Contact Form Submission - Adapt22",
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, data: response }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
