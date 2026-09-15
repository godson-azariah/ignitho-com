import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FRUGAL_INNOVATION } from '@/data/home'
import FriendReveal from './FriendReveal'
import FriendSuites from './FriendSuites'

export default function FrugalInnovation() {
  const { title, subtitle, friend } = FRUGAL_INNOVATION

  // The scene is a contained card now, so it keeps its own width and the
  // section goes back to ordinary padding top and bottom.
  return (
    <section
      id="frug-sec"
      className="second-section flex flex-col px-[10px] pb-[50px] pt-[50px] tablet:px-10 tablet:pb-10 tablet:pt-10 desktop:px-0 desktop:pb-20 desktop:pt-20"
    >
      <Container className="flex flex-col gap-5">
        <SectionHeading title={title} subtitle={subtitle} />
      </Container>
      <Container>
        <FriendReveal friend={friend} />
        <FriendSuites />
      </Container>
    </section>
  )
}
