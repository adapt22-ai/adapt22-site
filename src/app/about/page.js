import Image from "next/image";
import { PageIntro, CTA } from "../../components/Shared";
import Mark from "../../components/Mark";
export const metadata = {
  title: "Our company & team",
  description:
    "Founder-led technology consulting with a team across product, software, Salesforce, IT, data, and business analysis.",
  alternates: { canonical: "/about" },
};
const disciplines = [
  [
    "Product & delivery",
    "Turn business priorities into a clear scope, roadmap, and delivery plan.",
  ],
  [
    "Technology & IT",
    "Take care of systems, providers, access, and the decisions that keep work moving.",
  ],
  [
    "Software development",
    "Build, connect, test, and maintain the applications your business needs.",
  ],
  [
    "Salesforce & business systems",
    "Make the platforms you depend on fit the way your team works.",
  ],
  [
    "Data & AI",
    "Improve data, reporting, automation, and practical uses of AI.",
  ],
  [
    "Business analysis",
    "Understand the process, ask the right questions, and translate needs into useful work.",
  ],
];
export default function About() {
  return (
    <>
      <PageIntro
        image="/images/summit.jpg"
        className="summit-intro"
        imageAlt="A dark alpine peak surrounded by snow and mist"
        label="The company behind the work"
        title={
          <>
            Led by Jackson.
            <br />
            Delivered by a team.
          </>
        }
        description="You get a direct relationship with our founder and a team that carries the work through. We work alongside your people and take responsibility for the technology scope we agree together."
      />
      <section className="founder section">
        <div className="portrait">
          <div className="portrait-photo">
            <Image
              src="/images/portrait-repair.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 700px) 90vw, 40vw"
              className="portrait-repair"
            />
            <Image
              className="portrait-source"
              src="/headshot.png"
              alt="Jackson McConnell, founder of adapt22, standing with his arms folded"
              width={1086}
              height={1448}
              sizes="(max-width: 700px) 90vw, 40vw"
            />
          </div>
          <p>
            Jackson McConnell <span>Founder / adapt22</span>
          </p>
        </div>
        <div>
          <p className="eyebrow">Business experience. Technical depth.</p>
          <h2>
            Built from both
            <br />
            sides of the table.
          </h2>
          <p>
            Jackson’s experience spans software development, product management,
            private equity, and running and scaling home services and trade
            businesses.
          </p>
          <p>
            That mix shapes how adapt22 works. Technology decisions affect the
            people delivering the work, the leaders responsible for growth, and
            the value of the business itself. A useful solution needs to make
            sense to all three.
          </p>
          <p>
            Jackson leads the client relationship and translates your business
            priorities into the technology plan. The team brings the product,
            engineering, systems, and data skills needed to deliver it. We stay
            close to the day-to-day work instead of leaving you with a
            recommendation and another supplier to manage.
          </p>
          <p className="founder-signoff">
            One accountable relationship. A team behind the work.
          </p>
        </div>
      </section>
      <section className="team-section section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The skills behind the delivery</p>
            <h2>
              Different disciplines.
              <br />
              One working team.
            </h2>
          </div>
          <p>
            The mix follows the work.
            <br />
            The responsibility stays with adapt22.
          </p>
        </div>
        <div className="team-disciplines">
          {disciplines.map(([title, copy], i) => (
            <article key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="values section">
        <p className="eyebrow">The three responsibilities in our mark</p>
        <div className="values-grid">
          <Mark />
          <div>
            <h2>
              Implement.
              <br />
              Manage.
              <br />
              Scale.
            </h2>
            <p>
              The three arms of the triskelion represent connected
              responsibilities. Put the right things in place. Stay responsible
              for them. Keep improving as the business changes.
            </p>
            <p>
              Implementation is the start of the relationship. Our ongoing
              partnerships are built around what comes after it.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
