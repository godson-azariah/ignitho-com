import Image from "next/image";

/**
 * Infinite logo strip. The list is rendered twice and translated by -50%, so the
 * loop is seamless without JS. Respects prefers-reduced-motion.
 */
export default function LogoMarquee({ logos, className = "" }) {
  const doubled = [...logos, ...logos];

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      // fade the strip out at both edges
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <ul className="flex w-max animate-marquee items-center gap-14 motion-reduce:animate-none">
        {doubled.map((logo, i) => (
          <li key={`${logo.src}-${i}`} className="shrink-0">
            <Image
              src={logo.src}
              alt={i < logos.length ? logo.alt : ""}
              aria-hidden={i >= logos.length}
              width={240}
              height={76}
              className="h-14 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
