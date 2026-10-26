# Website review 2: owner feedback, design decisions, and acceptance

Source: the owner's detailed first-pass review in this chat. Production approval has not been granted.

## Positioning decision
Keep nature as the visual language. It reflects the founder's perspective and the company's deliberate, long-term way of working. Put concrete consulting services and responsibility in the copy so the site cannot be mistaken for an outdoor company or a SaaS product.

Primary message: a technology consulting team that becomes part of the client's business and takes responsibility for the agreed technology, data, AI, systems, and vendor work. Clients retain authority over priorities and spending. No unlimited contractual responsibility is promised by marketing copy.

## Feedback addressed
| Area | Revision |
| --- | --- |
| Homepage mountain | Preserved, including Adapt / evolve / move forward. Added explicit technology consulting, custom software, Salesforce, and support description. |
| Green photography | Replaced forest with muted ridgelines; replaced deer with a snow-covered bison in a portrait-shaped introduction. Cool slate, mist, brown, and stone image direction. |
| Long all-white pages | Warm sand introductions, photographic split layouts, parchment reading surfaces, alternating service panels, and charcoal ownership sections. No distracting text-background pattern. |
| Homepage adjacent light blocks | Method is sand, company statement is slate, CTA is warmer bronze-sand, footer is charcoal. |
| Services | Kept service structure and detailed pages. Added Salesforce consulting as a seventh dedicated service and improved list font size/spacing. |
| Empty right-side spaces | Added photo beside page introductions and concrete client questions beside the services closing statement. |
| Long-term partnership | Rewrote approach, roadmap steps, ongoing partnership description, and post-implementation FAQ. Made ownership central to the homepage. |
| Founder | Preserved grayscale styling and full source image aspect ratio, with no object-cover crop. Added owner-reported software development, product management, private equity, and trade-business experience without years, employers, deal counts, or outcomes. |
| Team | Added product/delivery, IT, development, Salesforce, data/AI, and business-analysis disciplines. No invented employees, staff headcount, names, photos, or biographies. |
| Email | Changed visible website addresses, metadata, form recipient/sender, and error paths to info@adapt22.ai. Alias creation/forwarding is owner-managed and not independently verified. Calendly's existing URL remains unchanged. |
| Footer | Explicit consulting/services description, legal name Adapt 22 LLC as supplied by owner, lowercase a22, privacy/terms/accessibility links. |
| Logo | Current geometry stays provisional, now bronze in navigation/footer. Three vector directions available at /brand-review in staging only. This does not claim to recover the missing earlier generated logo. |
| Header | Compact sticky header with keyboard/anchor offsets; non-sticky in short landscape viewports to preserve reading space. |
| Contact | Replaced preview-specific copy with a plain temporary-unavailability message. Production build fails if contact prerequisites are missing. Actual credentials and a delivery test are still required. |
| Punctuation | Removed em dashes from site copy and metadata. |

## Research and rationale
- Nielsen Norman Group, homepage usability: a homepage should communicate what the company does, not rely on a slogan alone. https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/
- Nielsen Norman Group, company information: clear and authentic company descriptions help visitors understand the organization. https://www.nngroup.com/reports/about-us-presenting-company-information/
- Nielsen Norman Group, sticky headers: persistent navigation trades screen space for access, so keep it compact. https://www.nngroup.com/articles/sticky-headers/
- W3C WCAG: text contrast depends on the adjacent background. The design must preserve readable pairs, not merely make the whole page darker. https://www.w3.org/TR/WCAG22/#contrast-minimum
- W3C, focus not obscured: sticky elements must not cover keyboard focus. https://www.w3.org/WAI/WCAG22/Techniques/failures/F110.html
- FTC, privacy/security: privacy promises need to match actual practices. Do not add broad unsupported compliance or security claims. https://www.ftc.gov/business-guidance/privacy-security
- Vercel's analytics privacy documentation: describes no third-party cookies and explains hashed identifiers and URL redaction. The site's notice describes the implemented setup, not a blanket privacy-law exemption. https://vercel.com/docs/analytics/privacy-policy

Warm backgrounds are a design response to this owner's preference. No claim is made that a certain color scheme medically reduces eye strain. No claim of universal device or legal compliance is made from an automated scan.

## Remaining decisions
- Logo direction and any comparison with the missing earlier artwork.
- Secure contact credentials, alias verification, and authorized delivery test.
- Confirm the legal spelling supplied (Adapt 22 LLC) against company records before a production release; no filing records were accessed for this revision.
- The website privacy notice identifies current processors and contact paths. Actual business retention, request-handling procedures, and jurisdiction-specific obligations require business facts beyond the website code; these were not invented.
