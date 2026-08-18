"use client";

import { Lock, Eye, Gauge, Activity, ShieldCheck, HeartPulse, Fingerprint, Workflow } from 'lucide-react'
import { splitHeading } from './splitHeading'

const FEATURES = [
  {
    icon: Lock,
    title: 'AI Security Firewall',
    titleLines: ['AI Security', 'Firewall'],
    desc: 'Blocks prompt injection attacks and prevents unauthorised data access across every Ignitho AI workflow — automatically, continuously',
  },
  {
    icon: Eye,
    title: 'Hallucination Prevention',
    desc: 'Every Ignitho AI output is verified against your real company data before any decision is executed or communicated',
  },
  {
    icon: Gauge,
    title: 'Controlled AI Spend',
    desc: 'Every AI task is dynamically routed to the most cost-efficient model — keeping monthly cloud costs predictable and within budget',
  },
  {
    icon: Activity,
    title: 'Model Accuracy Monitoring',
    titleLines: ['Model Accuracy', 'Monitoring'],
    desc: 'Live Ignitho AI models are continuously monitored and automatically retrained before performance degrades',
  },
]

const COMPLIANCE = [
  { icon: ShieldCheck, label: 'ISO 27001 Certified' },
  { icon: Lock, label: 'SOC 2 Type II' },
  { icon: HeartPulse, label: 'HIPAA Compliant' },
  { icon: Fingerprint, label: 'GDPR Ready' },
  { icon: Workflow, label: 'Governed DAG Architecture' },
]

export default function SecuritySection() {
  return (
    <section className="py-16 md:py-20 px-5 max-w-[1360px] mx-auto">
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-bold text-ignitho-text tracking-[-0.5px] leading-[1.15]">
          <span className="block">Enterprise-Grade Security</span>
          <span className="block text-[#7a00c2]">in Every Suite</span>
        </h2>
        <p className="mt-5 text-lg md:text-2xl text-[#7a00c2] leading-relaxed">
          Every Ignitho AI deployment is governed, auditable and compliant from the first sprint —
          security is built into the architecture, not added after the fact
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
            <div className="mb-4 grid grid-cols-[auto_1fr_auto] items-center gap-1.5 min-h-[3.75rem] lg:min-h-[4.5rem]">
              <div className="shrink-0 p-1.5 bg-white/10 border border-white/15 rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.08] group-hover:rotate-6">
                <f.icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-center text-xl font-bold text-white lg:text-2xl">
                <span className="block whitespace-nowrap">{line1}</span>
                <span className="block whitespace-nowrap">{line2}</span>
              </h3>
              <div className="invisible shrink-0 p-1.5" aria-hidden="true">
                <f.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-base text-white/90 mt-2 pt-5 border-t border-white/15 leading-relaxed flex-1 text-center">{f.desc}</p>
          </div>
          )
        })}
      </div>

      <div className="mt-10 md:mt-12">
        <p className="mb-5 md:mb-6 text-center text-sm font-bold text-ignitho-muted">
          Security &amp; Compliance
        </p>
        <div className="flex flex-wrap items-start justify-center gap-x-2 gap-y-6 md:gap-x-8 md:gap-y-7">
          {COMPLIANCE.map((item) => (
            <div key={item.label} className="flex w-[170px] md:w-[232px] flex-col items-center gap-2 md:gap-3">
              <span className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full border-2 border-[#5B16C4]/20 bg-violet-50 text-[#5B16C4]">
                <item.icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.6} />
              </span>
              <span className="whitespace-nowrap text-center text-[13px] md:text-lg font-bold leading-snug text-ignitho-text">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
