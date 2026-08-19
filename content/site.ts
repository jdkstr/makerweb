import type { Spec, WorkItem } from "./types"

export const site = {
  name: "Makerweb",
  tagline: "We make websites.",
  hero: {
    kicker: "Product studio · Est. 2016",
    headline: "The system for designing, building, and operating the web.",
    text: "Makerweb is a product studio for companies that need a website with the same care as the product it represents — strategy, interface, and engineering on one programme.",
    primary: { label: "Start a project", href: "/contact" },
    secondary: { label: "See the work", href: "/work" },
  },
  canvas: {
    title: "Northline",
    caption: "Website operating system",
    href: "/work/northline",
    specs: [
      {
        label: "Type",
        value: "SaaS",
        title: "Product website",
        text: "A marketing site that behaves like the product: shared tokens, live changelog, and a console for demos.",
      },
      {
        label: "Stack",
        value: "Next",
        title: "Next.js + shadcn",
        text: "Shipped on a typed content model so the CMS is an adapter, not a rewrite.",
      },
      {
        label: "Cycle",
        value: "8 wk",
        title: "Discovery to launch",
        text: "Eight weeks from first workshop to a site the team can keep shipping without us in the room.",
      },
    ] satisfies Spec[],
  },
  trust: {
    kicker: "Shipped with",
    names: [
      "Northline",
      "Helix Pay",
      "Orion Health",
      "Fieldnote",
      "Lumen Archive",
      "Harbor",
    ],
  },
  manifesto: {
    kicker: "Studio",
    headline: "We make interfaces that hold up after launch.",
    text: "Most websites are treated as campaigns. We treat them as products: a system of type, colour, and components that a team can keep shipping. Since 2016 we have sat with founders and brand teams to design, build, and operate sites worth talking about.",
    points: [
      {
        title: "Product first",
        text: "The site is the product. Specs, changelog, and demos live in the chrome — not in a PDF.",
      },
      {
        title: "One programme",
        text: "Research, brand, design, and engineering share a backlog. No hand-off theatre.",
      },
      {
        title: "Built to last",
        text: "Tokens, content models, and components so the next page does not need a new agency.",
      },
    ],
  },
  capabilities: [
    {
      label: "Product websites",
      headline: "Marketing that behaves like software",
      href: "/services",
      text: "Launch sites, docs, changelogs, and pricing — specified, designed, and engineered as one surface.",
    },
    {
      label: "Brand systems",
      headline: "Identity that survives the build",
      href: "/services",
      text: "Voice, type, and colour mapped onto tokens so the site, product, and deck stay in the same family.",
    },
    {
      label: "Design engineering",
      headline: "Interfaces, in production",
      href: "/services",
      text: "shadcn, Next.js, and typed content. We ship the system, not a pile of frames.",
    },
    {
      label: "Ongoing retainers",
      headline: "A studio on your stack",
      href: "/services",
      text: "Weekly drops after launch: new pages, experiments, and the craft that campaigns never budget for.",
    },
  ],
  process: {
    kicker: "How we work",
    headline: "Monday kickoff. Friday something real.",
    text: "We do not write 80-page strategy decks. We work in one-week sprints, starting with the people who will live with the site.",
    steps: [
      {
        week: "01",
        title: "Truth",
        text: "Workshops, audits, and interviews. We write the narrative before we draw a frame — what the company is, who it is for, and what must be true on day one.",
      },
      {
        week: "02–03",
        title: "Shape",
        text: "Information architecture, tone, and a living prototype in the browser. Stakeholders click the real thing, not a slide.",
      },
      {
        week: "04–06",
        title: "Craft",
        text: "High-fidelity interface, motion, and a component library. Design and engineering share a branch.",
      },
      {
        week: "07–08",
        title: "Ship",
        text: "Content, CMS, performance, and a handoff the internal team can run. Then we stay if you want a studio on retainer.",
      },
    ],
  },
  work: [
    {
      slug: "northline",
      client: "Northline",
      title: "A product website that keeps pace with the product",
      kicker: "SaaS · Finops",
      summary:
        "Northline needed a site that could ship weekly with the product. We rebuilt narrative, tokens, and a changelog that engineering actually uses.",
      href: "/work/northline",
      year: "2026",
      services: ["Product website", "Design system", "Engineering"],
      metrics: [
        { label: "Time to first page", value: "11 days" },
        { label: "Demo requests", value: "+64%" },
        { label: "Weekly deploys", value: "4.2" },
      ],
      tone: "dusk",
    },
    {
      slug: "helix-pay",
      client: "Helix Pay",
      title: "Payments, explained without the jargon",
      kicker: "Fintech · Brand",
      summary:
        "A category site for a payments API: quiet type, a live console, and a brand that still works inside the dashboard.",
      href: "/work/helix-pay",
      year: "2025",
      services: ["Brand", "Product website", "Motion"],
      metrics: [
        { label: "Series B site", value: "6 weeks" },
        { label: "Sales cycle", value: "−18%" },
        { label: "Brand NPS", value: "72" },
      ],
      tone: "ember",
    },
    {
      slug: "orion-health",
      client: "Orion Health",
      title: "Clinical software, made human",
      kicker: "Health · Platform",
      summary:
        "A public site and design system for a clinical operations platform — accessible, calm, and strict about evidence.",
      href: "/work/orion-health",
      year: "2025",
      services: ["Research", "Web", "Systems"],
      metrics: [
        { label: "WCAG", value: "AA" },
        { label: "Careers conversion", value: "2.4×" },
        { label: "Pages in system", value: "86" },
      ],
      tone: "haze",
    },
    {
      slug: "fieldnote",
      client: "Fieldnote",
      title: "Field software with an editorial spine",
      kicker: "Climate · Docs",
      summary:
        "Docs, marketing, and a customer journal on one stack — so the climate-tech story is maintained by the team that ships the product.",
      href: "/work/fieldnote",
      year: "2024",
      services: ["Docs", "Journal", "Engineering"],
      metrics: [
        { label: "Doc search", value: "<80ms" },
        { label: "Organic", value: "+140%" },
        { label: "Editors", value: "12" },
      ],
      tone: "ink",
    },
  ] satisfies WorkItem[],
  quotes: [
    {
      text: "They treated the website like a product. We shipped a changelog the same week as the feature — not six weeks later in a campaign.",
      name: "Amira Chen",
      role: "VP Product, Northline",
      href: "/work/northline",
    },
    {
      text: "The first Friday we had a prototype in the browser. By week six the brand, the site, and the dashboard were speaking the same language.",
      name: "Luis Navarro",
      role: "Founder, Helix Pay",
      href: "/work/helix-pay",
    },
    {
      text: "Accessible, fast, and quiet. Makerweb gave us a system our internal team still uses two years later.",
      name: "Priya Shah",
      role: "Head of Brand, Orion Health",
      href: "/work/orion-health",
    },
  ],
  partners: {
    kicker: "Who we sit with",
    headline: "Founders, brand leads, and the people who ship.",
    items: [
      {
        title: "Seed to Series B",
        text: "A site that can raise, hire, and sell — without looking like a template farm.",
      },
      {
        title: "In-house teams",
        text: "We embed beside design and engineering. The handoff is a repo, not a Figma graveyard.",
      },
      {
        title: "Category leaders",
        text: "Replatforms when the current site cannot keep up with the product or the brand.",
      },
    ],
  },
  banner: {
    kicker: "Retainers",
    headline: "A studio on your stack, every week.",
    text: "After launch we keep a small team on the same branch — new pages, experiments, and the unglamorous craft that makes a site feel alive.",
    cta: { label: "Talk about a retainer", href: "/contact" },
  },
  journal: [
    {
      date: "Aug 2026",
      title: "Websites as operating systems",
      href: "/journal",
      tag: "Essay",
    },
    {
      date: "Jul 2026",
      title: "Why we ship in the browser by week two",
      href: "/journal",
      tag: "Process",
    },
    {
      date: "Jun 2026",
      title: "Northline: a changelog that sales actually opens",
      href: "/journal",
      tag: "Case",
    },
    {
      date: "May 2026",
      title: "Grain, gradient, and when texture earns its keep",
      href: "/journal",
      tag: "Craft",
    },
  ],
  close: {
    headline: "Start a programme.",
    text: "A new site, a system, or a studio on retainer. We take a small number of partners at a time.",
    cta: { label: "Book a conversation", href: "/contact" },
  },
  studio: {
    headline: "A small studio with a long memory.",
    text: "Makerweb is designers, writers, and engineers in the same room. We are not a vendor that disappears after launch day.",
    stats: [
      { value: "10 yrs", label: "Making websites" },
      { value: "48", label: "Shipped programmes" },
      { value: "11", label: "People" },
      { value: "4", label: "Cities" },
    ],
    values: [
      {
        title: "Truth before taste",
        text: "A beautiful site that lies is still a bad site. We write the claim, then we design it.",
      },
      {
        title: "Craft is a habit",
        text: "Type, spacing, motion, and performance are not polish. They are the work.",
      },
      {
        title: "Stay for the boring bits",
        text: "Redirects, CMS training, empty states. That is where most agencies leave.",
      },
    ],
  },
  contact: {
    headline: "Tell us what you are making.",
    text: "A 30-minute conversation. If we are a fit, you get a written programme — scope, team, and a first Friday.",
    email: "hello@makerweb.studio",
    locations: "Amsterdam · Lisbon · New York",
  },
} as const
