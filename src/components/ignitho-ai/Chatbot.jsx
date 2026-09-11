"use client";

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Minimize2, Send } from 'lucide-react'

const SUGGESTIONS = [
  "What's the ROI?",
  'HIPAA Compliance?',
  'Deployment Time?',
  'Your Services?',
  'Leadership Team?',
]

const INITIAL_MESSAGE = {
  sender: 'bot',
  text: 'Hello! I am the Ignitho AI Assistant. How can I assist your executive team today?',
}

const KNOWN_TOPICS =
  'our services, industries (BFSI, Retail, Pharma, Media, Travel), leadership, partnerships, offices, certifications, careers, or case study results'

function buildResponse(query, fallbackCount) {
  const q = query.toLowerCase().trim()

  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening))\b/.test(q)) {
    return "Hello! I'm the Ignitho AI Assistant. Ask me about our services, industries, leadership, partnerships, offices, certifications, or how we help Fortune 500 companies with Data & AI."
  }

  if (/^(thanks|thank you|thx|ty|cheers|appreciate)\b/.test(q)) {
    return "You're very welcome. Is there anything else about Ignitho I can help clarify?"
  }

  // --- EXISTING RESPONSES (preserved verbatim) ---
  if (q.includes('roi') || q.includes('cost') || q.includes('save')) {
    return 'On average, Ignitho AI reduces routine operational overhead by 60% to 80% and cuts AI cloud API spending by up to 40% via CostPilot routing'
  }
  if (q.includes('security') || q.includes('hipaa') || q.includes('compliance') || q.includes('fda')) {
    return 'Ignitho AI is ISO 27001 certified and SOC2 Type II compliant. Our Fortress security firewall prevents data leaks, prompt attacks, and PII violations automatically'
  }
  if (q.includes('deploy') || q.includes('time') || q.includes('fast')) {
    return 'Because Ignitho AI relies on modular, pre-built accelerators, deployment takes days rather than custom multi-month software engineering cycles'
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach you') || q.includes('get in touch')) {
    return "You can reach Ignitho at info@ignitho.com or call 866-628-8776 (US). For press enquiries: Vineet Raman at vineet.raman@ignitho.com. We have offices in Tampa (HQ), New York, Richmond, Chicago, London, Brighton, Chennai, Bengaluru, and a delivery center in Costa Rica."
  }

  if (q.includes('career') || q.includes('job') || q.includes('hiring') || q.includes('vacancy') || q.includes('apply') || q.includes('recruit') || q.includes('opening')) {
    return "Thank you for your interest in Ignitho. We are always keen to connect with exceptional talent across Data, AI, and Engineering. To stay informed about new opportunities, we invite you to follow us on LinkedIn at linkedin.com/company/ignitho-technologies, where our team regularly shares openings."
  }

  if (q.includes('culture') || q.includes('value') || q.includes('employee') || q.includes('work life') || q.includes('work-life') || q.includes('life at')) {
    return "Ignitho's core values are Passion, Performance, and Integrity. Our culture is doer-first and flat - every Specialist reports to an outcome, not a hierarchy. You will work inside cross-functional Specialist PODs alongside AI Agents, with autonomy, role expansion, and global client exposure."
  }

  if (q.includes('leadership') || q.includes('leader') || q.includes('ceo') || q.includes('founder') || q.includes('cto') || q.includes('cso') || q.includes('management') || q.includes('roney') || q.includes('soloman') || q.includes('joseph') || q.includes('olassa') || q.includes('ashin') || q.includes('nugent')) {
    return "Ignitho's leadership is led by Roney Soloman (CEO & Co-Founder, 30+ years at HCLTech, Accenture, Cognizant, Mindtree, and NIIT Technologies) and Joseph Olassa (Co-Founder & Board Chair via Nuivio Ventures, formerly CEO, with 14 years at Mindtree). Other key leaders include Ashin Antony (CTO, leads AI Labs in Chennai), Scott Nugent (Chief Sales Officer, North America), Ramesh Ramaswamy (Chief Delivery Officer), and Chandraprakash Saravanan (CTO & Delivery Head)."
  }

  if (q.includes('who are you') || q.includes('what is ignitho') || q.includes('about ignitho') || q.includes('about the company') || q.includes('your company') || q.includes('company overview') || q.includes('tell me about') || q.includes('what do you do as a company')) {
    return "Ignitho Technologies is a Data & AI Specialists company founded in 2016, headquartered in Tampa, FL, with offices in the US, UK, and India. We orchestrate high-velocity Data & AI ecosystems for Fortune 500 enterprises - bridging complex technology and real-world ROI via our Frugal Innovation methodology, co-developed with the University of Cambridge."
  }

  if (q.includes('founded') || q.includes('established') || q.includes('started') || q.includes('history') || q.includes('how old')) {
    return "Ignitho was founded in 2016, originally headquartered out of London, UK. We now operate globally with corporate HQ in Tampa, Florida, and delivery centers across the US, UK, India, and Costa Rica. We are targeting $25M in revenue within 3 years."
  }

  if (q.includes('office') || q.includes('location') || q.includes('where are you') || q.includes('headquarter') || q.includes('hq') || q.includes('tampa') || q.includes('chennai') || q.includes('london') || q.includes('new york') || q.includes('bangalore') || q.includes('bengaluru') || q.includes('brighton') || q.includes('richmond') || q.includes('chicago') || q.includes('kochi')) {
    return "Ignitho offices: Tampa (Corporate HQ - 1211 Tech Blvd #23, FL 33619), New York, Richmond (Glen Allen, VA), Chicago, London (75 King William Street EC4N 7BE), Brighton (Sussex Innovation Centre), Chennai (Trendworks OMR, Perungudi), Bengaluru (HSR Layout), Kochi (Kerala), and a delivery center in Costa Rica."
  }

  if (q.includes('partner') || q.includes('h2o') || q.includes('domo') || q.includes('databricks') || q.includes('snowflake') || q.includes('microsoft') || q.includes('troyavi') || q.includes('alliance')) {
    return "Key partnerships: H2O.ai (strategic, Jan 2024 - domain-specific GenAI Accelerators), Domo (Partner Network, Jun 2023 - AI-enabled CDPs), plus Databricks, Snowflake, Microsoft, and TroyAvi (Travel). Our IDA accelerator cuts data processing time ~60%, and our CDP accelerator cuts implementation from 4-6 months to 2 weeks."
  }

  if (q.includes('certif') || q.includes('iso') || q.includes('soc2') || q.includes('soc 2') || q.includes('accredit')) {
    return "Ignitho is ISO 27001:2022 certified for global security standards, and our AI platform (Ignitho AI) is SOC 2 Type II compliant. We are also recognized by ISG as a Noteworthy Provider in Advanced Analytics & AI Services."
  }

  if (q.includes('award') || q.includes('recogni') || q.includes('isg') || q.includes('techmarketview') || q.includes('accolade')) {
    return "Ignitho has been recognized by ISG as a Noteworthy Provider in Advanced Analytics & AI Services (2025 Provider Lens report, US) and by TechMarketView for our disruptive approach to digital engineering."
  }

  if (q.includes('revenue') || q.includes('growth') || q.includes('size of company') || q.includes('how big') || q.includes('valuation')) {
    return "Ignitho is targeting $25 million in revenue within 3 years (as stated Aug 2024). We are expanding our India presence to 500 people via our new AI Centre in Chennai."
  }

  if (q.includes('bfsi') || q.includes('banking') || q.includes('financial') || q.includes('insurance') || q.includes('underwriting')) {
    return "For BFSI, Ignitho decouples growth from headcount using data engineering, advanced analytics, and applied AI - for predictive operations, anomaly detection, fraud and risk analytics, and workflow automation. Case result: slashed underwriting decision latency from 8 hours to 15 minutes via NLP Rule Engines."
  }
  if (q.includes('retail') || q.includes('cpg') || q.includes('manufacturing') || q.includes('supply chain') || q.includes('warehouse')) {
    return "For Retail, CPG & Manufacturing, our Agentic Commerce framework enhances existing ERP/CRM data without replacement - for dynamic pricing, unified stock visibility, and hyper-individualized customer journeys. Clients include Sainsbury's and Rue Gilt Group."
  }
  if (q.includes('pharma') || q.includes('healthcare') || q.includes('life science') || q.includes('hospital') || q.includes('clinical') || q.includes('patient')) {
    return "For Pharma & Healthcare, our Clinical Intelligence framework connects existing ERP, clinical, and patient data into a governance-ready intelligence layer. Clients: Amgen and American Red Cross. Results: 50% patient scheduling improvement, 35% turnaround reduction for a major UK hospital, and 72% implementation cost reduction."
  }
  if (q.includes('media') || q.includes('communication') || q.includes('publish') || q.includes('advertis')) {
    return "For Media & Communications, our Content Intelligence framework enhances existing CMS and ad platforms - for audience 360, recommendations, real-time price and offer optimization, and churn analytics. Clients: Fluent and Hearst. Result: 28% cost reduction in reporting and analytics ops."
  }
  if (q.includes('travel') || q.includes('logistics') || q.includes('transport') || q.includes('aviation') || q.includes('hospitality')) {
    return "For Travel, Transport & Logistics, Ignitho partners with TroyAvi to combine specialist Data & AI expertise with deep domain knowledge across Travel, Logistics, and Hospitality."
  }
  if (q.includes('industry') || q.includes('industries') || q.includes('vertical') || q.includes('sector') || q.includes('domains')) {
    return "Ignitho serves five core industries: BFSI (Banking, Financial Services & Insurance), Retail/CPG & Manufacturing, Pharma & Healthcare, Media & Communications, and Travel/Transport & Logistics - plus Infrastructure."
  }

  if (q.includes('data engineering') || q.includes('data lake') || q.includes('etl') || q.includes('pipeline') || q.includes('data warehouse') || q.includes('data migration')) {
    return "Our Data Engineering & Consulting pillar covers modern Data Warehouses and Data Lakes, real-time Data Streaming, ETL/ELT pipeline optimization, and cloud migration and modernization - all delivered via cross-functional Specialist PODs."
  }
  if (q.includes('analytics') || q.includes('business intelligence') || q.includes('dashboard') || q.includes('tableau') || q.includes('power bi') || q.includes('data science') || q.includes('predictive') || q.includes('forecast')) {
    return "Our Advanced Analytics & Data Science pillar covers self-service BI (Power BI, Tableau, Looker), predictive modeling and forecasting, KPI development and reporting automation, and advanced statistical analysis and data science advisory."
  }
  if (q.includes('automation') || q.includes('rpa') || q.includes('robotic') || q.includes('agentic') || q.includes('agent')) {
    return "Our Applied AI & Smart Automation pillar covers Machine Learning, Deep Learning, NLP, Computer Vision, Recommendation Systems, RPA, and our flagship Agentic AI suite - Ignitho AI. Pre-built, multi-agent accelerators that automate complex business workflows securely."
  }
  if (q.includes('ignitho ai') || q.includes('ai agent') || q.includes('ai product') || q.includes('ai platform')) {
    return "Ignitho AI is our flagship Agentic AI suite - pre-built, multi-agent accelerators that automate complex business workflows securely. It is SOC 2 Type II compliant with our Fortress security firewall preventing data leaks, prompt attacks, and PII violations automatically."
  }
  if (q.includes('service') || q.includes('offering') || q.includes('what do you offer') || q.includes('solution')) {
    return "Ignitho's three service pillars: (1) Data Engineering & Consulting, (2) Advanced Analytics & Data Science, and (3) Applied AI & Smart Automation (including our Agentic AI suite, Ignitho AI). All delivered via cross-functional Specialist PODs alongside AI Agents."
  }

  if (q.includes('technolog') || q.includes('tech stack') || q.includes('stack') || q.includes('tools') || q.includes('platform')) {
    return "Our stack spans: Data & AI (Python, SQL, Langchain, FastAPI, Snowflake, Databricks, AWS SageMaker, Power BI, Tableau, Looker); Web (React.js, Node.js, Angular, PHP, React Native); Cloud (AWS, Azure, GCP); and AI models (ChatGPT, Llama, Gemini, Langchain, Langsmith, H2O.ai GenAI)."
  }

  if (q.includes('case stud') || q.includes('result') || q.includes('metric') || q.includes('outcome') || q.includes('success stor') || q.includes('example')) {
    return "Key Ignitho results: 50% patient scheduling improvement (healthcare), underwriting decision latency from 8 hours to 15 minutes (BFSI), 72% implementation cost reduction (Life Sciences), 35% turnaround reduction for a UK hospital, 28% media reporting cost reduction, ~60% data processing time reduction via IDA, and 35% cost reduction in autonomous infrastructure maintenance."
  }

  if (q.includes('frugal') || q.includes('methodology') || q.includes('pod') || q.includes('delivery model') || q.includes('how do you work') || q.includes('engagement')) {
    return "Ignitho's Frugal Innovation - The Art of Doing More with Less - was co-developed with the University of Cambridge. We deliver via Specialist PODs: cross-functional teams working alongside AI Agents, embedded in your organization. Engagements range from Tactical Intervention (days) to Agile Scaling to multi-year modernization."
  }

  // --- PROFESSIONAL FALLBACK SYSTEM (3 layers) ---
  if (fallbackCount === 0) {
    return "I'm not quite sure I caught that. Could you try rephrasing? I can help with questions about " + KNOWN_TOPICS + "."
  }
  if (fallbackCount === 1) {
    return "I may not have the answer to that specific question. Here are topics I am well-versed in: " + KNOWN_TOPICS + ". You can also reach our team directly at info@ignitho.com."
  }
  return "I'd recommend connecting with our team directly for this. You can email info@ignitho.com or call 866-628-8776. Is there anything else I can help with regarding Ignitho?"
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -3, 0], opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.15,
          }}
          className="block h-1.5 w-1.5 rounded-full bg-ignitho-accent-blue"
        />
      ))}
    </div>
  )
}

