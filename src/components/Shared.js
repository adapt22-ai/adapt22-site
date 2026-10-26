import Link from "next/link";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function CTA() {
  return (
    <section className="cta section">
      <p className="eyebrow">A good place to start</p>
      <div>
        <h2>
          What’s getting
          <br />
          in your way?
        </h2>
        <div>
          <p>
            A system that no longer fits. A decision that needs a second
            opinion. A business that’s ready for what comes next. Let’s talk it
            through.
          </p>
          <Link href="/contact" className="button">
            Start a conversation <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function PageIntro({ label, title, description }) {
  return (
    <section className="page-intro section">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {description && <p className="intro-copy">{description}</p>}
    </section>
  );
}
