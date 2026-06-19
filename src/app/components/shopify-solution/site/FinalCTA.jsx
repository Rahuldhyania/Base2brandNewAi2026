import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import MonoLabel from "@/components/site/MonoLabel";
import LeadForm from "@/components/site/LeadForm";
import { cn } from "@/lib/utils";

export const FinalCTA = ({ onOpenLeadForm }) => {
  return (
    <section
      id="contact"
      data-testid="final-cta-section"
      className="relative py-24 sm:py-28 lg:py-32 border-t border-white/[0.06]"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px circle at 50% 50%, rgba(149,191,71,0.16), rgba(5,5,5,0) 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 b2b-grid-dots opacity-[0.08]" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: CTA */}
          <Reveal className="lg:col-span-5">
            <MonoLabel dot>SECTOR 09 / TRANSMISSION INBOUND</MonoLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-[650] tracking-[-0.03em] leading-[1.05] text-white">
              Ready to ship a <span className="relative">Shopify mission
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-[6px]"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(149,191,71,0.55), transparent)",
                    filter: "blur(6px)",
                  }}
                />
              </span> that compounds?
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed max-w-md">
              Send us the brief. A Shopify strategist will respond within 24
              hours with a tailored next-step plan.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenLeadForm}
                data-testid="final-cta-start-project-button"
                className={cn(
                  "inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-medium",
                  "bg-[#95BF47] text-[#071006] hover:bg-[#B7E36A] active:bg-[#7FA83C]",
                  "active:translate-y-px transition-colors duration-200",
                  "b2b-shadow-cta",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95BF47]/55",
                )}
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="mailto:hello@base2brand.com"
                className="inline-flex items-center gap-2 h-12 px-5 rounded-xl text-sm bg-white/[0.04] text-white border border-white/12 hover:border-white/22 hover:bg-white/[0.07] transition-colors duration-200"
              >
                <Sparkles className="h-4 w-4" />
                hello@base2brand.com
              </a>
            </div>

            {/* Quick facts */}
            <ul className="mt-10 space-y-2.5">
              {[
                "24-hour response SLA on every brief",
                "Discovery call within 3 business days",
                "Confidential. No spam. Ever.",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-[#95BF47]"
                    style={{ boxShadow: "0 0 10px rgba(149,191,71,0.55)" }}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: Embedded LeadForm */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <LeadForm embedded idPrefix="lead-form-inline" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
