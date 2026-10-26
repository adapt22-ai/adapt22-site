# Website 3.0 prelaunch audit

October 26, 2026. Development branch: `website-3-rebrand`. Draft PR: https://github.com/adapt22-ai/adapt22-site/pull/2 . This audit does not authorize a production release, main merge, live configuration change, DNS edit, real email, or booking.

## Setup follow-up
The owner subsequently authorized the contact setup, free-tier Redis integration, SPF repair and one real delivery test. These are completed and verified on protected staging; see CONTACT_SETUP.md. The missing-service/SPF findings below describe the earlier audit state. Production release remains separately gated, including the actual Cloudflare proxy client-IP path and remaining account/business acceptance checks.

## Original audit decision

The approved design and content are ready for final staging review after the fixes below. **Production acceptance remains blocked by contact infrastructure, a missing sending-domain SPF record, and an actual delivery test.** Provider access and code are not evidence of successful delivery. See LAUNCH_CHECKLIST.md for the release sequence.

The owner confirmed that info@adapt22.ai is an alias delivering to Jackson and that Calendly should keep its current Eastern-time schedule. Public pages continue to omit email addresses and mailto links.

## Implemented in this audit

- Prepared responsive, fingerprinted WebP variants of all seven active landscape/wildlife compositions. First-paint image placeholders are embedded in the HTML. The source photos and approved crops remain intact.
- Hero images load eagerly with responsive preload hints. The bison's desktop and mobile preloads have mutually exclusive media conditions. Below-fold ridge imagery stays lazy. This avoids a first-request image transformation and the former duplicate bison fetch.
- Navigation warms images and route data on pointer/focus intent instead of speculatively preloading every visible navigation destination. Save-Data connections skip the explicit warmup. Immutable caching is limited to fingerprinted assets.
- Services, Approach, About, Contact, and photographic service-detail banners now share the homepage heading/image entrance timing. Existing reduced-motion overrides disable decorative animation.
- Strengthened photograph shading where actual text-position contrast sampling found weak contrast. The approved photographs remain recognizable. No color palette or layout redesign.
- Repaired narrow-screen enlarged-text grid overflow. The skip link now has a reliably focusable main destination; successful form submission moves focus to the confirmation heading.
- Removed query strings and fragments from Speed Insights events as well as Web Analytics events. Analytics remain production-only; no inquiry payload is tracked.
- Matched canonical URLs, structured business URL, robots sitemap URL, and sitemap entries to the verified primary `www.adapt22.ai` host. Apex already redirects to www; no domain settings changed.
- Linked directly to the active 45-minute discovery-call event. Tightened repeated introductions and shared CTA wording, corrected the terms opening sentence, and kept owner authority explicit.
- Added a pinned, least-privilege GitHub Actions workflow: unit tests, build, Chromium/WebKit browser checks, stubbed delivery. No deployment credentials, provider secrets, real submissions, or production release action.

## Copy and information architecture

Professional assessment: the site is not excessively wordy. Keep the seven capabilities. The homepage's three connected areas provide the short explanation; Services provides the buying detail; service pages answer specific needs. Removing a capability would obscure useful scope rather than simplify the business.

Rendered main-content word counts after edits, excluding header/footer: Home 409; Services 687; Approach 500 with FAQs closed; About 370; Contact 137. Service-detail pages are roughly 170–200 words. These are browser text counts, not reading-time or SEO claims. Expanded FAQ answers naturally add words. All seven service cards retain exactly four bullets. No major section was removed or merged; the ownership/roadmap/long-term relationship sections answer different buyer questions.

Reviewed headings, paragraphs, bullet parallelism, CTA destinations, spelling, terminology, and owner-submitted biography. Main-page copy has no em dashes. Salesforce, IT/hardware/identity/networks, business separations, acquisition/expansion/exit readiness, AI, and custom applications remain explicit. No invented employee names, certifications, clients, numerical results, or testimonials were introduced. Founder experience and team positioning remain owner-provided statements, not independently verified credentials. No unsupported headcount claim is made.

## Verification and limits

