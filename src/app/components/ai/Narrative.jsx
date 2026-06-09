'use client'
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";

const Narrative = () => {
  return (
    <section
      data-testid="narrative-section"
      className="relative py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <ShiningText testId="narrative-eyebrow">
                THE NEW OPERATING MODEL
              </ShiningText>
              <div className="mt-8 font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
                01 — Thesis
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h2
                data-testid="narrative-headline"
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.035em] font-medium text-balance"
              >
                AI is becoming the{" "}
                <span className="text-white/90">operating system</span> of
                modern enterprises.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 max-w-3xl space-y-6 text-white/55 text-base md:text-lg leading-relaxed">
                <p>
                  Most organizations deploy AI as a feature. We architect AI as
                  infrastructure — engineered, governed, observable, and
                  embedded into the systems that actually run the business.
                </p>
                <p>
                  From multi-agent operations and enterprise copilots to
                  autonomous decision systems and digital workforces, we design
                  AI that integrates directly into the core of how
                  organizations operate, decide, and scale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12 grid sm:grid-cols-3 gap-4">
                {[
                  { l: "Architected", d: "Not patched" },
                  { l: "Governed", d: "Not improvised" },
                  { l: "Measured", d: "Not promised" },
                ].map((p) => (
                  <div
                    key={p.l}
                    className="border-l-2 border-[#8B5CF6]/40 pl-4 py-2"
                  >
                    <div className="font-display text-lg font-medium">
                      {p.l}
                    </div>
                    <div className="text-sm text-white/40 font-mono mt-1">
                      {p.d}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
