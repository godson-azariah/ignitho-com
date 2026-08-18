import Image from "next/image";
import ContactCta from "@/components/sections/ContactCta";
import Counter from "@/components/ui/Counter";

/**
 * Shared layout for the five industry pages. Every band is driven by the data
 * shape in `lib/industry/*.js`, so a new industry is a data file plus a route.
 */

const ICONS = {
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M17 11a3 3 0 1 0 0-6" /><path d="M19 20a5 5 0 0 0-3-4.6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" /></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
  doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /></>,
  spark: <><path d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.5.5l3-3A5 5 0 0 0 13.4 3.4l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3A5 5 0 0 0 10.6 20.6l1.7-1.7" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></>,
  box: <><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" /></>,
  userBadge: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="2.6" /><path d="M7.5 17.5a5 5 0 0 1 9 0" /></>,
  tag: <><path d="M20.6 12.6 12 21.2 3.4 12.6a2 2 0 0 1-.6-1.4V5a2 2 0 0 1 2-2h6.2a2 2 0 0 1 1.4.6l8.2 8.2a1.4 1.4 0 0 1 0 1.2z" /><circle cx="7.8" cy="7.8" r="1.4" /></>,
};

/* The solutions rows use three distinct glyphs, in this order, when the data
   does not name one of its own. */
const SOLUTION_ICONS = ["box", "userBadge", "tag"];

function Icon({ name, className = "h-[18px] w-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name] ?? ICONS.spark}
    </svg>
  );
}

/* Measured from the original pharma page at 1440w:
     heading  44/700  lh 60px   #1d0f2a  (white on dark bands)
     lead     22/400  lh 36.3px #622baa  (white/70 on dark bands)
     card h3  18/700  lh 23.4px #5800c8
     card p   16/400  lh 26.4px #6b6080                                    */
