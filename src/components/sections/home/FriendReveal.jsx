'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/*
  FRIEND infographic over the supplied landscape.

  The ground behind the word is the section's own pale grid - deliberately plain.
  Inside one SVG: the supplied landscape (public/images/friend-background.png,
  drawn wider than the viewBox so it reaches the edges and dropped low enough
  that its skyline clears the letters, parallaxing gently with scroll), then the
  word FRIEND standing on it as the
  supplied wordmark (public/images/FRIEND-logo-text.png), then white ground dots and arrows down to purple pill labels. The closing
  line follows in HTML. On phones there are no
  arrows, so the legend spells each meaning out of its letters instead -
  "FRugal", "Innovation" - with the letters that spell FRIEND picked out.

  Motion: the finished word fades up as one piece (a short rise on a long
  ease-out, driven by a CSS transition on the .friend-word layer), then dots
  pop, arrows draw, pills rise and descriptors fade in group by group. Reduced motion
  renders the finished scene still. The svg is height-capped so the word stops
  growing past laptop width.

  Layout constants: the word is forced to 1100 units wide (textLength) so the
  group bounds below are stable across fonts.
*/

const EASE_OUT = [0.16, 1, 0.3, 1]
const FONT = 'var(--font-urbanist), Urbanist, ui-sans-serif, system-ui, sans-serif'

// letter groups along the 150-1250 word span: dot positions and label centre
const GROUPS = [
  { key: 'FR', dots: [239, 431], cx: 338 },
  { key: 'I', dots: [570], cx: 606 },
  { key: 'EN', dots: [811], cx: 874 },
  { key: 'D', dots: [1138], cx: 1142 },
]

// Without JavaScript the inline initial styles would hide the word, so the
// finished scene is forced. framer's inline styles lose to !important rules.
const NOSCRIPT_STYLES =
  '<style>.friend-reveal [style]{opacity:1!important;transform:none!important}.friend-reveal .friend-word{opacity:1!important;transform:translateY(48px)!important}.friend-reveal path{stroke-dashoffset:0!important}</style>'

/* A label is either the meaning on its own, or a {lead, text} pair where the
   lead is the joining word the acronym does not spell - set lighter. */
const labelLead = (label) => (typeof label === 'string' ? '' : label.lead)
const labelText = (label) => (typeof label === 'string' ? label : label.text)

/* The meaning is what has to line up pill to pill, so it keeps the centre and
   the lead hangs off its left edge. This is half the meaning's advance width
   plus a word space: 0.459 is the average glyph advance in this face, measured
   off the rendered pill rather than guessed. */
const leadOffset = (text, fontSize) => (text.length * fontSize * 0.459) / 2 + 7

