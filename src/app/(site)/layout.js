import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";

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
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
