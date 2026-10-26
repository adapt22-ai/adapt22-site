"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import heroIntents from "../lib/hero-intents.json";
const warmed = new Set();
function warmHero(href) {
  if (
    typeof href !== "string" ||
    !href.startsWith("/") ||
    navigator.connection?.saveData
  )
    return;
  const route = href.split("#")[0];
  const scene =
    heroIntents[route] ||
    (route.startsWith("/services/") ? heroIntents["/about"] : null);
  if (!scene) return;
  const photo =
    scene.mobile && matchMedia("(max-width: 700px)").matches
      ? scene.mobile
      : scene;
  if (warmed.has(photo.src)) return;
  warmed.add(photo.src);
  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = "low";
  image.sizes = "100vw";
  image.srcset = photo.srcSet;
  image.src = photo.src;
}
export default function RouteLink({
  href,
  onClick,
  onPointerEnter,
  onFocus,
  ...props
}) {
  const router = useRouter();
  function warm() {
    if (
      typeof href === "string" &&
      href.startsWith("/") &&
      !href.includes("#") &&
      !navigator.connection?.saveData
    )
      router.prefetch(href);
    warmHero(href);
  }
  const anchor = typeof href === "string" && href.includes("#");
  return (
    <Link
      prefetch={false}
      {...props}
      href={href}
      scroll={anchor}
      onPointerEnter={(event) => {
        onPointerEnter?.(event);
        warm();
      }}
      onFocus={(event) => {
        onFocus?.(event);
        warm();
      }}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        )
          return;
        if (
          !anchor &&
          typeof href === "string" &&
          new URL(href, location.href).pathname === location.pathname
        )
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }}
    />
  );
}
