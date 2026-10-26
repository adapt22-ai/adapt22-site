# Contact service setup

October 26, 2026. Owner explicitly authorized bot protection/shared rate limiting, the sending SPF repair, and one real delivery test. Later confirmed free-tier-only Upstash terms acceptance and info@adapt22.ai as both test sender and recipient. This does not authorize a production deployment, main merge, or unrelated DNS changes.

## Completed
- Added TXT `send.adapt22.ai`: `v=spf1 include:amazonses.com ~all`, automatic TTL. New record only; existing Google mail, DMARC, web records, and nameservers unchanged. Read back through Cloudflare and public DNS.
- Requested Resend re-verification. Provider subsequently reports DKIM, sending MX, and sending SPF TXT verified, with sending enabled and tracking disabled.
- Created managed Turnstile widget `adapt22 website contact`. Allows adapt22.ai (including www), the verified stable development-branch preview hostname, localhost and 127.0.0.1. Server validates exact request origin/hostname and `contact` action; production requests never accept local tokens.
- Stored public widget key and private server secret directly in Vercel preview/production configuration. Secret is Sensitive, not printed or saved to a local file. Only preview redeployment is permitted.

- Provisioned `adapt22-contact-rate-limit` in Upstash through Vercel Marketplace, Free plan (500,000 monthly commands), Washington DC region, no extra read regions, eviction off. Connected only to adapt22-site Preview/Production with Sensitive variables. No paid plan or upgrade selected.
- Added support for Marketplace's KV_REST_API_URL/KV_REST_API_TOKEN alongside the original direct-Upstash names. Readiness and production release guard use the same resolver. Eleven contact-handler tests pass, including the native variable path; local build passes.

## Real delivery verified
- Implementation commit b89ce70205f7db2077be2d142bc0588b1e522d85; protected preview deployment dpl_D3FzQksaV4dMG3LDaz8fPJrrwtwG, READY, preview target. Stable test URL: https://adapt22-site-git-website-3-rebrand-adapt22s-projects.vercel.app/contact . Immutable build: https://adapt22-site-21lvr3z16-adapt22s-projects.vercel.app/ . Turnstile is registered for the stable branch hostname, not every immutable preview hostname; use the stable URL for real form tests.
- Exactly one real message was submitted through the actual staging form with a fresh real managed Turnstile token and the actual shared Redis limiter. No direct-provider substitute test was used. Form confirmed submission and correctly focused its confirmation heading.
- Reference A22-CONTACT-20261026-SETUP-01; submitted October 26, 2026 at 2:11 a.m. America/Chicago (07:11:46 UTC). Resend message ID 01a1770d-0ab1-71a9-afb5-e7e340de1238, status delivered. Gmail confirms the same reference in INBOX, not SPAM. Sender, recipient and reply-to match the owner-approved info alias.
- Gmail authentication headers confirm SPF pass, adapt22.ai DKIM pass, and DMARC pass. No other mailbox correspondence inspected.
- Authenticated staging Contact returns 200/noindex, contains the real public widget key, and has no disabled-form notice. Vercel Authentication remains enabled on all previews. Main remains a82280731d2e04b5e1c8b5038b34b2dfcd1b6057; no production deployment or web-DNS change.

## Limits and release follow-up
Live rate command execution succeeded as part of the real request; five-per-ten-minute blocking, provider failures and hostname/action rejection are covered by handler tests. A raw replay of that live token was not performed; do not describe the replay check as remotely verified. No further real messages are authorized by the one-message test.

Production still requires separate release approval, a fresh production build, and validation of the actual Cloudflare-to-Vercel visitor-IP path. The staging test uses Vercel directly and cannot establish production proxy behavior. Existing Google mail, web routing, nameservers, DMARC policy, and Calendly remain unchanged. Actual business privacy practices, administrator branch-protection checks, and the broader accessibility acceptance items remain as documented in the audit.
