"use client";
import Image from "next/image";
import Container from "@/components/shopify-solution/site/Container";
import SectionHeader from "@/components/shopify-solution/site/SectionHeader";
import Reveal from "@/components/shopify-solution/site/Reveal";
import StatusChip from "@/components/shopify-solution/site/StatusChip";

const DASHBOARD_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&h=900&q=85";

export const CommandCenter = () => {
  return (
    <section
      data-testid="command-center"
      className="relative overflow-hidden border-t border-white/[0.06] py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px circle at 20% 50%, rgba(149,191,71,0.08), rgba(5,5,5,0) 60%)",
        }}
      />

      <Container className="relative w-full">
        <div className="w-full">
          {/* Full-width heading area */}
          <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="w-full min-w-0 flex-1">
              <SectionHeader
                eyebrow="COMMAND CENTER"
                title="Every store. Every signal. One mission console."
                subtitle="We operate your commerce stack like mission control — storefronts, integrations, deploys, and revenue signals on one console."
              />
            </div>

            <Reveal
              delay={0.1}
              className="shrink-0 self-start sm:self-auto"
            >
              <StatusChip>ALL SYSTEMS NOMINAL</StatusChip>
            </Reveal>
          </div>

          {/* Full-width dashboard */}
          <Reveal delay={0.1} className="mt-10 block w-full">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/12 bg-[#0A0B0C] lg:rounded-3xl">
              {/* Dashboard top bar */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.025] px-4 py-2.5 sm:px-5 sm:py-3 md:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#95BF47]"
                    style={{
                      boxShadow: "0 0 12px rgba(149,191,71,0.6)",
                    }}
                  />

                  <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-[11px] sm:tracking-[0.22em]">
                    Base2Brand · Commerce Console
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 sm:text-[10px] sm:tracking-[0.18em]">
                  <span>UTC 14:08</span>
                  <span className="hidden sm:inline">v3.4.1</span>
                </div>
              </div>

              {/* Full-width image */}
              <div className="relative h-[220px] w-full overflow-hidden bg-[#070808] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[560px]">
                <Image
                  src={DASHBOARD_IMAGE}
                  alt="Commerce mission console dashboard preview"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 94vw, 1400px"
                  priority={false}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              </div>

              {/* Dashboard footer */}
              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.025] px-4 py-2.5 sm:px-5 sm:py-3 md:px-6">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/45 sm:text-[10px] sm:tracking-[0.22em]">
                  Console · Read-only preview
                </span>

                <span className="text-right font-mono text-[8px] uppercase tracking-[0.14em] text-white/45 sm:text-[10px] sm:tracking-[0.22em]">
                  Powered by Base2Brand
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default CommandCenter;