"use client";

import { useSyncExternalStore } from "react";

/**
 * Back to top, mounted once in the site layout so it serves every page.
 *
 * Following the usual guidance for the pattern: it stays hidden until the page
 * has been scrolled about one and a half screens - far enough that returning by
 * hand is a chore - sits bottom-right where the pattern is expected, and is a
 * real <button> with a label rather than a decorated link, so it is reachable
 * by keyboard and announced properly.
 *
 * Reading scroll through useSyncExternalStore rather than an effect keeps the
 * server render and the first client render agreeing on "hidden", and lets
 * React skip the re-render entirely while the boolean is unchanged - which is
 * most of the scrolling.
 */

const THRESHOLD = 1.5; // screens scrolled before the button is offered

function subscribe(onChange) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

const getSnapshot = () => window.scrollY > window.innerHeight * THRESHOLD;
const getServerSnapshot = () => false;

export default function BackToTop() {
  const shown = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toTop() {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: still ? "auto" : "smooth" });

    /* Send focus to the top of the content as well, so a keyboard user lands
       where the page starts instead of staying parked on a button at the
       bottom. preventScroll keeps the browser from jumping past the glide. */
    document.getElementById("main")?.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ignitho-teal text-white shadow-lg shadow-black/25 transition-[opacity,transform,background-color,box-shadow] duration-300 ease-out hover:bg-ignitho-teal-hover hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ignitho-teal ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
