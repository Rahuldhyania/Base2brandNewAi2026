import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  ListChecks,
  BookOpen,
  Layers,
  LayoutTemplate,
  Download,
} from "lucide-react";
import { DOWNLOADS } from "../data/resources";

const ICONS = {
  Sparkles,
  FileText,
  ListChecks,
  BookOpen,
  Layers,
  LayoutTemplate,
};

function Asteroid({ item }) {
  const Icon = ICONS[item.icon] || Sparkles;
  return (
    <motion.div
      // whileHover={{ rotate: 6, y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="mx-4 w-64 md:w-72 h-40 rounded-3xl glass p-6 flex flex-col justify-between group relative overflow-hidden"
      data-testid={`asteroid-${item.id}`}
    >
      {/* subtle rocky gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(123,77,255,0.35), transparent 45%), radial-gradient(circle at 80% 90%, rgba(66,212,255,0.3), transparent 55%)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <div className="h-10 w-10 rounded-2xl glass-strong flex items-center justify-center">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <span className="text-[10px] tracking-widest uppercase text-white/50">
          {item.detail}
        </span>
      </div>
      <div className="relative">
        <h4 className="font-display text-xl text-white leading-tight">{item.label}</h4>
        <button
          type="button"
          data-testid={`download-${item.id}`}
          className="mt-3 inline-flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          Grab it
        </button>
      </div>
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          boxShadow: "0 0 0 1px rgba(66,212,255,0.35), 0 20px 60px rgba(66,212,255,0.2)",
        }}
      />
    </motion.div>
  );
}

export default function AsteroidBelt() {
  return (
    <div className="py-6" data-testid="asteroid-belt">
      <Marquee gradient={false} speed={30} pauseOnHover>
        {[...DOWNLOADS, ...DOWNLOADS].map((d, i) => (
          <Asteroid key={`${d.id}-${i}`} item={d} />
        ))}
      </Marquee>
    </div>
  );
}
