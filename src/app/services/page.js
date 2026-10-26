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
        description="Sometimes you need direction. Sometimes you need someone to build. Often, you need both. We connect the business decision to the work it takes to deliver it."
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
      </section>
      <CTA />
    </>
  );
}
