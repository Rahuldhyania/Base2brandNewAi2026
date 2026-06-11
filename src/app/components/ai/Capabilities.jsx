'use client'
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import {
  Network,
  Workflow,
  AudioLines,
  ServerCog,
  Bot,
  Microscope,
  ArrowUpRight,
} from "lucide-react";

const CAPS = [
  {
    icon: Network,
    title: "Applied AI & Agentic Engineering",
    span: "md:col-span-7",
    items: [
      "Multi-agent systems",
      "Enterprise copilots",
      "RAG architectures",
      "Knowledge systems",
      "MCP integrations",
    ],
    accent: true,
  },
  {
    icon: Workflow,
    title: "AI Operations",
    span: "md:col-span-5",
    items: [
      "Workflow orchestration",
      "Decision automation",
      "Human-in-the-loop systems",
      "Operational intelligence",
    ],
  },
  {
    icon: AudioLines,
    title: "Voice Intelligence",
    span: "md:col-span-5",
    items: [
      "Voice agents",
      "Contact center AI",
      "Appointment automation",
      "Sales enablement",
    ],
  },
  {
    icon: ServerCog,
    title: "Enterprise AI Platforms",
    span: "md:col-span-7",
    items: [
      "Private AI deployments",
      "Enterprise search",
      "Secure LLM infrastructure",
      "Cloud-native AI",
    ],
    accent: true,
  },
  {
    icon: Bot,
    title: "Autonomous Business Systems",
    span: "md:col-span-7",
    items: [
      "Sales operations",
      "Customer support",
      "Compliance workflows",
      "Internal knowledge",
    ],
  },
  {
    icon: Microscope,
    title: "AI Research & Innovation",
    span: "md:col-span-5",
    items: [
      "Small language models",
      "Agent architectures",
      "Retrieval systems",
      "AI optimization",
    ],
  },
];

const CapCard = ({ cap, idx }) => {
  const Icon = cap.icon;
  return (
    <Reveal
      delay={idx * 0.04}
      className={` group relative`}
    >
      <div
        data-testid={`capability-card-${idx}`}
        className="relative h-full b2b-card p-8 overflow-hidden transition-all duration-500 hover:border-[#8B5CF6]/40"
      >
        {/* Hover glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#8B5CF6]/0 group-hover:bg-[#8B5CF6]/15 blur-[80px] transition-all duration-700" />

        {/* Mini orbital deco */}
        {cap.accent && (
          <svg
            className="absolute top-4 right-4 w-24 h-24 opacity-40"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="rgba(139,92,246,0.4)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="rgba(168,85,247,0.25)"
              strokeWidth="0.5"
              strokeDasharray="1 4"
            />
            <circle cx="50" cy="50" r="3" fill="#C084FC" />
          </svg>
        )}

        <div className="relative flex items-start justify-between">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#C084FC]">
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/30">
            {String(idx + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-7 font-display text-xl sm:text-2xl font-medium tracking-tight">
          {cap.title}
        </h3>

        <ul className="mt-6 space-y-2.5">
          {cap.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-white/55"
            >
              <span className="w-3 h-px bg-[#8B5CF6]/60" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-testid={`capability-link-${idx}`}
          className="mt-8 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-mono text-[#C084FC]/80 hover:text-white transition-colors"
        >
          Discuss this practice <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </Reveal>
  );
};

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      data-testid="capabilities-section"
      className="relative py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <Reveal>
            <ShiningText testId="capabilities-eyebrow">
              ENTERPRISE AI CAPABILITIES
            </ShiningText>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium max-w-2xl text-balance">
              Six practices. One intelligence layer.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-white/50 leading-relaxed">
              We don&apos;t sell features. We engineer the AI capability stack
              your operations depend on — designed, governed, and measured
              end-to-end.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-6">
          {CAPS.map((cap, idx) => (
            <CapCard key={cap.title} cap={cap} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
