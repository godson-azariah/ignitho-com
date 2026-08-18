import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LogoMarquee from "../sections/LogoMarquee";
import { INDUSTRY_CARDS, CLIENT_LOGOS } from "@/lib/content";

function ArrowButton() {
  return (
    <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#07924f] shadow-md">
      <svg
        viewBox="0 0 24 24"
        className="h-[15px] w-[15px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </span>
  );
}

export default function IndustryFocus() {
  return (
    <section className="trap-section py-16 lg:py-20">
      <Container className="relative flex flex-col gap-5">
        <SectionHeading
          title="Our Industry Focus"
          subtitle="Orchestrating industry-specific Data & AI ecosystems to drive measurable enterprise ROI"
        />

        <ul className="grid grid-cols-2 gap-[18px] py-5 lg:grid-cols-5">
          {INDUSTRY_CARDS.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="industry-card flex h-full min-h-[272px] flex-col items-center px-5 pb-6 pt-7 text-center text-white"
              >
                {/* photo sits under the green wash; it does not scale on hover */}
                <Image
                  src={c.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  quality={88}
                  /* object-cover on a 258x273 box crops a 4:3 source by height,
                     so it needs ~364px of width, not the 20vw (288px) I had —
                     the browser was upscaling a too-small variant. */
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover object-bottom"
                />
                {/* Solid green behind the copy, then clearing downwards so the
                    photo reads plainly across the lower half of the card. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      // dark pool in the top-left corner, then the downward clear
                      "radial-gradient(75% 65% at 0% 0%, rgba(4,67,38,0.85) 0%, rgba(4,67,38,0.35) 38%, rgba(4,67,38,0) 66%), " +
                      "linear-gradient(to bottom, #0c9151 0%, #0c9151 38%, rgba(11,125,72,0.72) 56%, rgba(4,54,32,0.12) 100%)",
                  }}
                />

                <span className="relative block text-[19px] font-bold leading-[26px]">
                  {(c.titleLines ?? [c.title]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
                <span className="relative mt-3 block text-[15px] font-normal leading-[26px] text-white">
                  {(c.bodyLines ?? [c.body]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>

                <span className="relative mt-6">
                  <ArrowButton />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative mt-12">
          <h3 className="text-center text-[30px] font-bold leading-[1.1] tracking-[-1px] text-ink sm:text-[38px] lg:text-[45px]">
            Our Featured Clients
          </h3>
          <LogoMarquee logos={CLIENT_LOGOS} className="mt-10" />
        </div>
      </Container>
    </section>
  );
}
