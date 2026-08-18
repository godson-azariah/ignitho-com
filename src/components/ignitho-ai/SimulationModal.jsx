"use client";

import { X, Cpu, CheckCircle, Activity, ArrowRight, Terminal } from 'lucide-react'

export default function SimulationModal({ accelerator, step, onClose }) {
  if (!accelerator) return null

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0A0620] border border-ignitho-accent-blue/30 rounded-3xl max-w-2xl w-full p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/10 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-ignitho-accent-blue text-xs font-bold tracking-wider mb-1">
          <Cpu className="w-4 h-4" />
          <span>Live Agent Pipeline Simulator</span>
        </div>
        <h3 className="text-2xl font-extrabold">{accelerator.name}</h3>
        <p className="text-xs text-slate-400 mt-1">{accelerator.desc}</p>

        <div className="my-8 py-6 bg-black/40 rounded-2xl border border-white/10 flex items-center justify-around px-4">
          <div
            className={`p-3 rounded-xl border text-center w-36 transition-all ${
              step >= 1 ? 'border-ignitho-accent-blue bg-ignitho-accent-blue/10 text-white' : 'border-white/10 bg-white/5 text-slate-600'
            }`}
          >
            <span className="text-[10px] font-bold block text-slate-400">Node 1</span>
            <span className="text-xs font-bold">Input Ingestion</span>
            {step >= 1 && <CheckCircle className="w-4 h-4 text-ignitho-teal mx-auto mt-2" />}
          </div>

          <ArrowRight className={`w-5 h-5 ${step >= 2 ? 'text-ignitho-accent-blue' : 'text-white/10'}`} />

          <div
            className={`p-3 rounded-xl border text-center w-36 transition-all ${
              step === 2
                ? 'border-amber-400 bg-amber-400/10 text-amber-200 animate-pulse'
                : step > 2
                  ? 'border-ignitho-accent-blue bg-ignitho-accent-blue/10 text-white'
                  : 'border-white/10 bg-white/5 text-slate-600'
            }`}
          >
            <span className="text-[10px] font-bold block text-slate-400">Node 2</span>
            <span className="text-xs font-bold">Agent Execution</span>
            {step === 2 && <Activity className="w-4 h-4 text-amber-300 mx-auto mt-2 animate-spin" />}
            {step > 2 && <CheckCircle className="w-4 h-4 text-ignitho-teal mx-auto mt-2" />}
          </div>

          <ArrowRight className={`w-5 h-5 ${step >= 3 ? 'text-ignitho-accent-blue' : 'text-white/10'}`} />

          <div
            className={`p-3 rounded-xl border text-center w-36 transition-all ${
              step === 3 ? 'border-ignitho-teal bg-ignitho-teal/10 text-white' : 'border-white/10 bg-white/5 text-slate-600'
            }`}
          >
            <span className="text-[10px] font-bold block text-slate-400">Node 3</span>
            <span className="text-xs font-bold">Enterprise Outcome</span>
            {step === 3 && <CheckCircle className="w-4 h-4 text-ignitho-teal mx-auto mt-2" />}
          </div>
        </div>

        <div className="bg-black/40 p-4 rounded-xl font-mono text-xs text-ignitho-teal space-y-1">
          <div className="text-slate-500 border-b border-white/10 pb-1 mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Execution Status Stream</span>
          </div>
          <div>[00:00.10] Initializing agent payload context...</div>
          {step >= 2 && <div>[00:01.20] Executing domain rules &amp; policy guardrails...</div>}
          {step === 3 && (
            <div className="text-ignitho-teal font-bold">
              [00:02.50] Status 200 OK: Generated outcome verified successfully
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-ignitho-teal hover:bg-ignitho-teal-hover text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors"
          >
            Close Tester
          </button>
        </div>
      </div>
    </div>
  )
}
