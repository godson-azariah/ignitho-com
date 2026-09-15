'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/*
  The acronym read out of its own sentence.

  Rather than setting FRIEND as a wordmark and hanging the meanings off it on
  arrows and pills, the whole phrase is set once - "FRugal Innovation in
  ENterprise Data & AI" - and the letters that spell FRIEND are picked out of
  it. The acronym is then something you see happen rather than something you
  are told, and there is nothing to align, because the letters are already in
  the words they come from.

  It is set as a lockup rather than as a sentence: the acronym letters are half
  again the size of the words they sit in, the rest is light and quiet. So
  FRIEND is the thing you see and the phrase is what you read second.

  The lockup is set in a display face used nowhere else on the site, which is
  the real separator: the headings are all geometric sans, so the difference
  reads before you have read a word of either.

  It no longer carries its own plate - the artwork is the whole section's
  backdrop now, and this just sits on it (see FrugalInnovation).

  Motion: only the line moves, pulling into focus out of a blur. The letters
  used to arrive one at a time, which drew the eye to the animation rather than
  to the phrase.
*/

const EASE_OUT = [0.16, 1, 0.3, 1]

export default function FriendReveal({ friend }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const on = (to, from) => (reduce || inView ? to : from)

  return (
    <div ref={ref} className="friend-reveal">
      <motion.p
        className="friend-line"
        initial={reduce ? false : { opacity: 0, filter: 'blur(12px)', scale: 1.03 }}
        animate={on(
          { opacity: 1, filter: 'blur(0px)', scale: 1 },
          { opacity: 0, filter: 'blur(12px)', scale: 1.03 },
        )}
        transition={{ duration: 0.95, ease: EASE_OUT }}
      >
        {/* each segment is its acronym letters plus the rest of its word, so the
            sentence and the acronym are the same string of characters */}
        {friend.segments.map(([caps, rest], i) => (
          <span key={caps}>
            {i > 0 ? ' ' : null}
            <b className="friend-caps">{caps}</b>
            {rest}
          </span>
        ))}
      </motion.p>

      <h3 className="sr-only">{'FRIEND: ' + friend.expansion}</h3>
    </div>
  )
}
