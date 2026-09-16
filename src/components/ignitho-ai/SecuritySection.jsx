"use client";

import { Lock, Route, Plug, Activity, Globe } from 'lucide-react'
import { splitHeading } from './splitHeading'

const FEATURES = [
  {
    icon: Lock,
    title: 'AI Security Firewall',
    titleLines: ['AI Security', 'Firewall'],
    desc: 'Blocks prompt injection attempts and unauthorized data access continuously, across every workflow',
  },
  {
    icon: Route,
    title: 'Dynamic Model Routing',
    titleLines: ['Dynamic Model', 'Routing'],
    desc: 'Every task is routed to the most cost efficient model capable of handling it, the technical mechanism behind Frugal AI',
  },
  {
    icon: Plug,
    title: 'Non-Disruptive, API-Native Deployment',
    titleLines: ['Non-Disruptive,', 'API-Native Deployment'],
    desc: 'Deploys into your existing ERP, CRM and cloud stack, no new infrastructure, no rip and replace',
  },
  {
    icon: Activity,
    title: 'Continuous Model Monitoring',
    titleLines: ['Continuous Model', 'Monitoring'],
    desc: 'Live models are monitored and retrained proactively, before performance degrades',
  },
]

/* The marks, drawn rather than iconed.

   Every one is struck on the same disc, at the same size, in the same ink, with
   its detail knocked out in white - the way a set of certifications is issued.
   Five different silhouettes at five different widths is what made the row read
   as scattered odds and ends; one repeated shape makes it a set.

   Solid, never part-opaque: this band carries a dotted grid, and artwork drawn
   in hairlines over a texture reads as part of the texture. */
const INK = '#4318c9'
const SEAL = 'h-[60px] w-[60px]'
const R = 30 // every disc, same radius

