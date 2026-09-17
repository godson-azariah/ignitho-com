/**
 * Centred section title + supporting line, using the site's h2 scale
 * (54px desktop / 29px tablet / 41px mobile) and the violet sub-copy.
 */
export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <div className="flex flex-col p-[10px]">
        {/* 40/52 on phones, measured off the live site — it deliberately does
            not shrink its headings there. */}
        <h2 className="mt-[10px] text-center text-[40px] font-bold leading-[52px] tracking-[-1.5px] text-ignitho-text tablet:mt-5 tablet:text-[29px] tablet:leading-[1.1em] desktop:text-[54px]">
          {title}
        </h2>
      </div>

      {subtitle ? (
        <p className="mx-auto max-w-[76ch] text-center text-[22px] font-normal leading-[30px] text-ignitho-purple-ink text-balance tablet:text-[18px] desktop:text-[22px]">
          {subtitle}
        </p>
      ) : null}
    </>
  )
}
