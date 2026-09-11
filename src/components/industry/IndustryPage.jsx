import Image from "next/image";
import ContactCta from "@/components/sections/ContactCta";
import Counter from "@/components/ui/Counter";
import Icon from "@/components/ui/Icon";
import { FaGear, FaMicrochip, FaPills, FaRegClipboard, FaShieldHalved } from "react-icons/fa6";

/**
 * Shared layout for the five industry pages. Every band is driven by the data
 * shape in `lib/industry/*.js`, so a new industry is a data file plus a route.
 */


/* Measured from the original pharma page at 1440w:
     heading  44/700  lh 60px   #1d0f2a  (white on dark bands)
     lead     22/400  lh 36.3px #622baa  (white/70 on dark bands)
     card h3  18/700  lh 23.4px #5800c8
     card p   16/400  lh 26.4px #6b6080                                    */
function SplitHeading({ top, accent, tone = "dark", stacked = true, box = "", size = "text-[29px] leading-[34.8px] capitalize sm:text-[38px] lg:text-[44px] lg:tracking-[-1.5px]" }) {
  // Most bands hard-break between the ink line and the accent line. The
  // solutions band does not — it runs inline and wraps naturally.
  if (!stacked) {
    return (
      <h2 className={`${box} ${size} text-center font-bold leading-[1.3] lg:leading-[60px] ${
        tone === "dark" ? "text-[#1d0f2a]" : "text-white"}`}>
        {top}{" "}
        <span className={tone === "dark" ? "text-[#9c1ad4]" : "text-[#7DDDE0]"}>{accent}</span>
      </h2>
    );
  }
  return (
    <h2 className={`${box} ${size} text-center font-bold leading-[1.3] lg:leading-[60px] ${
      tone === "dark" ? "text-[#1d0f2a]" : "text-white"}`}>
      <span className="block">{top}</span>
      {/* accent sampled from the original render — a vivid violet, noticeably
          brighter than the deep #2300b2 brand blue-purple */}
      <span className={`block ${tone === "dark" ? "text-[#9c1ad4]" : "text-[#7DDDE0]"}`}>
        {accent}
      </span>
    </h2>
  );
}

/**
 * Pass `lines` to pin where the lead breaks, the way the original does;
 * otherwise it wraps naturally from `children`.
 */
const LEAD_TONE = {
  dark: "text-[#622baa]",
  muted: "text-[#6b6080]",
  light: "text-white/70",
};

function Lead({ children, lines, tone = "dark", className = "mx-auto mt-4 leading-[30px]" }) {
  return (
    <p className={`${className} text-center text-[18px] lg:text-[22px] lg:leading-[36.3px] ${
      LEAD_TONE[tone] || LEAD_TONE.dark}`}>
      {lines ? (
        <>
          <span className="lg:hidden">{children ?? lines.join(" ")}</span>
          <span className="hidden lg:block">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </>
      ) : (
        children
      )}
    </p>
  );
}

/**
 * Splits a stat label into the parts the counter needs. Everything ahead of
 * the last number is a static prefix, the number ramps, the tail is a static
 * suffix — which covers "65%", "$4.6T", "4 Months", "4,700" and "10-15%"
 * (prefix "10-", target 15) without a special case per page.
 *
 * Returns null when there is no number to count, so the value renders as-is.
 */
const STAT = /^(.*?)(\d[\d,]*(?:\.\d+)?)([^\d]*)$/;

function parseStat(value) {
  const m = typeof value === "string" && value.match(STAT);
  if (!m) return null;
  const [, prefix, num, suffix] = m;
  const dot = num.indexOf(".");
  return {
    prefix,
    suffix,
    target: parseFloat(num.replace(/,/g, "")),
    decimals: dot === -1 ? 0 : num.length - dot - 1,
    group: num.includes(","),
  };
}

