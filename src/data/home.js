/** Content for the home page. Copy is taken verbatim from www.ignitho.com. */

export const HERO = {
  eyebrow: 'The Data & AI Specialists',
  headingLines: ['Your FRIEND in', 'Enterprise Data & AI'],
  body:
    'Powered by a leadership team from top-tier IT majors and US-headquartered with global footprint, Ignitho is the FRIEND accelerating Data & AI at scale for leading enterprises and Fortune 500 companies through frugal innovation',
  visual: {
    src: '/images/home/hero-visual.png',
    alt: 'Ignitho Data & AI capability wheel',
    width: 1024,
    height: 798,
  },
  /** Anchor the scroll cue jumps to. */
  scrollTargetId: 'frug-sec',
}

export const HERO_BADGES = [
  { src: '/images/home/badge-isg.png', alt: 'ISG Noteworthy Provider — Advanced Analytics & AI' },
  { src: '/images/home/badge-track-record.png', alt: 'Since 2016 — A Track Record of Excellence' },
  { src: '/images/home/badge-iso.png', alt: 'ISO 27001 Certified — Global Security Standards' },
  {
    src: '/images/home/badge-partnerships.png',
    alt: 'Industry Partnerships — Databricks, Snowflake, Microsoft',
  },
]

export const FRUGAL_INNOVATION = {
  title: 'Applying the Frugal Innovation Principle',
  subtitle:
    'The Art of Doing More with Less: A methodology co-developed with the University of Cambridge',
  cards: [
    {
      icon: 'coins',
      title: 'Maximize Existing Investments',
      body: 'Optimize current spend and unlock the latent value of your existing tech stack',
    },
    {
      icon: 'tools',
      title: 'Zero Tool Inflation',
      body: 'Deliver outcomes with no new licensing or tool costs – master what you already own',
    },
    {
      icon: 'chart',
      title: 'The Efficiency Nexus',
      body: 'Faster, better, economically superior. High-velocity delivery without the operational bloat',
    },
  ],
}
