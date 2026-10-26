import { services } from "../lib/content";
export default function sitemap() {
  return [
    "",
    "/services",
    "/approach",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/accessibility",
    ...services.map((s) => "/services/" + s.slug),
  ].map((path) => ({ url: "https://adapt22.ai" + path }));
}
