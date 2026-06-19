'use client'
import {
  PenTool,
  Code2,
  Crown,
  ArrowLeftRight,
  Database,
  Repeat,
  LineChart,
} from "lucide-react";
import Container from "@/components/shopify-solution/site/Container";
import SectionHeader from "@/components/shopify-solution/site/SectionHeader";
import Reveal from "@/components/shopify-solution/site/Reveal";
import StatusChip from "@/components/shopify-solution/site/StatusChip";
import { cn } from "@/lib/utils";

const MODULES = [
  {
    key: "design-system",
    title: "Design System",
    icon: PenTool,
    description:
      "Premium storefront design, conversion-driven UX, and a Shopify-native design system that scales across collections, PDPs, and bundles.",
    capabilities: ["Brand-led UX", "Headless-ready themes", "CRO-first PDPs"],
    code: "MOD-01",
  },
  {
    key: "shopify-development",
    title: "Shopify Development",
    icon: Code2,
    description:
      "Hydrogen, Online Store 2.0, Liquid theme engineering, and custom app development — built to performance and accessibility standards.",
    capabilities: ["Online Store 2.0", "Hydrogen + Oxygen", "Custom Apps"],
    code: "MOD-02",
  },
  {
    key: "shopify-plus",
    title: "Shopify Plus",
    icon: Crown,
    description:
      "Plus-grade storefronts with B2B, Markets, Flow automations, Functions, and ShopifyQL analytics. Built for enterprise commerce velocity.",
    capabilities: ["Markets + B2B", "Flow + Functions", "Wholesale"],
    code: "MOD-03",
  },
  {
    key: "migrations",
    title: "Migrations",
    icon: ArrowLeftRight,
    description:
      "Magento, BigCommerce, Salesforce Commerce, WooCommerce — migrated to Shopify with SEO, data, and order integrity preserved.",
    capabilities: ["Magento → Shopify", "Data integrity", "SEO preserved"],
    code: "MOD-04",
  },
  {
    key: "erp-integrations",
    title: "ERP Integrations",
    icon: Database,
    description:
      "Odoo, Unicommerce, EasyEcom, Increff and bespoke ERP/OMS integrations. Inventory, orders, financials — stitched into one source of truth.",
    capabilities: ["Odoo / NetSuite", "OMS sync", "Inventory + Finance"],
    code: "MOD-05",
  },
  {
    key: "subscription-commerce",
    title: "Subscription Commerce",
    icon: Repeat,
    description:
      "Recharge, Bold, and Shopify Subscriptions — designed for retention, LTV, and churn reduction. Replenishment, bundles, and prepaid plans.",
    capabilities: ["Recharge", "Prepaid plans", "Churn ops"],
    code: "MOD-06",
  },
  {
    key: "growth-services",
    title: "Growth Services",
    icon: LineChart,
    description:
      "Klaviyo lifecycle, Meta + Google paid acquisition, CRO programs, and analytics. Continuous experimentation against revenue KPIs.",
    capabilities: ["Klaviyo lifecycle", "Paid acquisition", "CRO + Analytics"],
    code: "MOD-07",
  },
];

export const CommerceSystems = () => {
  return (
    <section
      id="services"
      data-testid="commerce-systems-section"
      className="relative py-14"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px circle at 20% 10%, rgba(149,191,71,0.08), rgba(5,5,5,0) 55%)",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="COMMERCE SYSTEMS · SERVICES"
            title="Engineered modules for the Shopify operating system."
            subtitle="Each capability is a self-contained system with its own SLAs, telemetry, and KPIs — designed to interlock with the others."
          />
          <Reveal delay={0.1}>
            <StatusChip>7 MODULES ONLINE</StatusChip>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {MODULES.map((m, idx) => {
            const Icon = m.icon;
            return (
              <Reveal className="h-full" key={m.key} delay={idx * 0.05}>
                <article
                  data-testid={`service-module-card-${m.key}`}
                  className={cn(
                    "group relative rounded-2xl p-5 sm:p-6 h-full",
                    "bg-white/[0.035] border border-white/10",
                    "hover:border-white/20 hover:bg-white/[0.05]",
                    "transition-colors duration-200",
                  )}
                >
                  {/* Corner code */}
                  <span
                    aria-hidden
                    className="absolute top-3 right-4 font-mono text-[10px] tracking-[0.18em] uppercase text-white/35"
                  >
                    {m.code}
                  </span>

                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/12">
                      <Icon className="h-5 w-5 text-[#95BF47]" />
                    </div>
                  </div>

                  <h3 className="font-display mt-5 text-xl font-[650] tracking-[-0.02em] text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {m.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {m.capabilities.map((c) => (
                      <li
                        key={c}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1"
                      >
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full bg-[#95BF47]"
                        />
                        <span className="text-[11px] text-white/75">{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-white/45">
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[#95BF47]"
                        style={{ boxShadow: "0 0 10px rgba(149,191,71,0.55)" }}
                      />
                      Module online
                    </span>
                    <span>{`SLA · 99.9%`}</span>
                  </div>

                  {/* hover halo */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(149,191,71,0.22), 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(149,191,71,0.10)",
                    }}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CommerceSystems;
