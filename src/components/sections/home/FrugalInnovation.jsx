import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FRUGAL_INNOVATION } from '@/data/home'
import FriendReveal from './FriendReveal'

export default function FrugalInnovation() {
  const { title, subtitle, friend } = FRUGAL_INNOVATION

  // The bottom padding is larger than the top on purpose: the heading's line box adds
  // leading above its text, so matching the numbers would leave the closing line sitting
  // visibly tighter to the next section. These values make the gap above the heading and
  // the gap below the caption measure the same.
  return (
    <section
      id="frug-sec"
      className="second-section flex flex-col px-[10px] pb-[84px] pt-[50px] tablet:px-10 tablet:pt-10 desktop:px-0 desktop:pb-[124px] desktop:pt-20"
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
