"use client";

import Industries from "@/components/ai/Industries";
import Layout from "@/components/apple/Layout";
import Capabilities from "@/components/erp/Capabilities";
import CTA from "@/components/erp/CTA";
import Hero from "@/components/erp/Hero";
import Integrations from "@/components/erp/Integrations";
import Modules from "@/components/erp/Modules";
import ProcessFlow from "@/components/erp/ProcessFlow";
import StarsBackground from "@/components/erp/StarsBackground";
import Work from "@/components/portfolio-animation/sections/Work";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";

const LOGISTICS_MODULES = [
  {
    id: "warehouse",
    label: "Warehouse",
    desc: "Stock, bins, inventory flow",
    iconName: "boxes",
    angle: 0,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "dispatch",
    label: "Dispatch",
    desc: "Orders, jobs, assignments",
    iconName: "truck",
    angle: 45,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "fleet",
    label: "Fleet",
    desc: "Vehicles, drivers, maintenance",
    iconName: "truck",
    angle: 90,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "routes",
    label: "Routes",
    desc: "Planning, routing, optimization",
    iconName: "analytics",
    angle: 135,
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "billing",
    label: "Billing",
    desc: "Freight cost, invoices, payments",
    iconName: "wallet",
    angle: 180,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "analytics",
    label: "Analytics",
    desc: "KPIs, delays, performance",
    iconName: "barChart",
    angle: 225,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "tracking",
    label: "Tracking",
    desc: "Live status, ETA, proof of delivery",
    iconName: "truck",
    angle: 270,
    image:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "carriers",
    label: "Carriers",
    desc: "Partners, rates, contracts",
    iconName: "users",
    angle: 315,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&h=800&fit=crop&q=80",
  },
];

const LOGISTICS_MODULE_SCROLL_ORDER = [
  "tracking",
  "carriers",
  "warehouse",
  "dispatch",
  "fleet",
  "routes",
  "billing",
  "analytics",
];

const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "ERP Ecosystem · Operations Visibility",
    title: "Unifying operations into one ERP command layer.",
    metrics: [
      { v: "98%", l: "process visibility" },
      { v: "12x", l: "faster reporting" },
    ],
    url: "erp-command.b2b/case",
    preview: {
      accent: "#22D3EE",
      title: "ERP Command Center — Operations Layer",
      lines: [
        { label: "Departments connected", value: "8" },
        { label: "Process visibility", value: "98%" },
        { label: "Reporting speed", value: "12x" },
      ],
      chart: [22, 30, 38, 46, 55, 63, 70, 78, 84, 89, 94, 98],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "Workflow Automation · Connected Departments",
    title: "Automating workflows across finance and operations.",
    metrics: [
      { v: "-64%", l: "manual work reduced" },
      { v: "1x", l: "single source of truth" },
    ],
    url: "workflow-automation.b2b/live",
    preview: {
      accent: "#06B6D4",
      title: "Workflow Automation — Department Sync",
      lines: [
        { label: "Automated workflows", value: "42" },
        { label: "Manual effort reduced", value: "-64%" },
        { label: "Data conflicts resolved", value: "1 source" },
      ],
      chart: [62, 58, 53, 49, 43, 38, 32, 27, 22, 18, 14, 10],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Enterprise Governance · Data Control",
    title: "Building governed systems for real-time decisions.",
    metrics: [
      { v: "24/7", l: "business visibility" },
      { v: "100+", l: "integrations supported" },
    ],
    url: "enterprise-governance.b2b/app",
    preview: {
      accent: "#0891B2",
      title: "Enterprise Governance — Visibility Dashboard",
      lines: [
        { label: "Integrations connected", value: "100+" },
        { label: "Live business modules", value: "8" },
        { label: "Governance alerts", value: "Real-time" },
      ],
      chart: [28, 34, 41, 49, 57, 65, 72, 79, 85, 91, 96, 100],
    },
  },
];
export default function ErpPage() {
  return (
    <Layout tint="blue">
      <div className="theme-enterprise-systems relative min-h-screen overflow-x-hidden">
        <StarsBackground
          className="!fixed inset-0 z-0 pointer-events-none"
          starColor="#0891B2"
        />

        <div className="relative z-[1]">
          <Hero />
          <Capabilities />
          <Work
            title="Enterprise systems cases."
            titleLower="Operational clarity."
            cardsData={PROJECTS}
          />
          <Modules
            title={
              <>
                Eight modules. <span className="text-(--b2b-primary)">One nucleus.</span>
              </>
            }
            description='An orbital architecture where every operational module is connected to the ERP core in real-time.'
            modules={LOGISTICS_MODULES}
            scrollOrder={LOGISTICS_MODULE_SCROLL_ORDER}
          />
          <ProcessFlow />
          <Industries />
          <CommandCenter />
          <Integrations />
          <CTA />
        </div>
      </div>
    </Layout>
  );
}
