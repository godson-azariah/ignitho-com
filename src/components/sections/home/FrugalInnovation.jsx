import Image from 'next/image'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FRUGAL_INNOVATION } from '@/data/home'
import FriendReveal from './FriendReveal'
import FriendSuites from './FriendSuites'

export default function FrugalInnovation() {
  const { title, subtitle, friend } = FRUGAL_INNOVATION

  /* The artwork is the band's own ground rather than a card in the middle of
     it, and it is hung off the lockup instead of off the section's top edge.

     That is what holds the sunrise just under the line at every width. Pinned
     to the top, the picture grows with the viewport while the copy on it does
     not, so past about 1500px the sun slid below the cards and out of the
     band altogether. Measured from a marker beneath the text instead, it stays
     put. */
  return (
    <section
      id="frug-sec"
      className="second-section relative isolate flex flex-col overflow-hidden px-[10px] pb-[50px] pt-[50px] tablet:px-10 tablet:pb-10 tablet:pt-10 desktop:px-0 desktop:pb-20 desktop:pt-20"
    >
      <div className="frug-backdrop" aria-hidden="true" />

      <Container className="relative z-10 flex flex-col gap-5">
        <SectionHeading title={title} subtitle={subtitle} />
        <FriendReveal friend={friend} />

        <div className="frug-sun-anchor" aria-hidden="true">
          <div className="frug-art">
            <Image
              src="/images/2nd-section-background.png"
              alt=""
              fill
              sizes="(max-width: 767px) 190vw, (max-width: 1024px) 130vw, 100vw"
              priority={false}
              className="object-cover object-center"
            />
            <span className="frug-art-wash" />
          </div>
        </div>

        <FriendSuites />
      </Container>
    </section>
  )
}
