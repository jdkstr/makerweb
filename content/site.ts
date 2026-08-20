export const site = {
  name: "Makerweb",
  legal: "Makerweb OÜ",
  tagline: "Web agency for Makers",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ],
  hero: {
    eyebrow: "Web agency for Makers",
    headline: "Digital agency for makers",
    text: "Building better digital experiences for physical and digital makers.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "See our work", href: "/#makers" },
  },
  principles: [
    {
      title: "Simplicity",
      text: "Lean, clean stacks. We ship an MVP instead of a strategy deck.",
    },
    {
      title: "Versatility",
      text: "Websites, apps, brand, analytics and automation on one programme.",
    },
    {
      title: "Effectiveness",
      text: "Designed for conversion, then iterated from real user feedback.",
    },
  ],
  studio: {
    kicker: "Makerweb Studio",
    title: "The workspace we run every programme from",
    text: "Sites, apps, automations and brand — one lean stack for makers and manufacturers.",
  },
  trust: {
    kicker: "Inspired by global makers",
    names: ["BASF", "Enel", "Bosch", "GEA", "ADNOC", "BHP"],
  },
  servicesIntro: {
    kicker: "Our Services",
    headline: "Creating delightful experiences",
  },
  services: [
    {
      label: "Website Development",
      text: "We design and develop beautiful and user-friendly websites for better conversion.",
      tone: "flame",
    },
    {
      label: "Automation & AI",
      text: "We automate your repeatable business processes with proven workflows, tools and Artificial Intelligence Agents (LLM Agents).",
      tone: "sun",
    },
    {
      label: "Internal Application Development",
      text: "We develop in-house applications and user-friendly interfaces for website and mobile applications to save costs and time.",
      tone: "lagoon",
    },
    {
      label: "Brand & Graphic Design",
      text: "We design memorable and thoughtful brands with coherent design patterns.",
      tone: "reef",
    },
    {
      label: "Implementation of business processes and tools",
      text: "CRMs, Websites, Analytics, Automation, Documentation — implemented for you.",
      tone: "raise",
    },
  ],
  servicePages: [
    {
      label: "Web Design",
      text: "Design clean, functional websites that showcase products and capabilities, helping you connect with your target markets & stakeholders and build credibility online.",
    },
    {
      label: "Web Analytics",
      text: "Monitor and analyze web performance to provide you with actionable insights, enabling data-driven improvements that drive user engagement and conversions.",
    },
    {
      label: "Graphic Design",
      text: "Create high-quality, industry-specific visuals that reflect the unique strengths of your industrial strengths, enhancing brand perception and engagement across digital and print media.",
    },
    {
      label: "Branding",
      text: "Craft a cohesive brand identity that resonates with your specialized industry, aligning visual and messaging elements to stand out in competitive markets.",
    },
    {
      label: "Web Apps",
      text: "Develop custom internal tools that streamline production processes, improve data management, save costs on expensive tools, and enhance collaboration for all your departments.",
    },
    {
      label: "Web Automation",
      text: "Automate workflows tailored to your business, reducing repetitive tasks, optimizing processes, and freeing up time for innovation.",
    },
  ],
  about: {
    kicker: "Makers for Makers",
    headline: "About Makerweb",
    principle:
      "Makerweb is a hybrid web design agency modernizing web solutions for makers and manufacturers with three core principles: simplicity, versatility & effectiveness.",
    title: "For makers by makers",
    text: "We're a fresh team of digital makers and designers who are passionate about making better digital experiences for makers in the physical and digital world.",
    chips: ["web", "brand", "design", "graphics", "automation", "apps"],
  },
  process: {
    kicker: "Our Process",
    headline: "Ship fast, iterate",
    steps: [
      {
        week: "01",
        title: "Project Brief",
        text: "Start by defining the project's scope, objectives, and the minimum viable product (MVP) features needed to meet initial customer needs. This foundation ensures everyone understands the project's direction and key deliverables.",
      },
      {
        week: "02",
        title: "Ship MVP Fast",
        text: "Develop and launch the Minimum Viable Product (MVP) quickly to get your product in the hands of users as soon as possible. This initial release focuses on core functionalities to gather user feedback without waiting for perfection.",
      },
      {
        week: "03",
        title: "Iterate",
        text: "Use the feedback collected from the MVP to make informed decisions on feature improvements and additions. Continuously iterate on the product, enhancing and refining with each cycle, until the final vision is achieved.",
      },
      {
        week: "04",
        title: "Ongoing Support",
        text: "Once the envisioned project has been delivered, it is important to keep catering to the needs of your organization and customers. Ongoing support ensures continued business success.",
      },
    ],
  },
  faq: {
    kicker: "Your questions answered",
    headline: "Frequently asked questions",
    items: [
      {
        q: "What makes Makerweb different from other agencies?",
        a: "We're makers for makers. We work with manufacturers and digital product teams, keep the tech stack lean and clean, and ship an MVP instead of a strategy deck. Simplicity, versatility and effectiveness are the brief — not extras.",
      },
      {
        q: "What do web and design solutions cost with Makerweb?",
        a: "Every programme starts with a project brief. After a conversation we send a written estimate for the MVP and the iterations that follow. No retainers required to start; ongoing support is available after launch.",
      },
      {
        q: "How does Makerweb ensure its web solutions are effective?",
        a: "We ship the smallest useful version, measure it, and iterate. Websites, analytics, automation and internal tools are implemented together so conversion, operations and brand stay on one stack.",
      },
    ],
  },
  close: {
    headline: "Got a project?",
    cta: { label: "Work with us", href: "/contact" },
  },
  contact: {
    headline: "Contact us",
    text: "To brainstorm how Makerweb can help you improve your digital presence while keeping your tech stack lean and clean.",
  },
  footer: {
    locations:
      "Global team · 🇦🇪 UAE · 🇳🇱 Netherlands · 🇽🇰 Kosovo · 🇮🇩 Indonesia · 🇧🇩 Bangladesh",
  },
} as const
