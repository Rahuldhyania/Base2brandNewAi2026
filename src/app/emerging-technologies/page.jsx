import Capabilities from "@/components/spatial/Capabilities";
import CaseStudies from "@/components/spatial/CaseStudies";
import CtaSection from "@/components/spatial/CtaSection";
import Hero from "@/components/spatial/Hero";
import Industries from "@/components/spatial/Industries";
import Process from "@/components/spatial/Process";
import TechStack from "@/components/spatial/TechStack";
import UseCases from "@/components/spatial/UseCases";
import WaveBackground from "@/components/spatial/WaveBackground";
import WhySpatial from "@/components/spatial/WhySpatial";
import React from "react";

const page = () => {
  return (
    <div className="theme-emerging-technologies">
      <WaveBackground />

      <main>
        <Hero />
        <WhySpatial />
        <Capabilities />
        <UseCases />
        <TechStack />
        <Industries />
        <Process />
        <CaseStudies />
        <CtaSection />
      </main>
    </div>
  );
};

export default page;
