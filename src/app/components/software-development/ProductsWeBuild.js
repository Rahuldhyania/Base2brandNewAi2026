'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Users,
  Cog,
  Store,
  Activity,
  Construction,
  Building,
  Globe2,
} from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";

const PRODUCTS = [
  {
    id: "saas",
    icon: Workflow,
    title: "SaaS Platforms",
    blurb: "Multi-tenant, subscription-driven products engineered for measurable growth.",
    bullets: [
      "Multi-tenancy & workspace isolation",
      "Subscription, plans & metered billing",
      "Audit-ready admin & RBAC",
      "Usage analytics & feature flags",
    ],
    sample: { Org: "42", Plans: "4", Users: "12,480", Uptime: "99.99%" },
  },
  {
    id: "internal",
    icon: Cog,
    title: "Internal Enterprise Tools",
    blurb: "Operational tooling that compresses cycle time across departments.",
    bullets: [
      "Workflow automation",
      "Approval & audit trails",
      "SSO & role-based access",
      "Integrations with ERPs / CRMs",
    ],
    sample: { Workflows: "86", Approvals: "3,210", Roles: "12", Apps: "24" },
  },
  {
    id: "customer-portals",
    icon: Users,
    title: "Customer Portals",
    blurb: "Branded self-service hubs that reduce support load and lift retention.",
    bullets: [
      "Single Sign-On & federation",
      "Self-service plans & billing",
      "Knowledge base & ticketing",
      "Account telemetry",
    ],
    sample: { Customers: "58k", Tickets: "-38%", NPS: "+18", Login: "SSO" },
  },
  {
    id: "marketplace",
    icon: Store,
    title: "Marketplace Applications",
    blurb: "Two-sided platforms engineered for liquidity, trust, and scale.",
    bullets: [
      "Listing, search & ranking",
      "Escrow & multi-party payouts",
      "Reviews, trust & safety",
      "Vendor / buyer dashboards",
    ],
    sample: { GMV: "$8.2M", Vendors: "1,240", SKUs: "34k", Match: "94%" },
  },
  {
    id: "ops",
    icon: Activity,
    title: "Operations Dashboards",
    blurb: "Real-time visibility into the systems that run your business.",
    bullets: [
      "Streaming data ingestion",
      "KPI & SLA monitoring",
      "Alerting & escalation",
      "Drill-down analytics",
    ],
    sample: { Streams: "22", KPIs: "68", Alerts: "<5m", Refresh: "Live" },
  },
  {
    id: "field",
    icon: Construction,
    title: "Field Workforce Applications",
    blurb: "Mobile-first apps for on-the-ground teams in inspections, service & logistics.",
    bullets: [
      "Offline-first data capture",
      "Geo-tagged tasks & routes",
      "Camera, OCR & signatures",
      "Native Android performance",
    ],
    sample: { Crew: "320", Tasks: "9.8k/d", Offline: "100%", Sync: "Diff" },
  },
  {
    id: "b2b",
    icon: Building,
    title: "B2B Platforms",
    blurb: "Mission-critical platforms underpinning enterprise revenue.",
    bullets: [
      "Partner / channel portals",
      "Quote-to-cash & contracting",
      "Integrations & EDI",
      "Enterprise-grade security",
    ],
    sample: { Partners: "450", Contracts: "12k", APIs: "86", SLA: "99.95%" },
  },
  {
    id: "digital",
    icon: Globe2,
    title: "Digital Ecosystems",
    blurb: "Connected product families across web, mobile, and APIs.",
    bullets: [
      "Unified identity & data graph",
      "Shared design system",
      "Cross-product analytics",
      "Composable services",
    ],
    sample: { Products: "6", Services: "42", Apps: "4", Identity: "1 SSO" },
  },
];

const ProductsWeBuild = () => {
  const [active, setActive] = useState(PRODUCTS[0].id);
  const product = PRODUCTS.find((p) => p.id === active);
  const Icon = product.icon;

  return (
    <section id="products" className="b2b-section relative py-12">
      <div className="b2b-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="text-(--b2b-primary) mb-6">
            <span className="w-1.5 h-1.5 rounded-full text-(--b2b-primary)" />
            Products We Build
          </div>
          <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            <span className="b2b-text-gradient">Software engineered around </span>
            <span className="text-(--b2b-primary)">business outcomes.</span>
          </h2>
          <p className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3">
            From SaaS products to mission-critical B2B platforms — every engagement is shaped by
            the outcome it must deliver.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2" data-testid="products-tablist">
          {PRODUCTS.map((p) => {
            const isActive = p.id === active;
            const PIcon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-[color:var(--b2b-primary)]/12 border-[color:var(--b2b-primary)]/50 text-white shadow-[0_0_0_4px_rgba(255,59,48,0.06)]"
                    : "bg-white/[0.02] border-white/10 text-white/70 hover:text-white hover:border-[color:var(--b2b-primary)]/30"
                }`}
                data-testid={`product-tab-${p.id}`}
              >
                <PIcon className={`w-3.5 h-3.5 ${isActive ? "text-[color:var(--b2b-primary)]" : "text-white/55"}`} />
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Active content */}
        <div className="mt-10 grid grid-cols-12 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-7 b2b-card p-8"
              data-testid="product-detail"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl border border-[color:var(--b2b-primary)]/40 bg-[color:var(--b2b-primary)]/10 grid place-items-center">
                  <Icon className="w-5 h-5 text-[color:var(--b2b-primary)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{product.title}</h3>
                  <p className="mt-2 text-white/65 leading-relaxed">{product.blurb}</p>
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {product.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.015]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-primary)]" />
                    <span className="text-[14px] text-white/80 font-semibold">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stat panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${product.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="col-span-12 lg:col-span-5 b2b-card p-8 lg:p-10"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 mb-5">Engagement Snapshot</div>
              <div className="grid grid-cols-2 gap-px bg-white/[0.05] rounded-xl overflow-hidden">
                {Object.entries(product.sample).map(([k, v]) => (
                  <div key={k} className="bg-[#070b1c] p-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">{k}</div>
                    <div className="mt-2 text-2xl font-semibold text-white b2b-number">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-[12.5px] text-white/55 leading-relaxed">
                Sample telemetry shape from a live engagement. Actual numbers vary by client
                requirements, scale, and traffic envelope.
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductsWeBuild;
