"use client";

import { TrendingUp, Gauge, Clock, ShieldCheck } from 'lucide-react'
import { splitHeading } from './splitHeading'

const PILLARS = [
  {
    icon: TrendingUp,
    title: 'Revenue Acceleration',
    desc: 'Automated proposals, lead scoring, and dynamic pricing that shortens your sales cycle and closes more deals',
    target: 'Target: 40% Faster Sales Velocity (Gartner)',
  },
  {
    icon: Gauge,
    title: 'Operational Efficiency',
    desc: 'Eliminating manual effort and reducing processing time — so your teams focus on work that moves the business forward',
    target: 'Target: 57% of Work Hours Automatable (McKinsey)',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    desc: 'Pre-built, pre-tested AI suites that integrate into your existing ERP, CRM, and cloud stack without disruption',
    target: 'Target: Live in Days',
  },
  {
    icon: ShieldCheck,
    title: 'Corporate Governance',
    desc: 'Audit-ready outputs and compliance controls built into every workflow — keeping every decision traceable and defensible',
    target: 'Target: 3.4x More Effective Governance (Gartner)',
  },
]

export default function Pillars() {
  return (
    <section className="py-16 md:py-20 px-5 max-w-[1360px] mx-auto">
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-bold text-ignitho-text tracking-[-0.5px] leading-[1.15]">
          <span className="block">Enterprise-Wide Outcomes. Nine AI Suites</span>
          <span className="block text-[#7a00c2]">Twenty-Seven AI Agents</span>
        </h2>
        <p className="mt-5 text-lg md:text-2xl text-[#7a00c2] leading-relaxed">
          Ignitho AI is built to deliver four outcomes that matter to enterprise leadership — not vanity
          metrics, not proof of concepts, not technology experiments
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-3 sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
        {PILLARS.map((p) => {
          const [line1, line2] = splitHeading(p.title)
          return (
          <div
            key={p.title}
            className="group flex h-full flex-col rounded-[24px] p-6 text-white bg-[linear-gradient(160deg,#16063A_0%,#5B16C4_100%)] shadow-[0_18px_46px_rgba(80,8,208,0.25)] border border-white/10 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            <div className="mb-4 grid grid-cols-[auto_1fr_auto] items-center gap-2 min-h-[3.75rem] lg:min-h-[4.5rem]">
              <div className="shrink-0 p-2 bg-white/10 border border-white/15 rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.08] group-hover:rotate-6">
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-center text-xl font-bold text-white lg:text-2xl">
                <span className="block whitespace-nowrap">{line1}</span>
                <span className="block whitespace-nowrap">{line2}</span>
              </h3>
              <div className="invisible shrink-0 p-2" aria-hidden="true">
                <p.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="mt-3 text-base text-white/90 leading-relaxed flex-1">{p.desc}</p>
            <div className="mt-2 pt-4 border-t border-white/15 min-h-[3.5rem] text-center text-sm font-bold text-ignitho-accent-blue">
              {p.target}
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}
