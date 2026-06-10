import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";

const OUTCOMES = [
  {
    v: "38%",
    label: "Reduction in operational workload",
    note: "Multi-agent ops deployed across support and finance.",
    span: "lg:col-span-7",
  },
  {
    v: "72%",
    label: "Faster support resolution",
    note: "Copilots grounded on private knowledge base.",
    span: "lg:col-span-5",
  },
  {
    v: "3.4x",
    label: "Lead engagement improvement",
    note: "Voice + conversational sales agents in production.",
    span: "lg:col-span-5",
  },
  {
    v: "89%",
    label: "Faster knowledge retrieval",
    note: "Enterprise RAG with graph & vector hybrid.",
    span: "lg:col-span-7",
  },
];

const Outcomes = () => {
  return (
    <section
      id="outcomes"
      data-testid="outcomes-section"
      className="relative py-12 md:py-16 bg-[#04030C] border-y border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute -right-40 -bottom-40 w-[700px] h-[700px] opacity-25"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(168,85,247,0.25)"
            strokeWidth="0.1"
            strokeDasharray="0.4 1.8"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.1"
            strokeDasharray="0.5 1.5"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <ShiningText testId="outcomes-eyebrow">
            OUTCOMES, NOT EXPERIMENTS
          </ShiningText>
          <h2 className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em] font-medium max-w-3xl text-balance">
            Numbers measured in production. Not pilots.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {OUTCOMES.map((o, i) => (
            <Reveal
              key={o.label}
              delay={i * 0.07}
              className={`${o.span} col-span-12`}
            >
              <div
                data-testid={`outcome-${i}`}
                className="relative b2b-card p-8 md:p-12 overflow-hidden h-full"
              >
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#8B5CF6]/6 blur-[100px]" />
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">
                  Result {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 font-display text-6xl md:text-7xl lg:text-8xl leading-none tracking-[-0.05em] font-light bg-gradient-to-br from-white via-white/90 to-[#C084FC] bg-clip-text text-transparent">
                  {o.v}
                </div>
                <div className="mt-6 font-display text-lg md:text-xl font-medium max-w-md">
                  {o.label}
                </div>
                <p className="mt-3 text-sm text-white/45 max-w-md">{o.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
