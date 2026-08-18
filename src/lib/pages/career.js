/**
 * Career page content, from reference/career/.
 *
 * The Costa Rica panel's markup differs from the other three tabs, so its card
 * had to be read separately. Its photo ships as Tampa-1@2x.png upstream despite
 * being the San José office — the filename is misleading, not the mapping.
 */
export const CAREER = {
  hero: {
    line1: "Come & build what enterprises",
    line2: "actually need - as a Specialist",
  },

  ignitor: {
    titleTop: "What It's Really Like to Be an",
    titleAccent: "Ignitor",
    body: [
      "At Ignitho, you are a Specialist – whether you work in data, analytics, delivery, client engagement, marketing, or operations. Every function at Ignitho contributes to outcomes that matter. You’ll work inside Specialist PODs and cross-functional teams with no management bloat or endless cycles that go nowhere",
      "Sometimes words don’t do justice. Watch how our people describe the work, the data craft, the culture, and the growth they’ve experienced at Ignitho",
    ],
    videoId: "QYfWhOL3hU4",
    videoTitle: "Build Your Career at Ignitho | Igniting Thought",
  },

  culture: {
    titleTop: "Real Growth. Real Culture. Real Impact.",
    titleAccent: "A Career - and a Culture - Built to Match",
    lead: "Whether you’re in delivery, client engagement, sales, marketing, or operations, the Ignitho career model is built so the things that actually matter – ownership, autonomy, learning, and integrity – are baked into every role, not bolted on as culture",
    cards: [
      {
        icon: "trend",
        title: "Ownership That Grows With You",
        body: "At Ignitho, roles are designed to evolve with you. You are encouraged to take ownership beyond your core responsibilities, backed by structured coaching & SMART goal frameworks, because people who keep developing always deliver better outcomes for clients and each other",
      },
      {
        icon: "zap",
        title: "Autonomy, Not Hierarchy",
        body: "With focus on outcomes over rigid structures, Ignitho offers flexibility to work in ways that suit you best. Everyone reports to an outcome, not a hierarchy, so there are no approval chains – your team and your goals. Freedom comes with trust, and trust is earned through results",
      },
      {
        icon: "globe",
        title: "Global Exposure, Data-Led",
        body: "Every Ignitor can directly work with BFSI, Pharma, Retail, Media, and Aviation clients across the US, UK, and Europe. That domain breadth, paired with strong data thinking in every engagement, accelerates your expertise faster than any single-industry role ever could",
      },
      {
        icon: "heart",
        title: "Integrity-Driven Culture",
        body: "We operate with transparency, accountability, and responsibility toward our teams, clients, and work every day, building trust through every decision and action. It’s a culture where doing things the right way matters as much as delivering the outcome itself",
      },
    ],
  },

  apply: {
    titleTop: "Quick",
    titleAccent: "Apply",
    lead: "Submit your resume and we’ll reach out when there’s a matching opportunity",
    departments: [
      "Data Engineering",
      "Analytics",
      "AI & Automation",
      "Delivery & Operations",
      "Design",
      "Marketing",
    ],
    submit: "Submit Application",
  },

  markets: {
    titleTop: "Work From the World's Leading",
    titleAccent: "Data Markets",
    lead: "We hire talent globally across all our functions. Our model means you work in a region that fits your life – while contributing to client outcomes across every major market we serve",
    tabs: [
      {
        id: "us",
        label: "United States",
        offices: [
          { city: "Tampa", name: "Tampa (Corporate HQ)", lines: ["1211, Tech Blvd., #23", "Tampa", "FL 33619"], photo: "/images/career/tampa.webp" },
          { city: "New York", name: "New York", lines: ["353 Lexington Avenue", "4th Floor Suite 400", "NY 10016"], photo: "/images/career/new-york.webp" },
          { city: "Richmond", name: "Richmond", lines: ["11 S. 12th Street", "Richmond", "VA 23219"], photo: "/images/career/richmond.webp" },
          { city: "Chicago", name: "Chicago", lines: ["605 N Michigan Ave Floor 4", "Chicago", "IL 60611"], photo: "/images/career/chicago.webp" },
        ],
      },
      {
        id: "uk",
        label: "United Kingdom",
        offices: [
          { city: "London", name: "London", lines: ["75 King William Street", "London EC4N 7BE"], photo: "/images/career/london.webp" },
          { city: "Brighton", name: "Brighton", lines: ["Sussex Innovation Centre", "Science Park Square", "Brighton BN1 9SB"], photo: "/images/career/brighton.webp" },
        ],
      },
      {
        id: "india",
        label: "India",
        offices: [
          { city: "Chennai", name: "Chennai", lines: ["Trendworks OMR – 6th Floor", "Arihant Technopolis, Rajiv Gandhi Salai", "Perungudi, Chennai", "Tamil Nadu 600096"], photo: "/images/career/chennai.webp" },
          { city: "Bengaluru", name: "Bengaluru", lines: ["476/A, 14th B Cross Road", "OBEYA Verve, HSR Layout", "Bengaluru", "Karnataka 560102"], photo: "/images/career/bengaluru.webp" },
        ],
      },
      {
        id: "cr",
        label: "Costa Rica",
        offices: [
          { city: "San José", name: "San José", lines: ["Calle 105 Barrio María auxiliadora", "100 oeste y 150 sur", "Granadilla Sur, Curridabat"], photo: "/images/career/san-jose.webp" },
        ],
      },
    ],
  },
};
