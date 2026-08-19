/**
 * Banking, Financial Services & Insurance page content. Same contract as
 * `pharma.js` — the industry template reads these keys directly, so copy stays
 * verbatim from the original.
 */
export const BANKING = {
  // this page's band leads run the muted grey, not the purple
  leadTone: "muted",
  hero: {
    line1: "Data-First Intelligence for Scalable",
    line2: "Banking Financial Services & Insurance Decisions",
  },

  trust: {
    titleTop: "Why a Specialist Data Approach is",
    titleAccent: "No Longer Optional",
    subtitle:
      "As the divide between legacy operations and intelligent ecosystems widens, the numbers favour firms that prioritise data engineering as their primary competitive defence",
    stats: [
      {
        value: "65%",
        icon: "pills",
        body: "BFSI leaders say data silos are their top barrier to digital transformation",
      },
      {
        // Elementor counter: value 4 with the suffix " Months".
        value: "4 Months",
        icon: "clipboard",
        body: "Average time to hire a senior data engineer in financial services",
      },
      {
        value: "20%",
        icon: "microchip",
        body: "Revenue increase reported by banks implementing advanced analytics (McKinsey)",
      },
      {
        // Elementor counter: prefix "$", value 4.6, suffix "T".
        value: "$4.6T",
        icon: "gear",
        body: "Annual cost of financial crime globally – analytics is the primary defence",
      },
    ],
  },

  problems: {
    titleTop: "Legacy Complexity Blocking the Intelligence",
    titleAccent: "Your Business Needs",
    subtitle:
      "BFSI institutions carry decades of technology debt – disconnected core banking systems, claims platforms, CRM stacks, and regulatory warehouses resulting in slow decisions, compliance risk, and growing operational headcount",
    items: [
      {
        icon: "database",
        title: "Fragmented core systems",
        body: "Policy management, claims, CRM, and risk platforms that don’t talk to each other, creating data blind spots at critical decisioning moments",
      },
      {
        icon: "calendarClock",
        title: "Slow underwriting & claims cycles",
        body: "High-value practitioners bogged down in document review and manual data entry instead of risk assessment and relationship decisions",
      },
      {
        icon: "shieldCheck",
        title: "Customer data silos",
        body: "360-degree customer view is the aspiration, while disconnected product data, interaction history, and risk profiles make it a multi-year programme rather than a sprint",
      },
      {
        icon: "microscope",
        title: "Portfolio intelligence gaps",
        body: "Asset management and investment platforms generating data that isn’t being used for real-time portfolio intelligence or next-best-action decisioning",
      },
    ],
  },

  solutions: {
    titleTop: "From Risk Intelligence to",
    titleAccent: "Agentic Operations",
    subtitle:
      "Designed to transition financial institutions from legacy operations to high-velocity intelligent financial ecosystems – built on the platforms you already run",
    flagship: {
      label: "FLAGSHIP SOLUTION",
      title: "Predictive Risk & Fraud Detection",
      body: "AI-powered anomaly detection integrating with existing risk frameworks, identifying fraudulent patterns at submission, not after the event",
    },
    items: [
      {
        title: "Regulatory Reporting Automation",
        body: "Streamline data calls and regulatory submissions, reducing latency, manual error, and cost across GDPR, Basel III, Solvency II, and IFRS",
      },
      {
        title: "Asset Management & Investment Platforms",
        body: "AI-augmented platforms for real-time portfolio intelligence, decisioning, and performance reporting across banking and insurance products",
      },
      {
        title: "360° Customer View & Personalisation",
        body: "Unify product, interaction, and risk data into a single governed customer profile - driving next-best-action and retention analytics",
      },
    ],
  },

  approach: {
    // the original's card row is 1240 wide here (4 cards + 3 x 20 gaps)
    rowMax: 1240,
    titleTop: "Built for regulated environments -",
    titleAccent: "Delivered in sprints",
    subtitle:
      "In BFSI, change management is as complex as the technology. Every engagement integrates into your existing operations, governance frameworks, and vendor ecosystem, without the disruption large-scale transformation programmes routinely deliver",
    steps: [
      {
        title: "7-Day BFSI Triage & Data Landscape Audit",
        body: "Map your current data estate – core systems, data flows, compliance obligations, and the operational bottlenecks costing you the most",
      },
      {
        title: "Governed Data Foundation & Platform Setup",
        body: "Establish data contracts, lineage, access controls, and audit trails within your approved cloud and security stack, not ours",
      },
      {
        title: "AI & Analytics Deployment in 7-to-30-Day Sprints",
        body: "Specialist POD teams deploy in short visible cycles. Every sprint closes with a working dashboard, deployed risk model, or automated reporting pipeline",
      },
      {
        title: "Stabilize, Enable & Handover",
        titleLines: ["Stabilize, Enable &","Handover"],
        body: "Production hardening, compliance sign-off support, and team enablement, leaving your institution in full control of a governed, auditable data estate",
      },
    ],
  },

  why: {
    title: "Why Ignitho",
    subtitle:
      "Large SIs manage the macro transformation. We fill the execution gap – the pipeline reliability, the compliance data layer, the underwriting capability that gets deployed rather than staying in a proof of concept",
    image: {
      src: "/images/why-ignitho-industry.webp",
      alt: "Ignitho consultants working with a banking, financial services and insurance client team",
    },
    left: [
      {
        icon: "shieldCheck",
        title: "Non-disruptive by design",
        body: "We integrate into your existing platforms - Azure, AWS, Databricks, Snowflake, or whatever your approved stack is. No rip-and-replace. No displacing your incumbent vendors or internal teams",
      },
      {
        icon: "lightbulb",
        title: "Day-1 Productive senior practitioners",
        body: "Senior data engineers and data scientists who know Snowflake, Azure, and AWS. We pick up your backlog and deliver - no ramp-up theatre, no management overhead",
      },
    ],
    right: [
      {
        icon: "rocket",
        title: "Regulated-industry experience",
        body: "Passed vendor risk assessments at some of the world's most strictly regulated financial institutions. Compliance built into our delivery model, not bolted on at the end",
      },
      {
        icon: "target",
        title: "Frugal Innovation for BFSI",
        body: "Maximum value from your existing technology investments before recommending anything new",
      },
    ],
  },
};
