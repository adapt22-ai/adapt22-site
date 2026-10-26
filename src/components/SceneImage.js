import images from "../lib/image-manifest.json";

// Static, fingerprinted variants avoid a cold on-demand resize on first visit.
export default function SceneImage({
  src,
  mobileImage,
  alt,
  className = "",
  eager = false,
}) {
  const image = images[src];
  const mobile = mobileImage ? images[mobileImage] : null;
  return (
    <>
      {eager && (
        <>
          <link
            rel="preload"
            as="image"
            href={image.src}
            imageSrcSet={image.srcSet}
            imageSizes="100vw"
            media={mobile ? "(min-width: 701px)" : undefined}
            fetchPriority="high"
          />
          {mobile && (
            <link
              rel="preload"
              as="image"
              href={mobile.src}
              imageSrcSet={mobile.srcSet}
              imageSizes="100vw"
              media="(max-width: 700px)"
              fetchPriority="high"
            />
          )}
        </>
      )}
      <picture>
        {mobile && (
          <source
            media="(max-width: 700px)"
            srcSet={mobile.srcSet}
            sizes="100vw"
          />
        )}
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          width={image.width}
          height={image.height}
          alt={alt}
          className={className}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("${image.placeholder}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </picture>
    </>
  );
}
