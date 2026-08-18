import Image from "next/image";
import Link from "next/link";
import { CONTACT_CTA } from "@/lib/content";
import { CONTACT_HREF } from "@/lib/site";

/** Closing "Fancy a chat?" band. Shared by every page on the site. */
export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      {/* faint ruled grid over the gradient */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Original band is 319px tall: the map height drives it, so it is capped
          at 520px wide (243px tall) inside 38px of vertical padding. */}
      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-8 lg:px-[50px] lg:py-[38px]">
        <div>
          <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.5px] sm:text-[36px]">
            {CONTACT_CTA.title}
          </h2>

          <p className="mt-[18px] max-w-[500px] text-[16px] leading-[26px] text-white/90">
            <span className="block">
              We have offices and teams across the USA, UK, Sweden, India and
            </span>
            <span className="block">Costa Rica for a coffee catchup</span>
          </p>

          <Link
            href={CONTACT_HREF}
            className="mt-[30px] inline-flex items-center justify-center rounded-full bg-accent px-[38px] py-[16px] text-[18px] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {CONTACT_CTA.ctaLabel}
          </Link>
        </div>

        <div className="lg:justify-self-end">
          <Image
            src={CONTACT_CTA.map}
            alt="Ignitho office locations across the USA, UK, Sweden, India and Costa Rica"
            width={900}
            height={420}
            className="h-auto w-full max-w-[440px] lg:max-w-none lg:w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
