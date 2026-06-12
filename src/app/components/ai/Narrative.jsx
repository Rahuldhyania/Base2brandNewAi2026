'use client'
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";

const Narrative = ({title, description, features, highlightTag , tagList}) => {
  return (
    <section
      data-testid="narrative-section"
      className="relative py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <Reveal>
              <ShiningText testId="narrative-eyebrow">
                {highlightTag}
              </ShiningText>
              <div className="mt-8 font-mono text-xs tracking-[0.3em] uppercase text-white/60 space-y-2">
               {
                tagList.map((item)=>(
                  <p key={item}>{item}</p>
                ))
               }
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.05}>
              <h2
                data-testid="narrative-headline"
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-5 max-w-3xl space-y-3 text-white/55 text-base md:text-lg leading-relaxed">
              
               {
                description.map((item) => (
                  <p>{item}</p>
                ))
               }
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12 grid sm:grid-cols-3 gap-4">
                {features.map((p) => (
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
