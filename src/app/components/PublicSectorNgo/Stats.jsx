'use client'
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 4.8, suffix: "×", label: "Average ROAS delivered", decimals: 1 },
  { value: 38, prefix: "−", suffix: "%", label: "Customer acquisition cost drop" },
  { value: 180, suffix: "+", label: "Brands scaled with us" },
  { value: 12, suffix: "M+", label: "Ad spend managed (USD)" },
];

const Counter = ({ to, decimals = 0, prefix = "", suffix = "" }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section
      data-testid="stats-counter"
      className="relative py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dense radial-fade opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ The Numbers
          </p>
          <h2
            data-testid="stats-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(1.75rem,4.5vw,3.75rem)]"
          >
            Growth, In Numbers You Can <span className="text-brand">Measure</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-(--b2b-primary)/30 rounded-3xl overflow-hidden bg-card/40 backdrop-blur">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              data-testid={`stat-card-${i}`}
              className="relative p-8 md:p-10 text-center border-r border-b border-border last:border-r-0 lg:[&:nth-child(4)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
            >
              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none">
                <Counter
                  to={s.value}
                  decimals={s.decimals || 0}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                />
              </div>
              <p className="mt-4 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <p
          data-testid="stats-disclaimer"
          className="text-center text-xs text-muted-foreground mt-6"
        >
          * Aggregate results across portfolio · individual outcomes vary by
          industry & spend
        </p>
      </div>
    </section>
  );
};
