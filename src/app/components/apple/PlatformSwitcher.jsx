import React from "react";
import { motion } from "framer-motion";

/**
 * Platform Switcher — adapted from the supplied Apple Liquid Glass Theme
 * Switcher. Converted to JSX and re-purposed as the Apple ecosystem
 * platform selector (iPhone, iPad, Apple Watch, Vision Pro, Apple TV, CarPlay).
 *
 * The "liquid glass" feel is preserved via a soft glass pill, an active
 * indicator that morphs between options, and tactile hover/press states.
 */
export default function PlatformSwitcher({
  platforms,
  value,
  onChange,
  testId,
}) {
  return (
    <div
      data-testid={testId}
      role="tablist"
      aria-label="Apple platform"
      className="relative inline-flex p-1.5 rounded-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(90,200,250,0.18)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "0 12px 40px -10px rgba(10,132,255,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      {platforms.map((p) => {
        const active = p.id === value;
        const Icon = p.icon;
        return (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={active}
            data-testid={`apple-platform-option-${p.id}`}
            onClick={() => onChange(p.id)}
            className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-colors duration-200 z-10"
            style={{
              color: active ? "#fff" : "rgba(255,255,255,0.62)",
            }}
          >
            {active && (
              <motion.span
                layoutId="platform-active-pill"
                transition={{ type: "spring", stiffness: 360, damping: 32 }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(180deg, rgba(10,132,255,0.32) 0%, rgba(10,132,255,0.18) 100%)",
                  border: "1px solid rgba(90,200,250,0.35)",
                  boxShadow: "0 8px 24px -6px rgba(10,132,255,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              />
            )}
            <span className="relative inline-flex items-center gap-2 cursor-grab">
              {Icon && <Icon size={14} className={active ? "text-[#64D2FF]" : "text-white/55"} />}
              <span className="whitespace-nowrap">{p.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
