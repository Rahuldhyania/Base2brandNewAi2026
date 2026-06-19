import { cn } from "@/lib/utils";

export const MonoLabel = ({ children, className = "", dot = false, dotColor = "#95BF47" }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-white/55",
      className,
    )}
  >
    {dot && (
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: dotColor, boxShadow: `0 0 12px ${dotColor}` }}
      />
    )}
    {children}
  </span>
);

export default MonoLabel;
