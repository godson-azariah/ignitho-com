import Image from "next/image";
import ContactCta from "@/components/sections/ContactCta";
import Icon from "@/components/ui/Icon";
import OfficeTabs from "@/components/career/OfficeTabs";
import EnquiryForm from "./EnquiryForm";

/*
 * Band rhythm: hero -> tinted (Get in touch) -> light (the form and the
 * reasons beside it) -> tinted (Our Offices).
 */

const Shell = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 lg:px-[38px] ${className}`}>{children}</div>
);

function BandHeading({ children }) {
  return (
    <h2 className="text-center text-[30px] font-bold leading-[1.3] text-[#1d0f2a] sm:text-[36px] lg:text-[44px] lg:leading-[57.2px]">
      {children}
    </h2>
  );
}

export default function ContactPage({ data }) {
  const { hero, intro, form, why, offices } = data;

  return (
    <>
      <div aria-hidden="true" style={{ height: "var(--nav-height)" }} />

      {/* 1 — hero */}
      <section className="bg-brand-gradient py-[40px] text-white lg:py-[50px]">
        <Shell>
          <h1 className="mx-auto max-w-[1220px] text-center text-[30px] font-bold leading-[1.3] sm:text-[40px] lg:text-[54px] lg:leading-[60px] lg:tracking-[-1.5px]">
            <span className="block">{hero.line1}</span>
            <span className="block text-[#7DDDE0]">{hero.line2}</span>
          </h1>
        </Shell>
      </section>

      {/* 2 — get in touch */}
      <section className="trap-section py-[48px] lg:pt-[62px] lg:pb-[66px]">
        <Shell>
          <BandHeading>{intro.title}</BandHeading>
          <p className="mx-auto mt-[16px] max-w-[980px] text-center text-[18px] leading-[30px] text-[#622baa] lg:text-[22px] lg:leading-[36.3px]">
            {intro.lead}
          </p>
        </Shell>
      </section>

      {/* 3 — the form beside the reasons. Both columns stretch to the taller
             of the two, and the photo takes up whatever slack is left so the
             two sides finish level. */}
      <section className="trap-section-light py-[48px] lg:py-[70px]">
        <Shell>
          <div className="mx-auto grid max-w-[1180px] items-stretch gap-10 lg:grid-cols-[1fr_1fr] lg:gap-[46px]">
            <EnquiryForm
              inquiryOptions={form.inquiryOptions}
              consent={form.consent}
              submitLabel={form.submit}
            />

            <div className="flex flex-col">
              <h3 className="text-[28px] font-extrabold leading-[1.3] text-[#1d0f2a] lg:text-[34px]">
                {why.title}
              </h3>

              <ul className="mt-[26px] flex flex-1 flex-col justify-between gap-[26px]">
                {why.points.map((p) => (
                  <li key={p.title} className="flex items-start gap-[14px]">
                    <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#c9e9dc] bg-[#eaf7f1] text-[#0f9d58]">
                      <Icon name={p.icon} className="h-[20px] w-[20px]" />
                    </span>
                    <div>
                      <h4 className="text-[19px] font-bold text-[#0f9d58]">{p.title}</h4>
                      <p className="mt-[8px] text-[17px] leading-[28px] text-[#3f3a4a]">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Image
                src={why.image}
                alt=""
                width={820}
                height={480}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="mt-[26px] h-auto w-full rounded-[12px]"
              />
            </div>
          </div>
        </Shell>
      </section>

      {/* 4 — offices, sharing the Career page's tabs and addresses */}
      <section className="trap-section py-[48px] lg:py-[70px]">
        <Shell>
          <BandHeading>{offices.title}</BandHeading>
          <OfficeTabs tabs={offices.tabs} />
        </Shell>
      </section>

      <ContactCta />
    </>
  );
}
