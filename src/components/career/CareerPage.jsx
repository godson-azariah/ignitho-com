import ContactCta from "@/components/sections/ContactCta";
import Icon from "@/components/ui/Icon";
import ApplyForm from "./ApplyForm";
import OfficeTabs from "./OfficeTabs";

/* Band rhythm: hero -> tinted -> white -> tinted -> white. */

const Shell = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 lg:px-[38px] ${className}`}>{children}</div>
);

function Heading({ top, accent, stacked = true, className = "" }) {
  return (
    <h2
      className={`text-center text-[30px] font-bold leading-[1.3] text-[#1d0f2a] sm:text-[36px] lg:text-[44px] lg:leading-[57.2px] ${className}`}
    >
      {stacked ? (
        <>
          <span className="block">{top}</span>
          <span className="block text-[#7a00c2]">{accent}</span>
        </>
      ) : (
        <>
          {top} <span className="text-[#7a00c2]">{accent}</span>
        </>
      )}
    </h2>
  );
}

export default function CareerPage({ data }) {
  const { hero, ignitor, culture, apply, markets } = data;

  return (
    <>
      <div aria-hidden="true" style={{ height: "var(--nav-height)" }} />

      {/* 1 — hero */}
      <section className="bg-brand-gradient py-[40px] text-white lg:py-[50px]">
        <Shell>
          <h1 className="mx-auto max-w-[1220px] text-center text-[30px] font-bold capitalize leading-[1.3] sm:text-[40px] lg:text-[54px] lg:leading-[60px] lg:tracking-[-1.5px]">
            <span className="block">{hero.line1}</span>
            <span className="block text-[#7DDDE0]">{hero.line2}</span>
          </h1>
        </Shell>
      </section>

      {/* 2 — what it's like, beside the film */}
      <section className="trap-section py-[44px] lg:py-[86px]">
        <Shell>
          {/* measured: 660 text column, 20 gutter, 660 media — 44/700 lh57.2
              heading held to 495 so it wraps after "to", body 22/400 lh36.3 */}
          <div className="mx-auto grid max-w-[1340px] items-center gap-10 lg:grid-cols-[660px_660px] lg:gap-[20px]">
            <div>
              <h2 className="max-w-[495px] text-[30px] font-bold leading-[1.3] text-[#1d0f2a] lg:text-[44px] lg:leading-[57.2px]">
                {ignitor.titleTop} <span className="text-[#7a00c2]">{ignitor.titleAccent}</span>
              </h2>
              {ignitor.body.map((t) => (
                <p key={t.slice(0, 24)} className="mt-[22px] max-w-[660px] text-[18px] leading-[30px] text-[#6b6080] lg:text-[22px] lg:leading-[36.3px]">
                  {t}
                </p>
              ))}
            </div>

            {/* youtube.com, as the original embeds it — the nocookie domain
                replaces the player's Share control with a bare Copy link */}
            <div className="overflow-hidden rounded-[14px] bg-black shadow-[0_10px_30px_rgba(20,10,60,0.18)]">
              <iframe
                className="aspect-video h-full w-full"
                src={`https://www.youtube.com/embed/${ignitor.videoId}?controls=1&rel=0`}
                title={ignitor.videoTitle}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Shell>
      </section>

      {/* 3 — culture */}
      <section className="trap-section-light py-[44px] lg:py-[56px]">
        <Shell>
          <Heading top={culture.titleTop} accent={culture.titleAccent} />
          <p className="mx-auto mt-[16px] max-w-[1180px] text-center text-[18px] leading-[30px] text-[#6b6080] lg:text-[22px] lg:leading-[36.3px]">
            {culture.lead}
          </p>

          <ul className="mx-auto mt-[34px] grid max-w-[1266px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {culture.cards.map((c) => (
              <li
                key={c.title}
                className="bg-de-card-purple min-h-[426px] rounded-[20px] p-[24px] text-white transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[0_16px_30px_rgba(20,10,60,0.22)]"
              >
                <div className="flex items-center gap-[12px]">
                  <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] border border-white/[0.18] bg-white/[0.12]">
                    <Icon name={c.icon} className="h-[21px] w-[21px]" />
                  </span>
                  <h3 className="text-[19px] font-semibold leading-[24.7px]">{c.title}</h3>
                </div>
                <p className="mt-[16px] text-[17px] leading-[28.05px] text-white/75">{c.body}</p>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* 4 — quick apply */}
      <section className="trap-section py-[44px] lg:py-[56px]">
        <Shell>
          <Heading top={apply.titleTop} accent={apply.titleAccent} stacked={false} />
          <p className="mx-auto mt-[14px] max-w-[900px] text-center text-[18px] leading-[30px] text-[#6b6080] lg:text-[22px] lg:leading-[36.3px]">
            {apply.lead}
          </p>
          <ApplyForm departments={apply.departments} submitLabel={apply.submit} />
        </Shell>
      </section>

      {/* 5 — offices */}
      <section className="trap-section-light py-[48px] lg:py-[76px]">
        <Shell>
          <Heading top={markets.titleTop} accent={markets.titleAccent} />
          <p className="mx-auto mt-[16px] max-w-[1010px] text-center text-[18px] leading-[30px] text-[#6b6080] lg:text-[22px] lg:leading-[36.3px]">
            {markets.lead}
          </p>
          <OfficeTabs tabs={markets.tabs} />
        </Shell>
      </section>

      <ContactCta />
    </>
  );
}
