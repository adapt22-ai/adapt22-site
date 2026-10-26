"use client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function SiteAnalytics() {
  return (
    <>
      <Analytics
        beforeSend={(event) => ({
          ...event,
          url: event.url.split("?")[0].split("#")[0],
        })}
      />
      <SpeedInsights />
    </>
  );
}
