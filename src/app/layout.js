import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

/* The live Data Engineering page sets its proof stats (800) and its lifecycle
   panel chips (500) in Inter rather than Urbanist. Nowhere else uses it, so
   only those two faces are loaded. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-inter-src",
  display: "swap",
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

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior opts out of smooth scrolling during route
    // transitions, which Next warns about when html has scroll-behavior: smooth
    <html
      lang="en"
      className={`${urbanist.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: RESTORE_ANNOUNCEMENT_STATE }} />
        {children}
      </body>
    </html>
  );
}
