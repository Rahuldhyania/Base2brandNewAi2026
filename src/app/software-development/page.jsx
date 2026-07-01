import React from "react";
import Architecture from "@/components/software-development/Architecture";
import Capabilities from "@/components/software-development/Capabilities";
import CaseStudies from "@/components/software-development/CaseStudies";
import DevelopmentProcess from "@/components/software-development/DevelopmentProcess";
import EngineeringPrinciples from "@/components/software-development/EngineeringPrinciples";
import FinalCTA from "@/components/software-development/FinalCTA";
import Hero from "@/components/software-development/Hero";
import Industries from "@/components/software-development/Industries";
import ProductsWeBuild from "@/components/software-development/ProductsWeBuild";
import TechStack from "@/components/software-development/TechStack";
import WhyBase2Brand from "@/components/software-development/WhyBase2Brand";

const CARDS = [
  {
    icon: 'Wrench',
    title: "Production engineering over prototypes.",
    desc: "Products are built to operate, evolve, and scale — not just to demo. We engineer for production from day one.",
  },
  {
    icon: 'Cloud',
    title: "Cloud-native foundations from day one.",
    desc: "Security, resilience, and observability are engineered into every layer of the platform, not bolted on later.",
  },
  {
    icon: 'Layers3',
    title: "Cross-platform product thinking.",
    desc: "Web, Android, APIs, and infrastructure work as a unified ecosystem with shared logic and consistent UX.",
  },
  {
    icon: 'Rocket',
    title: "Execution matters.",
    desc: "Shipping consistently is more valuable than endless planning. We move with engineering velocity and rigor.",
  },
];
const page = () => {
  return (
    <div className="theme-software-development">
      <main>
        <Hero />
        <WhyBase2Brand 
          hightlighttag={'Why Base2Brand '}
          titleUpper={'Why modern software products require'}
          titleLower={'engineering discipline.'}
          description={'Real software products are continuously operated, evolved, and scaled — not just launched. Our engineering approach is built around that reality.'}
          cardsdata={CARDS}
        />
        <Capabilities />
        <ProductsWeBuild />
        <TechStack />

        <Architecture />
        <Industries />
        <DevelopmentProcess />
        <CaseStudies />
        <EngineeringPrinciples />
        <FinalCTA />
      </main>
    </div>
  );
};

export default page;
