'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/*
  FRIEND, then the phrase it stands for - staged like a title sequence.

  Server-rendered as the single word FRIEND at display size. When the block
  scrolls into view it runs three stages, keyed off data-state:

    entered   the six letters lift out of a clipped baseline one after
              another while a soft glow blooms behind the word
    expanded  after a beat the line eases down one type size and each letter
              group (FR, I, EN, D) opens its remainder beside it, a glint
              passes across the capitals, and the caption draws in

  Each group is a two-track grid: the letters in an auto track, the remainder
  in a track that transitions 0fr -> 1fr, so the browser resolves the width
  from the loaded font and nothing is measured. The block reserves its compact
  height so the caption never jumps. Timings live in globals.css ("FRIEND
  reveal"); --l orders the letters, --i the groups, --d the caption.
*/

const HOLD_MS = 950 // how long the built word is read before it opens

// Without JavaScript data-state never flips, so show the finished phrase.
const NOSCRIPT_STYLES =
  '<style>.friend-reveal .friend-seg{grid-template-columns:auto 1fr}.friend-reveal .friend-letter,.friend-reveal .friend-rest-in,.friend-reveal .friend-rise,.friend-reveal .friend-glow{opacity:1;transform:none;filter:none}</style>'

export default function FriendReveal({ friend }) {
  const ref = useRef(null)
  // Fires once the block's top edge clears the bottom fifth of the viewport,
  // so the word builds comfortably on screen.
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' })
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!inView) return undefined
    const t = setTimeout(() => setExpanded(true), HOLD_MS)
    return () => clearTimeout(t)
  }, [inView])

  const state = expanded ? 'expanded' : inView ? 'entered' : 'compact'
  const last = friend.segments.length - 1
  let letterIndex = 0

  return (
    <div ref={ref} data-state={state} className="friend-reveal relative flex flex-col items-center">
      <noscript dangerouslySetInnerHTML={{ __html: NOSCRIPT_STYLES }} />

      <div className="friend-stage">
        <span className="friend-glow" aria-hidden="true" />
        <h3 aria-label={`FRIEND: ${friend.expansion}`} className="friend-word">
          {friend.segments.map(([letters, rest], i) => (
            <span key={letters} className="friend-seg" style={{ '--i': i }} aria-hidden="true">
              <span className="friend-cap-mark">
                {letters.split('').map((ch) => (
                  <span key={`${letters}-${letterIndex}`} className="friend-letter" style={{ '--l': letterIndex++ }}>
                    {ch}
                  </span>
                ))}
              </span>
              <span className="friend-rest">
                <span className="friend-rest-in">
                  {rest}
                  {/* NBSP: a plain trailing space would be dropped inside the nowrap box */}
                  {i < last ? ' ' : ''}
                </span>
              </span>
            </span>
          ))}
        </h3>
      </div>

      <div className="friend-rise friend-caption" style={{ '--d': '560ms' }}>
        <span className="friend-rule" aria-hidden="true" />
        <p>{friend.description}</p>
      </div>
    </div>
  )
}
