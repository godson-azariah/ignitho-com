"use client";

import { ArrowUpRight } from 'lucide-react'
import { splitHeading } from './splitHeading'

export default function SuiteCard({ suite, onOpen }) {
  const Icon = suite.icon
  const [headingLine1, headingLine2] = splitHeading(suite.name)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(22,6,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(22,6,58,0.14)]">
      <div className="relative h-20 overflow-hidden bg-[#16063A]">
        {suite.imageUrl && (
          <img
            src={suite.imageUrl}
            alt={suite.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(22,6,58,0.78),rgba(91,22,196,0.24))]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#16063A] via-[#5B16C4] to-[#00A274]" />

        <div className="absolute inset-x-4 top-0 bottom-6 flex items-center justify-between">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm font-bold tracking-[0.15em] text-white backdrop-blur-sm">
            Suite {suite.number}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm">
            <Icon className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="relative -mt-6 flex flex-1 min-h-[238px] flex-col rounded-t-[26px] bg-white p-5 text-center">
        <h3 className="min-h-[58px] text-[26px] font-bold leading-[1.08] tracking-[-0.7px] text-[#16063A]">
          <span className="block">{headingLine1}</span>
          <span className="block">{headingLine2}</span>
        </h3>
        <p className="mt-3 line-clamp-2 min-h-[44px] text-pretty text-sm font-bold leading-relaxed text-ignitho-teal">{suite.tagline}</p>

        <div className="mt-auto pt-5">
          <div className="border-l-2 border-[#5B16C4] bg-violet-50 px-4 py-3">
            <span className="text-xs font-extrabold text-[#5B16C4]">Measured target ROI</span>
            <p className="mt-1 line-clamp-2 min-h-[44px] text-pretty text-base font-semibold leading-snug text-[#16063A]">{suite.businessImpact}</p>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => onOpen(suite.id)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#16063A] transition-colors hover:text-ignitho-teal"
            >
              <span>Read more</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}