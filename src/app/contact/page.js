import { PageIntro } from "../../components/Shared";
import ContactForm from "../../components/ContactForm";
import { calendlyUrl } from "../../lib/content";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Start a conversation",
  description:
    "Talk with Jackson McConnell about your next technology decision, custom software project, or business change.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  const ready = Boolean(
    process.env.RESEND_API_KEY &&
    process.env.TURNSTILE_SECRET_KEY &&
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN,
  );
  return (
    <>
      <PageIntro
        label="Let’s talk"
        title={
          <>
            Start with
            <br />
            what’s on your mind.
          </>
        }
        description="You don’t need a finished brief. Tell us what you need help with, from a Salesforce issue to finding a team that can take care of your technology."
      />
      <section className="contact-layout section">
        <div className="contact-options">
          <div>
            <h2>
              Let’s talk about
              <br />
              what you need.
            </h2>
            <p>
              Book a conversation with Jackson. We’ll talk about what is on your
              plate, where you need help, and whether our team is the right fit.
            </p>
            <a
              className="button"
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find a time to talk <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens Calendly in a new tab)</span>
            </a>
          </div>
          <div>
            <p className="eyebrow">Prefer email?</p>
            <a href="mailto:info@adapt22.ai">info@adapt22.ai ↗</a>
          </div>
        </div>
        <ContactForm
          enabled={ready}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
        />
      </section>
    </>
  );
}
