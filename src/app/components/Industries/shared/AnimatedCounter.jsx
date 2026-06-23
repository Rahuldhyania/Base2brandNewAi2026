import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Parses a value like "40%", "4x", "99.9%", "$28M", "60%", "24/7"
// We animate the numeric portion and reattach the prefix/suffix.
function splitValue(value) {
  if (typeof value !== "string") return { prefix: "", number: Number(value) || 0, suffix: "", isStatic: false };
  // capture optional leading non-numeric prefix (e.g. "$")
  const match = value.match(/^([^0-9\-\.]*)(-?\d+\.?\d*)(.*)$/);
  if (!match) return { prefix: value, number: 0, suffix: "", isStatic: true };
  const prefix = match[1] || "";
  const number = parseFloat(match[2]);
  const suffix = match[3] || "";
  return { prefix, number, suffix, isStatic: false };
}

function formatNumber(n, original) {
  if (!isFinite(n)) return original;
  const hasDecimal = /\./.test(original.toString());
  const decimals = hasDecimal ? Math.min(2, (original.toString().split(".")[1] || "").length) : 0;
  return n.toFixed(decimals);
}

export default function AnimatedCounter({
  value,
  duration = 1.6,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { prefix, number, suffix, isStatic } = splitValue(value);
  const [display, setDisplay] = useState(isStatic ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView || isStatic) {
      if (isStatic) setDisplay(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = number * eased;
      setDisplay(`${prefix}${formatNumber(current, number)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isStatic, number, prefix, suffix, duration, value]);

  return <span ref={ref} className={className}>{display}</span>;
}
