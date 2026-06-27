"use client";

import Layout from "@/components/apple/Layout";
import Capabilities from "@/components/erp/Capabilities";
import CTA from "@/components/erp/CTA";
import Hero from "@/components/erp/Hero";
import Integrations from "@/components/erp/Integrations";
import Modules from "@/components/erp/Modules";
import ProcessFlow from "@/components/erp/ProcessFlow";
import StarsBackground from "@/components/erp/StarsBackground";

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
          <Integrations />
          <CTA />
        </div>
      </div>
    </Layout>
  );
}
