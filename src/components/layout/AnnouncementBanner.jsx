import Image from 'next/image'
import MegaphoneIcon from '@/components/ui/icons/MegaphoneIcon'
import AnnouncementDismissButton from '@/components/layout/AnnouncementDismissButton'
import { ANNOUNCEMENT } from '@/data/announcement'

function Divider({ className = '' }) {
  return <span aria-hidden="true" className={`w-px shrink-0 bg-[#9A9AA4] ${className}`} />
}

function ArrowRight({ className }) {
  return (
    <svg
      viewBox="0 0 22 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M1 7h19" />
      <path d="M14 1l6 6-6 6" />
    </svg>
  )
}

/** `position` only decides which edge carries the hairline against the navbar. */
export default function AnnouncementBanner({ position = 'below' }) {
  const { body, cta } = ANNOUNCEMENT

  return (
    <aside
      aria-label="Announcement"
      className={`announcement-banner relative z-40 h-[var(--banner-height)] overflow-hidden ${
        position === 'above' ? 'announcement-banner--above' : ''
      }`}
    >
      <span aria-hidden="true" className="banner-deco-dots-left" />
      <span aria-hidden="true" className="banner-deco-dots-right" />

      <Image
        src="/images/banner-skyline.png"
        alt=""
        width={1254}
        height={496}
        aria-hidden="true"
        className="banner-skyline pointer-events-none absolute bottom-0 right-0 hidden h-full w-auto max-w-none select-none tablet:block"
      />

      {/*
        From tablet up this is one row: megaphone | divider | message | divider
        | CTA, in the navbar's 1360px column with the same 20px inset, so the
        megaphone sits under the logo and the CTA under "Contact Us".

        On mobile the same nodes regroup into an icon beside a stacked
        message + CTA. The two `tablet:contents` wrappers exist only to make
        that regrouping possible — they flatten away above 768px, leaving the
        desktop row byte-for-byte what it was.
      */}
      <div className="relative mx-auto flex h-full max-w-[1360px] items-center gap-[14px] ps-4 pe-4 tablet:justify-between tablet:gap-[18px] tablet:ps-5 tablet:pe-5 desktop:gap-4">
        {/* `items-center` sits the megaphone against the middle of the copy
            block on mobile; above 768px the wrapper is display:contents and
            the row does its own centring. */}
        <div className="flex min-w-0 items-center gap-3 tablet:contents">
          <MegaphoneIcon className="h-[23px] w-[27px] shrink-0 text-ignitho-banner-accent tablet:h-[38px] tablet:w-[44px] desktop:h-[39px] desktop:w-[47px]" />

          <Divider className="hidden h-[45px] tablet:block" />

          <div className="banner-copy flex min-w-0 grow flex-col gap-0 tablet:contents">
            <p className="banner-message text-black">
              {body.map((part, index) => (
                <span
                  key={index}
                  className={`${part.bold ? 'font-bold' : 'font-normal'} ${
                    part.accent ? 'text-ignitho-banner-accent' : ''
                  }`}
                >
                  {part.text}
                </span>
              ))}
            </p>

            <Divider className="hidden h-[45px] tablet:block" />

            {/* Sits at the right edge on mobile; `self-auto` hands it back to
                the row's own centring above 768px. */}
            <a
              href={cta.href}
              className="banner-cta group inline-flex shrink-0 items-center gap-[7px] self-end whitespace-nowrap text-[13.5px] font-bold text-ignitho-banner-accent transition-opacity hover:opacity-70 tablet:self-auto tablet:gap-[12px] tablet:text-[15px]"
            >
              {cta.label}
              <ArrowRight className="h-[12px] w-[17px] transition-transform duration-200 group-hover:translate-x-1 tablet:h-[13px] tablet:w-[20px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile only — the desktop strip is left exactly as it was. */}
      <AnnouncementDismissButton className="absolute right-2 top-2 tablet:hidden" />
    </aside>
  )
}
