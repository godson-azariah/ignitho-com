import Image from 'next/image'
import Container from '@/components/layout/Container'
import { HERO, HERO_BADGES } from '@/data/home'

function ScrollCue({ targetId }) {
  return (
    <div className="scroll-down">
      <a href={`#${targetId}`} aria-label="Scroll Down">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.582 8.495c-.578-.613-1.544-.635-2.153-.059L16 21.159 2.571 8.436c-.61-.578-1.574-.553-2.153.059-.579.611-.553 1.576.058 2.155l14.477 13.715c.293.277.67.418 1.047.418s.756-.14 1.048-.418L31.524 10.65c.611-.579.637-1.544.058-2.155z" />
        </svg>
      </a>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero-banner flex min-h-[90vh] flex-col px-[10px] pb-[50px] pt-[calc(100px+var(--header-height))] tablet:px-10 tablet:pb-10 tablet:pt-[calc(40px+var(--header-height))] desktop:px-0 desktop:pb-[70px] desktop:pt-[calc(70px+var(--header-height))]">
      <Container className="flex grow flex-col">
        {/* Copy + visual */}
        <div className="flex flex-col tablet:flex-row">
          <div className="flex flex-col gap-5 p-[10px] tablet:w-[45.622%] tablet:shrink-0 tablet:grow-0">
            <p className="text-center text-[20px] font-semibold leading-none tracking-[-1.5px] text-ignitho-accent-blue tablet:text-left tablet:text-[22px]">
              {HERO.eyebrow}
            </p>

            <h1 className="mt-[10px] text-center text-[40px] font-bold leading-[52px] tracking-[-1.5px] text-white tablet:mt-5 tablet:text-left tablet:text-[29px] tablet:leading-[1.1em] desktop:text-[54px]">
              {HERO.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* 22/30 on phones, same as desktop — the live site keeps the lead
                at full size and only drops it in the tablet band. */}
            <p className="mt-[10px] text-center text-[22px] font-normal leading-[30px] text-[#FFFFFFC2] tablet:mt-0 tablet:text-left tablet:text-[18px] desktop:mt-[25px] desktop:text-[22px]">
              {HERO.body}
            </p>
          </div>

          <div className="flex flex-col justify-center p-[10px] text-center tablet:w-1/2 desktop:justify-start">
            <Image
              src={HERO.visual.src}
              alt={HERO.visual.alt}
              width={HERO.visual.width}
              height={HERO.visual.height}
              priority
              className="mx-auto h-[250px] w-full max-w-[350px] tablet:w-auto desktop:h-[430px] desktop:max-w-[550px]"
            />
          </div>
        </div>

        {/* Trust badges */}
        <div className="isg flex flex-wrap items-start justify-center tablet:items-center desktop:pt-[30px]">
          {HERO_BADGES.map((badge) => (
            <div key={badge.src} className="flex w-1/2 flex-col p-[10px] tablet:w-1/5">
              <Image
                src={badge.src}
                alt={badge.alt}
                width={650}
                height={340}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        <ScrollCue targetId={HERO.scrollTargetId} />
      </Container>
    </section>
  )
}
