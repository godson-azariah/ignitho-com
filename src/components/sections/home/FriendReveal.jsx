'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/*
  FRIEND infographic over the supplied landscape.

  The sky is CSS on .friend-scene (a pale lavender gradient with the site's
  dot grid). Inside one SVG: the snow landscape (public/images/friend-background.png,
  transparent, drawn wider than the viewBox so it reaches the edges on wide
  screens and parallaxing gently with scroll), then the word FRIEND standing
  on the ridge as deep violet 3D letters with a picture inside each letter
  group - a spread of banknotes for FR, a drawn glowing bulb for I, glass
  corporate towers for EN, an analytics dashboard for D (the photos are
  Unsplash, free licence, graded with one violet-to-blue overlay so they read
  as a set) - then white ground dots, arrows down to purple pill labels and a
  one-line descriptor each. The caption follows in HTML. On phones there are no
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
  { key: 'FR', dots: [242, 436], cx: 338 },
  { key: 'I', dots: [583], cx: 606 },
  { key: 'EN', dots: [831], cx: 874 },
  { key: 'D', dots: [1142], cx: 1142 },
]

// the six letters, each its own object: centre x and the picture group it shows
const LETTERS = [
  { ch: 'F', cx: 242, group: 'FR' },
  { ch: 'R', cx: 436, group: 'FR' },
  { ch: 'I', cx: 583, group: 'I' },
  { ch: 'E', cx: 720, group: 'EN' },
  { ch: 'N', cx: 921, group: 'EN' },
  { ch: 'D', cx: 1142, group: 'D' },
]

// pictures inside the letters, one per group
const PHOTOS = [
  // tint: shifts the photo's hue toward the scene's blue while keeping its detail
  { key: 'FR', src: '/images/friend/fr-notes.webp', x: 130, y: 150, w: 407, h: 520, tint: 0.62 },
  { key: 'EN', src: '/images/friend/en-towers.webp', x: 629, y: 150, w: 404, h: 520 },
  { key: 'D', src: '/images/friend/d-dash.webp', x: 1033, y: 150, w: 260, h: 520 },
]

// Without JavaScript the inline initial styles would hide the word, so the
// finished scene is forced. framer's inline styles lose to !important rules.
const NOSCRIPT_STYLES =
  '<style>.friend-reveal [style]{opacity:1!important;transform:none!important}.friend-reveal .friend-word{opacity:1!important;transform:translateY(48px)!important}.friend-reveal path{stroke-dashoffset:0!important}</style>'

