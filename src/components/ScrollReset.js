"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
export default function ScrollReset() {
  const path = usePathname();
  useLayoutEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const frame = requestAnimationFrame(() => {
      if (!location.hash)
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [path]);
  return null;
}