const Shell = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 lg:px-[38px] ${className}`}>{children}</div>
);

export default function IndustryPage({ data, afterHero }) {
  const { hero, trust, problems, solutions, approach, why } = data;

  /* left-0, right-0, left-1, right-1 — the order the live site stacks them
     in on a phone; the desktop grid puts the even ones back in the left
     column and the odd ones in the right. */
  const whyPoints = (why.left || []).flatMap((l, i) => [l, (why.right || [])[i]]).filter(Boolean);
  const ink = data.leadTone === "muted" ? "muted" : "dark";

  /* Band surfaces are not the same on every industry page — travel alternates
     differently. A page can override any of them via . */
  /* Written out in full: Tailwind scans source text, so a class built by
   template literal would never be generated. */
/* The solutions rows use three distinct glyphs, in this order, when the data
   does not name one of its own. */
/* The trust band draws filled Font Awesome glyphs, not the stroked set the
   rest of the page uses. */
const TRUST_FA = {
  pills: FaPills,
  clipboard: FaRegClipboard,
  microchip: FaMicrochip,
  shieldHalved: FaShieldHalved,
  // banking swaps the last card's glyph for a gear
  gear: FaGear,
};

const SOLUTION_ICONS = ["box", "userBadge", "tag"];

const WHY_ORDER = ["order-1", "order-2", "order-4", "order-5"];

const SURFACE = { tinted: 'trap-section', light: 'trap-section-light' };
  const tone = (band, fallback) => SURFACE[(data.tones || {})[band] || fallback];

  return (
    <>
      {/* 1 — hero */}
      {/* Spacer clears the fixed header. Kept outside the band so the hero stays
          240px tall, as the original is. */}
      <div aria-hidden="true" style={{ height: "var(--nav-height)" }} />

      <section className="bg-brand-gradient py-[50px] text-white">
        <Shell>
          <h1 className="mx-auto max-w-[1220px] text-center text-[34px] font-bold leading-[44.2px] sm:text-[38px] sm:leading-[1.3] lg:text-[54px] lg:leading-[70.2px] lg:tracking-[-1.5px]">
            <span className="block">{hero.line1}</span>
            <span className="block text-[#7fe3d4]">{hero.line2}</span>
          </h1>
        </Shell>
      </section>

      {/* per-page band slot: pages are not all identical, so a page can
          inject its own band here (travel does). */}
      {afterHero}

      {/* 2 — trust stats */}
      <section className={`${tone("trust", "tinted")} py-[48px] lg:py-[74px]`}>
        <Shell>
          <SplitHeading top={trust.titleTop} accent={trust.titleAccent} />
          <Lead lines={trust.subtitleLines}>{trust.subtitle}</Lead>

          {/* Fixed 1140px row of 4 x 270px cards with 20px gaps — the row width
              is constant, it does not track the container. Cards brighten from
              the bottom-left corner toward the top-right. */}
          {/* The live row is one column inset 30px a side right up to the
              tablet band — the card is not a fixed width, it grows with the
              screen, which is what lets the copy settle on two lines. */}
          <ul
            className={`mx-auto mt-[48px] grid max-w-[1140px] grid-cols-1 gap-5 tablet:grid-cols-2 tablet:px-0 lg:mt-[78px] lg:grid-cols-4 ${
              trust.rowInset || "px-[30px]"
            }`}
          >
            {trust.stats.map((s, i) => (
              <li
                key={s.value + i}
                className={`w-full rounded-[15px] py-[20px] text-center text-white tablet:px-[20px] tablet:pb-0 tablet:text-left lg:min-h-[210px] ${
                  trust.cardPad || "px-[15px]"
                }`}
                style={{
                  backgroundImage:
                    i % 2 === 0
                      ? "radial-gradient(circle at 82% 12%, rgba(124, 0, 200, 0.5) 0%, transparent 55%), " +
                        "linear-gradient(125deg, #16063a 0%, #2c0a78 30%, #4a12b8 62%, #5b16c4 100%)"
                      : "radial-gradient(circle at 82% 12%, rgba(16, 210, 150, 0.34) 0%, transparent 55%), " +
                        "linear-gradient(140deg, #053d2c 0%, #05a05e 52%, #0f9fa8 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-[10px] tablet:justify-start">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/15">
                    {TRUST_FA[s.icon]
                      ? (() => { const Fa = TRUST_FA[s.icon]; return <Fa className="h-[18px] w-[18px]" />; })()
                      : <Icon name={s.icon} />}
                  </span>
                  {/* ramps 0 -> target as the band scrolls in. The original runs
                      2s (Elementor data-duration="2000"); trimmed 25% to 1.5s. */}
                  {(() => {
                    const stat = parseStat(s.value);
                    return stat ? (
                      <Counter
                        target={stat.target}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                        group={stat.group}
                        duration={1500}
                        className="text-[35px] font-extrabold leading-none"
                      />
                    ) : (
                      <span className="text-[35px] font-extrabold leading-none">{s.value}</span>
                    );
                  })()}
                </div>
                <p className="mt-[25px] mb-[27px] text-[15px] leading-[24.75px] text-white/90">{s.body}</p>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* 3 — problems */}
      <section className={`${tone("problems", "light")} py-[48px] lg:py-[74px]`}>
        <Shell>
          <SplitHeading top={problems.titleTop} accent={problems.titleAccent} box={problems.headBox} />
          <Lead lines={problems.subtitleLines} className={problems.leadClass}>
            {problems.subtitle}
          </Lead>

          {/* Fixed 1324px row: 4 x 316px cards, 20px gaps, hairline border and
              no shadow — the ground is near-white so a shadow would read dirty. */}
          <ul className="mx-auto mt-[44px] grid max-w-[1324px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[70px] lg:grid-cols-4">
            {problems.items.map((it) => (
              <li
                key={it.title}
                className={`${
                  problems.cardMinH || "min-h-[232px]"
                } rounded-[25px] border border-[rgba(88,0,200,0.52)] bg-white p-[20px] text-center tablet:text-left`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[14px] text-white"
                    style={{ backgroundImage: "linear-gradient(135deg, #5800c8, rgba(88, 0, 200, 0.52))" }}
                  >
                    <Icon name={it.icon || "doc"} className="h-[21px] w-[21px]" />
                  </span>
                  <h3 className="flex-1 text-[18px] font-bold leading-[23.4px] text-[#1d0f2a]">{it.title}</h3>
                </div>
                <p className="mt-[26px] text-[16px] leading-[26.4px] text-muted">{it.body}</p>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* 4 — solutions */}
      <section className="bg-brand-gradient pt-[52px] pb-[48px] text-white lg:pt-[82px] lg:pb-[70px]">
        <Shell>
          {/* Heading and lead are held to the panel's 1160 in the original, so
              the heading wraps to two lines rather than running edge to edge. */}
          <div className="mx-auto max-w-[1160px]">
            <SplitHeading
              top={solutions.titleTop}
              accent={solutions.titleAccent}
              tone="light"
              stacked={solutions.stacked === true}
            />
            <div className="[&>p]:mt-[8px]">
              <Lead lines={solutions.subtitleLines} tone="light">{solutions.subtitle}</Lead>
            </div>
          </div>

          {/* 1160px near-white panel carrying its own dot field, holding the
              lavender flagship box beside the three solution rows. */}
          <div
            /* The live panel is the tinted one and the flagship card inside
               it is the plain white one — we had that the other way round, so
               the card vanished into its own panel. */
            className="trap-section flagship-card flagship-outer -mx-[10px] mt-[40px] max-w-[1160px] rounded-[23px] p-[10px] tablet:mx-auto lg:mt-[58px]"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-[40px] xl:grid-cols-[448px_596px] xl:gap-[66px]">
              <div
                className="trap-section flagship-card flagship-plain-mobile self-center rounded-[25px] border border-[rgba(122,0,194,0.12)] p-[20px] text-center tablet:p-[30px] tablet:text-left"
              >
                <p className="text-[14px] font-semibold uppercase leading-[18.2px] text-[#622baa]">
                  {solutions.flagship.label}
                </p>
                <h3 className="mt-[16px] text-[24px] font-extrabold leading-[28.8px] text-[#1d0f2a] tablet:leading-[31.2px]">
                  {solutions.flagship.title}
                </h3>
                <p className="mt-[12px] mb-[29px] text-[16px] font-medium leading-[26.4px] text-muted">
                  {solutions.flagship.body}
                </p>
              </div>

              <ul className="space-y-[30px] px-[10px] pt-[20px] pb-[10px] lg:px-0">
                {solutions.items.map((it, si) => (
                  <li key={it.title} className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[6px] px-[20px] py-[10px] text-center lg:flex-nowrap lg:items-center lg:justify-start lg:gap-x-4 lg:gap-y-0 lg:px-0 lg:py-0 lg:text-left">
                    <span
                      className="relative flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[14px] text-white lg:top-[-5px] lg:h-[48px] lg:w-[48px]"
                      style={{ backgroundImage: "linear-gradient(135deg, #5800c8 0%, rgba(88, 0, 200, 0.52) 100%)" }}
                    >
                      <Icon name={it.icon || SOLUTION_ICONS[si] || "spark"} className="h-[20px] w-[20px]" />
                    </span>
                    <div className="contents lg:block">
                      {/* capped to the line minus the 45px tile and its 10px gap:
                          a flex-wrap line wraps before it shrinks, so without the
                          cap the title dropped below the icon instead of sitting
                          beside it. w-fit then pulls the box back to the wrapped
                          text so the pair reads centred. */}
                      <h3 className="w-fit max-w-[calc(100%-55px)] lg:w-auto text-[19px] font-bold leading-[24.7px] text-[#5800c8] lg:max-w-none lg:flex-1 tablet:text-[18px] tablet:leading-[23.4px]">{it.title}</h3>
                      <p className="w-full text-[16px] leading-[26.4px] text-[#1a1a1a] lg:mt-[6px] lg:w-auto tablet:text-[15px] tablet:leading-[24.75px]">{it.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Shell>
      </section>

      {/* 5 — approach */}
      <section className={`${tone("approach", "light")} pt-[48px] pb-[52px] lg:pt-[68px] lg:pb-[78px]`}>
        <Shell>
          <SplitHeading top={approach.titleTop} accent={approach.titleAccent} />
          {/* the lead sits in an 1144 container here, narrower than the shell */}
          <div className="mx-auto max-w-[1144px] [&>p]:mt-[20px]">
            <Lead lines={approach.subtitleLines} tone={ink}>{approach.subtitle}</Lead>
          </div>

          {/* Fixed 1280px row: 4 x 305px on 20px gaps. Cards take their height
              from the tallest of the four, so no min-height is set. */}
          <ul
            className="mx-auto mt-[44px] grid grid-cols-1 gap-5 px-[30px] tablet:grid-cols-2 tablet:px-0 lg:mt-[68px] lg:grid-cols-4"
            style={{ maxWidth: approach.rowMax ? `${approach.rowMax}px` : "1140px" }}
          >
            {approach.steps.map((s) => (
              <li
                key={s.title}
                className="relative flex w-full flex-col items-center justify-center gap-[20px] rounded-[25px] p-[26px] text-center text-white tablet:items-start tablet:text-left"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, #043620 0%, #07924f 52%, #0d8e92 100%)",
                }}
              >
                {/* stacked sine curves at 8% white, sitting flush on the card's
                    bottom edge and scaled to its full width */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[25px]"
                  style={{
                    backgroundImage: "url(/images/approach-waves.svg)",
                    backgroundSize: "100%",
                    backgroundPosition: "0 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <h3 className="relative text-[18px] font-semibold leading-[23.4px]">
                  {s.titleLines
                    ? s.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    : s.title}
                </h3>
                {/* the original's paragraph carries a 26.25 bottom margin, which
                    is what lifts the centred block above the card's midline */}
                <p className="relative mb-[26.25px] text-[16px] leading-[26.4px] text-white/70 tablet:text-[15px] tablet:leading-[24.75px] lg:text-[16px] lg:leading-[26.4px]">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* 6 — why ignitho */}
      <section className="trap-section py-[48px] lg:py-[74px]">
        <Shell>
          <h2 className="text-center text-[30px] font-bold leading-[39px] tracking-[-0.5px] text-ink sm:text-[38px] sm:leading-[1.2] lg:text-[46px] lg:leading-[60px]">
            {why.title}
          </h2>
          <Lead>{why.subtitle}</Lead>

          {/* The live site stacks these left-0, right-0, image, left-1, right-1
              on a phone and splits them back into two columns flanking the
              image at desktop, so they are held as one interleaved list and
              placed explicitly on the desktop grid. */}
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[69px] lg:gap-y-8">
            {whyPoints.map((it, i) => {
              const leftColumn = i % 2 === 0;
              return (
                <div
                  key={it.title}
                  /* order puts the image third on a phone; at desktop the
                     explicit column/row placement below takes over */
                  className={`flex flex-wrap items-center gap-x-[10px] gap-y-[6px] text-center lg:flex-nowrap lg:items-start lg:gap-x-4 lg:gap-y-0 lg:text-left ${
                    WHY_ORDER[i] ?? ""
                  } ${
                    leftColumn
                      ? "lg:col-start-1 lg:flex-row-reverse lg:text-right"
                      : "lg:col-start-3"
                  } ${i < 2 ? "lg:row-start-1" : "lg:row-start-2"}`}
                >
                  <span
                    className="ml-[50px] flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[20%] text-white lg:ml-0"
                    style={{ backgroundImage: "linear-gradient(135deg, #5800c8, rgba(88, 0, 200, 0.52))" }}
                  >
                    <Icon name={it.icon || (leftColumn ? "link" : "globe")} className="h-[21px] w-[21px]" />
                  </span>
                  <div className="contents lg:block">
                    <h3 className="w-[calc(100%-158px)] text-[17px] font-bold leading-[22.1px] text-[#5800c8] lg:w-auto tablet:text-[18px] tablet:leading-[23.4px]">
                      {it.title}
                    </h3>
                    <p className="w-full text-[16px] leading-[26.4px] text-muted lg:mt-1.5 lg:w-auto tablet:text-[15px] tablet:leading-[24.75px]">{it.body}</p>
                  </div>
                </div>
              );
            })}

            <Image
              src={why.image.src}
              alt={why.image.alt}
              width={1024}
              height={1024}
              quality={88}
              sizes="(max-width: 1024px) 100vw, 340px"
              className="order-3 mx-auto h-auto w-full max-w-[427px] rounded-[18px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:max-w-none"
            />
          </div>
        </Shell>
      </section>

      <ContactCta />
    </>
  );
}