/* one point of the EU ring - twelve of them make the GDPR wreath */
function starPath(cx, cy, r) {
  const pts = []
  for (let i = 0; i < 10; i += 1) {
    const rad = i % 2 ? r * 0.42 : r
    const a = (Math.PI / 5) * i - Math.PI / 2
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`)
  }
  return `M${pts.join('L')}Z`
}

const EU_STARS = Array.from({ length: 12 }, (_, i) => {
  const a = (Math.PI / 6) * i - Math.PI / 2
  return starPath(30 + 23 * Math.cos(a), 30 + 23 * Math.sin(a), 2.6)
})

/* the disc itself, plus whatever is struck into it */
function Disc({ children }) {
  return (
    <svg viewBox="0 0 60 60" className={SEAL} fill="none" aria-hidden="true">
      <circle cx="30" cy="30" r={R} fill={INK} />
      {children}
    </svg>
  )
}

function SealIso() {
  return (
    <Disc>
      <path d="M24.4 20.6 27.6 23.6 33.8 17.6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="30" y="34" textAnchor="middle" fill="#fff" fontSize="9" letterSpacing="1" opacity="0.8">ISO</text>
      <text x="30" y="46" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" letterSpacing="-0.2">27001</text>
    </Disc>
  )
}

function SealSoc2() {
  return (
    <Disc>
      <text x="30" y="26" textAnchor="middle" fill="#fff" fontSize="8" letterSpacing="1.1" opacity="0.8">AICPA</text>
      <text x="30" y="40" textAnchor="middle" fill="#fff" fontSize="13.5" fontWeight="700" letterSpacing="-0.2">SOC 2</text>
    </Disc>
  )
}

function SealHipaa() {
  return (
    <Disc>
      <path d="M30 14.5 39 17.6v6.9c0 5.3-3.6 9.2-9 11.1-5.4-1.9-9-5.8-9-11.1v-6.9l9-3.1Z" fill="#fff" />
      <path d="M30 20v10M25.6 25h8.8" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <text x="30" y="47" textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700" letterSpacing="-0.1">HIPAA</text>
    </Disc>
  )
}

function SealGdpr() {
  return (
    <Disc>
      {EU_STARS.map((d) => (
        <path key={d} d={d} fill="#fff" />
      ))}
      <text x="30" y="35" textAnchor="middle" fill="#fff" fontSize="12.5" fontWeight="700" letterSpacing="-0.2">GDPR</text>
    </Disc>
  )
}

function SealDag() {
  return (
    <Disc>
      <path d="M30 22v5m0 0-8 5m8-5 8 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="30" cy="19.5" r="4.4" fill="#fff" />
      <circle cx="21" cy="35.5" r="4.4" fill="#fff" />
      <circle cx="39" cy="35.5" r="4.4" fill="#fff" />
      <text x="30" y="49" textAnchor="middle" fill="#fff" fontSize="7.5" letterSpacing="0.8" opacity="0.8">DAG</text>
    </Disc>
  )
}

/* `short` is the name as the rail sets it - short enough to hold one line under
   its own seal. */
const COMPLIANCE = [
  { label: 'ISO 27001 Certified', short: 'ISO 27001', seal: SealIso },
  { label: 'SOC 2 Type II', short: 'SOC 2 Type II', seal: SealSoc2 },
  { label: 'HIPAA Compliant', short: 'HIPAA', seal: SealHipaa },
  { label: 'GDPR Ready', short: 'GDPR', seal: SealGdpr },
  { label: 'Governed DAG Architecture', short: 'Governed DAG', seal: SealDag },
]

export default function SecuritySection() {
  return (
    <section className="py-16 md:py-20 px-5 max-w-[1360px] mx-auto">
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-bold text-ignitho-text tracking-[-0.5px] leading-[1.15]">
          <span className="block">Frugal by Design.</span>
          <span className="block text-[#7a00c2]">Governed at Every Step.</span>
        </h2>
        <p className="mt-5 text-lg md:text-2xl text-[#7a00c2] leading-relaxed">
          Enterprise AI suites that prioritize security, cost efficiency, and operational continuity,
          without unnecessary infrastructure, licensing, or disruption
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-3 sm:grid-cols-2 sm:px-0 lg:gap-4 lg:grid-cols-4">
        {FEATURES.map((f) => {
          const [line1, line2] = f.titleLines ?? splitHeading(f.title)
          return (
          <div
            key={f.title}
            className="group flex h-full flex-col rounded-[24px] p-6 text-white bg-[linear-gradient(160deg,#16063A_0%,#5B16C4_100%)] shadow-[0_18px_46px_rgba(80,8,208,0.25)] border border-white/10 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            <div className="mb-4 flex min-h-[3.5rem] items-center justify-between gap-3 max-lg:items-center lg:min-h-[4rem] lg:items-start">
              <div className="invisible shrink-0 rounded-xl p-2.5 lg:hidden" aria-hidden="true">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-[20px] font-bold leading-[26px] text-white max-lg:text-center lg:text-left">
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
              </h3>
              <div className="shrink-0 rounded-xl border border-white/15 bg-white/10 p-2.5 transition-transform duration-300 ease-out group-hover:scale-[1.08] group-hover:rotate-6">
                <f.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <p className="mt-2 flex-1 border-t border-white/15 pt-5 text-[18px] leading-[1.65] text-white/[0.82] max-lg:text-center lg:text-left">{f.desc}</p>
          </div>
          )
        })}
      </div>

      {/* The credentials rail.

          Not a feature row - it is the small print that makes the cards above
          it believable, so it is set the way certification strips are set: flat
          on the page with no card around it, the marks drawn as monochrome
          seals rather than as outline icons, each sitting over its own name,
          with one hairline under the lot. The names are in the site's own face
          rather than a mono spec-sheet one, which is what keeps the rail
          sitting inside this page instead of on top of it. */}
      <div className="mt-14 md:mt-16">
        <div className="flex flex-col lg:flex-row lg:items-end">
          <div className="pb-8 max-lg:text-center lg:w-[470px] lg:shrink-0 lg:pb-7 lg:pr-10">
            <h3 className="text-[28px] font-bold leading-[1.1] tracking-[-0.6px] text-[#2b2060] md:text-[31px]">
              <span className="block">Enterprise-grade security</span>
              <span className="block text-ignitho-muted/70">in every suite</span>
            </h3>
            <p className="mt-4 max-w-[44ch] text-[14px] leading-relaxed text-ignitho-muted max-lg:mx-auto md:text-[15px]">
              Governed, auditable and compliant from the first sprint. Built into the architecture, not added after
            </p>
          </div>

          <div className="grid grid-cols-5 max-lg:hidden lg:flex-1">
            {COMPLIANCE.map((item) => (
              <div key={item.label} className="flex items-center justify-center px-1 pb-6 lg:px-3">
                <item.seal />
              </div>
            ))}
          </div>

          {/* Phones read it as five separate marks rather than as a row over a
              rail, so each one carries its own name and they wrap three up. */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-7 border-t border-[#5B16C4]/[0.10] pt-8 lg:hidden">
            {COMPLIANCE.map((item) => (
              <div key={item.label} className="flex w-[92px] flex-col items-center gap-2.5 text-center">
                <item.seal />
                <span className="text-[12.5px] font-semibold leading-[1.35] text-ignitho-muted">
                  {item.short}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-t border-[#5B16C4]/[0.10] max-lg:hidden lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 py-4 lg:w-[470px] lg:shrink-0 lg:pr-10">
            <Globe className="h-[15px] w-[15px] text-ignitho-muted" strokeWidth={1.7} aria-hidden="true" />
            <span className="text-[13.5px] font-semibold text-ignitho-muted">Governed at every step</span>
          </div>

          <div className="grid grid-cols-5 py-4 lg:flex-1 lg:border-t-0">
            {COMPLIANCE.map((item) => (
              <div key={item.label} className="px-1 text-center">
                <span className="text-[12px] font-semibold leading-[1.4] text-ignitho-muted md:text-[13.5px]">
                  {item.short}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 border-t border-[#5B16C4]/[0.10] pt-4 lg:hidden">
          <Globe className="h-[15px] w-[15px] text-ignitho-muted" strokeWidth={1.7} aria-hidden="true" />
          <span className="text-[13px] font-semibold text-ignitho-muted">Governed at every step</span>
        </div>
      </div>

    </section>
  )
}
