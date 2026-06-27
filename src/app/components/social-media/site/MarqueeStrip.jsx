"use client";
import React from "react";
import { MARQUEE_ITEMS, STATS } from "../site/mock";

export default function MarqueeStrip() {
  return (
    <section className="relative md:pb-16">
      <div className="overflow-hidden border-y border-zinc-900/10 py-1 md:py-6 ">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-[28px] md:text-[40px]"
                style={{
                  color: "#F4F2EE",
                  letterSpacing: "-0.02em",
                }}
              >
                {item}
                <span style={{ color: "#F37335" }}>✦</span>
              </span>
            )
          )}
        </div>
      </div>
      <div className="overflow-hidden border-b border-zinc-900/10 py-1 md:py-6 ">
        <div className="flex gap-10 whitespace-nowrap animate-marquee-reverse">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
            .slice()
            .reverse()
            .map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-[28px] md:text-[40px]"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #F4F2EE",
                  letterSpacing: "-0.02em",
                }}
              >
                {item}
                <span style={{ color: "#C6FF3D", WebkitTextStroke: 0 }}>
                  ✦
                </span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
