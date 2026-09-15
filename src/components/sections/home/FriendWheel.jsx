/*
  Hero visual: the FRIEND framework ring, at the proportions of the brand deck.

  Outer band of three capabilities, a hairline of daylight, an inner band
  carrying the pairing, and the wordmark on a plate at the centre. Those four
  radii are the deck's own ratios scaled up: the band is a quarter of the
  radius, the gap a twentieth, the plate a little under half.

  What separates this from the stock version of the same diagram is the detail
  rather than the shape - a light-from-above gradient down each segment so the
  band has form, a hairline catching its outer edge, even narrow gaps with
  clean radial cuts instead of chevrons, and type set large enough to read at a
  glance and optically centred in its band rather than sat on its baseline.

  Everything is polar: angles are degrees from twelve o'clock, positive
  clockwise. Labels ride invisible rails - the top one clockwise so it reads
  upright, the side ones counter-clockwise so their letters lean inward, which
  mirrors them.

  Drawn at 600 x 600 and scaled by the container.
*/

const C = 300 // centre, both axes

const BAND = { outer: 282, inner: 210 } // the capabilities
const RING = { outer: 197, inner: 124 } // the pairing
const BAND_MID = (BAND.outer + BAND.inner) / 2
const RING_MID = (RING.outer + RING.inner) / 2

const GAP = 5 // degrees of daylight between segments
const SPAN = 120 - GAP

const CAP = (size) => size * 0.72 // cap height, near enough for centring

/* A point on the circle: 0 is twelve o'clock, positive is clockwise. */
function at(r, deg) {
  const a = (deg * Math.PI) / 180
  return [C + r * Math.sin(a), C - r * Math.cos(a)]
}

