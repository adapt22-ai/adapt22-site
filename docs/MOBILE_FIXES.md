# Mobile consistency fixes

October 26, 2026. Owner explicitly requested these fixes and a production release.

- Replaced every Unicode navigation/action arrow, including header/footer, service links, contact states, homepage scroll link, 404 and private review anchors, with a shared decorative inline SVG. Stroke inherits the text color; direction/size no longer depend on platform emoji fonts. Accessible link/button names remain text-only.
- Set button/control text inheritance and explicit ink color, WebKit text-fill color and native-appearance reset on the Menu/Close toggle. Both open/closed states remain keyboard accessible.
- Contact invitation and metadata now refer to the adapt22 team. The 404 invitation also uses the team. Founder biography remains founder-led.
- Existing favicon sources already contain the selected C3 mark. Added C3-specific icon filenames and updated icon, shortcut, Apple and manifest references to give browsers fresh discovery URLs. Existing root favicon endpoints stay available for crawlers. A separate third-party favicon cache, including this chat's domain icon, cannot be forcibly refreshed by the website.

Verification: 11 handler tests pass, build passes, 32 focused checks pass across eight Chromium/WebKit desktop/tablet/phone configurations. Coverage includes actual SVG arrows, explicit menu color before/after open, team copy, fresh icon responses, homepage/contact accessibility scans, image completion/overflow, legacy redirects and 404. Full hosted regression runs on the PR. This is emulated cross-browser verification, not a claim that physical iPhones were directly tested.

Released with owner approval through PR #3. Reviewed source 33244189218e97ac3bede2e342f37170a023a80b; merge a91aac712f9ba7dfdec21965c042079715bdd1e5. Protected preview dpl_CPCj8Qa1NYqptPf1h8jmdEj2mHhj returned 200/noindex and confirmed SVG arrows, team wording and fresh favicon references. Fresh production deployment dpl_3kajE5cvWxQpiCq95cMcXXVgmFCs is READY and assigned to www.adapt22.ai and adapt22.ai.

Eight focused tests passed against the actual live website across the same Chromium/WebKit configurations. Browser visual review confirmed the homepage SVG arrow and Menu/Close. Seven live icon files, including root favicon.ico/favicon.svg and fresh C3 names, return 200 and match the local C3 sources byte-for-byte. Cloudflare targeted purge succeeded for 12 old icon/manifest URLs across apex/www; no purge-everything, DNS change, paid upgrade, real email or booking occurred. Third-party chat favicon refresh remains outside website control. Physical-device review is not claimed.

Previous production rollback reference: dpl_3UNMEdEKZm5hoGdLte92jLTX6Ykk, main b060cac20ba0af408101473489eef15edda09de9. Local visual evidence is ignored under review/mobile-fixes/. Full hosted regression passed for the reviewed source: https://github.com/adapt22-ai/adapt22-site/actions/runs/40285986271 .
