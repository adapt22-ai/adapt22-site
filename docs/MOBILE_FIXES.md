# Mobile consistency fixes

October 26, 2026. Owner explicitly requested these fixes and a production release.

- Replaced every Unicode navigation/action arrow, including header/footer, service links, contact states, homepage scroll link, 404 and private review anchors, with a shared decorative inline SVG. Stroke inherits the text color; direction/size no longer depend on platform emoji fonts. Accessible link/button names remain text-only.
- Set button/control text inheritance and explicit ink color, WebKit text-fill color and native-appearance reset on the Menu/Close toggle. Both open/closed states remain keyboard accessible.
- Contact invitation and metadata now refer to the adapt22 team. The 404 invitation also uses the team. Founder biography remains founder-led.
- Existing favicon sources already contain the selected C3 mark. Added C3-specific icon filenames and updated icon, shortcut, Apple and manifest references to give browsers fresh discovery URLs. Existing root favicon endpoints stay available for crawlers. A separate third-party favicon cache, including this chat's domain icon, cannot be forcibly refreshed by the website.

Verification: 11 handler tests pass, build passes, 32 focused checks pass across eight Chromium/WebKit desktop/tablet/phone configurations. Coverage includes actual SVG arrows, explicit menu color before/after open, team copy, fresh icon responses, homepage/contact accessibility scans, image completion/overflow, legacy redirects and 404. Full hosted regression runs on the PR. This is emulated cross-browser verification, not a claim that physical iPhones were directly tested.

Preview, production release and targeted icon-cache purge results will be recorded after publishing. No real emails or bookings are needed for these presentation fixes.
