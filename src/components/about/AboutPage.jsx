import Image from "next/image";
import ContactCta from "@/components/sections/ContactCta";
import Icon from "@/components/ui/Icon";

/*
 * About. Band rhythm: hero -> tinted -> white -> tinted -> white.
 * People cards carry their photo from the data module, which pairs each
 * image to a name straight from the captured DOM.
 */

const Shell = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 lg:px-[38px] ${className}`}>{children}</div>
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
    <li className="flex aspect-square flex-col items-center justify-center rounded-[20px] border border-[#efe8fb] bg-white px-[30px] py-[28px] text-center shadow-[0_6px_18px_rgba(74,18,184,0.07)] transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[0_9px_22px_rgba(74,18,184,0.10)]">
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
          sizes="104px"
          className="h-[104px] w-[104px] rounded-full bg-[#f3e9ff] object-cover"
        />
      </span>
      <h3 className="mt-[18px] text-[19px] font-extrabold text-[#1d0f2a]">{p.name}</h3>
      <p className="mt-[6px] text-[15px] font-bold leading-[21px] text-[#7a00c2]">{p.role}</p>
      <span aria-hidden="true" className="mt-[14px] block h-[2px] w-[38px] rounded-full bg-[#dcd0f0]" />
      <p className="mt-[14px] text-[15px] font-medium leading-[25px] text-[#3f3a4a]">{p.bio}</p>
      {p.location ? (
        <span className="mt-[16px] inline-flex items-center gap-[6px] rounded-full bg-[#f4eeff] px-[14px] py-[7px] text-[13px] font-semibold text-[#622baa]">
          <Icon name="pin" className="h-[13px] w-[13px] text-[#0f9d58]" />
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
          <Lead>{story.body}</Lead>

          <div className="mt-[52px]">
            <Heading top={timeline.titleTop} accent={timeline.titleAccent} />

            {/* Rail with an arrowhead at its end, a node per card, and a
                stem dropping from each node. Cards measure 180x210 on 14px
                gaps in the original, centre-aligned. */}
            <div className="relative mx-auto mt-[34px] max-w-[1150px]">
              <div aria-hidden="true" className="absolute inset-x-0 top-[7px] hidden lg:block">
                <div className="h-[2px] w-full" style={{ backgroundImage: "linear-gradient(90deg, #7a00c2, #16b981)" }} />
                <span className="absolute right-[-1px] top-[-4px] h-0 w-0 border-y-[5px] border-l-[9px] border-y-transparent border-l-[#16b981]" />
              </div>
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-[14px]">
                {timeline.steps.map((s, i) => (
                  <li key={s.year} className="relative flex flex-col">
                    {/* signal-style node: a coloured core inside a white ring,
                        with a faint translucent halo around it */}
                    <span aria-hidden="true" className="relative mx-auto hidden h-[22px] w-[22px] shrink-0 lg:block">
                      <span className="absolute inset-0 rounded-full bg-white/45" />
                      <span className="absolute inset-[3px] rounded-full bg-white" />
                      <span
                        className="absolute inset-[6px] rounded-full"
                        style={{ backgroundColor: i % 2 === 0 ? "#7a00c2" : "#16b981" }}
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="mx-auto hidden h-[30px] w-[1px] lg:block"
                      style={{ backgroundColor: i % 2 === 0 ? "#c9a3ec" : "#8fd9bd" }}
                    />
                    <div
                      className={`flex min-h-[210px] flex-1 flex-col items-center rounded-[16px] p-[18px] text-center text-white transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[0_16px_30px_rgba(20,10,60,0.22)] ${
                        i % 2 === 0 ? "bg-de-card-purple" : "bg-de-card-green"
                      }`}
                    >
                      <span className="inline-flex items-center gap-[6px] rounded-full bg-white/15 px-[12px] py-[5px] text-[13px] font-semibold">
                        <span aria-hidden="true">{s.emoji}</span>
                        {s.year}
                      </span>
                      <h4 className="mt-[14px] text-[16px] font-bold leading-[21px]">{s.title}</h4>
                      <p className="mt-[10px] text-[15px] leading-[23.25px] text-white/80">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
          <ul className="mx-auto mt-[42px] grid max-w-[1330px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <ul className="mx-auto mt-[42px] grid max-w-[1330px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <Lead lines={why.leadLines} size="lg:text-[21px] lg:leading-[35px] font-medium">
            {why.lead}
          </Lead>

          <div className="mx-auto mt-[42px] grid max-w-[1320px] items-center gap-8 lg:grid-cols-[1fr_360px_1fr] lg:gap-[28px]">
            <ul className="space-y-[30px]">
              {why.left.map((it) => (
                <li key={it.title} className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20%] text-white" style={{ backgroundImage: "linear-gradient(135deg, #5800c8, rgba(88, 0, 200, 0.52))" }}>
                    <Icon name={it.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#7a00c2]">{it.title}</h3>
                    <p className="mt-[7px] text-[16px] font-medium leading-[27px] text-[#3f3a4a]">{it.body}</p>
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
                <li key={it.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20%] text-white" style={{ backgroundImage: "linear-gradient(135deg, #5800c8, rgba(88, 0, 200, 0.52))" }}>
                    <Icon name={it.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#7a00c2]">{it.title}</h3>
                    <p className="mt-[7px] text-[16px] font-medium leading-[27px] text-[#3f3a4a]">{it.body}</p>
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
