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
        description="You don’t need a finished brief. Tell us what is changing, what is getting in the way, or what you want the business to be able to do."
      />
      <section className="contact-layout section">
        <div className="contact-options">
          <div>
            <h2>
              A conversation,
              <br />
              without the pitch.
            </h2>
            <p>
              Book a time with Jackson. We’ll talk about your situation, ask a
              few questions, and work out whether there’s a useful next step.
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
            <a href="mailto:jackson@adapt22.ai">jackson@adapt22.ai ↗</a>
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
