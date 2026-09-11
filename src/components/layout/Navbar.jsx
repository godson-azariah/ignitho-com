'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import {
  AI_LINK,
  CONTACT_LINK,
  FOCUS_INDUSTRIES,
  PRIMARY_LINKS,
  SPECIALIST_SOLUTIONS,
} from '@/data/navigation'

/* Desktop nav item: bold black, green on hover, and a green rule that grows
   under the label on hover or while its page is the open one. */
const NAV_ITEM =
  'relative flex items-center gap-1 whitespace-nowrap px-2 py-3.5 font-bold transition-colors ' +
  'after:absolute after:inset-x-2 after:bottom-1.5 after:h-[2px] after:origin-left after:scale-x-0 ' +
  'after:bg-[#00A274] after:transition-transform after:duration-200 hover:text-[#00A274] hover:after:scale-x-100'

/* The link row only fits alongside the logo and the CTA from 1025px up —
   below that it ran underneath both — so the hamburger owns the whole
   tablet band, which is also where the live site switches. */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  /* which mobile accordion is expanded: 'solutions' | 'industries' | null */
  const [openSection, setOpenSection] = useState(null)
  const pathname = usePathname()

  /* A link is active on its own page; a dropdown is active when any of its
     children is the open page. */
  const isActive = (href) => href === pathname
  const anyActive = (items) => items.some((i) => isActive(i.href))
  const navClass = (active) =>
    `${NAV_ITEM} ${active ? 'text-[#00A274] after:scale-x-100' : 'text-black'}`

  /* Collapse the expanded group too, so the drawer always reopens clean. */
  const closeMenu = () => {
    setMenuOpen(false)
    setOpenSection(null)
  }

  const toggleSection = (key) =>
    setOpenSection((current) => (current === key ? null : key))

  return (
    <header className="relative z-50 bg-white">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-6 px-5 py-5">
        <div className="desktop:w-1/3">
          <Link href="/" onClick={closeMenu} className="shrink-0 inline-block">
            <Image
              src="/images/logo.png"
              alt="Ignitho"
              width={420}
              height={160}
              priority
              className="w-[130px] h-auto"
            />
          </Link>
        </div>

        {/*
          The link row is wider than the w-1/3 box it sits in, so its last item
          overflows underneath the following column. `relative` lifts the nav
          above that static sibling in paint order, which is what lets the
          overflowing link receive hover and clicks. No visual change.
        */}
        <nav className="relative w-1/3 hidden desktop:flex items-center justify-center gap-4 text-base">
          {/* Friend AI first */}
          <Link
            href={AI_LINK.href}
            aria-current={isActive(AI_LINK.href) ? 'page' : undefined}
            className={navClass(isActive(AI_LINK.href))}
          >
            Friend AI
          </Link>

          <div className="group relative">
            {/* a button, not a link: the parent only opens the dropdown. */}
            <button
              type="button"
              aria-haspopup="true"
              className={navClass(anyActive(SPECIALIST_SOLUTIONS))}
            >
              Solutions
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[320px] -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {SPECIALIST_SOLUTIONS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block px-6 py-[15px] text-sm font-medium hover:text-[#00A274] ${
                    isActive(item.href) ? "text-[#00A274] font-semibold" : "text-black"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className={navClass(anyActive(FOCUS_INDUSTRIES))}
            >
              Industries
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[320px] -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {FOCUS_INDUSTRIES.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block px-6 py-[15px] text-sm font-medium hover:text-[#00A274] ${
                    isActive(item.href) ? "text-[#00A274] font-semibold" : "text-black"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {PRIMARY_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={navClass(isActive(item.href))}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 desktop:w-1/3 desktop:justify-end">
          <a
            href={CONTACT_LINK.href}
            className="inline-flex items-center rounded-full bg-[#00A274] border border-[#00BC6A] text-[#f9f6fe] text-sm font-medium px-[15px] py-[15px] leading-none transition-colors hover:bg-[#0C8C74B5] hover:border-[#0C8C74] hover:text-white"
          >
            {CONTACT_LINK.label}
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-black desktop:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/*
        Mobile / tablet menu: a full-page panel that slides in from the right,
        over a dimmed backdrop. Desktop is unaffected: both the backdrop and
        the panel are `desktop:hidden`.
      */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* tapping anywhere outside the panel closes the menu */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/40 desktop:hidden"
            />

            <motion.nav
              key="mobile-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 z-50 flex w-full flex-col bg-white desktop:hidden"
            >
              <div className="flex items-center justify-end px-5 py-5">
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-black"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* 
                Mobile menu content:
                - The outer container centers a narrow column (max-w-xs) on screen.
                - Inside that column, each row is `relative` with the label centered.
                - The chevron sits absolutely at the right edge, so it never
                  shifts the label off the vertical center line.
                - pt-[12vh] keeps the block in the upper half of the screen.
              */}
              <div className="flex flex-1 flex-col items-center justify-start overflow-y-auto px-6 pt-[12vh] pb-12">
                <div className="w-full max-w-xs">
                  {/* Friend AI first — no chevron, plain centered label */}
                  <Link
                    href={AI_LINK.href}
                    onClick={closeMenu}
                    aria-current={isActive(AI_LINK.href) ? 'page' : undefined}
                    className={`block py-4 text-center text-2xl font-bold transition-colors duration-200 hover:text-[#00A274] ${
                      isActive(AI_LINK.href) ? 'text-[#00A274]' : 'text-black'
                    }`}
                  >
                    Friend AI
                  </Link>

                  {/* Solutions accordion — chevron floats at the right edge */}
                  <button
                    type="button"
                    onClick={() => toggleSection('solutions')}
                    aria-expanded={openSection === 'solutions'}
                    aria-haspopup="true"
                    className={`relative flex w-full items-center justify-center py-4 text-2xl font-bold transition-colors duration-200 hover:text-[#00A274] ${
                      anyActive(SPECIALIST_SOLUTIONS) ? 'text-[#00A274]' : 'text-black'
                    }`}
                  >
                    Solutions
                    <ChevronDown
                      className={`absolute right-0 h-6 w-6 transition-transform duration-200 ${
                        openSection === 'solutions' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openSection === 'solutions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col pb-2">
                          {SPECIALIST_SOLUTIONS.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={closeMenu}
                              aria-current={isActive(item.href) ? 'page' : undefined}
                              className={`block py-3 text-center text-xl font-semibold transition-colors duration-200 hover:text-[#00A274] ${
                                isActive(item.href) ? 'text-[#00A274]' : 'text-black'
                              }`}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Industries accordion — chevron floats at the right edge */}
                  <button
                    type="button"
                    onClick={() => toggleSection('industries')}
                    aria-expanded={openSection === 'industries'}
                    aria-haspopup="true"
                    className={`relative flex w-full items-center justify-center py-4 text-2xl font-bold transition-colors duration-200 hover:text-[#00A274] ${
                      anyActive(FOCUS_INDUSTRIES) ? 'text-[#00A274]' : 'text-black'
                    }`}
                  >
                    Industries
                    <ChevronDown
                      className={`absolute right-0 h-6 w-6 transition-transform duration-200 ${
                        openSection === 'industries' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openSection === 'industries' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col pb-2">
                          {FOCUS_INDUSTRIES.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={closeMenu}
                              aria-current={isActive(item.href) ? 'page' : undefined}
                              className={`block py-3 text-center text-xl font-semibold transition-colors duration-200 hover:text-[#00A274] ${
                                isActive(item.href) ? 'text-[#00A274]' : 'text-black'
                              }`}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Primary links — plain centered labels */}
                  {PRIMARY_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={`block py-4 text-center text-2xl font-bold transition-colors duration-200 hover:text-[#00A274] ${
                        isActive(item.href) ? 'text-[#00A274]' : 'text-black'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}