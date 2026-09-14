import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FRUGAL_INNOVATION } from '@/data/home'
import FriendReveal from './FriendReveal'

export default function FrugalInnovation() {
  const { title, subtitle, friend } = FRUGAL_INNOVATION

  return (
    <section
      id="frug-sec"
      className="second-section flex flex-col px-[10px] pb-0 pt-[50px] tablet:px-10 tablet:pb-0 tablet:pt-10 desktop:px-0 desktop:pb-0 desktop:pt-20"
    >
      <Container className="flex flex-col gap-5">
        <SectionHeading title={title} subtitle={subtitle} />
      </Container>
      {/* The scene runs edge to edge and down to the section's bottom. */}
      <div className="-mx-[10px] tablet:-mx-10 desktop:mx-0">
        <FriendReveal friend={friend} />
      </div>
    </section>
  )
}