export default function FriendReveal({ friend }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [18, -18])
  const inView = useInView(ref, { once: true, margin: '0px 0px -18% 0px' })
  const on = (to, from) => (reduce || inView ? to : from)
  // Phones: crop to the word so it fills the width; the labels move to the legend.
  const [narrow, setNarrow] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const sync = () => setNarrow(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <div ref={ref} className="friend-reveal">
      <noscript dangerouslySetInnerHTML={{ __html: NOSCRIPT_STYLES }} />

      <div className="friend-scene">
        <svg className="friend-art" viewBox={narrow ? '30 210 1360 514' : '0 250 1400 474'} preserveAspectRatio="xMidYMax meet" aria-hidden="true">
          <defs>
            <filter id="friendPillShadow" x="-10%" y="-30%" width="120%" height="180%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3b1d95" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* the supplied landscape, wider than the viewBox so it reaches the edges,
              and dropped low enough that its skyline sits under the letters */}
          <motion.g style={{ y: drift }}>
            <image href="/images/friend-background.png" x="-500" y="20" width="2400" height="776" preserveAspectRatio="xMidYMid slice" opacity="0.82" />
          </motion.g>

          {/* The supplied wordmark. Its artwork sits at (76,220) in a 2086x754 file,
              so the placement below lands that content across x 150-1250 with its
              feet on y 430 - the baseline the ground dots below are aimed at. The
              48-unit drop onto the ridge lives in the CSS transform (.friend-word). */}
          <g className={'friend-word' + (reduce || inView ? ' is-in' : '')}>
            <image href="/images/FRIEND-logo-text.png" x="106.8" y="119.2" width="1185.2" height="428.4" />
          </g>

          {/* ground dots, arrows, pills, descriptors */}
          {GROUPS.map((g, i) => {
            const at = 0.75 + i * 0.1
            const merged = g.dots.length > 1
            return (
              <g key={g.key} className="friend-art-label">
                {g.dots.map((dx, di) => (
                  <motion.circle key={di} cx={dx} cy="500" r="9" fill="#fff" stroke="#7c3aed" strokeWidth="3" initial={reduce ? false : { scale: 0, opacity: 0 }} animate={on({ scale: 1, opacity: 1 }, { scale: 0, opacity: 0 })} transition={{ duration: 0.3, delay: at, ease: EASE_OUT }} style={{ transformOrigin: dx + 'px 500px' }} />
                ))}
                <motion.path
                  d={merged ? 'M' + g.dots[0] + ' 509 V538 Q' + g.dots[0] + ' 554 ' + (g.dots[0] + 16) + ' 554 H' + (g.cx - 8) + ' M' + g.dots[1] + ' 509 V538 Q' + g.dots[1] + ' 554 ' + (g.dots[1] - 16) + ' 554 H' + (g.cx + 8) + ' M' + g.cx + ' 554 V584' : 'M' + g.dots[0] + ' 509 V532 C' + g.dots[0] + ' 556 ' + g.cx + ' 556 ' + g.cx + ' 572 V584'}
                  fill="none"
                  stroke="#5b21c9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  animate={on({ pathLength: 1, opacity: 1 }, { pathLength: 0, opacity: 0 })}
                  transition={{ pathLength: { duration: 0.38, delay: at + 0.16, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.14, delay: at + 0.16 } }}
                />
                <motion.path d={'M' + (g.cx - 8) + ' 578 L' + g.cx + ' 589 L' + (g.cx + 8) + ' 578'} fill="none" stroke="#5b21c9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { opacity: 0 }} animate={on({ opacity: 1 }, { opacity: 0 })} transition={{ duration: 0.2, delay: at + 0.46 }} />
                <motion.g initial={reduce ? false : { opacity: 0, y: 10 }} animate={on({ opacity: 1, y: 0 }, { opacity: 0, y: 10 })} transition={{ duration: 0.42, delay: at + 0.5, ease: EASE_OUT }}>
                  <rect x={g.cx - 116} y="598" width="232" height="54" rx="27" fill="#5a1fd0" filter="url(#friendPillShadow)" />
                  {labelLead(friend.labels[i]) ? (
                    <text
                      x={g.cx - leadOffset(labelText(friend.labels[i]), 27)}
                      y="633"
                      textAnchor="end"
                      fontFamily={FONT}
                      fontWeight="400"
                      fontSize="20"
                      fill="#fff"
                      fillOpacity="0.85"
                    >
                      {labelLead(friend.labels[i]).trim()}
                    </text>
                  ) : null}
                  <text x={g.cx} y="634" textAnchor="middle" fontFamily={FONT} fontWeight="700" fontSize="27" fill="#fff">
                    {labelText(friend.labels[i])}
                  </text>
                </motion.g>
              </g>
            )
          })}
        </svg>

        {/* Phones: the in-scene labels are too small, so a legend takes over. */}
        <motion.ul className="friend-legend" aria-hidden="true" initial={reduce ? false : { y: 10, opacity: 0 }} animate={on({ y: 0, opacity: 1 }, { y: 10, opacity: 0 })} transition={{ duration: 0.5, delay: 0.65, ease: EASE_OUT }}>
          {friend.labels.map((label, i) => {
            // the acronym's own remainder carries the joining words ("nnovation in"),
            // so the label is split at the cap length instead
            const caps = friend.segments[i][0]
            const text = labelText(label)
            return (
              <li key={text}>
                <span className="friend-legend-pill">
                  {labelLead(label) ? <i>{labelLead(label)}</i> : null}
                  <b>{caps}</b>
                  {text.slice(caps.length)}
                </span>
              </li>
            )
          })}
        </motion.ul>

        <h3 className="sr-only">{'FRIEND: ' + friend.expansion}</h3>

        <motion.div className="friend-caption" initial={reduce ? false : { y: 14, opacity: 0 }} animate={on({ y: 0, opacity: 1 }, { y: 14, opacity: 0 })} transition={{ duration: 0.6, delay: 0.8, ease: EASE_OUT }}>
          <span className="friend-rule" aria-hidden="true" />
          <p>{friend.description}</p>
        </motion.div>
      </div>
    </div>
  )
}
