import { ArrowUpRight } from "lucide-react";
import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import StatusChip from "@/components/site/StatusChip";
import { cn } from "@/lib/utils";

const CASES = [
  {
    key: "northwind-dtc",
    brand: "Northwind Naturals",
    category: "DTC Wellness · Shopify Plus",
    tagline: "From Magento legacy to a Plus-grade subscription engine.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { v: "3.4x", l: "Revenue lift" },
      { v: "+62%", l: "AOV" },
      { v: "-38%", l: "Churn" },
    ],
    tags: ["Plus", "Recharge", "Klaviyo"],
  },
  {
    key: "ironclad-apparel",
    brand: "Ironclad Apparel",
    category: "Performance Apparel · Headless",
    tagline: "Hydrogen + Oxygen rebuild. 92 Lighthouse, sub-second LCP.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { v: "92", l: "Lighthouse" },
      { v: "-46%", l: "LCP" },
      { v: "+28%", l: "CR" },
    ],
    tags: ["Hydrogen", "Headless", "Markets"],
  },
  {
    key: "prima-grocer",
    brand: "Prima Grocer",
    category: "Subscription Grocery · D2C",
    tagline: "Replenishment + prepaid plans drove a step-change in LTV.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { v: "2.1x", l: "LTV" },
      { v: "+71%", l: "Repeat" },
      { v: "4.6⋆", l: "NPS" },
    ],
    tags: ["Subscriptions", "CRO", "Recharge"],
  },
  {
    key: "vertex-b2b",
    brand: "Vertex B2B",
    category: "Wholesale + Retail · Plus B2B",
    tagline: "A unified B2B + DTC storefront with custom pricebooks and net-terms.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { v: "+54%", l: "B2B orders" },
      { v: "-31%", l: "Manual ops" },
      { v: "12d", l: "Time-to-launch" },
    ],
    tags: ["B2B", "Plus", "ERP"],
  },
  {
    key: "halcyon-beauty",
    brand: "Halcyon Beauty",
    category: "Beauty DTC · Lifecycle",
    tagline: "Klaviyo + Meta lifecycle program with measurable lift across cohorts.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aaa8e0aff3c0?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { v: "+41%", l: "Email rev." },
      { v: "-27%", l: "CAC" },
      { v: "+19%", l: "Repeat rate" },
    ],
    tags: ["Klaviyo", "Paid Media", "CRO"],
  },
  {
    key: "hearth-home",
    brand: "Hearth & Home",
    category: "Home Goods · ERP Integrated",
    tagline: "Odoo + Unicommerce wired into Shopify with real-time inventory.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { v: "99.4%", l: "Inventory acc." },
      { v: "-58%", l: "Stock-outs" },
      { v: "+23%", l: "Conversion" },
    ],
    tags: ["Odoo", "Unicommerce", "Inventory"],
  },
];

export const CaseStudies = () => {
  return (
    <section
      id="work"
      data-testid="case-studies-section"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="WORK · SHOPIFY CASE STUDIES"
            title="Storefronts launched. Systems orchestrated."
            subtitle="Selected missions — from migrations and Plus builds to subscription engines and ERP-integrated operations. (Sample metrics)"
          />
          <Reveal delay={0.1}>
            <StatusChip>6 MISSIONS LOGGED</StatusChip>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CASES.map((c, idx) => (
            <Reveal key={c.key} delay={idx * 0.05}>
              <article
                data-testid={`case-study-card-${c.key}`}
                className={cn(
                  "group relative rounded-2xl overflow-hidden",
                  "bg-white/[0.035] border border-white/10",
                  "hover:border-white/20 hover:bg-white/[0.05]",
                  "transition-colors duration-200",
                )}
              >
                {/* Media */}
                <div className="relative aspect-[16/9] bg-white/[0.04] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.brand}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    style={{ filter: "grayscale(0.4) contrast(1.05)" }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(5,5,5,0.20) 0%, rgba(5,5,5,0.65) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 b2b-grid-lines opacity-[0.10]"
                  />
                  {/* Corner marker */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 border border-white/12 px-2 py-1 backdrop-blur-md">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-[#95BF47]"
                      style={{ boxShadow: "0 0 8px rgba(149,191,71,0.55)" }}
                    />
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/75">
                      CASE · {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55">
                        {c.category}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-[650] tracking-[-0.02em] text-white">
                        {c.brand}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#95BF47] transition-colors duration-150" />
                  </div>

                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {c.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/8 pt-4">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display text-lg font-[650] tracking-[-0.02em] text-white">
                          {m.v}
                        </div>
                        <div className="mt-0.5 font-mono text-[10px] tracking-[0.18em] uppercase text-white/50">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