const to = ([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`

/* A band segment swept clockwise from `a` to `b`, cut square at both ends. */
function segment(a, b, outer, inner) {
  const big = b - a > 180 ? 1 : 0
  return [
    `M${to(at(outer, a))}`,
    `A${outer} ${outer} 0 ${big} 1 ${to(at(outer, b))}`,
    `L${to(at(inner, b))}`,
    `A${inner} ${inner} 0 ${big} 0 ${to(at(inner, a))}`,
    'Z',
  ].join('')
}

/* An arc, for edge highlights and for labels to ride. `sweep` 1 runs clockwise,
   which is also what decides whether a label stands outward or leans inward. */
function arc(r, a, b, sweep = 1) {
  const big = Math.abs(b - a) > 180 ? 1 : 0
  return `M${to(at(r, a))}A${r} ${r} 0 ${big} ${sweep} ${to(at(r, b))}`
}

/* Type sits on its baseline, so a rail laid on the middle of a band leaves the
   glyphs hanging to one side of it. Offsetting by half a cap height in
   whichever direction the letters lean is what optically centres them. */
const oneLine = (r, size, outward) => (outward ? r - CAP(size) / 2 : r + CAP(size) / 2)



/* The wordmark is 1903 x 826 with its artwork in a 1723 x 608 box at (95,130).
   Sizing the element to the file's own aspect and backing those offsets out of
   it lands the artwork 190 wide and centred, rather than letting SVG letterbox
   a square box and drop the logo off the plate. */
const LOGO = { w: 209.8, h: 91.1, x: 194.5, y: 252.1 }

/* Light from above: every segment runs its own hue lighter at the top and
   deeper at the foot, which is what gives a flat band its form. */
const CAPABILITIES = [
  {
    id: 'expertise',
    centre: 0,
    lit: '#3E8BE0',
    deep: '#235F9E',
    label: 'Data & AI Expertise',
    outward: true, // the top one reads upright, so its letters stand outward
    glyph: 'store',
    glyphAt: 47,
  },
  {
    id: 'execution',
    centre: 120,
    lit: '#6B2BD8',
    deep: '#40109E',
    label: 'AI Enabled Execution',
    outward: false,
    glyph: 'bolt',
    glyphAt: 167,
  },
  {
    id: 'domain',
    centre: -120,
    lit: '#12B287',
    deep: '#00835C',
    label: 'Domain & Process Experience',
    outward: false,
    glyph: 'flow',
    glyphAt: -73,
  },
]

/* Drawn on a 24-unit box centred on the origin, so a glyph can be dropped
   anywhere on the band and turned to match its label. */
const GLYPHS = {
  store: (
    <>
      <ellipse cx="0" cy="-7" rx="9" ry="3.4" />
      <path className="line" d="M-9 -7v13c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4V-7" />
      <path className="line" d="M-9 -0.5c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4" />
    </>
  ),
  bolt: <path d="M2.5-11-6.5 1.5H0l-2.5 9.5L6.5-1.5H0z" />,
  flow: (
    <>
      <circle cx="-8" cy="-6.5" r="3" />
      <circle cx="8" cy="-6.5" r="3" />
      <circle cx="0" cy="8" r="3" />
      <path className="line" d="M-5-6.5h10M-6.5-4 -1.5 5.5M6.5-4 1.5 5.5" />
    </>
  ),
  person: (
    <>
      <circle cx="0" cy="-6" r="4.6" />
      <path d="M-8.5 10.5c0-5 3.8-8.2 8.5-8.2s8.5 3.2 8.5 8.2z" />
    </>
  ),
  spark: (
    <>
      <path d="M0-11c1.2 6 3.8 8.6 9.8 9.8C3.8 0 1.2 2.6 0 8.6-1.2 2.6-3.8 0-9.8-1.2-3.8-2.4-1.2-5-0-11z" />
      <circle className="line" cx="8" cy="8" r="2.4" />
    </>
  ),
}

/* The pairing's own glyphs, sitting either side of the inner band. */
const PAIRING = [
  { id: 'human', glyph: 'person', at: -90 },
  { id: 'ai', glyph: 'spark', at: 90 },
]

export default function FriendWheel({ className = '' }) {
  const inset = SPAN / 2 - 9

  return (
    <svg
      viewBox="0 0 600 600"
      className={`fw ${className}`}
      role="img"
      aria-label="The FRIEND framework: Data and AI expertise, AI enabled execution, and domain and process experience, around Human plus Frugal AI"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .fw text{font-family:var(--font-sans,var(--font-urbanist,Inter,Arial,sans-serif));font-weight:600;fill:#fff}
        .fw .seg{transform-box:view-box;transform-origin:300px 300px;opacity:0;animation:fwIn .85s cubic-bezier(.16,1,.3,1) forwards}
        .fw .seg:nth-of-type(2){animation-delay:.09s}
        .fw .seg:nth-of-type(3){animation-delay:.18s}
        .fw .hub{transform-box:view-box;transform-origin:300px 300px;opacity:0;animation:fwHub .9s cubic-bezier(.16,1,.3,1) .28s forwards}
        .fw .label{opacity:0;animation:fwFade .8s ease-out .6s forwards}
        .fw .pair{font-size:22px;fill:rgba(255,255,255,.88);letter-spacing:.07em}
        .fw .plus{fill:#35c79a}
        .fw .glyph{fill:rgba(255,255,255,.17);stroke:rgba(255,255,255,.78);stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
        .fw .glyph .line{fill:none}
        @keyframes fwIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
        @keyframes fwHub{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        @keyframes fwFade{to{opacity:1}}
        @media (prefers-reduced-motion:reduce){.fw *{animation:none!important;opacity:1!important;transform:none!important}}
      `}</style>

      <defs>
        {CAPABILITIES.map((c) => (
          <linearGradient key={c.id} id={`fw-${c.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.lit} />
            <stop offset="100%" stopColor={c.deep} />
          </linearGradient>
        ))}

        <linearGradient id="fwRingFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E1566" />
          <stop offset="100%" stopColor="#190845" />
        </linearGradient>

        <filter id="fwLift" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#05011a" floodOpacity="0.38" />
        </filter>

        {/* one rail per segment: the top runs clockwise so it reads upright,
            the sides counter-clockwise so their letters lean inward */}
        {CAPABILITIES.map((c) => (
          <path
            key={c.id}
            id={`fwRail-${c.id}`}
            d={
              c.outward
                ? arc(oneLine(BAND_MID, 23, true), c.centre - inset, c.centre + inset)
                : arc(oneLine(BAND_MID, 23, false), c.centre + inset, c.centre - inset, 0)
            }
          />
        ))}
        <path id="fwPair" d={arc(oneLine(RING_MID, 22, false), 218, 142, 0)} />

        {/* the texture only has to stay inside its own segment */}
        <pattern id="fwWeave" width="13" height="13" patternUnits="userSpaceOnUse">
          <circle cx="1.3" cy="1.3" r="1.3" fill="rgba(255,255,255,0.1)" />
        </pattern>
        {CAPABILITIES.map((c) => (
          <clipPath key={c.id} id={`fwClip-${c.id}`}>
            <path d={segment(c.centre - SPAN / 2, c.centre + SPAN / 2, BAND.outer, BAND.inner)} />
          </clipPath>
        ))}
        <clipPath id="fwClip-ring">
          <path d={segment(5, 355, RING.outer, RING.inner)} />
        </clipPath>
      </defs>

      {CAPABILITIES.map((c) => (
        <g key={c.id} className="seg">
          <path
            d={segment(c.centre - SPAN / 2, c.centre + SPAN / 2, BAND.outer, BAND.inner)}
            fill={`url(#fw-${c.id})`}
          />
          <rect
            width="600"
            height="600"
            fill="url(#fwWeave)"
            clipPath={`url(#fwClip-${c.id})`}
          />
          {/* the hairline that catches the top edge of a lit surface */}
          <path
            d={arc(BAND.outer - 0.75, c.centre - SPAN / 2 + 1, c.centre + SPAN / 2 - 1)}
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.5"
          />
          <g
            className="glyph"
            transform={`translate(${at(BAND_MID, c.glyphAt).map((n) => n.toFixed(2)).join(' ')}) rotate(${c.outward ? c.glyphAt : c.glyphAt - 180}) scale(1.35)`}
          >
            {GLYPHS[c.glyph]}
          </g>
        </g>
      ))}

      <g className="hub">
        {/* a notch at twelve o'clock, so the inner band reads as wrapped rather
            than as a solid collar */}
        <path d={segment(5, 355, RING.outer, RING.inner)} fill="url(#fwRingFill)" />
        <rect width="600" height="600" fill="url(#fwWeave)" clipPath="url(#fwClip-ring)" />
        {PAIRING.map((p) => (
          <g
            key={p.id}
            className="glyph"
            transform={`translate(${at(RING_MID, p.at).map((n) => n.toFixed(2)).join(' ')}) scale(1.3)`}
          >
            {GLYPHS[p.glyph]}
          </g>
        ))}
        <circle cx={C} cy={C} r={RING.inner} fill="#fff" filter="url(#fwLift)" />
        <image href="/images/FRIEND-logo.png" x={LOGO.x} y={LOGO.y} width={LOGO.w} height={LOGO.h} />
      </g>

      <g className="label">
        {CAPABILITIES.map((c) => (
          <text key={c.id} fontSize="23">
            <textPath href={`#fwRail-${c.id}`} startOffset="50%" textAnchor="middle">
              {c.label}
            </textPath>
          </text>
        ))}
        <text className="pair">
          <textPath href="#fwPair" startOffset="50%" textAnchor="middle">
            Human <tspan className="plus">+</tspan> Frugal AI
          </textPath>
        </text>
      </g>
    </svg>
  )
}
