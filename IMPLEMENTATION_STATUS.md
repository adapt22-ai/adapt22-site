# Implementation status

Updated October 26, 2026 (America/Chicago), after owner review 3.

## Current branch and scope
Development branch `website-3-rebrand`; draft PR https://github.com/adapt22-ai/adapt22-site/pull/2 . Production/main/DNS remain outside the authorized scope. A new protected preview URL will be recorded after this revision deploys. Prior immutable preview URLs do not update.

## Review 3 implemented
- New homepage positioning: "Technology leadership, embedded in your business. We set the direction, lead the team, and own the execution."
- Three connected homepage offers: embedded leadership, applied AI/automation, and business systems/delivery. Seven detailed capabilities retained; fractional leadership first, applied AI second, AI-enabled custom software last.
- Services use one consistent card fill. Services, Approach, About, and Contact use smaller full-width photographic banners with four distinct sources. Homepage mountain and secondary ridges preserved.
- Founder section matches the existing photo background and preserves the full arms.
- Footer and legal references use adapt22 LLC, without a space between adapt and 22.
- Public email addresses/mailto links removed from pages, metadata/structured data, notices, and API errors. Private server delivery remains configured separately. Contact/scheduling paths replace public addresses.
- Header brand/navigation have restrained hover and press motion, disabled when reduced motion is requested.
- Route links and path-change scrolling explicitly start non-anchor navigation at top. Same-page navigation also resets to top; explicit section anchors retain their intended behavior.
- Private logo study expanded to 12 SVG concepts in four families. The current website logo is unchanged pending selection. Logo review stays excluded from navigation/sitemap and unavailable in production.

See docs/REVIEW_3.md for rationale and source-bounded decisions. Earlier project attachments and prior generated logo artwork remain unavailable; no recovery is claimed.

## Verification
- 224 browser checks pass across Chromium desktop, tablet portrait/landscape, phone/small-phone/landscape, and WebKit phone/tablet.
- Coverage includes accessibility scans, all routes, images, overflow, browser errors, keyboard controls, anchors, page-top navigation from scrolled pages, no public addresses in rendered markup, distinct full-width banners, correct capability ordering, three homepage offers, twelve logo studies, full portrait proportions, and mocked contact states.
- 10 contact-handler tests pass. No real email or booking created.
- Final build passes. Nine focused navigation/banner/contact checks also pass after the last wording and metadata refinements.
- Local visual review covers desktop, 390px phone, and 320px small phone. No claim of physical-device certification.
- Vercel preview protection rechecked: authentication enabled for all previews, no protection settings changed.

## Carry-forward release dependencies
Contact credentials and anti-abuse configuration remain absent/unverified in preview. Production build guard remains in place. Configure securely and perform an explicitly authorized delivery test before release. With public emails removed, the private contact/scheduling paths must be working before release.

Logo selection remains open. Business privacy processes and jurisdiction-specific obligations must reflect actual operations; no unsupported compliance certification is claimed.

No main writes, merges, production deployment/promotion, DNS changes, domain assignments, real messages, or bookings occurred.
