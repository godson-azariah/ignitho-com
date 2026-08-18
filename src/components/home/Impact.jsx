import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "../ui/Counter";
import LogoMarquee from "../sections/LogoMarquee";
import { IMPACT_STATS, PARTNER_LOGOS } from "@/lib/content";

const BADGE_ICONS = {
  trend: (
    <>
      <path d="M3 16.5 9 10l4 4 8-8" />
      <path d="M16 6h5v5" />
    </>
  ),
  molecule: (
    <>
      <circle cx="7" cy="8" r="2.4" />
      <circle cx="16.5" cy="6.5" r="2.4" />
      <circle cx="12" cy="16" r="2.4" />
      <path d="m9 9.2 1.7 4.7M9.2 7.3l5-0.6M15.6 8.8 13.4 14" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  bars: (
    <>
      <path d="M4 20V4" />
      <path d="M8.5 20v-7" />
      <path d="M13 20v-11" />
      <path d="M17.5 20v-5" />
    </>
  ),
};

function BadgeIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[13px] w-[13px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {BADGE_ICONS[name]}
    </svg>
  );
}

/**
 * Impact stats. Cards reuse `.frugal-card`, so the gradient, top sheen, corner
 * glow and the lift-on-hover all come from the shared card.
 */
export default function Impact() {
  return (
    <section className="second-section flex flex-col px-[10px] py-[50px] tablet:px-10 tablet:py-10 desktop:px-0 desktop:pb-[88px] desktop:pt-20">
      <Container className="flex flex-col gap-5">
        <SectionHeading
          title="Impact That Speaks for Itself"
          subtitle="Delivering tangible ROI through specialist Data and AI execution"
        />

        <div className="flex flex-col py-5">
          <div className="impact-cards">
            {IMPACT_STATS.map((s) => (
              <article key={`${s.tag}-${s.label}`} className="impact-card">
                {/* second oval; the first is .impact-card::after */}
                <span className="stat-wave" aria-hidden="true" />

                <span className="stat-badge">
                  <BadgeIcon name={s.icon} />
                  {s.tag}
                </span>

                <Counter
                  target={s.target}
                  suffix={s.suffix}
                  className="stat-value"
                />

                <h3 className="stat-label">{s.label}</h3>

                <p className="stat-body">
                  {(s.bodyLines ?? [s.body]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading
            title="Our Specialist Partnerships"
            subtitle="Partnering with industry leaders to deliver enterprise-grade solutions"
          />
          <LogoMarquee logos={PARTNER_LOGOS} className="mt-10" />
        </div>
      </Container>
    </section>
  );
}
