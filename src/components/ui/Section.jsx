import Container from "./Container";

/**
 * A full-bleed band with the site's standard vertical rhythm.
 * `tone` picks one of the three background treatments used throughout.
 */
/* Surfaces are flat fills sampled from the original render, not gradients. */
const TONES = {
  white: "bg-white",
  lavender: "bg-[#f5f0ff]",
  brand: "bg-brand-gradient text-white",
};

export default function Section({
  tone = "white",
  className = "",
  containerClassName = "",
  children,
  ...rest
}) {
  return (
    <section className={`${TONES[tone]} py-16 sm:py-20 ${className}`} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Centred eyebrow + title + subtitle used above most card grids. */
export function SectionHeading({ title, subtitle, align = "center", tone = "dark" }) {
  return (
    // 54/700 lh 59.4 ls -1.5 over a 22/400 lh 30 lead, full width so the lead
    // stays on one line — measured from the original.
    <header className={`${align === "center" ? "text-center" : ""} mb-12`}>
      <h2
        className={`text-[34px] leading-[1.1] tracking-[-1px] sm:text-[44px] lg:text-[54px] lg:leading-[59.4px] lg:tracking-[-1.5px] ${
          tone === "dark" ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-[21px] text-[17px] leading-[26px] lg:text-[22px] lg:leading-[30px] ${
            tone === "dark" ? "text-muted" : "text-white/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
