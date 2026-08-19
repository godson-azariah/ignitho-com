import Image from "next/image";
import ContactCta from "@/components/sections/ContactCta";
import Counter from "@/components/ui/Counter";
import Icon from "@/components/ui/Icon";
import LifecycleTabs from "./LifecycleTabs";
import PodDiagram from "./PodDiagram";

/*
 * Data Engineering & Consulting. Measured from the captured original at 1440w:
 *
 *   hero      276 tall, 54/700 lh70.2 ls-1.5, accent #7DDDE0
 *   problem   982 tall, 4 x 278x308 cards then 4 x 278x153 stat cards, 20 gaps
 *   lifecycle 949 tall, 436 tab column beside a 626x601 panel
 *   delivery  669 tall, 4 x 278x207 green cards
 *   pods      928 tall, 1229x452 white panel, orbit stage beside 4 rows
 *   tiers     997 tall, 3 x 390x579 cards, 20 gaps, Tier 2 inverted
 *
 * The card rows are fixed pixel widths, not fluid grids — they hold their
 * width and centre, exactly as the original does.
 */

const Shell = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 lg:px-[38px] ${className}`}>{children}</div>
);

/* Band headings hard-break before the accent line, as the original's markup does. */
function BandHeading({
  top,
  accent,
  tone = "dark",
  size = "lg:text-[44px]",
  lh = "lg:leading-[57.2px]",
  tracking = "",
  inline = false,
  base = "text-[30px] leading-[1.3]",
  sm = "sm:text-[38px] sm:leading-[1.3]",
  /* `wrap` and `box` are for headings whose breaks are being matched to the
     original word for word: balance moves the breaks, and the measure the
     original wraps at is often narrower than the band it sits in. */
  wrap = "text-balance-hard",
  box = "",
}) {
  const accentInk = tone === "dark" ? "text-[#7a00c2]" : "text-[#7DDDE0]";
  return (
    <h2
      /* text-balance evens the two lines so no single word is left stranded
         on a row of its own when the heading wraps on a phone */
      className={`${wrap} ${box} text-center font-bold ${base} ${sm} ${size} ${lh} ${tracking} ${
        tone === "dark" ? "text-[#1d0f2a]" : "text-white"
      }`}
    >
      {inline ? (
        <>
          {top} <span className={accentInk}>{accent}</span>
        </>
      ) : (
        <>
          <span className="block">{top}</span>
          {accent ? <span className={`block ${accentInk}`}>{accent}</span> : null}
        </>
      )}
    </h2>
  );
}

function Lead({ children, tone = "dark", className = "", size = "text-[18px]", lh = "leading-[30px]", color }) {
  return (
    <p
      className={`mx-auto text-center ${size} ${lh} lg:text-[22px] lg:leading-[36.3px] ${
        color || (tone === "dark" ? "text-[#6b6080]" : "text-white")
      } ${className}`}
    >
      {children}
    </p>
  );
}

/* "90%" / "4 Months" / "3x" — everything before the last number is a static
   prefix, the number ramps, the tail is a static suffix. */
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

/**
 * The tier bullet: FontAwesome's check-circle, a filled disc with the tick
 * cut out of it rather than drawn on top. That is what makes Tier 2's tick
 * read dark — the card's gradient shows through the cut.
 *   Tier 1 and 3  #0c8c74
 *   Tier 2        #7DDDE0
 */
function TierTick({ className = "" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
    </svg>
  );
}

export default function DataEngineeringPage({ data }) {
  const { hero, problem, accelerators, lifecycle, delivery, pods, tiers } = data;

  return (
    <>
      {/* spacer clears the fixed header, kept outside the band so the hero
          keeps its measured 276 */}
      <div aria-hidden="true" style={{ height: "var(--nav-height)" }} />

      {/* 1 — hero */}
      <section className="bg-brand-gradient py-[48px] text-white lg:py-[68px]">
        <Shell>
          {/* hero.titleClass lets a page set its own phone-width scale; the
              three solution pages do not share one on the live site */}
          <h1
            className={`mx-auto max-w-[1120px] text-center font-bold sm:text-[40px] lg:text-[54px] lg:leading-[70.2px] lg:tracking-[-1.5px] ${
              hero.titleClass || "text-[30px] leading-[1.3]"
            }`}
          >
            <span className="block">{hero.line1}</span>
            <span className="block text-[#7DDDE0]">{hero.line2}</span>
          </h1>
        </Shell>
      </section>

      {/* 2 — the problem, then the four proof stats */}
      <section className="trap-section py-[52px] lg:pt-[80px] lg:pb-[70px]">
        <Shell>
          <div
            className={
              problem.boxClass ||
              (problem.dense ? "mx-auto max-w-[948px]" : "mx-auto max-w-[1119px]")
            }
          >
            <BandHeading
              top={problem.titleTop}
              accent={problem.titleAccent}
              base={problem.headingBase || undefined}
              sm={problem.headingSm || undefined}
              wrap={problem.headingWrap || undefined}
              box={problem.headingBox}
              lh={
                problem.headingLh ||
                (problem.dense ? "lg:leading-[60px]" : "lg:leading-[48.4px]")
              }
              tracking="lg:tracking-[-1.5px]"
            />
            <Lead
              className={problem.leadClass || "mt-[10px]"}
              size={problem.leadSize}
              lh={problem.leadLh}
            >
              {problem.lead}
            </Lead>
          </div>

          {/* 4 x 278 on 20px gaps, alternating purple and green */}
          <ul
            className={`mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${
              problem.rowMt || "mt-[44px] lg:mt-[79px]"
            } ${
              problem.rowClass || (problem.dense ? "max-w-[1180px] gap-[10px]" : "max-w-[1172px] gap-5")
            }`}
          >
            {problem.cards.map((c, i) => (
              <li
                key={c.title}
className={`rounded-[25px] p-[20px] text-white ${problem.cardClass || ""} ${problem.cardMinH || (problem.dense ? "min-h-[190px]" : "min-h-[308px]")} ${
                  i % 2 === 0 ? "bg-de-card-purple" : "bg-de-card-green"
                }`}
              >
                <div
                  className={`flex items-center ${problem.headClass || ""} ${
                    problem.headGap || (problem.dense ? "gap-[17px]" : "gap-[14px]")
                  }`}
                >
                  <span
                    className={`flex shrink-0 items-center justify-center rounded-[14px] border border-white/[0.18] bg-white/[0.12] ${
                      problem.tileClass || "h-10 w-10"
                    }`}
                  >
                    <Icon name={c.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h3
                    className={`${problem.hugTitle ? "max-w-[61%] sm:max-w-none" : ""} ${
                      problem.titleBox || ""
                    } ${
                      problem.titleClass ||
                      (problem.dense
                        ? "text-[17px] font-semibold leading-[22.1px]"
                        : "text-[20px] font-bold leading-[26px]")
                    }`}
                  >
                    {c.title}
                  </h3>
                </div>
                {/* body is inset a further 10 either side in the original */}
                <p
                  className={
                    problem.bodyClass ||
                    (problem.dense
                      ? "mt-[11px] text-[14px] leading-[23.1px] text-white/70"
                      : "mt-[12px] px-[10px] text-[17px] leading-[28.05px] text-white/70")
                  }
                >
                  {c.body}
                </p>
              </li>
            ))}
          </ul>

          {problem.stats?.length ? (
          <ul
            className={`mx-auto mt-[40px] grid max-w-[1172px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ${
              problem.statsRowClass || ""
            }`}
          >
            {problem.stats.map((s) => {
              const stat = parseStat(s.value);
              return (
                <li key={s.label} className="min-h-[153px] rounded-[20px] bg-white p-[20px]">
                  {stat ? (
                    <Counter
                      target={stat.target}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      group={stat.group}
                      duration={1500}
                      className="text-center text-[40px] font-extrabold leading-[40px] text-[#7a00c2]"
                    />
                  ) : (
                    <p className="text-center text-[40px] font-extrabold leading-[40px] text-[#7a00c2]">{s.value}</p>
                  )}
                  <p
                    className={`mt-[10px] text-[16px] leading-[26.4px] text-[#6b6080] ${
                      problem.statLabelClass || ""
                    }`}
                  >
                    {s.label}
                  </p>
                </li>
              );
            })}
          </ul>
          ) : null}
        </Shell>
      </section>

      {/* 2b — why accelerators (applied-ai only): three green pillars */}
      {accelerators ? (
      <section className="trap-section-light py-[52px] lg:pt-[76px] lg:pb-[70px]">
        <Shell>
          <BandHeading top={accelerators.title} />
          {accelerators.subtitle ? (
            <p className="mt-[10px] text-center text-[17px] leading-[28px] text-[#6b6080]">{accelerators.subtitle}</p>
          ) : null}
          <ul className="mx-auto mt-[44px] grid max-w-[1054px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3">
            {accelerators.cards.map((c) => (
              <li key={c.title} className="bg-industry-gradient relative min-h-[349px] overflow-hidden rounded-[25px] p-[20px] text-white">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: "url(/images/card-waves.svg)", backgroundSize: "100% 40%", backgroundPosition: "0 100%", backgroundRepeat: "no-repeat" }} />
                <h3 className="relative mt-[14px] text-[18px] font-semibold leading-[23.4px]">{c.title}</h3>
                <p className="relative mt-[10px] text-[18px] leading-[29.7px] text-white/70">{c.body}</p>
              </li>
            ))}
          </ul>
        </Shell>
      </section>
      ) : null}

      {/* 3 — full data platform lifecycle */}
      {lifecycle ? (
      <>
      <section className="trap-section-light py-[52px] lg:pt-[76px] lg:pb-[60px]">
        <Shell>
          <div className="mx-auto max-w-[1132px]">
            {/* this heading alone carries no negative tracking in the original */}
            <BandHeading top={lifecycle.title} base={lifecycle.headingBase} />
            {/* leadBold names a run inside lead to embolden — the live copy sets
                one phrase in bold rather than the whole sentence */}
            <Lead
              className="mt-[14px]"
              size={lifecycle.leadSize}
              lh={lifecycle.leadLh}
              color={lifecycle.leadColor}
            >
              {lifecycle.leadBold && lifecycle.lead.includes(lifecycle.leadBold) ? (
                <>
                  {lifecycle.lead.slice(0, lifecycle.lead.indexOf(lifecycle.leadBold))}
                  <strong className="font-bold">{lifecycle.leadBold}</strong>
                  {lifecycle.lead.slice(
                    lifecycle.lead.indexOf(lifecycle.leadBold) + lifecycle.leadBold.length
                  )}
                </>
              ) : (
                lifecycle.lead
              )}
            </Lead>
          </div>

          <LifecycleTabs
            items={lifecycle.items}
            compact={lifecycle.compact}
            phoneCompact={lifecycle.phoneCompact}
          />
        </Shell>
      </section>
      </>
      ) : null}

      {/* 4 — delivery model */}
      <section className="trap-section py-[52px] lg:pt-[81px] lg:pb-[70px]">
        <Shell>
          <div className="mx-auto max-w-[983px]">
            <BandHeading
              top={delivery.titleTop}
              accent={delivery.titleAccent}
              inline={delivery.inlineTitle}
              size={delivery.dense ? "lg:text-[45px]" : "lg:text-[44px]"}
              lh={delivery.dense ? "lg:leading-[60px]" : "lg:leading-[57.2px]"}
            />
            <Lead className="mt-[9px]" size={delivery.leadSize} lh={delivery.leadLh}>
              {delivery.lead}
            </Lead>
          </div>

          <ul
            className={`mx-auto mt-[44px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[79px] lg:grid-cols-4 ${
              delivery.rowClass || "max-w-[1160px]"
            }`}
          >
            {delivery.steps.map((s) => (
              <li
                key={s.title}
                className={`bg-industry-gradient relative overflow-hidden rounded-[25px] text-white ${
                  delivery.cardClass ||
                  (delivery.dense
                    ? "flex min-h-[212px] flex-col justify-center p-[20px]"
                    : "min-h-[207px] px-[20px] py-[10px]")
                }`}
              >
                {/* same wave field as the industry approach cards, anchored to
                    the bottom so it holds as cards grow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/card-waves.svg)",
                    backgroundSize: "100% 40%",
                    backgroundPosition: "0 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                {/* the cap lives here, not in the data file: Tailwind only
                    generates arbitrary values it can see in a scanned source,
                    and novel ones written in lib/ never make it into the CSS */}
                <h3
                  className={`relative text-[18px] leading-[23.4px] ${
                    delivery.hugTitle ? "max-w-[46%] sm:max-w-none" : ""
                  } ${
                    delivery.titleClass ||
                    (delivery.dense ? "font-semibold" : "mt-[14px] font-bold")
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`relative text-white/70 ${
                    delivery.bodyClass ||
                    (delivery.dense
                      ? "mt-[10px] text-[15px] leading-[24.75px]"
                      : "mt-[6px] text-[18px] leading-[29.7px]")
                  }`}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* 5 — specialist PODs */}
      <section className="bg-brand-gradient py-[52px] text-white lg:pt-[78px] lg:pb-[67px]">
        <Shell>
          <div className="mx-auto max-w-[1147px]">
            <BandHeading
              top={pods.titleTop}
              accent={pods.titleAccent}
              tone="light"
              base={pods.headingBase}
              lh="lg:leading-[48.4px]"
              tracking="lg:tracking-[-1.5px]"
            />
            <Lead
              tone="light"
              className="mt-[20px]"
              size={pods.leadSize}
              lh={pods.leadLh}
              color={pods.leadColor}
            >
              {pods.lead}
            </Lead>
          </div>

          <div className="trap-section mx-auto mt-[69px] max-w-[1229px] rounded-[23px] p-[10px]">
            <div className="grid items-center gap-8 lg:grid-cols-[505px_1fr] lg:gap-[20px]">
              <PodDiagram personas={pods.personas} centre={pods.centre} />

              <ul
                className={`space-y-[29px] pt-[20px] pb-[10px] pr-[20px] ${
                  pods.listClass || ""
                }`}
              >
                {pods.points.map((p) => (
                  /* pods.mobileStack: the live layout on a phone puts the icon
                     and title on one centred line with the body full width
                     beneath, rather than a single indented column */
                  <li
                    key={p.title}
                    className={
                      pods.mobileStack
                        ? "flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[6px] text-center sm:flex-nowrap sm:items-start sm:justify-start sm:gap-x-[37px] sm:text-left"
                        : "flex items-start gap-[37px]"
                    }
                  >
                    <span
                      className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center text-white ${
                        pods.tileRadius || "rounded-[14px]"
                      }`}
                      style={{ backgroundImage: "linear-gradient(135deg, #5800c8 0%, rgba(88, 0, 200, 0.52) 100%)" }}
                    >
                      <Icon name={p.icon} className="h-[21px] w-[21px]" />
                    </span>
                    <div className={pods.mobileStack ? "contents sm:block" : ""}>
                      <h3
                        className={`text-[18px] font-bold leading-[23.4px] text-[#5800c8] ${
                          pods.mobileStack
                            ? "w-fit max-w-[62%] text-left sm:w-auto sm:max-w-none"
                            : ""
                        }`}
                      >
                        {p.title}
                      </h3>
                      <p
                        className={`text-[#1a1a1a] ${
                          pods.mobileStack
                            ? "w-full text-[16px] leading-[26.4px] sm:mt-[6px] sm:w-auto sm:text-[15px] sm:leading-[24.75px]"
                            : "mt-[6px] text-[15px] leading-[24.75px]"
                        }`}
                      >
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Shell>
      </section>

      {/* 6 — engagement tiers */}
      <section className="trap-section-light py-[52px] lg:pt-[76px] lg:pb-[60px]">
        <Shell>
          <div className="mx-auto max-w-[1062px]">
            <BandHeading
              top={tiers.titleTop}
              accent={tiers.titleAccent}
              size="lg:text-[54px]"
              lh="lg:leading-[59.4px]"
              tracking="lg:tracking-[-1.5px]"
              inline
            />
            <Lead className="mt-[14px]">{tiers.lead}</Lead>
          </div>

          {/* 3 x 390 on 20px gaps; Tier 2 inverts onto the brand gradient */}
          <ul className="mx-auto mt-[44px] grid max-w-[1210px] grid-cols-1 gap-5 lg:mt-[79px] lg:grid-cols-3">
            {tiers.items.map((t) => {
              const on = t.featured;
              /* label, title, tagline and blurb centre together on a phone */
              const tierHead = tiers.centerHead ? "text-center sm:text-left" : "";
              return (
                <li
                  key={t.tier}
                  className={`min-h-[579px] rounded-[25px] border border-[rgba(122,0,194,0.12)] p-[30px] ${
                    on ? "bg-de-card-purple text-white" : "bg-white"
                  }`}
                >
                  <p
                    className={`text-[14px] font-semibold uppercase leading-[18.2px] ${tierHead} ${
                      on ? "text-[#7DDDE0]" : "text-[#622baa]"
                    }`}
                  >
                    {t.tier}
                  </p>
                  <h3
                    className={`mt-[17px] text-[24px] font-bold leading-[31.2px] ${tierHead} ${on ? "text-white" : "text-[#1d0f2a]"}`}
                  >
                    {t.title}
                  </h3>
                  <p className={`mt-[14px] text-[14px] font-semibold leading-[18.2px] ${tierHead} ${on ? "text-[#7DDDE0]" : "text-[#622baa]"}`}>
                    {t.tagline}
                  </p>
                  <p
                    className={`mt-[13px] text-[16px] font-medium leading-[26.4px] ${tierHead} ${
                      on ? "text-white/[0.78]" : "text-[#6b6080]"
                    }`}
                  >
                    {t.body}
                  </p>

                  <hr
                    className={`mt-[17px] border-0 border-t ${
                      on ? "border-white/20" : "border-[rgba(122,0,194,0.12)]"
                    }`}
                  />

                  <ul className="mt-[17px] space-y-[10px]">
                    {t.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-[6px]">
                        <span className={`mt-[3px] shrink-0 ${on ? "text-[#7DDDE0]" : "text-[#0c8c74]"}`}>
                          <TierTick className="h-[24px] w-[24px]" />
                        </span>
                        <span
                          className={`text-[16px] font-medium leading-[25px] ${
                            on ? "text-white/[0.85]" : "text-[#54595f]"
                          }`}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <p className="mx-auto mt-[29px] max-w-[882px] text-center text-[17px] italic leading-[28.05px] text-[#6b6080]">
            {tiers.note}
          </p>
        </Shell>
      </section>

      <ContactCta />
    </>
  );
}
