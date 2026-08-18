'use client'

/** Kept in sync with the pre-paint script in `src/app/layout.js`. */
export const ANNOUNCEMENT_DISMISS_KEY = 'ignitho:announcement-dismissed'

/**
 * Closing the strip flips a class on <html> rather than unmounting anything:
 * that zeroes `--banner-height`, so `--header-height` shrinks and the hero
 * slides up to meet the navbar on its own. The choice is remembered for the
 * browser session.
 */
export default function AnnouncementDismissButton({ className = '' }) {
  const dismiss = () => {
    document.documentElement.classList.add('announcement-dismissed')
    try {
      sessionStorage.setItem(ANNOUNCEMENT_DISMISS_KEY, '1')
    } catch {
      /* private mode — the strip simply comes back next load */
    }
  }

  return (
    <button
      type="button"
      onClick={dismiss}
      aria-label="Dismiss announcement"
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[#6B6B7B] transition-colors hover:bg-black/5 hover:text-ignitho-banner-accent ${className}`}
    >
      <svg
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="h-[13px] w-[13px]"
        aria-hidden="true"
      >
        <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" />
      </svg>
    </button>
  )
}
