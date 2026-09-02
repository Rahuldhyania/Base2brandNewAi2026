"use client";
import React from "react";
import { m } from "framer-motion";
import { ScanSearch, Database, FileText, Award, Sparkles } from "lucide-react";
const icons = [
  ScanSearch,
  Database,
  FileText,
  Award,
  Sparkles,
]
export default function Framework({ highlightTag, title, description, steps}) {
  return (
    <section
      id="framework"
      data-testid="framework-section"
      className="relative py-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl text-center mx-auto">
          <div className="label-mono">{highlightTag}</div>
          <h2
            className="mt-2 font-display text-2xl mx-auto sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="mt-2 text-zinc-400 text-lg max-w-xl mx-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="relative mt-8 md:mt-20">
          {/* Center line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(var(--b2b-primary-rgb), 0.4), transparent)",
            }}
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((s, i) => {
              const Icon = icons[i];
              const isLeft = i % 2 === 0;
              return (
                <m.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Node */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#030305] items-center justify-center z-10"
                    style={{ border: "1px solid var(--b2b-glow-ring)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "var(--b2b-primary)",
                        boxShadow: "0 0 16px 4px var(--b2b-glow-shadow)",
                      }}
                    />
                  </div>

                  <div
                    className={`${isLeft ? "" : "md:order-2 md:pl-16"} ${isLeft ? "md:pr-16 md:text-right" : ""}`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(to bottom right, rgba(var(--b2b-primary-rgb), 0.2), rgba(var(--b2b-primary-rgb), 0.08))",
                        }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: "var(--b2b-primary-2)" }}
                        />
                      </div>
                      <span className="font-mono text-xs tracking-[0.3em] text-zinc-500">
                        STEP {s.n}
                      </span>
                    </div>
                    <h3 className="font-display mt-2 md:mt-5 text-2xl md:text-3xl font-medium tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 md:mt-4 text-zinc-400 leading-relaxed max-w-md md:max-w-none">
                      {s.body}
                    </p>
                  </div>

                  <div
                    className={`${isLeft ? "md:pl-16" : "md:pr-16 md:order-1"}`}
                  >
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 overflow-hidden">
                      <div
                        className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl"
                        style={{
                          background: "rgba(var(--b2b-primary-rgb), 0.1)",
                        }}
                      />
                      <div className="font-display text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter leading-none">
                        {s.n}
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {Array.from({ length: 3 }).map((_, k) => (
                          <div
                            key={k}
                            className="h-1 rounded-full"
                            style={
                              k <= i % 3
                                ? {
                                    background:
                                      "linear-gradient(to right, var(--b2b-primary), var(--b2b-primary-2))",
                                  }
                                : { background: "rgba(255,255,255,0.1)" }
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
