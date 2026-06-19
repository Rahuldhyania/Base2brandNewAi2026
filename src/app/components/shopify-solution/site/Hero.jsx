"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ShopifyLogo,
  ShopifyPlusLogo,
  KlaviyoLogo,
  RechargeLogo,
  MetaLogo,
  GoogleLogo,
} from "@/components/shopify-solution/site/Logos";

/* =============================================================================
   IlluminatedHero — exact 21st.dev structure (recolored to Shopify Green #95BF47)
   - Original SVG glow filter preserved (filter id="glow-4")
   - All orange/gold color matrices remapped to Shopify Green
   - Illuminated headline: "Built Around Shopify. / Engineered For Growth."
   - Default paragraph removed
   - Official Shopify logo placed as the visual focal point
   - Orbiting ecosystem nodes around Shopify
   - h-screen / min-h-screen preserved
   ========================================================================== */

const ORBIT_NODES = [
  // Inner ring (closest to hub)
  { ring: 0, name: "Shopify Plus", official: true, Logo: ShopifyPlusLogo },
  { ring: 0, name: "Recharge", official: true, Logo: RechargeLogo },
  { ring: 0, name: "Klaviyo", official: true, Logo: KlaviyoLogo },
  // Mid ring
  { ring: 1, name: "Meta", official: true, Logo: MetaLogo },
  { ring: 1, name: "Google", official: true, Logo: GoogleLogo },
  { ring: 1, name: "Odoo", official: false, monogram: "Od" },
  // Outer ring (premium stylized)
  { ring: 2, name: "EasyEcom", official: false, monogram: "Ee" },
  { ring: 2, name: "Unicommerce", official: false, monogram: "Uc" },
  { ring: 2, name: "Increff", official: false, monogram: "In" },
];

const RING_CONFIG = [
  { radiusVw: 16, duration: 28, direction: 1, dashed: true },
  { radiusVw: 24, duration: 36, direction: -1, dashed: false },
  { radiusVw: 33, duration: 48, direction: 1, dashed: true },
];

const useResponsiveScale = () => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Scale shrinks if viewport height is small (laptop), so everything fits
      const heightFactor = Math.min(1, Math.max(0.7, (h - 200) / 800));
      let base;
      if (w < 640) base = 0.5;
      else if (w < 1024) base = 0.68;
      else if (w < 1280) base = 0.78;
      else if (w < 1536) base = 0.82;
      else base = 0.95;
      setScale(base * heightFactor);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return scale;
};

const OrbitNode = ({ node, size }) => {
  const testId = `orbit-node-${node.name.toLowerCase().replace(/\s+/g, "-")}`;
  const Logo = node.Logo;
  return (
    <div
      data-testid={testId}
      role="button"
      tabIndex={0}
      aria-label={node.name}
      className={cn(
        "group relative grid place-items-center rounded-2xl outline-none",
        "bg-white/[0.06] backdrop-blur-xl border border-white/15",
        "shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:border-[#95BF47]/55",
        "transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-[#95BF47]/55",
      )}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(149,191,71,0.28)" }}
      />
      <span
        aria-hidden
        className="absolute -top-1 -right-1 h-2 w-2 rounded-full"
        style={{
          backgroundColor: "#95BF47",
          boxShadow: "0 0 14px rgba(149,191,71,0.7)",
        }}
      />
      {node.official && Logo ? (
        <Logo size={Math.round(size * 0.52)} />
      ) : (
        <span className="font-display text-white text-[16px] font-[650] tracking-tight">
          {node.monogram}
        </span>
      )}
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 1px rgba(149,191,71,0.40), 0 0 36px rgba(149,191,71,0.35)",
        }}
      />
      <span
        className={cn(
          "absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap",
          "px-2 py-0.5 rounded-md bg-black/75 border border-white/10",
          "font-mono text-[10px] uppercase tracking-[0.18em] text-white/85",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
        )}
      >
        {node.name}
      </span>
    </div>
  );
};

