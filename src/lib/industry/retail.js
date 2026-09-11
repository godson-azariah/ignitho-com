/**
 * Retail & Ecommerce page content. Same contract as `pharma.js` — the industry
 * template reads these keys directly, so copy stays verbatim from the original.
 */
export const RETAIL = {
  hero: {
    line1: "Data-Driven Intelligence for Predictive Retail -",
    line2: "Sense Demand Before the Buy",
  },

  trust: {
    /* the live retail row is inset 10 a side, not 30, giving a 352 card with
       20px padding — at 312 the McKinsey line ran to a third row */
    rowInset: "px-[10px] tablet:px-0",
    cardPad: "px-[20px]",
    titleTop: "Mastering the Velocity of",
    titleAccent: "Modern Retail",
    subtitle:
      "As market leaders move from AI experimentation to scale, the divide is defined by data maturity. A specialist foundation is now the prerequisite for capturing double-digit revenue growth",
    stats: [
      {
        value: "80%",
        icon: "pills",
        body: "Retail & CPG companies already piloting or using AI (NVIDIA)",
      },
      {
        value: "10-15%",
        icon: "clipboard",
        body: "Revenue increase for retailers implementing AI personalisation (McKinsey)",
      },
      {
        // The original counter renders no suffix here — value shown as "4,700".
        value: "4,700",
        icon: "microchip",
        body: "Surge in retail site traffic via AI assistants between 2024 and 2025 (Adobe)",
      },
      {
        value: "25%",
        icon: "shieldHalved",
        body: "Reduction in customer acquisition cost via AI-driven ad targeting (Deloitte)",
      },
    ],
  },

  problems: {
    titleTop: "Retail Data is Everywhere -",
    titleAccent: "Intelligence is Not",
    subtitle:
      "Retailers generate more data than almost any other sector – point-of-sale, web behaviour, supply chain events, social signals, loyalty interactions. But most sits in disconnected systems that don’t surface insight until it’s too late to act",
    items: [
      {
        icon: "database",
        title: "Demand blind spots & overstock",
        body: "Rule-based forecasting can’t separate campaign spikes from organic trend, leading to costly overstock cycles and markdown losses that erode margin",
      },
      {
        icon: "calendarClock",
        title: "Supply chain bottlenecks with no real-time visibility",
        body: "Order-to-delivery gaps caused by fragmented supplier data, late event detection, and logistics systems that don’t talk to merchandising platforms",
      },
      {
        icon: "shieldCheck",
        title: "Customer data trapped in silos",
        body: "Loyalty, web behaviour, and transaction data sitting in separate platforms – making unified 360° customer profiles and real-time personalisation impossible",
      },
      {
        icon: "microscope",
        title: "Disconnected ERP & CRM data layers",
        body: "ERP, CRM, OMS, and eCommerce platforms generating separate data streams – making unified inventory, customer, and revenue insight a months-long integration project",
      },
    ],
  },

  solutions: {
    titleTop: "Demand-Sensing Commerce,",
    titleAccent: "End to End",
    subtitle:
      "Every solution is drawn from Ignitho’s Agentic Commerce framework – connecting your existing ERP, CRM, and logistics data into a single intelligence layer that lets your supply chain act on tomorrow’s demand, today",
    flagship: {
      label: "FLAGSHIP SOLUTION",
      title: "Demand Forecasting & Inventory Intelligence",
      body: "Predictive models differentiating campaign-driven spikes from organic baseline demand – enabling teams to right-size inventory weeks ahead. Models self-update daily as sales data flows in. 20% overstock reduction achieved",
    },
    items: [
      {
        title: "Supply Chain Optimisation & Real-Time Visibility",
        body: "Identify and resolve bottlenecks across supplier, logistics, and fulfilment networks with real-time event detection and optimisation",
      },
      {
        title: "Customer Analytics & 360° Personalisation",
        body: "Unify loyalty, behavioural, and transaction data into governed customer profiles - enabling real-time personalisation and next-best-action",
      },
      {
        title: "Dynamic Pricing & Promotion Optimisation",
        body: "Replace manual pricing rules with models driven by live market signals, competitor data, and elasticity insights - eliminating blind promotion decisions",
      },
    ],
  },

  approach: {
    // the original's card row is 1176 wide here (4 cards + 3 x 20 gaps)
    rowMax: 1176,
    titleTop: "Non-disruptive by Design -",
    titleAccent: "Built for Retail Velocity",
    subtitle:
      "In retail, speed matters. Slow data projects kill season-critical decisions. Our 7-to-30-day sprint model gets working intelligence into merchandising, buying, and marketing hands within weeks – not after a lengthy transformation programme",
    steps: [
      {
        title: "7-Day Retail Data Triage & Landscape Audit",
        body: "Map your current data estate: ERP, OMS, loyalty platform, eCommerce analytics, and marketing stack. Identify where demand signals are lost, where inventory decisions are made blind, and which customer data is stranded in silos",
      },
      {
        title: "Unified Data Foundation & Integration Layer",
        body: "Build the governed integration layer connecting your ERP, OMS, CRM, and eCommerce platforms without replacing any of them. Establish data contracts, inventory data models, and demand signal pipelines",
      },
      {
        title: "Iterative Delivery - 7 to 30-Day Sprints",
        body: "Specialist POD teams build and deploy in short visible cycles. Each sprint closes with a working deliverable – a forecast model, segmentation dashboard, promotion tool, or attribution model",
      },
      {
        title: "Embed, Enable & Scale",
        titleLines: ["Embed, Enable &","Scale"],
        body: "Operationalise every model and dashboard into your workflow. Train buying, merchandising, and marketing teams to scale into a full retail intelligence platform",
      },
    ],
  },

  why: {
    title: "Why Ignitho",
    subtitle:
      "Ignitho has delivered for Sainsbury’s, Rue Gilt Group, and other retail leaders – not by replacing their existing platforms, but by building the intelligence layer on top of what they already run",
    image: {
      src: "/images/why-ignitho-industry.webp",
      alt: "Ignitho consultants working with a retail client team",
    },
    left: [
      {
        icon: "shieldCheck",
        title: "ERP-native integration",
        body: "Built on top of your existing ERP, CRM, OMS, and eCommerce platforms. Zero rip-and-replace. Immediate ROI without the disruption of a platform migration",
      },
      {
        icon: "lightbulb",
        title: "Day-1 productive senior practitioners",
        body: "Senior data engineers and data scientists who know Snowflake, Databricks, and AWS. No onboarding theatre. They integrate into your sprint cadence and deliver from week one",
      },
    ],
    right: [
      {
        icon: "rocket",
        title: "Retail-specific demand science",
        body: "We understand campaign attribution, seasonal demand curves, and overstock cycles. Forecasting models built for retail rhythms - not generic time-series",
      },
      {
        icon: "target",
        title: "Frugal innovation for retail",
        body: "Maximum intelligence from your existing data investments. Cloud cost optimisation, pipeline efficiency, and licensing rationalisation built into every engagement",
      },
    ],
  },
};
