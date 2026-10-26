# Implementation status

Updated October 25, 2026. Work in progress; this is not an acceptance sign-off.

## Established
- Inspected GitHub and earlier Mac inventory; isolated working files from existing nested repositories.
- Development branch website-3-rebrand based on a822807.
- Reconstructed the three working documents; original conversation attachments remain unavailable and unverified.
- Implemented home, service index/details, About, approach/FAQ, contact, privacy/terms, metadata/social image, sitemap/robots, legacy redirects, responsive styles, and reduced-motion support.
- Contact uses same-origin checks, bounded payloads, validation, honeypot, server-side Turnstile, atomic shared rate limit, idempotent provider request, safe errors, and unavailable/sending/error/success states.

## In progress
Build, automated contact tests, route tests, desktop/mobile visual review, keyboard/accessibility checks, and dependency remediation.

## External dependencies / blockers
- Vercel connection lists adapt22-site but detail request returned 403 for team adapt22s-projects. Team access consent link issued; user completion required. No preview deployment has been created.
- Contact credentials, Turnstile host configuration, Redis service, sender verification, and real message delivery are not yet verified.
- Calendly destination recovered from existing source; link and destination need live verification. No booking created.
- No production changes, production branch writes, DNS changes, live domain assignment, or real emails.

## Verified locally
- Framework updated to Next.js 16.4.3. npm audit: zero known vulnerabilities.
- Optimized build passed (all routes generated).
- 10 contact-handler tests passed with provider stubs; no messages sent.
- All 36 route/navigation/layout/accessibility checks passed across 1440px desktop and 390px mobile after fixing test locators and scrolling through lazy images. Additional mock contact UI checks are being finalized.
- Visual review: desktop and mobile home, founder headshot, landscape, forest, wildlife. Adjusted mobile headline and photo overlays; corrected wildlife crop to retain deer.
- Connected Calendly confirms https://calendly.com/jackson-adapt22. Resend confirms adapt22.ai verified with sending enabled.
- Vercel team access now works; all previews protected by Vercel authentication. Preview environment metadata query returned no variables for this branch. Secrets were not decrypted.
