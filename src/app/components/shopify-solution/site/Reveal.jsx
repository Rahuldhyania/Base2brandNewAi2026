"use client";
import { useInView, usePrefersReducedMotion } from "@/lib/useInView";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

/**
 * Reveal: scroll-triggered fade-in + slide-up wrapper.
 * Respects prefers-reduced-motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 14,
  duration = 0.52,
  className = "",
  once = true,
  amount = 0.25,
  as: Tag = "div",
  ...rest
}) => {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView({ once, amount });

  if (reduced) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        filter: inView ? "blur(0px)" : "blur(6px)",
        transition: `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s, filter ${duration}s ${EASE} ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
