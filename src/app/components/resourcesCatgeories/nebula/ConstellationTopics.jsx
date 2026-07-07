import React from "react";
import { motion } from "framer-motion";
import { TOPIC_LINKS, TOPIC_NODES } from "../data/resources";

/**
 * Constellation map of topics — SVG lines connect glowing dots.
 * Nodes are clickable and dispatch a query string upward for filtering.
 */
export default function ConstellationTopics({ activeTopic, onSelect }) {
  return (
    <div
      className="relative h-[440px] md:h-[520px] w-full rounded-3xl border border-white/10 overflow-hidden glass"
      data-testid="constellation-topics"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(123,77,255,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(66,212,255,0.22), transparent 45%)",
        }}
      />
      {/* SVG lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7B4DFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#42D4FF" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {TOPIC_LINKS.map(([a, b], i) => {
          const na = TOPIC_NODES.find((n) => n.id === a);
          const nb = TOPIC_NODES.find((n) => n.id === b);
          if (!na || !nb) return null;
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.1 * i, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {TOPIC_NODES.map((n, i) => {
        const isActive = activeTopic === n.label;
        return (
          <motion.button
            key={n.id}
            data-testid={`topic-node-${n.id}`}
            onClick={() => onSelect(n.label)}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.12 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ top: `${n.y}%`, left: `${n.x}%` }}
          >
            <span
              className="block h-2.5 w-2.5 rounded-full"
              style={{
                background: isActive ? "#42D4FF" : "#fff",
                boxShadow: isActive
                  ? "0 0 20px 4px rgba(66,212,255,0.9)"
                  : "0 0 12px 2px rgba(123,77,255,0.5)",
              }}
            />
            <span
              className={`absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-xs font-sans transition-colors ${
                isActive ? "text-white" : "text-white/60 group-hover:text-white"
              }`}
              style={{ top: "100%" }}
            >
              {n.label}
            </span>
          </motion.button>
        );
      })}

      {/* Pulsing background stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-[1.5px] w-[1.5px] rounded-full bg-white/60 animate-pulse-slow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
