'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Eye,
  Crosshair,
  Gauge,
  Award,
  PhoneCall,
  Signal,
  Radio,
} from "lucide-react";

const Icons = {
  Activity,
  Eye,
  Crosshair,
  Gauge,
  Award,
  PhoneCall,
  Signal,
  Radio,
}


function StatusBadge({ status, type }) {
  let pulseClass = "status-pulse";
  let textColor = "text-(--b2b-primary)";
  if (type === "optimizing") {
    pulseClass = "status-pulse status-pulse--yellow";
    textColor = "text-yellow-400";
  } else if (type === "growing") {
    pulseClass = "status-pulse status-pulse--green";
    textColor = "text-emerald-400";
  }
  return (
    <div className="flex items-center gap-2">
      <span className={pulseClass} />
      <span className={`font-mono text-[10px] tracking-[0.22em] uppercase ${textColor}`}>
        {status}
      </span>
    </div>
  );
}

function Bars({ data }) {
  return (
    <div className="tick-row w-[68px] sm:w-[88px]">
      {data.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          style={{ width: 3 }}
        />
      ))}
    </div>
  );
}

function LiveClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setNow(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-[11px] tracking-[0.18em] text-zinc-400">
      {now}
    </span>
  );
}

export default function MissionControl({highlightTag, titleUpper, titleLower, description, modulesData}) {
  return (
    <section
      id="mission-control"
      className="relative py-10 overflow-hidden"
      data-testid="mission-control-section"
    >
      {/* Background grid + glow */}
      <div className="mc-grid-bg" />
      <div
        className="glow-orange"
        style={{
          width: 900,
          height: 900,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            {highlightTag}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-[30px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-medium text-white"
          >
            {titleUpper} {" "}
            <span className="text-orange-gradient">{titleLower}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2 text-zinc-400 text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
          className="mt-10 mc-frame"
          data-testid="mission-control-panel"
        >
          <div className="mc-scan" />

          {/* Top bar */}
          <div className="relative flex items-center justify-between px-6 md:px-8 py-4 border-b border-white/5 bg-white/[0.015]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-(--b2b-primary)/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-2 font-mono text-[11px] tracking-[0.22em] uppercase text-zinc-400">
                <Signal size={12} className="text-(--b2b-primary)" />
                Base2Brand // OpsView
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <span className="status-pulse" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-zinc-400">
                  Telemetry Live
                </span>
              </div>
              <LiveClock />
            </div>
          </div>

          {/* Module list */}
          <div className="relative">
            {modulesData.map((m, idx) => {
              const Icon = Icons[m.icon];
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="group relative flex items-center gap-2 md:gap-4 px-4 sm:px-8 py-3 md:py-5 border-b border-white/5 hover:bg-(--b2b-primary)/[0.03] transition-colors"
                  data-testid={`mc-module-${m.id}`}
                >
                  {/* Index/code */}
                  <div className="hidden sm:flex flex-col items-start min-w-[64px] font-mono text-[10px] tracking-[0.22em] text-zinc-500">
                    <span>{m.code}</span>
                    <span className="mt-1 text-zinc-700">
                      MOD/{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-(--b2b-primary)/8 border border-(--b2b-primary)/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-(--b2b-primary)" />
                  </div>

                  {/* Label + dotted line */}
                  <div className="flex-1 min-w-0 flex items-center">
                    <span className="font-mono text-[11px] sm:text-[14px] tracking-[0.18em] uppercase text-white">
                      {m.label}
                    </span>
                    <span className="dotted-fill" />
                  </div>

                  {/* Metric */}
                  <span className="hidden md:inline font-mono text-[11px] tracking-[0.16em] uppercase text-zinc-400">
                    {m.metric}
                  </span>

                  {/* Bars */}
                  <Bars data={m.bars} />

                  {/* Status */}
                  <div className="min-w-[110px] sm:min-w-[120px] flex justify-end">
                    <StatusBadge status={m.status} type={m.statusType} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="relative px-5 sm:px-8 py-4 border-t border-white/5 bg-white/[0.015] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-zinc-500 uppercase">
              <Radio size={12} className="text-(--b2b-primary)" />
              Continuous telemetry · 6/6 modules online
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-zinc-500 uppercase">
              <span>Run: B2B-OPS-019</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-(--b2b-primary)">Engaged</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
