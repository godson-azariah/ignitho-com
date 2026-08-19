import Image from "next/image";

/**
 * Travel-only "Where Domain Expertise Meets Data Mastery" band.
 *
 * Measured from the original at 1440w — band 1372 tall on white, content
 * capped at 1180 (x=130), inner columns 550 + 60 gap:
 *   72 top -> heading 1180x120 (44/700 lh60)
 *    8     -> lead 1180x73 (22/400 lh36.3)
 *  120     -> gap heading 550 wide (24/600 lh31.2 #7a00c2)
 *   20     -> gap body 550 wide (22/400 lh36.3)
 *   85     -> logo lockup (Ignitho 158x60, TroyAvi 209x51, 14px gaps)
 *   46     -> "Why this combination is rare" (44/700 lh60)
 *   24     -> 3 x 362x289 cards, 20 gaps, radius 25
 *   80 bottom
 */
export default function PartnershipBand({ data }) {
  const { titleTop, titleAccent, subtitleLines, gap, quote, logos, rareTitle, rareCards } = data;

  return (
    <section className="trap-section pb-[52px] pt-[48px] lg:pb-[80px] lg:pt-[72px]">
      <div className="mx-auto w-full max-w-[1256px] px-5 lg:px-[38px]">
        <h2 className="text-center text-[29px] font-bold leading-[34.8px] text-[#1d0f2a] sm:text-[38px] sm:leading-[1.3] lg:text-[44px] lg:leading-[60px]">
          <span className="block">{titleTop}</span>
          <span className="block text-[#9c1ad4]">{titleAccent}</span>
        </h2>

        <p className="mt-[17px] text-center text-[20px] leading-[33px] text-muted lg:mt-[8px] lg:text-[22px] lg:leading-[36.3px]">
          {subtitleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        {/* the gap, beside the pull quote: two 550px columns, 60px apart */}
        <div className="mx-auto mt-[56px] grid max-w-[1160px] gap-10 lg:mt-[120px] lg:grid-cols-2 lg:gap-[40px] xl:grid-cols-[550px_550px] xl:gap-[60px]">
          <div>
            <p className="text-center text-[18px] font-semibold leading-[21.6px] text-[#00a274] lg:text-left">{gap.eyebrow}</p>
            <h3 className="mt-3 text-center text-[21.9px] font-semibold leading-[28.45px] text-[#7a00c2] lg:text-left lg:text-[24px] lg:leading-[31.2px]">
              {gap.heading}
            </h3>
            <p className="mt-[20px] text-center text-[20px] leading-[33px] text-muted lg:text-[22px] lg:leading-[36.3px]">
              {gap.body}
            </p>
          </div>

          <blockquote className="relative self-center rounded-[18px] border border-[rgba(122,0,194,0.35)] bg-[rgba(88,0,200,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] px-[20px] py-[24px] text-center text-[18px] font-medium italic leading-[32.4px] text-black lg:px-[36px] lg:py-[32px] lg:text-[22px] lg:leading-[41.8px]">
            {/* the live site hangs this off the box as a ::before — a green
                opening quote riding above its top-left corner */}
            <span
              aria-hidden="true"
              className="absolute -top-[14px] left-[18px] font-serif text-[58px] font-medium italic leading-[58px] text-[#00a274] lg:-top-[22px] lg:left-[28px] lg:text-[78px] lg:leading-[78px]"
            >
              &ldquo;
            </span>
            {quote}
          </blockquote>
        </div>

        {/* Ignitho x TroyAvi lockup. Measured off the original at 1440w:
            Ignitho 158x60 and TroyAvi 209x51 on 14px gaps, split by a 36px
            pipe glyph rather than a drawn rule. The two marks do not share a
            centre line — TroyAvi rides 3px above Ignitho's top edge and the
            pipe sits 12px below it. */}
        {/* Three tracks with the divider in the middle 'auto' column, so the
            pipe lands on the container's centre line — and therefore the
            screen's — rather than wherever the two marks happen to meet. */}
        <div className="mt-[56px] grid grid-cols-[1fr_auto_1fr] items-start lg:mt-[85px]">
          <Image
            src={logos[0].src}
            alt={logos[0].alt}
            width={logos[0].width}
            height={logos[0].height}
            className="h-[55px] w-auto justify-self-end object-contain pr-[10px] sm:h-[60px] sm:pr-[14px]"
          />
          <span aria-hidden="true" className="mt-[8px] text-[26px] leading-none text-[#8d8d8d] sm:mt-[12px] sm:text-[36px]">
            |
          </span>
          <Image
            src={logos[1].src}
            alt={logos[1].alt}
            width={logos[1].width}
            height={logos[1].height}
            className="-mt-[2px] h-[36px] w-auto justify-self-start object-contain pl-[10px] sm:-mt-[3px] sm:h-[51px] sm:pl-[14px]"
          />
        </div>

        <h3 className="mt-[36px] text-center text-[30px] font-bold leading-[1.3] text-[#1d0f2a] sm:text-[38px] lg:mt-[46px] lg:text-[44px] lg:leading-[60px]">
          {rareTitle}
        </h3>

        <ul className="mx-auto mt-[24px] grid max-w-[1126px] gap-5 px-[10px] sm:grid-cols-2 sm:px-0 lg:grid-cols-3">
          {rareCards.map((c) => (
            <li
              key={c.badge}
              className="rounded-[25px] border border-[rgba(122,0,194,0.12)] bg-white px-[20px] pt-[30px] pb-[50px] text-center tablet:min-h-[289px] tablet:p-[20px] tablet:text-left"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-2 tablet:flex-nowrap tablet:items-start tablet:justify-start tablet:gap-4">
                <span
                  className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[20%] text-[14px] font-bold text-white"
                  style={{ backgroundImage: "linear-gradient(135deg, #5800c8, rgba(88, 0, 200, 0.52))" }}
                >
                  {c.badge}
                </span>
                <h4 className="w-fit max-w-[56%] text-[18px] font-bold leading-[23.4px] text-[#1d0f2a] tablet:w-auto tablet:max-w-none tablet:text-[20px] tablet:leading-[26px]">
                  {c.title}
                </h4>
              </div>
              <p className="mt-[24px] text-[18px] leading-[29.7px] text-muted tablet:mt-[22px] tablet:text-[16px] tablet:leading-[26.4px]">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
