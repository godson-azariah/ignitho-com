"use client";

import { motion, useReducedMotion } from 'framer-motion'
import { Bot, Boxes, EyeOff, GitBranch, Shield, ShieldAlert, Users } from 'lucide-react'
import { ARCHITECTURE } from '@/lib/pages/ai-architecture'

/*
  Copy on the left, the map on the right - the same shape as the careers band.

  The map is a node graph: each tier is a white card staggered across the
  column, joined by curved connectors with a lit dot at each end, and a note
  chip hanging off the side on a dotted hairline. Cards are sized by their
  content (w-fit), so none of them carries dead space on the right.

  Reveal: every element arrives the same way - up from 18px, 0.96 to full size,
  blur(10px) to sharp - and the whole figure runs as one cascade, card shell,
  then its heading, caption and each chip in turn, then the note, then the
  connector drawing into the next card. One motion, many small delays, which is
  what makes it read as a sequence rather than a pile of effects.

  Connector geometry needs no measuring: both endpoints sit the same 34px in
  from their card's left edge, so the SVG spans the gap between the two card
  offsets and the shared inset cancels out.
*/

const GLYPHS = { bot: Bot, boxes: Boxes, eyeOff: EyeOff, gitBranch: GitBranch, shield: Shield, shieldAlert: ShieldAlert, users: Users }

const EASE = [0.16, 1, 0.3, 1]
const VIEW = { once: true, margin: '0px 0px -12% 0px' }
const INSET = 34

/* where each card starts across the column, and the note that hangs off it */
const LAYOUT = [
  { left: 0, note: { side: 'right', text: 'Zero-trust edge · TLS 1.3' } },
  { left: 38, note: { side: 'left', text: 'PII stripped pre-model' } },
  { left: 6, note: { side: 'right', text: 'Audit trail on return' } },
]

/* ---- the one reveal, reused everywhere ---------------------------------- */

const cascade = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } } }
const group = { hidden: {}, show: { transition: { staggerChildren: 0.055 } } }

const blurIn = {
  hidden: { opacity: 0, y: 18, scale: 0.96, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.72, ease: EASE } },
}

/* chips are small and there are a lot of them, so they travel less */
const blurInSm = {
  hidden: { opacity: 0, y: 10, scale: 0.97, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE } },
}

const lineIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.55, ease: EASE } },
}

const popIn = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.42, ease: [0.34, 1.56, 0.64, 1] } },
}

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

