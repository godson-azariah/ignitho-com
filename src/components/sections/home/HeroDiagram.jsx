/*
  Hero visual: the FRIEND framework drawn as a schematic rather than a poster.

  It sits beside the headline, so it is built to be looked at second. Nothing is
  filled: the rings are hairlines, the three capabilities are short arcs on one
  of them, and the only solid shape is the small plate the wordmark needs to be
  legible on. Thin strokes of a light colour read as delicate; the same colour
  as a large fill would read as loud, which is what the earlier solid wheel did.
  FriendWheel.jsx keeps that version.

  Everything is polar: angles are degrees from twelve o'clock, positive
  clockwise. Labels ride invisible rails - the top one clockwise so it reads
  upright, the two side ones counter-clockwise so their letters lean inward,
  which mirrors them.

  Motion is close to imperceptible on purpose: the arcs draw themselves once,
  and a dashed ring turns slowly enough that it registers as alive rather than
  as something happening.

  Drawn at 600 x 600 and scaled by the container.
*/

const C = 300 // centre, both axes

const TRACK = 246 // the ring the capabilities sit on
const LABEL = 212 // where their labels sit, just inside it
const INNER = 152 // the ring carrying the pairing
const PLATE = 104 // the wordmark's plate

const CAP = (size) => size * 0.72 // cap height, near enough for centring

/* A point on the circle: 0 is twelve o'clock, positive is clockwise. */
function at(r, deg) {
  const a = (deg * Math.PI) / 180
  return [C + r * Math.sin(a), C - r * Math.cos(a)]
}

