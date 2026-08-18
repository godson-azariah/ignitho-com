"use client";

import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-ignitho-hero relative overflow-hidden py-16 md:py-20">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-[46%] items-center justify-end md:right-12 md:flex lg:right-16 lg:w-[42%]">
          <img
            src="/images/ignitho-updated-map.svg"
            alt=""
            className="w-full max-w-[620px] opacity-90"
          />
        </div>

        <div className="relative z-10 max-w-xl text-left">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-[44px] leading-[1.15] tracking-[-0.5px]">
            <span className="block">Ready to See Ignitho AI</span>
            <span className="block">in Action?</span>
          </h2>
          <p className="mt-5 text-white/80 text-base md:text-xl font-medium leading-relaxed">
            Book a 30-minute executive briefing. We will show you exactly which Ignitho AI suites map to
            your business priorities — with a live ROI projection built around your headcount and workflows
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://www.ignitho.com/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-ignitho-teal border border-ignitho-teal-border text-[#f9f6fe] text-sm sm:text-base font-medium px-6 py-3.5 leading-none transition-colors hover:bg-ignitho-teal-hover/70 hover:border-ignitho-teal-hover hover:text-white"
            >
              <span className="whitespace-nowrap">Schedule Executive Briefing</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          <img
            src="/images/ignitho-updated-map.svg"
            alt=""
            className="mt-10 w-full max-w-[360px] opacity-80 md:hidden"
          />
        </div>
      </div>
    </section>
  )
}
