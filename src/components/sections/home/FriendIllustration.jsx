export default function FriendIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 1536 1024" className={`fr ${className}`} role="img" aria-label="FRIEND for Data & AI - Human plus Frugal AI" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .fr text{font-family:var(--font-inter,Inter,Arial,sans-serif)}
        .fr .word text{font-family:var(--font-sans,var(--font-urbanist,Inter,Arial,sans-serif))}
        .fr .blobs path{transform-box:fill-box;transform-origin:center;opacity:0;animation:frBlobIn 1.2s ease-out forwards,frDrift 9s ease-in-out 1.2s infinite}
        .fr .blobs path:nth-child(2){animation-delay:.15s,1.35s;animation-direction:normal,reverse}
        .fr .ground{opacity:0;animation:frGround .8s ease-out .8s forwards}
        .fr .human{animation:frInL 1.1s cubic-bezier(.16,.84,.24,1) .1s both,frBreath 4.8s ease-in-out 1.4s infinite}
        .fr .robot{animation:frInR 1.1s cubic-bezier(.16,.84,.24,1) .1s both,frBreath 4.8s ease-in-out 2.6s infinite}
        .fr .armH{transform-box:view-box;transform-origin:590px 398px;animation:frBumpH 7s ease-in-out 3s infinite}
        .fr .armR{transform-box:view-box;transform-origin:958px 416px;animation:frBumpR 7s ease-in-out 3s infinite}
        .fr .spark{transform-box:fill-box;transform-origin:50% 100%;opacity:0;animation:frSparkIn .5s cubic-bezier(.2,.9,.3,1.3) 1.05s forwards,frSparkBump 7s ease-in-out 3s infinite}
        .fr .chipT{transform-box:fill-box;transform-origin:center;animation:frDrop .8s cubic-bezier(.2,.8,.2,1) 1.15s both,frBob 4.4s ease-in-out 3.4s infinite}
        .fr .chipL{transform-box:fill-box;transform-origin:center;animation:frInL .8s cubic-bezier(.2,.8,.2,1) 1.25s both,frBob 4.4s ease-in-out 2.2s infinite}
        .fr .chipR{transform-box:fill-box;transform-origin:center;animation:frInR .8s cubic-bezier(.2,.8,.2,1) 1.25s both,frBob 4.4s ease-in-out 2.8s infinite}
        .fr .lines path{stroke-dasharray:260;stroke-dashoffset:260;animation:frDraw 1s ease-out 1.6s forwards}
        .fr .lines .lineT{stroke-dasharray:80;stroke-dashoffset:80;animation-duration:.5s}
        .fr .dots circle{transform-box:fill-box;transform-origin:center;opacity:0;animation:frPop .5s cubic-bezier(.2,.9,.3,1.4) 2.4s forwards}
        .fr .word text:first-child{clip-path:inset(0 100% 0 0);animation:frWipe .9s cubic-bezier(.3,.8,.2,1) 1.5s forwards}
        .fr .word text:not(:first-child),.fr .word path{opacity:0;animation:frRise .7s ease-out forwards}
        .fr .word text:nth-child(2){animation-delay:2.1s}.fr .word path{animation-delay:2.3s}.fr .word text:nth-child(4){animation-delay:2.45s}
        .fr .eye{transform-box:fill-box;transform-origin:center;animation:frBlink 4s ease-in-out 2s infinite}
        @keyframes frInL{from{opacity:0;transform:translateX(-110px)}to{opacity:1;transform:none}}
        @keyframes frInR{from{opacity:0;transform:translateX(110px)}to{opacity:1;transform:none}}
        @keyframes frDrop{from{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:none}}
        @keyframes frPop{from{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}
        @keyframes frGround{to{opacity:.12}}
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
        @media (prefers-reduced-motion:reduce){.fr *{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important;clip-path:none!important}.fr .ground{opacity:.12!important}}
      `}</style>
      <defs>
        <linearGradient id="gShirt" gradientUnits="userSpaceOnUse" x1="430" y1="360" x2="600" y2="560"><stop offset="0" stopColor="#FFFFFF"/><stop offset="1" stopColor="#E9EDF4"/></linearGradient>
        <linearGradient id="gArmor" gradientUnits="userSpaceOnUse" x1="950" y1="260" x2="1180" y2="880"><stop offset="0" stopColor="#FFFFFF"/><stop offset="1" stopColor="#E2E7F0"/></linearGradient>
        <linearGradient id="gPants" gradientUnits="userSpaceOnUse" x1="340" y1="560" x2="600" y2="860"><stop offset="0" stopColor="#2A3355"/><stop offset="1" stopColor="#1B2240"/></linearGradient>
        <filter id="soft" x="-20%" y="-200%" width="140%" height="500%"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>
      
      <g className="blobs" opacity=".34">
        <path d="M280 262 H300 C330 262 350 272 372 286 L446 338 C458 346 458 362 446 370 L446 552 C458 560 458 576 446 584 L372 636 C350 650 330 660 300 660 H280 C266 660 256 650 256 636 V286 C256 272 266 262 280 262 Z" fill="#BDF2DC"/>
        <path d="M1256 262 H1236 C1206 262 1186 272 1164 286 L1090 338 C1078 346 1078 362 1090 370 L1090 552 C1078 560 1078 576 1090 584 L1164 636 C1186 650 1206 660 1236 660 H1256 C1270 660 1280 650 1280 636 V286 C1280 272 1270 262 1256 262 Z" fill="#FFD8BC"/>
      </g>
      <ellipse className="ground" cx="768" cy="880" rx="600" ry="4" fill="#fff" opacity=".12"/>
      <ellipse cx="470" cy="878" rx="190" ry="9" fill="#000" opacity=".22" filter="url(#soft)"/>
      <ellipse cx="1070" cy="878" rx="180" ry="9" fill="#000" opacity=".22" filter="url(#soft)"/>
      
      <g className="lines" fill="none" strokeWidth="3" strokeLinecap="round">
        <path className="lineL" d="M254 420 C 320 420 330 530 404 530" stroke="#1F9E75"/>
        <path className="lineR" d="M1284 420 C 1220 420 1210 530 1156 530" stroke="#E86A2F"/>
        <path className="lineT" d="M768 272 V330" stroke="#6D4AE8"/>
      </g>
      <g className="dots" fill="#fff" strokeWidth="3">
        <circle cx="246" cy="420" r="8" stroke="#1F9E75"/>
        <circle cx="1292" cy="420" r="8" stroke="#E86A2F"/>
        <circle cx="768" cy="262" r="8" stroke="#6D4AE8"/>
      </g>
      
      <g className="chipL">
        <rect x="94" y="355" width="90" height="86" rx="22" fill="#1F9E75"/>
        <rect x="94" y="355" width="90" height="43" rx="22" fill="#fff" opacity=".08"/>
        <g fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="131" y="367" width="16" height="13" rx="3"/><rect x="109" y="406" width="16" height="13" rx="3"/><rect x="153" y="406" width="16" height="13" rx="3"/>
          <path d="M139 380 V393 M117 406 V393 H161 V406"/>
        </g>
        <text x="139" y="478" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">Domain &amp;</text>
        <text x="139" y="510" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">Process experience</text>
      </g>
      <g className="chipT">
        <rect x="728" y="92" width="80" height="80" rx="20" fill="#6D4AE8"/>
        <rect x="728" y="92" width="80" height="40" rx="20" fill="#fff" opacity=".08"/>
        <g fill="none" stroke="#fff" strokeWidth="4"><ellipse cx="768" cy="114" rx="19" ry="8"/><path d="M749 114 v17 c0 4 8 8 19 8 s19-4 19-8 V114 M749 131 v17 c0 4 8 8 19 8 s19-4 19-8 V131"/></g>
        <text x="768" y="202" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">Data &amp; AI</text>
        <text x="768" y="234" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">expertise</text>
      </g>
      <g className="chipR">
        <rect x="1352" y="355" width="90" height="86" rx="22" fill="#E86A2F"/>
        <rect x="1352" y="355" width="90" height="43" rx="22" fill="#fff" opacity=".08"/>
        <path d="M1405 366 L1384 402 H1401 L1392 430 L1416 392 H1399 Z" fill="#fff"/>
        <text x="1397" y="478" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">AI-enabled</text>
        <text x="1397" y="510" textAnchor="middle" fontSize="26" fontWeight="600" fill="#fff">execution</text>
      </g>
      
      <g className="human">
          <path d="M438 584 C458 578 496 580 514 590 C510 624 500 656 488 688 C476 718 462 748 448 778 C440 796 432 814 426 832 C408 842 374 842 358 834 C364 816 372 798 380 780 C394 748 408 716 420 684 C430 652 436 618 438 584 Z" fill="#1B2240"/>
        <path d="M488 606 C472 652 452 702 432 750" fill="none" stroke="#141A33" strokeWidth="14" strokeLinecap="round" opacity=".5"/>
        <path d="M446 696 C456 700 466 698 474 692 M438 716 C448 720 458 718 466 712" fill="none" stroke="#30395F" strokeWidth="2.5" strokeLinecap="round" opacity=".8"/>
        <path d="M362 826 C382 834 404 836 424 830" fill="none" stroke="#2B3457" strokeWidth="6" strokeLinecap="round"/>
          <g transform="translate(14 8)">
          <path d="M318 838 C326 826 344 820 364 820 C384 820 400 822 418 826 C434 830 446 840 446 852 C446 862 438 868 424 868 L330 868 C320 866 314 858 314 850 C314 846 316 842 318 838 Z" fill="#F6F7FA"/>
          <path d="M316 856 C350 852 400 852 446 854 C446 862 438 868 424 868 L330 868 C322 866 316 862 316 856 Z" fill="#D3D9E4"/>
          <path d="M400 824 C412 830 420 840 424 852" fill="none" stroke="#E3E7EF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M352 834 L372 838 M350 842 L374 846 M352 850 L372 854" stroke="#C9D0DD" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M334 836 C336 842 336 850 334 856" fill="none" stroke="#D3D9E4" strokeWidth="3" strokeLinecap="round"/>
        </g>
          <path d="M500 574 C514 566 566 566 582 576 C588 640 588 720 586 800 C586 822 590 842 592 854 C578 866 512 866 500 856 C498 832 496 808 496 782 C494 720 494 640 500 574 Z" fill="url(#gPants)"/>
        <path d="M566 586 C572 680 572 760 572 846" fill="none" stroke="#151B33" strokeWidth="16" strokeLinecap="round" opacity=".55"/>
        <path d="M518 588 C514 680 514 760 516 846" fill="none" stroke="#33407A" strokeWidth="5" strokeLinecap="round" opacity=".7"/>
        <path d="M556 590 C564 608 570 628 572 650" fill="none" stroke="#3B4680" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M500 712 C512 716 526 714 538 708 M502 730 C514 734 528 732 540 726" fill="none" stroke="#30395F" strokeWidth="2.5" strokeLinecap="round" opacity=".8"/>
        <path d="M500 838 C528 846 566 846 592 838" fill="none" stroke="#2B3457" strokeWidth="6" strokeLinecap="round"/>
          <path d="M488 842 C494 832 512 826 534 826 C560 826 586 828 606 832 C624 836 636 846 636 858 C636 868 628 874 614 874 L500 874 C490 872 484 864 484 856 C484 850 486 846 488 842 Z" fill="#F6F7FA"/>
        <path d="M484 860 C520 856 580 856 636 858 C636 868 628 874 614 874 L500 874 C490 872 484 866 484 860 Z" fill="#D3D9E4"/>
        <path d="M590 834 C602 840 612 850 616 860" fill="none" stroke="#E3E7EF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M536 838 L556 840 M534 846 L558 848 M536 854 L556 856" stroke="#C9D0DD" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M526 834 C540 830 554 830 568 834" fill="none" stroke="#DDE2EB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M498 840 C500 848 500 856 498 862" fill="none" stroke="#D3D9E4" strokeWidth="3" strokeLinecap="round"/>
          <path d="M430 556 C460 548 560 548 592 556 C596 570 594 584 588 596 C560 604 462 604 436 596 C428 584 426 570 430 556 Z" fill="#232C4C"/>
        <path d="M432 566 C470 560 550 560 590 566" fill="none" stroke="#151B33" strokeWidth="10" strokeLinecap="round"/>
        <rect x="504" y="556" width="22" height="18" rx="3" fill="#B8BFCF"/><rect x="509" y="560" width="12" height="10" rx="2" fill="#232C4C"/>
        <path d="M446 580 C452 588 458 594 464 598 M576 582 C570 590 564 596 558 600" fill="none" stroke="#151B33" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M450 400 C456 380 470 366 492 362 L560 360 C586 362 604 376 610 398 C616 440 612 486 606 526 C604 542 600 554 594 562 C588 570 574 574 556 574 C526 576 484 576 458 570 C446 566 440 554 438 540 C434 486 438 440 450 400 Z" fill="url(#gShirt)"/>
        <path d="M566 562 C588 510 600 456 596 402 C608 456 610 510 602 562 Z" fill="#D9DFE9" opacity=".7"/>
        <path d="M444 556 C444 500 450 458 462 426 C462 480 472 526 486 566 Z" fill="#DDE2EC" opacity=".6"/>
        <path d="M458 570 C486 578 522 580 556 574" fill="none" stroke="#CFD6E2" strokeWidth="3" strokeLinecap="round"/>
        <path d="M522 394 C520 440 520 500 522 566" fill="none" stroke="#DCE1EA" strokeWidth="2.5"/>
        <g fill="#CFD6E2"><circle cx="522" cy="414" r="3"/><circle cx="522" cy="450" r="3"/><circle cx="522" cy="486" r="3"/><circle cx="522" cy="522" r="3"/></g>
        <path d="M566 430 C576 436 584 444 588 454 M560 470 C570 476 580 482 586 492" fill="none" stroke="#D3D9E4" strokeWidth="2" strokeLinecap="round"/>
          <path d="M500 366 C508 380 516 390 522 396 C528 390 536 380 544 366 C536 362 528 360 522 360 C516 360 508 362 500 366 Z" fill="#F4F6FA" stroke="#C9D0DD" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M462 386 C478 380 490 380 504 384 M544 380 C562 380 578 382 592 388" fill="none" stroke="#DCE1EA" strokeWidth="2" strokeLinecap="round"/>
          <path d="M470 368 C452 370 438 384 432 404 C426 430 426 458 432 484 C436 502 442 520 452 536 C458 546 468 550 478 546 C486 542 490 534 488 526 C480 512 474 496 470 478 C464 456 466 432 474 412 C478 400 484 390 490 382 C486 374 480 368 470 368 Z" fill="url(#gShirt)"/>
        <path d="M446 416 C440 448 444 482 458 512" fill="none" stroke="#D9DFE9" strokeWidth="10" strokeLinecap="round" opacity=".6"/>
        <path d="M446 446 C454 448 462 446 468 442 M444 466 C452 470 462 468 468 464" fill="none" stroke="#D3D9E4" strokeWidth="2" strokeLinecap="round"/>
        <path d="M456 538 C464 532 478 532 486 538" fill="none" stroke="#CFD5E1" strokeWidth="5" strokeLinecap="round"/>
          <g transform="rotate(-10 452 508)">
          <rect x="413" y="454" width="78" height="108" rx="8" fill="#1E2A47"/>
          <rect x="420" y="461" width="64" height="94" rx="5" fill="#2A3860"/>
          <rect x="413" y="454" width="78" height="108" rx="8" fill="none" stroke="#3B4B75" strokeWidth="2"/>
          <path d="M426 466 L476 462 L452 508 L426 510 Z" fill="#fff" opacity=".06"/>
          <circle cx="452" cy="478" r="4" fill="#3B4B75"/>
        </g>
          <path d="M448 548 C458 540 476 542 482 554 C486 564 480 574 468 576 C456 578 446 570 446 560 C446 555 447 551 448 548 Z" fill="#F3C5A5"/>
        <path d="M456 556 L474 554 M456 564 L476 562 M458 572 L474 570" stroke="#E2A886" strokeWidth="2" strokeLinecap="round"/>
          <g className="armH">
          <path d="M582 368 C598 362 616 364 630 372 C656 372 690 378 720 384 C736 386 746 388 752 390 C754 398 754 408 752 416 C744 418 730 418 716 416 C688 412 656 408 630 406 C612 412 596 416 584 416 C576 400 576 384 582 368 Z" fill="url(#gShirt)"/>
          <path d="M604 412 C640 408 700 408 746 412" fill="none" stroke="#D9DFE9" strokeWidth="8" strokeLinecap="round" opacity=".7"/>
          <path d="M612 376 C616 386 616 398 612 410 M642 374 C648 386 648 398 642 410 M702 380 C706 390 706 400 702 408" fill="none" stroke="#D3D9E4" strokeWidth="2" strokeLinecap="round"/>
          <path d="M590 372 C598 380 604 392 606 406" fill="none" stroke="#D3D9E4" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M736 382 C740 392 740 406 736 416" fill="none" stroke="#CFD5E1" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="744" cy="394" r="2.5" fill="#B8BFCF"/>
          <path d="M746 384 C756 374 776 372 788 380 C798 388 800 402 794 412 C788 422 774 426 762 422 C750 418 742 404 746 384 Z" fill="#F3C5A5"/>
          <path d="M758 386 C766 382 776 382 784 386 M758 396 C766 393 776 393 786 396 M760 406 C768 404 778 404 786 406" fill="none" stroke="#E2A886" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M750 404 C756 398 764 400 768 408" fill="none" stroke="#E2A886" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
          <path d="M508 350 C516 356 530 356 538 348 L542 388 C530 394 514 394 504 388 Z" fill="#E6B08E"/>
          <path d="M496 292 C496 262 514 244 538 246 C562 248 578 268 578 296 C580 312 578 326 574 336 C570 348 562 356 550 360 C540 362 530 360 522 356 C508 348 498 336 496 318 C495 310 495 300 496 292 Z" fill="#F3C5A5"/>
        <path d="M548 360 C560 354 570 342 574 328 C578 342 570 356 556 360 Z" fill="#E6AE8C" opacity=".5"/>
        <path d="M499 322 C494 318 493 306 498 302 C504 300 508 306 508 314 C508 320 504 324 499 322 Z" fill="#E9B893"/>
        <path d="M549 292 C555 288 562 288 568 292" fill="none" stroke="#1A2238" strokeWidth="3" strokeLinecap="round"/>
        <path d="M553 303 C557 301 561 301 565 303" fill="none" stroke="#2B3350" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="559" cy="306" r="2.4" fill="#2B3350"/>
        <path d="M574 300 C580 306 579 314 572 318" fill="none" stroke="#E2A886" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M558 338 C563 341 569 340 573 336" fill="none" stroke="#D99A78" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="562" cy="322" rx="8" ry="4" fill="#EBA88A" opacity=".45"/>
          <path d="M484 338 C468 314 464 282 472 254 C480 232 500 220 526 218 C552 216 574 226 586 246 C592 258 592 274 586 288 C580 274 570 266 560 268 C550 262 540 270 534 276 C520 282 512 298 506 312 C500 322 494 332 484 338 Z" fill="#1A2238"/>
        <path d="M484 338 C476 322 476 300 484 286 C486 306 492 322 502 330 Z" fill="#1A2238"/>
        <path d="M498 254 C506 244 518 238 530 238 M486 296 C488 278 494 262 506 252 M556 262 C566 266 576 274 582 286" fill="none" stroke="#2C3652" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M516 232 C536 224 558 228 572 242" fill="none" stroke="#33405F" strokeWidth="3" strokeLinecap="round"/>
      </g>
      
      <g className="robot">
          <path d="M1046 500 L1136 492 L1154 606 L1064 616 Z" fill="#17A37A"/>
        <path d="M1046 500 L1136 492 L1140 516 L1050 526 Z" fill="#118A66"/>
        <path d="M1058 540 L1128 532 M1062 560 L1132 552 M1066 580 L1136 572" stroke="#0E7A5A" strokeWidth="2.5" strokeLinecap="round" opacity=".9"/>
          <path d="M1070 402 C1084 400 1096 408 1100 420 C1108 446 1114 464 1118 480 C1112 488 1100 490 1092 486 C1086 466 1080 448 1072 430 C1066 420 1064 410 1070 402 Z" fill="url(#gArmor)"/>
        <circle cx="1106" cy="486" r="13" fill="#1A2238"/>
        <path d="M1094 480 L1124 486 C1128 510 1130 534 1128 556 C1132 566 1134 578 1130 590 C1118 596 1100 596 1090 588 C1088 576 1090 566 1094 556 C1092 534 1092 508 1094 480 Z" fill="url(#gArmor)"/>
        <path d="M1118 492 C1120 520 1118 550 1114 578" fill="none" stroke="#D5DBE6" strokeWidth="7" strokeLinecap="round" opacity=".8"/>
        <path d="M1094 556 L1128 560" stroke="#1A2238" strokeWidth="4" strokeLinecap="round"/>
        <path d="M1094 596 C1104 588 1122 590 1126 602 C1128 614 1118 622 1106 620 C1096 618 1090 604 1094 596 Z" fill="#1A2238"/>
          <path d="M996 552 C1010 546 1036 546 1050 554 C1050 574 1046 596 1040 620 C1036 636 1030 652 1024 668 C1012 674 994 674 984 666 C986 648 988 630 990 612 C992 592 994 572 996 552 Z" fill="url(#gArmor)"/>
        <path d="M1036 560 C1034 596 1028 632 1020 662" fill="none" stroke="#D5DBE6" strokeWidth="9" strokeLinecap="round" opacity=".8"/>
        <path d="M1000 566 C1012 560 1034 560 1046 566" fill="none" stroke="#C5CCDA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M1012 580 C1010 606 1006 632 1000 656" fill="none" stroke="#C5CCDA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1036 552 C1050 546 1076 546 1090 554 C1100 574 1108 596 1116 620 C1122 636 1126 652 1128 668 C1118 676 1100 678 1088 672 C1080 652 1072 632 1064 612 C1056 592 1046 572 1036 552 Z" fill="url(#gArmor)"/>
        <path d="M1078 560 C1092 596 1104 632 1114 666" fill="none" stroke="#D5DBE6" strokeWidth="9" strokeLinecap="round" opacity=".8"/>
        <path d="M1042 566 C1054 560 1076 560 1088 566" fill="none" stroke="#C5CCDA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M1054 580 C1064 606 1074 632 1084 656" fill="none" stroke="#C5CCDA" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="1006" cy="676" r="18" fill="#1A2238"/><circle cx="1106" cy="682" r="18" fill="#1A2238"/>
        <path d="M992 666 C998 656 1014 656 1020 666 C1022 672 1020 678 1016 682 C1008 686 998 686 994 680 C990 676 990 670 992 666 Z" fill="#F6F7FA"/>
        <path d="M1092 672 C1098 662 1114 662 1120 672 C1122 678 1120 684 1116 688 C1108 692 1098 692 1094 686 C1090 682 1090 676 1092 672 Z" fill="#F6F7FA"/>
        <path d="M988 684 C998 680 1016 680 1024 686 C1024 710 1020 740 1012 770 C1008 788 1002 806 996 824 C1004 830 1006 840 1000 846 C986 852 964 850 954 842 C950 834 954 826 962 822 C968 800 974 776 978 752 C982 728 986 706 988 684 Z" fill="url(#gArmor)"/>
        <path d="M1014 692 C1010 736 1000 782 986 822" fill="none" stroke="#D5DBE6" strokeWidth="8" strokeLinecap="round" opacity=".8"/>
        <path d="M990 712 L1016 716 M962 824 L996 828" stroke="#C5CCDA" strokeWidth="3" strokeLinecap="round"/>
        <path d="M1090 690 C1100 684 1118 684 1128 688 C1136 712 1144 742 1150 772 C1154 790 1158 808 1162 826 C1170 828 1174 838 1168 846 C1154 852 1132 852 1122 846 C1118 838 1122 828 1128 824 C1120 800 1112 776 1106 752 C1100 728 1094 708 1090 690 Z" fill="url(#gArmor)"/>
        <path d="M1120 694 C1132 738 1144 784 1150 826" fill="none" stroke="#D5DBE6" strokeWidth="8" strokeLinecap="round" opacity=".8"/>
        <path d="M1096 716 L1124 712 M1126 828 L1162 824" stroke="#C5CCDA" strokeWidth="3" strokeLinecap="round"/>
          <path d="M882 862 C884 850 896 842 914 840 C934 838 954 838 972 838 C984 834 998 838 1004 848 C1008 858 1006 870 998 876 C986 882 968 882 950 880 L896 880 C884 878 878 870 882 862 Z" fill="#1A2238"/>
        <path d="M1048 864 C1050 852 1062 844 1080 842 C1100 840 1120 840 1138 840 C1150 836 1164 840 1170 850 C1174 860 1172 872 1164 878 C1152 884 1134 884 1116 882 L1062 882 C1050 880 1044 872 1048 864 Z" fill="#1A2238"/>
        <path d="M890 872 H998 M1056 874 H1164" stroke="#2C3652" strokeWidth="4" strokeLinecap="round"/>
        <path d="M904 846 C912 852 920 860 924 870 M1070 848 C1078 854 1086 862 1090 872" fill="none" stroke="#3A4460" strokeWidth="3" strokeLinecap="round"/>
        <path d="M900 878 V882 M916 878 V882 M932 878 V882 M948 878 V882 M964 878 V882 M1066 880 V884 M1082 880 V884 M1098 880 V884 M1114 880 V884 M1130 880 V884" stroke="#3A4460" strokeWidth="3" strokeLinecap="round"/>
          <path d="M990 522 C1000 512 1076 512 1086 522 C1092 534 1090 548 1082 556 C1060 562 1016 562 994 556 C986 548 984 534 990 522 Z" fill="#1A2238"/>
        <circle cx="1000" cy="548" r="12" fill="#2C3652"/><circle cx="1076" cy="548" r="12" fill="#2C3652"/>
        <path d="M1016 524 V550 M1036 524 V550 M1056 524 V550" stroke="#2C3652" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="1036" cy="537" r="5" fill="#2FD3A0" opacity=".9"/>
          <path d="M990 484 C1008 496 1066 496 1084 484 C1084 496 1082 508 1076 518 C1052 526 1024 526 1000 518 C992 508 990 496 990 484 Z" fill="#F0F3F8"/>
        <path d="M1000 500 C1020 506 1054 506 1074 500" fill="none" stroke="#C5CCDA" strokeWidth="2" strokeLinecap="round"/>
          <path d="M962 402 C980 386 1044 384 1090 400 C1098 420 1100 442 1096 462 C1092 476 1086 486 1080 492 C1054 500 1018 500 994 492 C986 484 978 472 974 458 C966 440 960 420 962 402 Z" fill="url(#gArmor)"/>
        <path d="M1090 400 C1098 420 1100 442 1096 462 C1092 476 1086 486 1080 492 C1070 496 1058 498 1046 498 C1064 480 1072 448 1066 412 Z" fill="#D5DBE6" opacity=".8"/>
        <path d="M990 404 C1010 396 1040 396 1064 404 C1070 432 1068 456 1060 470 C1040 478 1010 478 994 470 C986 456 984 432 990 404 Z" fill="none" stroke="#C5CCDA" strokeWidth="2"/>
        <g fill="#B8BFCF"><circle cx="996" cy="410" r="2.5"/><circle cx="1058" cy="410" r="2.5"/><circle cx="998" cy="466" r="2.5"/><circle cx="1056" cy="466" r="2.5"/></g>
        <path d="M1076 424 H1088 M1076 434 H1090 M1076 444 H1090" stroke="#C5CCDA" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="1024" cy="440" rx="22" ry="26" fill="#EEF1F6"/>
        <ellipse cx="1020" cy="436" rx="11" ry="13" fill="#fff"/>
        <circle cx="1024" cy="440" r="26" fill="none" stroke="#C5CCDA" strokeWidth="2"/>
        <circle cx="1024" cy="440" r="6" fill="#2FD3A0" opacity=".9"/>
          <path d="M944 404 C946 390 958 382 972 384 C984 386 992 396 990 410 C982 420 962 422 950 416 C946 412 944 408 944 404 Z" fill="url(#gArmor)"/>
        <path d="M1066 402 C1068 388 1082 380 1096 384 C1108 388 1114 400 1110 412 C1100 420 1080 420 1070 414 C1066 410 1066 406 1066 402 Z" fill="url(#gArmor)"/>
        <path d="M952 398 C960 392 972 392 980 398 M1076 398 C1084 390 1096 390 1104 398" fill="none" stroke="#C5CCDA" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="966" cy="416" r="13" fill="#1A2238"/><circle cx="1088" cy="414" r="13" fill="#1A2238"/>
          <g className="armR">
          <path d="M964 398 C948 400 920 402 894 404 C884 404 878 410 878 418 C878 426 884 432 892 432 C918 434 944 436 964 436 C968 424 968 410 964 398 Z" fill="url(#gArmor)"/>
          <path d="M950 428 L896 426" stroke="#D5DBE6" strokeWidth="7" strokeLinecap="round" opacity=".8"/>
          <path d="M958 404 L896 408" stroke="#C5CCDA" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="884" cy="419" r="13" fill="#1A2238"/>
          <path d="M884 402 C866 398 848 394 830 390 C824 384 818 382 812 386 C806 392 806 410 812 418 C818 422 824 420 830 416 C848 420 866 426 884 434 C888 424 888 412 884 402 Z" fill="url(#gArmor)"/>
          <path d="M876 428 L826 416" stroke="#D5DBE6" strokeWidth="6" strokeLinecap="round" opacity=".8"/>
          <path d="M846 400 L842 424" stroke="#C5CCDA" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M818 392 L816 418" stroke="#1A2238" strokeWidth="5" strokeLinecap="round"/>
          <path d="M792 378 C812 372 830 380 834 396 C838 412 826 428 808 428 C794 428 782 418 780 404 C778 392 782 382 792 378 Z" fill="#1A2238"/>
          <path d="M790 392 C800 388 812 388 822 392 M790 402 C800 398 812 398 824 402 M792 412 C802 408 814 408 822 412" fill="none" stroke="#3A4460" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
          <rect x="1002" y="368" width="28" height="28" rx="8" fill="#1A2238"/>
        <path d="M1006 376 H1026 M1006 384 H1026" stroke="#2C3652" strokeWidth="2" strokeLinecap="round"/>
          <path d="M956 322 C954 288 972 264 1000 258 C1020 250 1050 252 1066 266 C1080 278 1084 300 1080 322 C1078 344 1068 360 1052 370 C1040 378 1026 380 1014 378 C994 376 976 366 964 350 C958 342 956 332 956 322 Z" fill="url(#gArmor)"/>
        <path d="M1050 268 C1072 284 1080 310 1074 336 C1068 358 1048 374 1020 376 C1046 364 1060 340 1060 314 C1060 296 1056 280 1050 268 Z" fill="#D5DBE6" opacity=".8"/>
        <path d="M1064 268 C1076 262 1088 266 1090 278 C1092 290 1084 298 1074 296" fill="url(#gArmor)"/>
        <path d="M960 322 C962 292 982 274 1008 276 C1030 278 1042 300 1038 326 C1034 350 1012 366 988 360 C968 354 958 340 960 322 Z" fill="#1A2238"/>
        <path d="M972 296 C978 286 990 280 1002 280" fill="none" stroke="#3B4664" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M976 296 C984 286 996 282 1008 284" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".18"/>
        <path className="eye" d="M974 322 c6-8 12-8 18 0 s12 8 18 0" fill="none" stroke="#2FD3A0" strokeWidth="4" strokeLinecap="round"/>
        <path d="M1040 292 C1050 306 1052 330 1044 350" fill="none" stroke="#C5CCDA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1058 348 L1068 346 M1056 356 L1066 354" stroke="#C5CCDA" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="1060" cy="320" r="21" fill="none" stroke="#C5CCDA" strokeWidth="2"/>
        <circle cx="1060" cy="320" r="17" fill="#17A37A"/><circle cx="1060" cy="320" r="10" fill="#0E7A5A"/><circle cx="1060" cy="320" r="4" fill="#2FD3A0"/>
        <circle cx="1014" cy="252" r="6" fill="#1A2238"/><rect x="1011" y="252" width="6" height="8" fill="#1A2238"/>
        <path d="M980 280 C992 270 1006 268 1018 272" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".85"/>
      </g>
      
      <g className="spark" fill="none" stroke="#2FD3A0" strokeWidth="4" strokeLinecap="round">
        <path d="M752 352 L744 338 M768 346 L768 330 M784 352 L792 338"/>
      </g>
      
      <g className="word">
        <text x="768" y="590" textAnchor="middle" fontSize="96" fontWeight="800" letterSpacing="-3" fill="#25C48C">FRIEND</text>
        <text x="768" y="640" textAnchor="middle" fontSize="36" fontWeight="600" fill="#fff">for Data &amp; AI</text>
        <path d="M768 662 V700" stroke="#fff" strokeWidth="2" opacity=".6"/>
        <text x="768" y="750" textAnchor="middle" fontSize="32" fontWeight="600" fill="#fff">Human <tspan fill="#25C48C" fontWeight="800">+</tspan> Frugal AI</text>
      </g>
    </svg>
  );
}