Local browser coverage includes 16 routes (15 public plus private brand review), eight Chromium/WebKit desktop/tablet/phone configurations, 320px reflow, portrait/landscape, image completion, browser errors, page-top navigation, anchors, four-bullet consistency, equal interior banners, reduced motion, keyboard menu/FAQ/skip-link activation, and stubbed form waiting/sending/error/success states. Final exact results and preview URL are recorded in IMPLEMENTATION_STATUS.md.

- All 16 distinct public internal link destinations, including the business-systems anchor, returned 200 with valid targets. Six external scheduling/privacy destinations returned 200; Calendly's privacy URL was updated to its final destination. Legacy redirects and helpful 404 are covered by browser checks.
- Automated axe checks target WCAG 2 A/AA, 2.1 AA, and 2.2 AA tags. Narrow 320px viewport covers the CSS reflow equivalent of a 1280px viewport at 400% zoom. Additional increased line, letter, word, and paragraph spacing was checked on the five principal pages at 320px and 640px. No horizontal overflow or clipped banner copy remained.
- Photographic text was separately checked using rendered foreground/background screenshots at 1440px, 390px, and 320px, sampling solid letter positions in the five principal heroes plus homepage captions and ridge copy (60 text regions). Normal text uses the 4.5:1 threshold; large text 3:1. This is a sampled local regression check, not exhaustive certification of every image pixel, browser, motion frame, or screen.
- Chromium Tab order and keyboard activation checked. WebKit's default link-tabbing preference skips links, so its skip link is focused directly before keyboard activation; this does not certify macOS/iOS keyboard preference combinations. Accessibility-tree exposure was inspected; no full VoiceOver/NVDA user session or physical-device certification is claimed.
- Production and full dependency audits reported zero known advisories at the time checked. Security response headers, bounded contact input, same-origin checks, bot verification, atomic rate limiting, safe provider failures, and idempotent sending are implemented and tested with stubs. Dependency advisories can change.

