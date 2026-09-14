import { FIGURES, FIGURE_WHITE } from './friendFigures'

/*
  Hero illustration: a person and a robot fist-bumping over the word FRIEND,
  with three capability chips wired to them.

  The two figures are the vector sketch from public/images/hero-image-svg.svg
  (see friendFigures.js for how its missing whites were rebuilt); the chips,
  connector lines, word block and blobs are drawn here so their copy stays
  editable and their colours work on the dark hero band. Everything shares the
  1536 x 1024 coordinate space of the source art; the viewBox crops the empty
  margins.

  Motion: the figures slide in from either side and breathe; the chips drop
  in and bob; the connectors draw themselves; the word wipes in; then every
  seven seconds the two arms nudge into a fist bump while the spark flashes.
  Each arm is its own layer pivoting at the shoulder, drawn beneath its body
  layer so the overlap never shows a seam. Reduced motion renders the final
  frame with nothing moving.
*/

function Layer({ layer }) {
  return (
    <>
      <path fill={FIGURE_WHITE} fillRule="evenodd" d={layer.silhouette} />
      {layer.parts.map((part, i) => (
        <path key={i} fill={part.fill} d={part.d} className={part.eye ? 'eye' : undefined} />
      ))}
    </>
  )
}

export default function FriendIllustration({ className = '' }) {
  return (
    <svg
      viewBox="12 70 1512 830"
      className={`fr ${className}`}
      role="img"
      aria-label="FRIEND for Data & AI - Human plus Frugal AI"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .fr text{font-family:var(--font-inter,Inter,Arial,sans-serif)}
        .fr .word text{font-family:var(--font-sans,var(--font-urbanist,Inter,Arial,sans-serif))}
        .fr .blobs path{transform-box:fill-box;transform-origin:center;opacity:0;animation:frBlobIn 1.2s ease-out forwards,frDrift 9s ease-in-out 1.2s infinite}
        .fr .blobs path:nth-child(2){animation-delay:.15s,1.35s;animation-direction:normal,reverse}
                .fr .human{animation:frInL 1.1s cubic-bezier(.16,.84,.24,1) .1s both,frBreath 4.8s ease-in-out 1.4s infinite}
        .fr .robot{animation:frInR 1.1s cubic-bezier(.16,.84,.24,1) .1s both,frBreath 4.8s ease-in-out 2.6s infinite}
        .fr .armH{transform-box:view-box;transform-origin:592px 315px;animation:frBumpH 7s ease-in-out 3s infinite}
        .fr .armR{transform-box:view-box;transform-origin:970px 338px;animation:frBumpR 7s ease-in-out 3s infinite}
        .fr .spark{transform-box:fill-box;transform-origin:50% 100%;opacity:0;animation:frSparkIn .5s cubic-bezier(.2,.9,.3,1.3) 1.05s forwards,frSparkBump 7s ease-in-out 3s infinite}
        .fr .chipT{transform-box:fill-box;transform-origin:center;animation:frDrop .8s cubic-bezier(.2,.8,.2,1) 1.15s both,frBob 4.4s ease-in-out 3.4s infinite}
        .fr .chipL{transform-box:fill-box;transform-origin:center;animation:frInL .8s cubic-bezier(.2,.8,.2,1) 1.25s both,frBob 4.4s ease-in-out 2.2s infinite}
        .fr .chipR{transform-box:fill-box;transform-origin:center;animation:frInR .8s cubic-bezier(.2,.8,.2,1) 1.25s both,frBob 4.4s ease-in-out 2.8s infinite}
        .fr .lines path{stroke-dasharray:260;stroke-dashoffset:260;animation:frDraw 1s ease-out 1.6s forwards}
        .fr .lines .lineT{stroke-dasharray:80;stroke-dashoffset:80;animation-duration:.5s}
        .fr .dots circle{transform-box:fill-box;transform-origin:center;opacity:0;animation:frPop .5s cubic-bezier(.2,.9,.3,1.4) 2.4s forwards}
        .fr .word rect:first-child,.fr .word image{clip-path:inset(0 100% 0 0);animation:frWipe .9s cubic-bezier(.3,.8,.2,1) 1.5s forwards}
        .fr .word text{opacity:0;animation:frRise .7s ease-out forwards}
        .fr .word text{animation-delay:2.2s}
        .fr .eye{transform-box:fill-box;transform-origin:center;animation:frBlink 4s ease-in-out 2s infinite}
        @keyframes frInL{from{opacity:0;transform:translateX(-110px)}to{opacity:1;transform:none}}
        @keyframes frInR{from{opacity:0;transform:translateX(110px)}to{opacity:1;transform:none}}
        @keyframes frDrop{from{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:none}}
        @keyframes frPop{from{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}
        @keyframes frGround{to{opacity:1}}
        @keyframes frRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes frWipe{to{clip-path:inset(0 -2% 0 0)}}
        @keyframes frDraw{to{stroke-dashoffset:0}}
        @keyframes frBlobIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        @keyframes frDrift{0%,100%{transform:translateX(0)}50%{transform:translateX(6px)}}
        @keyframes frBreath{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes frBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes frSparkIn{0%{opacity:0;transform:scale(.3)}70%{opacity:1;transform:scale(1.2)}100%{opacity:.95;transform:scale(1)}}
        @keyframes frSparkBump{0%,82%,100%{opacity:.95;transform:scale(1)}86%{opacity:.4;transform:scale(.85)}90%{opacity:1;transform:scale(1.25)}}
        @keyframes frBumpH{0%,82%,100%{transform:rotate(0)}86%{transform:rotate(3deg)}90%{transform:rotate(-1.5deg)}}
        @keyframes frBumpR{0%,82%,100%{transform:rotate(0)}86%{transform:rotate(-3deg)}90%{transform:rotate(1.5deg)}}
        @keyframes frBlink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(.15)}}
        @media (prefers-reduced-motion:reduce){.fr *{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important;clip-path:none!important}}
      `}</style>
      <defs>
        <filter id="soft" x="-20%" y="-200%" width="140%" height="500%"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>

      <g className="stage">
        <ellipse cx="768" cy="884" rx="540" ry="24" fill="#fff" fillOpacity=".08"/>
      </g>

      <ellipse cx="470" cy="878" rx="190" ry="9" fill="#000" opacity=".22" filter="url(#soft)"/>
      <ellipse cx="1070" cy="878" rx="180" ry="9" fill="#000" opacity=".22" filter="url(#soft)"/>

      <g className="lines" fill="none" strokeWidth="3" strokeLinecap="round">
        <path className="lineL" d="M324 420 C 370 420 350 530 404 530" stroke="#1F9E75"/>
        <path className="lineR" d="M1214 420 C 1170 420 1190 530 1156 530" stroke="#E86A2F"/>
        <path className="lineT" d="M768 312 V330" stroke="#6D4AE8"/>
      </g>
      <g className="dots" fill="#fff" strokeWidth="3">
        <circle cx="316" cy="420" r="8" stroke="#1F9E75"/>
        <circle cx="1222" cy="420" r="8" stroke="#E86A2F"/>
        <circle cx="768" cy="302" r="8" stroke="#6D4AE8"/>
      </g>

      <g className="chipL">
        <rect x="164" y="355" width="90" height="86" rx="22" fill="#1F9E75" stroke="#fff" strokeOpacity=".55" strokeWidth="2"/>
        <rect x="164" y="355" width="90" height="43" rx="22" fill="#fff" opacity=".08"/>
        <g fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="201" y="367" width="16" height="13" rx="3"/><rect x="179" y="406" width="16" height="13" rx="3"/><rect x="223" y="406" width="16" height="13" rx="3"/>
          <path d="M209 380 V393 M187 406 V393 H231 V406"/>
        </g>
        <text x="209" y="478" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">Domain &amp;</text>
        <text x="209" y="510" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">Process experience</text>
      </g>
      <g className="chipT">
        <rect x="728" y="132" width="80" height="80" rx="20" fill="#6D4AE8" stroke="#fff" strokeOpacity=".55" strokeWidth="2"/>
        <rect x="728" y="132" width="80" height="40" rx="20" fill="#fff" opacity=".08"/>
        <g fill="none" stroke="#fff" strokeWidth="4"><ellipse cx="768" cy="154" rx="19" ry="8"/><path d="M749 154 v17 c0 4 8 8 19 8 s19-4 19-8 V154 M749 171 v17 c0 4 8 8 19 8 s19-4 19-8 V171"/></g>
        <text x="768" y="242" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">Data &amp; AI</text>
        <text x="768" y="274" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">expertise</text>
      </g>
      <g className="chipR">
        <rect x="1282" y="355" width="90" height="86" rx="22" fill="#E86A2F" stroke="#fff" strokeOpacity=".55" strokeWidth="2"/>
        <rect x="1282" y="355" width="90" height="43" rx="22" fill="#fff" opacity=".08"/>
        <path d="M1335 366 L1314 402 H1331 L1322 430 L1346 392 H1329 Z" fill="#fff"/>
        <text x="1327" y="478" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">AI-enabled</text>
        <text x="1327" y="510" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">execution</text>
      </g>

      {/* Arm layers first so the body layers cover the shoulder overlap. */}
      <g className="human">
        <g className="armH"><Layer layer={FIGURES.humanArm} /></g>
        <Layer layer={FIGURES.humanBody} />
      </g>
      <g className="robot">
        <g className="armR"><Layer layer={FIGURES.robotArm} /></g>
        <Layer layer={FIGURES.robotBody} />
      </g>

      <g className="spark" fill="none" stroke="#2FD3A0" strokeWidth="4" strokeLinecap="round">
        <path d="M752 352 L744 338 M768 346 L768 330 M784 352 L792 338"/>
      </g>

      <g className="word">
        <rect x="566" y="508" width="404" height="178" rx="16" fill="#fff"/>
        {/* FRIEND-logo.png is 2000x2000 with its artwork in a 1727x633 box at (190,621);
            this placement puts that box 288px wide, centred at x=768, y 543-649. */}
        <image href="/images/FRIEND-logo.png" x="592.3" y="439.6" width="333.5" height="333.5" />
        <text x="768" y="734" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">Human <tspan fill="#2FD3A0" fontWeight="800">+</tspan> Frugal AI</text>
      </g>
    </svg>
  )
}
