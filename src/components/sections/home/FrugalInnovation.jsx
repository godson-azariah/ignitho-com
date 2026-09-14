import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FRUGAL_INNOVATION } from '@/data/home'
import FriendReveal from './FriendReveal'

export default function FrugalInnovation() {
  const { title, subtitle, friend } = FRUGAL_INNOVATION

  return (
    <section
      id="frug-sec"
      className="second-section flex flex-col px-[10px] py-[50px] tablet:px-10 tablet:py-10 desktop:px-0 desktop:pb-[96px] desktop:pt-20"
    >
      <Container className="flex flex-col gap-5">
        <SectionHeading title={title} subtitle={subtitle} />
        <FriendReveal friend={friend} />
      </Container>
    </section>
  )
}
