# Staging and integrations

## Preview only
Never deploy production or assign adapt22.ai. Verify preview access protection in Vercel before deploying. Preview environment sets noindex and robots disallow. Analytics run only when VERCEL_ENV=production.

## Contact environment variables
Configure through the provider's protected environment settings, scoped to Preview. Do not paste secrets into chat or commit them.

- RESEND_API_KEY — scoped sending key; sender jackson@adapt22.ai must be verified.
- NEXT_PUBLIC_TURNSTILE_SITE_KEY — public Cloudflare Turnstile key; permit intended preview hostname.
- TURNSTILE_SECRET_KEY — corresponding server-only secret.
- UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN — Redis REST endpoint and credential; atomic ten-minute limit, five submissions per hashed network identifier.

Without any prerequisite, the UI identifies the unavailable form and offers email and Calendly. The API fails closed. The message body goes only to Resend for the intended inbox; no auto-response is sent. Real send/booking tests require user authorization.

## Run locally
npm ci
npm test
npm run build
npm start
npm run test:e2e

Playwright may require `npx playwright install chromium`. Use local mocks for contact failure/success tests, not real inbox delivery. Read IMPLEMENTATION_STATUS.md for actual checks performed.
