"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";

/**
 * Where the announcement strip sits relative to the navbar.
 *
 *   'above' — strip runs along the very top of the page, navbar under it
 *   'below' — navbar on top, strip tucked underneath it
 */
const BANNER_POSITION = "below";

/**
 * Fixed header stack. The announcement strip is home-only; every other route
 * gets the navbar alone, so `--banner-height` is zeroed there and
 * `--header-height` collapses to just the nav.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const showBanner = pathname === "/";
  const bannerFirst = BANNER_POSITION === "above";

  return (
    <div
      className="fixed inset-x-0 top-0 z-50"
      style={showBanner ? undefined : { "--banner-height": "0px" }}
    >
      {showBanner && bannerFirst ? <AnnouncementBanner position="above" /> : null}
      <Navbar />
      {showBanner && !bannerFirst ? <AnnouncementBanner position="below" /> : null}
    </div>
  );
}
