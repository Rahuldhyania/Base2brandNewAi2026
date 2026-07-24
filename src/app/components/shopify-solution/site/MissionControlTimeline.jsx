import Container from "@/components/shopify-solution/site/Container";
import SectionHeader from "@/components/shopify-solution/site/SectionHeader";
import Reveal from "@/components/shopify-solution/site/Reveal";
import StatusChip from "@/components/shopify-solution/site/StatusChip";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    code: "01",
    timestamp: "T+00:00",
    title: "Discovery & Commerce Audit",
    desc:
      "We audit your storefront, analytics, checkout, theme, product pages, apps, SEO, campaigns and integrations.",
    deliverables: [
      "Store audit",
      "Stack map",
      "Conversion review",
      "Performance analysis",
      "Opportunity scoring",
    ],
  },
  {
    code: "02",
    timestamp: "T+00:14",
    title: "UX & Ecommerce Blueprint",
    desc:
      "We define your store structure, product journey, content model, app requirements, integration flow and CRO direction.",
    deliverables: [
      "Information architecture",
      "UX wireframes",
      "Product page strategy",
      "Section plan",
      "Integration map",
    ],
  },
  {
    code: "03",
    timestamp: "T+00:28",
    title: "Shopify Build & Integrations",
    desc:
      "We engineer the storefront, theme, tracking, apps and system integrations with speed and scalability in mind.",
    deliverables: [
      "Shopify theme build",
      "Custom sections",
      "App configuration",
      "ERP / OMS integration",
      "Tracking setup",
    ],
  },
  {
    code: "04",
    timestamp: "T+00:42",
    title: "QA, Launch & Stabilize",
    desc:
      "We validate checkout, redirects, products, speed, analytics, payments, apps and operational workflows before going live.",
    deliverables: [
      "QA checklist",
      "SEO redirect plan",
      "Checkout testing",
      "Analytics validation",
      "Launch support",
    ],
  },
  {
    code: "05",
    timestamp: "T+00:56",
    title: "Ecommerce Growth Ops",
    desc:
      "We continue improving the store through CRO, landing pages, speed, retention flows, campaign learnings and revenue reporting.",
    deliverables: [
      "CRO roadmap",
      "Experiment cadence",
      "Klaviyo optimization",
      "Landing pages",
      "Growth reporting",
    ],
  },
];

const NODE_SIZE = "h-7 w-7";

function TimelineNode({ code }) {
  return (
    <span
      className={cn(
        "relative z-10 flex shrink-0 items-center justify-center rounded-full",
        NODE_SIZE,
        "border border-[var(--b2b-primary)]/55 bg-[#070707] font-mono text-[10px] tracking-[0.12em] text-[var(--b2b-primary)]",
        "shadow-[0_0_16px_rgba(149,191,71,0.22)]",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-[3px] rounded-full bg-[var(--b2b-primary)]/15"
      />
      <span className="relative">{code}</span>
    </span>
  );
}

function DesktopStepRail({ index, total }) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div className="relative mb-1 flex h-9 items-center justify-center">
      {!isFirst && (
        <span
          aria-hidden
          className="absolute right-1/2 top-1/2 h-px w-[calc(50%+0.625rem)] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(to right, rgba(149,191,71,0.15), rgba(149,191,71,0.55))",
          }}
        />
      )}
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 h-px w-[calc(50%+0.625rem)] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(to right, rgba(149,191,71,0.55), rgba(255,255,255,0.12))",
          }}
        />
      )}
      <TimelineNode code={PHASES[index].code} />
    </div>
  );
}

function VerticalStem() {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <span
        className="h-5 w-px"
        style={{
          background:
            "linear-gradient(to bottom, rgba(149,191,71,0.55), rgba(255,255,255,0.08))",
        }}
      />
    </div>
  );
}

export const MissionControlTimeline = () => {
  return (
    <section
      id="process"
      data-testid="process-timeline"
      className="relative py-16 border-t border-white/[0.06]"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="PROCESS · MISSION CONTROL"
            title="A Shopify process built for launch, growth and scale."
            subtitle="Our process moves from audit to architecture, build, launch and growth operations with clear deliverables, review gates and measurable outcomes."
          />
          <Reveal delay={0.1}>
            <StatusChip>5 PHASES · ALL READY</StatusChip>
          </Reveal>
        </div>

        {/* Desktop: interconnected horizontal step rail */}
        <div className="mt-10 md:mt-12 lg:mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-5">
          {PHASES.map((p, idx) => (
            <Reveal key={p.code} delay={idx * 0.06} className="flex flex-col">
              <DesktopStepRail index={idx} total={PHASES.length} />
              <VerticalStem />
              <PhaseCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Mobile / tablet: vertical connected steps */}
        <div className="mt-10 md:mt-12 lg:hidden">
          {PHASES.map((p, idx) => (
            <Reveal key={p.code} delay={idx * 0.05}>
              <div className="relative flex gap-4 sm:gap-5">
                <div className="flex w-8 shrink-0 flex-col items-center">
                  <TimelineNode code={p.code} />
                  {idx < PHASES.length - 1 && (
                    <span
                      aria-hidden
                      className="my-1 w-px flex-1 min-h-[3rem]"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(149,191,71,0.5), rgba(255,255,255,0.08))",
                      }}
                    />
                  )}
                </div>
                <div
                  className={cn(
                    "min-w-0 flex-1",
                    idx < PHASES.length - 1 && "pb-6 sm:pb-8",
                  )}
                >
                  <PhaseCard p={p} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

const PhaseCard = ({ p }) => (
  <div
    className={cn(
      "relative h-full rounded-2xl bg-white/[0.035] border border-white/10 p-5",
      "shadow-[0_18px_60px_rgba(0,0,0,0.45)]",
      "hover:border-white/20 transition-colors duration-200",
    )}
  >
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 min-w-0">
        <span
          aria-hidden
          className="h-2 w-2 shrink-0 rounded-full bg-[var(--b2b-primary)]"
          style={{ boxShadow: "0 0 12px var(--b2b-glow-shadow)" }}
        />
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 truncate">
          {p.timestamp}
        </span>
      </div>
      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/30 shrink-0">
        PH {p.code}
      </span>
    </div>

    <h3 className="mt-4 font-display text-base lg:text-[17px] font-[650] tracking-[-0.02em] leading-snug text-white">
      {p.title}
    </h3>

    <p className="mt-2 text-[11px] sm:text-xs text-white/55 leading-relaxed">
      {p.desc}
    </p>

    <ul className="mt-4 space-y-1.5">
      {p.deliverables.map((d) => (
        <li
          key={d}
          className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/60"
        >
          <span
            aria-hidden
            className="h-1 w-1 shrink-0 rounded-full bg-[var(--b2b-primary)]"
          />
          {d}
        </li>
      ))}
    </ul>
  </div>
);

export default MissionControlTimeline;
