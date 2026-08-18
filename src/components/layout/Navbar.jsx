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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  /* A link is active on its own page; a dropdown is active when any of its
     children is the open page. */
  const isActive = (href) => href === pathname
  const anyActive = (items) => items.some((i) => isActive(i.href))
  const navClass = (active) =>
    `${NAV_ITEM} ${active ? 'text-[#00A274] after:scale-x-100' : 'text-black'}`

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-50 bg-white">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-6 px-5 py-5">
        <div className="md:w-1/3">
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
          ("Ignitho AI") overflows underneath the following column. `relative`
          lifts the nav above that static sibling in paint order, which is what
          lets the overflowing link receive hover and clicks. No visual change.
        */}
        <nav className="relative w-1/3 hidden md:flex items-center justify-center gap-4 text-base">
          <div className="group relative">
            {/* a button, not a link: the parent only opens the dropdown.
                It used to point at the live WordPress site. */}
            <button
              type="button"
              aria-haspopup="true"
              className={navClass(anyActive(SPECIALIST_SOLUTIONS))}
            >
              Specialist Solutions
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
              Focus Industries
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

          <Link
            href={AI_LINK.href}
            aria-current={isActive(AI_LINK.href) ? 'page' : undefined}
            className={navClass(isActive(AI_LINK.href))}
          >
            {AI_LINK.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:w-1/3 md:justify-end">
          <a
            href={CONTACT_LINK.href}
            className="inline-flex items-center rounded-full bg-[#00A274] border border-[#00BC6A] text-[#f9f6fe] text-sm font-medium px-[15px] py-[15px] leading-none transition-colors hover:bg-[#0C8C74B5] hover:border-[#0C8C74] hover:text-white"
          >
            {CONTACT_LINK.label}
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-black md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              <span className="pt-1 text-xs font-bold tracking-wide text-slate-400">
                Specialist Solutions
              </span>
              {SPECIALIST_SOLUTIONS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`py-2 pl-1 text-sm font-semibold hover:text-[#00A274] ${
                    isActive(item.href) ? "text-[#00A274]" : "text-black"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <span className="mt-3 pt-1 text-xs font-bold tracking-wide text-slate-400">
                Focus Industries
              </span>
              {FOCUS_INDUSTRIES.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`py-2 pl-1 text-sm font-semibold hover:text-[#00A274] ${
                    isActive(item.href) ? "text-[#00A274]" : "text-black"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 flex flex-col border-t border-slate-100 pt-3">
                {PRIMARY_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="py-2 text-sm font-bold text-black hover:text-[#00A274]"
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  href={AI_LINK.href}
                  onClick={closeMenu}
                  className="py-2 text-left text-sm font-bold text-black hover:text-[#00A274]"
                >
                  {AI_LINK.label}
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
