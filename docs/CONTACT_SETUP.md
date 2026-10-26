# Contact service setup

October 26, 2026. Owner explicitly authorized bot protection/shared rate limiting, the sending SPF repair, and one real delivery test. Later confirmed free-tier-only Upstash terms acceptance and info@adapt22.ai as both test sender and recipient. This does not authorize a production deployment, main merge, or unrelated DNS changes.

## Completed
- Added TXT `send.adapt22.ai`: `v=spf1 include:amazonses.com ~all`, automatic TTL. New record only; existing Google mail, DMARC, web records, and nameservers unchanged. Read back through Cloudflare and public DNS.
- Requested Resend re-verification. Provider subsequently reports DKIM, sending MX, and sending SPF TXT verified, with sending enabled and tracking disabled.
- Created managed Turnstile widget `adapt22 website contact`. Allows adapt22.ai (including www), the verified stable development-branch preview hostname, localhost and 127.0.0.1. Server validates exact request origin/hostname and `contact` action; production requests never accept local tokens.
- Stored public widget key and private server secret directly in Vercel preview/production configuration. Secret is Sensitive, not printed or saved to a local file. Only preview redeployment is permitted.

- Provisioned `adapt22-contact-rate-limit` in Upstash through Vercel Marketplace, Free plan (500,000 monthly commands), Washington DC region, no extra read regions, eviction off. Connected only to adapt22-site Preview/Production with Sensitive variables. No paid plan or upgrade selected.
- Added support for Marketplace's KV_REST_API_URL/KV_REST_API_TOKEN alongside the original direct-Upstash names. Readiness and production release guard use the same resolver. Eleven contact-handler tests pass, including the native variable path; local build passes.

## In progress
Protected preview redeployment, real browser token validation/replay check, and the single real delivery test remain pending. Do not claim completion before destination evidence exists.
