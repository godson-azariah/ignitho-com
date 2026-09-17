import localFont from "next/font/local";
import "./globals.css";

/* The three faces are self-hosted rather than pulled from Google at build time.

   next/font/google fetches over the network while the page compiles, and when
   that fetch fails it does not fail the build - it quietly swaps in Arial and
   caches that result, so the whole site renders in the fallback and nothing but
   a terminal warning says so. That happened here for Urbanist and Inter.

   These are the same files Google would have served: the latin subset of each
   family's variable font, so one file covers the whole weight range each face
   was loaded for. */
const urbanist = localFont({
  src: "./fonts/urbanist-latin-var.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-urbanist",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/* The live Data Engineering page sets its proof stats (800) and its lifecycle
   panel chips (500) in Inter rather than Urbanist. Nowhere else uses it. */
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter-src",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/* The FRIEND lockup and nothing else. Bricolage Grotesque is deliberately
   irregular - it mixes French and British grotesque forms, so the letters do
   not quite agree with each other, which is what stops it reading as another
   neutral sans. It holds its shape from medium through to bold, unlike Syne,
   whose weights change design as they thicken. */
const bricolage = localFont({
  src: "./fonts/bricolage-latin-var.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-display",
  display: "swap",
  fallback: ["ui-sans-serif", "Segoe UI", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL("https://www.ignitho.com"),
  title: {
    default: "Home - Ignitho",
    template: "%s | Ignitho",
  },
  description: "The Data & AI Specialists",
  icons: { icon: "/favicon.png" },
};

/*
  Runs before the header markup is parsed, so a strip the visitor already
  dismissed never paints. Key matches ANNOUNCEMENT_DISMISS_KEY.
*/
const RESTORE_ANNOUNCEMENT_STATE = `try{if(sessionStorage.getItem('ignitho:announcement-dismissed')==='1'){document.documentElement.classList.add('announcement-dismissed')}}catch(e){}`;

/*
  Reload only. Reads the stored position before the document has a scrollbar,
  because the browser's own restore fires a scroll event the moment it lands -
  and that event would overwrite the very value we are trying to read. Taking
  scrollRestoration off "auto" for this one case also stops the browser landing
  short on a page that has not finished growing; ScrollMemory does it properly
  once the height settles. Any other navigation is left completely alone.
*/
const CAPTURE_SCROLL = `try{var n=(performance.getEntriesByType('navigation')[0]||{}).type;if(n==='reload'){history.scrollRestoration='manual';var v=sessionStorage.getItem('ignitho:scroll:'+location.pathname);window.__ignithoScroll=v?parseInt(v,10):0}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior opts out of smooth scrolling during route
    // transitions, which Next warns about when html has scroll-behavior: smooth
    <html
      lang="en"
      className={`${urbanist.variable} ${inter.variable} ${bricolage.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: RESTORE_ANNOUNCEMENT_STATE }} />
        <script dangerouslySetInnerHTML={{ __html: CAPTURE_SCROLL }} />
        {children}
      </body>
    </html>
  );
}
