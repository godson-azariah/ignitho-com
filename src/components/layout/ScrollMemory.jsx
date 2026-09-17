"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/*
  Keeps your place across a reload.

  Storage is `sessionStorage`, the same thing the announcement strip uses - it
  is per-tab, cleared when the tab closes, and is not a cookie, so this adds no
  consent prompt. One entry per path, so reloading /data-engineering does not
  drop you into the middle of the home page.

  Restoring is not a single scrollTo: fonts land, images decode and the
  announcement strip may collapse, all of which change the document height
  after first paint. So the position is re-applied over a short settle window
  and clamped to whatever the page is tall enough for, and the whole thing
  stands down the moment the visitor touches the wheel, a key or the screen -
  fighting someone for the scrollbar is worse than losing the position.

  Only a reload restores. A fresh visit starts at the top, and back/forward is
  left to the browser and the router, which already handle it.
*/

const KEY = "ignitho:scroll:";
/* long enough for a slow image to land, but the loop normally exits well
   before this the moment the page stops growing */
const GIVE_UP_MS = 4000;
const STABLE_MS = 400;

export default function ScrollMemory() {
  const pathname = usePathname();
  /* true while the restore loop owns the scrollbar: its own scrollTo calls
     fire scroll events, and those must not be written back as the position */
  const restoring = useRef(true);

  /* save: rAF-throttled while scrolling, and again when the page is hidden or
     unloaded, which is the position a reload actually needs */
  useEffect(() => {
    const key = KEY + pathname;
    let queued = false;

    const write = () => {
      queued = false;
      if (restoring.current) return;
      try {
        sessionStorage.setItem(key, String(Math.round(window.scrollY)));
      } catch {
        /* private mode, blocked storage - not worth a broken page */
      }
    };

    const onScroll = () => {
      if (restoring.current || queued) return;
      queued = true;
      requestAnimationFrame(write);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", write);
    document.addEventListener("visibilitychange", write);

    return () => {
      write();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", write);
      document.removeEventListener("visibilitychange", write);
    };
  }, [pathname]);

  /* restore: once, from the value the boot script captured before the document
     could scroll. That script only runs on a reload, so an absent value means
     there is nothing to do here. */
  useEffect(() => {
    const target = typeof window.__ignithoScroll === "number" ? window.__ignithoScroll : 0;
    delete window.__ignithoScroll;

    if (target < 2) {
      restoring.current = false;
      return undefined;
    }

    const root = document.documentElement;
    const behaviour = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto"; /* the stylesheet sets smooth */

    let done = false;
    let frame = 0;
    let lastHeight = 0;
    let stableSince = 0;
    const started = performance.now();

    const stop = () => {
      if (done) return;
      done = true;
      restoring.current = false;
      cancelAnimationFrame(frame);
      root.style.scrollBehavior = behaviour;
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
    };

    /* Re-applied every frame because the page is still growing: a late image
       or webfont can add hundreds of pixels after first paint, and until it
       does the target is past the bottom of the document. Stops as soon as the
       height has held and the position has stuck. */
    const settle = () => {
      if (done) return;
      const now = performance.now();
      const height = root.scrollHeight;
      const max = Math.max(0, height - window.innerHeight);
      const to = Math.min(target, max);
      if (Math.abs(window.scrollY - to) > 1) window.scrollTo(0, to);

      const landed = to === target && Math.abs(window.scrollY - target) <= 1;
      if (landed && height === lastHeight) {
        if (!stableSince) stableSince = now;
        else if (now - stableSince > STABLE_MS) return stop();
      } else {
        stableSince = 0;
        lastHeight = height;
      }

      if (now - started > GIVE_UP_MS) return stop();
      frame = requestAnimationFrame(settle);
    };

    /* passive so the listener itself never delays the scroll it is cancelling */
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    frame = requestAnimationFrame(settle);

    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
