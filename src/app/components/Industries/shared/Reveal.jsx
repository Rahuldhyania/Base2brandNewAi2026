import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  once = true,
  amount = 0.2,
  as = "div",
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}
