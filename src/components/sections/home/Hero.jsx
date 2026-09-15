import Image from 'next/image'
import Container from '@/components/layout/Container'
import { HERO, HERO_BADGES } from '@/data/home'
import FriendWheel from './FriendWheel'

function ScrollCue({ targetId }) {
  return (
    <div className="scroll-down absolute bottom-2 left-1/2 -translate-x-1/2 desktop:bottom-3">
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
    <section className="hero-banner relative flex flex-col px-[10px] pb-12 pt-[calc(100px+var(--header-height))] tablet:px-10 tablet:pb-12 tablet:pt-[calc(40px+var(--header-height))] desktop:px-0 desktop:pb-[54px] desktop:pt-[calc(70px+var(--header-height))]">
      <Container className="flex flex-col">
        {/* Copy + visual */}
        {/* items-stretch hands the visual column the copy column's height, so
            the wheel can size itself to exactly the run of text beside it -
            eyebrow to last line - rather than to an arbitrary max-width */}
        <div className="flex flex-col tablet:flex-row tablet:items-stretch">
          <div className="flex flex-col gap-5 p-[10px] tablet:w-[48%] tablet:shrink-0 tablet:grow-0">
            <p className="text-center text-[20px] font-semibold leading-none tracking-[-1.5px] text-ignitho-accent-blue tablet:text-left tablet:text-[22px]">
              {HERO.eyebrow}
            </p>

            <h1 className="mt-[10px] text-center text-[40px] font-bold leading-[52px] tracking-[-1.5px] text-white tablet:mt-5 tablet:text-left tablet:text-[34px] tablet:leading-[1.08em] desktop:text-[66px] desktop:leading-[1.06em]">
              {HERO.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* 22/30 on phones, same as desktop — the live site keeps the lead
                at full size and only drops it in the tablet band. */}
            <p className="mt-[10px] text-center text-[22px] font-normal leading-[30px] text-[#FFFFFFC2] tablet:mt-0 tablet:text-left tablet:text-[18px] desktop:mt-[28px] desktop:max-w-[600px] desktop:text-[22px] desktop:leading-[34px]">
              {HERO.body}
            </p>
          </div>

          {/* From tablet up the wheel is taken out of flow and pinned to the
              column's top and bottom edges. In flow it would size itself off the
              column's width and then set the row height, which is backwards -
              the copy has to be what decides how tall the row is. The wrapper
              is what gets pinned, so the svg has a definite height to fill and
              can take its width from that. */}
          <div className="relative flex items-center justify-center p-[10px] tablet:w-[52%]">
            <div className="tablet:absolute tablet:inset-y-[10px] tablet:left-1/2 tablet:-translate-x-1/2">
              <FriendWheel className="mx-auto h-auto w-full max-w-[340px] tablet:h-full tablet:w-auto tablet:max-w-none" />
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="isg mt-2 flex flex-wrap items-start justify-center tablet:mt-4 tablet:items-center desktop:mt-6">
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
      </Container>

      <ScrollCue targetId={HERO.scrollTargetId} />
    </section>
  )
}
