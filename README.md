# adapt22 Website 3.0

A separate-branch redesign of adapt22.ai. Production release requires separate user approval.

Read [the master brief](ADAPT22_WEBSITE_3.0_MASTER_BRIEF.md), [working instructions](AGENTS.md), and [implementation status](IMPLEMENTATION_STATUS.md). Source gaps and actual verification results are recorded explicitly.

## Development

Node.js 22 or later. `npm ci`, `npm run dev`. Release build: `npm run build`, then `npm start`.

Tests: `npm test` for contact handling; `npm run test:e2e` with the local server running for desktop/mobile routes, accessibility, images, navigation, redirects, and preview indexing. Install Chromium with `npx playwright install chromium`, or use `PLAYWRIGHT_CHANNEL=chrome` when Chrome is installed.

## Integration and deployment

See [configuration](docs/CONFIGURATION.md) and [asset provenance](docs/ASSETS.md). No secrets in this repository. Contact submissions fail closed until sending and abuse-prevention credentials are configured. Email and Calendly links remain available.

Deploy previews only, with Vercel authentication protection verified before deployment. Do not merge, deploy production, change DNS, or assign adapt22.ai without explicit approval.
