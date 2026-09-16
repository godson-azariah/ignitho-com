"use client";

import { motion, useReducedMotion } from 'framer-motion'
import FriendWheel from '@/components/sections/home/FriendWheel'

/*
  What FRIEND is, said once, before the page starts naming suites.

  It reuses the home hero's ring rather than drawing a second diagram: the
  visitor has just come from a page where that wheel stands for the framework,
  so repeating it here is the point - it is the same thing, not a new one.
*/

const EASE = [0.16, 1, 0.3, 1]

export default function OneFriend() {
  const reduce = useReducedMotion()
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -12% 0px' },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16">
        <div>
          <motion.h2
            className="text-3xl font-bold leading-[1.15] tracking-[-0.5px] text-ignitho-text sm:text-4xl md:text-[42px] lg:text-[46px]"
            {...rise()}
          >
            One <span className="text-[#7a00c2]">FRIEND</span>, for your Enterprise Data &amp; AI needs
          </motion.h2>

          <motion.p
            className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ignitho-muted md:text-[18px] lg:text-[19px]"
            {...rise(0.08)}
          >
            FRIEND isn&apos;t another AI tool. It brings three agentic suites together as one governed
            system &mdash; connecting enterprise data, trusted governance, and real-time analytics so
            they work together rather than in isolation. It gives your teams a unified foundation for
            turning complex data into reliable, actionable intelligence.
          </motion.p>

          <motion.p
            className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-ignitho-muted md:text-[18px] lg:text-[19px]"
            {...rise(0.16)}
          >
            More than a window you type into, FRIEND works alongside your teams as a system of
            specialized agents, guided by human expertise and grounded in your enterprise context.
            From engineering and analytics to governance and decision-making, it brings the right
            capabilities together to help your business move from fragmented data to meaningful
            outcomes.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={reduce ? false : { opacity: 0, filter: 'blur(10px)', scale: 0.97 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <FriendWheel className="h-auto w-full max-w-[380px] md:max-w-[460px]" />
        </motion.div>
      </div>
    </section>
  )
}
