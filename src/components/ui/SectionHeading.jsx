/**
 * Centred section title + supporting line, using the site's h2 scale
 * (54px desktop / 29px tablet / 41px mobile) and the violet sub-copy.
 */
export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <div className="flex flex-col p-[10px]">
        <h2 className="mt-[10px] text-center text-[41px] font-bold leading-[1.3em] tracking-[-1.5px] text-ignitho-text tablet:mt-5 tablet:text-[29px] tablet:leading-[1.1em] desktop:text-[54px]">
          {title}
        </h2>
      </div>

      {subtitle ? (
        <p className="text-center text-[22px] font-normal leading-[30px] text-ignitho-purple-ink">
          {subtitle}
        </p>
      ) : null}
    </>
  )
}
