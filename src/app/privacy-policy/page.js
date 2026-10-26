export const metadata = {
  title: "Privacy notice",
  description: "How information submitted through the adapt22 website is used.",
  alternates: { canonical: "/privacy-policy" },
};
export default function Privacy() {
  return (
    <article className="section legal">
      <p className="eyebrow">Website information / October 25, 2026</p>
      <h1>Privacy notice</h1>
      <p>
        This notice describes the information handled by this website. Questions
        or privacy requests can be sent to{" "}
        <a href="mailto:jackson@adapt22.ai">jackson@adapt22.ai</a>.
      </p>
      <h2>Information you choose to provide</h2>
      <p>
        The contact form asks for your name, email address, an optional company
        name, and your message. These details are used to respond to your
        inquiry and discuss potential work. Please do not submit passwords,
        confidential records, or sensitive personal information.
      </p>
      <h2>Contact delivery and abuse prevention</h2>
      <p>
        When enabled, Resend processes contact messages for email delivery.
        Cloudflare Turnstile checks form submissions to reduce automated abuse.
        A short-lived rate-limit record is stored with Upstash using a hashed
        network identifier, rather than a raw IP address. The record expires
        after ten minutes. Delivery providers may process technical information
        under their own policies.
      </p>
      <h2>Scheduling</h2>
      <p>
        The booking link opens Calendly, where you choose whether to provide
        scheduling details. Calendly handles that information under its own{" "}
        <a
          href="https://calendly.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy notice
        </a>
        . The scheduling service is not embedded on this site.
      </p>
      <h2>Hosting and measurement</h2>
      <p>
        Vercel hosts the website and may process technical request data for
        hosting and security. The production configuration includes Vercel Web
        Analytics and Speed Insights to understand page usage and performance.
        Analytics are disabled in development and preview builds. Query strings
        and fragments are removed from Web Analytics page URLs by this site.
      </p>
      <h2>Use, access, and retention</h2>
      <p>
        Inquiry information is intended for responding to you and evaluating a
        working relationship. Access and deletion requests can be sent to
        Jackson at the address above. Retention of correspondence and provider
        logs depends on the systems in which it is held; contact Jackson for
        questions about a specific record.
      </p>
      <h2>Changes to this notice</h2>
      <p>
        This notice may be updated as the website and its services change. The
        date above identifies this version.
      </p>
    </article>
  );
}
