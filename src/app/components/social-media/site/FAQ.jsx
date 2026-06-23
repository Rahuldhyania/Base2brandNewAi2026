import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../../mock";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="relative py-28"
      style={{ background: "#F4F2EE" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[11px] tracking-[0.28em] text-zinc-500"
          >
            ● FREQUENTLY ASKED
          </span>
        </div>
        <h2
          className="font-black text-zinc-900 leading-[0.92] tracking-tight mb-14"
          style={{            fontSize: "clamp(48px, 7vw, 96px)",
            letterSpacing: "-0.03em",
          }}
        >
          Questions, <span style={{ color: "#F37335" }}>Answered.</span>
        </h2>

        <div className="divide-y divide-zinc-300/70 border-y border-zinc-300/70">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-6 py-6 text-left group"
                >
                  <span
                    className="text-[11px] tracking-[0.2em] text-zinc-500 w-10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 text-zinc-900 font-bold pr-6"
                    style={{                      fontSize: "clamp(18px, 1.8vw, 22px)",
                      letterSpacing: "-0.01em",
                      lineHeight: "1.3",
                    }}
                  >
                    {f.q}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      background: isOpen ? "#F37335" : "transparent",
                      borderColor: isOpen ? "#F37335" : "#d4d4d8",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={18} className="text-white" />
                    ) : (
                      <Plus size={18} className="text-zinc-900" />
                    )}
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pb-6 pl-16 pr-16">
                    <p className="text-zinc-600 text-[15px] leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
