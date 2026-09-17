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

const BAND = { outer: 288, inner: 172 } // the capabilities
const RING = { outer: 160, inner: 108 } // the pairing
const BAND_MID = (BAND.outer + BAND.inner) / 2
const RING_MID = (RING.outer + RING.inner) / 2

const GAP = 5 // degrees of daylight between segments
const SPAN = 120 - GAP

const CAP = (size) => size * 0.72 // cap height, near enough for centring

/* Every segment is divided the same way, so none of it is placed by eye and
   the three cannot drift apart: the label and its line stack radially, each on
   its own rail, both spanning the whole segment so both are centred on it.

   The two side segments lean inward, so for them the reading order runs from
   the inner edge outward - which is why each radius comes as a pair. */
const PAD = 3 // degrees of clearance inside each end of a segment

const R_LABEL = { out: 249, in: 211 }
const R_DESC = { out: 208, in: 252 }

const pick = (r, outward) => (outward ? r.out : r.in)
const span = (centre) => [centre - SPAN / 2 + PAD, centre + SPAN / 2 - PAD]

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
const LOGO = { w: 168, h: 72.9, x: 216, y: 261.2 }

/* Light from above: every segment runs its own hue lighter at the top and
   deeper at the foot, which is what gives a flat band its form. */
const CAPABILITIES = [
  {
    id: 'expertise',
    centre: 0,
    lit: '#3E8BE0',
    deep: '#235F9E',
    label: 'Data Engineering Agentic Suite',
    desc: 'Connect siloed enterprise data',
    outward: true, // the top one reads upright, so its letters stand outward
  },
  {
    id: 'execution',
    centre: 120,
    lit: '#6B2BD8',
    deep: '#40109E',
    label: 'Data Analytics Agentic Suite',
    desc: 'Dashboards & predictive models',
    outward: false,
  },
  {
    id: 'domain',
    centre: -120,
    lit: '#12B287',
    deep: '#00835C',
    label: 'Trust & Governance Agentic Suite',
    desc: 'One source of truth for decisions',
    outward: false,
  },
]

/* Drawn on a 24-unit box centred on the origin, so a glyph can be dropped
   anywhere on the band and turned to match its label. */
const GLYPHS = {
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
  return (
    <svg
      viewBox="0 0 600 600"
      className={`fw ${className}`}
      role="img"
      aria-label="The FRIEND framework: the Data Engineering, Data Analytics and Trust and Governance agentic suites, around Human plus Frugal AI"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .fw text{font-family:var(--font-sans,var(--font-urbanist,Inter,Arial,sans-serif));font-weight:600;fill:#fff}
        .fw .seg{transform-box:view-box;transform-origin:300px 300px;opacity:0;animation:fwIn .85s cubic-bezier(.16,1,.3,1) forwards}
        .fw .seg:nth-of-type(2){animation-delay:.09s}
        .fw .seg:nth-of-type(3){animation-delay:.18s}
        .fw .hub{transform-box:view-box;transform-origin:300px 300px;opacity:0;animation:fwHub .9s cubic-bezier(.16,1,.3,1) .28s forwards}
        .fw .label{opacity:0;animation:fwFade .8s ease-out .6s forwards}
        .fw .desc{font-weight:500;fill:rgba(255,255,255,.82);letter-spacing:.008em}
        .fw .pair{font-size:22px;fill:rgba(255,255,255,.88);letter-spacing:.2em;word-spacing:.16em}
        .fw .plus{fill:#35c79a}
        .fw .glyph{fill:rgba(255,255,255,.17);stroke:rgba(255,255,255,.78);stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
        .fw .glyph .line{fill:none}
        @keyframes fwIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
        @keyframes fwHub{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        @keyframes fwFade{to{opacity:1}}
        /* On a phone the wheel is capped at 340px, so the drawing renders at
           little over half size and this line would land under 11px. The label
           carries the segment there on its own. */
        @media (max-width:767px){.fw .desc{display:none}}
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
                ? arc(oneLine(pick(R_LABEL, true), 22, true), ...span(c.centre))
                : arc(oneLine(pick(R_LABEL, false), 22, false), ...span(c.centre).reverse(), 0)
            }
          />
        ))}
        {CAPABILITIES.map((c) => (
          <path
            key={`d-${c.id}`}
            id={`fwDesc-${c.id}`}
            d={
              c.outward
                ? arc(oneLine(pick(R_DESC, true), 21, true), ...span(c.centre))
                : arc(oneLine(pick(R_DESC, false), 21, false), ...span(c.centre).reverse(), 0)
            }
          />
        ))}
        <path id="fwPair" d={arc(oneLine(RING_MID, 22, false), 236, 124, 0)} />

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
          <g key={c.id}>
            <text fontSize="22">
              <textPath href={`#fwRail-${c.id}`} startOffset="50%" textAnchor="middle">
                {c.label}
              </textPath>
            </text>
            <text className="desc" fontSize="21">
              <textPath href={`#fwDesc-${c.id}`} startOffset="50%" textAnchor="middle">
                {c.desc}
              </textPath>
            </text>
          </g>
        ))}
        {/* Set as three runs rather than one centred string: centring the
            whole phrase puts its midpoint at six o'clock, and because "Human"
            is shorter than "Frugal AI" that leaves the + sitting left of the
            wheel's axis. Anchoring each run off the same 50% mark puts the +
            itself on the axis, under the middle of the wordmark. */}
        <text className="pair">
          <textPath href="#fwPair" startOffset="45.5%" textAnchor="end">
            Human
          </textPath>
        </text>
        <text className="pair plus">
          <textPath href="#fwPair" startOffset="50%" textAnchor="middle">
            +
          </textPath>
        </text>
        <text className="pair">
          <textPath href="#fwPair" startOffset="54.5%" textAnchor="start">
            Frugal AI
          </textPath>
        </text>
      </g>
    </svg>
  )
}
