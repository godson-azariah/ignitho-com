/**
 * Page content lifted from the original site. Kept out of the components so the
 * same service/industry data can back the home page and the detail pages.
 */

export const ANNOUNCEMENT = {
  text: "Ignitho is proud to be a Showcase Sponsor at CDO Magazine’s Chicago Data & AI Leadership Summit on September 17, 2026",
  ctaLabel: "Learn More",
  ctaHref:
    "https://live.cdomagazine.tech/2026_Chicago_Leadership_Summit/home",
};

export const HERO = {
  eyebrow: "The Data & AI Specialists",
  title: "Delivering Data, Analytics & AI Services for The Enterprise",
  body: "Powered by a leadership team from top-tier IT majors and US-headquartered with a global footprint, Ignitho orchestrates high velocity Data & AI ecosystems for leading enterprises and Fortune 500 companies, bridging the gap between complex technology and real-world ROI",
  image: {
    src: "/images/d13f9753-e2b0-4fac-929e-a2e945b8507e.webp",
    alt: "Ignitho consultants reviewing an enterprise data platform",
    width: 1024,
    height: 798,
  },
  badges: [
    { src: "/images/2-2.png", alt: "ISG Noteworthy Provider — Advanced Analytics & AI" },
    { src: "/images/3-4.png", alt: "Since 2016 — A Track Record of Excellence" },
    { src: "/images/4-4.png", alt: "ISO Global Security Standards" },
    { src: "/images/5-3.png", alt: "Industry Partnerships — Databricks, Snowflake, Microsoft" },
  ],
};

export const FRUGAL = {
  title: "Applying the Frugal Innovation Principle",
  subtitle:
    "The Art of Doing More with Less: A methodology co-developed with the University of Cambridge",
  pillars: [
    {
      title: "Maximize Existing Investments",
      body: "Optimize current spend and unlock the latent value of your existing tech stack",
    },
    {
      title: "Zero Tool Inflation",
      body: "Deliver outcomes with no new licensing or tool costs – master what you already own",
    },
    {
      title: "The Efficiency Nexus",
      body: "Faster, better, economically superior. High-velocity delivery without the operational bloat",
    },
  ],
};

export const COMPLEXITY = {
  title: "Foundation Pillars of FRIEND",
  subtitle:
    "We navigate the risks of fragmented data and governance, ensuring your growth is never stalled by legacy limitations & technological complexity",
  image: {
    src: "/images/why-ignitho.webp",
    alt: "Ignitho team collaborating around a data platform",
    width: 1024,
    height: 1024,
  },
  items: [
    {
      title: "Maximize Existing Investments",
      body: "Optimize current spend and unlock the latent value of your existing tech stack",
    },
    {
      title: "Zero Tool Inflation",
      body: "Deliver outcomes with no new licensing or tool costs - master what you already own",
    },
    {
      title: "The Efficiency Nexus",
      body: "Faster, better, economically superior. High velocity delivery without the operational bloat",
    },
    {
      title: "Amplifying Expertise",
      body: "Amplify expert teams with AI agents to deliver value, faster without adding complexity.",
    },
  ],
};

/* `titleLines` fixes where each card heading breaks, so the wrap does not drift
   with card width. `title` stays the plain string for metadata and alt text. */
export const SERVICES = [
  {
    title: "Data Engineering & Consulting",
    titleLines: ["Data Engineering &", "Consulting"],
    href: "/data-engineering",
    points: [
      "Modern Data Warehouses & Data Lakes",
      "Real-time Data Streaming",
      "ETL/ELT Pipeline Optimization",
      "Cloud Migration & Modernization",
    ],
  },
  {
    title: "Advanced Analytics & Data Science",
    titleLines: ["Advanced Analytics &", "Data Science"],
    href: "/analytics",
    points: [
      "Self-Service BI & Visual Dashboards",
      "Predictive Modeling & Forecasting",
      "KPI Development & Reporting Automation",
      "Advanced Statistical Analysis",
    ],
  },
  {
    title: "Frugal AI Enablement",
    titleLines: ["Frugal AI", "Enablement"],
    href: "/applied-ai",
    points: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision & Recommendation Systems",
      "Robotic Process Automation",
    ],
  },
];

/* `titleLines` / `bodyLines` pin every line break to the original's, including
   its mid-word hyphen breaks. `title` and `body` stay as plain strings.

   Order and labels updated: each card keeps its original href, image and body
   (so the tile still links to the same page and uses the same photo) — only
   the sequence and the display text changed. */
