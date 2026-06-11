'use client'
import Reveal from "@/components/site/Reveal";

const METRICS = [
  { v: "250+", l: "AI Deployments" },
  { v: "120+", l: "Enterprise Integrations" },
  { v: "15+", l: "Industries Served" },
  { v: "24/7", l: "Autonomous Operations" },
];

const MetricsBar = () => {
  return (
    <section
      data-testid="metrics-bar"
      className="relative border-y border-white/5 bg-[#06040D]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.l}
              delay={i * 0.05}
              className={`py-8 md:py-10 px-2 md:px-6 ${
                i !== 0 ? "md:border-l border-white/5" : ""
              } ${i === 2 ? "border-t md:border-t-0 md:border-l border-white/5" : ""} ${
                i === 3 ? "border-t md:border-t-0 border-l border-white/5" : ""
              }`}
            >
              <div
                data-testid={`metric-${i}`}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.04em]"
              >
                <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                  {m.v}
                </span>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] font-mono text-white/40">
                {m.l}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
