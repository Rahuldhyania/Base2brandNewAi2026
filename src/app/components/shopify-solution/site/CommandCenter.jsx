import { useReducedMotion } from "framer-motion";
import Container from "@/components/shopify-solution/site/Container";
import SectionHeader from "@/components/shopify-solution/site/SectionHeader";
import Reveal from "@/components/shopify-solution/site/Reveal";
import StatusChip from "@/components/shopify-solution/site/StatusChip";
import { cn } from "@/lib/utils";

const KPI_TILES = [
  { label: "Storefronts Live", value: "32", delta: "+4 this Q", status: "ONLINE" },
  { label: "Avg. Page Speed (Lighthouse)", value: "92", delta: "+11 QoQ", status: "GREEN" },
  { label: "Integrations Active", value: "148", delta: "+12 MoM", status: "SYNCED" },
  { label: "Avg. Revenue Lift", value: "+24%", delta: "Cohort 12mo", status: "NOMINAL" },
];

const EVENTS = [
  { t: "T+00:14", text: "Hydrogen deploy · northwind-naturals.com", tag: "DEPLOY" },
  { t: "T+00:42", text: "Klaviyo flow synced · 22 segments", tag: "SYNC" },
  { t: "T+01:08", text: "Recharge plan promo activated", tag: "CAMPAIGN" },
  { t: "T+01:33", text: "Odoo ↔ Shopify inventory · OK", tag: "OK" },
  { t: "T+02:01", text: "Markets rollout · EU storefront", tag: "ROLLOUT" },
  { t: "T+02:46", text: "Plus B2B pricebook · v2.3 live", tag: "RELEASE" },
];

const SystemBars = ({ reduced }) => {
  const bars = [78, 92, 64, 88, 71, 96, 82, 90, 67, 84, 88, 95];
  return (
    <div className="flex items-end gap-1.5 h-24 sm:h-28">
      {bars.map((h, i) => (
        <div
          key={i}
          className="relative flex-1 rounded-t-md"
          style={{
            background:
              "linear-gradient(to top, rgba(149,191,71,0.55), rgba(149,191,71,0.15))",
            height: `${h}%`,
            transition: reduced ? "none" : "height 600ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span
            aria-hidden
            className="absolute -top-0.5 left-0 right-0 h-0.5 bg-[#95BF47]"
            style={{ boxShadow: "0 0 12px rgba(149,191,71,0.6)" }}
          />
        </div>
      ))}
    </div>
  );
};

export const CommandCenter = () => {
  const reduced = useReducedMotion();

  return (
    <section
      data-testid="command-center"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px circle at 20% 50%, rgba(149,191,71,0.08), rgba(5,5,5,0) 60%)",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="COMMAND CENTER"
            title="Every store. Every signal. One mission console."
            subtitle="We operate your commerce stack like mission control — storefronts, integrations, deploys, and revenue signals on one console."
          />
          <Reveal delay={0.1}>
            <StatusChip>ALL SYSTEMS NOMINAL</StatusChip>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/12 bg-[#0A0B0C]">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-white/10 bg-white/[0.025]">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#95BF47]" style={{ boxShadow: "0 0 12px rgba(149,191,71,0.6)" }} />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/70">
                  Base2Brand · Commerce Console
                </span>
              </div>
              <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.18em] uppercase text-white/45">
                <span>UTC 14:08</span>
                <span className="hidden sm:inline">v3.4.1</span>
              </div>
            </div>

            {/* Scan bar (decorative) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-12 h-24"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(149,191,71,0.0), rgba(149,191,71,0.12), rgba(149,191,71,0.0))",
                animation: reduced ? undefined : "b2b-scan 7.2s linear infinite",
              }}
            />

            {/* Body */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/[0.06]">
              {/* KPI tiles */}
              <div className="lg:col-span-7 bg-[#0A0B0C] p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">
                    Telemetry · Last 30d
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/45">
                    REGION · GLOBAL
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {KPI_TILES.map((k) => (
                    <div
                      key={k.label}
                      className={cn(
                        "rounded-2xl bg-white/[0.035] border border-white/10 p-4",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
                          {k.label}
                        </span>
                      </div>
                      <div className="mt-2 font-display text-2xl font-[650] tracking-[-0.02em] text-white">
                        {k.value}
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-[11px] text-white/55">{k.delta}</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5">
                          <span
                            aria-hidden
                            className="h-1 w-1 rounded-full bg-[#95BF47]"
                            style={{ boxShadow: "0 0 8px rgba(149,191,71,0.55)" }}
                          />
                          <span className="font-mono text-[9px] tracking-[0.20em] uppercase text-white/65">
                            {k.status}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart-like bars */}
                <div className="mt-6 rounded-2xl bg-white/[0.025] border border-white/10 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">
                      Revenue velocity · 12w
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#95BF47]">
                      +23.4%
                    </span>
                  </div>
                  <SystemBars reduced={reduced} />
                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-white/40">
                    <span>W01</span>
                    <span>W12</span>
                  </div>
                </div>
              </div>

              {/* Event log */}
              <div className="lg:col-span-5 bg-[#0A0B0C] p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">
                    Event log · Live
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5">
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-[#95BF47]"
                      style={{ boxShadow: "0 0 8px rgba(149,191,71,0.55)" }}
                    />
                    <span className="font-mono text-[9px] tracking-[0.20em] uppercase text-white/70">
                      STREAMING
                    </span>
                  </span>
                </div>
                <div className="rounded-2xl bg-white/[0.025] border border-white/10 divide-y divide-white/8">
                  {EVENTS.map((e) => (
                    <div
                      key={e.text}
                      className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.03] transition-colors duration-150"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/55 shrink-0">
                          {e.t}
                        </span>
                        <span className="text-[13px] text-white/80 truncate">
                          {e.text}
                        </span>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5">
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full bg-[#95BF47]"
                        />
                        <span className="font-mono text-[9px] tracking-[0.20em] uppercase text-white/65">
                          {e.tag}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white/[0.025] border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">
                      System Health
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#95BF47]">
                      99.98%
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {["Storefront", "APIs", "Webhooks", "Search"].map((s) => (
                      <div
                        key={s}
                        className="rounded-lg bg-white/[0.04] border border-white/10 px-2 py-2"
                      >
                        <div className="font-mono text-[9px] tracking-[0.20em] uppercase text-white/50">
                          {s}
                        </div>
                        <div className="mt-1 inline-flex items-center gap-1.5">
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 rounded-full bg-[#95BF47]"
                            style={{ boxShadow: "0 0 10px rgba(149,191,71,0.55)" }}
                          />
                          <span className="text-[11px] text-white/85">Online</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer strip */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-t border-white/10 bg-white/[0.025]">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/45">
                Console · Read-only preview
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/45">
                Powered by Base2Brand
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default CommandCenter;