export const INDUSTRY_CARDS = [
  {
    title: "Travel and logistics",
    titleLines: ["Travel and", "Logistics"],
    body: "Optimize operations with real-time tracking and data intelligence",
    bodyLines: [
      "Optimize operations with real-",
      "time tracking and data",
      "intelligence",
    ],
    href: "/travel",
    image: "/images/ind-travel.webp",
  },
  {
    title: "Healthcare and life sciences",
    titleLines: ["Healthcare and", "Life Sciences"],
    body: "Improve patient outcomes with secure, scalable data platforms and analytics",
    bodyLines: [
      "Improve patient outcomes with",
      "secure, scalable data platforms",
      "and analytics",
    ],
    href: "/pharma",
    image: "/images/ind-pharma.webp",
  },
  {
    title: "Media and communications",
    titleLines: ["Media and", "Communications"],
    body: "Power content delivery and audience insights with modern data stacks",
    bodyLines: [
      "Power content delivery and",
      "audience insights with modern",
      "data stacks",
    ],
    href: "/media",
    image: "/images/ind-media.webp",
  },
  {
    title: "Retail, CPG and manufacturing",
    titleLines: ["Retail, CPG", "and Manufacturing"],
    body: "Deliver personalized shopping experiences with data-driven insights",
    bodyLines: [
      "Deliver personalized shopping",
      "experiences with data-",
      "driven insights",
    ],
    href: "/retail",
    image: "/images/ind-retail.webp",
  },
  {
    title: "Banking, financial services and insurance",
    titleLines: ["Banking, Financial", "Services and", "Insurance"],
    body: "Enhance decision-making with real-time financial data platforms",
    bodyLines: [
      "Enhance decision-making",
      "with real-time financial",
      "data platforms",
    ],
    href: "/banking",
    image: "/images/ind-bfsi.webp",
  },
];

/* Counters animate 0 -> target over 5s once scrolled into view, as on the original. */
export const IMPACT_STATS = [
  {
    tag: "RETAIL",
    icon: "trend",
    target: 360,
    suffix: "°",
    label: "Dynamic Pricing",
    body: "Unified stock visibility with hyper-individualized customer journeys",
    bodyLines: [
      "Unified stock visibility with hyper-",
      "individualized customer journeys",
    ],
  },
  {
    tag: "PHARMA",
    icon: "molecule",
    target: 72,
    suffix: "%",
    label: "Cost Reduction",
    body: "Implementation cost reduction for global healthcare systems",
    bodyLines: [
      "Implementation cost reduction for",
      "global healthcare systems",
    ],
  },
  {
    tag: "BFSI",
    icon: "clock",
    target: 15,
    suffix: "min",
    label: "Decision Speed",
    body: "Slashed underwriting decision latency from 8 hours to 15 minutes via NLP Rule Engines",
    bodyLines: [
      "Slashed underwriting decision",
      "latency from 8 hours to 15 minutes",
      "via NLP Rule Engines",
    ],
  },
  {
    tag: "INFRA",
    icon: "bars",
    target: 35,
    suffix: "%",
    label: "Cost Reduction",
    body: "35% cost reduction through autonomous infrastructure maintenance",
    bodyLines: [
      "35% cost reduction through",
      "autonomous infrastructure",
      "maintenance",
    ],
  },
];

export const CLIENT_LOGOS = [
  { src: "/images/1.png", alt: "Sainsbury's" },
  { src: "/images/2-1.png", alt: "Client logo" },
  { src: "/images/3-2.png", alt: "Client logo" },
  { src: "/images/4-3.png", alt: "Client logo" },
  { src: "/images/5-2.png", alt: "Client logo" },
  { src: "/images/6-2.png", alt: "Client logo" },
  { src: "/images/7.png", alt: "Client logo" },
  { src: "/images/8.png", alt: "Client logo" },
  { src: "/images/9.png", alt: "Client logo" },
  { src: "/images/10.png", alt: "Client logo" },
];

export const PARTNER_LOGOS = [
  { src: "/images/databricks.png", alt: "Databricks" },
  { src: "/images/aws.png", alt: "AWS" },
  { src: "/images/domo-logo.png", alt: "Domo" },
  { src: "/images/h20ai.png", alt: "H2O.ai" },
  { src: "/images/jira.png", alt: "Jira" },
  { src: "/images/micro.png", alt: "Microsoft Power BI" },
  { src: "/images/qlik.png", alt: "Qlik" },
  { src: "/images/salesforce.png", alt: "Salesforce" },
  { src: "/images/snoflake.png", alt: "Snowflake" },
  { src: "/images/tabl.png", alt: "Tableau" },
  { src: "/images/tiiie.png", alt: "TE" },
  { src: "/images/troyavi-logo.png", alt: "TroyAvi" },
  { src: "/images/sussex-innovation.png", alt: "Sussex Innovation" },
  { src: "/images/informatica.png", alt: "Informatica" },
];

export const CONTACT_CTA = {
  title: "Fancy a chat?",
  body: "We have offices and teams across the USA, UK, Sweden, India and Costa Rica for a coffee catchup",
  ctaLabel: "Schedule A Discovery Call",
  map: "/images/ignitho-updated-map.svg",
};