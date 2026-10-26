import Image from "next/image";
import Link from "next/link";
import { services } from "../lib/content";
import { Arrow, CTA } from "../components/Shared";
import Mark from "../components/Mark";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/landscape.jpg"
          alt="Mountain ridges receding into a broad, open horizon"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">
            <span className="tiny-cross">+</span> Independent thinking.
            Practical technology.
          </p>
          <h1>
            Built for what
            <br />
            comes <em>next.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Technology consulting, custom software,
              <br />
              Salesforce, and ongoing support.
            </p>
            <Link href="/services" className="button button-light">
              Explore what we do <Arrow />
            </Link>
          </div>
        </div>
        <div className="hero-caption">
          <span>ADAPT / EVOLVE / MOVE FORWARD</span>
          <a href="#perspective">
            A different perspective <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section id="perspective" className="perspective section">
        <p className="eyebrow">The business comes first.</p>
        <div>
          <h2>
            You don’t need
            <br />
            more technology.
            <br />
            <span>You need it to work.</span>
          </h2>
          <div className="perspective-copy">
            <p>
              Too many tools. Too much manual work. A plan that made sense three
              years ago.
            </p>
            <p>
              We work as part of your team and take ownership of the technology,
              data, systems, and AI work you bring to us. We coordinate the
              vendors, make a plan, and carry it through. You stay in control
              without having to manage every technical detail.
            </p>
            <Link href="/approach" className="text-link">
              How we work <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="services-home section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do / 01–07</p>
            <h2>
              Your technology.
              <br />
              Our responsibility.
            </h2>
          </div>
          <p>
            A team to plan, build, and manage it.
            <br />
            So it stops landing back on your desk.
          </p>
        </div>
        <div className="service-list">
          {services.map((s, i) => (
            <Link
              href={"/services/" + s.slug}
              key={s.slug}
              className="service-row"
            >
              <span className="service-number">0{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </div>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <section className="nature-break">
        <Image
          src="/images/ridges.jpg"
          alt="Muted mountain ridges receding into mist"
          fill
          sizes="100vw"
        />
        <div>
          <p className="eyebrow">A longer view</p>
          <h2>
            Make the next move.
            <br />
            Keep the whole
            <br />
            picture in view.
          </h2>
          <p>
            A practical roadmap. Clear priorities. A team that stays involved.
          </p>
        </div>
      </section>
      <section className="method section">
        <div>
          <p className="eyebrow">The adapt22 approach</p>
          <h2>
            We build it.
            <br />
            We stay with it.
          </h2>
          <Link className="text-link" href="/approach">
            A closer look <Arrow />
          </Link>
        </div>
        <div className="method-steps">
          {[
            [
              "01",
              "Implement",
              "Understand the business, agree the priorities, and put the right systems in place. Start with an intentional roadmap, not a shopping list of tools.",
            ],
            [
              "02",
              "Manage",
              "We take responsibility for the agreed technology scope. Systems, vendors, data, and support have an owner your team can turn to.",
            ],
            [
              "03",
              "Scale",
              "Keep improving as the business changes. We review the roadmap together and plan for new locations, acquisitions, new services, or an eventual exit.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="founder-note section">
        <Mark />
        <p>
          One team to call when it involves technology. A plan for what comes
          next.
        </p>
        <div>
          <span>Founder-led. Team-delivered.</span>
          <span>Working as part of your business.</span>
          <Link href="/about" className="text-link">
            Meet adapt22 <Arrow />
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