WCAG is the engineering target. An automated pass is **not** a legal ADA-compliance certification or a guarantee against lawsuits. DOJ explains that businesses open to the public have accessibility responsibilities; its guidance does not make this test suite a legal safe harbor. Sources: [DOJ web accessibility guidance](https://www.ada.gov/resources/web-guidance/), [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/). Independent assistive-technology testing and review of actual business privacy practices remain prudent before final acceptance.

### Loading measurements

See the final measurement table in IMPLEMENTATION_STATUS.md. These are repeatable local lab observations using a fresh browser context, disabled browser cache, 390×844 viewport, approximately 1.6 Mbps download, 150 ms simulated latency, and 4× CPU slowdown. They are not production field Core Web Vitals or a Lighthouse score. Local document TTFB is only a few milliseconds; the old image-transform cache was already warm. The new static images specifically remove that transformation from first visit. Connection speed still determines full-resolution image arrival; the inline placeholder avoids an empty scene while it loads.

Implementation references: [Next.js Image guidance](https://nextjs.org/docs/pages/api-reference/components/image), [React picture/image preload behavior](https://react.dev/reference/react-dom/components/img). Original and derived asset provenance is in ASSETS.md.

## Connected services: verified facts and remaining work

### Vercel and SEO

Correct project/team and development branch; all previews protected by Vercel Authentication. Existing www domain is verified and reported `misconfigured: false`; apex is a verified 308 redirect to www. Current production/main remains unchanged. Staging is intentionally noindex and disallows crawling. Production must be a fresh production-environment build, not a promoted preview; otherwise preview noindex, missing analytics, and baked form configuration may persist.

Metadata, canonical URLs, sitemap, structured business data, icon/manifest/social assets, redirects, 404, legal links, security headers, and public-email exclusion are covered. Search Console ownership/submission and any Bing account were not verified. Submit the www sitemap after release, inspect indexing, and monitor genuine traffic/errors after launch. No ranking guarantee or fabricated structured reviews.

Only the environment-variable names and target scopes were inspected. EMAIL_FROM, EMAIL_TO, and RESEND_API_KEY exist for development/preview/production; their secret values were not decrypted. Both Turnstile settings and both Upstash settings are absent. No connected rate-store integration was returned.

### Cloudflare / DNS

Zone and parent nameserver delegation point to Cloudflare. Web apex A and www CNAME currently proxy through Cloudflare to accepted Vercel targets. TLS is strict, HTTPS redirects enabled, Brotli/HTTP2/HTTP3 enabled, Rocket Loader off. No custom cache-everything rule was observed. Minimum TLS remains 1.0; recommend evaluating 1.2 at the approved live-configuration change. DNSSEC is disabled; enabling requires coordinated registrar DS configuration, not just toggling one side.

**Required DNS repair, not performed:** add TXT at `send.adapt22.ai` with `v=spf1 include:amazonses.com ~all` (DNS-only TXT, automatic TTL). The send MX and resend DKIM exist, but this SPF TXT is absent from both Cloudflare inventory and a live DNS lookup. Resend reports the domain/record verified, which conflicts with current DNS and appears stale. Recheck authoritative DNS and provider verification after the approved repair. Do not overwrite Google's separate apex SPF or duplicate SPF records.

Two stale apex NS records inside the zone still refer to registrar-servers.com, while parent delegation correctly uses Cloudflare. Review/remove those obsolete in-zone records in an approved DNS cleanup; this is not evidence of a current outage. Existing Google mail MX/SPF/DKIM and DMARC quarantine remain unchanged.

Cloudflare proxying in front of Vercel adds a routing layer. The contact limiter trusts Vercel's forwarded client address; verify that it represents the visitor and does not group a Cloudflare edge address before acceptance. Prefer a coordinated DNS-only web-record configuration or a deliberately validated proxy architecture, not blindly trusting arbitrary forwarded headers. [Vercel proxy guidance](https://vercel.com/kb/guide/can-i-use-a-proxy-on-top-of-my-vercel-deployment). Existing older Vercel DNS targets remain accepted; moving to newer recommended targets is optional, not a demonstrated outage.

No Cloudflare settings or DNS records changed. No Turnstile widgets currently exist in this account.

### Resend / contact

adapt22.ai is listed verified with sending enabled, receiving disabled, US East region, and tracking disabled. The DNS discrepancy above still needs repair. Existing credential presence does not prove scope, sender authorization, recipient value, mailbox delivery, or spam placement. The owner's info@ alias confirmation establishes the intended destination only.

Configure Turnstile and a shared Upstash Redis rate store securely, with appropriate preview/production hosts and separate environment scopes where practical. Server expects `TURNSTILE_SECRET_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`; browser receives only `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. No secrets belong in chat, source, logs, or screenshots. Provider provisioning/secure credential handoff remains unfinished; do not describe this as a working production form. The disabled-form notice is intentional until setup is complete and cannot be accepted for launch. A real, explicitly authorized delivery test must reach the owner's inbox before release. No real mail was sent.

### Calendly

Active event: adapt22 Discovery Call, 45 minutes, Google Meet, direct scheduling URL linked on site. Availability returned bookable slots for the coming week. Eastern timezone and Monday–Saturday 9 a.m.–7 p.m. schedule retained per owner confirmation; Sunday off. Existing required phone field and optional company field unchanged.

One optional intake question still asks specifically about AI implementation. Recommended replacement: “What technology decisions, systems challenges, or business changes would you like to discuss?” This external booking-form wording has not been changed. No booking, invitation, or availability mutation was made.

### GitHub

Draft PR #2 remains on the development branch. CI workflow added without secrets or deployment steps; final hosted workflow execution is recorded separately in IMPLEMENTATION_STATUS.md. Repository rulesets query returned none. Main branch-protection endpoint returned 403 because the connector lacks administration access; **this does not prove that main is unprotected**. An administrator must verify required checks/review and release permissions before merge. No main write or merge occurred.

### Business/legal operating facts

Footer identifies adapt22 LLC and includes privacy, terms, and accessibility links. Notices describe the implemented website behavior without inventing a retention period for correspondence or a legal jurisdiction. Actual retention/deletion handling, provider agreements, applicable privacy obligations, and claim substantiation depend on business operations and cannot be established by browser testing. Review those notices against actual practice before acceptance. No blanket cookie-consent exemption is claimed for every jurisdiction merely because analytics are cookieless.
