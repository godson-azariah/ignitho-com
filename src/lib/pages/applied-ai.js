/**
 * Applied AI & Smart Automation page content.
 *
 * Built from reference/applied-ai/ (the capture that matches the live page).
 * reference/applied-ai-smart-automation/ is a different, older cut with hero
 * badges and three extra bands.
 *
 * This page has no lifecycle tab block, and adds a "Why Accelerators" band
 * that the other two solutions pages do not have.
 */
export const APPLIED_AI = {
  hero: {
    line1: "Applied AI & Smart Automation",
    line2: "That Works in Production, Not Just Demos",
  },

  problem: {
    dense: true,
    /* measured on this page: 288x296 cards on a 1211 row, 18/600 titles
       and 17/28.05 bodies — taller and larger than the analytics variant */
    /* The live cards switch treatment at 768: below it they are a centred
       stack — 48px tile and title centred as a pair, body centred under it at
       20/33, and no common height (335/335/300/300). From 768 up they are the
       left-aligned 18/23.4 + 17/28.05 card we already had, so all of this is
       phone-only. */
    cardMinH: "min-h-0 sm:min-h-[296px]",
    cardClass: "flex flex-col items-center gap-[10px] sm:block",
    headClass: "w-full justify-center sm:w-auto sm:justify-normal",
    headGap: "gap-[10px] sm:gap-[17px]",
    tileClass: "h-12 w-12 sm:h-10 sm:w-10",
    /* 51% of the 332 inner width is the measure the original wraps the title
       at, which is what puts "Pilots that never / reach production" on two
       rows with the pair still centred as a block */
    titleBox: "w-[51%] sm:w-auto",
    rowClass: "max-w-[1211px] gap-[20px]",
    /* This band runs a scale of its own on the live page — 30/33 on a phone
       and 44/57.2 from tablet up, over a 22/36.3 lead at every width. The
       heading also wraps at 304, not the full 372 the band gives it, which is
       what puts "Most Enterprises Have" on the first row instead of breaking
       after "Enterprises". Greedy wrapping rather than balance, for the same
       reason: balance moves those breaks. */
    /* wider than the 948 the dense variant defaults to, which is what keeps
       the lead at five rows on a desktop instead of six */
    boxClass: "mx-auto max-w-[1112px]",
    headingBase: "text-[30px] leading-[33px]",
    headingSm: "sm:text-[44px] sm:leading-[57.2px]",
    headingLh: "lg:leading-[57.2px]",
    headingWrap: "text-wrap-hard",
    headingBox: "mx-auto max-w-[304px] sm:max-w-none",
    leadSize: "text-[22px]",
    leadLh: "leading-[36.3px]",
    /* text-wrap-hard here too: the global `pretty` rule pulls words back onto
       the last rows, which moved the closing three lines off the original's */
    leadClass: "text-wrap-hard mt-[20px] sm:mt-[9px]",
    rowMt: "mt-[59px] sm:mt-[79px]",
    titleClass:
      "text-[20px] font-semibold leading-[26px] sm:text-[18px] sm:leading-[23.4px]",
    bodyClass:
      "w-full text-center text-[20px] leading-[33px] text-white/70 sm:mt-[6px] sm:w-auto sm:text-left sm:text-[17px] sm:leading-[28.05px]",
    titleTop: "Most Enterprises Have AI Pilots -",
    titleAccent: "Almost None Have AI in Production",
    lead: "The gap between ‘AI proof-of-concept’ and ‘AI that runs in daily operations’ is where billions of enterprise investment disappear. Models that work brilliantly in a Jupyter notebook never make it to the hands of the business. The problem isn’t the AI – it’s the adoption gap. Ignitho’s applied AI practice is built specifically to close that gap. We deploy AI within your existing workflows, integrate it into the tools your teams already use, and build explainability in from the first sprint – so adoption is a feature, not an afterthought",
    cards: [
      {
        icon: "hourglass",
        title: "Pilots that never reach production",
        body: "AI models validated in sandboxes that never get deployed into live systems. The business never sees the value. Engineering gets blamed. The project gets quietly shelved",
      },
      {
        icon: "unlink",
        title: "Black-box models nobody trusts",
        body: "AI outputs that a business user can’t interrogate or challenge. When a model fires a risk flag or rejects an application, someone needs to be able to ask why and get an answer they can act on",
      },
      {
        icon: "triangleAlert",
        title: "Data too messy to start",
        body: "The most common blocker: “our data isn’t clean enough for AI.” More than 90% of enterprises say this. That’s exactly where we start. We use AI to fix the data first, then deploy on the clean foundation we built",
      },
      {
        icon: "cloudRain",
        title: "Governance and compliance gaps",
        body: "AI in regulated industries requires audit trails, model explainability, data lineage, and human-in-the-loop controls. Most AI vendors solve the model. Nobody solves the governance. We do both",
      },
    ],
  },

  /* three green pillars — unique to this page */
  accelerators: {
    title: "Why Accelerators",
    subtitle: "Three Pillars Philosophy",
    cards: [
      {
        title: "From pilot to production in one sprint cycle",
        body: "Most enterprises have AI projects that have been ‘almost ready for production’ for over a year. Our accelerators are pre-built, pre-tested, and pre-governed – which means your team spends time deploying value, not re-inventing infrastructure that already exists",
      },
      {
        title: "Governed and compliant from day one",
        body: "Every accelerator ships with enterprise security alignment, audit-ready data lineage, and human-in-the-loop controls. We have deployed these within the most strictly regulated BFSI, Pharma, and insurance environments in the world",
      },
      {
        title: "Built on what you already own",
        body: "No new licensing. No forced platform migrations. Every accelerator deploys within your existing cloud and data stack – AWS, Azure, Snowflake, Databricks, or whichever combination your organisation has already approved",
      },
    ],
  },

  delivery: {
    /* step-card copy runs a size down from the shared default; the
       headings keep theirs */
    bodyClass: "mt-[6px] text-[16px] leading-[26.4px]",
    /* cards widen 275 -> 300 but the horizontal padding grows by the same
       amount, so the text column stays ~236 and every line breaks where it
       did before */
    rowClass: "max-w-[1260px]",
    cardClass: "min-h-[351px] px-[25px] py-[20px]",
    titleTop: "From Messy Data to Production AI",
    titleAccent: " - in Sprints",
    inlineTitle: true,
    lead: "We don’t start with models. We start with the business decision the AI needs to improve. Every sprint is scoped backwards from the outcome – what does a business user need to do differently, and how does AI enable that?",
    steps: [
      {
        title: "7-Day AI Triage & Use Case Qualification",
        body: "Map your current AI estate, identify where automation and intelligence create the highest ROI, and qualify the data readiness of each candidate use case. We clear the messy data objection on day one – starting where you are, not where you’d like to be",
      },
      {
        title: "Data Readiness & AI Foundation Architecture",
        body: "Build the data foundation the AI requires – feature engineering, data cleaning and tagging, and model architecture design. Define governance, explainability, and human-in-the-loop controls before the first model trains",
      },
      {
        title: "Iterative Build & Deployment 7 to 30-Day Sprints",
        body: "Train, evaluate, and deploy in short cycles. Every sprint closes with a live model a business user can interact with – not a notebook or demo. Explainability and audit trail built in",
      },
      {
        title: "MLOps, Monitoring & Continuous Improvement",
        body: "Implement pipelines to monitor drift, retrain models, and maintain audit trails. The model improves continuously while your team stays in control",
      },
    ],
  },

  pods: {
    "titleTop": "Specialist PODs - self-contained, outcome-driven,",
    "titleAccent": "Day-1 productive",
    "lead": "Ignitho deploys self-contained Specialist PODs: cross-functional delivery units that combine Human Intelligence (senior practitioners), Artificial Intelligence (automation and AI agents), and Technology Intelligence (your existing platforms). Each POD integrates into your existing Agile/Jira workflow on Day 1. There is no ramp-up theatre, no management overhead, and no hand-holding required. Your engineers get time back, not a new team to manage",
    "centre": {
      "title": "Specialist POD",
      "subtitle": "One self-contained unit"
    },
    "personas": [
      "/images/de/persona-2.webp",
      "/images/de/persona-4.webp",
      "/images/de/persona-3.webp",
      "/images/de/persona-1.webp",
      "/images/de/persona-5.webp"
    ],
    "points": [
      {
        "icon": "userBadge",
        "title": "Single point of accountability",
        "body": "One POD Leader owns delivery and acts as your primary interface. No diffuse responsibility, no finger-pointing between teams"
      },
      {
        "icon": "clock",
        "title": "Agile velocity: 7 to 30-day sprint cycles",
        "body": "Short, continuous delivery cycles with visible progress at every sprint review. Business stakeholders see outcomes, not activity metrics"
      },
      {
        "icon": "link",
        "title": "Plug-and-play integration",
        "body": "Works within your existing tools, governance frameworks, and operating models. No disruptive change management. No rip-and-replace mentality"
      },
      {
        "icon": "spark",
        "title": "AI-augmented delivery speed",
        "body": "Automated data quality validation, AI-assisted code review, and accelerator libraries built into the POD reduce delivery time by up to 40%"
      }
    ]
  },

  tiers: {
    titleTop: "Solving Your AI Problems,",
    titleAccent: "Big or Small",
    lead: "From deploying a single AI agent to clear a specific bottleneck, to building a full enterprise AI capability with MLOps, governance, and a team of specialists – Ignitho has a model that fits",
    note: "*All engagements can begin under a specialist waiver — bypassing PSL bottlenecks for niche, high-velocity data work",
    items: [
      {
        "tier": "Tier 1",
        "title": "Tactical Intervention",
        "tagline": "The “Quick Win”",
        "body": "Broken pipelines, dashboard backlogs, urgent board deadlines, or a stalled proof-of-concept that needs rescuing",
        "points": [
          "Accelerated Task Force deployment in days",
          "No long-term MSA required to start",
          "Clears technical debt and stalled backlog immediately",
          "Ideal for: quick wins before a board or audit event"
        ]
      },
      {
        "tier": "Tier 2",
        "title": "Agile Scaling",
        "tagline": "The “Velocity Engine”",
        "body": "Internal teams overwhelmed by maintenance, or facing a 4+ month hiring delay for senior data engineers",
        "featured": true,
        "points": [
          "Self-governed Specialist POD embedded in your team",
          "Integrates with your existing Agile/Jira workflow",
          "Senior practitioners from day one, no ramp-up theatre",
          "7 to 30-day iterative sprint cycles with visible outcomes",
          "Ideal for: ongoing data platform delivery at velocity"
        ]
      },
      {
        "tier": "Tier 3",
        "title": "Strategic Transformation",
        "tagline": "The “Enterprise Partner”",
        "body": "Modernizing full data stacks to Snowflake or Databricks, or building an enterprise-wide data strategy and AI readiness programme",
        "points": [
          "Managed Outcome Partnership with full delivery ownership",
          "Architecture advisory and platform decision governance",
          "Multi-POD coordination across workstreams",
          "Measurable ROI milestones and shared accountability",
          "Ideal for: CDO/CIO-led transformation programmes"
        ]
      }
    ],
  },
};
