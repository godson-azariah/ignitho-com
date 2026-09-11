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
 *
 * `phoneCompact` shrinks the panel below 640px only. The live Advanced Analytics
 * page runs this content as small stacked cards there — art 140 tall, an 18/23.4
 * title and a 14/22.4 body — so our full-size panel came out roughly 2.5x its
 * height. Everything from sm up is left exactly as it was.
 *
 * `panel` is a per-page override bag for the pages whose live panel runs its
 * own scale. Anything it does not set falls through to the behaviour above.
 */
export default function LifecycleTabs({ items, compact = false, phoneCompact = false, panel: sx = {} }) {
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
              className={`bg-brand-panel col-start-1 row-start-1 flex h-full flex-col overflow-hidden rounded-[20px] border border-[#4a12b8] text-white ${
                sx.pad || (phoneCompact ? "pb-[20px] sm:pb-[30px]" : "pb-[30px]")
              } ${
                on
                  ? ""
                  : sx.inactive ||
                    (phoneCompact
                      ? /* on a phone the inactive panels leave the cell entirely, so the
                           block is only as tall as the open one — keeping them in flow
                           padded this card out with ~130px of empty purple */
                        "hidden sm:block sm:invisible"
                      : "invisible")
              }`}
            >
              <Image
                src={panel.image}
                alt=""
                width={1244}
                height={544}
                sizes="(max-width: 1024px) 100vw, 622px"
                /* every variant spelled out: Tailwind only emits classes it can
                   read literally in the source, so "sm:" cannot be concatenated */
                className={`w-full object-cover ${
                  sx.art ||
                  (phoneCompact
                    ? compact
                      ? "h-[140px] sm:h-[248px]"
                      : "h-[140px] sm:h-[272px]"
                    : compact
                      ? "h-[248px]"
                      : "h-[272px]")
                }`}
              />

              <div className="flex flex-1 flex-col px-[21px] pt-[20px]">
                <div className={`flex items-center ${phoneCompact ? "gap-[12px] sm:gap-[15px]" : "gap-[15px]"}`}>
                  <span
                    className={`flex shrink-0 items-center justify-center border border-white/[0.18] bg-white/[0.12] ${
                      sx.tile ||
                      (phoneCompact
                        ? "h-[40px] w-[40px] rounded-[12px] sm:h-[55px] sm:w-[55px] sm:rounded-[16px]"
                        : "h-[55px] w-[55px] rounded-[16px]")
                    }`}
                  >
                    <Icon
                      name={panel.icon}
                      className={
                        phoneCompact
                          ? "h-[18px] w-[18px] sm:h-[25px] sm:w-[25px]"
                          : "h-[25px] w-[25px]"
                      }
                    />
                  </span>
                  <h3
                    className={`font-bold ${
                      sx.title ||
                      (phoneCompact
                        ? "text-[18px] leading-[23.4px] sm:text-[26px] sm:leading-[33.8px]"
                        : "text-[26px] leading-[33.8px]")
                    }`}
                  >
                    {panel.title}
                  </h3>
                </div>

                <p
                  className={`${phoneCompact ? "mt-[14px] sm:mt-[20px]" : "mt-[20px]"} ${
                    sx.body ||
                    (phoneCompact
                      ? compact
                        ? "text-[14px] leading-[22.4px] sm:text-[16px] sm:leading-[26.4px]"
                        : "text-[14px] leading-[22.4px] sm:text-[17px] sm:leading-[28.05px]"
                      : compact
                        ? "text-[16px] leading-[26.4px]"
                        : "text-[17px] leading-[28.05px]")
                  }`}
                >
                  {panel.body}
                </p>

                {/* tags sit against the bottom, so they line up across tabs */}
                <ul
                  className={`mt-auto flex flex-wrap ${
                    phoneCompact ? "gap-[8px] sm:gap-[20px]" : "gap-[20px]"
                  } ${sx.tags || (compact ? "pt-[12px]" : "pt-[26px]")}`}
                >
                  {panel.tags.map((t) => (
                    <li
                      key={t}
                      className={`border border-[rgba(125,221,224,0.16)] bg-[rgba(125,221,224,0.16)] font-medium ${sx.tag || "px-[10px]"} ${
                        phoneCompact
                          ? "rounded-[20px] py-[6px] text-[12px] leading-[19.2px] sm:rounded-[15px] sm:py-[10px] sm:text-[15px] sm:leading-[15px]"
                          : "rounded-[15px] py-[10px] text-[15px] leading-[15px]"
                      }`}
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