const OrbitRing = ({
  radius,
  items,
  duration,
  direction,
  dashed,
  nodeSize,
  reduced,
}) => {
  const total = items.length;
  const diameter = radius * 2;
  return (
    <div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{
        width: diameter,
        height: diameter,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-full",
          dashed
            ? "border border-dashed border-white/12"
            : "border border-white/10",
        )}
      />
      <motion.div
        className="absolute inset-0 pointer-events-auto"
        animate={reduced ? undefined : { rotate: 360 * direction }}
        transition={
          reduced ? undefined : { duration, repeat: Infinity, ease: "linear" }
        }
        style={{ transformOrigin: "50% 50%" }}
      >
        {items.map((node, i) => {
          const angle = (i / total) * 360;
          return (
            <div
              key={node.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
              }}
            >
              <motion.div
                animate={reduced ? undefined : { rotate: -360 * direction }}
                transition={
                  reduced
                    ? undefined
                    : { duration, repeat: Infinity, ease: "linear" }
                }
                style={{ transformOrigin: "50% 50%" }}
              >
                <motion.div
                  animate={reduced ? undefined : { y: [0, -6, 0] }}
                  transition={
                    reduced
                      ? undefined
                      : {
                          duration: 3.6 + i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }
                  }
                  style={{
                    width: nodeSize,
                    height: nodeSize,
                    marginLeft: -nodeSize / 2,
                    marginTop: -nodeSize / 2,
                  }}
                >
                  <OrbitNode node={node} size={nodeSize} />
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const Hero = ({ onOpenLeadForm }) => {
  const scale = useResponsiveScale();
  const reduced = useReducedMotion();

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  // Ring radii scaled responsively (px) — compact so logo + text both visible
  const r0 = 115 * scale;
  const r1 = 180 * scale;
  const r2 = 250 * scale;
  const nodeSize = Math.round(48 * scale);
  const hubSize = Math.round(132 * scale);

  const ring0 = ORBIT_NODES.filter((n) => n.ring === 0);
  const ring1 = ORBIT_NODES.filter((n) => n.ring === 1);
  const ring2 = ORBIT_NODES.filter((n) => n.ring === 2);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className={cn(
        // EXACT classes from the original IlluminatedHero source
        "relative w-full flex min-h-screen flex-wrap items-center justify-center overflow-hidden bg-black text-[calc(var(--size)*0.022)] text-white",
        "[--factor:min(1000px,100vh)] [--size:min(var(--factor),100vw)]",
      )}
    >
      {/* === EXACT background glow structure from the original === */}
      <div className="absolute h-full w-full max-w-[540px]">
        <div className="shadow-bgt absolute size-full translate-[0_-70%] scale-[1.2] animate-[onloadbgt_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
        <div className="shadow-bgb absolute size-full translate-[0_-70%] scale-[1.2] animate-[onloadbgb_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
      </div>

      {/* === Foreground content: stacked headline → orbital system (Shopify focal) → CTAs === */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-16 pointer-events-none">
        {/* Small status label */}
        <div className="animate-[onloadopacity_900ms_ease-out_forwards] opacity-0 mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 pointer-events-auto">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: "#95BF47",
              boxShadow: "0 0 12px rgba(149,191,71,0.7)",
            }}
          />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.20em] uppercase text-white/75">
            SYSTEM STATUS · NOMINAL · COMMERCE OS
          </span>
        </div>

        {/* === EXACT illuminated text treatment from the original (recolored) === */}
        <div
          className="text-center text-4xl sm:text-5xl md:text-6xl   font-semibold leading-[1.04] tracking-[-0.035em] max-w-[1100px]"
          aria-hidden="true"
        >
          <span
            className={cn(
              "relative inline-block pointer-events-auto",
              // "before:absolute before:inset-0 before:animate-[onloadopacity_1s_ease-out_forwards] before:opacity-0 before:content-[attr(data-text)]",
              
            )}
            // style={{ filter: "url(#glow-4)" }}
            data-text="Built Around Shopify."
          >
            Built Around Shopify.
          </span>
          <br />
          <span
            className={cn(
              "relative inline-block pointer-events-auto",
              "before:absolute before:inset-0 before:animate-[onloadopacity_1s_ease-out_forwards] before:opacity-0 before:content-[attr(data-text)]",
              "before:bg-[linear-gradient(0deg,#dfe5ee_0%,#fffaf6_50%)] before:bg-clip-text before:text-[#fffaf6]",
            )}
            // style={{ filter: "url(#glow-4)" }}
            data-text="Engineered For Growth."
          >
            Engineered For Growth.
          </span>
        </div>

        {/* Accessible (non-aria-hidden) headline for screen readers */}
        <h1 className="sr-only">
          Built Around Shopify. Engineered For Growth.
        </h1>

        {/* === Shopify visual focal point + orbiting ecosystem === */}
        <div
          className="relative mt-6 sm:mt-8 lg:mt-8 animate-[onloadopacity_1.2s_ease-out_forwards] opacity-0 pointer-events-auto"
          style={{
            width: (r2 + nodeSize / 2) * 2 + 25,
            height: (r2 + nodeSize / 2) * 2 + 25,
          }}
        >
          {/* faint outermost ring */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.06] pointer-events-none"
            style={{
              width: (r2 + 40) * 2,
              height: (r2 + 40) * 2,
              transform: "translate(-50%, -50%)",
            }}
          />

          <OrbitRing
            radius={r0}
            items={ring0}
            duration={RING_CONFIG[0].duration}
            direction={RING_CONFIG[0].direction}
            dashed={RING_CONFIG[0].dashed}
            nodeSize={nodeSize}
            reduced={reduced}
          />
          <OrbitRing
            radius={r1}
            items={ring1}
            duration={RING_CONFIG[1].duration}
            direction={RING_CONFIG[1].direction}
            dashed={RING_CONFIG[1].dashed}
            nodeSize={nodeSize}
            reduced={reduced}
          />
          <OrbitRing
            radius={r2}
            items={ring2}
            duration={RING_CONFIG[2].duration}
            direction={RING_CONFIG[2].direction}
            dashed={RING_CONFIG[2].dashed}
            nodeSize={nodeSize}
            reduced={reduced}
          />

          {/* Central Shopify Hub — official logo, illuminated via SVG filter */}
          <div
            data-testid="hero-shopify-hub"
            className={cn(
              "absolute left-1/2 top-1/2 grid place-items-center rounded-3xl pointer-events-auto",
              "bg-white/[0.06] border border-white/15 backdrop-blur-xl",
            )}
            style={{
              width: hubSize,
              height: hubSize,
              transform: "translate(-50%, -50%)",
              boxShadow:
                "0 0 0 1px rgba(149,191,71,0.28), 0 18px 60px rgba(0,0,0,0.55), 0 0 80px rgba(149,191,71,0.35)",
            }}
          >
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 90deg, rgba(149,191,71,0.0), rgba(149,191,71,0.55), rgba(149,191,71,0.0) 60%)",
                WebkitMaskImage:
                  "radial-gradient(transparent 60%, black 62%, black 66%, transparent 70%)",
                maskImage:
                  "radial-gradient(transparent 60%, black 62%, black 66%, transparent 70%)",
                opacity: 0.9,
              }}
              animate={reduced ? undefined : { rotate: 360 }}
              transition={
                reduced
                  ? undefined
                  : { duration: 14, repeat: Infinity, ease: "linear" }
              }
            />
            {/* Apply the illuminated SVG filter to the Shopify logo for premium glow */}
            <span
              className="relative inline-flex"
              style={{ filter: "url(#glow-4)" }}
            >
              <ShopifyLogo
                size={Math.round(hubSize * 0.6)}
                className="text-[#95BF47]"
              />
            </span>
          </div>

          {/* Mission control telemetry */}
          <span
            aria-hidden
            className="absolute top-1 left-1 font-mono text-[10px] tracking-[0.18em] uppercase text-white/40"
          >
            SECTOR&nbsp;01 / CORE
          </span>
          <span
            aria-hidden
            className="absolute bottom-1 right-1 font-mono text-[10px] tracking-[0.18em] uppercase text-white/40"
          >
            T+00:14 · NOMINAL
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 animate-[onloadopacity_1.3s_ease-out_forwards] opacity-0 pointer-events-auto">
          <button
            type="button"
            onClick={onOpenLeadForm}
            data-testid="hero-start-project-button"
            className={cn(
              "inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-medium",
              "bg-[#95BF47] text-[#071006] hover:bg-[#B7E36A] active:bg-[#7FA83C]",
              "active:translate-y-px transition-colors duration-200",
              "shadow-[0_0_0_1px_rgba(149,191,71,0.30),0_18px_60px_rgba(0,0,0,0.55),0_0_56px_rgba(149,191,71,0.32)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95BF47]/55",
            )}
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollToWork}
            data-testid="hero-view-work-button"
            className={cn(
              "inline-flex items-center gap-2 h-12 px-5 rounded-xl text-sm",
              "bg-white/[0.06] text-white border border-white/15 backdrop-blur-md",
              "hover:border-white/25 hover:bg-white/[0.10]",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35",
            )}
          >
            View Shopify Work
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* === Bottom telemetry strip === */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-black/40 backdrop-blur-sm z-10">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
          <div className="py-3 flex items-center gap-6 overflow-hidden">
            {[
              "PIPELINE · ONLINE",
              "INTEGRATIONS · 12 ACTIVE",
              "DEPLOY · GREEN",
              "LATENCY · 42ms",
              "PACKETS · 128/s",
              "SHOPIFY · CORE",
              "PLUS · STAGED",
              "CDN · NOMINAL",
            ].map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55 whitespace-nowrap inline-flex items-center gap-2"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: "#95BF47",
                    boxShadow: "0 0 8px rgba(149,191,71,0.6)",
                  }}
                />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* === EXACT SVG filter definition (recolored to Shopify Green) === */}
      <svg
        className="absolute -z-1 h-0 w-0"
        width="1440px"
        height="300px"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="glow-4"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="4"
              stdDeviation="4"
              result="blur4"
            />
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="19"
              stdDeviation="19"
              result="blur19"
            />
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="9"
              stdDeviation="9"
              result="blur9"
            />
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="30"
              stdDeviation="30"
              result="blur30"
            />

            {/* Layer 0 — bright highlight (near-white with subtle green tint) */}
            <feColorMatrix
              in="blur4"
              result="color-0-blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 0.965 0 0
                      0 0 0 0.8 0"
            />
            <feOffset
              in="color-0-blur"
              result="layer-0-offsetted"
              dx="0"
              dy="0"
              data-target-offset-y="0"
            />

            {/* Layer 1 — primary Shopify Green glow (RGB 149,191,71 = 0.584, 0.749, 0.278) */}
            <feColorMatrix
              in="blur19"
              result="color-1-blur"
              type="matrix"
              values="0.5843137254901961 0 0 0 0
                      0 0.7490196078431373 0 0 0
                      0 0 0.2784313725490196 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-1-blur"
              result="layer-1-offsetted"
              dx="0"
              dy="2"
              data-target-offset-y="2"
            />

            {/* Layer 2 — lighter Shopify Green (brighter) */}
            <feColorMatrix
              in="blur9"
              result="color-2-blur"
              type="matrix"
              values="0.7176470588235294 0 0 0 0
                      0 0.8862745098039215 0 0 0
                      0 0 0.4 0 0
                      0 0 0 0.65 0"
            />
            <feOffset
              in="color-2-blur"
              result="layer-2-offsetted"
              dx="0"
              dy="2"
              data-target-offset-y="2"
            />

            {/* Layer 3 — bright green (full alpha) */}
            <feColorMatrix
              in="blur30"
              result="color-3-blur"
              type="matrix"
              values="0.7176470588235294 0 0 0 0
                      0 0.8862745098039215 0 0 0
                      0 0 0.4117647058823529 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-3-blur"
              result="layer-3-offsetted"
              dx="0"
              dy="2"
              data-target-offset-y="2"
            />

            {/* Layer 4 — dark Shopify Green accent */}
            <feColorMatrix
              in="blur30"
              result="color-4-blur"
              type="matrix"
              values="0.2784313725490196 0 0 0 0
                      0 0.36470588235294116 0 0 0
                      0 0 0.1058823529411765 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-4-blur"
              result="layer-4-offsetted"
              dx="0"
              dy="16"
              data-target-offset-y="16"
            />

            {/* Layer 5 — deeper dark green */}
            <feColorMatrix
              in="blur30"
              result="color-5-blur"
              type="matrix"
              values="0.20392156862745098 0 0 0 0
                      0 0.27058823529411763 0 0 0
                      0 0 0.0784313725490196 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-5-blur"
              result="layer-5-offsetted"
              dx="0"
              dy="64"
              data-target-offset-y="64"
            />

            {/* Layer 6 — very deep green */}
            <feColorMatrix
              in="blur30"
              result="color-6-blur"
              type="matrix"
              values="0.12156862745098039 0 0 0 0
                      0 0.1568627450980392 0 0 0
                      0 0 0.054901960784313725 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-6-blur"
              result="layer-6-offsetted"
              dx="0"
              dy="64"
              data-target-offset-y="64"
            />

            {/* Layer 7 — black depth shadow (unchanged) */}
            <feColorMatrix
              in="blur30"
              result="color-7-blur"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.68 0"
            />
            <feOffset
              in="color-7-blur"
              result="layer-7-offsetted"
              dx="0"
              dy="64"
              data-target-offset-y="64"
            />

            <feMerge>
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="layer-1-offsetted" />
              <feMergeNode in="layer-2-offsetted" />
              <feMergeNode in="layer-3-offsetted" />
              <feMergeNode in="layer-4-offsetted" />
              <feMergeNode in="layer-5-offsetted" />
              <feMergeNode in="layer-6-offsetted" />
              <feMergeNode in="layer-7-offsetted" />
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="absolute h-full w-full max-w-[540px] bottom-0">

        <div className="shadow-bgb-reverse absolute size-full translate-y-[0%] scale-[1.2] animate-[onloadbgbreverse_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
        <div className="shadow-bgb-reverse absolute size-full translate-y-[0%] scale-[1.2] animate-[onloadbgbreverse_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
