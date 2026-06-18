import React from "react";
import Hero  from "@/components/PublicSectorNgo/Hero";
import { TrustBar } from "@/components/PublicSectorNgo/TrustBar";
import { ValueProp } from "@/components/PublicSectorNgo/ValueProp";
import { Problems } from "@/components/PublicSectorNgo/Problems";
import { Industries } from "@/components/PublicSectorNgo/Industries";
import { WhyUs } from "@/components/PublicSectorNgo/WhyUs";
import { Process } from "@/components/PublicSectorNgo/Process";
import { Stats } from "@/components/PublicSectorNgo/Stats";
import { Testimonials } from "@/components/PublicSectorNgo/Testimonials";
import { FinalCTA } from "@/components/PublicSectorNgo/FinalCTA";

const page = () => {
  return (
    <div>
      <Hero
        highlightTag={"GEO · AEO · AI Search Optimization"}
        titleUpper={"Dominate"}
        titleMiddle={"AI Search"}
        titleLower={"competitors do."}
        description={
          "We get your brand recommended inside ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews and the next generation of search — through Generative Engine Optimization (GEO), Answer Engine Optimization (AEO) and AI visibility strategies."
        }
        leftCTA="Book Free Strategy Call"
        rightCTA={"Get AI Visibility Audit"}
        primaryColor="rgb(21 93 252)"
        // floatingMetrics={floatingMetrics}
      />
      <TrustBar />
      <ValueProp />
      <Problems />
      <Industries />
      <WhyUs />
      <Process />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default page;
