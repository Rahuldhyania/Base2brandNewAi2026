'use client'
import React from "react";
import { m } from "framer-motion";
import {
  Brain,
  Workflow,
  Network,
  Blocks,
  Glasses,
  Cloud,
} from "lucide-react";
import { SPATIAL } from "@/constants/testIds";

const capabilities = [
  {
    icon: Brain,
    title: "AI Technology Solutions",
    description:
      "Our AI technology solutions are built around real workflows — sales, support, marketing, operations, data, reporting and customer experience.",
    bullets: [
      "AI assistants",
      "AI chatbots",
      "Predictive analytics",
      "Generative AI workflows",
      "AI-powered dashboards",
    ],
  },
  {
    icon: Workflow,
    title: "Automation Technology Solutions",
    description:
      "Our automation technology solutions help teams reduce delays, improve response time and scale operations without adding unnecessary manual effort.",
    bullets: [
      "CRM automation",
      "Workflow automation",
      "Marketing automation",
      "Sales process automation",
      "WhatsApp automation",
    ],
  },
  {
    icon: Network,
    title: "IoT & Connected Systems",
    description:
      "We help businesses build connected systems for monitoring, tracking, asset visibility, field operations and industrial workflows.",
    bullets: ["IoT dashboards", "Device monitoring", "Sensor data integration", "Asset tracking"],
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3 Systems",
    description:
      "We build blockchain systems where verification, ownership, auditability and decentralized workflows create real business value.",
    bullets: ["Tokenized systems", "Web3 platforms", "NFT utility systems", "Blockchain integrations"],
  },
  {
    icon: Glasses,
    title: "Metaverse Development & Spatial Experiences",
    description:
      "Our metaverse development practice helps brands create interactive 3D spaces that go beyond presentation and support real business outcomes.",
    bullets: [
      "Virtual showrooms",
      "3D product experiences",
      "Immersive training",
      "VR/AR environments",
      "Digital twins",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Technology & Data Centre Modernization",
    description:
      "We help businesses move from outdated infrastructure to cloud-ready, secure and scalable technology systems.",
    bullets: ["Cloud migration", "Cloud-native applications", "Data centre modernization", "DevOps"],
  },
];

const container = {
  animate: { transition: { staggerChildren: 0.08 } },
};
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      data-testid={SPATIAL.capabilitiesSection}
      className="relative py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10">
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-4">
              · Emerging Technology Capabilities
            </div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              One technology partner,
              <br />
              <span className="text-white/55">Every future-ready layer.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[640px] self-end leading-relaxed">
            From AI and automation to cloud, IoT, blockchain and cybersecurity,
            Base2Brand builds the technology layers that help businesses operate
            smarter. We turn emerging tech trends into practical systems your
            teams can use, measure and scale.
          </p>
        </div>

        <m.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <m.div
                key={c.title}
                variants={item}
                data-testid={SPATIAL.capabilityCard(i)}
                className="card-amber rounded-2xl p-4 flex flex-col border border-(--b2b-primary)/20 hover:shadow-lg transition-all duration-300 hover:border-(--b2b-primary)/40"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center">
                    <Icon size={22} className="text-[#FFB800]" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white leading-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {c.description}
                </p>
                <ul className="mt-auto space-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-[13px] text-white/75"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#FFB800]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
