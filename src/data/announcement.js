/**
 * Announcement strip that sits directly under the navbar.
 * `body` is rendered in order, so the emphasis pattern stays editable here.
 */
export const ANNOUNCEMENT = {
  body: [
    { text: 'Ignitho is proud to be a ' },
    { text: 'Showcase Sponsor', bold: true, accent: true },
    { text: ' at ' },
    { text: 'CDO Magazine’s Chicago Data & AI Leadership Summit', bold: true },
    { text: ' on ' },
    { text: 'September 17, 2026.', accent: true },
  ],
  cta: {
    label: 'Learn More',
    href: 'https://live.cdomagazine.tech/2026_Chicago_Leadership_Summit/home',
  },
}
