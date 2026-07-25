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
import { LandingZone } from "@/sections/LandingZone";

const LOGISTICS_MODULES = [
  {
    id: "warehouse",
    label: "Warehouse",
    desc: "Stock, bins, inventory flow, receiving, picking, packing and fulfillment visibility.",
    iconName: "boxes",
    angle: 0,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "dispatch",
    label: "Dispatch",
    desc: "Orders, job assignments, driver coordination, delivery instructions and exception handling.",
    iconName: "truck",
    angle: 45,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "fleet",
    label: "Fleet",
    desc: "Vehicle data, driver records, maintenance workflows, utilization and route readiness.",
    iconName: "truck",
    angle: 90,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "routes",
    label: "Routes",
    desc: "Planning, routing, optimization, cost visibility and delivery performance intelligence.",
    iconName: "analytics",
    angle: 135,
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "billing",
    label: "Billing",
    desc: "Freight cost, invoices, payments, customer billing and finance reconciliation.",
    iconName: "wallet",
    angle: 180,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "analytics",
    label: "Analytics",
    desc: "KPIs, delays, forecasts, department performance and business intelligence dashboards.",
    iconName: "barChart",
    angle: 225,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "tracking",
    label: "Tracking",
    desc: "Live shipment status, ETA updates, delivery proof and operational movement.",
    iconName: "truck",
    angle: 270,
    image:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "carriers",
    label: "Carriers",
    desc: "Partner management, carrier rates, contracts, dispatch rules and performance tracking.",
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

const ERP_INDUSTRIES = [
  {
    id: "automotive",
    name: "Automotive",
    use: "Dealer operations, inventory intelligence, lead qualification, service workflows and customer follow-up systems.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    use: "Production planning, procurement, quality checks, supplier coordination, inventory movement and operational reporting.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    use: "Patient workflows, appointment operations, compliance-friendly reporting, internal approvals and secure data handling.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "logistics",
    name: "Logistics",
    use: "Shipment updates, dispatch workflows, exception handling, customer communication and operational intelligence.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    use: "Shopify automation, order management, inventory sync, product data, customer operations and revenue reporting.",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "finserv",
    name: "Financial Services",
    use: "Document workflows, approvals, internal reporting, KYC support, billing systems and risk-aware operations.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "government",
    name: "Government",
    use: "Citizen services, document intelligence, compliance workflows, policy retrieval and reporting systems.",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "education",
    name: "Education",
    use: "Student inquiry workflows, admission operations, course recommendations, CRM follow-up and learning support systems.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
  },
];

const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "Garage Management Platform · Mechanic Job Control",
    title: "Managing workshop jobs from assignment to completion.",
    metrics: [
      { v: "46%", l: "faster job allocation" },
      { v: "1x", l: "workshop operations hub" },
    ],
    url: "garage-management.b2b/case",
    preview: {
      accent: "#22D3EE",
      title: "Garage Management — Job Control Console",
      screenshot: "/images/crm21n.png",
      lines: [
        { label: "Job allocation speed", value: "+46%" },
        { label: "Active jobs tracked", value: "128" },
        { label: "Operations hub", value: "1x" },
      ],
      chart: [24, 30, 37, 44, 52, 59, 66, 73, 80, 86, 91, 97],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "LMS Platform · Student Learning System",
    title: "Bringing study material, assignments and progress tracking into one platform.",
    metrics: [
      { v: "3x", l: "learning visibility" },
      { v: "100%", l: "central study access" },
    ],
    url: "lms-platform.b2b/case",
    preview: {
      accent: "#06B6D4",
      title: "LMS Platform — Learning Console",
      screenshot: "/images/crm22n.png",
      lines: [
        { label: "Learning visibility", value: "3x" },
        { label: "Central study access", value: "100%" },
        { label: "Active learners", value: "2,140" },
      ],
      chart: [20, 26, 33, 40, 48, 55, 62, 69, 76, 83, 89, 95],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Digital Marketing Task Platform · Agency Workflow Management",
    title: "Keeping campaigns, tasks and teams aligned in one workspace.",
    metrics: [
      { v: "52%", l: "faster task tracking" },
      { v: "1x", l: "marketing work console" },
    ],
    url: "marketing-task-platform.b2b/live",
    preview: {
      accent: "#0891B2",
      title: "Marketing Task Platform — Agency Console",
      screenshot: "/images/crm23n.png",
      lines: [
        { label: "Task tracking speed", value: "+52%" },
        { label: "Active campaigns", value: "34" },
        { label: "Work console", value: "1x" },
      ],
      chart: [26, 32, 39, 46, 54, 61, 68, 75, 81, 87, 92, 98],
    },
  },
  {
    id: "case-04",
    n: "CASE 04",
    tag: "Employee Management System · Workforce Operations",
    title: "Managing employees, tasks and performance from one enterprise system.",
    metrics: [
      { v: "38%", l: "performance visibility lift" },
      { v: "24/7", l: "workforce tracking" },
    ],
    url: "employee-management.b2b/app",
    preview: {
      accent: "#22D3EE",
      title: "Employee Management — Workforce Console",
      screenshot: "/images/crm24n.png",
      lines: [
        { label: "Performance visibility", value: "+38%" },
        { label: "Employees tracked", value: "640" },
        { label: "Workforce tracking", value: "24/7" },
      ],
      chart: [30, 36, 42, 49, 56, 63, 70, 77, 83, 89, 94, 99],
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
            title="Real systems, clear visibility,"
            titleLower="measurable control."
            cardsData={PROJECTS}
            wide_container={true}
            imageBorderColor="#22D3EE"
          />
          <Modules
            title={
              <>
                Eight modules, <span className="text-(--b2b-primary)">One nucleus.</span>
              </>
            }
            description='Base2Brand designs ERP solutions around how your business actually works — not around generic software menus.'
            modules={LOGISTICS_MODULES}
            scrollOrder={LOGISTICS_MODULE_SCROLL_ORDER}
          />
          <ProcessFlow />
          <Industries
            title="Deployed across growth-heavy and operations-heavy environments."
            description="Our ERP software and Business automation systems are designed for businesses that have outgrown spreadsheets, disconnected tools and manual reporting."
            industriesData={ERP_INDUSTRIES}
          />
          <CommandCenter
            eyebrow="Enterprise Operations Hub"
            title="Every store. Every signal. One mission console."
            subtitle="We operate your business stack like mission control — storefronts, integrations, deployments, workflows, revenue signals and reporting systems visible in one place. This is what modern ERP software should feel like: live, connected, controlled and easy to act on."
          />
          <Integrations />
          <CTA />
          <LandingZone />
        </div>
      </div>
    </Layout>
  );
}
