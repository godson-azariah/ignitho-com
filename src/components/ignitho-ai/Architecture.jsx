"use client";

import { motion, useReducedMotion } from 'framer-motion'
import { Bot, Boxes, EyeOff, GitBranch, Shield, ShieldAlert, Users } from 'lucide-react'
import { ARCHITECTURE } from '@/lib/pages/ai-architecture'

/*
  Copy on the left, the map on the right - the same shape as the careers band.

  The map is the glance version of the stack: four stations threaded on one
  spine, read top to bottom in the order a request meets them. Only the spine
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
  const { heading, lead, badges, stations, lifecycle } = ARCHITECTURE
  const reduce = useReducedMotion()
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -12% 0px' },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <section className="bg-ignitho-light-grid px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-16">
        <div>
          <motion.h2
            className="text-3xl font-bold leading-[1.15] tracking-[-0.5px] text-ignitho-text sm:text-4xl md:text-[42px] lg:text-[46px]"
            {...rise()}
          >
            The Trust Architecture behind{' '}
            <span className="text-[#7a00c2]">FRIEND Agents</span>
          </motion.h2>

          {lead.map((para, i) => (
            <motion.p
              key={para.slice(0, 24)}
              className="mt-5 max-w-[56ch] text-base leading-relaxed text-ignitho-muted md:text-[17px]"
              {...rise(0.08 + i * 0.08)}
            >
              {para}
            </motion.p>
          ))}

          <motion.ul className="mt-7 flex flex-wrap gap-2" {...rise(0.26)}>
            {badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-[#5B16C4]/20 bg-white/70 px-3 py-1 text-[11.5px] font-semibold text-[#3b2a6e] backdrop-blur-sm"
              >
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div className="arch-map" aria-label={heading} {...rise(0.12)}>
          <ol className="arch-track">
            <span aria-hidden="true" className={`arch-spine ${reduce ? 'arch-spine-still' : ''}`} />

            {stations.map((station, i) => (
              <li
                key={station.id}
                className={`arch-station ${reduce ? 'arch-station-still' : ''}`}
                style={{ '--arch-accent': station.accent, '--arch-delay': `${i * 1.6}s` }}
              >
                <span aria-hidden="true" className="arch-station-dot">{station.step}</span>

                <div className="min-w-0">
                  <p className="text-[15px] font-bold tracking-[-0.2px] text-ignitho-text md:text-base">{station.label}</p>
                  <p className="mt-1 text-[13px] leading-snug text-ignitho-muted">{station.caption}</p>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {station.marks.map((mark) => (
                      <li key={mark.name} className="arch-pill">
                        <Mark node={mark} size={15} />
                        <span>{mark.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="arch-map-foot">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#5B16C4]/60">{lifecycle.label}</span>
            {lifecycle.nodes.map((node) => (
              <span key={node.name} className="flex items-center gap-1.5 text-[11.5px] font-semibold text-[#16063A]/75">
                <Mark node={node} size={13} />
                {node.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
