import { motion, useReducedMotion } from "framer-motion";

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
  const reduced = useReducedMotion();
  const MotionTag = motion[Tag] || motion.div;

  if (reduced) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
