import Link from "@/components/RouteLink";
import { services, serviceGroups } from "../../lib/content";
import { PageIntro, CTA, Arrow } from "../../components/Shared";
export const metadata = {
  title: "Services",
  description:
    "Embedded technology leadership, applied AI, and business systems delivery, with the specialist capabilities to carry the roadmap through.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <>
      <PageIntro
        label="What we do"
        image="/images/coast.jpg"
        imageAlt="Slate ocean water and a pale horizon"
        title={
          <>
            The right work.
            <br />
            Done properly.
          </>
        }
        description="We take responsibility for the technology function: setting the roadmap, leading the people and providers, and carrying the work through. AI, Salesforce, data, and delivery sit inside that wider business responsibility."
      />
      <section className="service-overview section">
        <p className="eyebrow">One partnership, with the depth to deliver</p>
        <h2>
          Three connected areas.
          <br />
          One accountable team.
        </h2>
        <div>
          {serviceGroups.map((g) => (
            <article key={g.id}>
              <h3>{g.title}</h3>
              <p>{g.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="business-systems" className="service-grid section">
        {services.map((s, i) => (
          <article key={s.slug} data-service={s.slug}>
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
