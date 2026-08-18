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
        <h2 className="text-center text-[30px] font-bold leading-[1.3] text-[#1d0f2a] sm:text-[38px] lg:text-[44px] lg:leading-[60px]">
          <span className="block">{titleTop}</span>
          <span className="block text-[#9c1ad4]">{titleAccent}</span>
        </h2>

        <p className="mt-[8px] text-center text-[18px] leading-[30px] text-muted lg:text-[22px] lg:leading-[36.3px]">
          {subtitleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        {/* the gap, beside the pull quote: two 550px columns, 60px apart */}
        <div className="mx-auto mt-[56px] grid max-w-[1160px] gap-10 lg:mt-[120px] lg:grid-cols-2 lg:gap-[40px] xl:grid-cols-[550px_550px] xl:gap-[60px]">
          <div>
            <p className="text-[15px] font-semibold text-[#0f9d58]">{gap.eyebrow}</p>
            <h3 className="mt-3 text-[20px] font-semibold leading-[28px] text-[#7a00c2] lg:text-[24px] lg:leading-[31.2px]">
              {gap.heading}
            </h3>
            <p className="mt-[20px] text-[18px] leading-[30px] text-muted lg:text-[22px] lg:leading-[36.3px]">
              {gap.body}
            </p>
          </div>

          <blockquote className="self-center rounded-[16px] bg-[#f0e6fd] px-[34px] py-[32px] text-[17px] italic leading-[30px] text-[#3d2a5c] lg:text-[19px] lg:leading-[32px]">
            {quote}
          </blockquote>
        </div>

        {/* Ignitho x TroyAvi lockup. Measured off the original at 1440w:
            Ignitho 158x60 and TroyAvi 209x51 on 14px gaps, split by a 36px
            pipe glyph rather than a drawn rule. The two marks do not share a
            centre line — TroyAvi rides 3px above Ignitho's top edge and the
            pipe sits 12px below it. */}
        <div className="mt-[56px] flex items-start justify-center gap-[10px] sm:gap-[14px] lg:mt-[85px]">
          <Image
            src={logos[0].src}
            alt={logos[0].alt}
            width={logos[0].width}
            height={logos[0].height}
            className="h-[42px] w-auto object-contain sm:h-[60px]"
          />
          <span aria-hidden="true" className="mt-[8px] text-[26px] leading-none text-[#8d8d8d] sm:mt-[12px] sm:text-[36px]">
            |
          </span>
          <Image
            src={logos[1].src}
            alt={logos[1].alt}
            width={logos[1].width}
            height={logos[1].height}
            className="-mt-[2px] h-[36px] w-auto object-contain sm:-mt-[3px] sm:h-[51px]"
          />
        </div>

        <h3 className="mt-[36px] text-center text-[30px] font-bold leading-[1.3] text-[#1d0f2a] sm:text-[38px] lg:mt-[46px] lg:text-[44px] lg:leading-[60px]">
          {rareTitle}
        </h3>

        <ul className="mx-auto mt-[24px] grid max-w-[1126px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rareCards.map((c) => (
            <li
              key={c.badge}
              className="min-h-[289px] rounded-[25px] border border-[#ece5f8] bg-white p-[28px]"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-[42px] min-w-[54px] items-center justify-center rounded-[11px] px-2 text-[13px] font-bold text-white"
                  style={{ backgroundImage: "linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)" }}
                >
                  {c.badge}
                </span>
                <h4 className="text-[20px] font-bold leading-[26px] text-[#1d0f2a]">{c.title}</h4>
              </div>
              <p className="mt-[22px] text-[16px] leading-[26.4px] text-muted">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
