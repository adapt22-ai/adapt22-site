export const calendlyUrl = "https://calendly.com/jackson-adapt22";
const capabilities = [
  {
    slug: "technology-leadership",
    title: "Fractional technology leadership",
    short: "Your technology, with a team responsible for it.",
    description:
      "A technology lead who works as part of your business, backed by a team that carries the work through. You set the business priorities and approve the investment. We turn that into a technology roadmap, lead the people and vendors, and take responsibility for delivery.",
    items: [
      "Technology strategy and investment priorities",
      "Vendor selection, contracts, and accountability",
      "IT governance and operating plans",
      "Ongoing ownership of technology, data, and AI priorities",
    ],
    result:
      "A sequenced roadmap, clear ownership, and a budget tied to the work that matters.",
    trigger:
      "Your business has outgrown ad hoc technology decisions, but a full-time CTO or CIO is not the right next hire.",
  },
  {
    slug: "custom-software",
    title: "AI-enabled custom software",
    short: "Purpose-built applications with AI where it earns its place.",
    description:
      "Build the internal applications and workflows your business cannot buy off the shelf. We combine software engineering with AI capabilities such as document processing, knowledge search, and assisted decisions when they make the application more useful.",
    items: [
      "Internal applications with AI-assisted workflows",
      "Knowledge search and document processing applications",
      "Workflow and approval applications",
      "Product development and ongoing maintenance",
    ],
    result:
      "Working software, documented decisions, and an agreed plan for ongoing management and support.",
    trigger:
      "A critical process depends on manual work, disconnected spreadsheets, or software that cannot support it.",
  },
  {
    slug: "applied-ai",
    title: "Applied AI & automation",
    short: "Less busywork. More room to think.",
    description:
      "Put AI to work where it has a specific job: finding information, preparing a first pass, routing work, or helping people make sense of a large volume of data. Keep human review where it matters.",
    items: [
      "AI readiness and use-case assessment",
      "Knowledge search and internal assistants",
      "Document processing and workflow automation",
      "Evaluation, access controls, and human review",
    ],
    result:
      "A defined use case, a measured pilot, and a clear decision about whether to scale.",
    trigger:
      "Your team sees potential in AI but needs to know what is useful, what is safe, and what is worth paying for.",
  },
  {
    slug: "salesforce-consulting",
    title: "Salesforce consulting",
    short: "A Salesforce system your team can rely on.",
    description:
      "Plan, improve, and manage Salesforce around the work your team needs to do. We connect the platform to your processes, clean up the data, and stay involved as those needs change.",
    items: [
      "Salesforce strategy, implementation, and administration",
      "Process design, configuration, and automation",
      "Data migration, integrations, and reporting",
      "Platform ownership, user adoption, and continuous improvement",
    ],
    result:
      "A clear plan for Salesforce, a platform that supports the agreed workflows, and an owner for what happens next.",
    trigger:
      "You are adopting Salesforce, struggling with an existing setup, or need a team to manage it alongside the rest of your technology.",
  },
  {
    slug: "enterprise-modernization",
    title: "IT infrastructure & modernization",
    short: "Move forward without losing what works.",
    description:
      "Take responsibility for the IT your team relies on: devices, identity, networks, workplace platforms, and providers. Modernize existing systems or separate a business from a shared IT environment, with a plan to keep people working through the change.",
    items: [
      "Hardware, device management, and endpoint security",
      "Identity, networks, and workplace platforms",
      "IT separations, carve-outs, and provider transitions",
      "Cloud and data migration, cutover, and recovery planning",
    ],
    result:
      "A migration plan with dependencies, rollback steps, and responsibilities made explicit.",
    trigger:
      "You need to modernize your IT, establish independent systems after a separation, or coordinate providers without disrupting daily operations.",
  },
  {
    slug: "integrations-data",
    title: "Integrations & data",
    short: "Make your systems work together.",
    description:
      "Connect the tools you rely on so your team can stop moving the same information between them. Give each piece of data a clear home and make failures visible.",
    items: [
      "API integrations and system connections",
      "Data cleanup, mapping, and migration",
      "Reporting and operational visibility",
      "Monitoring, reconciliation, and error recovery",
    ],
    result:
      "Reliable connections, documented data flows, and a clear way to spot and resolve failures.",
    trigger:
      "People re-enter data, reports disagree, or important work falls between systems.",
  },
  {
    slug: "growth-transaction-readiness",
    title: "Growth & transaction readiness",
    short: "Ready for the next chapter.",
    description:
      "Understand the technology before a major business move. Whether you are acquiring, opening locations, combining operations, or preparing for an exit, make the risks and required work visible early.",
    items: [
      "Technology diligence and risk assessment",
      "Acquisition integration planning",
      "Expansion and multi-location readiness",
      "System documentation and exit preparation",
    ],
    result:
      "An evidence-based view of technology risks, dependencies, costs, and the work ahead.",
    trigger:
      "An acquisition, expansion, or exit is approaching and you need to know whether the technology can support it.",
  },
];
export const services = [
  "technology-leadership",
  "applied-ai",
  "salesforce-consulting",
  "enterprise-modernization",
  "integrations-data",
  "growth-transaction-readiness",
  "custom-software",
].map((slug) => capabilities.find((s) => s.slug === slug));
export const serviceGroups = [
  {
    id: "leadership",
    title: "Embedded technology leadership",
    description:
      "You set the business priorities. We turn them into a technology roadmap, lead the people and providers, and stay accountable for execution.",
    href: "/services/technology-leadership",
    slugs: ["technology-leadership", "growth-transaction-readiness"],
  },
  {
    id: "ai",
    title: "Applied AI & automation",
    description:
      "Turn AI into working business processes. We agree the use cases with you, connect the data, and own the rollout and oversight.",
    href: "/services/applied-ai",
    slugs: ["applied-ai"],
  },
  {
    id: "business-systems",
    title: "Business systems & delivery",
    description:
      "Make Salesforce, data, and IT infrastructure work together. Our team handles hardware, modernization, business separations, integrations, and purpose-built applications.",
    href: "/services#business-systems",
    slugs: [
      "salesforce-consulting",
      "enterprise-modernization",
      "integrations-data",
      "custom-software",
    ],
  },
];
export const faqs = [
  [
    "Where do we start?",
    "With a conversation about the business: what is changing, what is getting in the way, and what needs to happen next. If there is a fit, the next step is a defined scope of work.",
  ],
  [
    "Can you work with our existing team and vendors?",
    "Yes. We become part of your working team and coordinate with your people and providers. You keep authority over the business; we own the agreed technology responsibilities and make sure work does not fall between vendors.",
  ],
  [
    "Do we need to know which technology we want?",
    "No. Start with the problem. Sometimes the right answer is to use more of what you already own; sometimes it is an integration, a new platform, or a custom build.",
  ],
  [
    "Will you take ownership of all our technology?",
    "That is the intent of our ongoing partnerships. We agree the scope together, then become the team responsible for technology, data, systems, AI, and the vendors involved. You get a clear point of contact, a plan, and people accountable for following through.",
  ],
  [
    "How do you decide what to work on first?",
    "We build a roadmap around your business priorities. Each step has an owner, dependencies, an expected cost, and a reason for its place in the sequence. We review it with you as priorities change, rather than treating it as a document that gets filed away.",
  ],
  [
    "How are engagements structured?",
    "Depending on the need, an engagement can be a focused assessment, a defined project, or ongoing fractional leadership. Scope, responsibilities, deliverables, and fees are agreed before work begins.",
  ],
  [
    "What happens after implementation?",
    "We can stay with you. Ongoing management, support, training, and improvements are central to the relationship, not an afterthought. We keep the roadmap current and stay responsible for the agreed scope for as long as you want that partnership. If you prefer a handover, we plan that properly too.",
  ],
];