const to = ([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`

/* An arc from `a` to `b`. `sweep` 1 runs clockwise, which is also what decides
   whether a label on it stands outward or leans inward. */
function arc(r, a, b, sweep = 1) {
  const big = Math.abs(b - a) > 180 ? 1 : 0
  return `M${to(at(r, a))}A${r} ${r} 0 ${big} ${sweep} ${to(at(r, b))}`
}

/* Type sits on its baseline, so a rail laid where the label should read leaves
   the glyphs hanging to one side of it. Offsetting by half a cap height in
   whichever direction the letters lean is what actually centres them. */
const oneLine = (r, size, outward) => (outward ? r - CAP(size) / 2 : r + CAP(size) / 2)

const LEAD = 25
const twoLines = (r, size) => {
  const first = r - (LEAD - CAP(size)) / 2
  return [first, first + LEAD]
}
const PAIR = twoLines(LABEL, 21)

/* The wordmark is 1903 x 826 with its artwork in a 1723 x 608 box at (95,130).
   Sizing the element to the file's own aspect and backing those offsets out of
   it lands the artwork 150 wide and centred, rather than letting SVG letterbox
   a square box and drop the logo off the plate. */
const LOGO = { w: 165.7, h: 71.9, x: 216.7, y: 262.2 }

const SPAN = 64 // degrees of arc per capability

/* Light tints, because these are hairlines on a dark band - the site's own
   hues at full strength would disappear into it. */
const CAPABILITIES = [
  { id: 'expertise', centre: 0, tint: '#6EC1E4', lines: ['Data & AI Expertise'] },
  { id: 'execution', centre: 120, tint: '#A78BFA', lines: ['AI Enabled', 'Execution'] },
  { id: 'domain', centre: -120, tint: '#35C79A', lines: ['Domain & Process', 'Experience'] },
]

export default function HeroDiagram({ className = '' }) {
  const [top, right, left] = CAPABILITIES
  const inset = SPAN / 2 - 2

  return (
    <svg
      viewBox="0 0 600 600"
      className={`hd ${className}`}
      role="img"
      aria-label="The FRIEND framework: Data and AI expertise, AI enabled execution, and domain and process experience, around Human plus Frugal AI"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .hd text{font-family:var(--font-sans,var(--font-urbanist,Inter,Arial,sans-serif));font-weight:600;fill:rgba(255,255,255,.82)}
        .hd .rule{fill:none;stroke:rgba(255,255,255,.13)}
        .hd .dashed{fill:none;stroke:rgba(255,255,255,.1);stroke-dasharray:2 11;stroke-linecap:round;transform-box:view-box;transform-origin:300px 300px;animation:hdTurn 90s linear infinite}
        .hd .arc{fill:none;stroke-width:2.5;stroke-linecap:round;stroke-dasharray:300;stroke-dashoffset:300;animation:hdDraw 1.1s cubic-bezier(.16,1,.3,1) forwards}
        .hd .arc:nth-of-type(2){animation-delay:.12s}
        .hd .arc:nth-of-type(3){animation-delay:.24s}
        .hd .pip{opacity:0;animation:hdFade .6s ease-out .7s forwards}
        .hd .plate{opacity:0;transform-box:view-box;transform-origin:300px 300px;animation:hdPlate .9s cubic-bezier(.16,1,.3,1) .3s forwards}
        .hd .label{opacity:0;animation:hdFade .8s ease-out .55s forwards}
        .hd .pair{fill:rgba(255,255,255,.62)}
        .hd .plus{fill:#35c79a}
        @keyframes hdTurn{to{transform:rotate(360deg)}}
        @keyframes hdDraw{to{stroke-dashoffset:0}}
        @keyframes hdFade{to{opacity:1}}
        @keyframes hdPlate{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        @media (prefers-reduced-motion:reduce){.hd *{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important}}
      `}</style>

      <defs>
        <radialGradient id="hdHalo">
          <stop offset="55%" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        <path id="hdTop" d={arc(oneLine(LABEL, 22, true), -inset, inset)} />
        <path id="hdR1" d={arc(PAIR[0], right.centre + inset, right.centre - inset, 0)} />
        <path id="hdR2" d={arc(PAIR[1], right.centre + inset, right.centre - inset, 0)} />
        <path id="hdL1" d={arc(PAIR[0], left.centre + inset, left.centre - inset, 0)} />
        <path id="hdL2" d={arc(PAIR[1], left.centre + inset, left.centre - inset, 0)} />
        <path id="hdPair" d={arc(oneLine(INNER, 18, false), 216, 144, 0)} />
      </defs>

      <circle className="dashed" cx={C} cy={C} r="282" />
      <circle className="rule" cx={C} cy={C} r={TRACK} />
      <circle className="rule" cx={C} cy={C} r={INNER} strokeOpacity="0.09" />

      {CAPABILITIES.map((c) => (
        <path
          key={c.id}
          className="arc"
          d={arc(TRACK, c.centre - SPAN / 2, c.centre + SPAN / 2)}
          stroke={c.tint}
          strokeOpacity="0.85"
        />
      ))}

      <g className="pip">
        {CAPABILITIES.map((c) => {
          const [x, y] = at(TRACK, c.centre - SPAN / 2)
          return <circle key={c.id} cx={x} cy={y} r="4" fill={c.tint} />
        })}
      </g>

      <g className="label">
        <text fontSize="22">
          <textPath href="#hdTop" startOffset="50%" textAnchor="middle">
            {top.lines[0]}
          </textPath>
        </text>
        <text fontSize="21">
          <textPath href="#hdR1" startOffset="50%" textAnchor="middle">
            {right.lines[0]}
          </textPath>
        </text>
        <text fontSize="21">
          <textPath href="#hdR2" startOffset="50%" textAnchor="middle">
            {right.lines[1]}
          </textPath>
        </text>
        <text fontSize="21">
          <textPath href="#hdL1" startOffset="50%" textAnchor="middle">
            {left.lines[0]}
          </textPath>
        </text>
        <text fontSize="21">
          <textPath href="#hdL2" startOffset="50%" textAnchor="middle">
            {left.lines[1]}
          </textPath>
        </text>
        <text className="pair" fontSize="18">
          <textPath href="#hdPair" startOffset="50%" textAnchor="middle">
            Human <tspan className="plus">+</tspan> Frugal AI
          </textPath>
        </text>
      </g>

      <g className="plate">
        {/* a wash rather than a shadow: the plate should settle onto the band,
            not sit on top of it */}
        <circle cx={C} cy={C} r={PLATE + 26} fill="url(#hdHalo)" />
        <circle cx={C} cy={C} r={PLATE} fill="#fff" fillOpacity="0.97" />
        <image href="/images/FRIEND-logo.png" x={LOGO.x} y={LOGO.y} width={LOGO.w} height={LOGO.h} />
      </g>
    </svg>
  )
}
