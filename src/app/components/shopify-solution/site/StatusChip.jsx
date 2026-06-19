import { cn } from "@/lib/utils";

export const StatusChip = ({
  children = "MODULE ONLINE",
  className = "",
  tone = "green",
}) => {
  const dotColor = tone === "green" ? "#95BF47" : "#F5C451";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1",
        className,
      )}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: dotColor, boxShadow: `0 0 10px ${dotColor}` }}
      />
      <span className="font-mono text-[10px] tracking-[0.20em] uppercase text-white/65">
        {children}
      </span>
    </span>
  );
};

export default StatusChip;
