/**
 * Pharma & Healthcare page content. The shape here is the industry template
 * contract — retail, banking, media and travel reuse it verbatim.
 */
export const PHARMA = {
  hero: {
    line1: "Data-Driven Clinical Intelligence",
    line2: "Bridge R&D and Operations without Disruption",
  },

  trust: {
    titleTop: "Building Trust, Transparency, And Speed",
    titleAccent: "Through Data",
    subtitle:
      "With rising regulatory pressure and faster innovation cycles, data maturity drives compliant scale, smarter research, and better outcomes",
    subtitleLines: [
      "With rising regulatory pressure and faster innovation cycles, data maturity drives compliant scale, smarter research, and",
      "better outcomes",
    ],
    stats: [
      {
        value: "67%",
        icon: "pills",
        body: "Of pharma & healthcare execs prioritise AI adoption for clinical operations (Deloitte)",
      },
      {
        value: "35%",
        icon: "clipboard",
        body: "Turnaround time reduction for major UK hospital through operational optimisation",
      },
      {
        value: "72%",
        icon: "microchip",
        body: "Implementation cost reduction through non-disruptive data architecture",
      },
      {
        value: "50%",
        icon: "shieldHalved",
        body: "Patient scheduling and resource allocation efficiency gains achievable via AI-driven models (Healthcare Analytics benchmark)",
      },
    ],
  },

  problems: {
    /* on a phone the live band runs edge to edge rather than inside the
       shell inset, which is what keeps the heading on three rows and the
       lead on three; the cards take their own height there too */
    headBox: "-mx-[20px] tablet:mx-0",
    leadClass: "-mx-[20px] mt-[10px] mb-[31.5px] leading-[29.7px] tablet:mx-auto tablet:mt-4 tablet:leading-[30px]",
    cardMinH: "min-h-0 tablet:min-h-[232px]",
    titleTop: "Clinical Data Is Everywhere -",
    titleAccent: "Actionable Intelligence Is Locked Away",
    subtitle:
      "Pharma and healthcare enterprises generate vast clinical, operational, and patient data – but most sits in disconnected, regulated silos that don’t surface intelligence in time for clinical decisions",
    subtitleLines: [
      "Pharma and healthcare enterprises generate vast clinical, operational, and patient data – but most sits in disconnected, regulated silos",
      "that don’t surface intelligence in time for clinical decisions",
    ],
    items: [
      {
        icon: "database",
        title: "Siloed clinical data fragments decision speed",
        body: "Lab systems, EHR platforms, clinical trial databases, and imaging systems operate in isolation",
      },
      {
        icon: "calendarClock",
        title: "Patient scheduling chaos drains operational capacity",
        body: "Manual scheduling leads to over-bookings, no-shows, and wasted clinician time",
      },
      {
        icon: "shieldCheck",
        title: "Compliance constraints lock innovation",
        body: "GxP, HIPAA, and GDPR slow collaboration and delay insight sharing across clinical teams",
      },
      {
        icon: "microscope",
        title: "R&D data gaps slow clinical trials",
        body: "Legacy systems delay integration of trial data with real-world evidence",
      },
    ],
  },

  solutions: {
    titleTop: "Clinical Efficiency Without",
    titleAccent: "Operational Disruption",
    subtitle:
      "Every solution is drawn from Ignitho’s Clinical Intelligence framework – connecting your existing ERP, clinical systems, and patient data into a single governance-ready intelligence layer",
    flagship: {
      label: "FLAGSHIP SOLUTION",
      title: "Patient Scheduling & Resource Optimization",
      body: "AI-driven models optimising patient flows across clinics and resource pools – reducing no shows, eliminating over-bookings, and maximising clinician utilisation. 50% scheduling efficiency improvement achieved",
    },
    items: [
      {
        title: "Claims & Billing Acceleration",
        body: "Automated claims processing connecting clinical outcomes to reimbursement workflows. Real-time compliance checking integrated with ERP, CRM, and legacy claims platforms without disruption",
      },
      {
        title: "Clinical Decision Support & Evidence Analytics",
        body: "Unified analytics bridging lab data, EHR records, and outcome metrics into clinical dashboards - governance-ready, GxP and HIPAA compliant",
      },
      {
        title: "Pharma R&D & Trial Acceleration",
        body: "Bridge R&D, patient registry, and real-world evidence data to accelerate clinical trials. Data gaps identified within 4 weeks with scalable architecture for regulatory submission support",
      },
    ],
  },

  approach: {
    // the original's card row is 1144 wide here (4 cards + 3 x 20 gaps)
    rowMax: 1144,
    titleTop: "Compliance-First,",
    titleAccent: "Non-Disruptive By Design",
    subtitle:
      "Our 7-to-30-day sprint model accelerates clinical and operational insight while maintaining full GxP and HIPAA governance – delivering working solutions within weeks",
    subtitleLines: [
      "Our 7-to-30-day sprint model accelerates clinical and operational insight while maintaining full GxP and HIPAA",
      "governance – delivering working solutions within weeks",
    ],
    steps: [
      {
        title: "7-Day Clinical Data Audit",
        titleLines: ["7-Day Clinical","Data Audit"],
        body: "Map your EHR/EMR systems, lab platforms, pharmacy systems, patient registries, and legacy data warehouses",
      },
      {
        title: "Unified Data & Governance Layer",
        titleLines: ["Unified Data &","Governance Layer"],
        body: "Build the governed integration layer connecting clinical systems without replacing them",
      },
      {
        title: "Iterative 7-to-30-Day Sprints",
        titleLines: ["Iterative 7-to-30-","Day Sprints"],
        body: "Specialist clinical PODs deliver working tools and dashboards in short cycles. Outcomes only – no status decks",
      },
      {
        title: "Embed, Enable & Operationalise",
        body: "Embed models into workflows, train teams, and scale into a full clinical intelligence platform",
      },
    ],
  },

  why: {
    title: "Why Ignitho",
    subtitle:
      "Ignitho has delivered for Amgen, American Red Cross, and other pharma and healthcare leaders – not by replacing clinical systems, but by building the intelligence layer on top of what they already run",
    image: {
      src: "/images/why-ignitho-industry.webp",
      alt: "Ignitho consultants working with a healthcare client team",
    },
    left: [
      {
        icon: "shieldCheck",
        title: "GxP and HIPAA-native integration",
        body: "Built on top of your existing ERP, EMR/EHR, and clinical platforms. Zero compliance risk, zero disruption. Governance-ready from day one",
      },
      {
        icon: "lightbulb",
        title: "Day-1 productive clinical practitioners",
        body: "Senior engineers and scientists who know healthcare data models and compliance. No onboarding theatre",
      },
    ],
    right: [
      {
        icon: "rocket",
        title: "Pharma-specific intelligence",
        body: "Deep understanding of clinical workflows, patient safety priorities, and regulatory boundaries in highly regulated environments",
      },
      {
        icon: "target",
        title: "Frugal innovation for pharma",
        body: "Maximum intelligence from existing systems with cloud cost optimisation and pipeline efficiency built in",
      },
    ],
  },
};
