export function SectionFallback({ minHeight = 420 }) {
  return (
    <div
      aria-hidden
      className="w-full border-y border-line/40 bg-white/[0.015] animate-pulse"
      style={{ minHeight }}
    />
  );
}
