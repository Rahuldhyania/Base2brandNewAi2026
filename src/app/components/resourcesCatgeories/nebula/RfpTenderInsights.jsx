"use client";

import { ArrowRight } from "lucide-react";
import { rfpStructureSteps } from "./rfpData";

const getNodePosition = (angle, radius) => {
  const radian = (angle * Math.PI) / 180;

  return {
    x: Math.cos(radian) * radius,
    y: Math.sin(radian) * radius,
  };
};

const labelClasses = {
  left: "right-full mr-6 top-1/2 -translate-y-1/2 text-right",
  right: "left-full ml-6 top-1/2 -translate-y-1/2 text-left",
  top: "left-1/2 bottom-full mb-6 -translate-x-1/2 text-center",
};

const RfpOrbitNode = ({ step }) => {
  const Icon = step.icon;
  const position = getNodePosition(step.angle, 310);

  return (
    <div
      className="absolute z-20"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="group relative">
        <div
          className="relative flex h-[130px] w-[130px] items-center justify-center rounded-full p-[2px] shadow-[0_0_45px_rgba(96,165,250,0.22)] transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_70px_rgba(168,85,247,0.35)]"
          style={{ background: step.gradient }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-[#050814]/95 backdrop-blur-xl">
            <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-cyan-300/20 bg-white/[0.04] shadow-inner">
              <Icon size={32} className="text-cyan-200" />
            </div>
          </div>

          <span
            className="absolute -bottom-3 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white shadow-[0_0_24px_rgba(34,211,238,0.35)]"
            style={{ background: step.gradient }}
          >
            {step.number}
          </span>
        </div>

        <h3
          className={`absolute hidden w-[185px] text-base font-semibold leading-snug text-white/90 lg:block ${labelClasses[step.labelSide]}`}
        >
          {step.title}
        </h3>
      </div>
    </div>
  );
};

const MobileRfpCard = ({ step }) => {
  const Icon = step.icon;

  return (
    <div className="group rounded-3xl border border-white/10 bg-[#071225]/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
          style={{ background: step.gradient }}
        >
          <Icon size={24} className="text-white" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Step {step.number}
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {step.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default function RfpTenderInsights() {
  return (
    <section className="relative overflow-hidden bg-[#02040a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(83,65,255,0.34),transparent_35%),radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.11),transparent_42%)]" />

      <div className="absolute inset-0 opacity-35">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200">
            The Proposal Nebula
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            IT Services RFP Structure
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
            A futuristic proposal framework that helps teams organise company
            details, IT scope, timelines, budget, evaluation criteria and final
            submission information with clarity.
          </p>
        </div>

        <div className="relative mx-auto mt-16 hidden min-h-[760px] max-w-[1180px] lg:block">
          <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15 shadow-[0_0_80px_rgba(34,211,238,0.08)]" />
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/10" />
          <div className="absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#050814]/85 p-[1px] shadow-[0_0_90px_rgba(79,70,229,0.22)] backdrop-blur-2xl">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_48%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
              <div className="flex h-[235px] w-[235px] items-center justify-center rounded-full border border-dashed border-cyan-200/20">
                <div className="text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
                    Core System
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white">
                    IT Services
                    <br />
                    RFP Structure
                  </h3>

                  <p className="mx-auto mt-4 max-w-[170px] text-xs leading-5 text-white/45">
                    Seven key blocks for a complete enterprise proposal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {rfpStructureSteps.map((step) => (
            <RfpOrbitNode key={step.id} step={step} />
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:hidden">
          <div className="rounded-3xl border border-white/10 bg-[#071225]/80 p-7 text-center backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Core System
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              IT Services RFP Structure
            </h3>
          </div>

          {rfpStructureSteps.map((step) => (
            <MobileRfpCard key={step.id} step={step} />
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">
                Proposal Accelerator
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                Build enterprise-ready RFP responses faster
              </h3>

              <p className="mt-1 max-w-xl text-sm leading-7 text-white/55">
                Use a structured flow to prepare proposal content, compliance
                documents and submission details without missing critical
                requirements.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#ff7a1f]">
              Explore Resources
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}