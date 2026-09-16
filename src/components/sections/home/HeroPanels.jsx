/*
  Hero visual: the FRIEND wordmark on a plate, with the three capabilities
  floating around it as glass chips, each tethered back to the plate.

  Deliberately not a ring. The wheel and the schematic that preceded it were the
  same circular idea twice; this is a different shape of thing - a few
  translucent surfaces at slightly different depths. FriendWheel.jsx keeps the
  solid wheel if it is ever wanted back.

  What stops it reading as three chips adrift: a dot field behind, faded out at
  its edges, which gives the composition a ground; hairline tethers from each
  chip down to the plate, so the capabilities are visibly feeding it; and a
  second card behind the plate, which turns one surface into a stack.

  It sits beside the headline and is meant to be looked at second, so there are
  no saturated fills: the chips are white at seven percent over the hero's own
  gradient, hairlined, and each carries one small dot of colour. The only opaque
  shape is the plate, which the wordmark needs to stay legible.

  Drawn at 640 x 520 and scaled by the container.
*/

const PLATE = { x: 210, y: 208, w: 240, h: 104 }

/* Chips are placed, not laid out - a loose triangle around the plate reads as
   floating, where a row or a column would read as a list. `from` and `to` are
   the ends of that chip's tether, and `bend` pulls its control point. */
const CHIPS = [
  {
    id: 'expertise',
    x: 40,
    y: 52,
    w: 250,
    tint: '#6EC1E4',
    label: 'Data & AI Expertise',
    from: [200, 102],
    to: [252, 208],
    bend: [203, 162],
  },
  {
    id: 'execution',
    x: 386,
    y: 96,
    w: 244,
    tint: '#A78BFA',
    label: 'AI Enabled Execution',
    from: [470, 146],
    to: [424, 208],
    bend: [470, 182],
  },
  {
    id: 'domain',
    x: 96,
    y: 408,
    w: 310,
    tint: '#35C79A',
    label: 'Domain & Process Experience',
    from: [280, 408],
    to: [300, 312],
    bend: [282, 358],
  },
]

const CHIP_H = 50

/* The wordmark is 1903 x 826 with its artwork in a 1723 x 608 box at (95,130).
   Sizing the element to the file's own aspect and backing those offsets out of
   it lands the artwork 196 wide and centred on the plate, rather than letting
   SVG letterbox a square box and drop the logo off it. */
const LOGO = { w: 216.5, h: 94, x: 221.7, y: 224.9 }

const tether = ({ from, to, bend }) =>
  `M${from[0]} ${from[1]}Q${bend[0]} ${bend[1]} ${to[0]} ${to[1]}`

