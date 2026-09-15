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
      className={`h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[9px] bg-accent lg:h-[46px] lg:w-[46px] lg:rounded-[13px] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px] lg:h-[22px] lg:w-[22px]"
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-[40px] xl:grid-cols-[720px_1fr] xl:gap-[62px]">
          <div>
            {/* Centred on phones and tablets, left-aligned once the copy sits
                beside the illustration. */}
            <h2 className="text-center text-[31px] leading-[40px] tracking-[-1px] text-ink text-pretty sm:text-[40px] sm:leading-[52px] sm:tracking-[-1.5px] tablet:text-[29px] tablet:leading-[1.1em] lg:text-left lg:text-[54px] lg:leading-[59.4px]">
              {COMPLEXITY.title}
            </h2>

            <p className="mt-[12px] max-w-[650px] text-center text-[16px] leading-[26px] text-muted text-pretty sm:mt-[18px] sm:text-[22px] sm:leading-[30px] tablet:mt-[14px] tablet:text-[18px] lg:mt-[24px] lg:text-left lg:text-[22px] lg:leading-[34px]">
              {COMPLEXITY.subtitle}
            </p>

            {/* Two fixed 300px tracks needed 640px of room, which a 640px
                viewport does not have once the 20px gutters are taken. Flexible
                tracks below the desktop column, the measured 300px above it. */}
            <ul className="mt-[26px] grid gap-x-[40px] gap-y-[34px] sm:grid-cols-2 sm:px-0 sm:gap-y-[34px] lg:mt-[50px] lg:gap-y-[40px] xl:grid-cols-2">
              {/* A grid rather than nested flex, so one set of children can sit
                  two ways. On a phone the icon rides inline with the heading on
                  a single centred line and the body runs underneath, centred to
                  a readable measure. From the two-column breakpoint the icon
                  moves to its own column beside the copy, which ranges left.

                  The forced two-line headings are for the narrow desktop
                  columns, so they only take effect from that breakpoint too. */}
              {COMPLEXITY.items.map((item, i) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_auto] items-center justify-center gap-x-[12px] text-center sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:justify-start sm:gap-x-[14px] sm:text-left lg:gap-x-[25px]"
                >
                  <CardIcon index={i} className="flex shrink-0" />

                  <h3 className="text-[18px] font-bold leading-[26px] text-black sm:text-[20px] sm:leading-[30px] lg:min-h-[52px] lg:leading-[26px]">
                    {(item.titleLines ?? [item.title]).map((line) => (
                      <span key={line} className="sm:block">
                        {line}{' '}
                      </span>
                    ))}
                  </h3>

                  <p className="col-span-2 mx-auto mt-[9px] max-w-[34ch] text-[15.5px] leading-[26px] text-muted text-pretty sm:col-span-1 sm:col-start-2 sm:mx-0 sm:mt-[6px] sm:max-w-none sm:pb-[7px] sm:text-[20px] sm:leading-[30px] lg:mt-[5px] lg:leading-[30px]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* From lg the image fills the column: top edge on the heading, bottom
              edge on the last item's text. */}
          <div className="relative">
            <Image
              src={COMPLEXITY.image.src}
              alt={COMPLEXITY.image.alt}
              width={COMPLEXITY.image.width}
              height={COMPLEXITY.image.height}
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 380px, 496px"
              /* capped and centred below the desktop column, otherwise it
                 stretches to the full band width on a tablet */
              className="mx-auto h-auto w-full max-w-[496px] rounded-[16px] lg:absolute lg:inset-0 lg:mx-0 lg:h-full lg:w-full lg:max-w-none lg:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
