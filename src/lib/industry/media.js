/**
 * Media & Communications page content. Follows the industry template contract
 * defined by `pharma.js` and consumed by `components/industry/IndustryPage`.
 */
export const MEDIA = {
  hero: {
    line1: "Content Intelligence at Editorial Speed",
    line2: "From Insight to Revenue",
  },

  trust: {
    titleTop: "Turning Audience Intelligence into",
    titleAccent: "Competitive Advantage",
    subtitle:
      "As content scales and margins compress, leaders win through data maturity – powering personalisation, monetisation, and platform resilience",
    stats: [
      {
        value: "87%",
        icon: "users",
        body: "Media companies investing in audience personalisation (McKinsey)",
      },
      {
        value: "10-15%",
        icon: "spark",
        body: "Revenue uplift achievable through dynamic content personalisation (Deloitte)",
      },
      {
        value: "28%",
        icon: "gear",
        body: "Cost reduction in reporting and analytics ops through automation",
      },
      {
        value: "35%",
        icon: "globe",
        body: "Audience growth achievable via real-time analytics and hyper-targeted recommendations (Media Analytics benchmark)",
      },
    ],
  },

  problems: {
    titleTop: "Editorial data is trapped in silos -",
    titleAccent: "audience truth is fragmented",
    subtitle:
      "Media enterprises generate more audience, content, and monetisation data than almost any other sector. But most sits in disconnected platforms that don’t surface insight fast enough for editorial decisions or revenue optimisation. Ignitho enhances your existing CMS, analytics, and ad platforms – not replace them – to create a real-time content intelligence layer",
    items: [
      {
        title: "Insight lag kills editorial agility",
        body: "Audience data arrives hours or days after publish – too late for editorial teams to adjust stories, trending topics, or content strategy",
      },
      {
        title: "Data scattered across platforms",
        body: "Web analytics, social signals, streaming data, and subscription metrics in separate systems, making unified profiles and real-time personalisation impossible",
      },
      {
        title: "Content performance visibility is weak",
        body: "Editorial teams can’t see which stories, formats, or topics drive engagement, retention, or revenue – leading to repetitive content strategies and missed high-value opportunities",
      },
      {
        title: "Monetisation signals remain opaque",
        body: "Ad teams lack real-time visibility into which audiences, content types, and placements drive revenue, leading to sub-optimal pricing and missed growth",
      },
    ],
  },

  solutions: {
    // the original hard-breaks before the accent line on this page
    stacked: true,
    titleTop: "Editorial speed meets",
    titleAccent: "audience intelligence",
    subtitle:
      "Every solution below is drawn directly from Ignitho’s Content Intelligence framework – designed to connect your existing CMS, analytics platforms, and ad networks into a single real-time intelligence layer that makes your editorial, audience, and monetization teams faster and measurably more profitable",
    flagship: {
      label: "FLAGSHIP SOLUTION",
      title: "Audience Analytics & Real-Time Personalization",
      body: "Unified audience profiles combining behaviour, engagement, and subscription data into real-time personalisation engines. 35% audience growth achieved",
    },
    items: [
      {
        title: "Content Intelligence & Editorial Dashboards",
        body: "Real-time dashboards connecting story performance, engagement metrics, and content tracking into one unified view. 28% cost reduction in reporting ops",
      },
      {
        title: "AI-Driven Ad Monetisation & Yield Optimisation",
        body: "Automated ad pricing and placement using real-time demand and audience signals, replacing manual inventory decisions",
      },
      {
        title: "Audience Growth & Retention Engines",
        body: "Predict churn, activate segments, and grow lifetime value using ML models built on your existing audience data",
      },
    ],
  },

  approach: {
    // the original's card row is 1160 wide here (4 cards + 3 x 20 gaps)
    rowMax: 1160,
    titleTop: "Real-time intelligence",
    titleAccent: "at editorial speed",
    subtitle:
      "In media, speed is competitive advantage. Slow data kills trending moments. Our 7-to-30-day sprint model delivers working editorial and monetisation intelligence within weeks – not after lengthy strategy cycles",
    steps: [
      {
        title: "7-Day Media Data Landscape & Opportunity Audit",
        body: "Map your CMS, analytics platforms, social integrations, ad networks, subscription systems, and audience data. Identify delays, fragmentation, and hidden revenue opportunities",
      },
      {
        title: "Unified Content & Audience Intelligence Foundation",
        body: "Connect CMS, analytics, ad platforms, and audience systems into a real-time intelligence layer without replacing existing tools",
      },
      {
        title: "Iterative Delivery - 7 to 30-Day Sprints",
        body: "Deliver dashboards, personalisation engines, and monetisation tools in short cycles. Each sprint produces a working output",
      },
      {
        title: "Embed, Enable & Scale Intelligence",
        body: "Embed insights into workflows, train teams, and scale into a full media intelligence platform across editorial and revenue functions",
      },
    ],
  },

  why: {
    title: "Why Ignitho",
    subtitle:
      "Ignitho has delivered for Fluent, Hearst, and other media leaders – not by replacing their CMS or ad platforms, but by building the intelligence layer on top of what they already run. Our media specialists understand editorial velocity, audience signal interpretation, and the real-time demands of newsroom decision-making",
    image: {
      src: "/images/why-ignitho.webp",
      alt: "Ignitho consultants working with a media and communications client team",
    },
    left: [
      {
        title: "Platform-agnostic editorial integration",
        body: "We build on top of your existing CMS, analytics, and ad platforms. Zero vendor lock-in, zero platform replacement, and immediate ROI without disruption to live editorial operations",
      },
      {
        title: "Day-1 Productive media practitioners",
        body: "Senior data engineers and analytics specialists who know streaming platforms, ad networks, and CMS architectures. They integrate into your newsroom workflow with no ramp-up time",
      },
    ],
    right: [
      {
        title: "Editorial and audience intelligence expertise",
        body: "We understand content performance metrics, audience behaviour patterns, and the difference between viral moments and sustainable trends. Our architects have delivered real-time analytics for major publishers",
      },
      {
        // Verbatim from the desktop capture, which still reads "for pharma" —
        // an authoring leftover in the original. The mobile-only copy of this
        // same card reads "Frugal Innovation for media".
        title: "Frugal innovation for pharma",
        body: "Maximum insight from your existing CMS, analytics, and subscription investments, with reporting automation, cost-per-insight optimisation, and team productivity gains built into every engagement",
      },
    ],
  },
};
