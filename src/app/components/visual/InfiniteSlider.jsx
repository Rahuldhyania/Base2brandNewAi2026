'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * InfiniteSlider — horizontal scroller, duplicates children for seamless loop.
 */
export function InfiniteSlider({
  children,
  gap = 24,
  speed = 60,
  speedOnHover,
  reverse = false,
  className,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const controls = useAnimationControls();
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    const measure = () => {
      const w = trackRef.current.scrollWidth / 2;
      setTrackWidth(w);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [children]);

  useEffect(() => {
    if (!trackWidth) return;
    const from = reverse ? -trackWidth : 0;
    const to = reverse ? 0 : -trackWidth;
    controls.start({
      x: [from, to],
      transition: { duration: speed, ease: "linear", repeat: Infinity },
    });
  }, [trackWidth, speed, reverse, controls]);

  const onEnter = () => {
    if (!speedOnHover || !trackWidth) return;
    const from = reverse ? -trackWidth : 0;
    const to = reverse ? 0 : -trackWidth;
    controls.start({
      x: [from, to],
      transition: { duration: speedOnHover, ease: "linear", repeat: Infinity },
    });
  };
  const onLeave = () => {
    if (!speedOnHover || !trackWidth) return;
    const from = reverse ? -trackWidth : 0;
    const to = reverse ? 0 : -trackWidth;
    controls.start({
      x: [from, to],
      transition: { duration: speed, ease: "linear", repeat: Infinity },
    });
  };

  const items = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex w-max"
        style={{ gap }}
      >
        {[...items, ...items].map((child, i) => (
          <div key={i} className="shrink-0 flex items-center" style={{ marginRight: gap }}>
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
