/**
 * Data Engineering & Consulting page content.
 *
 * Every geometry note lives with the component; this file is text and asset
 * references only. Values were read out of the captured original at 1440w.
 */
export const DATA_ENGINEERING = {
  hero: {
    // 40/52 on a phone, measured off the live page
    titleClass: "text-[40px] leading-[52px]",
    line1: "Data Engineering & Consulting",
    line2: "for Enterprise-Scale Outcomes",
  },

  problem: {
    // phone-width values measured off the live page; the sm: halves restore
    // the desktop geometry this page was originally built to
    leadSize: "text-[22px]",
    leadLh: "leading-[36.3px]",
    rowClass: "max-w-[1172px] gap-5 px-[15px] sm:px-0",
    cardMinH: "min-h-0 sm:min-h-[308px]",
    cardClass: "text-center sm:text-left",
    headClass: "justify-center sm:justify-start",
    hugTitle: true,
    // the stat row is inset a further 20px a side on a phone and its label
    // is centred under the figure
    statsRowClass: "px-[20px] sm:px-0",
    statLabelClass: "text-center sm:text-left",
    // hug the wrapped title so the icon sits beside it and the pair centres
    titleClass:
      "w-fit text-[20px] font-bold leading-[26px] sm:w-auto",
    bodyClass:
      "mt-[12px] px-[10px] text-[18px] leading-[29.7px] text-white/70 sm:text-[17px] sm:leading-[28.05px]",
    titleTop: "Most Enterprises Don’t Lack Data -",
    titleAccent: "They Lack the Infrastructure to Use It",
    lead: "After years of platform investments, the reality for most mid-to-large enterprises is a fragmented, expensive, and underperforming data landscape. Tools accumulate. Pipelines break. Teams firefight. ROI disappears into complexity. This is the problem Ignitho was built to solve — not by adding more technology, but by applying Frugal Innovation: making what you already own work at its full potential",
    /* cards alternate purple / green across the row */
    cards: [
      {
        icon: "hourglass",
        title: "Manual Bottlenecks & Pipeline Debt",
        body: "Complex ETL pipelines requiring extensive manual maintenance, causing IT dependency and delivery delays that block business decisions",
      },
      {
        icon: "link",
        title: "Disconnected Data Silos",
        body: "Data trapped across cloud APIs, legacy files, and SaaS platforms – fragmented ecosystems that make unified reporting impossible without manual intervention",
      },
      {
        icon: "shield",
        title: "Data Quality & Decision Risk",
        body: "Frequent inconsistencies and errors in source data that cascade into unreliable dashboards, delayed board reporting, and flawed strategic decisions",
      },
      {
        icon: "globe",
        title: "Cloud Cost Overruns",
        body: "Poorly optimized queries, uncompressed data formats, and over-provisioned infrastructure that inflate cloud bills while delivering no additional insight",
      },
    ],
    stats: [
      { value: "90%", label: "of enterprises say messy data blocks their AI readiness" },
      { value: "4 Months", label: "average time to hire a senior data engineer in the market" },
      { value: "40%", label: "of data engineering time spent on manual pipeline fixes" },
      { value: "3x", label: "higher cloud cost when ETL pipelines are not optimized" },
    ],
  },

  lifecycle: {
    title: "Full Data Platform Lifecycle",
    lead: "Our data engineering practice covers the full data platform lifecycle – from raw ingestion through to business-ready intelligence layers. Every engagement is anchored to your existing technology investments, not a new vendor stack",
    items: [
      {
        title: "Real-Time Data Streaming & Pipeline Engineering",
        body: "Build event-driven, low-latency data pipelines that move, transform, and validate data at speed. We architect streaming infrastructure on Kafka, Kinesis, and Azure Event Hubs – enabling real-time decisioning, fraud detection, and operational intelligence without overhauling your existing landscape",
        image: "/images/de/streaming.webp",
        tags: ["Kafka", "Kinesis", "Azure Event Hubs"],
        icon: "zap",
      },
      {
        title: "Modern Data Warehouse & Lakehouse Design",
        body: "Architect scalable, cost-efficient data warehouses and lakehouses on Snowflake, Databricks, and cloud-native platforms. We migrate legacy systems, implement medallion architectures, and establish data contracts that make your warehouse a reliable source of truth",
        image: "/images/de/warehouse.webp",
        tags: ["Snowflake", "Kinesis", "Azure Event Hubs"],
        icon: "database",
      },
      {
        title: "ETL/ELT Pipeline Optimization & Reliability Engineering",
        body: "Rescue, stabilize, and optimize broken or inefficient data pipelines. We audit ETL processes, rewrite transformations, remove manual interventions, and implement monitoring",
        image: "/images/de/etl.webp",
        tags: ["ETL/ELT", "Monitoring", "Automation"],
        icon: "gitBranch",
      },
      {
        title: "Cloud Migration & Platform Modernization",
        body: "Execute low-risk migrations from legacy on-prem infrastructure to cloud-native platforms. We run parallel workloads, validate parity, and cut over only when confidence is achieved. We specialize in Oracle, SQL Server, and Teradata migrations to Snowflake and Databricks on AWS or Azure — often achieving 30–50% reduction in cloud consumption bills",
        image: "/images/de/migration.webp",
        tags: ["Oracle", "Teradata", "AWS", "Azure"],
        icon: "cloud",
      },
      {
        title: "Data Quality, Governance & Observability",
        body: "Implement data quality frameworks, automated testing, and observability tooling. We build Great Expectations suites, Monte Carlo integrations, and dbt testing layers",
        image: "/images/de/quality.webp",
        tags: ["Great Expectations", "Monte Carlo", "dbt"],
        icon: "cloud",
      },
      {
        title: "Data Platform Architecture & Consulting",
        body: "Independent advisory for CDOs, CIOs, and Heads of Data Engineering to evaluate architecture, make stack decisions, and build a pragmatic roadmap",
        image: "/images/de/architecture.webp",
        tags: ["Architecture Review", "Stack Advisory", "Roadmap"],
        icon: "layers",
      },
    ],
  },

  delivery: {
    // phone-width values off the live page: bigger lead, a 20px row inset,
    // centred card copy and no height floor
    leadSize: "text-[22px]",
    leadLh: "leading-[36.3px]",
    rowClass: "max-w-[1160px] px-[20px] sm:px-0",
    cardClass:
      "min-h-[207px] px-[20px] py-[10px] text-center sm:text-left",
    hugTitle: true,
    titleClass: "mx-auto mt-[14px] w-fit font-bold sm:mx-0",
    bodyClass: "mt-[6px] text-[18px] leading-[29.7px]",
    titleTop: "From Discovery to Production -",
    titleAccent: "In Weeks, Not Quarters",
    lead: "Ignitho’s delivery model is anchored in short, outcome-focused cycles. We do not run long discovery phases, produce dense architecture documents, and then disappear for six months. Every phase produces a tangible, measurable deliverable",
    steps: [
      {
        title: "7-Day Triage & Discovery",
        body: "Rapid assessment of your current data stack, pipeline inventory, and key pain points",
      },
      {
        title: "Sprint Zero - Architecture & Planning",
        body: "Define the target architecture, data contracts, and delivery milestones",
      },
      {
        title: "Iterative Delivery - 7 to 30-Day Sprints",
        body: "Outcome-driven sprints with continuous feedback and deployed deliverables",
      },
      {
        title: "Stabilize, Optimize & Handover",
        body: "Production hardening, performance tuning, documentation,& enablement",
      },
    ],
  },

  pods: {
    titleTop: "Specialist PODs - Self-Contained, Outcome-Driven,",
    titleAccent: "Day-1 Productive",
    lead: "Ignitho deploys self-contained Specialist PODs: cross-functional delivery units that combine Human Intelligence (senior practitioners), Artificial Intelligence (automation and AI agents), and Technology Intelligence (your existing platforms). Each POD integrates into your existing Agile/Jira workflow on Day 1. There is no ramp-up theatre, no management overhead, and no hand-holding required. Your engineers get time back, not a new team to manage",
    centre: { title: "Specialist POD", subtitle: "One self-contained unit" },
    /* five faces plus the teal AI node, evenly spaced on the orbit */
    personas: [
      "/images/de/persona-2.webp",
      "/images/de/persona-4.webp",
      "/images/de/persona-3.webp",
      "/images/de/persona-1.webp",
      "/images/de/persona-5.webp",
    ],
    points: [
      {
        icon: "userBadge",
        title: "Single point of accountability",
        body: "One POD Leader owns delivery and acts as your primary interface. No diffuse responsibility, no finger-pointing between teams",
      },
      {
        icon: "clock",
        title: "Agile velocity: 7 to 30-day sprint cycles",
        body: "Short, continuous delivery cycles with visible progress at every sprint review. Business stakeholders see outcomes, not activity metrics",
      },
      {
        icon: "link",
        title: "Plug-and-play integration",
        body: "Works within your existing tools, governance frameworks, and operating models. No disruptive change management. No rip-and-replace mentality",
      },
      {
        icon: "spark",
        title: "AI-augmented delivery speed",
        body: "Automated data quality validation, AI-assisted code review, and accelerator libraries built into the POD reduce delivery time by up to 40%",
      },
    ],
  },

  tiers: {
    titleTop: "Solving Your Data Problems,",
    titleAccent: "Big or Small",
    lead: "From clearing a pipeline backlog in two weeks to running a multi-year modernization programme. Ignitho has an engagement model that fits your urgency, budget, and risk appetite",
    note: "*All engagements can begin under a specialist waiver – bypassing PSL bottlenecks for niche, high-velocity data work",
    items: [
      {
        tier: "Tier 1",
        title: "Tactical Intervention",
        tagline: "The “Quick Win”",
        body: "Broken pipelines, dashboard backlogs, urgent board deadlines, or a stalled proof-of-concept that needs rescuing",
        points: [
          "Accelerated Task Force deployment in days",
          "No long-term MSA required to start",
          "Clears technical debt and stalled backlog immediately",
          "Ideal for: quick wins before a board or audit event",
        ],
      },
      {
        tier: "Tier 2",
        title: "Agile Scaling",
        tagline: "The “Velocity Engine”",
        body: "Internal teams overwhelmed by maintenance, or facing a 4+ month hiring delay for senior data engineers",
        featured: true,
        points: [
          "Self-governed Specialist POD embedded in your team",
          "Integrates with your existing Agile/Jira workflow",
          "Senior practitioners from day one, no ramp-up theatre",
          "7 to 30-day iterative sprint cycles with visible outcomes",
          "Ideal for: ongoing data platform delivery at velocity",
        ],
      },
      {
        tier: "Tier 3",
        title: "Strategic Transformation",
        tagline: "The “Enterprise Partner”",
        body: "Modernizing full data stacks to Snowflake or Databricks, or building an enterprise-wide data strategy and AI readiness programme",
        points: [
          "Managed Outcome Partnership with full delivery ownership",
          "Architecture advisory and platform decision governance",
          "Multi-POD coordination across workstreams",
          "Measurable ROI milestones and shared accountability",
          "Ideal for: CDO/CIO-led transformation programmes",
        ],
      },
    ],
  },
};
