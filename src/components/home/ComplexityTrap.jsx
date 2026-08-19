import Image from "next/image";
import { COMPLEXITY } from "@/lib/content";

/*
  Measured from the original at 1440w:
    band      y=1602 h=889, white, 124px top / 121px bottom padding
    container x=50  w=1340
    left col  650 wide; image 496x496 at x=832 (132px gutter)
    h2        54/700, lh 59.4px, ls -1.5px, #030303
    lead      22/400, lh 30px, #6b6080
    items     2 cols, 300 wide, 40px column gap, 45px row gap
              46px icon tile + 25px gap + 229px text
    h3        20/700, lh 26px, #000
    body      20/400, lh 33px, #6b6080
*/

/* Lucide icons the original uses, in source order: unlink, hourglass,
   shield-check, badge-check. */
const ICONS = [
  [
    <path key="a" d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />,
    <path key="b" d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />,
    <line key="c" x1="8" x2="8" y1="2" y2="5" />,
    <line key="d" x1="2" x2="5" y1="8" y2="8" />,
    <line key="e" x1="16" x2="16" y1="19" y2="22" />,
    <line key="f" x1="19" x2="22" y1="16" y2="16" />,
  ],
  [
    <path key="a" d="M5 22h14" />,
    <path key="b" d="M5 2h14" />,
    <path key="c" d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />,
    <path key="d" d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />,
  ],
  [
    <path key="a" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />,
    <path key="b" d="m9 12 2 2 4-4" />,
  ],
  [
    <path key="a" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />,
    <path key="b" d="m9 12 2 2 4-4" />,
  ],
];

function CardIcon({ index, className = "" }) {
  return (
    <span
      className={`h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] bg-accent ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ICONS[index % ICONS.length]}
      </svg>
    </span>
  );
}

export default function ComplexityTrap() {
  return (
    // Flat #f8f5fe: the computed style reports a 160deg gradient, but the
    // pixels the original actually paints are effectively flat at this value.
    <section className="relative overflow-hidden bg-[#f8f5fe] py-[62px] sm:py-[80px] lg:pb-[121px] lg:pt-[124px]">
      {/* 28px dot grid (original's ::before) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(122, 0, 194, 0.18) 1px, rgba(0, 0, 0, 0) 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* 56px ruled grid (original's ::after) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(122, 0, 194, 0.06) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(90deg, rgba(122, 0, 194, 0.06) 1px, rgba(0, 0, 0, 0) 1px)",
          backgroundSize: "56px 56px, 56px 56px",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1340px] px-5 xl:px-0">
        {/* The measured 650 + 132 + 496 column needs 1278px. Held from lg it
            overflowed the band between 1024 and 1280, so the two columns stay
            flexible until there is genuinely room for the fixed one. */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-[40px] xl:grid-cols-[650px_1fr] xl:gap-[132px]">
          <div>
            {/* Centred on phones and tablets, left-aligned once the copy sits
                beside the illustration. */}
            <h2 className="text-center text-[40px] leading-[52px] tracking-[-1.5px] text-ink text-pretty tablet:text-[29px] tablet:leading-[1.1em] lg:text-left lg:text-[54px] lg:leading-[59.4px]">
              {COMPLEXITY.title}
            </h2>

            <p className="mt-[5px] max-w-[650px] text-center text-[22px] leading-[30px] text-muted text-pretty tablet:text-[18px] lg:text-left lg:text-[22px]">
              {COMPLEXITY.subtitle}
            </p>

            {/* Two fixed 300px tracks needed 640px of room, which a 640px
                viewport does not have once the 20px gutters are taken. Flexible
                tracks below the desktop column, the measured 300px above it. */}
            <ul className="mt-[36px] grid gap-x-[40px] gap-y-[34px] sm:grid-cols-2 lg:mt-[50px] lg:gap-y-[40px] xl:grid-cols-[300px_300px]">
              {/* Below the desktop column the icon rides inline with the title
                  on one centred line and the body runs full width underneath,
                  which is what the live site does on a phone. */}
              {COMPLEXITY.items.map((item, i) => (
                <li key={item.title} className="lg:flex lg:gap-[25px]">
                  <h3 className="flex items-center justify-center gap-[12px] text-[20px] font-bold leading-[46px] text-black lg:hidden">
                    <CardIcon index={i} className="flex" />
                    {item.title}
                  </h3>

                  <CardIcon index={i} className="hidden lg:flex" />

                  <div className="flex-1">
                    <h3 className="hidden text-[20px] font-bold leading-[26px] text-black lg:block">
                      {item.title}
                    </h3>
                    <p className="pb-[7px] text-center text-[20px] leading-[30px] text-muted text-pretty lg:mt-[5px] lg:text-left lg:leading-[33px]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-[72px]">
            <Image
              src={COMPLEXITY.image.src}
              alt={COMPLEXITY.image.alt}
              width={COMPLEXITY.image.width}
              height={COMPLEXITY.image.height}
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 380px, 496px"
              /* capped and centred below the desktop column, otherwise it
                 stretches to the full band width on a tablet */
              className="mx-auto h-auto w-full max-w-[496px] lg:mx-0 xl:h-[496px] xl:w-[496px] xl:max-w-none xl:object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