export default function HeroPanels({ className = '' }) {
  return (
    <svg
      viewBox="0 0 640 520"
      className={`hp ${className}`}
      role="img"
      aria-label="The FRIEND framework: Data and AI expertise, AI enabled execution, and domain and process experience, delivered as Human plus Frugal AI"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .hp text{font-family:var(--font-sans,var(--font-urbanist,Inter,Arial,sans-serif))}
        .hp .field{opacity:0;animation:hpFade 1.2s ease-out .1s forwards}
        .hp .tether{fill:none;stroke:rgba(255,255,255,.16);stroke-width:1.25;stroke-dasharray:130;stroke-dashoffset:130;animation:hpDraw 1s cubic-bezier(.16,1,.3,1) .5s forwards}
        .hp .joint{opacity:0;animation:hpFade .5s ease-out 1.25s forwards}
        .hp .chip{opacity:0;transform-box:fill-box;transform-origin:center;animation:hpRise .9s cubic-bezier(.16,1,.3,1) forwards,hpFloat 11s ease-in-out infinite}
        .hp .chip:nth-of-type(1){animation-delay:.34s,1.4s}
        .hp .chip:nth-of-type(2){animation-delay:.46s,3s}
        .hp .chip:nth-of-type(3){animation-delay:.58s,4.6s}
        .hp .stack{opacity:0;animation:hpFade .8s ease-out .2s forwards}
        .hp .plate{opacity:0;transform-box:fill-box;transform-origin:center;animation:hpPlate .9s cubic-bezier(.16,1,.3,1) .12s forwards}
        .hp .caption{opacity:0;animation:hpFade .8s ease-out .9s forwards}
        @keyframes hpRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes hpPlate{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:none}}
        @keyframes hpDraw{to{stroke-dashoffset:0}}
        @keyframes hpFade{to{opacity:1}}
        @keyframes hpFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        @media (prefers-reduced-motion:reduce){.hp *{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important}}
      `}</style>

      <defs>
        <radialGradient id="hpGlow">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        {/* the field is masked by its own falloff, so it has no edge to notice */}
        <radialGradient id="hpFalloff">
          <stop offset="30%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="hpFieldMask">
          <ellipse cx="320" cy="252" rx="330" ry="280" fill="url(#hpFalloff)" />
        </mask>
        <pattern id="hpDots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.6" fill="rgba(255,255,255,0.16)" />
        </pattern>

        <linearGradient id="hpSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.03" />
        </linearGradient>

        <filter id="hpCast" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#07021c" floodOpacity="0.42" />
        </filter>
      </defs>

      <ellipse cx="320" cy="252" rx="300" ry="240" fill="url(#hpGlow)" />
      <rect className="field" width="640" height="520" fill="url(#hpDots)" mask="url(#hpFieldMask)" />

      {CHIPS.map((chip) => (
        <path key={chip.id} className="tether" d={tether(chip)} />
      ))}

      {/* the card behind turns the plate into a stack rather than one surface */}
      <rect
        className="stack"
        x={PLATE.x - 11}
        y={PLATE.y - 11}
        width={PLATE.w}
        height={PLATE.h}
        rx="18"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.11)"
      />

      {CHIPS.map((chip) => (
        <g key={chip.id} className="chip">
          <rect
            x={chip.x}
            y={chip.y}
            width={chip.w}
            height={CHIP_H}
            rx={CHIP_H / 2}
            fill="url(#hpSheen)"
          />
          <rect
            x={chip.x}
            y={chip.y}
            width={chip.w}
            height={CHIP_H}
            rx={CHIP_H / 2}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
          />
          <circle cx={chip.x + 27} cy={chip.y + CHIP_H / 2} r="4.5" fill={chip.tint} />
          <circle
            cx={chip.x + 27}
            cy={chip.y + CHIP_H / 2}
            r="9"
            fill="none"
            stroke={chip.tint}
            strokeOpacity="0.32"
          />
          <text
            x={chip.x + 50}
            y={chip.y + CHIP_H / 2 + 5.5}
            fontSize="15.5"
            fontWeight="600"
            fill="rgba(255,255,255,0.88)"
          >
            {chip.label}
          </text>
        </g>
      ))}

      <g className="joint">
        {CHIPS.map((chip) => (
          <circle key={chip.id} cx={chip.to[0]} cy={chip.to[1]} r="3.5" fill={chip.tint} />
        ))}
      </g>

      <g className="plate">
        <rect
          x={PLATE.x}
          y={PLATE.y}
          width={PLATE.w}
          height={PLATE.h}
          rx="18"
          fill="#fff"
          fillOpacity="0.97"
          filter="url(#hpCast)"
        />
        <image href="/images/FRIEND-logo.png" x={LOGO.x} y={LOGO.y} width={LOGO.w} height={LOGO.h} />
      </g>

      <g className="caption">
        <line x1="222" y1="351" x2="272" y2="351" stroke="rgba(255,255,255,0.18)" />
        <line x1="388" y1="351" x2="438" y2="351" stroke="rgba(255,255,255,0.18)" />
        <text
          x="330"
          y="356"
          textAnchor="middle"
          fontSize="16"
          fontWeight="600"
          fill="rgba(255,255,255,0.64)"
        >
          Human <tspan fill="#35C79A">+</tspan> Frugal AI
        </text>
      </g>
    </svg>
  )
}
