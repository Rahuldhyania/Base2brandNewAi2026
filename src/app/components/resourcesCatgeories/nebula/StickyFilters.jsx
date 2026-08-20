import React from "react";
import { m } from "framer-motion";

export default function StickyFilters({ active, onChange, categories }) {
  return (
    <div className="sticky top-24 z-30 py-2" data-testid="sticky-filters">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-full px-2 py-2 flex items-center gap-1 overflow-x-auto hide-scrollbar">
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                data-testid={`filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => onChange(c)}
                className="relative shrink-0 rounded-full px-4 md:px-5 py-2 text-sm font-sans transition-colors"
                style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.6)" }}
              >
                {isActive && (
                  <m.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(123,77,255,0.9), rgba(66,212,255,0.9))",
                      boxShadow:
                        "0 6px 24px rgba(123,77,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{c}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
