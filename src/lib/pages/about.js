/**
 * About page content.
 *
 * Every person's photo is paired to their name straight from the captured
 * DOM — the source filenames are opaque (1-8.png, 4-16.png), so this mapping
 * is the source of truth. Do not re-pair these by eye.
 */
export const ABOUT = {
  hero: {
    line1: "Where Engineering Excellence",
    line2: "Meets Data & AI Specialization",
  },

  story: {
    title: "Our Story",
    body: "Ignitho was founded in 2016 with a simple thesis: large enterprises are drowning in technology, not because they lack tools, but because no one is making the tools they already own work together effectively. The large SIs handle the macro strategy. The hyperscalers sell the platform. Nobody was systematically solving the execution gap – the pipeline reliability, the analytics that never get used, the AI that never leaves the Jupyter notebook. Ignitho was built to own that gap",
  },

  timeline: {
    titleTop: "Scaling Excellence Through",
    titleAccent: "Specialist Depth",
    steps: [
      { emoji: "🚀", year: "2016", title: "Founded in the UK", body: "Launched as a specialist data & analytics firm" },
      { emoji: "⏱️", year: "2018", title: "Strategic US Expansion", body: "Expanded onsite footprint in the US market" },
      { emoji: "🏢", year: "2021", title: "Global HQ & US Nearshore", body: "Tampa HQ & Costa Rica center setup" },
      { emoji: "🏬", year: "2023", title: "Offshore Delivery Expansion", body: "Strengthened India offshore capability" },
      { emoji: "🥈", year: "2025", title: "ISG Recognition", body: "Noteworthy Provider in Advanced Analytics and AI" },
      { emoji: "🏆", year: "2026", title: "10 Years", body: "Completing a Decade of Engineering Excellence" },
    ],
  },

  leadership: {
    title: "Leadership Team",
    lead: "Ignitho is established and led by practitioners from top-tier enterprise technology firms. Our leaders carry real enterprise delivery experience, commercial maturity, and deep ecosystem understanding – not just academic credentials",
    people: [
      {
        name: "Joseph Olassa",
        role: "Board Chair via Aventei Capital",
        bio: "Serial tech entrepreneur with 25+ years scaling software businesses from early-stage to multimillion-dollar revenue",
        location: "Tampa, USA",
        photo: "/images/about/joseph-olassa.webp",
      },
      {
        name: "Roney Soloman",
        role: "Chief Executive Officer",
        bio: "Seasoned business leader with 30+ years scaling global markets, building strategic partnerships, and driving sustained growth across industries",
        location: "London, UK / Tampa, USA",
        photo: "/images/about/roney-soloman.webp",
      },
      {
        name: "Rob Clare",
        role: "Aventei Corporate Governance",
        bio: "Chartered banker with 30+ years leading teams, advising businesses on governance, funding strategy, and corporate growth",
        location: "Brighton, UK",
        photo: "/images/about/rob-clare.webp",
      },
      {
        name: "Chandra P",
        role: "CTO & India Delivery Head",
        bio: "Technology and engineering leader driving AI innovation, big data cloud platforms, and scalable enterprise delivery globally",
        location: "Chennai, India",
        photo: "/images/about/chandra-p.webp",
      },
      {
        name: "M Riyaz",
        role: "Account Delivery Lead & Senior Data Scientist",
        bio: "Delivery leader driving enterprise AI adoption, solution architecture, and cross-functional engineering excellence",
        location: "Chennai, India",
        photo: "/images/about/m-riyaz.webp",
      },
      {
        name: "Pablo Douglas",
        role: "Senior BI Lead & Costa Rica Center Head",
        bio: "Experienced leader across portfolio and program management, business and technical architecture, and process efficiency",
        location: "San Jose, Costa Rica",
        photo: "/images/about/pablo-douglas.webp",
      },
      {
        name: "Mani P",
        role: "Lead Solutions Architect",
        bio: "UK-based specialist in cloud architecture, data engineering, and business-driven data strategy and innovation",
        location: "London, UK",
        photo: "/images/about/mani-p.webp",
      },
      {
        name: "Dhana LT",
        role: "AI Solutions Architect",
        bio: "Deep expertise in Machine Learning, NLP and marketing analytics across e-commerce and risk domains",
        location: "Chennai, India",
        photo: "/images/about/dhana-lt.webp",
      },
      {
        name: "Anton Joseph",
        role: "Sales Lead",
        bio: "Sales and business development professional driving revenue growth, go-to-market execution, and market expansion",
        location: "Tampa, USA",
        photo: "/images/about/anton-joseph.webp",
      },
      {
        name: "Srividhya B",
        role: "Finance & Operations Head",
        bio: "Finance leader with 15+ years experience across banking and tech sectors in accounting, taxation, compliance, and financial reporting",
        location: "Chennai, India",
        photo: "/images/about/srividhya-b.webp",
      },
      {
        name: "Joseph Thomas",
        role: "General Counsel",
        bio: "Entrepreneurial legal advisor with 20+ years experience in US corporate law, specializing in technology enterprises",
        location: "Tampa, USA",
        photo: "/images/about/joseph-thomas.webp",
      },
      {
        name: "Darshana S",
        role: "Talent Acquisition Lead",
        bio: "Leading end-to-end technology hiring, partnering with stakeholders to build high-performing teams at scale",
        location: "Chennai, India",
        photo: "/images/about/darshana-s.webp",
      },
    ],
  },

  advisors: {
    title: "Board of Advisors",
    people: [
      {
        name: "Jaideep Prabhu",
        role: "Professor & Book Author",
        bio: "Professor at University of Cambridge with 30+ years in business strategy and author of award-winning book Frugal Innovation",
        location: "London, UK",
        photo: "/images/about/jaideep-prabhu.webp",
      },
      {
        name: "Emre Serpen",
        role: "Senior Aviation Consultant",
        bio: "Extensive experience of driving aviation strategy, digital transformation and process re-engineering programs worldwide",
        location: "London, UK",
        photo: "/images/about/emre-serpen.webp",
      },
      {
        name: "Tanmay Divatia",
        role: "Senior Technology Industry Adviser",
        bio: "Driving large deals & revenue growth for 25+ years with global IT giants like Cognizant, HCL, IBM and Mastek",
        location: "London, UK",
        photo: "/images/about/tanmay-divatia.webp",
      },
    ],
  },

  why: {
    title: "Why Ignitho",
    image: "/images/about/why-ignitho.webp",
    /* breaks pinned so the third line opens on "non-disruptive" */
    leadLines: [
      "Large generalist SIs excel at macro strategy and infrastructure moves. Ignitho fills the execution gap they leave behind –",
      "the pipeline optimization, the cloud cost leakage, the integration work that falls between the cracks. We are intentionally",
      "non-disruptive and designed to complement, not replace, your existing partners",
    ],
    lead: "Large generalist SIs excel at macro strategy and infrastructure moves. Ignitho fills the execution gap they leave behind – the pipeline optimization, the cloud cost leakage, the integration work that falls between the cracks. We are intentionally non-disruptive and designed to complement, not replace, your existing partners",
    left: [
      { icon: "shieldCheck", title: "Non-disruptive by design", body: "We complement your existing vendors and internal teams. No rip-and-replace. No disruptive change management programs" },
      { icon: "rocket", title: "Day-1 Productive teams", body: "Senior practitioners who know Snowflake, Databricks, and AWS better than most internal teams. No ramp-up theatre. No hand-holding" },
      { icon: "lightbulb", title: "Frugal Innovation principle", body: "Grounded in Cambridge research. Maximum impact from existing investments. No new licensing. No tool bloat. Lower total cost of outcome" },
    ],
    right: [
      { icon: "target", title: "Outcomes, not activity", body: "Measured by business results, not hours billed. Every sprint closes with a deployed, tested, business-ready deliverable" },
      { icon: "globe", title: "Global delivery, local presence", body: "US HQ in Tampa. On-the-ground presence in the UK, Sweden, India, and Costa Rica. Flex onshore/offshore/hybrid to match your model" },
      { icon: "lock", title: "Enterprise-grade security", body: "ISO 27001 certified. SOC 2 compliant. Robust data privacy controls for GDPR and HIPAA regulated environments" },
    ],
  },
};
