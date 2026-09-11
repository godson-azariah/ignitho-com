export default function FriendIllustration({ className = "" }) {
  return (
    <svg viewBox="40 70 1456 830" className={`fr ${className}`} role="img" aria-label="FRIEND for Data & AI - Human plus Frugal AI" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .fr text{font-family:var(--font-inter,Inter,Arial,sans-serif)}
        .fr .word text{font-family:var(--font-sans,var(--font-urbanist,Inter,Arial,sans-serif))}
        .fr .blobs path{transform-box:fill-box;transform-origin:center;opacity:0;animation:frBlobIn 1.2s ease-out forwards,frDrift 9s ease-in-out 1.2s infinite}
        .fr .blobs path:nth-child(2){animation-delay:.15s,1.35s;animation-direction:normal,reverse}
        .fr .ground{opacity:0;animation:frGround .8s ease-out .8s forwards}
        .fr .human{animation:frInL 1.1s cubic-bezier(.16,.84,.24,1) .1s both,frBreath 4.8s ease-in-out 1.4s infinite}
        .fr .robot{animation:frInR 1.1s cubic-bezier(.16,.84,.24,1) .1s both,frBreath 4.8s ease-in-out 2.6s infinite}
        .fr .armH{transform-box:view-box;transform-origin:550px 328px;animation:frBumpH 7s ease-in-out 3s infinite}
        .fr .armR{transform-box:view-box;transform-origin:918px 346px;animation:frBumpR 7s ease-in-out 3s infinite}
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
          <path d="M446 586 C462 578 494 580 510 590 C508 626 500 660 488 692 C476 722 462 752 448 782 C440 800 432 818 426 836 C410 846 380 846 366 838 C372 818 380 798 388 780 C402 748 416 716 428 684 C438 652 444 618 446 586 Z" fill="#161C34"/>
        <g transform="translate(14 8)">
          <path d="M318 838 C326 826 344 820 364 820 C384 820 400 822 418 826 C434 830 446 840 446 852 C446 862 438 868 424 868 L330 868 C320 866 314 858 314 850 C314 846 316 842 318 838 Z" fill="#E4E8F0"/>
          <path d="M316 856 C350 852 400 852 446 854 C446 862 438 868 424 868 L330 868 C322 866 316 862 316 856 Z" fill="#C9D0DD"/>
        </g>
          <path d="M502 574 C516 566 566 566 582 576 C588 640 588 720 586 800 C586 822 590 842 592 854 C578 866 512 866 500 856 C498 832 496 808 496 782 C494 720 494 640 502 574 Z" fill="#232C4C"/>
        <path d="M552 580 C566 640 570 720 568 800 C568 826 572 846 576 858 C584 856 590 856 592 854 C590 842 586 822 586 800 C588 720 588 640 582 576 Z" fill="#000" opacity=".14"/>
        <path d="M488 842 C494 832 512 826 534 826 C560 826 586 828 606 832 C624 836 636 846 636 858 C636 868 628 874 614 874 L500 874 C490 872 484 864 484 856 C484 850 486 846 488 842 Z" fill="#F6F7FA"/>
        <path d="M484 860 C520 856 580 856 636 858 C636 868 628 874 614 874 L500 874 C490 872 484 866 484 860 Z" fill="#D3D9E4"/>
        <path d="M528 836 C542 832 556 832 570 836" fill="none" stroke="#DDE2EB" strokeWidth="3" strokeLinecap="round"/>
          <path d="M436 556 C464 548 560 548 590 556 C594 570 592 584 586 596 C560 604 466 604 442 596 C434 584 432 570 436 556 Z" fill="#232C4C"/>
        <path d="M438 566 C476 560 550 560 588 566" fill="none" stroke="#161C34" strokeWidth="8" strokeLinecap="round"/>
          <path d="M452 398 C458 378 474 366 496 362 L560 360 C586 362 604 376 610 398 C616 440 612 486 606 526 C604 542 600 554 594 562 C586 572 570 576 552 576 C524 578 486 578 460 572 C448 568 442 556 440 540 C436 486 440 440 452 398 Z" fill="#FFFFFF"/>
        <path d="M566 562 C588 510 600 456 596 402 C608 456 610 510 602 562 Z" fill="#1A2238" opacity=".08"/>
        <path d="M496 366 C504 380 514 390 522 396 C530 390 540 380 548 366 Z" fill="#E9EDF4"/>
        <path d="M522 396 V566" stroke="#E9EDF4" strokeWidth="3"/>
          <path d="M474 366 C454 368 440 382 434 402 C428 430 428 458 434 484 C438 502 444 520 454 536 C460 546 470 550 480 546 C488 542 492 534 490 526 C482 512 476 496 472 478 C466 456 468 432 476 412 C480 400 486 390 492 382 C488 374 482 366 474 366 Z" fill="#E4E8F0"/>
          <g transform="rotate(-10 452 508)">
          <rect x="413" y="454" width="78" height="108" rx="8" fill="#1E2A47"/>
          <rect x="420" y="461" width="64" height="94" rx="5" fill="#2A3860"/>
        </g>
        <path d="M448 548 C458 540 476 542 482 554 C486 564 480 574 468 576 C456 578 446 570 446 560 C446 555 447 551 448 548 Z" fill="#F3C5A5"/>
          <g className="armH">
          <path d="M584 368 C600 360 618 362 632 372 C660 370 694 376 722 384 C738 388 748 390 754 392 C756 400 756 410 754 418 C744 420 730 420 716 418 C688 414 656 410 630 408 C612 414 596 418 584 418 C576 402 576 384 584 368 Z" fill="#FFFFFF"/>
          <path d="M598 410 C630 404 690 406 746 412 C746 416 745 418 744 420 C716 418 688 414 630 408 C618 412 606 416 598 416 Z" fill="#1A2238" opacity=".08"/>
          <path d="M746 386 C756 376 776 374 788 382 C798 390 800 404 794 414 C788 424 774 428 762 424 C750 420 742 406 746 386 Z" fill="#F3C5A5"/>
          <path d="M760 388 C768 384 778 384 786 388 M760 398 C768 395 778 395 788 398 M762 408 C770 406 780 406 788 408" fill="none" stroke="#E2A886" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
          <path d="M510 346 C518 352 530 352 538 346 L542 388 C530 394 516 394 506 388 Z" fill="#E6B08E"/>
        <path d="M500 292 C500 264 516 248 538 250 C560 252 574 270 574 296 C576 312 574 326 570 336 C566 348 558 356 546 360 C536 362 526 360 518 356 C506 348 500 336 500 318 C499 310 499 300 500 292 Z" fill="#F3C5A5"/>
        <path d="M546 360 C558 354 568 342 572 328 C576 342 568 356 554 360 Z" fill="#1A2238" opacity=".1"/>
        <path d="M551 296 C556 292 562 292 567 296" fill="none" stroke="#1A2238" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="559" cy="306" r="2.4" fill="#2B3350"/>
        <path d="M572 300 C578 306 577 314 570 318" fill="none" stroke="#E2A886" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M558 338 C563 341 569 340 573 336" fill="none" stroke="#D99A78" strokeWidth="2" strokeLinecap="round"/>
        <path d="M488 336 C472 314 468 282 476 256 C484 234 504 222 528 220 C554 218 576 228 588 248 C594 260 594 276 588 290 C582 276 572 268 562 270 C552 264 542 272 536 278 C522 284 514 300 508 314 C502 324 496 332 488 336 Z" fill="#1A2238"/>
        <path d="M488 336 C480 320 480 300 488 286 C490 306 496 322 506 330 Z" fill="#1A2238"/>
      </g>
      
      <g className="robot">
          <path d="M1046 500 L1136 492 L1154 606 L1064 616 Z" fill="#17A37A"/>
        <path d="M1046 500 L1136 492 L1140 516 L1050 526 Z" fill="#118A66"/>
          <path d="M1070 402 C1084 400 1096 408 1100 420 C1108 446 1114 464 1118 480 C1112 488 1100 490 1092 486 C1086 466 1080 448 1072 430 C1066 420 1064 410 1070 402 Z" fill="#DCE2EC"/>
        <circle cx="1106" cy="486" r="13" fill="#1A2238"/>
        <path d="M1094 480 L1124 486 C1128 510 1130 534 1128 556 C1132 566 1134 578 1130 590 C1118 596 1100 596 1090 588 C1088 576 1090 566 1094 556 C1092 534 1092 508 1094 480 Z" fill="#DCE2EC"/>
        <path d="M1094 596 C1104 588 1122 590 1126 602 C1128 614 1118 622 1106 620 C1096 618 1090 604 1094 596 Z" fill="#1A2238"/>
          <path d="M1036 552 C1050 546 1076 546 1090 554 C1100 574 1108 596 1116 620 C1122 636 1126 652 1128 668 C1118 676 1100 678 1088 672 C1080 652 1072 632 1064 612 C1056 592 1046 572 1036 552 Z" fill="#DCE2EC"/>
        <circle cx="1106" cy="682" r="18" fill="#1A2238"/>
        <path d="M1090 690 C1100 684 1118 684 1128 688 C1136 712 1144 742 1150 772 C1154 790 1158 808 1162 826 C1170 828 1174 838 1168 846 C1154 852 1132 852 1122 846 C1118 838 1122 828 1128 824 C1120 800 1112 776 1106 752 C1100 728 1094 708 1090 690 Z" fill="#DCE2EC"/>
        <path d="M1048 864 C1050 852 1062 844 1080 842 C1100 840 1120 840 1138 840 C1150 836 1164 840 1170 850 C1174 860 1172 872 1164 878 C1152 884 1134 884 1116 882 L1062 882 C1050 880 1044 872 1048 864 Z" fill="#1A2238"/>
          <path d="M996 552 C1010 546 1036 546 1050 554 C1050 574 1046 596 1040 620 C1036 636 1030 652 1024 668 C1012 674 994 674 984 666 C986 648 988 630 990 612 C992 592 994 572 996 552 Z" fill="#FFFFFF"/>
        <path d="M1030 556 C1040 550 1048 552 1050 554 C1050 574 1046 596 1040 620 C1036 636 1030 652 1024 668 C1018 671 1012 672 1006 672 C1014 650 1022 626 1028 600 C1032 584 1032 568 1030 556 Z" fill="#1A2238" opacity=".08"/>
        <circle cx="1006" cy="676" r="18" fill="#1A2238"/>
        <path d="M992 666 C998 656 1014 656 1020 666 C1022 672 1020 678 1016 682 C1008 686 998 686 994 680 C990 676 990 670 992 666 Z" fill="#FFFFFF"/>
        <path d="M988 684 C998 680 1016 680 1024 686 C1024 710 1020 740 1012 770 C1008 788 1002 806 996 824 C1004 830 1006 840 1000 846 C986 852 964 850 954 842 C950 834 954 826 962 822 C968 800 974 776 978 752 C982 728 986 706 988 684 Z" fill="#FFFFFF"/>
        <path d="M1010 688 C1018 684 1022 684 1024 686 C1024 710 1020 740 1012 770 C1008 788 1002 806 996 824 C992 826 988 828 984 828 C990 806 996 784 1000 760 C1006 732 1010 708 1010 688 Z" fill="#1A2238" opacity=".08"/>
        <path d="M882 862 C884 850 896 842 914 840 C934 838 954 838 972 838 C984 834 998 838 1004 848 C1008 858 1006 870 998 876 C986 882 968 882 950 880 L896 880 C884 878 878 870 882 862 Z" fill="#1A2238"/>
          <path d="M990 522 C1000 512 1076 512 1086 522 C1092 534 1090 548 1082 556 C1060 562 1016 562 994 556 C986 548 984 534 990 522 Z" fill="#1A2238"/>
        <circle cx="1036" cy="537" r="5" fill="#2FD3A0"/>
        <path d="M990 484 C1008 496 1066 496 1084 484 C1084 496 1082 508 1076 518 C1052 526 1024 526 1000 518 C992 508 990 496 990 484 Z" fill="#E9EDF4"/>
        <path d="M962 402 C980 386 1044 384 1090 400 C1098 420 1100 442 1096 462 C1092 476 1086 486 1080 492 C1054 500 1018 500 994 492 C986 484 978 472 974 458 C966 440 960 420 962 402 Z" fill="#FFFFFF"/>
        <path d="M1090 400 C1098 420 1100 442 1096 462 C1092 476 1086 486 1080 492 C1070 496 1058 498 1046 498 C1064 480 1072 448 1066 412 Z" fill="#1A2238" opacity=".08"/>
        <ellipse cx="1024" cy="440" rx="22" ry="26" fill="#E9EDF4"/>
        <circle cx="1024" cy="440" r="6" fill="#2FD3A0"/>
          <path d="M1066 402 C1068 388 1082 380 1096 384 C1108 388 1114 400 1110 412 C1100 420 1080 420 1070 414 C1066 410 1066 406 1066 402 Z" fill="#DCE2EC"/>
        <path d="M944 404 C946 390 958 382 972 384 C984 386 992 396 990 410 C982 420 962 422 950 416 C946 412 944 408 944 404 Z" fill="#FFFFFF"/>
        <circle cx="966" cy="416" r="13" fill="#1A2238"/>
          <g className="armR">
          <path d="M964 398 C948 400 920 402 894 404 C884 404 878 410 878 418 C878 426 884 432 892 432 C918 434 944 436 964 436 C968 424 968 410 964 398 Z" fill="#FFFFFF"/>
          <circle cx="884" cy="419" r="13" fill="#1A2238"/>
          <path d="M884 402 C866 398 848 394 830 390 C824 384 818 382 812 386 C806 392 806 410 812 418 C818 422 824 420 830 416 C848 420 866 426 884 434 C888 424 888 412 884 402 Z" fill="#FFFFFF"/>
          <path d="M884 426 C866 420 848 414 830 412 C824 416 818 418 814 416 C812 418 812 418 812 418 C818 422 824 420 830 416 C848 420 866 426 884 434 Z" fill="#1A2238" opacity=".08"/>
          <path d="M792 378 C812 372 830 380 834 396 C838 412 826 428 808 428 C794 428 782 418 780 404 C778 392 782 382 792 378 Z" fill="#1A2238"/>
          <path d="M790 392 C800 388 812 388 822 392 M790 402 C800 398 812 398 824 402 M792 412 C802 408 814 408 822 412" fill="none" stroke="#3A4460" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
          <rect x="1002" y="368" width="28" height="28" rx="8" fill="#1A2238"/>
        <path d="M956 322 C954 288 972 264 1000 258 C1020 250 1050 252 1066 266 C1080 278 1084 300 1080 322 C1078 344 1068 360 1052 370 C1040 378 1026 380 1014 378 C994 376 976 366 964 350 C958 342 956 332 956 322 Z" fill="#FFFFFF"/>
        <path d="M1050 268 C1072 284 1080 310 1074 336 C1068 358 1048 374 1020 376 C1046 364 1060 340 1060 314 C1060 296 1056 280 1050 268 Z" fill="#1A2238" opacity=".08"/>
        <path d="M1064 268 C1076 262 1088 266 1090 278 C1092 290 1084 298 1074 296" fill="#FFFFFF"/>
        <path d="M960 322 C962 292 982 274 1008 276 C1030 278 1042 300 1038 326 C1034 350 1012 366 988 360 C968 354 958 340 960 322 Z" fill="#1A2238"/>
        <path className="eye" d="M974 322 c6-8 12-8 18 0 s12 8 18 0" fill="none" stroke="#2FD3A0" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="1060" cy="320" r="17" fill="#17A37A"/><circle cx="1060" cy="320" r="10" fill="#0E7A5A"/><circle cx="1060" cy="320" r="4" fill="#2FD3A0"/>
        <circle cx="1014" cy="252" r="6" fill="#1A2238"/><rect x="1011" y="252" width="6" height="8" fill="#1A2238"/>
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
