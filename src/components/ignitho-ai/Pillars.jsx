"use client";

import { Workflow, Network, ShieldCheck } from 'lucide-react'
import { splitHeading } from './splitHeading'

const PILLARS = [
  {
    icon: Workflow,
    title: 'Governed DAG Architecture',
    desc: 'Every workflow runs as a directed, deterministic execution graph, not just a chain of LLM calls.',
  },
  {
    icon: Network,
    title: 'Domain Ontology Based Approach',
    desc: 'AI understands your business through a structured map of its entities, relationships, and domain rules so it reasons in your language',
  },
  {
    icon: ShieldCheck,
    title: 'Hallucination Prevention',
    desc: 'Every AI output is validated against trusted source-of-truth data before it reaches you.',
  },
]

export default function Pillars() {
  return (
    <section className="py-16 md:py-20 px-5 max-w-[1360px] mx-auto">
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-bold text-ignitho-text tracking-[-0.5px] leading-[1.15]">
          <span className="block">Built for Trust.</span>
          <span className="block text-[#7a00c2]">Engineered for Enterprise.</span>
        </h2>
        <p className="mt-5 text-lg md:text-2xl text-[#7a00c2] leading-relaxed">
          The architecture behind FRIEND Agents ensures every AI-driven workflow is grounded in your
          business context, governed by deterministic execution, and validated against trusted data
        </p>
      </div>

      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-6 px-3 sm:px-0 lg:grid-cols-3">
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
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
              </h3>
              <div className="invisible shrink-0 p-2" aria-hidden="true">
                <p.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="mt-3 text-base text-white/90 leading-relaxed flex-1">{p.desc}</p>
          </div>
          )
        })}
      </div>
    </section>
  )
}
