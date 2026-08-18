"use client";

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Minimize2, Send } from 'lucide-react'

const SUGGESTIONS = ["What's the ROI?", 'HIPAA Compliance?', 'Deployment Time?']

const INITIAL_MESSAGE = {
  sender: 'bot',
  text: 'Hello! I am the Ignitho AI Assistant. How can I assist your executive team today?',
}

function buildResponse(query) {
  const q = query.toLowerCase()
  if (q.includes('roi') || q.includes('cost') || q.includes('save')) {
    return 'On average, Ignitho AI reduces routine operational overhead by 60% to 80% and cuts AI cloud API spending by up to 40% via CostPilot routing'
  }
  if (q.includes('security') || q.includes('hipaa') || q.includes('compliance') || q.includes('fda')) {
    return 'Ignitho AI is ISO 27001 certified and SOC2 Type II compliant. Our Fortress security firewall prevents data leaks, prompt attacks, and PII violations automatically'
  }
  if (q.includes('deploy') || q.includes('time') || q.includes('fast')) {
    return 'Because Ignitho AI relies on modular, pre-built accelerators, deployment takes days rather than custom multi-month software engineering cycles'
  }
  return 'Ignitho AI delivers pre-built, multi-agent AI accelerators that automate complex business workflows securely. Would you like to schedule an executive briefing with our leadership team?'
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [inputMessage, setInputMessage] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage
    if (!query.trim()) return

    setMessages((prev) => [...prev, { sender: 'user', text: query }])
    if (!textToSend) setInputMessage('')

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: buildResponse(query) }])
    }, 800)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ type: 'spring', stiffness: 340, damping: 24 }}
            style={{ transformOrigin: 'bottom right' }}
            onClick={() => setIsOpen(true)}
            className="absolute bottom-0 right-0 w-max bg-ignitho-teal hover:bg-ignitho-teal-hover text-white p-4 rounded-full shadow-2xl flex items-center gap-3 transition-colors hover:scale-105 border border-white/20 group"
          >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <div className="w-2.5 h-2.5 rounded-full bg-ignitho-accent-blue border-2 border-ignitho-teal absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-xs font-extrabold pr-2 hidden sm:inline whitespace-nowrap">Ask Ignitho AI</span>
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            style={{ transformOrigin: 'bottom right' }}
            className="absolute bottom-0 right-0 w-80 sm:w-96 bg-[#0A0620] border border-white/10 text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
          <div className="p-4 bg-black/30 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-ignitho-teal rounded-xl text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Ignitho AI Assistant</h4>
                <span className="text-[10px] text-ignitho-accent-blue font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ignitho-teal animate-ping" /> Online • Governed AI
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-ignitho-teal/20 text-ignitho-accent-blue border border-ignitho-teal/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-ignitho-teal text-white rounded-br-none'
                      : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="px-3 py-2 bg-black/20 border-t border-white/10 flex flex-wrap gap-1.5">
            {SUGGESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-[10px] bg-white/10 hover:bg-ignitho-teal/30 text-ignitho-accent-blue px-2.5 py-1 rounded-full border border-white/10 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="p-3 bg-black/30 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about Ignitho AI ROI, security, or deployment..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-ignitho-accent-blue"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 bg-ignitho-teal hover:bg-ignitho-teal-hover text-white rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
