'use client'
import React from "react";
import { motion } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";

const TIMELINE = [
  { id: "2012", year: "2012", title: "Base engineering DNA", copy: "Founded as a specialised engineering studio. First enterprise ERP integration ships." },
  { id: "2016", year: "2016", title: "Regulated‑sector focus", copy: "First BFSI and healthcare deployments under NDA. SOC‑2 + ISO 27001 achieved." },
  { id: "2020", year: "2020", title: "AI systems practice", copy: "Applied AI + MLOps practice stood up. First multi‑agent decision system in production." },
  { id: "2023", year: "2023", title: "Sovereign programmes", copy: "Multi‑region sovereign cloud blueprint. 60+ enterprise engagements shipped." },
  { id: "2026", year: "2026", title: "8 cities · 4 continents", copy: "Follow‑the‑sun operating model. 120+ engagements. From base — to orbit." },
];

const CITIES = [
  "New Delhi", "Chandigarh", "Bengaluru", "Utah", "Toronto", "Leicester", "Sydney", "Lagos",
];

export default function About() {
  return (
    <section
      id="about"
      data-section="about"
      data-testid={extraData.about.root}
      className="relative pb-12 pt-34"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 items-start">
          {/* Left copy */}
          <div>
          <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em]">
            Productised accelerators.<br />
            <span className="text-(--b2b-orange)">Shipped, not shelfware.</span>
          </h2>
            <p className="mt-8 text-[16px] md:text-[17px] text-[var(--b2b-text-muted)] leading-[1.65] max-w-[520px]">
              Base2Brand is the digital transformation, AI and enterprise software partner for organisations that build for the public good and the global stage.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-[420px]">
              <div>
                <div className="font-display text-3xl text-white tracking-[-0.03em]"><span className="text-[var(--b2b-orange)]">120+</span></div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Engagements</div>
              </div>
              <div>
                <div className="font-display text-3xl text-white tracking-[-0.03em]"><span className="text-[var(--b2b-orange)]">14</span></div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Yrs DNA</div>
              </div>
              <div>
                <div className="font-display text-3xl text-white tracking-[-0.03em]"><span className="text-[var(--b2b-orange)]">99.99%</span></div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">SLA target</div>
              </div>
            </div>
          </div>

          {/* Planet visual */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              {/* Orbit ring outer */}
              <div
                className="absolute inset-0 rounded-full border border-[var(--b2b-orange)]/25"
                style={{ animation: "planet-spin 40s linear infinite" }}
              >
                <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-[var(--b2b-orange)] shadow-[0_0_16px_rgba(244,123,82,0.9)]" />
              </div>
              {/* Orbit ring middle */}
              <div
                className="absolute inset-6 rounded-full border border-white/10"
                style={{ animation: "planet-spin 60s linear infinite reverse" }}
              >
                <span className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-white/70" />
              </div>
              {/* Planet */}
              <div
                className="absolute inset-[16%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #FFC49C 0%, #F47B52 30%, #7A2E11 75%, #2B0F04 100%)",
                  boxShadow:
                    "0 0 80px rgba(244,123,82,0.5), inset -20px -30px 40px rgba(0,0,0,0.6)",
                }}
              />
              {/* Planet band */}
              <div
                className="absolute inset-[16%] rounded-full pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(180deg, transparent 0 12px, rgba(0,0,0,0.15) 12px 14px)",
                  mixBlendMode: "multiply",
                  opacity: 0.6,
                }}
              />
              {/* Label */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--b2b-orange)]">
                Base2Brand
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