function Caret() {
  return (
    <motion.span
      animate={{ opacity: [1, 0.15, 1] }}
      transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      className="ml-0.5 inline-block h-3 w-[2px] translate-y-[1px] rounded-sm bg-ignitho-accent-blue align-middle"
    />
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [inputMessage, setInputMessage] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [typingState, setTypingState] = useState({ index: -1, chars: 0 })
  const [usedSuggestions, setUsedSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [fallbackCount, setFallbackCount] = useState(0)

  const bottomRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const lastTypedIndexRef = useRef(0)
  const lastScrollTopRef = useRef(0)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen, isThinking, typingState])

  useEffect(() => {
    const lastIdx = messages.length - 1
    const last = messages[lastIdx]
    if (last && last.sender === 'bot' && lastIdx > lastTypedIndexRef.current) {
      lastTypedIndexRef.current = lastIdx
      setTypingState({ index: lastIdx, chars: 0 })
    }
  }, [messages])

  useEffect(() => {
    if (typingState.index < 0) return
    const msg = messages[typingState.index]
    if (!msg) return
    if (typingState.chars >= msg.text.length) {
      setTypingState({ index: -1, chars: 0 })
      return
    }
    const ch = msg.text.charAt(typingState.chars) || ''
    let delay = 11
    if (ch === '.' || ch === '!' || ch === '?') delay = 90
    else if (ch === ',' || ch === ';' || ch === ':') delay = 55
    else if (ch === ' ') delay = 22

    const t = setTimeout(() => {
      setTypingState(function (s) {
        return { index: s.index, chars: s.chars + 1 }
      })
    }, delay)
    return () => clearTimeout(t)
  }, [typingState, messages])

  const handleScroll = (e) => {
    const el = e.currentTarget
    const current = el.scrollTop
    const last = lastScrollTopRef.current
    const atBottom = el.scrollHeight - current - el.clientHeight < 24

    if (atBottom) {
      setShowSuggestions(true)
    } else if (current < last - 8) {
      setShowSuggestions(false)
    }
    lastScrollTopRef.current = current
  }

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage
    if (!query.trim() || isThinking) return

    setMessages((prev) => prev.concat([{ sender: 'user', text: query }]))
    if (!textToSend) setInputMessage('')

    if (textToSend && SUGGESTIONS.includes(textToSend)) {
      setUsedSuggestions((prev) => prev.concat([textToSend]))
    }

    setIsThinking(true)

    const response = buildResponse(query, fallbackCount)

    const isFallback =
      response.indexOf("I'm not quite sure") === 0 ||
      response.indexOf('I may not have the answer') === 0 ||
      response.indexOf("I'd recommend connecting") === 0
    if (isFallback) setFallbackCount((c) => c + 1)
    else setFallbackCount(0)

    setTimeout(() => {
      setIsThinking(false)
      setMessages((prev) => prev.concat([{ sender: 'bot', text: response }]))
    }, 1100)
  }

  const visibleSuggestions = SUGGESTIONS.filter(
    (s) => !usedSuggestions.includes(s)
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 12 }}
            transition={{ type: 'spring', stiffness: 360, damping: 26 }}
            style={{ transformOrigin: 'bottom right' }}
            onClick={() => setIsOpen(true)}
            className="absolute bottom-0 right-0 flex w-max items-center gap-2.5 rounded-full border border-white/15 bg-ignitho-teal p-3 pr-4 text-white shadow-lg shadow-black/25 transition-all hover:bg-ignitho-teal-hover hover:shadow-xl"
          >
            <Bot className="h-5 w-5" />
            <span className="hidden text-[11px] font-semibold tracking-wide whitespace-nowrap sm:inline">
              Ask Ignitho AI
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
            style={{ transformOrigin: 'bottom right' }}
            className="absolute bottom-0 right-0 flex h-[500px] w-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0620] text-white shadow-2xl shadow-black/40 sm:w-96"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] bg-black/25 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-ignitho-teal text-white">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="leading-tight">
                  <h4 className="text-[12px] font-semibold text-white">Ignitho AI Assistant</h4>
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-ignitho-teal" />
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Minimize chat"
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
            </div>

            {/* Message list with custom scrollbar:
                - WebKit: transparent track + subtle rounded thumb, thumb brightens on hover
                - Firefox: scrollbar-width + scrollbar-color fallback
                - pr-2 keeps the thumb from crowding the bubbles */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="
                flex-1 space-y-3.5 overflow-y-auto py-4 pl-4 pr-2 text-xs
                [scrollbar-width:thin]
                [scrollbar-color:rgba(255,255,255,0.15)_transparent]
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar]:bg-transparent
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-track]:border-0
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-white/15
                [&::-webkit-scrollbar-thumb]:border-0
                [&::-webkit-scrollbar-thumb]:bg-clip-padding
                hover:[&::-webkit-scrollbar-thumb]:bg-white/25
                [&::-webkit-scrollbar-corner]:bg-transparent
              "
            >
              {messages.map(function (msg, index) {
                const isTypingThis = typingState.index === index
                const visible = isTypingThis ? msg.text.slice(0, typingState.chars) : msg.text
                const showCaret = isTypingThis && typingState.chars < msg.text.length

                return (
                  <div
                    key={index}
                    className={
                      msg.sender === 'user'
                        ? 'flex gap-2 justify-end'
                        : 'flex gap-2 justify-start'
                    }
                  >
                    {msg.sender === 'bot' && (
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ignitho-teal/15 text-ignitho-accent-blue">
                        <Bot className="h-3 w-3" />
                      </div>
                    )}
                    <div
                      className={
                        msg.sender === 'user'
                          ? 'max-w-[82%] whitespace-pre-wrap break-words rounded-2xl rounded-br-md bg-ignitho-teal px-3.5 py-2.5 leading-relaxed text-white'
                          : 'max-w-[82%] whitespace-pre-wrap break-words rounded-2xl rounded-bl-md bg-white/[0.06] px-3.5 py-2.5 leading-relaxed text-slate-200'
                      }
                    >
                      {visible}
                      {showCaret ? <Caret /> : null}
                    </div>
                  </div>
                )
              })}

              <AnimatePresence>
                {isThinking && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.18 }}
                    className="flex gap-2"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ignitho-teal/15 text-ignitho-accent-blue">
                      <Bot className="h-3 w-3" />
                    </div>
                    <div className="rounded-2xl rounded-bl-md bg-white/[0.06] px-3 py-2.5">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            <AnimatePresence initial={false}>
              {showSuggestions && visibleSuggestions.length > 0 && (
                <motion.div
                  key="suggestions"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-1.5 border-t border-white/[0.07] bg-black/15 px-3 py-2">
                    {visibleSuggestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSend(q)}
                        disabled={isThinking}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] text-ignitho-accent-blue transition-colors hover:bg-ignitho-teal/25 disabled:opacity-40"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-2 border-t border-white/[0.07] bg-black/25 p-3">
              <input
                type="text"
                placeholder="Ask about Ignitho AI ROI, security, or deployment..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend()
                }}
                disabled={isThinking}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-ignitho-accent-blue focus:outline-none disabled:opacity-60"
              />
              <button
                onClick={() => handleSend()}
                disabled={isThinking}
                aria-label="Send message"
                className="rounded-xl bg-ignitho-teal p-2 text-white transition-colors hover:bg-ignitho-teal-hover disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}