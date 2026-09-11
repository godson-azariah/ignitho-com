import Image from "next/image";
import ContactCta from "@/components/sections/ContactCta";
import Icon from "@/components/ui/Icon";

/*
 * About. Band rhythm: hero -> tinted -> white -> tinted -> white.
 * People cards carry their photo from the data module, which pairs each
 * image to a name straight from the captured DOM.
 */

const Shell = ({ children, className = "" }) => (
  <div
    className={`mx-auto w-full max-w-[1440px] px-5 lg:px-[38px] ${className}`}
  >
    {children}
  </div>
);

function Heading({ top, accent }) {
  return (
    <h2 className="text-center text-[32px] font-extrabold leading-[1.3] text-[#1d0f2a] sm:text-[40px] lg:text-[48px] lg:leading-[62px] lg:tracking-[-1px]">
      <span className="block">{top}</span>
      {accent ? <span className="block">{accent}</span> : null}
    </h2>
  );
}

function Lead({ children, lines, size = "" }) {
  return (
    <p
      className={`mx-auto mt-[16px] max-w-[1210px] text-center text-[17px] leading-[29px] text-[#622baa] lg:text-[20px] lg:leading-[33px] ${size}`}
    >
      {lines ? (
        <>
          {/* pinned breaks on desktop; wraps naturally below lg */}
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

/* Name, role, bio and location under a ring-framed portrait. */
function PersonCard({ p }) {
  // Square card with a resting shadow. On hover it travels up; the shadow
  // grows only slightly and stays tight, so it reads as movement rather than
  // the card lifting off the page.
  return (
    <li className="flex flex-col items-center rounded-[22px] border border-[rgba(122,0,194,0.12)] bg-white px-[20px] pb-[24px] pt-[28px] text-center shadow-[0_10px_30px_rgba(60,0,120,0.1)] transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[0_14px_34px_rgba(60,0,120,0.14)] lg:px-[24px] lg:pb-[28px] lg:pt-[34px]">
      {/* portrait sits in a violet-to-teal ring over a pale lavender ground */}
      <span
        className="rounded-full p-[3px] shadow-[0_10px_22px_rgba(74,18,184,0.22)]"
        style={{ backgroundImage: "linear-gradient(135deg, #7a00c2, #16b981)" }}
      >
        <Image
          src={p.photo}
          alt={p.name}
          width={152}
          height={152}
          sizes="96px"
          className="h-[84px] w-[84px] rounded-full bg-[#f3e9ff] object-cover lg:h-[96px] lg:w-[96px]"
        />
      </span>
      <h3 className="mt-[16px] text-[19px] font-extrabold leading-[22.8px] text-[#1a0035]">
        {p.name}
      </h3>
      <p className="mt-[5px] text-[15px] font-bold leading-[24.75px] text-[#622baa]">
        {p.role}
      </p>
      <span
        aria-hidden="true"
        className="mt-[13px] block h-[2px] w-[34px] rounded-full bg-[#dcd0f0]"
      />
      <p className="mt-[13px] text-[16px] font-normal leading-[25.92px] text-black">
        {p.bio}
      </p>
      {p.location ? (
        <span className="mt-[25px] inline-flex items-center gap-[6px] rounded-full bg-[#f4eeff] px-[14px] py-[7px] text-[14px] font-semibold leading-[23.1px] text-[#622baa]">
          <Icon name="pin" className="h-[14px] w-[14px] text-[#22b455]" />
          {p.location}
        </span>
      ) : null}
    </li>
  );
}

export default function AboutPage({ data }) {
  const { hero, story, timeline, leadership, advisors, why } = data;

  return (
    <>
      <div aria-hidden="true" style={{ height: "var(--nav-height)" }} />

      {/* 1 — hero */}
      <section className="bg-brand-gradient py-[44px] text-white lg:py-[56px]">
        <Shell>
          {/* same 54/70.2 as every other page hero */}
          <h1 className="mx-auto max-w-[1220px] text-center text-[30px] font-bold leading-[1.3] sm:text-[40px] lg:text-[54px] lg:leading-[70.2px] lg:tracking-[-1.5px]">
            <span className="block">{hero.line1}</span>
            <span className="block text-[#7DDDE0]">{hero.line2}</span>
          </h1>
        </Shell>
      </section>

      {/* 2 — our story, then the year timeline */}
      <section className="trap-section py-[48px] lg:pt-[62px] lg:pb-[70px]">
        <Shell>
          <Heading top={story.title} />
          {/* the live copy sets this a step up from the other leads on the
              page: 19/31.35 on a phone, 22/36.3 from lg */}
          <Lead size="!text-[19px] !leading-[31.35px] lg:!text-[22px] lg:!leading-[36.3px]">
            {story.body}
          </Lead>

          <div className="mt-[52px]">
            <Heading top={timeline.titleTop} accent={timeline.titleAccent} />

            {/* Rail with an arrowhead at its end, a node per card, and a
                stem dropping from each node. Cards measure 180x210 on 14px
                gaps in the original, centre-aligned. */}
            {/* Below lg the live band keeps this row intact and scrolls it
                sideways — 220px cards on a 1540 track — rather than stacking
                the six into a column. */}
            <div className="relative mx-auto mt-[34px] max-w-[1150px]">
              {/* The live scroller is inset 30 a side, not full-bleed, so the
                  row clips on a hard edge inside the band with the tinted
                  ground showing either side. overflow-y must be hidden, not
                  auto: a box that scrolls on both axes lets a sideways swipe
                  drift vertically. */}
              <div className="no-scrollbar mx-[10px] overflow-x-auto overflow-y-hidden pb-[15px] pt-[10px] lg:mx-0 lg:overflow-visible lg:p-0">
                <div className="relative w-max px-[10px] lg:w-auto lg:px-0">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[7px]"
                  >
                    <div
                      className="h-[2px] w-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #7a00c2, #16b981)",
                      }}
                    />
                    <span className="absolute right-[-1px] top-[-4px] h-0 w-0 border-y-[5px] border-l-[9px] border-y-transparent border-l-[#16b981]" />
                  </div>
                  <ul className="flex gap-4 lg:grid lg:grid-cols-6 lg:gap-[14px]">
                    {timeline.steps.map((s, i) => (
                      <li
                        key={s.year}
                        /* 240 cell around a 220 card, as the live track runs */
                        className="relative flex w-[240px] shrink-0 flex-col px-[10px] lg:w-auto lg:px-0"
                      >
                        {/* signal-style node: a coloured core inside a white ring,
                        with a faint translucent halo around it */}
                        <span
                          aria-hidden="true"
                          className="relative mx-auto block h-[22px] w-[22px] shrink-0"
                        >
                          <span className="absolute inset-0 rounded-full bg-white/45" />
                          <span className="absolute inset-[3px] rounded-full bg-white" />
                          <span
                            className="absolute inset-[6px] rounded-full"
                            style={{
                              backgroundColor:
                                i % 2 === 0 ? "#7a00c2" : "#16b981",
                            }}
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="mx-auto block h-[30px] w-[1px]"
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#c9a3ec" : "#8fd9bd",
                          }}
                        />
                        <div
                          className={`flex min-h-0 flex-1 flex-col items-center rounded-[18px] px-[16px] py-[18px] text-center text-white lg:min-h-[210px] lg:rounded-[16px] lg:p-[18px] transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[0_16px_30px_rgba(20,10,60,0.22)] ${
                            i % 2 === 0
                              ? "bg-de-card-purple"
                              : "bg-de-card-green"
                          }`}
                        >
                          <span className="inline-flex items-center gap-[6px] rounded-full bg-white/15 px-[12px] py-[5px] text-[13px] font-semibold leading-[21.45px] lg:leading-[normal]">
                            <span aria-hidden="true">{s.emoji}</span>
                            {s.year}
                          </span>
                          <h4 /* the live card runs an 18/24.3 title over a 14/21.7 body on a phone */
                            className="mt-[22px] text-[18px] font-bold leading-[24.3px] lg:mt-[14px] lg:text-[16px] lg:leading-[21px]">
                            {s.title}
                          </h4>
                          <p className="mt-[13px] text-[14px] leading-[21.7px] text-white/80 lg:mt-[10px] lg:text-[15px] lg:leading-[23.25px]">
                            {s.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* 3 — leadership */}
      <section
        className="grid-surface grid-soft py-[48px] lg:pt-[62px] lg:pb-[70px]"
        style={{ backgroundColor: "rgb(251, 248, 255)" }}
      >
        <Shell>
          <Heading top={leadership.title} />
          <Lead>{leadership.lead}</Lead>
          <ul className="mx-auto mt-[42px] grid max-w-[1330px] grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {leadership.people.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </ul>
        </Shell>
      </section>

      {/* 4 — board of advisors */}
      <section
        className="grid-surface py-[48px] lg:pt-[62px] lg:pb-[70px]"
        style={{ backgroundColor: "rgb(243, 236, 254)" }}
      >
        <Shell>
          <Heading top={advisors.title} />
          <ul className="mx-auto mt-[42px] grid max-w-[1330px] grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {advisors.people.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </ul>
        </Shell>
      </section>

      {/* 5 — why ignitho */}
      <section
        className="grid-surface py-[48px] lg:pt-[62px] lg:pb-[70px]"
        style={{ backgroundColor: "rgb(253, 253, 255)" }}
      >
        <Shell>
          <Heading top={why.title} />
          <Lead
            lines={why.leadLines}
            size="lg:text-[21px] lg:leading-[35px] font-medium"
          >
            {why.lead}
          </Lead>

          <div className="mx-auto mt-[42px] grid max-w-[1320px] items-center gap-8 lg:grid-cols-[1fr_360px_1fr] lg:gap-[28px]">
            <ul className="space-y-[30px]">
              {why.left.map((it) => (
                <li
                  key={it.title}
                  /* on a phone the live row centres the icon and title as a
                     pair and drops the body full width beneath, centred */
                  className="flex flex-wrap items-center justify-center gap-x-[20px] text-center lg:flex-nowrap lg:flex-row-reverse lg:items-start lg:justify-start lg:gap-4 lg:text-right"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20%] text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #5800c8, rgba(88, 0, 200, 0.52))",
                    }}
                  >
                    <Icon name={it.icon} className="h-5 w-5" />
                  </span>
                  <div className="contents lg:block">
                    <h3 className="w-fit text-[20px] font-extrabold leading-[26px] text-[#7a00c2] lg:w-auto lg:text-[18px] lg:leading-[normal]">
                      {it.title}
                    </h3>
                    <p className="mt-[7px] w-full px-[10px] text-[16px] font-medium leading-[26.4px] text-[#3f3a4a] lg:w-auto lg:px-0 lg:leading-[27px]">
                      {it.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* illustration sits on its own light ground, sized by the
                image rather than a flex-stretched child */}
            <div className="mx-auto w-full max-w-[430px]">
              <Image
                src={why.image || "/images/about/why-ignitho.webp"}
                alt=""
                width={800}
                height={800}
                sizes="430px"
                className="h-auto w-full"
              />
            </div>

            <ul className="space-y-[30px]">
              {why.right.map((it) => (
                <li
                  key={it.title}
                  className="flex flex-wrap items-center justify-center gap-x-[20px] text-center lg:flex-nowrap lg:items-start lg:justify-start lg:gap-4 lg:text-left"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20%] text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #5800c8, rgba(88, 0, 200, 0.52))",
                    }}
                  >
                    <Icon name={it.icon} className="h-5 w-5" />
                  </span>
                  <div className="contents lg:block">
                    <h3 className="w-fit text-[20px] font-extrabold leading-[26px] text-[#7a00c2] lg:w-auto lg:text-[18px] lg:leading-[normal]">
                      {it.title}
                    </h3>
                    <p className="mt-[7px] w-full px-[10px] text-[16px] font-medium leading-[26.4px] text-[#3f3a4a] lg:w-auto lg:px-0 lg:leading-[27px]">
                      {it.body}
                    </p>
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
