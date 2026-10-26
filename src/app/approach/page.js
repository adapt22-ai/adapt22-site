import Image from "next/image";
import { PageIntro, CTA } from "../../components/Shared";
import { faqs } from "../../lib/content";
export const metadata = {
  title: "Our approach",
  description:
    "A practical path from understanding the business to implementation, ownership, and measured improvement.",
  alternates: { canonical: "/approach" },
};
export default function Approach() {
  return (
    <>
      <PageIntro
        label="How we work"
        title={
          <>
            Understand first.
            <br />
            Build with purpose.
          </>
        }
        description="A useful plan makes the tradeoffs clear. A useful partner stays close enough to the work to know when the plan needs to change."
      />
      <section className="approach-steps section">
        {[
          [
            "01",
            "Get the full picture.",
            "Listen to the people doing the work. Map the systems, constraints, and business priorities. Separate the urgent symptom from the underlying problem.",
            "A shared view of the problem and what a better outcome looks like.",
          ],
          [
            "02",
            "Agree on the next move.",
            "Compare the options, including improving what you already have. Define the scope, costs, dependencies, and who owns each decision.",
            "A defined plan with clear deliverables and responsibilities.",
          ],
          [
            "03",
            "Build, connect, and test.",
            "Deliver in manageable stages. Test with real workflows, make the risks visible, and involve the people who will use the system.",
            "Working changes, tested against agreed requirements.",
          ],
          [
            "04",
            "Make it stick.",
            "Document the system. Train the team. Agree how support, maintenance, and future changes will work. Revisit the priorities as the business changes.",
            "A clear handover and a practical plan for what comes next.",
          ],
        ].map(([n, t, d, r]) => (
          <article key={n}>
            <span className="step-number">{n}</span>
            <h2>{t}</h2>
            <div>
              <p>{d}</p>
              <p className="deliverable">{r}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="wildlife-panel">
        <Image
          src="/images/wildlife.jpg"
          alt="Deer standing quietly in a forest clearing"
          fill
          sizes="100vw"
        />
        <p>Observe. Understand. Then move.</p>
      </section>
      <section className="engagements section">
        <p className="eyebrow">Ways to work together</p>
        <h2>A scope that fits the need.</h2>
        <div>
          {[
            [
              "A focused assessment",
              "Get a clear view of a system, a technology decision, or an upcoming business change before committing to a larger piece of work.",
            ],
            [
              "A defined project",
              "Build, connect, migrate, or improve something specific, with deliverables and responsibilities agreed before work begins.",
            ],
            [
              "Ongoing leadership",
              "Bring experienced technology judgment into the business on a fractional basis, with time and scope shaped around your priorities.",
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
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
