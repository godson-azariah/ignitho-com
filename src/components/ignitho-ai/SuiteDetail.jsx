"use client";

import { ArrowLeft, CheckCircle2, Play } from 'lucide-react'

export default function SuiteDetail({ suite, onBack, onRunSimulation }) {
  const Icon = suite.icon

  return (
    <main className="max-w-[1360px] mx-auto px-5 pt-[110px] pb-16 space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-ignitho-teal bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Suites</span>
        </button>

        <span className="text-xs font-bold px-3 py-1 rounded-full border bg-ignitho-teal/10 text-ignitho-teal border-ignitho-teal/30">
          {suite.type === 'foundation' ? 'Universal Foundation Platform' : 'Industry Vertical Suite'}
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-ignitho-teal text-white shadow-md shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-[40px] md:text-[46px] lg:text-4xl font-black text-ignitho-text">{suite.name}</h1>
                  <p className="text-xs font-bold text-ignitho-teal mt-1">{suite.tagline}</p>
                </div>
              </div>

              <p className="mt-6 text-slate-700 text-xs md:text-sm leading-relaxed">
                {suite.executiveSummary}
              </p>

              <div className="mt-6 p-4 bg-ignitho-accent-blue/10 border border-ignitho-accent-blue/20 rounded-xl">
                <span className="text-xs font-extrabold text-ignitho-text/70 block mb-1">
                  Target Business Impact
                </span>
                <p className="text-xs text-ignitho-text font-bold">{suite.businessImpact}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-400 mr-2 self-center">Sub-Domains:</span>
              {suite.subDomains.map((sub) => (
                <span
                  key={sub}
                  className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-ignitho-hero relative min-h-[280px] lg:min-h-[320px] flex items-center justify-center p-8 overflow-hidden">
            {suite.imageUrl ? (
              <>
                <img
                  src={suite.imageUrl}
                  alt={suite.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                <Icon className="relative z-10 w-16 h-16 text-white/90" />
              </>
            ) : (
              <Icon className="relative z-10 w-24 h-24 text-white/80" />
            )}
          </div>
        </div>
      </div>

      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold text-ignitho-teal tracking-wider">
              Embedded AI Accelerators
            </span>
            <h2 className="text-4xl sm:text-[40px] md:text-[46px] lg:text-4xl font-black text-ignitho-text mt-1">
              Available Agents ({suite.accelerators.length})
            </h2>
          </div>
          <p className="text-xs text-slate-500">Click &ldquo;Test Agent&rdquo; to simulate execution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suite.accelerators.map((acc) => (
            <div
              key={acc.name}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-ignitho-teal transition-all flex flex-col justify-between group hover:bg-white hover:shadow-md"
            >
              <div>
                <h3 className="text-lg lg:text-base font-bold text-ignitho-text">{acc.name}</h3>
                <span className="text-[10px] font-bold text-ignitho-teal block mt-0.5">{acc.type}</span>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{acc.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-ignitho-teal font-bold text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Governed DAG Ready
                </span>
                <button
                  onClick={() => onRunSimulation(acc)}
                  className="bg-ignitho-teal hover:bg-ignitho-teal-hover text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Play className="w-3 h-3" />
                  <span>Test Agent</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