export default function FriendReveal({ friend }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [18, -18])
  const inView = useInView(ref, { once: true, margin: '0px 0px -18% 0px' })
  const loop = (duration, delay = 0) => ({ duration, repeat: Infinity, ease: 'easeInOut', delay })
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
        <svg className="friend-art" viewBox={narrow ? '30 210 1360 450' : '0 196 1400 528'} preserveAspectRatio="xMidYMax meet" aria-hidden="true">
          <defs>
            {LETTERS.map((l, i) => (
              <clipPath key={i} id={'friendL' + i}>
                <text x={l.cx} y="430" textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize="300" letterSpacing="-12">
                  {l.ch}
                </text>
              </clipPath>
            ))}
            <linearGradient id="friendFace" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3b1d95" />
              <stop offset="0.55" stopColor="#4a12b8" />
              <stop offset="1" stopColor="#2f7bd8" />
            </linearGradient>
            {/* every letter group: the picture untouched up top, dissolving into the reference's
                blue (matched to the snow scene's own blues) at the foot */}
            <linearGradient id="friendGrade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#4a5ee8" stopOpacity="0" />
              <stop offset="0.4" stopColor="#4a5ee8" stopOpacity="0" />
              <stop offset="1" stopColor="#3b4fe0" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="friendDepth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.6" stopColor="#2b3fd4" stopOpacity="0" />
              <stop offset="1" stopColor="#2b3fd4" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="friendSkyI" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2a1470" />
              <stop offset="0.55" stopColor="#5b2bd6" />
              <stop offset="1" stopColor="#2f7bd8" />
            </linearGradient>
            <radialGradient id="friendBulbGlow">
              <stop offset="0" stopColor="#fff3b0" />
              <stop offset="0.35" stopColor="#ffc857" stopOpacity="0.8" />
              <stop offset="1" stopColor="#ffb020" stopOpacity="0" />
            </radialGradient>
            <filter id="friendPillShadow" x="-10%" y="-30%" width="120%" height="180%"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3b1d95" floodOpacity="0.22" /></filter>
          </defs>

          {/* the supplied landscape, wider than the viewBox so it reaches the edges */}
          <motion.g style={{ y: drift }}>
            <image href="/images/friend-background.png" x="-500" y="-105" width="2400" height="776" preserveAspectRatio="xMidYMid slice" opacity="0.82" />
          </motion.g>

          {/* the word: each letter rises out of the ground in turn - 3D extrusion,
              then its group's picture clipped inside it */}
          {/* the 48-unit drop onto the ridge lives in the CSS transform (see .friend-word) */}
          <g className={'friend-word' + (reduce || inView ? ' is-in' : '')}>
            {LETTERS.map((l, i) => {
              const photo = PHOTOS.find((p) => p.key === l.group)
              return (
                <g key={i}>
                  {[14, 11, 8, 5, 2].map((o) => (
                    <text key={o} x={l.cx + o} y={430 + Math.round(o * 0.35)} textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize="300" letterSpacing="-12" fill="#2b1878">
                      {l.ch}
                    </text>
                  ))}
                  <g clipPath={'url(#friendL' + i + ')'}>
                    <rect x="100" y="180" width="1200" height="280" fill="url(#friendFace)" />
                    {photo ? (
                      <g>
                        <image href={photo.src} x={photo.x} y={photo.y} width={photo.w} height={photo.h} preserveAspectRatio={photo.fit || 'xMidYMid slice'} />
                        {photo.tint ? (
                          <rect x={photo.x} y={photo.y} width={photo.w} height={photo.h} fill="#3f63e0" opacity={photo.tint} style={{ mixBlendMode: 'color' }} />
                        ) : null}
                        <rect x={photo.x} y="214" width={photo.w} height="216" fill="url(#friendGrade)" style={{ mixBlendMode: 'color' }} />
                        <rect x={photo.x} y="214" width={photo.w} height="216" fill="url(#friendDepth)" style={{ mixBlendMode: 'multiply' }} />
                      </g>
                    ) : (
                      <g>
                        <rect x="537" y="150" width="92" height="320" fill="url(#friendSkyI)" />
                        <motion.circle cx="583" cy="310" r="80" fill="url(#friendBulbGlow)" animate={reduce ? undefined : { opacity: [0.65, 1, 0.65], scale: [0.94, 1.06, 0.94] }} transition={loop(3.4)} style={{ transformOrigin: '583px 310px' }} />
                        <circle cx="583" cy="306" r="36" fill="#fff1c2" />
                        <circle cx="583" cy="306" r="36" fill="none" stroke="#ffd166" strokeWidth="5" />
                        <path d="M572 344 h22 v14 h-22 z M575 362 h16" stroke="#2b1878" strokeWidth="5" fill="#2b1878" strokeLinejoin="round" />
                        <path d="M572 306 c0 -10 22 -10 22 0 c0 8 -6 12 -6 22 h-10 c0 -10 -6 -14 -6 -22 z" fill="#ffb020" />
                        <rect x="537" y="214" width="92" height="216" fill="url(#friendGrade)" style={{ mixBlendMode: 'color' }} />
                        <rect x="537" y="214" width="92" height="216" fill="url(#friendDepth)" style={{ mixBlendMode: 'multiply' }} />
                      </g>
                    )}
                  </g>
                </g>
              )
            })}
          </g>

          {/* ground dots, arrows, pills, descriptors */}
          {GROUPS.map((g, i) => {
            const at = 1.35 + i * 0.16
            const merged = g.dots.length > 1
            return (
              <g key={g.key} className="friend-art-label">
                {g.dots.map((dx, di) => (
                  <motion.circle key={di} cx={dx} cy="500" r="9" fill="#fff" stroke="#7c3aed" strokeWidth="3" initial={reduce ? false : { scale: 0, opacity: 0 }} animate={on({ scale: 1, opacity: 1 }, { scale: 0, opacity: 0 })} transition={{ duration: 0.4, delay: at, ease: EASE_OUT }} style={{ transformOrigin: dx + 'px 500px' }} />
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
                  transition={{ pathLength: { duration: 0.6, delay: at + 0.25, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.2, delay: at + 0.25 } }}
                />
                <motion.path d={'M' + (g.cx - 8) + ' 578 L' + g.cx + ' 589 L' + (g.cx + 8) + ' 578'} fill="none" stroke="#5b21c9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { opacity: 0 }} animate={on({ opacity: 1 }, { opacity: 0 })} transition={{ duration: 0.3, delay: at + 0.75 }} />
                <motion.g initial={reduce ? false : { opacity: 0, y: 10 }} animate={on({ opacity: 1, y: 0 }, { opacity: 0, y: 10 })} transition={{ duration: 0.6, delay: at + 0.8, ease: EASE_OUT }}>
                  <rect x={g.cx - 116} y="598" width="232" height="54" rx="27" fill="#5a1fd0" filter="url(#friendPillShadow)" />
                  <text x={g.cx} y="634" textAnchor="middle" fontFamily={FONT} fontWeight="700" fontSize="27" fill="#fff">
                    {friend.labels[i]}
                  </text>
                </motion.g>
                <motion.text x={g.cx} y="690" textAnchor="middle" fontFamily={FONT} fontWeight="500" fontSize="22" fill="#3d3659" initial={reduce ? false : { opacity: 0 }} animate={on({ opacity: 1 }, { opacity: 0 })} transition={{ duration: 0.6, delay: at + 1.05 }}>
                  <tspan x={g.cx}>{friend.notes[i][0]}</tspan>
                  <tspan x={g.cx} dy="28">{friend.notes[i][1]}</tspan>
                </motion.text>
              </g>
            )
          })}
        </svg>

        {/* Phones: the in-scene labels are too small, so a legend takes over. */}
        <motion.ul className="friend-legend" aria-hidden="true" initial={reduce ? false : { y: 10, opacity: 0 }} animate={on({ y: 0, opacity: 1 }, { y: 10, opacity: 0 })} transition={{ duration: 0.7, delay: 1.0, ease: EASE_OUT }}>
          {friend.labels.map((label, i) => {
            // the acronym's own remainder carries the joining words ("nnovation in"),
            // so the label is split at the cap length instead
            const caps = friend.segments[i][0]
            return (
              <li key={label}>
                <span className="friend-legend-pill">
                  <b>{caps}</b>
                  {label.slice(caps.length)}
                </span>
                <span className="friend-legend-note">{friend.notes[i].join(' ')}</span>
              </li>
            )
          })}
        </motion.ul>

        <h3 className="sr-only">{'FRIEND: ' + friend.expansion}</h3>

        <motion.div className="friend-caption" initial={reduce ? false : { y: 14, opacity: 0 }} animate={on({ y: 0, opacity: 1 }, { y: 14, opacity: 0 })} transition={{ duration: 0.9, delay: 1.2, ease: EASE_OUT }}>
          <span className="friend-rule" aria-hidden="true" />
          <p>{friend.description}</p>
        </motion.div>
      </div>
    </div>
  )
}
