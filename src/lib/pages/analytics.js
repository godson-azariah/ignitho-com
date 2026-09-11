/**
 * Advanced Analytics & Data Science page content.
 *
 * Built from reference/analytics/ (the capture that matches the live page).
 * Note: reference/advanced-analytics-data-science/ is a different, older cut
 * of this page — it carries hero trust badges and an extra "Why Ignitho" band.
 *
 * Structurally identical to /data-engineering except the problem band has no
 * stat-counter row.
 */
export const ANALYTICS = {
  hero: {
    line1: "Advanced Analytics & Data Science",
    line2: "for Insight-Driven Decision",
  },

  problem: {
    // phone-width values off the live page: no height floor, the icon and
    // title centred as a pair, and the body centred and inset 10px a side
    cardMinH: "min-h-0 sm:min-h-[190px]",
    cardClass: "pb-[45px] sm:pb-[20px]",
    headClass: "justify-center sm:justify-start",
    hugTitle: true,
    titleClass: "w-fit text-[17px] font-semibold leading-[22.1px] sm:w-auto",
    bodyClass:
      "mt-[11px] px-[10px] text-center text-[14px] leading-[23.1px] text-white/70 sm:px-0 sm:text-left",
    /* shorter, tighter cards than /data-engineering: 210 tall on a
       1180 row with 10px gaps, 17/600 titles and 14/23.1 bodies */
    dense: true,
    /* the live band capitalises the heading in CSS and runs 29/37.7 on a
       phone, 44/60 from 768; the lead is a 20/33 -> 21/34.65 purple, not the
       grey the other pages use */
    headingBase: "capitalize text-[29px] leading-[37.7px]",
    headingSm: "tablet:text-[44px] tablet:leading-[60px]",
    leadSize: "text-[20px] tablet:text-[21px]",
    leadLh: "leading-[33px] tablet:leading-[34.65px]",
    leadLgSize: "lg:text-[21px]",
    leadLgLh: "lg:leading-[34.65px]",
    leadColor: "text-[#622baa]",
    leadClass: "mt-[13px] tablet:mt-[6px] lg:mt-[12px]",
    titleTop: "Most enterprises are drowning in data",
    titleAccent: "But starving for decisions",
    lead: "Dashboards multiply, reports pile up, and the finance team still exports to Excel every Monday morning. The problem is not a shortage of data – it is an excess of noise, a deficit of trust, and analytics tools that serve the data team but not the decision-maker. Ignitho cuts through. We build analytics that leaders actually open, forecasts they trust, and insight workflows that run themselves",
    /* cards alternate purple / green across the row */
    cards: [
      {
        icon: "eyeOff",
        title: "Blind spots in reporting - data without context",
        body: "Dashboards built for analysts, not decision-makers. KPIs that mask critical gaps",
      },
      {
        icon: "unlink",
        title: "Slow insight cycles that lag behind the business",
        body: "Reports arrive too late. Teams spend more time preparing data than analysing it",
      },
      {
        icon: "table",
        title: "Spreadsheet dependency & manual processes",
        body: "Critical metrics locked in spreadsheets owned by one person",
      },
      {
        icon: "cycle",
        title: "AI Models That Never Reach Production",
        body: "Predictive models stay in notebooks instead of driving decisions",
      },
    ],
  },

  lifecycle: {
    // 40/52 heading and a purple lead with one bold run, per the live page
    headingBase: "text-[40px] leading-[52px]",
    leadLh: "leading-[29.7px]",
    leadColor: "text-[#622baa]",
    leadBold: "insight at the speed of the business",
    /* 16/26.4 panel body, as the original — keeps the panel from
       outgrowing the tab column beside it */
    compact: true,
    /* the live page runs this content as small stacked cards on a phone (art 140
       tall, 18/23.4 title, 14/22.4 body); our panel came out ~2.5x that height.
       Below 640px only — tablet and desktop keep the panel as it is. */
    phoneCompact: true,
    title: "What We Deliver",
    lead: "From self-service BI that your CXO actually uses to predictive models embedded in your operational workflows – our analytics practice delivers insight at the speed of the business, not the speed of the data team",
    items: [
      {
        title: "Self-Service BI & Visual Dashboards",
        body: "Build dashboards that decision-makers open every morning, not data teams. We design and implement self-service BI environments in Power BI, Tableau, and Looker – with governed data models, semantic layers, and role-based access that put the right numbers in front of the right people. No data analyst required to run a report",
        image: "/images/aa/bi.webp",
        tags: ["Power BI", "Tableau", "Looker", "Qlik", "AWS QuickSight", "dbt Semantic Layer"],
        icon: "zap",
      },
      {
        title: "Predictive Modelling & Forecasting",
        body: "Replace gut feel and spreadsheet extrapolation with statistically grounded, self-updating forecast models. We build demand forecasting, revenue projection, churn prediction, and risk scoring models – all calibrated on your actual data and designed to improve continuously",
        image: "/images/aa/forecasting.webp",
        tags: ["Python", "R", "AWS SageMaker", "Azure ML", "MLflow", "XGBoost"],
        icon: "database",
      },
      {
        title: "KPI Development & Performance Frameworks",
        body: "Define, align, and operationalize the metrics that actually matter. We design KPI hierarchies – from board-level outcomes to operational indicators – and build systems that keep them consistent and trusted",
        image: "/images/aa/kpi.webp",
        tags: ["KPI Design", "Semantic Layer", "Governance"],
        icon: "gitBranch",
      },
      {
        title: "Reporting Automation & Analytics Engineering",
        body: "Eliminate the Monday morning spreadsheet panic. We automate reporting pipelines end-to-end – from extraction to delivery. Ensuring every team uses the same definition of revenue, active customer, or EBITDA",
        image: "/images/aa/reporting.webp",
        tags: ["dbt", "Airflow", "Automation"],
        icon: "cloud",
      },
      {
        title: "Advanced Statistical Analysis & Data Science Advisory",
        body: "Hypothesis testing, A/B experiments, cohort analysis, segmentation, anomaly detection, and causal inference – delivered clearly and without black boxes",
        image: "/images/aa/stats.webp",
        tags: ["Great Expectations", "Monte Carlo", "dbt"],
        icon: "cloud",
      },
      {
        title: "Data Platform Architecture & Consulting",
        body: "Independent advisory for CDOs, CIOs, and Heads of Data Engineering to evaluate architecture, make stack decisions, and build a pragmatic roadmap",
        image: "/images/aa/architecture.webp",
        tags: ["Architecture Review", "Stack Advisory", "Roadmap"],
        icon: "layers",
      },
    ],
  },

  delivery: {
    /* this page runs the step cards tighter than /data-engineering:
       212 tall, 20px padding all round, content centred, 15/24.75 body */
    dense: true,
    // phone-width values off the live page: 20/33 lead, no height floor and
    // the heading centred over a centred body
    leadSize: "text-[20px]",
    leadLh: "leading-[33px]",
    cardClass:
      "flex min-h-[188px] flex-col justify-center p-[20px] text-center sm:min-h-[212px] sm:text-left",
    // no width cap here: the live headings run on one line and only wrap
    // when the text genuinely cannot fit the card
    titleClass: "font-semibold",
    bodyClass: "mt-[10px] text-center text-[15px] leading-[24.75px] sm:text-left",
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
        body: "Production hardening, performance tuning, documentation, and enablement",
      },
    ],
  },

  pods: {
    // 26/33.8 on a phone so the lead-in wraps to two lines, not three
    headingBase: "text-[26px] leading-[33.8px]",
    leadSize: "text-[20px]",
    leadLh: "leading-[33px]",
    leadColor: "text-white/[0.78]",
    mobileStack: true,
    listClass: "px-[20px] sm:px-0 sm:pr-[20px]",
    tileRadius: "rounded-[20%]",
    titleTop: "Specialist PODs - self-contained, outcome-driven,",
    titleAccent: "Day-1 productive",
    lead: "Ignitho deploys self-contained Specialist PODs: cross-functional delivery units that combine Human Intelligence (senior practitioners), Artificial Intelligence (automation and AI agents), and Technology Intelligence (your existing platforms). Each POD integrates into your existing Agile/Jira workflow on Day 1. There is no ramp-up theatre, no management overhead, and no hand-holding required. Your engineers get time back, not a new team to manage",
    centre: { title: "Specialist POD", subtitle: "One self-contained unit" },
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
    centerHead: true,
    /* this page runs the tier cards lighter than /data-engineering: a 25/32.5
       title on a phone and a 15/24.75 weight-400 body and bullet list. Stacked
       they take their own height; in a row the live cards settle at 600. */
    cardMinH: "min-h-0 lg:min-h-[600px]",
    titleClass: "text-[25px] leading-[32.5px] tablet:text-[24px] tablet:leading-[31.2px]",
    bodyClass: "text-[15px] font-normal leading-[24.75px]",
    pointClass: "text-[15px] font-normal leading-[25px]",
    /* the live page repeats the delivery band's wording here — reproduced
       as-is rather than corrected to "Solving your data problems" */
    titleTop: "From discovery to production -",
    titleAccent: "big or small",
    lead: "From clearing a pipeline backlog in two weeks to running a multi-year modernization programme – Ignitho has an engagement model that fits your urgency, budget, and risk appetite",
    note: "*All engagements can begin under a specialist waiver — bypassing PSL bottlenecks for niche, high-velocity data work",
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
