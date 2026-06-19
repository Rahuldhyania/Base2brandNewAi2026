import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import StatusChip from "@/components/site/StatusChip";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const DOSSIERS = [
  {
    key: "dossier-discovery",
    code: "DOSSIER-01",
    title: "Discovery & Systems Audit",
    body:
      "We map your commerce stack — storefront, CRM, ERP, OMS, ads — to surface the gaps and the multipliers.",
    accent: "Mission planning",
  },
  {
    key: "dossier-design",
    code: "DOSSIER-02",
    title: "UX & Design System",
    body:
      "A Shopify-native design system tuned for conversion, scale, and storytelling across PDPs and bundles.",
    accent: "Brand-led UX",
  },
  {
    key: "dossier-build",
    code: "DOSSIER-03",
    title: "Shopify Build",
    body:
      "Online Store 2.0, Liquid, Hydrogen — engineered for performance and shipped on cadence.",
    accent: "Engineering",
  },
  {
    key: "dossier-integrate",
    code: "DOSSIER-04",
    title: "Integrations",
    body:
      "Klaviyo, Recharge, Odoo, Unicommerce, EasyEcom, Increff — wired into a unified commerce OS.",
    accent: "Ecosystem",
  },
  {
    key: "dossier-launch",
    code: "DOSSIER-05",
    title: "Launch & Stabilize",
    body:
      "Controlled cutovers, SEO preserved, observability online — we land safely and accelerate from there.",
    accent: "Operations",
  },
  {
    key: "dossier-growth",
    code: "DOSSIER-06",
    title: "Growth Ops",
    body:
      "Continuous experimentation: lifecycle, paid acquisition, CRO, and analytics tied to revenue.",
    accent: "Compounding",
  },
];

export const CardFanCarousel = () => {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const total = DOSSIERS.length;

  const goTo = useCallback(
    (next) => {
      const n = ((next % total) + total) % total;
      setIndex(n);
    },
    [total],
  );

  const handleKey = (e) => {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  };

  return (
    <section
      data-testid="work-card-fan-carousel"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px circle at 50% 50%, rgba(149,191,71,0.07), rgba(5,5,5,0) 55%)",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="PLAYBOOKS · MISSION DOSSIERS"
            title="Six dossiers. One Shopify mission."
            subtitle="How we run a Shopify engagement — from discovery to growth operations — as a fan of focused dossiers."
          />
          <Reveal delay={0.1}>
            <StatusChip>6 DOSSIERS</StatusChip>
          </Reveal>
        </div>

        {/* Fan stage */}
        <div
          tabIndex={0}
          onKeyDown={handleKey}
          className="relative mt-14 mx-auto h-[440px] sm:h-[480px] focus:outline-none"
          style={{ maxWidth: 1100 }}
          role="region"
          aria-label="Mission dossiers carousel"
        >
          {DOSSIERS.map((d, i) => {
            const offset = i - index;
            const distance = Math.abs(offset);
            // Card placement: rotate + translate based on offset
            const rotate = offset * 8;
            const xPercent = offset * 12;
            const y = distance * 14;
            const scale = distance === 0 ? 1 : distance === 1 ? 0.96 : 0.9;
            const opacity = distance > 3 ? 0 : 1 - distance * 0.18;
            const z = 100 - distance;

            return (
              <motion.button
                key={d.key}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Open ${d.title}`}
                className="absolute left-1/2 top-0"
                style={{ zIndex: z }}
                initial={false}
                animate={
                  reduced
                    ? { x: `calc(-50% + ${xPercent}%)`, y, rotate, scale, opacity }
                    : { x: `calc(-50% + ${xPercent}%)`, y, rotate, scale, opacity }
                }
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  mass: 0.9,
                }}
                whileHover={
                  distance !== 0
                    ? { y: y - 8, scale: scale + 0.01 }
                    : undefined
                }
              >
                <DossierCard d={d} active={distance === 0} />
              </motion.button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            data-testid="card-fan-prev"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/12 hover:border-white/22 transition-colors duration-150"
            aria-label="Previous"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/55 min-w-[80px] text-center">
            {(index + 1).toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            data-testid="card-fan-next"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/12 hover:border-white/22 transition-colors duration-150"
            aria-label="Next"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
};

const DossierCard = ({ d, active }) => (
  <div
    className={cn(
      "relative w-[320px] sm:w-[360px] h-[400px] sm:h-[440px] rounded-3xl text-left",
      "bg-gradient-to-b from-[#0F1112] to-[#0A0B0C]",
      "border",
      active ? "border-white/22" : "border-white/10",
      "shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
      "overflow-hidden p-6",
    )}
  >
    {/* corner brackets */}
    <span aria-hidden className="absolute top-3 left-3 h-3 w-3 border-t border-l border-white/30" />
    <span aria-hidden className="absolute top-3 right-3 h-3 w-3 border-t border-r border-white/30" />
    <span aria-hidden className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/30" />
    <span aria-hidden className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/30" />

    {/* glow when active */}
    {active && (
      <span
        aria-hidden
        className="absolute -inset-px rounded-3xl pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 1px rgba(149,191,71,0.32), 0 0 56px rgba(149,191,71,0.18)",
        }}
      />
    )}

    <div className="flex items-center justify-between">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">
        {d.code}
      </span>
      <span
        className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5"
      >
        <span
          aria-hidden
          className="h-1 w-1 rounded-full bg-[#95BF47]"
          style={{ boxShadow: "0 0 8px rgba(149,191,71,0.55)" }}
        />
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/70">
          {d.accent}
        </span>
      </span>
    </div>

    <div className="mt-10">
      <p className="font-mono text-[11px] tracking-[0.20em] uppercase text-white/45">
        MISSION PHASE
      </p>
      <h3 className="mt-3 font-display text-2xl sm:text-[28px] font-[650] tracking-[-0.025em] leading-[1.1] text-white">
        {d.title}
      </h3>
      <p className="mt-4 text-sm text-white/65 leading-relaxed">{d.body}</p>
    </div>

    {/* bottom telemetry */}
    <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/45">
        T+{(d.code.split("-")[1] || "00").padStart(2, "0")}:00
      </span>
      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/45">
        Channel A · Locked
      </span>
    </div>
  </div>
);

export default CardFanCarousel;
