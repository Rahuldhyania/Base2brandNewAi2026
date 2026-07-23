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
    blurb: "Multi-tenant, subscription-driven platforms engineered for measurable growth.",
    bullets: [
      "Multi-tenancy & workspace isolation",
      "Subscription plans & metered billing",
      "Audit-ready admin & RBAC",
      "Usage analytics & feature flags",
    ],
    sample: { Orgs: "42", Plans: "4", Users: "12,480", Uptime: "99.99%" },
  },
  {
    id: "internal",
    icon: Cog,
    title: "Internal Enterprise Tools",
    blurb: "Custom tools that help teams work faster, reduce manual processes and operate with clearer visibility.",
    bullets: [
      "Role-based workflows",
      "Approval systems",
      "Team dashboards",
      "Operational reporting",
    ],
    sample: { Teams: "18", Workflows: "36", Users: "4,800", "Time Saved": "32%" },
  },
  {
    id: "customer-portals",
    icon: Users,
    title: "Customer Portals",
    blurb: "Secure digital portals that let customers access services, data, documents, orders, tickets and account information.",
    bullets: [
      "Secure login",
      "Account management",
      "Self-service workflows",
      "Customer communication",
    ],
    sample: {
      Accounts: "8,200",
      Requests: "24k",
      "Self-Service Rate": "68%",
      "Response Time": "−41%",
    },
  },
  {
    id: "marketplace",
    icon: Store,
    title: "Marketplace Applications",
    blurb: "Multi-sided platforms that connect buyers, sellers, vendors, partners or service providers.",
    bullets: [
      "Listings",
      "Payments",
      "Vendor dashboards",
      "Search and filtering",
    ],
    sample: {
      Vendors: "320",
      Listings: "14,500",
      Transactions: "3.2x",
      "Payment Success": "98.7%",
    },
  },
  {
    id: "ops",
    icon: Activity,
    title: "Operations Dashboards",
    blurb: "Real-time visibility into teams, systems, processes, data and performance.",
    bullets: [
      "Live metrics",
      "Data visualization",
      "Alerts",
      "Business intelligence",
    ],
    sample: {
      "Data Sources": "12",
      "Live Metrics": "86",
      "Reporting Time": "−55%",
      Visibility: "24/7",
    },
  },
  {
    id: "field",
    icon: Construction,
    title: "Field Workforce Applications",
    blurb: "Apps and platforms for teams working outside the office — logistics, field service, inspections, maintenance and operations.",
    bullets: [
      "Mobile-first workflows",
      "Offline sync",
      "Task assignment",
      "Location-based reporting",
    ],
    sample: {
      "Field Users": "2,400",
      "Tasks Completed": "38k",
      "Sync Success": "99.5%",
      "Manual Reporting": "−47%",
    },
  },
  {
    id: "b2b",
    icon: Building,
    title: "B2B Platforms",
    blurb: "Business platforms designed for complex workflows, multiple user roles and structured data exchange.",
    bullets: [
      "Client management",
      "Partner access",
      "Workflow automation",
      "Reporting layers",
    ],
    sample: { Clients: "650", Partners: "42", Workflows: "28", "Process Speed": "2.6x" },
  },
  {
    id: "digital",
    icon: Globe2,
    title: "Digital Ecosystems",
    blurb: "Connected digital systems where websites, apps, APIs, CRMs, dashboards and automations work together.",
    bullets: [
      "Unified architecture",
      "Shared data layer",
      "API integrations",
      "Centralized operations",
    ],
    sample: {
      "Systems Connected": "16",
      APIs: "48",
      "Data Layers": "6",
      "Operating View": "360°",
    },
  },
];

const ProductsWeBuild = () => {
  const [active, setActive] = useState(PRODUCTS[0].id);
  const product = PRODUCTS.find((p) => p.id === active);
  const Icon = product.icon;

  return (
    <section id="products" className="b2b-section relative py-2 md:py-12">
      <div className="b2b-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="text-(--b2b-primary) mb-2 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full text-(--b2b-primary)" />
            Products We Build
          </div>
          <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            <span className="b2b-text-gradient">Software engineered around </span>
            <span className="text-(--b2b-primary)">business outcomes.</span>
          </h2>
          <p className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3">
           Our software development services are shaped around that outcome first — then designed and engineered with the right stack.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide" data-testid="products-tablist">
          {PRODUCTS.map((p) => {
            const isActive = p.id === active;
            const PIcon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`group inline-flex items-center gap-1 md:gap-2 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] md:text-[13px] font-medium transition-all duration-300 border whitespace-nowrap ${
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
              className="col-span-12 lg:col-span-7 b2b-card p-4 md:p-8"
              data-testid="product-detail"
            >
              <div className="flex items-start gap-2 md:gap-5">
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
                    className="flex items-start gap-3 py-2 md:py-3  px-3 rounded-lg md:rounded-xl border border-white/[0.06] bg-white/[0.015]"
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
              className="col-span-12 lg:col-span-5 b2b-card p-4 sm:p-8 lg:p-10"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 mb-5">Engagement Snapshot</div>
              <div className="grid grid-cols-2 gap-px bg-white/[0.05] rounded-xl overflow-hidden">
                {Object.entries(product.sample).map(([k, v]) => (
                  <div key={k} className="bg-[#070b1c] p-3 md:p-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">{k}</div>
                    <div className="mt-2 text-xl md:text-2xl font-semibold text-white b2b-number">{v}</div>
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
