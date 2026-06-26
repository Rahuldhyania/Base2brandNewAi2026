'use client';
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { DottedWorldMap } from "../components/visual/DottedWorldMap";

const LOCATIONS = [
  { city: "New Delhi", country: "India", lat: 28.6139, lng: 77.209, role: "Global HQ" },
  { city: "Chandigarh", country: "India", lat: 30.7333, lng: 76.7794, role: "Engineering Hub" },
  { city: "Bengaluru", country: "India", lat: 12.9716, lng: 77.5946, role: "AI Studio" },
  { city: "Utah", country: "United States", lat: 40.7608, lng: -111.891, role: "Americas Delivery" },
  { city: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, role: "North America" },
  { city: "Leicester", country: "United Kingdom", lat: 52.6369, lng: -1.1398, role: "EMEA HQ" },
  { city: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, role: "APAC" },
  { city: "Lagos", country: "Nigeria", lat: 6.5244, lng: 3.3792, role: "Africa" },
];

const STATS = [
  { k: "8", v: "Offices" },
  { k: "4", v: "Continents" },
  { k: "30+", v: "Time-zones served" },
  { k: "24/7", v: "Follow-the-sun delivery" },
];

export function GlobalPresence() {
  return (
    <section
      id="global"
      data-testid="global-section"
      className="relative py-12  border-t border-line overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(900px circle at 50% 80%, rgba(255,106,0,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Global Presence"
          title="Eight cities. One operating system."
          intro="A follow-the-sun delivery model wired across India, the Americas, EMEA, APAC and Africa — with senior engineering in every node."
        />

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="mt-14 rounded-3xl border border-line bg-[#04061a]/60 p-4 sm:p-8 relative overflow-hidden"
          data-testid="global-map-container"
        >
          <DottedWorldMap locations={LOCATIONS} originIndex={0} />
        </motion.div>

        {/* Office grid + stats */}
        <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-4 md:gap-8">
          <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-line">
            {LOCATIONS.map((l, i) => (
              <motion.div
                key={l.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                data-testid={`office-${l.city.toLowerCase().replace(/\s/g, "-")}`}
                className="bg-[#02030a] py-3 px-4 md:px-6 md:py-6 flex items-center justify-between gap-3 group hover:bg-[#05081a] transition"
              >
                <div>
                  <div className="font-display text-white text-base sm:text-lg leading-tight">
                    {l.city}
                  </div>
                  <div className="text-xs text-mute mt-1 font-mono-display uppercase tracking-[0.18em]">
                    {l.country}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-[0.22em] text-orange-brand font-mono-display">
                    {l.role}
                  </div>
                  <div className="mt-1 inline-block relative h-2 w-2 rounded-full bg-orange-brand">
                    {i === 0 && (
                      <span className="absolute inset-0 rounded-full bg-orange-brand/60 animate-ping" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-lg md:rounded-2xl border border-line bg-[#04061a]/60 p-4 md:p-6"
                data-testid={`global-stat-${i}`}
              >
                <div className="font-display text-white text-2xl md:text-4xl leading-none">
                  {s.k}
                </div>
                <div className="mt-2 text-xs text-mute uppercase tracking-[0.2em]">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
