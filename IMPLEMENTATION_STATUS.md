# Implementation status

Updated October 25, 2026 (America/Chicago).

## Current handoff
- Implementation commit: `8cb0fee8c176ab9719267d7655dfac035c6adad1`.
- Development branch: `website-3-rebrand` in adapt22-ai/adapt22-site.
- Draft PR: https://github.com/adapt22-ai/adapt22-site/pull/2 . Not merged.
- Protected Vercel preview: https://adapt22-site-xpeuhnhzd-adapt22s-projects.vercel.app . State READY; build approximately 21 seconds; target preview, not production.
- Preview deployment: `dpl_pVAgzAbSvioQHuG9mQ5VpoQCZLhT`, project `prj_ChL9B0FapahJYLgcgpXrdTydFuX2`, team `team_pAyylUE8Tgbnni6VFzF7moWw`.
- Local workspace is a normal durable Git checkout. `ADAPT22_WEBSITE_3.0.bundle` provides a local recovery archive and is excluded from version control.

## Implemented
Home, service index and six detail pages, founder-led About, approach/FAQ, contact, privacy/terms, useful 404, responsive navigation, reduced motion, semantic headings, skip link, image optimization, self-hosted Manrope, vector triskelion, sitemap/robots, page metadata, social sharing image, structured data, and redirects from older routes. Analytics and speed measurement are configured for production only.

Service coverage: fractional technology leadership, custom software, applied AI/automation, enterprise modernization, integrations/data, acquisition/expansion/exit readiness. No fictional staff or client results.

The three project Markdown files were reconstructed from the current request and accessible evidence. The original named attachments and ZIP were unavailable and have not been verified. The retrieved older ChatGPT answers appear as references, not recoverable content. The prior Mac inventory was retrieved; original nested Mac checkouts were preserved.

## Verified
- Next.js 16.4.3 optimized build passes; npm audit reports zero known vulnerabilities.
- 10 contact-handler tests pass: origin, payload bounds, malformed data, missing credentials, honeypot, verification, rate limit, provider errors, idempotent successful sends. Provider calls are mocked; no email sent.
- 36 desktop/mobile page/navigation checks pass: all public page routes, image loading, browser errors, horizontal overflow, automated WCAG A/AA scans, keyboard menu/escape, FAQ, redirects, 404, preview robots/noindex, reduced motion.
- 4 additional mocked contact UI checks pass across desktop/mobile: waiting/sending/success, re-entry, error retention, recovery. No real provider requests or bookings.
- Visual review of desktop/mobile home and founder page; adjusted mobile headline, photo overlays, and wildlife crop. Additional 320px, 768px, 1024px homepage overflow checks completed.
- Calendly connected account confirms https://calendly.com/jackson-adapt22 . No booking created.
- Resend connected account confirms adapt22.ai verified with sending enabled. No keys retrieved or exposed.
- Vercel project authentication protection enabled for all previews. Anonymous request redirects (302) to Vercel sign-in. Authenticated home returns 200 and noindex/nofollow/noarchive; deployed page route smoke checks return 200 with noindex headers.
- Preview environment metadata query for the development branch returned no configured variables; values were not decrypted.

## Blocking final acceptance
1. Contact form credentials: Preview-scoped RESEND_API_KEY, NEXT_PUBLIC_TURNSTILE_SITE_KEY, TURNSTILE_SECRET_KEY, UPSTASH_REDIS_REST_URL, and UPSTASH_REDIS_REST_TOKEN. Turnstile must allow the preview hostname. Configure directly in secure provider settings; do not paste secrets into chat. The form is deliberately disabled until these prerequisites exist. Email and Calendly alternatives work.
2. A real delivery test to Jackson's inbox remains unperformed. Secure configuration and explicit send-test authorization are needed. Mock success is not delivery verification.
3. Owner review of the visual implementation, proposed triskelion geometry, copy, and reconstructed brief against any missing original attachments. No claim of identical recovery or prior artwork approval.
4. Production release requires separate explicit approval. Do not merge or promote this preview as part of acceptance checks.

## Production boundary
No main writes, merges, production deployment, production promotion, DNS changes, live domain assignments, real emails, or calendar bookings. The working preview is distinct from adapt22.ai. The production branch remained at starting main commit a822807 during this work.
