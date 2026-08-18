import Link from "next/link";

const SIZES = {
  sm: "px-6 py-2.5 text-base font-medium",
  md: "px-8 py-3 text-lg font-semibold",
};

const VARIANTS = {
  solid: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-white/50 text-white hover:bg-white/10",
};

/** The site's pill CTA. Renders a Link for internal hrefs, <a> for external. */
export default function Button({
  href = "#",
  size = "sm",
  variant = "solid",
  className = "",
  children,
}) {
  const cls = `inline-flex items-center gap-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${SIZES[size]} ${VARIANTS[variant]} ${className}`;
  const external = /^https?:/.test(href);

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
