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
              Your business keeps moving.
              <br />
              Your technology should, too.
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
              adapt22 helps you make the next decision, connect the systems you
              depend on, and build what’s missing. From fractional leadership to
              hands-on development, the work starts with how your business
              actually runs.
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
            <p className="eyebrow">What we do / 01—06</p>
            <h2>
              Direction.
              <br />
              Then delivery.
            </h2>
          </div>
          <p>
            One partner to see the whole picture
            <br />
            and help move the right work forward.
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
          src="/images/forest.jpg"
          alt="Sunlight falling through a dense green forest"
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
          <p>Good decisions account for what comes after them.</p>
        </div>
      </section>
      <section className="method section">
        <div>
          <p className="eyebrow">The adapt22 approach</p>
          <h2>
            Made to work.
            <br />
            Built to last.
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
              "Get the right things in place. Understand the problem, agree on the plan, and build with the people who will use it.",
            ],
            [
              "02",
              "Manage",
              "Give the work a clear owner. Document the systems, support the people, and make sure the everyday details hold up.",
            ],
            [
              "03",
              "Scale",
              "Prepare for the next chapter. Improve what works, address what doesn’t, and make room for the business to grow.",
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
          The point is to make the business work better. The technology is how
          we get there.
        </p>
        <div>
          <span>Jackson McConnell</span>
          <span>Founder, adapt22</span>
          <Link href="/about" className="text-link">
            Meet Jackson <Arrow />
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
