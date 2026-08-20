'use client'
import React from "react";
import { m } from "framer-motion";
import {
  Code2,
  Boxes,
  Smartphone,
  Building2,
  Network,
  CloudCog,
  ArrowUpRight,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CAPABILITIES = [
  {
    n: "01",
    icon: Code2,
    title: "Custom Web Application Development",
    desc: "Modern web applications engineered for speed, usability and scale with the use of perfect solutions.",
    tags: [
      "Admin Dashboards",
      "Customer Portals",
      "Internal Business Applications",
      "Workflow Automation Platforms",
      "SaaS Applications",
      "Enterprise Web Portals",
    ],
  },
  {
    n: "02",
    icon: Boxes,
    title: "SaaS Product Development",
    desc: "Subscription-based platforms built for growth, monetization and operational control.",
    tags: [
      "Multi-Tenant Architecture",
      "User Authentication & Authorization",
      "Subscription & Billing",
      "Plan & Pricing Management",
      "Admin Dashboards",
      "Usage Analytics",
      "Role-Based Access Control",
      "Customer Workspaces",
    ],
  },
  {
    n: "03",
    icon: Building2,
    title: "Enterprise Software Solutions",
    desc: "Our enterprise software solutions help teams manage data, users, workflows, approvals, reporting, automation and integrations across departments.",
    tags: [
      "Enterprise portals",
      "Internal tools",
      "Workflow systems",
      "Role-based access",
      "Approval engines",
      "Audit trails",
      "Reporting dashboards",
      "System integrations",
    ],
  },
  {
    n: "04",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "We build Android, iOS and cross-platform apps connected to secure APIs, backend systems and business workflows.",
    tags: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Apps",
      "API Integration",
      "Push Notifications",
      "Offline Support",
      "Secure Authentication",
      "Real-time Sync",
    ],
  },
  {
    n: "05",
    icon: Network,
    title: "API & Microservices Engineering",
    desc: "Composable backend systems that power modern software products.",
    tags: [
      "Custom API Development",
      "Microservices Architecture",
      "Third-party Integrations",
      "Secure Authentication",
      "API Gateway Management",
      "Service Orchestration",
      "High-performance APIs",
      "Scalable Backend Systems",
    ],
  },
  {
    n: "06",
    icon: CloudCog,
    title: "Cloud & DevOps Engineering",
    desc: "Cloud infrastructure built for secure deployment, scale and operational visibility.",
    tags: [
      "Cloud Infrastructure",
      "Containerization",
      "Kubernetes Orchestration",
      "Infrastructure as Code",
      "CI/CD Automation",
      "Monitoring & Observability",
      "Secure Deployments",
      "Auto Scaling & High Availability",
    ],
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="b2b-section relative py-12">
      {/* subtle red glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-full md:w-[700px] h-full md:h-[700px] b2b-glow-red opacity-50" />

      <div className="b2b-container relative">
        <m.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <m.div variants={fadeUp} className="text-(--b2b-primary) mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--b2b-primary)" />
              SOFTWARE DEVELOPMENT CAPABILITIES
            </m.div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              <span className="b2b-text-gradient">Everything Your Digital Product Needs,</span>{" "} <br />
              <span className="text-(--b2b-primary)">One Team Delivers.</span>
            </h2>
          </div>
          <p className="text-white/65 text-sm sm:text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3">
            We build custom web apps, SaaS platforms, and enterprise software with performance, scalability, and business value.
          </p>
        </m.div>

        <m.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <m.div
                key={cap.n}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="b2b-card p-5 sm:p-6 lg:p-7 group relative overflow-hidden"
                data-testid={`capability-card-${cap.n}`}
              >
                {/* corner number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl border border-[color:var(--b2b-primary)]/30 bg-[color:var(--b2b-primary)]/8 grid place-items-center">
                    <Icon className="w-5 h-5 text-[color:var(--b2b-primary)]" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/35 b2b-number">
                    {cap.n}
                  </span>
                </div>

                <h3 className="text-[26px] font-semibold text-white leading-tight mb-2.5">{cap.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-white/60">{cap.desc}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[11px] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* hover accent line */}
                <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">Learn more</span>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[color:var(--b2b-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};

export default Capabilities;
