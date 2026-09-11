/**
 * Site-wide navigation model.
 *
 * Every entry is rendered by `components/layout/Navbar` and by the footer, so
 * adding a page usually means adding one line here plus the matching route
 * under `src/app`.
 *
 * These are local routes. They previously pointed at absolute
 * https://www.ignitho.com/... URLs, which sent visitors to the live WordPress
 * site instead of this rebuild.
 */

export const SPECIALIST_SOLUTIONS = [
  { label: 'Data Engineering & Consulting', href: '/data-engineering' },
  { label: 'Advanced Analytics & Data Science', href: '/analytics' },
  { label: 'Frugal AI Enablement', href: '/applied-ai' },
]

export const FOCUS_INDUSTRIES = [
  { label: 'Travel and logistics', href: '/travel' },
  { label: 'Healthcare and life sciences', href: '/pharma' },
  { label: 'Media and communications', href: '/media' },
  { label: 'Retail, CPG and manufacturing', href: '/retail' },
  {
    label: 'Banking, financial services and insurance',
    href: '/banking',
  },
]

export const PRIMARY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/career' },
]

/** Highlighted (teal) entry pointing at the Ignitho AI experience. */
export const AI_LINK = { label: 'Ignitho AI', href: '/ignitho-ai' }

export const CONTACT_LINK = { label: 'Contact Us', href: '/contact-us' }