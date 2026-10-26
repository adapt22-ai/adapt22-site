import Link from "@/components/RouteLink";
import { PageIntro, CTA, Arrow } from "../../components/Shared";
import { faqs } from "../../lib/content";
export const metadata = {
  title: "Our approach",
  description:
    "A technology team that works as part of your business. Clear roadmaps, accountable delivery, and ongoing ownership of systems, data, AI, and vendors.",
  alternates: { canonical: "/approach" },
};
const steps = [
  [
    "01",
    "Understand the business.",
    "Talk to the people doing the work. Map the systems, data, providers, and constraints. Understand where the friction is and what the business needs to do next.",
    "A shared view of the problems, risks, and priorities.",
  ],
  [
    "02",
    "Build the roadmap.",
    "Set an intentional sequence. Agree what happens now, what waits, who owns it, what it costs, and which dependencies have to be resolved first.",
    "A practical roadmap you can use to make decisions.",
  ],
  [
    "03",
    "Take responsibility.",
    "Our team coordinates the providers, does the technical work, and tests changes against real workflows. We keep you informed without asking you to manage the technical details.",
    "Clear ownership and working changes, delivered in manageable stages.",
  ],
  [
    "04",
    "Stay and improve.",
    "We manage the agreed systems, support the people using them, and work through the next set of priorities with you. As the business changes, the roadmap changes too.",
    "An ongoing technology partner, not a finished project left on your desk.",
  ],
];
export default function Approach() {
  return (
    <>
      <PageIntro
        label="How we work"
        image="/images/bison.jpg"
        imageAlt="A bison standing in falling snow, framed by muted brown and slate tones"
        className="subject-banner approach-intro"
        title={
          <>
            Your team.
            <br />
            Our responsibility.
          </>
        }
        description="Bring us the technology questions, the data problems, the AI ideas, and the systems nobody wants to deal with. We work as part of your company and take the agreed work off your shoulders."
      />
      <section className="ownership section">
        <div>
          <p className="eyebrow">What the relationship is built on</p>
          <h2>
            You shouldn’t have
            <br />
            to become the
            <br />
            technology expert.
          </h2>
        </div>
        <div>
          <p>
            You need someone who understands the business, owns the detail, and
            follows through. That is the role we take.
          </p>
          <p>
            We bring the people and providers together, turn uncertainty into a
            plan, and stay accountable for the work. You keep authority over
            priorities and spending. We take care of moving the agreed work
            forward.
          </p>
          <ul>
            <li>One team responsible for the agreed scope.</li>
            <li>A roadmap tied to the business.</li>
            <li>Clear updates and decisions, in plain language.</li>
            <li>Ongoing management and support.</li>
          </ul>
        </div>
      </section>
      <section className="approach-steps section">
        <div className="roadmap-heading">
          <p className="eyebrow">Intentional progress</p>
          <h2>
            A roadmap.
            <br />
            And a team to carry it through.
          </h2>
          <p>We make the order of the work as deliberate as the work itself.</p>
        </div>
        {steps.map(([n, t, d, r]) => (
          <article key={n}>
            <span className="step-number">{n}</span>
            <h3>{t}</h3>
            <div>
              <p>{d}</p>
              <p className="deliverable">{r}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="engagements section">
        <p className="eyebrow">Ways to begin</p>
        <h2>Start where the business needs us.</h2>
        <div>
          {[
            [
              "A focused assessment",
              "Get clarity on a system, a technology decision, or an upcoming acquisition before committing to a larger piece of work.",
            ],
            [
              "A defined project",
              "Build, connect, migrate, or improve something specific, with the scope and ongoing ownership agreed from the start.",
            ],
            [
              "An ongoing partnership",
              "Bring us in as your technology team or fractional leadership. We own the agreed priorities, support the business, and keep the roadmap moving.",
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="text-link">
          Talk through the right starting point <Arrow />
        </Link>
      </section>
      <section id="questions" className="faq section">
        <p className="eyebrow">Before we begin</p>
        <h2>A few useful answers.</h2>
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <CTA />
    </>
  );
}
