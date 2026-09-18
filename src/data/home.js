/** Content for the home page. Copy is taken verbatim from www.ignitho.com. */

export const HERO = {
  eyebrow: 'The Data & AI Specialists',
  headingLines: ['Your FRIEND in', 'Enterprise Data & AI'],
  body:
    "Powered by a leadership team from top-tier IT majors and US-headquartered with global footprint, Ignitho's industry-first Frugal Innovation FRIEND framework orchestrates high velocity Data & AI ecosystems for leading enterprises and Fortune 500 companies",
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
    'Grounded in frugal innovation and shaped by 10+ years of enterprise experience, Ignitho built the FRIEND Framework, now brought to life through three agentic suites. Together, they deliver Human + Frugal AI: human expertise and intelligent agents working as one, proven to deliver more with less',
  friend: {
    /**
     * [highlighted letters, hidden remainder]. Read down the first column the
     * letters spell FRIEND; read across they form the full phrase. The block
     * shows the letters alone first, then unfolds the remainders in place.
     */
    segments: [
      ['FR', 'ugal'],
      ['I', 'nnovation in'],
      ['EN', 'terprise'],
      ['D', 'ata & AI'],
    ],
    /** One meaning per letter group, set under the letters in the scene. A
     *  label may carry a `lead` - the joining word the acronym does not spell,
     *  set in normal weight ahead of the bold meaning. */
    labels: ['Frugal', 'Innovation', { lead: 'in ', text: 'Enterprise' }, 'Data & AI'],
    /** Plain-text form, read out to assistive tech in place of the animation. */
    expansion: 'Frugal Innovation in Enterprise Data & AI',
    /** The section's closing line, under the acronym. */
    description:
      'Industry-first Human + Frugal AI services: human expertise paired with AI agents to deliver measurable outcomes at enterprise scale, proven with clients for 10+ years',
  },
}
