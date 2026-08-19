"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Infinite logo strip. The list is rendered twice and translated by -50%, so the
 * loop is seamless without JS. Respects prefers-reduced-motion.
 *
 * Pausing goes through the Web Animations API rather than CSS's
 * `animation-play-state`: the transform runs on the compositor thread, and
 * letting CSS pause it commits the main thread's slightly stale time, so the
 * strip visibly snaps backwards as it stops. `pause()` reads the live current
 * time first, so it stops exactly where it is.
 *
 * Pointer behaviour differs by device. A mouse pauses it while hovering. A
 * touch holds it still from the tap until the reader taps somewhere else or
 * scrolls — there is no "leave" event to resume on.
 */
export default function LogoMarquee({ logos, className = "" }) {
  const track = useRef(null);
  const [held, setHeld] = useState(false);

  const doubled = [...logos, ...logos];

  useEffect(() => {
    for (const a of track.current?.getAnimations() ?? []) {
      if (held) a.pause();
      else a.play();
    }
  }, [held]);

  // While held by a tap, the next tap outside the strip — or any scroll —
  // sets it going again.
  useEffect(() => {
    if (!held) return;

    const release = (e) => {
      if (e.type === "pointerdown" && track.current?.contains(e.target)) return;
      setHeld(false);
    };

    document.addEventListener("pointerdown", release);
    window.addEventListener("scroll", release, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", release);
      window.removeEventListener("scroll", release);
    };
  }, [held]);

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      // fade the strip out at both edges
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <ul
        ref={track}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") setHeld(true);
        }}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setHeld(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setHeld(false);
        }}
        className="flex w-max animate-marquee items-center gap-14 motion-reduce:animate-none"
      >
        {doubled.map((logo, i) => (
          <li key={`${logo.src}-${i}`} className="shrink-0">
            <Image
              src={logo.src}
              alt={i < logos.length ? logo.alt : ""}
              aria-hidden={i >= logos.length}
              width={240}
              height={76}
              className="h-14 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
