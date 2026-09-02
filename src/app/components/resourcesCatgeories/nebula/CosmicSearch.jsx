import React from "react";
import { m } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";

export default function CosmicSearch({ value, onChange, testId = "cosmic-search" }) {
  const [focused, setFocused] = React.useState(false);

  const orbitStars = React.useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        angle: (360 / 6) * i,
        delay: i * 0.15,
      })),
    []
  );

  return (
    <div className="relative w-full max-w-2xl mx-auto" data-testid={`${testId}-wrapper`}>
      <m.div
        animate={{
          boxShadow: focused
            ? "0 0 0 1px rgba(123,77,255,0.5), 0 0 40px rgba(123,77,255,0.35), 0 0 80px rgba(66,212,255,0.15)"
            : "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.35)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="relative flex items-center gap-3 rounded-full glass-strong px-5 py-2 md:py-4"
      >
        <SearchIcon
          className="h-5 w-5 shrink-0"
          style={{ color: focused ? "#42D4FF" : "rgba(255,255,255,0.55)" }}
        />
        <input
          data-testid={testId}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search the universe..."
          className="w-full bg-transparent text-white placeholder:text-white/40 outline-none text-base md:text-lg font-sans"
        />
        <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-white/40 border border-white/10 rounded-md px-2 py-1">
          <kbd className="font-sans">⌘</kbd>
          <kbd className="font-sans">K</kbd>
        </span>
      </m.div>

      {/* Orbit stars appear when focused */}
      {focused &&
        orbitStars.map((s, i) => (
          <m.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 1, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 3.5,
              delay: s.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
            style={{
              transformOrigin: "0 0",
              background: i % 2 === 0 ? "#42D4FF" : "#A855F7",
              boxShadow:
                i % 2 === 0
                  ? "0 0 12px rgba(66,212,255,0.9)"
                  : "0 0 12px rgba(168,85,247,0.9)",
              transform: `rotate(${s.angle}deg) translateX(280px)`,
            }}
          />
        ))}
    </div>
  );
}
