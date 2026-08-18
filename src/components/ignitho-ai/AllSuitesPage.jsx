"use client";

import { ArrowLeft } from 'lucide-react'
import SuiteCard from './SuiteCard'

const TABS = [
  { id: 'ALL', label: 'All 9 Suites' },
  { id: 'FOUNDATION', label: '3 Universal Foundations' },
  { id: 'INDUSTRY', label: '6 Industry Verticals' },
]

export default function AllSuitesPage({ suites, activeTab, onTabChange, onOpenSuite, onBack }) {
  return (
    <section className="pb-16 md:pb-20 px-5 max-w-[1360px] mx-auto pt-[120px]">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-ignitho-teal bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm transition-all mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      <div className="text-center mb-10 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-[40px] md:text-[46px] lg:text-[40px] font-bold text-ignitho-text tracking-[-0.5px]">
          All 9 Ignitho AI Suites
        </h1>
        <p className="mt-4 text-sm md:text-base text-ignitho-muted leading-relaxed">
          Three universal foundations that work across any enterprise — plus six industry-specific suites
          built for your sector. Every suite comes with embedded AI agents ready to deploy from day one
        </p>

        <div className="inline-flex flex-wrap justify-center gap-1.5 mt-6 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-ignitho-teal shadow-sm ring-1 ring-slate-200'
                  : 'text-slate-500 hover:bg-white/70 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
        {suites.map((suite) => (
          <SuiteCard key={suite.id} suite={suite} onOpen={onOpenSuite} />
        ))}
      </div>
    </section>
  )
}
