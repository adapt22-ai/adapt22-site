# Release checklist

October 26, 2026. Status: **hold production**. The audit and development commit do not authorize main, production, DNS, live service changes, real email, or bookings.

## Finish before requesting release approval

- [ ] Provision shared Upstash Redis rate limiting and Cloudflare Turnstile through a secure account workflow. No widget/store was created during the audit. Restrict Turnstile to the actual production/staging hostnames; never allow all of vercel.app. If a provider account, billing authorization, or interactive sign-in is required, surface that exact step rather than asking the owner to paste secrets.
- [ ] Set the five contact settings for preview and production securely. Verify private sender and recipient configuration; intended destination info@adapt22.ai is owner-confirmed to deliver to Jackson. Never publish the address.
- [ ] With separate DNS approval, add the missing sending-subdomain SPF TXT documented in PRELAUNCH_AUDIT.md, then confirm DNS propagation and Resend status. Preserve Google Workspace mail records and DMARC.
- [ ] Resolve/validate the Cloudflare-to-Vercel client-IP path before accepting the rate limiter. Test successful verification, invalid/expired verification, rate limits, provider failure, retry/idempotency, and success against configured staging.
- [ ] Obtain explicit authorization for one controlled real contact delivery test. Confirm inbox receipt, reply-to, authentication headers, spam placement, and absence of sensitive logging. A mocked success is insufficient.
- [ ] Review the broader Calendly intake-question wording; keep the confirmed Eastern schedule, active discovery event, and Google Meet unchanged.
- [ ] Verify hosted CI green for the final code commit and administrator-enforced review/check requirements on main. Connector cannot inspect branch-protection administration.
- [ ] Complete an assistive-technology user pass (VoiceOver/NVDA or independent specialist) and actual device spot checks. No ADA legal guarantee follows from automated checks. Confirm notices match actual business privacy/retention/deletion practices.
- [ ] Record the exact reviewed commit and preview. Refresh recovery bundle. Obtain separate explicit release approval only after the result and remaining live changes are concrete.

## Approved release execution only

1. Confirm approved SHA, green checks, configured production credentials, working contact, domain/canonical plan, and rollback destination. Record currently healthy production deployment before release.
2. Merge/publish only after explicit approval. Trigger a **fresh production build** with `VERCEL_ENV=production`; never promote this preview artifact. The production guard must pass and the browser Turnstile key must be present at build time. A preview built with noindex/disabled form is not a production artifact.
3. Change only the specifically approved DNS/live settings. Review optional stale in-zone NS cleanup, minimum TLS 1.2, DNS-only web records, and coordinated DNSSEC separately. Preserve Google mail and sender authentication. Avoid broad cache purges or unrelated account changes.
4. Smoke-test apex→www once, valid HTTPS, canonical www, production robots allowing public pages, sitemap, correct metadata/social/icon responses, contact/Calendly, and mobile navigation. Confirm `/brand-review` is 404 and absent from links/sitemap. No preview hostname in public SEO metadata.
5. Confirm analytics run only on production with sanitized URLs and no contact data. Check provider errors, rate limiting, and delivery under the actual production network path. Authorized test messages only.
6. Submit `https://www.adapt22.ai/sitemap.xml` in the verified Search Console property; inspect a public URL. Search Console/Bing ownership remains unverified. Set a sensible monitoring/response process without creating unsolicited recurring automations.
7. Monitor first real requests for broken images, 404s, function errors, mail failures, and field performance. Local lab results are not field Core Web Vitals.

## Rollback

Keep the previous known-good production deployment available. If the new site has a material outage, failed contact path, or unintended indexing/privacy behavior, use the separately authorized rollback process to restore that recorded production version. Revert only approved DNS changes if they caused the failure; never revert mail records wholesale. Recheck HTTPS, redirects, email routing, and public availability after rollback. Record symptoms, affected release, rollback target, and subsequent repair plan.
