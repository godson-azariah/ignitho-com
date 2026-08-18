/* Splits a heading into a deliberate two-line pair, balancing the two lines'
   lengths rather than leaving the wrap point to the browser. Avoids ending
   the first line on a bare "&", and avoids leaving a single orphan word on
   the second line whenever the heading has another valid split point. */
export function splitHeading(text) {
  const words = text.split(' ')
  if (words.length < 2) return [text, '']
  let best = null
  let bestAnyLine2 = null
  for (let k = 1; k < words.length; k++) {
    const line1 = words.slice(0, k).join(' ')
    const line2 = words.slice(k).join(' ')
    if (line1.endsWith('&')) continue
    const diff = Math.abs(line1.length - line2.length)
    const candidate = { k, diff, line1, line2 }
    if (!bestAnyLine2 || diff < bestAnyLine2.diff || (diff === bestAnyLine2.diff && k > bestAnyLine2.k)) {
      bestAnyLine2 = candidate
    }
    if (words.length - k === 1) continue
    if (!best || diff < best.diff || (diff === best.diff && k > best.k)) {
      best = candidate
    }
  }
  const winner = best ?? bestAnyLine2
  return winner ? [winner.line1, winner.line2] : [text, '']
}
