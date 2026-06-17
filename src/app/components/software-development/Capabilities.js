'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Boxes,
  Smartphone,
  Layers,
  Network,
  CloudCog,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CAPABILITIES = [
  {
    n: "01",
    icon: Code2,
    title: "Web Application Development",
    desc: "Modern applications engineered using scalable architectures.",
    tags: ["React", "Next.js", "Angular", "Vue", "TypeScript"],
  },
  {
    n: "02",
    icon: Boxes,
    title: "SaaS Product Development",
    desc: "Subscription platforms designed for growth.",
    tags: ["Multi-tenancy", "Auth", "Billing", "Analytics", "Admin"],
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Android Development",
    desc: "Native Android experiences built for reliability and performance.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Enterprise Android"],
  },
  {
    n: "04",
    icon: Layers,
    title: "Cross-Platform Development",
    desc: "Accelerate delivery across devices.",
    tags: ["Flutter", "React Native", "Shared Logic", "Unified UX"],
  },
  {
    n: "05",
    icon: Network,
    title: "API & Microservices Engineering",
    desc: "Composable architectures powering modern software.",
    tags: ["REST", "GraphQL", "Event-Driven", "Service Orchestration"],
  },
  {
    n: "06",
    icon: CloudCog,
    title: "Cloud & DevOps Engineering",
    desc: "Infrastructure designed for scale.",
    tags: ["AWS", "Azure", "Kubernetes", "CI/CD", "IaC"],
  },
  {
    n: "07",
    icon: RefreshCcw,
    title: "Legacy Modernization",
    desc: "Transform outdated systems into modern platforms.",
    tags: ["Monolith Decomp", "Cloud Migration", "Modernization", "Debt Reduction"],
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="b2b-section relative py-12">
      {/* subtle red glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] b2b-glow-red opacity-50" />

      <div className="b2b-container relative">
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div variants={fadeUp} className="text-(--b2b-primary) mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--b2b-primary)" />
              Capabilities
            </motion.div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              <span className="b2b-text-gradient">One engineering team.</span>{" "} <br />
              <span className="text-(--b2b-primary)">Every digital surface.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3">
            From product foundations to platform-scale systems — a single engineering team owning the entire stack and lifecycle.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.n}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="b2b-card p-7 group relative overflow-hidden"
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
