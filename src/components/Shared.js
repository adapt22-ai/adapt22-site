import Image from "next/image";
import Link from "@/components/RouteLink";
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
            A growing business without a technology leader. An acquisition that
            needs a systems plan. An AI initiative that needs an owner. Let’s
            talk about the responsibility you need us to take on.
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
  image = "/images/summit.jpg",
  imageAlt = "A snow-covered mountain summit emerging through mist",
  className = "",
}) {
  return (
    <section
      className={`page-intro section ${image ? "page-banner" : ""} ${className}`}
      style={image ? { "--banner-photo": `url("${image}")` } : undefined}
    >
      <div className="intro-text">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        {description && <p className="intro-copy">{description}</p>}
      </div>
      {image && (
        <div className="intro-image">
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
        </div>
      )}
    </section>
  );
}
