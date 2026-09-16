"use client";

import { motion, useReducedMotion } from 'framer-motion'
import { Bot, Boxes, EyeOff, GitBranch, Shield, ShieldAlert, Users } from 'lucide-react'
import { ARCHITECTURE } from '@/lib/pages/ai-architecture'

/*
  Copy on the left, the map on the right - the same shape as the careers band.

  The map is the glance version of the stack: three tiers threaded on one spine, read top to bottom in the order a request meets them. Only the spine
  connects anything, and it runs down its own column, so it never crosses a
  station.

  The animation is a single loop: the spine draws itself down the column while
  each station lights in turn as the spine reaches it. Timing lives in
  globals.css under "architecture map" - one cycle, one delay per station.
*/

const GLYPHS = { bot: Bot, boxes: Boxes, eyeOff: EyeOff, gitBranch: GitBranch, shield: Shield, shieldAlert: ShieldAlert, users: Users }

const EASE = [0.16, 1, 0.3, 1]

function Mark({ node, size = 18 }) {
  const style = { width: size, height: size }
  if (node.brand) {
    return (
      <span
        aria-hidden="true"
        className="block shrink-0"
        style={{
          ...style,
          backgroundColor: node.color,
          WebkitMaskImage: `url(/images/arch/${node.brand}.svg)`,
          maskImage: `url(/images/arch/${node.brand}.svg)`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
    )
  }
  const Glyph = GLYPHS[node.lucide] || Boxes
  return <Glyph aria-hidden="true" className="shrink-0" style={{ ...style, color: node.color }} />
}

export default function Architecture() {
  const { heading, lead, stations, lifecycle } = ARCHITECTURE
  const reduce = useReducedMotion()
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -12% 0px' },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <section className="bg-ignitho-white-grid px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1320px] items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-16">
        <div className="flex flex-col justify-center">
          <motion.h2
            className="text-3xl font-bold leading-[1.15] tracking-[-0.5px] text-ignitho-text max-lg:text-center sm:text-4xl md:text-[42px] lg:text-[46px]"
            {...rise()}
          >
            Trust Architecture behind{' '}
            <span className="text-[#7a00c2]">FRIEND Agentic AI Suites</span>
          </motion.h2>

          {lead.map((para, i) => (
            <motion.p
              key={para.slice(0, 24)}
              className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-ignitho-muted max-lg:text-center md:text-[19px] lg:text-[20px]"
              {...rise(0.08 + i * 0.08)}
            >
              {para}
            </motion.p>
          ))}

        </div>

        <div className="arch-diagram">
          {stations.map((station, i) => (
            <motion.div
              key={station.id}
              className="arch-lane"
              style={{ '--arch-accent': station.accent }}
              initial={reduce ? false : { opacity: 0, filter: 'blur(10px)', y: 14 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.14, ease: EASE }}
            >
              <div className="arch-lane-head">
                <span className="arch-lane-no">{station.step}</span>
                <span className="arch-lane-name">{station.label}</span>
              </div>

              <ul className="arch-lane-parts">
                {station.marks.map((mark) => (
                  <li key={mark.name} title={mark.name}>
                    <Mark node={mark} size={20} />
                    <span>{mark.short ?? mark.name}</span>
                  </li>
                ))}
              </ul>

              {/* the descent between one tier and the next */}
              {i < stations.length - 1 ? <span className="arch-link" aria-hidden="true" /> : null}
            </motion.div>
          ))}

          <motion.div
            className="arch-runs"
            initial={reduce ? false : { opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
          >
            <span className="arch-runs-label">{lifecycle.label}</span>
            {lifecycle.nodes.map((node) => (
              <span key={node.name} className="arch-runs-node" title={node.name}>
                <Mark node={node} size={14} />
                {node.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
