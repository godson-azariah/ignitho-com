"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts 0 -> target once the element scrolls into view. The home page ramps
 * over 5s to match its original; the industry stat cards pass 2000 to match
 * theirs (Elementor writes data-duration="2000" on those counters).
 *
 * Holds the final value for reduced-motion users.
 */
export default function Counter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  group = false,
  duration = 5000,
  className = "",
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let cleanup;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        let frame;
        let startTime;
        const step = (now) => {
          if (startTime === undefined) startTime = now;
          const progress = Math.min((now - startTime) / duration, 1);
          // kept as a float — rounding happens in format(), so decimal
          // targets like 4.6 and 2.5 ramp properly instead of snapping
          setValue(progress * target);
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        cleanup = () => cancelAnimationFrame(frame);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (cleanup) cleanup();
    };
  }, [target, duration]);

  const format = (n) => {
    const fixed = n.toFixed(decimals);
    if (!group) return fixed;
    const [whole, frac] = fixed.split(".");
    const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return frac ? `${grouped}.${frac}` : grouped;
  };

  return (
    <p ref={ref} className={className}>
      {prefix}
      {format(value)}
      <span>{suffix}</span>
    </p>
  );
}
