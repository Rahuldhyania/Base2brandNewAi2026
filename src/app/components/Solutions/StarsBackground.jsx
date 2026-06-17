import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function generateStars(count, starColor) {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({ count, size, duration, starColor }) {
  const [boxShadow, setBoxShadow] = useState("");

  useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "2000px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          background: "transparent",
          borderRadius: "9999px",
          boxShadow: boxShadow,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "2000px",
          width: `${size}px`,
          height: `${size}px`,
          background: "transparent",
          borderRadius: "9999px",
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

export function StarsBackground({
  children,
  className = "",
  factor = 0.04,
  speed = 60,
  starColor = "#fff",
  showRadialBg = true,
  style = {},
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 50, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 50, damping: 20 });

  const handleMouseMove = useCallback(
    (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      offsetX.set(-(e.clientX - centerX) * factor);
      offsetY.set(-(e.clientY - centerY) * factor);
    },
    [factor, offsetX, offsetY]
  );

  const baseStyle = useMemo(
    () => ({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      background: showRadialBg
        ? "radial-gradient(ellipse at bottom, #131318 0%, #050507 100%)"
        : "transparent",
      ...style,
    }),
    [showRadialBg, style]
  );

  return (
    <div
      className={className}
      style={baseStyle}
      onMouseMove={handleMouseMove}
      data-slot="stars-background"
    >
      <motion.div style={{ x: springX, y: springY, position: "absolute", inset: 0 }}>
        <StarLayer count={700} size={1} duration={speed} starColor={starColor} />
        <StarLayer count={300} size={2} duration={speed * 2} starColor={starColor} />
        <StarLayer count={120} size={3} duration={speed * 3} starColor={starColor} />
      </motion.div>
      {children}
    </div>
  );
}

export default StarsBackground;
