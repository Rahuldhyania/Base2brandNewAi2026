"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Users,
  Warehouse,
  Handshake,
  Bot,
  Brain,
  Globe,
} from "lucide-react";
import CoreTechnologyRow from "./CoreTechnologyRow";

export const CORE_TECHNOLOGIES = [
  {
    id: "enterprise-resource-planning",
    icon: Cpu,
    visualPosition: "right",
    eyebrow: "UNIFY BUSINESS OPERATIONS",
    title: "Enterprise Resource Planning",
    description:
      "Centralized ERP systems that connect finance, procurement, inventory, reporting, and analytics into one reliable operational backbone. Built to reduce silos, improve visibility, and support faster business decisions.",
    features: [
      "Finance & procurement workflows",
      "Inventory and resource planning",
      "Real-time reporting dashboards",
      "Role-based access and approvals",
    ],
    cta: "For businesses that want one connected view of operations",
  },
  {
    id: "human-resource-management",
    icon: Users,
    visualPosition: "left",
    eyebrow: "CONNECT PEOPLE & PERFORMANCE",
    title: "Human Resource Management",
    description:
      "Modern HRMS solutions that streamline recruitment, attendance, workforce management, performance tracking, and employee support. Designed to help teams operate with clarity and less manual work.",
    features: [
      "Employee data management",
      "Attendance & shift workflows",
      "Performance monitoring",
      "Workforce analytics",
    ],
    cta: "For growing teams that need organized workforce operations",
  },
  {
    id: "warehouse-logistics",
    icon: Warehouse,
    visualPosition: "right",
    eyebrow: "MOVE INVENTORY WITH CONTROL",
    title: "Warehouse & Logistics Intelligence",
    description:
      "Connected warehouse and logistics platforms that improve inventory accuracy, dispatch visibility, route planning, and supply chain coordination across multiple locations.",
    features: [
      "Inventory intelligence",
      "Route optimization",
      "Fleet & dispatch tracking",
      "Multi-location visibility",
    ],
    cta: "For warehouses, logistics teams, and supply chain operations",
  },
  {
    id: "customer-vendor-management",
    icon: Handshake,
    visualPosition: "left",
    eyebrow: "MANAGE RELATIONSHIPS SMARTER",
    title: "Customer & Vendor Management",
    description:
      "CRM and vendor management platforms that centralize communication, order history, follow-ups, procurement workflows, and partnership tracking to create stronger business relationships.",
    features: [
      "CRM workflows",
      "Vendor portals",
      "Customer insights",
      "Procurement tracking",
    ],
    cta: "For teams managing customers, suppliers, and partners",
  },
  {
    id: "ai-conversational-systems",
    icon: Bot,
    visualPosition: "right",
    eyebrow: "AUTOMATE SUPPORT & KNOWLEDGE",
    title: "AI Conversational Systems",
    description:
      "AI chatbots and knowledge assistants built for customer support, employee helpdesks, internal guidance, and process automation. Help users get faster answers while reducing repetitive work for teams.",
    features: [
      "AI chatbots",
      "Knowledge assistants",
      "Customer support automation",
      "Employee support automation",
    ],
    cta: "For organizations that want faster support without adding complexity",
  },
  {
    id: "machine-learning-automation",
    icon: Brain,
    visualPosition: "left",
    eyebrow: "TURN DATA INTO DECISIONS",
    title: "Machine Learning & Automation",
    description:
      "Practical AI and machine learning systems that analyze business data, predict trends, automate repetitive tasks, and support smarter decisions across daily operations.",
    features: [
      "Predictive analytics",
      "Workflow automation",
      "Decision support",
      "AI-powered agents",
    ],
    cta: "For businesses ready to automate decisions and scale intelligently",
  },
  {
    id: "connected-enterprise-ecosystem",
    icon: Globe,
    visualPosition: "right",
    eyebrow: "ONE CONNECTED ENTERPRISE",
    title: "Connected Enterprise Ecosystem",
    description:
      "A unified digital ecosystem that brings ERP, HRMS, CRM, logistics, inventory, customers, and AI automation into one operational view. Designed to modernize legacy processes and create scalable growth.",
    features: [
      "Cross-system integration",
      "Real-time visibility dashboards",
      "API-first architecture",
      "Scalable enterprise workflows",
    ],
    cta: "For enterprises that want connected systems instead of disconnected tools",
  },
];

export default function CoreTechnologies({
  title = "Enterprise Systems, Built to Scale",
  subtitle = "Connected systems that improve visibility, automate operations, and support scalable business growth.",
  items = CORE_TECHNOLOGIES,
}) {
  return (
    <section
      id="core-technologies"
      className="relative overflow-hidden py-16 md:py-24"
      data-testid="core-technologies-section"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--b2b-primary)/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] leading-[1.05] font-medium tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-zinc-400">
            {subtitle}
          </p>
        </motion.div>

        <div className="mt-16 md:mt-20 space-y-20 md:space-y-28">
          {items.map((item, index) => (
            <CoreTechnologyRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

