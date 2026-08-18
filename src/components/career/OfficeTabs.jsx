"use client";

import { useState } from "react";
import Image from "next/image";

/** Country tabs over the office cards. */
export default function OfficeTabs({ tabs }) {
  const [active, setActive] = useState(0);
  const offices = tabs[active].offices;

  return (
    <div className="mt-[34px]">
      <div className="flex flex-wrap items-center justify-center gap-x-[44px] gap-y-3">
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(i)}
              aria-current={on ? "true" : undefined}
              className={`border-b-2 pb-[10px] text-[19px] transition-colors ${
                on
                  ? "border-[#7a00c2] font-bold text-[#1d0f2a]"
                  : "border-transparent font-medium text-[#6b6080] hover:text-[#7a00c2]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <ul className="mx-auto mt-[40px] flex max-w-[1320px] flex-wrap justify-center gap-7">
        {offices.map((o) => (
          <li
            key={o.name}
            className="w-full max-w-[262px] overflow-hidden rounded-[18px] border border-[#efe8fb] bg-white shadow-[0_6px_18px_rgba(74,18,184,0.07)] transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[0_9px_22px_rgba(74,18,184,0.10)] sm:w-[262px]"
          >
            <div className="relative h-[156px] w-full bg-[#e9e2f6]">
              {o.photo ? (
                <Image src={o.photo} alt="" width={560} height={340} sizes="262px" className="h-full w-full object-cover" />
              ) : null}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 42%, rgba(0,0,0,0.68) 100%)" }}
              />
              {/* the city name sits over the photo, bottom-left */}
              <span className="absolute bottom-[10px] left-[12px] text-[17px] font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                {o.city}
              </span>
            </div>
            <div className="px-[20px] pb-[22px] pt-[18px]">
              <h3 className="text-[17px] font-bold text-[#7a00c2]">{o.name}</h3>
              <address className="mt-[10px] not-italic text-[15px] leading-[24px] text-[#6b6080]">
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
