"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Route transition loader — a slim launch sequence that briefly appears on
 * each route change. Inspired by Apple's "boot into" reveal pattern.
 */
export default function RouteTransition({ tint = "orange" }) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const map = {
      "/": "Base2Brand",
      "/ai": "AI Division",
      "/services/apple-ecosystem-development": "Apple Ecosystem",
    };
    
    setLabel(map[pathname] || "Loading");
    setActive(true);
    
    const t = setTimeout(() => setActive(false), 700);
    
    // Smooth or instant window scroll on route change
    window.scrollTo({ top: 0, behavior: "instant" });
    
    return () => clearTimeout(t);
  }, [pathname]);

  const accent =
    tint === "blue"
      ? "#0A84FF"
      : tint === "purple"
        ? "#A855F7"
        : tint === "green"
          ? "#95BF47"
          : "#FF6A2C";

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-[#020408]"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <div
                className="w-12 h-12 rounded-full border-[2px] border-white/10 border-t-[2px]"
                style={{ borderTopColor: accent, animation: "spin 0.9s linear infinite" }}
              />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
              {label}
            </p>
          </motion.div>
          <style jsx global>{`
            @keyframes spin { 
              to { transform: rotate(360deg); } 
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}