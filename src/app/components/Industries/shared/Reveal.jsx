import { useInView, usePrefersReducedMotion } from "@/lib/useInView";

const EASE = "cubic-bezier(0.22,1,0.36,1)";
const DURATION = 0.65;

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  once = true,
  amount = 0.2,
  as = "div",
}) {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView({ once, amount });
  const Tag = as;

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${DURATION}s ${EASE} ${delay}s, transform ${DURATION}s ${EASE} ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
