"use client";

import { Boxes, Check, Layers, Plug, ShieldAlert, ShieldCheck, Target, TrendingDown, X } from 'lucide-react'

const PROBLEM_ROWS = [
  { icon: Layers, text: 'Generic AI tools built for no industry in particular' },
  { icon: Boxes, text: 'Every new AI tool adds complexity to an already overcrowded stack' },
  { icon: ShieldAlert, text: 'AI outputs your teams cannot verify or trust' },
  { icon: TrendingDown, text: 'AI becoming an expensive investment with no clear return' },
]

const FIX_ROWS = [
  { icon: Layers, text: 'Pre-built domain-specific accelerators purpose-built for your exact business function' },
  { icon: Plug, text: 'Runs on your existing systems — no new infrastructure, no rip and replace' },
  { icon: ShieldCheck, text: 'Governed architecture with built-in hallucination prevention on every output' },
  { icon: Target, text: 'The right partner ensures every deployment automates real workflows — not just adds to your cloud bill' },
]

function CompareCard({ label, icon: HeadIcon, rows, gradient, accent }) {
  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 text-white shadow-[0_30px_60px_-24px_rgba(22,6,58,0.45)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-20px_rgba(22,6,58,0.55)] md:p-8"
      style={{ background: gradient }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10 transition-transform duration-500 ease-out group-hover:scale-110" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10 transition-transform duration-500 ease-out group-hover:scale-110" />

      <div className="relative z-10 flex items-center gap-3">
        <HeadIcon className="h-6 w-6 shrink-0 text-white stroke-[2.5]" />
        <h3 className="text-2xl font-bold tracking-[-0.3px]">{label}</h3>
      </div>

      <div className="relative z-10 mt-6 flex flex-1 flex-col gap-4">
        {rows.map((row) => (
          <div key={row.text} className="flex min-h-[40px] items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[11px]" style={{ color: accent }}>
              <row.icon className="h-3.5 w-3.5 stroke-[3]" />
            </span>
            <p className="text-[14.5px] leading-[1.5] text-white/90">{row.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProblemFix() {
  return (
    <section className="py-16 md:py-20 px-5 max-w-[1360px] mx-auto">
      <div className="text-center mb-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-bold text-ignitho-text tracking-[-0.5px] leading-[1.15]">
          <span className="block">Enterprise AI Shouldn&rsquo;t Feel Like a</span>
          <span className="block text-[#7a00c2]">Research Project</span>
        </h2>
        <p className="mt-5 text-lg md:text-2xl text-[#7a00c2] leading-relaxed">
          Most enterprise AI initiatives stall at the proof of concept stage — too generic to automate real workflows, too risky without compliance guardrails, and too slow to deliver value before the next budget cycle
        </p>
      </div>

      <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <CompareCard
          label="The Problem"
          icon={X}
          rows={PROBLEM_ROWS}
          accent="#4C1B86"
          gradient="linear-gradient(160deg, #16063A 0%, #4C1B86 55%, #5B16C4 100%)"
        />
        <CompareCard
          label="The Ignitho AI Proposition"
          icon={Check}
          rows={FIX_ROWS}
          accent="#00A274"
          gradient="linear-gradient(160deg, #043620 0%, #07924f 55%, #00A274 100%)"
        />
      </div>
    </section>
  )
}
