import SceneImage from "./SceneImage";
import Link from "@/components/RouteLink";
import Arrow from "./Arrow";
export { Arrow };
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
            A business without a technology leader. An acquisition that needs a
            systems plan. An AI initiative that needs an owner. Let’s talk about
            what you need us to take on.
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
  mobileImage,
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
          <SceneImage
            src={image}
            mobileImage={mobileImage}
            alt={imageAlt}
            eager
          />
        </div>
      )}
    </section>
  );
}
