import { FaChartLine, FaCoins, FaScrewdriverWrench } from 'react-icons/fa6'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FRUGAL_INNOVATION } from '@/data/home'

const ICONS = {
  coins: FaCoins,
  tools: FaScrewdriverWrench,
  chart: FaChartLine,
}

export default function FrugalInnovation() {
  const { title, subtitle, cards } = FRUGAL_INNOVATION

  return (
    <section
      id="frug-sec"
      className="second-section flex flex-col px-[10px] py-[50px] tablet:px-10 tablet:py-10 desktop:px-0 desktop:pb-[88px] desktop:pt-20"
    >
      <Container className="flex flex-col gap-5">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="flex flex-col py-5">
          <div className="frugal-cards">
            {cards.map((card) => {
              const Icon = ICONS[card.icon]

              return (
                <article key={card.title} className="frugal-card">
                  <div className="frugal-card-header">
                    <h3>{card.title}</h3>
                    <div className="icon-wrap">
                      <Icon aria-hidden="true" />
                    </div>
                  </div>

                  <div className="solution-divider-frug" />

                  <p>{card.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
