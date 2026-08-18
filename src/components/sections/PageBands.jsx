import Image from "next/image";
import Container from "../ui/Container";

/**
 * Renders a page from its extracted band model.
 *
 * Each band carries a title, an optional lead paragraph, and a set of
 * heading/body pairs that the original lays out as a card grid. Bands flagged
 * `hero` use the brand gradient; the rest alternate on the lavender wash.
 */

function Cards({ items }) {
  if (!items.length) return null;
  const cols =
    items.length >= 5
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : items.length === 4
        ? "sm:grid-cols-2"
        : `sm:grid-cols-${Math.min(items.length, 3)}`;

  return (
    <ul className={`mt-12 grid gap-6 ${cols}`}>
      {items.map((it, i) => (
        <li
          key={`${it.title}-${i}`}
          className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-brand/5"
        >
          <h3 className="text-[20px] leading-snug text-ink">{it.title}</h3>
          {it.body && (
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {it.body}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

function Band({ band, index }) {
  const { title, lead, items = [], prose = [], images = [], hero } = band;

  if (hero) {
    return (
      <section className="bg-brand-gradient text-white">
        <Container className="py-16 lg:py-20">
          <h1 className="max-w-4xl text-[32px] sm:text-[42px] lg:text-[50px]">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.7] text-white/80">
              {lead}
            </p>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className={index % 2 ? "bg-white" : "bg-lavender-gradient"}>
      <Container className="py-16 lg:py-20">
        {title && (
          <h2 className="max-w-4xl text-[30px] sm:text-[38px] lg:text-[44px]">
            {title}
          </h2>
        )}
        {lead && (
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-muted">
            {lead}
          </p>
        )}

        <Cards items={items} />

        {prose.length > 0 && (
          <div className="mt-8 max-w-4xl space-y-4">
            {prose.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.8] text-muted">
                {p}
              </p>
            ))}
          </div>
        )}

        {images.length > 0 && (
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {images.map((src, i) => (
              <li key={`${src}-${i}`}>
                <Image
                  src={src}
                  alt=""
                  width={260}
                  height={180}
                  className="h-auto max-h-[180px] w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

export default function PageBands({ bands }) {
  return bands.map((band, i) => (
    <Band key={i} band={band} index={i} />
  ));
}