function SplitHeading({ top, accent, tone = "dark", stacked = true, size = "text-[30px] capitalize sm:text-[38px] lg:text-[44px] lg:tracking-[-1.5px]" }) {
  // Most bands hard-break between the ink line and the accent line. The
  // solutions band does not — it runs inline and wraps naturally.
  if (!stacked) {
    return (
      <h2 className={`${size} text-center font-bold leading-[1.3] lg:leading-[60px] ${
        tone === "dark" ? "text-[#1d0f2a]" : "text-white"}`}>
        {top}{" "}
        <span className={tone === "dark" ? "text-[#9c1ad4]" : "text-[#7DDDE0]"}>{accent}</span>
      </h2>
    );
  }
  return (
    <h2 className={`${size} text-center font-bold leading-[1.3] lg:leading-[60px] ${
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

function Lead({ children, lines, tone = "dark" }) {
  return (
    <p className={`mx-auto mt-4 text-center text-[18px] leading-[30px] lg:text-[22px] lg:leading-[36.3px] ${
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
  const ink = data.leadTone === "muted" ? "muted" : "dark";

  /* Band surfaces are not the same on every industry page — travel alternates
     differently. A page can override any of them via . */
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
          <h1 className="mx-auto max-w-[1220px] text-center text-[28px] font-bold leading-[1.3] sm:text-[38px] lg:text-[54px] lg:leading-[70.2px] lg:tracking-[-1.5px]">
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
          <ul className="mx-auto mt-[48px] grid max-w-[1140px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[78px] lg:grid-cols-4">
            {trust.stats.map((s, i) => (
              <li
                key={s.value + i}
                className="min-h-[206px] rounded-[14px] p-[22px] text-white shadow-[0_14px_30px_rgba(20,10,60,0.18)]"
                style={{
                  backgroundImage:
                    i % 2 === 0
                      ? "linear-gradient(to bottom left, #7f35f0 0%, #5a1fc0 45%, #360c74 100%)"
                      : "linear-gradient(to bottom left, #16b981 0%, #0e8a55 52%, #06563a 100%)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/15">
                    <Icon name={s.icon} />
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
                <p className="mt-[18px] text-[15px] leading-[24px] text-white/90">{s.body}</p>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* 3 — problems */}
      <section className={`${tone("problems", "light")} py-[48px] lg:py-[74px]`}>
        <Shell>
          <SplitHeading top={problems.titleTop} accent={problems.titleAccent} />
          <Lead lines={problems.subtitleLines}>{problems.subtitle}</Lead>

          {/* Fixed 1324px row: 4 x 316px cards, 20px gaps, hairline border and
              no shadow — the ground is near-white so a shadow would read dirty. */}
          <ul className="mx-auto mt-[44px] grid max-w-[1324px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[70px] lg:grid-cols-4">
            {problems.items.map((it) => (
              <li
                key={it.title}
                className="min-h-[232px] rounded-[16px] border border-[#ece5f8] bg-white p-[22px] pt-[26px]"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-white"
                    style={{ backgroundImage: "linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)" }}
                  >
                    <Icon name={it.icon || "doc"} className="h-4 w-4" />
                  </span>
                  <h3 className="text-[17px] font-bold leading-[22px] text-[#1d0f2a]">{it.title}</h3>
                </div>
                <p className="mt-[26px] text-[15px] leading-[26px] text-muted">{it.body}</p>
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
            className="trap-section-light mx-auto mt-[40px] max-w-[1160px] rounded-[23px] bg-white p-[10px] lg:mt-[58px]"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-[40px] xl:grid-cols-[448px_596px] xl:gap-[66px]">
              <div
                className="trap-section flagship-card self-center rounded-[25px] border border-[rgba(122,0,194,0.12)] p-[22px] sm:p-[30px]"
              >
                <p className="text-[14px] font-semibold uppercase leading-[18.2px] text-[#622baa]">
                  {solutions.flagship.label}
                </p>
                <h3 className="mt-[16px] text-[24px] font-extrabold leading-[32px] text-[#1d0f2a]">
                  {solutions.flagship.title}
                </h3>
                <p className="mt-[12px] mb-[29px] text-[16px] font-medium leading-[26.4px] text-muted">
                  {solutions.flagship.body}
                </p>
              </div>

              <ul className="space-y-[30px] pt-[20px] pb-[10px]">
                {solutions.items.map((it, si) => (
                  <li key={it.title} className="flex items-start gap-4 lg:items-center">
                    <span
                      className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] text-white lg:top-[-5px]"
                      style={{ backgroundImage: "linear-gradient(135deg, #5800c8 0%, rgba(88, 0, 200, 0.52) 100%)" }}
                    >
                      <Icon name={it.icon || SOLUTION_ICONS[si] || "spark"} className="h-[20px] w-[20px]" />
                    </span>
                    <div>
                      <h3 className="text-[18px] font-bold leading-[23.4px] text-[#5800c8]">{it.title}</h3>
                      <p className="mt-[6px] text-[15px] leading-[24.75px] text-[#1a1a1a]">{it.body}</p>
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
            className="mx-auto mt-[44px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[68px] lg:grid-cols-4"
            style={{ maxWidth: approach.rowMax ? `${approach.rowMax}px` : "1140px" }}
          >
            {approach.steps.map((s) => (
              <li
                key={s.title}
                className="relative flex flex-col items-start justify-center gap-[20px] rounded-[25px] p-[25px] text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, #043620 0%, #07924f 52%, #0d8e92 100%)",
                }}
              >
                {/* six stacked sine curves at 8% white, pinned 133px down the
                    card and scaled to its full width */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[25px]"
                  style={{
                    backgroundImage: "url(/images/approach-waves.svg)",
                    backgroundSize: "100%",
                    backgroundPosition: "0 calc(100% - 80px)",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <h3 className="relative text-[17px] font-semibold leading-[22.1px]">
                  {s.titleLines ? (
                    <>
                      <span className="lg:hidden">{s.title}</span>
                      <span className="hidden lg:block">
                        {s.titleLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </>
                  ) : (
                    s.title
                  )}
                </h3>
                {/* the original's paragraph carries a 26.25 bottom margin, which
                    is what lifts the centred block above the card's midline */}
                <p className="relative mb-[26.25px] text-[15px] leading-[24.75px] text-white/70">
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
          <h2 className="text-center text-[30px] font-bold leading-[1.2] tracking-[-0.5px] text-ink sm:text-[38px] lg:text-[46px]">
            {why.title}
          </h2>
          <Lead>{why.subtitle}</Lead>

          <div className="mt-12 grid items-center gap-8 lg:grid-cols-3 lg:gap-5">
            <ul className="space-y-8">
              {why.left.map((it) => (
                <li key={it.title} className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-brand text-white">
                    <Icon name="link" />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold leading-[23.4px] text-[#5800c8]">{it.title}</h3>
                    <p className="mt-1.5 text-[16px] leading-[26.4px] text-muted">{it.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Image
              src={why.image.src}
              alt={why.image.alt}
              width={1024}
              height={1024}
              quality={88}
              sizes="(max-width: 1024px) 100vw, 340px"
              className="mx-auto h-auto w-full max-w-[427px] rounded-[18px]"
            />

            <ul className="space-y-8">
              {why.right.map((it) => (
                <li key={it.title} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-brand text-white">
                    <Icon name="globe" />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold leading-[23.4px] text-[#5800c8]">{it.title}</h3>
                    <p className="mt-1.5 text-[16px] leading-[26.4px] text-muted">{it.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Shell>
      </section>

      <ContactCta />
    </>
  );
}
