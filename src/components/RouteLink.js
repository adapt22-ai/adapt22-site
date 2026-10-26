"use client";
import Link from "next/link";
export default function RouteLink({ href, onClick, ...props }) {
  const anchor = typeof href === "string" && href.includes("#");
  return (
    <Link
      {...props}
      href={href}
      scroll={anchor}
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
