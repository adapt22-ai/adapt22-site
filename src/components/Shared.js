import Image from "next/image";
import Link from "next/link";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function CTA() {
  return (
    <section className="cta section">
      <p className="eyebrow">Let’s take a look together</p>
      <div>
        <h2>
          Tell us what’s
          <br />
          on your plate.
        </h2>
        <div>
          <p>
            A system that keeps breaking. A Salesforce project. A business that
            needs someone to own its technology. Start with what you need help
            with.
          </p>
          <Link href="/contact" className="button">
            Start a conversation <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function PageIntro({
  label,
  title,
  description,
  image = "/images/ridges.jpg",
  imageAlt = "Layers of mountain ridges fading into a blue-gray horizon",
  className = "",
}) {
  return (
    <section
      className={`page-intro section ${image ? "page-intro-split" : ""} ${className}`}
    >
      <div className="intro-text">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        {description && <p className="intro-copy">{description}</p>}
      </div>
      {image && (
        <div className="intro-image">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 700px) 100vw, 42vw"
          />
        </div>
      )}
    </section>
  );
}