function Card({ station }) {
  return (
    <motion.div
      variants={blurIn}
      className="tnode-card w-full rounded-[13px] border border-[#ECE6F8] bg-white px-[15px] pb-[13px] pt-[12px] xl:w-[320px]"
    >
      <motion.div variants={group}>
        <motion.div variants={blurInSm} className="flex items-baseline gap-[9px]">
          <span className="text-[11px] font-bold tracking-[0.1em] text-[#7A00C2]">{station.step}</span>
          <h3 className="text-[14.5px] font-bold leading-[1.2] text-[#16063A]">{station.label}</h3>
        </motion.div>

        <motion.p variants={blurInSm} className="mt-[3px] text-[11.5px] leading-snug text-[#6B6080]">
          {station.caption}
        </motion.p>

        <motion.ul variants={group} className="mt-[11px] flex flex-wrap gap-[6px]">
          {station.marks.map((mark) => (
            <motion.li
              key={mark.name}
              variants={blurInSm}
              title={mark.name}
              /* flex-1 so each wrapped row fills the card: no half-empty row */
              className="flex flex-1 min-w-fit items-center gap-[6px] rounded-[8px] border border-[#EEE8FB] bg-[#F8F5FE] py-[4px] pl-[6px] pr-[9px]"
            >
              <Mark node={mark} size={14} />
              <span className="text-[11px] font-medium leading-none text-[#2A1D44]">{mark.short ?? mark.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

/* A side note on a dotted hairline, the way a client note hangs off a task. */
function Note({ note, accent }) {
  const right = note.side === 'right'
  const line = (
    <span className="relative hidden h-px w-[24px] shrink-0 border-t border-dotted border-[#7A00C2]/35 xl:block" aria-hidden="true">
      <span
        className="absolute top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full"
        style={{ background: accent, [right ? 'left' : 'right']: -2 }}
      />
    </span>
  )
  return (
    <motion.div
      variants={blurIn}
      className={`mt-[8px] flex items-center xl:absolute xl:top-[17px] xl:mt-0 ${
        right ? 'xl:left-[calc(100%+8px)]' : 'xl:right-[calc(100%+8px)]'
      }`}
    >
      {right ? line : null}
      <span className="max-w-[158px] xl:max-w-none xl:whitespace-nowrap rounded-[10px] border border-[#ECE6F8] bg-white px-[10px] py-[5px] text-[11px] font-medium leading-[1.3] text-[#4A4060]">
        {note.text}
      </span>
      {right ? null : line}
    </motion.div>
  )
}

/* The connector: both ends sit INSET from their card's left edge, so the SVG
   only has to span the gap between the two card offsets. */
function Link({ from, to, id }) {
  const lo = Math.min(from.left, to.left)
  const hi = Math.max(from.left, to.left)
  const down = from.left <= to.left
  const x1 = down ? 2 : 98
  const x2 = down ? 98 : 2
  const d = `M ${x1} 2 C ${x1} 26 ${x2} 22 ${x2} 44`

  const dot = (x, y, color) => (
    <motion.span
      variants={popIn}
      className="tnode-dot absolute hidden h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:block"
      style={{ left: `${x}%`, top: y, background: color, '--c': color }}
      aria-hidden="true"
    />
  )

  return (
    <motion.div variants={group} className="relative h-[46px]" aria-hidden="true">
      <div
        className="absolute inset-y-0 hidden lg:block"
        style={{ left: `${lo}%`, width: `${hi - lo}%`, marginLeft: INSET }}
      >
        <svg viewBox="0 0 100 46" className="h-full w-full overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={from.accent} />
              <stop offset="1" stopColor={to.accent} />
            </linearGradient>
          </defs>
          <motion.g variants={lineIn}>
            <path
              d={d}
              fill="none"
              stroke={`url(#${id})`}
              strokeOpacity="0.1"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
            <path
              d={d}
              fill="none"
              stroke={`url(#${id})`}
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
        {dot(x1, 2, from.accent)}
        {dot(x2, 44, to.accent)}
      </div>

      {/* below lg the cards stack full width, so the run is a straight drop */}
      <svg viewBox="0 0 100 46" className="absolute inset-0 h-full w-full lg:hidden" preserveAspectRatio="none">
        <motion.path
          variants={lineIn}
          d="M 50 0 L 50 46"
          fill="none"
          stroke={to.accent}
          strokeOpacity="0.4"
          strokeWidth="1.25"
          strokeDasharray="2 5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </motion.div>
  )
}

export default function Architecture() {
  const { heading, lead, stations, lifecycle } = ARCHITECTURE
  const reduce = useReducedMotion()
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: VIEW,
    transition: { duration: 0.7, delay, ease: EASE },
  })

  const [headA, headB] = heading.split(/(?=FRIEND)/)
  const nodes = stations.map((s, i) => ({ ...s, ...LAYOUT[i] }))

  return (
    <section className="bg-ignitho-white-grid px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-16">
        <div className="flex flex-col justify-center">
          <motion.h2
            className="text-3xl font-bold leading-[1.15] tracking-[-0.5px] text-ignitho-text max-lg:text-center sm:text-4xl md:text-[42px] lg:text-[46px]"
            {...rise()}
          >
            {headA}
            <span className="text-[#7a00c2]">{headB}</span>
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

        {/* the canvas the graph sits on: a dashed lavender frame, nothing more */}
        <motion.div
          className="tnode rounded-[22px] border border-dashed border-[#7A00C2]/15 bg-[linear-gradient(170deg,rgba(255,255,255,0.86)_0%,rgba(252,250,255,0.62)_48%,rgba(248,245,254,0.34)_100%)] p-[18px] sm:p-[26px]"
          variants={reduce ? undefined : cascade}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={VIEW}
        >
          {nodes.map((node, i) => (
            <motion.div key={node.id} variants={reduce ? undefined : group}>
              <div>
                <div className="tnode-slot" style={{ '--l': `${node.left}%` }}>
                  <div className="relative xl:inline-block">
                    <Card station={node} />
                    <Note note={node.note} accent={node.accent} />
                  </div>
                </div>
              </div>

              {i < nodes.length - 1 ? (
                <Link from={node} to={nodes[i + 1]} id={`tnode-link-${i}`} />
              ) : null}
            </motion.div>
          ))}

          <motion.div
            variants={blurIn}
            className="mt-[20px] flex flex-wrap items-center gap-x-[16px] gap-y-3 lg:pl-[7%]"
          >
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#5B16C4]/60">
              {lifecycle.label}
            </span>
            {lifecycle.nodes.map((node) => (
              <span key={node.name} className="flex items-center gap-[6px]" title={node.name}>
                <Mark node={node} size={14} />
                <span className="text-[12px] text-[#16063A]/[0.72]">{node.name}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
