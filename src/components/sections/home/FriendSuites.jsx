import { SUITES } from '@/lib/pages/ai-suites'

/*
  The three foundation suites, under the FRIEND card.

  Same card as Our Services further down the page: it reuses `.frugal-card`
  wholesale - the gradient, the top sheen, the corner glow, the lift on hover -
  so the home page keeps one card, not two.

  The copy is read from the suites data rather than restated here, so these and
  the Friend AI page can never drift apart.
*/

/* Where the title breaks, so the wrap does not drift with card width. */
const TITLE_LINES = {
  'Data Engineering Agentic Suite': ['Data Engineering', 'Agentic Suite'],
  'Data Analytics Agentic Suite': ['Data Analytics', 'Agentic Suite'],
  'Trust & Governance Agentic Suite': ['Trust & Governance', 'Agentic Suite'],
}

export default function FriendSuites() {
  const foundations = SUITES.filter((suite) => suite.type === 'foundation')

  return (
    <div className="flex flex-col pt-[clamp(34px,3.4vw,60px)]">
      <div className="frugal-cards friend-suite-cards">
        {foundations.map((suite) => {
          const [line1, line2] = TITLE_LINES[suite.name] ?? [suite.name, '']
          return (
            <article key={suite.id} className="frugal-card flex flex-col">
              <div className="frugal-card-header">
                <h3>
                  <span className="block">{line1}</span>
                  {line2 ? <span className="block">{line2}</span> : null}
                </h3>
                <div className="icon-wrap">
                  <suite.icon aria-hidden="true" strokeWidth={1.8} />
                </div>
              </div>

              {/* one unit, so it can sit on the card's floor */}
              <div className="relative z-[2]">
                <div className="solution-divider-frug" />
                <p className="text-[16px] leading-[26px] text-white/88">{suite.tagline}</p>
              </div>

            </article>
          )
        })}
      </div>
    </div>
  )
}
