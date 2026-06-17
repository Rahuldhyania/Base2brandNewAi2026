import React from "react";
import { motion } from "framer-motion";

/**
 * OrbitalBackground
 * Decorative concentric orbital rings + slow rotation + accent dot.
 * Use absolutely positioned inside a section.
 */
export function OrbitalBackground({
  size = 1100,
  rings = [220, 360, 520, 720, 980],
  className = "",
  showDots = true,
  centerGlow = true,
  opacity = 1,
}) {
  return (
    <div
      className={`orbital-stage ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: size,
          height: size,
          transform: "translate(-50%, -50%)",
        }}
      >
        {rings.map((r, i) => (
          <motion.div
            key={r}
            className={`orbital-ring ${i % 2 === 0 ? "orbital-ring--accent" : ""}`}
            style={{
              width: r,
              height: r,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 60 + i * 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {showDots && (
              <span
                className="orbital-dot"
                style={{
                  top: "50%",
                  right: -4,
                  transform: "translateY(-50%)",
                  opacity: 0.85 - i * 0.12,
                }}
              />
            )}
          </motion.div>
        ))}
        {centerGlow && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "60%",
              height: "60%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(244,123,82,0.18) 0%, rgba(244,123,82,0) 70%)",
              filter: "blur(40px)",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default OrbitalBackground;
