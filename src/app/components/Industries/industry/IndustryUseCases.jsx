import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import Reveal from "@/components/shared/Reveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { INDUSTRY_PAGE } from "@/constants/testIds";

export default function IndustryUseCases({ industry, id = "use-cases" }) {
  const { useCases } = industry;
  const [active, setActive] = useState(0);
  const uc = useCases[active];

  return (
    <section
      id={id}
      data-testid={INDUSTRY_PAGE.useCases}
      className="relative py-28 md:py-36 border-t border-white/5"
    >
      <div className="absolute inset-0 grid-bg-fine opacity-[0.12] pointer-events-none" />
      <div className="relative container-edge">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>Use Cases</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-[32px] md:text-[44px] lg:text-[52px] mt-5 leading-[1.06] text-balance">
              The patterns we ship most often — instrumented and proven.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left nav */}
          <div className="lg:col-span-4">
            <div
              role="tablist"
              aria-orientation="vertical"
              className="flex flex-col gap-1.5 sticky lg:top-28"
              data-testid={INDUSTRY_PAGE.useCaseNav}
            >
              {useCases.map((u, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={u.navTitle + i}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`relative w-full text-left px-4 py-3.5 rounded-xl transition-all ${
                      isActive
                        ? "bg-white/[0.04] border border-white/10"
                        : "bg-transparent border border-transparent hover:bg-white/[0.025]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-1.5 self-stretch rounded-full transition-all ${
                        isActive ? "bg-brand" : "bg-white/10"
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[10px] tabular-nums text-white/35 uppercase tracking-widest2">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className={`text-[14.5px] ${isActive ? "text-white" : "text-white/65"}`}>
                            {u.navTitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right detail panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="card-surface p-7 md:p-10 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
                <div className="text-[11px] uppercase tracking-widest2 text-brand mb-4">
                  Use case · {String(active + 1).padStart(2, "0")}
                </div>
                <h3 className="display text-[26px] md:text-[34px] leading-[1.1] text-balance">
                  {uc.title}
                </h3>
                <p className="mt-5 text-white/68 text-[16px] md:text-[17px] leading-relaxed text-pretty">
                  {uc.description}
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {uc.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-md bg-brand/12 border border-brand/30 flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand" />
                      </div>
                      <span className="text-[14.5px] text-white/75">{b}</span>
                    </div>
                  ))}
                </div>

                {uc.metrics?.length > 0 && (
                  <div className="mt-9 pt-7 border-t border-white/8 grid sm:grid-cols-2 gap-5">
                    {uc.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-[30px] md:text-[36px] text-white tracking-tight">
                          <AnimatedCounter value={m.value} />
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-widest2 text-white/45">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
