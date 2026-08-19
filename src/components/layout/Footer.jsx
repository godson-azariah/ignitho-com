import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, LEGAL_LINKS, SOCIAL_LINKS, LOGO } from "@/lib/site";

const ICON_PATHS = {
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14v7h-4v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21h-4V9Z",
  threads:
    "M16.2 11.3c-.1-.05-.2-.1-.3-.14-.18-3.24-1.95-5.1-4.92-5.12h-.04c-1.78 0-3.26.76-4.17 2.14l1.63 1.12c.68-1.03 1.75-1.25 2.54-1.25h.03c.98 0 1.72.29 2.2.85.35.4.58.97.7 1.68a12.6 12.6 0 0 0-2.83-.14c-2.85.17-4.68 1.83-4.56 4.14.06 1.17.65 2.18 1.65 2.84.85.56 1.94.83 3.08.77 1.5-.08 2.68-.65 3.5-1.7.63-.79 1.02-1.82 1.2-3.11.72.43 1.25 1 1.55 1.7.5 1.16.53 3.08-1.03 4.64-1.37 1.37-3.02 1.96-5.5 1.98-2.76-.02-4.85-.9-6.2-2.62C4.5 17.5 3.85 15.28 3.83 12c.02-3.28.67-5.5 1.93-7.08C7.1 3.2 9.19 2.32 11.95 2.3c2.78.02 4.9.9 6.31 2.63.69.85 1.21 1.91 1.55 3.15l1.9-.5c-.42-1.52-1.07-2.84-1.96-3.93C17.94 1.44 15.3.32 11.96.3h-.01C8.6.32 6 1.45 4.24 3.66 2.68 5.63 1.87 8.36 1.85 11.99v.02c.02 3.63.83 6.36 2.39 8.33C6 22.55 8.6 23.68 11.95 23.7h.01c2.98-.02 5.08-.8 6.8-2.53 2.26-2.25 2.19-5.08 1.45-6.81-.54-1.25-1.56-2.26-2.95-2.94l-1.06-.12Zm-4.63 5.9c-1.26.07-2.57-.5-2.63-1.7-.05-.9.64-1.9 2.71-2.02.24-.01.47-.02.7-.02.75 0 1.46.07 2.1.21-.24 2.98-1.64 3.47-2.88 3.53Z",
  facebook:
    "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  youtube:
    "M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.2 0-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.5v1.6c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.8.2 6.8.2s4 0 6.8-.3c.4 0 1.2 0 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.6-.2-3.2-.2-3.2ZM9.9 14.3V8.9l5.2 2.7-5.2 2.7Z",
};

function SocialIcon({ icon }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d={ICON_PATHS[icon]} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 pt-[58px] lg:px-[50px]">
        <div className="grid gap-10 text-center lg:grid-cols-[260px_1fr_auto] lg:gap-8 lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/" className="inline-block">
              <Image
                src={LOGO.src}
                alt={LOGO.alt}
                width={420}
                height={160}
                className="h-[42px] w-auto object-contain"
              />
            </Link>
          </div>

          <div className="grid gap-[25px] sm:grid-cols-3 sm:gap-10">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="text-[16px] font-bold leading-[20px] text-ink tablet:text-[17px] tablet:leading-[21.25px]">
                  {col.heading}
                </h3>
                <ul className="mt-[18px]">
                  {col.links.map((l) => (
                    <li key={`${col.heading}-${l.label}`}>
                      <Link
                        href={l.href}
                        className="text-[16px] leading-[26.4px] text-[#622baa] hover:underline tablet:text-[15px] tablet:leading-[24.75px]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <ul className="flex items-center justify-center gap-5 lg:self-center">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-[#4b4b56] hover:text-brand"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="mt-[46px] border-black/10" />

        <div className="flex flex-col items-center gap-3 pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[12px] leading-[19.8px] text-ink">
            © {new Date().getFullYear()} Ignitho, All Rights Reserved
          </p>

          <p className="text-[12px] leading-[19.8px] text-[#622baa]">
            {LEGAL_LINKS.map((l, i) => (
              <span key={l.href}>
                {i > 0 && <span className="px-1.5 text-ink/50">|</span>}
                <Link href={l.href} className="hover:underline">
                  {l.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
