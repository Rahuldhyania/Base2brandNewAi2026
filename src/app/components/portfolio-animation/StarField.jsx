import React, { useEffect, useMemo, useRef } from "react";

/**
 * StarField — fixed-position background with layered stars, nebula gradients,
 * subtle parallax on scroll, and occasional shooting stars.
 * Renders only what is visible; skips reflow on scroll.
 */
export default function StarField({ density = "high" }) {
  const layer1Ref = useRef(null); // fast layer
  const layer2Ref = useRef(null); // slow layer

  const stars = useMemo(() => {
    const total = density === "low" ? 60 : density === "med" ? 110 : 180;
    return Array.from({ length: total }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.85 ? Math.random() * 1.4 + 0.4 : Math.random() * 2.2 + 1.4,
      base: 0.25 + Math.random() * 0.55,
      peak: 0.7 + Math.random() * 0.3,
      dur: 2400 + Math.random() * 4000,
      delay: Math.random() * 6000,
      hue: Math.random() < 0.06 ? "orange" : Math.random() < 0.1 ? "cyan" : "white",
      layer: Math.random() < 0.4 ? 2 : 1,
    }));
  }, [density]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (layer1Ref.current) layer1Ref.current.style.transform = `translate3d(0, ${y * -0.03}px, 0)`;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const colorMap = {
    white: "#F5F5FA",
    orange: "#F47B52",
    cyan: "#7BC5D9",
  };

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        background:
          "radial-gradient(ellipse at 20% 12%, rgba(89,60,180,0.12), transparent 55%)," +
          "radial-gradient(ellipse at 82% 30%, rgba(244,123,82,0.14), transparent 50%)," +
          "radial-gradient(ellipse at 50% 78%, rgba(30,120,180,0.08), transparent 55%)," +
          "linear-gradient(180deg, #05060A 0%, #07080F 40%, #05060A 100%)",
      }}
    >
      {/* Nebula wisps */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(closest-side, rgba(244,123,82,0.10), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "70%",
          height: "70%",
          background:
            "radial-gradient(closest-side, rgba(89,60,180,0.08), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Slow stars (background) */}
      <div ref={layer2Ref} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        {stars.filter((s) => s.layer === 2).map((s) => (
          <span
            key={s.id}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              background: colorMap[s.hue],
              boxShadow: s.hue === "orange" ? "0 0 6px rgba(244,123,82,0.7)" : "none",
              opacity: s.base,
              animation: `star-twinkle ${s.dur}ms ease-in-out infinite`,
              animationDelay: `${s.delay}ms`,
              "--twinkle-base": s.base,
              "--twinkle-peak": s.peak,
            }}
          />
        ))}
      </div>

      {/* Fast stars (foreground) */}
      <div ref={layer1Ref} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        {stars.filter((s) => s.layer === 1).map((s) => (
          <span
            key={s.id}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              background: colorMap[s.hue],
              boxShadow: s.hue === "orange" ? "0 0 8px rgba(244,123,82,0.8)" : "none",
              opacity: s.base,
              animation: `star-twinkle ${s.dur}ms ease-in-out infinite`,
              animationDelay: `${s.delay}ms`,
              "--twinkle-base": s.base,
              "--twinkle-peak": s.peak,
            }}
          />
        ))}
      </div>

      {/* Occasional shooting stars */}
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: `${8 + i * 27}%`,
            left: `${-8 - i * 3}%`,
            width: 120,
            height: 1.4,
            background:
              "linear-gradient(90deg, transparent, rgba(255,220,190,0.9), rgba(244,123,82,0))",
            borderRadius: 2,
            opacity: 0,
            animation: `shooting-star ${9000 + i * 2400}ms ease-in ${i * 5000 + 3000}ms infinite`,
            filter: "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
}
