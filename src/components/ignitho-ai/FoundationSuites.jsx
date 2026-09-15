"use client";

import SuiteCard from './SuiteCard'
import { SUITES } from '@/lib/pages/ai-suites'

/* The three foundation suites, shown directly under the hero. Kept separate
   from the sector suites so the two blocks can sit at different points on the
   page. */
export default function FoundationSuites({ onOpenSuite }) {
  const foundations = SUITES.filter((suite) => suite.type === 'foundation')

  return (
    <section id="suites-catalog" className="bg-ignitho-light-grid py-16 md:py-20">
      <div className="mx-auto max-w-[1360px] px-5">
        <div className="mx-auto mb-10 max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-bold text-ignitho-text tracking-[-0.5px] leading-[1.15]">
            FRIEND Agentic suites
          </h2>
          <p className="mt-5 text-lg md:text-2xl text-[#7a00c2] leading-relaxed">
            A connected data pipeline, a trusted and governed data layer, and real-time analytics — the
            three foundations that every enterprise must have before AI can deliver results at scale
          </p>
        </div>

        <div className="mx-auto max-w-[1160px]">
          <h3 className="mb-6 text-center text-2xl font-bold text-ignitho-text">Universal Foundations</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {foundations.map((suite) => <SuiteCard key={suite.id} suite={suite} onOpen={onOpenSuite} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
