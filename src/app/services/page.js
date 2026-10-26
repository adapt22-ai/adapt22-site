import Link from "next/link";
import { services } from "../../lib/content";
import { PageIntro, CTA, Arrow } from "../../components/Shared";
export const metadata = {
  title: "Services",
  description:
    "Custom software, fractional technology leadership, applied AI, enterprise modernization, integrations, and transaction readiness.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <>
      <PageIntro
        label="What we do"
        title={
          <>
            The right work.
            <br />
            Done properly.
          </>
        }
        description="We plan, build, connect, and manage your technology. From Salesforce and custom software to AI and ongoing leadership, our team takes responsibility for getting the work done."
      />
      <section className="service-grid section">
        {services.map((s, i) => (
          <article key={s.slug}>
            <span className="eyebrow">0{i + 1} /</span>
            <h2>
              <Link href={"/services/" + s.slug}>{s.title}</Link>
            </h2>
            <p>{s.description}</p>
            <ul>
              {s.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <Link className="text-link" href={"/services/" + s.slug}>
              Explore this service <Arrow />
            </Link>
          </article>
        ))}
      </section>
      <section className="section scope-note">
        <div>
          <p className="eyebrow">Start with the problem</p>
          <h2>
            You don’t have to know
            <br />
            what to ask for yet.
          </h2>
          <p>
            Tell us what is slowing you down or what is about to change. We’ll
            help define the work before recommending the tools.
          </p>
        </div>
        <div className="scope-examples">
          <p className="eyebrow">These are all good starting points</p>
          <ul>
            <li>“We have Salesforce, but nobody owns it.”</li>
            <li>“Our team keeps entering the same data twice.”</li>
            <li>“We’re acquiring a business. What needs to connect?”</li>
            <li>“I need technology off my plate.”</li>
          </ul>
          <Link href="/contact" className="text-link">
            Let’s work through it <Arrow />
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
