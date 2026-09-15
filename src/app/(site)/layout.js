import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
// Chatbot is parked, not retired - see the note above BackToTop below.
// import Chatbot from "@/components/ignitho-ai/Chatbot";

/**
 * Chrome for the main marketing site. The /login and /landing routes will live
 * in the (standalone) group and deliberately do not inherit this header/footer.
 *
 * SiteHeader is fixed and occupies `--header-height`; sections that sit at the
 * top of a page offset by that variable themselves.
 */
export default function SiteLayout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>
      <SiteHeader />
      {/* tabIndex lets the skip link and the back-to-top button move focus
          here; the outline is suppressed because it is a programmatic target,
          not something the user tabs to */}
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
      {/* Fixed and self-contained, so one mount here serves every page.
          The chatbot used to sit in this slot and may come back to it - its
          component is left intact, only unmounted. */}
      <BackToTop />
    </>
  );
}
