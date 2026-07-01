"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Slot-machine cycling text component.
 *
 * @param {string}   default_text  - Static prefix word shown before the cycling word (e.g. "RANK.")
 * @param {string[]} items_text    - Array of words to cycle through (e.g. ["CONVERT.", "DOMINATE."])
 * @param {number}   interval      - Milliseconds each word stays visible (default 2600)
 */
export default function SlotText({
  default_text = "RANK.",
  items_text = ["CONVERT.", "DOMINATE.", "PERFORM.", "SCALE.", "WIN."],
  interval = 2600,
  ClassName,
  BLOCK_GROW_TEXT = false
}) {
  const [idx, setIdx] = useState(0);
  const [width, setWidth] = useState(0);
  const measureRef = useRef(null);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % items_text.length),
      interval
    );
    return () => clearInterval(id);
  }, [items_text.length, interval]);

  // Measure natural width of current word before paint — no flicker
  useLayoutEffect(() => {
    if (measureRef.current) setWidth(measureRef.current.offsetWidth);
  }, [idx]);

  return (
    <span className={`flex flex-col md:flex-row items-baseline gap-[0.18em] flex-wrap ${ClassName}`}>
      <div>
      
      {/* <span className="block md:hidden">GROW {' '} {default_text}</span> */}
      <p className=""> <span className={`${BLOCK_GROW_TEXT ? 'hidden' : 'block md:hidden'}`}>GROW {' '}</span>  <span>{default_text}</span> </p>

      </div>

      <motion.span
        animate={{ width }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative inline-block overflow-hidden"
        style={{ verticalAlign: "bottom" }}
      >
        {/* Hidden measurer — sets natural width of current word */}
        <span
          ref={measureRef}
          className="invisible whitespace-nowrap italic pointer-events-none select-none"
          aria-hidden="true"
        >
          {items_text[idx]}
        </span>

        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={idx}
            initial={{ y: "60%", opacity: 0, filter: "blur(8px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-60%", opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center italic text-(--b2b-primary)"
            // style={{ textShadow: "0 0 40px rgba(243,115,53,0.6)" }}
          >
            {items_text[idx]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
}
