"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

/**
 * "Full Data Platform Lifecycle" — six tabs beside a panel that swaps.
 *
 * Measured from the original at 1440w:
 *   tabs   436x82 at x=144, 19px apart, radius 15, padding 20
 *   panel  626x601 at x=608, radius 20, 1px #4a12b8 border
 *   art    622x272 flush to the panel's top corners
 *
 * All six panels render into the same grid cell, so the block takes the height
 * of the tallest and never changes height as you click between them.
 */
export default function LifecycleTabs({ items, compact = false }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto mt-[68px] grid max-w-[1090px] gap-6 lg:grid-cols-[436px_626px] lg:gap-[28px] xl:ml-[106px] xl:mr-auto">
      {/* tab column */}
      <ul className="flex flex-col gap-[19px]">
        {items.map((it, i) => {
          const on = i === active;
          return (
            <li key={it.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={on ? "true" : undefined}
                className={`group flex min-h-[82px] w-full items-center gap-[12px] rounded-[15px] border p-[20px] text-left transition-all duration-200 ${
                  on
                    ? "bg-brand-panel border-white/10 text-white"
                    : "border-[#e6dcfa]/40 bg-white text-[#1a0035] hover:translate-x-[6px] hover:border-[#5a2dcc]/40 hover:shadow-[0_10px_24px_rgba(74,18,184,0.16)]"
                }`}
              >
                <span className={`text-[20px] font-bold ${on ? "text-[#78f0ff]" : "text-[#5a2dcc]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[20px] font-normal leading-[20px]">{it.title}</span>
                <span
                  className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full transition-colors ${
                    on ? "bg-[#22b573] text-white" : "bg-[#f1e9fd] text-[#7a00c2]"
                  }`}
                >
                  <Icon name="arrowRight" className="h-[14px] w-[14px]" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Panels stack in one cell so every tab is the same height. At lg they
          come out of flow, so the tab column — not the longest body — sets the
          row height and the card matches the points beside it. */}
      <div className="lg:relative">
      <div className="grid lg:absolute lg:inset-0">
        {items.map((panel, i) => {
          const on = i === active;
          return (
            <div
              key={panel.title}
              aria-hidden={on ? undefined : "true"}
              className={`bg-brand-panel col-start-1 row-start-1 flex h-full flex-col overflow-hidden rounded-[20px] border border-[#4a12b8] pb-[30px] text-white ${
                on ? "" : "invisible"
              }`}
            >
              <Image
                src={panel.image}
                alt=""
                width={1244}
                height={544}
                sizes="(max-width: 1024px) 100vw, 622px"
                className={compact ? "h-[248px] w-full object-cover" : "h-[272px] w-full object-cover"}
              />

              <div className="flex flex-1 flex-col px-[21px] pt-[20px]">
                <div className="flex items-center gap-[15px]">
                  <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[16px] border border-white/[0.18] bg-white/[0.12]">
                    <Icon name={panel.icon} className="h-[25px] w-[25px]" />
                  </span>
                  <h3 className="text-[26px] font-bold leading-[33.8px]">{panel.title}</h3>
                </div>

                <p
                  className={`mt-[20px] ${compact ? "text-[16px] leading-[26.4px]" : "text-[17px] leading-[28.05px]"}`}
                >
                  {panel.body}
                </p>

                {/* tags sit against the bottom, so they line up across tabs */}
                <ul className={`mt-auto flex flex-wrap gap-[20px] ${compact ? "pt-[12px]" : "pt-[26px]"}`}>
                  {panel.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-[15px] border border-[rgba(125,221,224,0.16)] bg-[rgba(125,221,224,0.16)] px-[10px] py-[10px] text-[15px] font-medium leading-[15px]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
