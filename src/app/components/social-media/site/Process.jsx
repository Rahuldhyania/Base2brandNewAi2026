import React, { useState } from "react";
import {
  Search,
  Map,
  Palette,
  Rocket,
  FlaskConical,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { PROCESS_STEPS } from "../../mock";

const ICONS = { Search, Map, Palette, Rocket, FlaskConical, TrendingUp };

export default function Process() {
  const [active, setActive] = useState(null);
  return (
    <section
      id="process"
      className="relative py-28"
      style={{ background: "#F4F2EE" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[11px] tracking-[0.28em] text-zinc-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ● OUR PROCESS
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="font-black text-zinc-900 leading-[0.92] tracking-tight"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(48px, 7vw, 96px)",
                letterSpacing: "-0.03em",
              }}
            >
              How We Bring
              <br />
              Ideas To Life
            </h2>
            <p className="text-zinc-700 mt-6 max-w-md text-[15px] leading-relaxed">
              A six-step playbook proven across 500+ projects. From research to
              scale — transparent, measurable and built for results.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                { l: "6 stages", c: "#FF2D87" },
                { l: "Transparent", c: "#6C5CE7" },
                { l: "Always reporting", c: "#F37335" },
              ].map((c) => (
                <span
                  key={c.l}
                  className="px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-700 text-[11px] tracking-[0.18em] flex items-center gap-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: c.c }}
                  />
                  {c.l.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <ul className="divide-y divide-zinc-300/70 border-y border-zinc-300/70">
            {PROCESS_STEPS.map((p, i) => {
              const Icon = ICONS[p.icon];
              const isActive = active === i;
              return (
                <li
                  key={p.title}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="flex items-center gap-5 py-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive ? "#0A0A0A" : "transparent",
                        border: isActive ? "none" : "1px solid #d4d4d8",
                        transition: "all 250ms",
                      }}
                    >
                      <Icon
                        size={20}
                        className={isActive ? "text-white" : "text-zinc-900"}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-black text-zinc-900 text-[26px]"
                          style={{
                            fontFamily: "'Archivo Black', sans-serif",
                            letterSpacing: "-0.02em",
                            transform: isActive ? "translateX(6px)" : "none",
                            transition: "transform 250ms",
                            display: "inline-block",
                          }}
                        >
                          {p.title}
                        </span>
                      </div>
                      <p className="text-zinc-600 text-[13px] mt-1 leading-snug">
                        {p.description}
                      </p>
                    </div>
                    <span
                      className="text-[12px] tracking-[0.2em] text-zinc-500"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {p.step}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-zinc-400 group-hover:text-zinc-900"
                      style={{
                        transform: isActive ? "translate(4px,0)" : "none",
                        transition: "all 250ms",
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
            }}
          >
            START YOUR PROJECT
            <ArrowRight size={16} />
          </a>
          <p className="text-zinc-600 text-[13px]">
            Have a specific need? We probably do that too — just ask.
          </p>
        </div>
      </div>
    </section>
  );
}
