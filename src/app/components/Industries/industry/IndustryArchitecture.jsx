"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import Reveal from "@/components/Industries/shared/Reveal";
import { ArrowDown } from "lucide-react";

function Layer({ layer, index, total, inView }) {
  const Icon = layer.icon;
  const delay = 0.12 + index * 0.07;
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="card-surface relative p-4 md:p-6 group">
        <div className="flex items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-brand/10 border border-brand/25 text-brand flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-1.5 md:gap-3">
              <span className="text-[10px] tabular-nums text-white/30 uppercase tracking-widest2">
                L{String(total - index).padStart(2, "0")}
              </span>
              <h4 className="font-display text-[18px] md:text-[20px] text-white truncate">
                {layer.title}
              </h4>
            </div>
            <p className="mt-1 text-[13.5px] text-white/55 text-pretty">
              {layer.subtitle}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.2, duration: 0.4 }}
            className="shrink-0 w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_22px_rgba(244,123,82,0.7)]"
          />
        </div>
      </div>

      {index < total - 1 && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={
            inView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }
          }
          transition={{ duration: 0.5, delay: delay + 0.25, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="flex flex-col items-center my-2"
          aria-hidden="true"
        >
          <div className="w-px h-6 bg-gradient-to-b from-brand/70 to-brand/0 hidden md:block" />
          <ArrowDown className="w-3.5 h-3.5 text-brand -mt-1" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function IndustryArchitecture({
  architecture,
  name,
  id = "architecture",
}) {
  // const { architecture, name } = industry;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const layers = architecture.layers;
  return (
    <section
      id={id}
      data-testid={architecture}
      ref={ref}
      className="relative py-12 md:py-14 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-fine opacity-[0.15] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="relative container-edge">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 h-full relative">
            <div className="lg:sticky lg:top-1">
              <Reveal>
                <SectionLabel>Industry Architecture</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] mt-3 md:mt-5 leading-[1.06] text-balance">
                  A reference architecture for {name.toLowerCase()}.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-2 md:mt-5 text-white/70 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-pretty">
                  {architecture.description}
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-6 sm:mt-7 flex flex-wrap gap-2">
                  {["Composable", "Observable", "Replaceable", "Auditable"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-[11px] uppercase tracking-widest2 text-white/65 px-2.5 sm:px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.025]"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div
                className="absolute -left-3 top-3 bottom-3 w-px bg-gradient-to-b from-brand/0 via-brand/30 to-brand/0"
                aria-hidden="true"
              />
              <div className="flex flex-col">
                {layers.map((layer, i) => (
                  <Layer
                    key={layer.title}
                    layer={layer}
                    index={i}
                    total={layers.length}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
