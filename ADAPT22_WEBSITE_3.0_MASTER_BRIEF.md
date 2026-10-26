# adapt22 Website 3.0 — Master Brief

Updated: October 25, 2026 (America/Chicago).

## Source status
This is a reconstructed working brief, not a verified copy of the earlier conversation attachment. The user named three prepared Markdown attachments and a ZIP, but they were not returned by `read_thread` and were not found in the accessible workspace, Documents, or Downloads search. The retrieved Project Review Analysis and Adapt 22 Overview chats return only bounded recent exchanges and assistant content references. Do not claim the entire chat or all prior assets were recovered.

Primary authority: the user's current Website 3.0 request. Supporting sources: current GitHub `adapt22-ai/adapt22-site`, starting commit `a82280731d2e04b5e1c8b5038b34b2dfcd1b6057`; previous read-only inventory chat `01a17517-1e81-7a52-8f2b-94f413a17de0`; existing repository About page, Calendly component, and contact route.

## Objective and audience
Build a clean-slate, premium consulting website for owners and leaders facing operational friction, technology decisions, modernization, or business change. Primary action: start a conversation with Jackson, by scheduling or email/contact.

## Authorization boundary
Development work, a separate development branch, and protected staging are authorized. The live adapt22.ai site, production branch, production deployment, DNS, and domain assignments must not change without separate explicit approval. No automatic merge or production promotion. Original nested Mac checkouts remain unchanged. No secrets may be exposed or committed.

## Approved identity and direction
- Primary wordmark: adapt22. Secondary: a22.
- Engineered triskelion: three equal arms at 120-degree rotations; Implement / Manage / Scale. New vector geometry is an implementation proposal under the approved identity, not a recovered approved master artwork.
- Palette: ink #15191E, slate #343C45, paper #F2F0EB, stone #A9A296, bronze #9B8264.
- Restrained premium visual language: generous space, thin rules, editorial scale, elegant sans-serif text, selective italic serif accent.
- Cinematic landscape, forest, and wildlife photography. No architectural imagery, generic technology graphics, or fictional team photographs.
- Direct, natural language; specific examples over slogans. No invented staff, clients, results, testimonials, certifications, or founder quotations.

## Content scope
Home, services index, seven service detail pages, approach/FAQs, founder-led About, contact, privacy, terms, helpful 404. Services cover custom software, fractional CTO/CIO-style leadership, applied AI and automation, enterprise modernization, Salesforce consulting, integrations/data, acquisition/expansion/exit readiness. Older routes redirect to relevant new destinations.

Founder: Jackson McConnell. Existing About copy describes home services operations and software experience; keep the new biography modest and source-bounded. Use the headshot from the current repository. No staff roster or unsupported scale claims. No sensitive financial or client information from unrelated memory goes onto the site.

## Integrations
- Existing Calendly destination: https://calendly.com/jackson-adapt22. Direct outbound link avoids widget loading and has a usable browser fallback.
- Current public contact address and sender: info@adapt22.ai, replacing the earlier source address. Resend API secret remains server-side. Delivery requires verified sender capability.
- Contact: bounded JSON, field validation, same-origin checks, honeypot, Turnstile verification, atomic Upstash rate limit, idempotent send, safe provider-error handling. Fail closed if prerequisites are absent. No false delivery success.
- Vercel analytics and performance measurement only in production; do not pollute metrics with staging tests. Strip query strings/fragments from analytics URLs. No contact payloads sent to analytics.

## Delivery and acceptance
Protected Vercel preview preferred, with robots disallow and noindex response headers as defense in depth. Noindex is not access control. Verify project/team and preview protection before uploading. No production target or DNS changes.

Acceptance requires build and dependency checks; desktop/mobile route coverage; no clipping or horizontal overflow; keyboard menu, FAQ, skip link and form states; accessibility scanning; images and social preview rendering; contact abuse and provider-failure tests; an actual protected staging URL; configured service credentials and a separately authorized real delivery test. Report incomplete items plainly.

## Owner review 2: updated direction
The owner's later first-pass review supersedes earlier copy and visual choices:
- Retain the homepage mountain and Adapt / evolve / move forward. Nature photography must share muted slate/stone/bronze tones; remove saturated green images.
- Make the offering concrete. The company becomes part of the client team and owns the agreed technology, data, AI, systems, and provider work. Roadmaps and ongoing partnership are central.
- Add dedicated Salesforce consulting. Preserve the service index/detail structure.
- Use warmer, more varied reading surfaces and larger service-list text. Add balanced text/photo introductions and useful content in empty right columns.
- Public email is info@adapt22.ai. Owner is creating the alias. Legal name supplied is Adapt 22 LLC. Primary brand adapt22 and secondary a22 use lowercase.
- Founder background can include owner-reported software development, product management, private equity, and running/scaling home services and trade businesses. Preserve full arms in grayscale photograph. Present a company team through disciplines without invented names/headcount.
- Keep current logo provisional; use bronze and prepare separate logo directions for review. Do not claim prior artwork recovery.
- Compact sticky navigation, accessible at different screen sizes. Remove em dashes from public copy.
- No disabled contact form may silently ship in production. Secure credentials and real delivery acceptance remain prerequisites.
