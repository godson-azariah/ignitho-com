import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/content";

/* Card icons from the original, in order: data stack, analytics bars, applied AI. */
const ICONS = [
  {
    sw: 3,
    shapes: (
      <>
        <path d="M18 16V32C18 35.5 24.3 38 32 38C39.7 38 46 35.5 46 32V16" />
        <path d="M18 24C18 27.5 24.3 30 32 30C39.7 30 46 27.5 46 24" />
        <path d="M18 32V48C18 51.5 24.3 54 32 54C39.7 54 46 51.5 46 48V32" />
        <path d="M18 40C18 43.5 24.3 46 32 46C39.7 46 46 43.5 46 40" />
      </>
    ),
  },
  {
    sw: 3,
    shapes: (
      <>
        <rect x="10" y="34" width="8" height="16" rx="1" />
        <rect x="24" y="26" width="8" height="24" rx="1" />
        <rect x="38" y="18" width="8" height="32" rx="1" />
        <polyline points="10,26 22,20 34,24 48,12" />
        <polyline points="42,12 48,12 48,18" />
        <circle cx="34" cy="24" r="3" />
      </>
    ),
  },
  {
    sw: 2.5,
    shapes: (
      <>
        <path d="M24 18C16 18,14 24,16 28C12 30,12 36,16 39C15 44,18 48,24 48C27 52,33 52,36 48V18C33 14,27 14,24 18Z" />
        <line x1="36" y1="22" x2="48" y2="22" />
        <circle cx="52" cy="22" r="2" />
        <line x1="36" y1="30" x2="50" y2="30" />
        <circle cx="54" cy="30" r="2" />
        <line x1="36" y1="38" x2="48" y2="38" />
        <circle cx="52" cy="38" r="2" />
        <line x1="36" y1="46" x2="50" y2="46" />
        <circle cx="54" cy="46" r="2" />
        <line x1="36" y1="22" x2="36" y2="46" />
      </>
    ),
  },
];

function ServiceIcon({ index }) {
  const icon = ICONS[index % ICONS.length];
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={icon.sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon.shapes}
    </svg>
  );
}

/* Circled check prefixing every bullet. */
function CheckMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-[7px] h-[15px] w-[15px] shrink-0 text-white/70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}

/**
 * Same card as Applying the Frugal Innovation Principle, scaled up — it reuses
 * `.frugal-card` wholesale (gradient, top sheen, corner glow, lift on hover)
 * and only widens the row via `.services-cards`.
 */
export default function ServicesGrid() {
  return (
    <section className="second-section flex flex-col px-[10px] py-[50px] tablet:px-10 tablet:py-10 desktop:px-0 desktop:pb-[88px] desktop:pt-20">
      <Container className="flex flex-col gap-5">
        <SectionHeading
          title="Our Services"
          subtitle="As a specialist provider, we focus on core competencies and execute them with absolute precision"
        />

        <div className="flex flex-col py-5">
          <div className="frugal-cards services-cards">
            {SERVICES.map((s, i) => (
              <article key={s.href} className="frugal-card flex flex-col">
                <div className="frugal-card-header">
                  {/* the live site carries these breaks at every width */}
                  <h3>
                    {(s.titleLines ?? [s.title]).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <div className="icon-wrap">
                    <ServiceIcon index={i} />
                  </div>
                </div>

                <div className="solution-divider-frug" />

                {/* gap rather than space-y: the latter sets its margin through a
                    zero-specificity :where() rule that the reset was winning */}
                <ul className="flex flex-1 flex-col gap-[20px] desktop:gap-[10px]">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[18px] font-normal leading-[29.7px] text-white"
                    >
                      <CheckMark />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="solution-divider-frug" />

                <Link
                  href={s.href}
                  className="flex items-center justify-center gap-2 text-[16px] font-bold leading-[26.4px] text-white transition-all hover:gap-3"
                >
                  Know More <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
