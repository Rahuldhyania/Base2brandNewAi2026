import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/shopify-solution/site/Container";
import SectionHeader from "@/components/shopify-solution/site/SectionHeader";
import Reveal from "@/components/shopify-solution/site/Reveal";
import StatusChip from "@/components/shopify-solution/site/StatusChip";
import { cn } from "@/lib/utils";
import {
  ShopifyLogo,
  ShopifyPlusLogo,
  KlaviyoLogo,
  RechargeLogo,
  MetaLogo,
  GoogleLogo,
} from "@/components/shopify-solution/site/Logos";

const CATEGORIES = [
  {
    key: "commerce-core",
    label: "Commerce Core",
    items: [
      { name: "Shopify", Logo: ShopifyLogo, official: true },
      { name: "Shopify Plus", Logo: ShopifyPlusLogo, official: true },
    ],
  },
  {
    key: "subscription",
    label: "Subscription",
    items: [{ name: "Recharge", Logo: RechargeLogo, official: true }],
  },
  {
    key: "marketing",
    label: "Marketing & Lifecycle",
    items: [
      { name: "Klaviyo", Logo: KlaviyoLogo, official: true },
      { name: "Meta", Logo: MetaLogo, official: true },
      { name: "Google", Logo: GoogleLogo, official: true },
    ],
  },
  {
    key: "erp-oms",
    label: "ERP / OMS / Inventory",
    items: [
      { name: "Odoo", monogram: "Od", official: false },
      { name: "EasyEcom", monogram: "Ee", official: false },
      { name: "Unicommerce", monogram: "Uc", official: false },
      { name: "Increff", monogram: "In", official: false },
    ],
  },
];

const LogoChip = ({ item, active, onHover, onLeave }) => {
  const Logo = item.Logo;
  return (
    <button
      type="button"
      data-testid={`ecosystem-chip-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
      onMouseEnter={() => onHover?.(item.name)}
      onMouseLeave={onLeave}
      onFocus={() => onHover?.(item.name)}
      onBlur={onLeave}
      className={cn(
        "group relative h-16 w-full rounded-2xl bg-white/[0.04] border border-white/12 backdrop-blur-xl",
        "flex items-center justify-center gap-2.5 transition-colors duration-200",
        "hover:border-white/22 hover:bg-white/[0.06]",
        active && "border-[#95BF47]/45",
      )}
    >
      <span
        aria-hidden
        className="absolute -top-1 right-2 h-2 w-2 rounded-full"
        style={{ backgroundColor: "#95BF47", boxShadow: "0 0 10px rgba(149,191,71,0.55)" }}
      />
      {item.official ? (
        <Logo size={26} className="text-white" />
      ) : (
        <span className="h-9 w-9 rounded-lg bg-white/[0.05] border border-white/12 grid place-items-center font-display text-[14px] font-[650] text-white">
          {item.monogram}
        </span>
      )}
      <span className="text-sm text-white/85 font-medium">{item.name}</span>
    </button>
  );
};

export const EcosystemViz = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="integrations"
      data-testid="ecosystem-map"
      className="relative py-14 border-t border-white/[0.06]"
    >
      <div className="absolute left-0 top-1/2 h-[900px] w-[1200px] -translate-y-1/2 overflow-hidden pointer-events-none">
        <div className="shadow-bgl absolute inset-0 -translate-x-[55%] scale-[1.3] animate-[onloadbgl_1s_ease-in-out_forwards] rounded-full opacity-60" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px circle at 80% 30%, rgba(149,191,71,0.08), rgba(5,5,5,0) 55%)",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="INTEGRATIONS · ECOSYSTEM"
            title="Shopify at the core. Every system that matters wired in."
            subtitle="From marketing automation to ERP and inventory — we orchestrate a unified commerce stack with Shopify as the source of truth."
          />
          <Reveal delay={0.1}>
            <StatusChip>12 INTEGRATIONS LIVE</StatusChip>
          </Reveal>
        </div>

        {/* Hub diagram (desktop) */}
        <div className="mt-10 hidden lg:block">
          <div className="relative grid grid-cols-3 items-center gap-6">
            {/* Left categories */}
            <div className="space-y-6">
              {CATEGORIES.slice(0, 2).map((cat) => (
                <CategoryBlock
                  key={cat.key}
                  category={cat}
                  align="right"
                  onHover={setActive}
                  onLeave={() => setActive(null)}
                  active={active}
                />
              ))}
            </div>

            {/* Central hub */}
            <div className="flex items-center justify-center relative">
              <CentralHub />
              {/* Connectors (subtle dashed lines, decorative) */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                  opacity: 0.18,
                  WebkitMaskImage:
                    "radial-gradient(closest-side, transparent 45%, black 80%)",
                  maskImage:
                    "radial-gradient(closest-side, transparent 45%, black 80%)",
                }}
              />
            </div>

            {/* Right categories */}
            <div className="space-y-6">
              {CATEGORIES.slice(2).map((cat) => (
                <CategoryBlock
                  key={cat.key}
                  category={cat}
                  align="left"
                  onHover={setActive}
                  onLeave={() => setActive(null)}
                  active={active}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / tablet: stacked categories */}
        <div className="mt-10 lg:hidden space-y-6">
          {CATEGORIES.map((cat) => (
            <CategoryBlock
              key={cat.key}
              category={cat}
              align="left"
              onHover={setActive}
              onLeave={() => setActive(null)}
              active={active}
            />
          ))}
        </div>
      </Container>

    </section>
  );
};

const CategoryBlock = ({ category, align = "left", onHover, onLeave, active }) => (
  <Reveal>
    <div
      className={cn(
        "rounded-2xl bg-white/[0.025] border border-white/10 p-4",
        "backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 mb-3",
          align === "right" && "justify-end",
        )}
      >
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-[#95BF47]"
          style={{ boxShadow: "0 0 8px rgba(149,191,71,0.55)" }}
        />
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/60">
          {category.label}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {category.items.map((item) => (
          <LogoChip
            key={item.name}
            item={item}
            active={active === item.name}
            onHover={onHover}
            onLeave={onLeave}
          />
        ))}
      </div>
    </div>
  </Reveal>
);

const CentralHub = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    <div
      aria-hidden
      className="absolute inset-0 -m-24 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(closest-side, rgba(149,191,71,0.22), transparent 70%)",
      }}
    />
    {/* Faux rings */}
    <div
      aria-hidden
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/12"
      style={{ width: 280, height: 280 }}
    />
    <div
      aria-hidden
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      style={{ width: 200, height: 200 }}
    />
    {/* Central hub */}
    <div className="relative grid place-items-center h-32 w-32 rounded-3xl bg-white/[0.06] border border-white/15 backdrop-blur-xl b2b-shadow-glow">
      <ShopifyLogo size={64} className="text-[#95BF47]" />
    </div>
    <p className="mt-4 text-center font-mono text-[10px] tracking-[0.18em] uppercase text-white/55">
      Source of Truth
    </p>
  </motion.div>
);

export default EcosystemViz;
