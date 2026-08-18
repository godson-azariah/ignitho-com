/**
 * Contact Us content, from reference/contact-us/.
 *
 * The office tabs reuse the same shape as the Career page and render through
 * the shared OfficeTabs component, so the addresses live in one place.
 */
import { CAREER } from "./career";

export const CONTACT = {
  hero: {
    line1: "Connecting You to",
    line2: "Specialist Expertise",
  },

  intro: {
    title: "Get in touch",
    lead: "Whether you’re scaling your data estate, interested in joining our global team, or exploring a partnership – we’re ready and waiting to hear from you",
  },

  form: {
    inquiryOptions: ["Sales & Partnerships", "Careers & Talent", "General Inquiry"],
    consent:
      "I consent to Ignitho processing my personal data in accordance with their Privacy Policy",
    submit: "Submit Enquiry",
  },

  why: {
    title: "Why Ignitho",
    image: "/images/contact/team-workspace.webp",
    points: [
      {
        icon: "target",
        title: "Analyst-Validated Expertise",
        body: "Named as a Noteworthy Provider by ISG, with further recognition from HFS Research and TechMarketView UK",
      },
      {
        icon: "lightbulb",
        title: "Frugal Innovation, Backed by Research",
        body: "Our delivery model applies frugal innovation principles, based on University of Cambridge academic research, to unlock value that clients already own",
      },
      {
        icon: "userBadge",
        title: "Over A Decade of Proven Delivery",
        body: "A track record delivering managed services to Pharma, Retail, Media, BFSI & Travel clients globally",
      },
    ],
  },

  offices: {
    title: "Our Offices",
    /* same nine offices as /career — single source of truth */
    tabs: CAREER.markets.tabs,
  },
};
