'use client'
import React from "react";
import { m } from "framer-motion";
import { SPATIAL } from "@/constants/testIds";

const techGroups = [
  {
    title: "AI & Data Intelligence",
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "Custom AI models",
      "Machine learning",
      "Predictive analytics",
      "Computer vision",
      "Natural language processing",
      "Business intelligence",
    ],
  },
  {
    title: "Automation Platforms",
    items: [
      "Zapier",
      "Make",
      "n8n",
      "HubSpot",
      "Salesforce",
      "Zoho",
      "WhatsApp API",
      "CRM automation",
      "Workflow orchestration",
      "Custom automation engines",
    ],
  },
  {
    title: "Cloud Technology",
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Cloudflare",
      "Serverless architecture",
      "Containerization",
      "Kubernetes",
      "DevOps pipelines",
      "Cloud monitoring",
    ],
  },
  {
    title: "IoT & Connected Devices",
    items: [
      "IoT sensors",
      "MQTT",
      "Edge devices",
      "Device APIs",
      "Telemetry dashboards",
      "Asset tracking",
      "Industrial monitoring",
      "Smart device integrations",
    ],
  },
  {
    title: "Blockchain & Web3",
    items: [
      "Ethereum",
      "Polygon",
      "Smart contracts",
      "Wallet integrations",
      "Token systems",
      "Web3 authentication",
      "Decentralized apps",
      "Blockchain APIs",
    ],
  },
  {
    title: "Metaverse & Immersive Technology",
    items: [
      "Unity",
      "Unreal Engine",
      "WebXR",
      "ARKit",
      "RealityKit",
      "3D environments",
      "Virtual showrooms",
      "Digital twins",
      "Interactive product visualization",
    ],
  },
];

export default function TechStack() {
  // Precompute pill indices per group so each pill gets a unique stable testid
  const offsets = techGroups.reduce(
    (acc, g) => {
      acc.push(acc[acc.length - 1] + g.items.length);
      return acc;
    },
    [0]
  );
  return (
    <section
      data-testid={SPATIAL.techStackSection}
      className="relative py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className=" gap-12 mb-8">
          <div className="text-center">
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-2">
              · Technology Stack
            </div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              The emerging technology stack —{" "} <br />
              <span className="text-white/55">managed deliberately.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed text-center pt-3">
            Our stack supports AI technology solutions, automation technology solutions, cloud technology, cybersecurity, IoT, blockchain and next-gen business technology from strategy to production.
          </p>
        </div>

        <div className="space-y-5 md:space-y-10">
          {techGroups.map((group, gi) => (
            <m.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
              className="grid lg:grid-cols-[260px_1fr] gap-3 md:gap-6 lg:gap-12 items-start border-b border-white/[0.05] last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-[#FFB800]/70">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((t, ti) => (
                  <span
                    key={t}
                    data-testid={SPATIAL.techPill(offsets[gi] + ti)}
                    className="tech-pill px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs md:text-sm text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
