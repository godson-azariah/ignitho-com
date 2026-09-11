/**
 * Single source of truth for navigation, footer and shared site copy.
 * Every link in the header, footer and in-page CTAs resolves from here,
 * so a route rename is a one-line change.
 */

export const SOLUTIONS = [
  { label: "Data Engineering & Consulting", href: "/data-engineering" },
  { label: "Advanced Analytics & Data Science", href: "/analytics" },
  { label: "Frugal AI Enablement", href: "/applied-ai" },
];

export const INDUSTRIES = [
  { label: "Pharma & Healthcare", href: "/pharma" },
  { label: "Retail & Ecommerce", href: "/retail" },
  { label: "Banking Financial Services & Insurance", href: "/banking" },
  { label: "Media & Communications", href: "/media" },
  { label: "Travel Transport & Logistics", href: "/travel" },
];

export const NAV = [
  { label: "Specialist Solutions", children: SOLUTIONS },
  { label: "Focus Industries", children: INDUSTRIES },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/career" },
];

export const CONTACT_HREF = "/contact-us";

export const FOOTER_COLUMNS = [
  { heading: "Special Solutions", links: SOLUTIONS },
  {
    heading: "Focus Industries",
    links: [
      ...INDUSTRIES.slice(0, 4),
      { label: "Travel Transport & Agencies", href: "/travel" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/career" },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ignitho/", icon: "linkedin" },
  { label: "Threads", href: "https://www.threads.net/@ignitho", icon: "threads" },
  { label: "Facebook", href: "https://www.facebook.com/ignitho", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com/@ignitho8732", icon: "youtube" },
];

export const LOGO = {
  src: "/images/ignitho-updated-logo.png",
  width: 118,
  height: 28,
  alt: "Ignitho",
};
