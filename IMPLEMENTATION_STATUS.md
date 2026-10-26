# Implementation status

Updated October 25, 2026 (America/Chicago), after the owner's detailed first-pass review.

## Current revision
Development branch: `website-3-rebrand` in adapt22-ai/adapt22-site. Draft PR: https://github.com/adapt22-ai/adapt22-site/pull/2 . Not merged.

Protected revision 2 preview: https://adapt22-site-ib0vquolh-adapt22s-projects.vercel.app . Implementation commit 50fd68169fae3e9eee085f56e94d807311eb74e8. Deployment dpl_EVPsuRHqTFFxKAY9i31HkqcFux29. The prior first-pass preview remains available separately; immutable deployment URLs do not update in place.

Logo comparison: https://adapt22-site-ib0vquolh-adapt22s-projects.vercel.app/brand-review .

Authenticated checks of home, services, Salesforce detail, approach, About, contact, logo review, and accessibility all returned 200 with noindex/nofollow/noarchive. Anonymous access redirects to Vercel authentication. Main remains at a82280731d2e04b5e1c8b5038b34b2dfcd1b6057.

## Review 2 delivered
- Preserved the homepage mountain and Adapt / evolve / move forward, with explicit consulting/software/Salesforce/support copy.
- Warm sand and parchment reading surfaces, larger service text, balanced photo introductions, and clearer section transitions. Replaced green forest/deer images with muted ridgelines and winter wildlife.
- Seven service pages, including dedicated Salesforce consulting. Preserved the service structure the owner liked.
- Technology ownership, intentional roadmaps, and ongoing partnership now central across home, approach, FAQs, and company copy.
- About uses the founder's full grayscale source photograph and owner-provided software, product, private equity, and trade-business background. Added team disciplines without invented employees or headcounts.
- Public address changed to info@adapt22.ai, including contact sender/recipient and structured metadata. Owner is creating the alias; its forwarding is not independently verified.
- Footer identifies Adapt 22 LLC as supplied by owner, uses lowercase a22, and links privacy, terms, and accessibility.
- Compact sticky navigation with keyboard/anchor offsets; normal positioning on short landscape screens. Updated favicons, Apple icons, and manifest.
- Provisional bronze mark in navigation/footer. `/brand-review` contains three new vector studies for discussion. It is staging-only, not in public navigation or sitemap, and returns 404 in production.
- Removed em dashes from website copy. Replaced preview-specific contact notice with ordinary temporary-unavailability wording.
- Production build refuses missing contact prerequisites, preventing accidental publication of a disabled form.

See docs/REVIEW_2.md for the complete feedback audit and research sources. Original prepared conversation attachments and prior generated logo remain unavailable; reconstruction or approval of the missing artwork is not claimed.

## Verified locally
- Optimized Next.js 16.4.3 build passes after all code and icon changes.
- Production dependency audit reports zero known vulnerabilities.
- 10 contact-handler tests pass using mocked providers. No real email sent.
- 156 Chromium browser checks pass across desktop 1440px, tablet portrait 768px, tablet landscape 1024px, phone 390px, small phone 320px, and phone landscape 844px.
- 52 WebKit browser checks pass at phone and tablet sizes. These are browser-engine/device-viewport checks, not physical device certification.
- Checks cover all page routes, Salesforce detail, logo review, legal/accessibility pages, images, overflow, browser errors, WCAG A/AA automated scans including WCAG 2.2 tags, keyboard menu/FAQ, redirects/404, preview noindex, reduced motion, info email/legal footer, header/anchor positioning, full portrait aspect ratio, and mocked contact success/error/retry.
- Manual visual inspection of desktop, tablet, and phone layouts. Verified hidden skip link becomes visible on keyboard focus while scrolled.
- Production configuration guard was exercised with missing credentials and correctly blocked release.

## External verification and release dependencies
- Calendly account and Resend domain were verified during the initial build. No new booking or delivery test has been performed.
- Vercel project protection rechecked before this revision's push: authentication enabled for all previews. No access-protection settings changed.
- Contact remains fail-closed until Preview-scoped RESEND_API_KEY, NEXT_PUBLIC_TURNSTILE_SITE_KEY, TURNSTILE_SECRET_KEY, UPSTASH_REDIS_REST_URL, and UPSTASH_REDIS_REST_TOKEN are securely configured. Allow the preview hostname in Turnstile. Do not paste secrets into chat.
- Verify the info alias and perform an explicitly authorized delivery test before acceptance of the contact integration.
- Owner choice on logo direction remains open. Current logo geometry has not been silently replaced.
- Formal legal spelling, business retention practices, and jurisdiction-specific notice requirements must match actual company records/practices before release; no missing facts were invented.
- Production still requires separate explicit approval. No main writes, merges, production deployment/promotion, DNS changes, live domain assignments, real emails, or bookings are authorized here.

## Recovery
The workspace is a normal Git checkout. The local ignored ADAPT22_WEBSITE_3.0.bundle recovery archive can be regenerated from the development branch. Original Mac repositories under Documents/adapt22-site remain unchanged.
