import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import StatusChip from "@/components/site/StatusChip";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    code: "01",
    timestamp: "T+00:00",
    title: "Discovery & Systems Audit",
    desc:
      "We audit storefront, integrations, performance, analytics, and ops to identify the highest-leverage moves.",
    deliverables: ["Stack map", "Opportunity scoring", "Mission brief"],
  },
  {
    code: "02",
    timestamp: "T+00:14",
    title: "Architecture & UX Blueprint",
    desc:
      "Information architecture, content model, integration topology, and a Shopify-native UX direction.",
    deliverables: ["IA + UX", "Tech architecture", "Design system v0"],
  },
  {
    code: "03",
    timestamp: "T+00:28",
    title: "Build & Integrations",
    desc:
      "Theme/Hydrogen engineering, Plus configuration, integration build-outs, and end-to-end test orchestration.",
    deliverables: ["Build sprints", "Integrations live", "QA hardening"],
  },
  {
    code: "04",
    timestamp: "T+00:42",
    title: "QA, Launch, Stabilize",
    desc:
      "Controlled cutover, SEO preservation, observability online, and a 14-day stabilization window.",
    deliverables: ["Cutover plan", "Observability", "Stabilization"],
  },
  {
    code: "05",
    timestamp: "T+00:56",
    title: "Growth Ops & Iteration",
    desc:
      "Continuous experimentation — lifecycle, paid, CRO, and analytics — tied to revenue outcomes.",
    deliverables: ["Experiment cadence", "Lifecycle ops", "Quarterly OKRs"],
  },
];

export const MissionControlTimeline = () => {
  return (
    <section
      id="process"
      data-testid="process-timeline"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="PROCESS · MISSION CONTROL"
            title="A precise process. Engineered for launch — and for the long arc."
            subtitle="Five phases, each instrumented with deliverables, SLAs, and review gates. We don't ship and disappear — we operate alongside you."
          />
          <Reveal delay={0.1}>
            <StatusChip>5 PHASES · ALL READY</StatusChip>
          </Reveal>
        </div>

        {/* Desktop horizontal rail */}
        <div className="mt-14 hidden lg:block">
          <div className="relative">
            {/* Rail */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[28px] h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.18), rgba(149,191,71,0.5), rgba(255,255,255,0.18), transparent)",
              }}
            />

            <div className="grid grid-cols-5 gap-5">
              {PHASES.map((p, idx) => (
                <Reveal key={p.code} delay={idx * 0.06}>
                  <PhaseCard p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet vertical rail */}
        <div className="mt-12 lg:hidden">
          <div className="relative pl-6">
            <div
              aria-hidden
              className="absolute left-2 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), rgba(149,191,71,0.5), rgba(255,255,255,0.18), transparent)",
              }}
            />
            <div className="space-y-5">
              {PHASES.map((p) => (
                <Reveal key={p.code}>
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[18px] top-3 h-3 w-3 rounded-full bg-[#95BF47]"
                      style={{ boxShadow: "0 0 18px rgba(149,191,71,0.55)" }}
                    />
                    <PhaseCard p={p} compact />
                  </div>
                </Reveal>
              ))}
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const PhaseCard = ({ p, compact = false }) => (
  <div
    className={cn(
      "rounded-2xl bg-white/[0.035] border border-white/10 p-5",
      "shadow-[0_18px_60px_rgba(0,0,0,0.45)]",
      "hover:border-white/20 transition-colors duration-200",
    )}
  >
    {/* Marker */}
    {!compact && (
      <div className="mb-3 flex items-center gap-3">
        <span
          aria-hidden
          className="h-3 w-3 rounded-full bg-[#95BF47]"
          style={{ boxShadow: "0 0 18px rgba(149,191,71,0.55)" }}
        />
        <span className="font-mono text-[10px] tracking-[0.20em] uppercase text-white/55">
          {p.timestamp}
        </span>
      </div>
    )}
    {compact && (
      <div className="mb-2 font-mono text-[10px] tracking-[0.20em] uppercase text-white/55">
        {p.timestamp} · PHASE {p.code}
      </div>
    )}
    <div className="flex items-baseline justify-between">
      <h3 className="font-display text-lg font-[650] tracking-[-0.02em] text-white">
        {p.title}
      </h3>
      {!compact && (
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/35">
          PH-{p.code}
        </span>
      )}
    </div>
    <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.desc}</p>
    <ul className="mt-4 space-y-1.5">
      {p.deliverables.map((d) => (
        <li key={d} className="flex items-center gap-2 text-[12px] text-white/70">
          <span
            aria-hidden
            className="h-1 w-1 rounded-full bg-[#95BF47]"
          />
          {d}
        </li>
      ))}
    </ul>
  </div>
);

export default MissionControlTimeline;
