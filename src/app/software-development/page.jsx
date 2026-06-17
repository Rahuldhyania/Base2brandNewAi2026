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
import React from "react";
const page = () => {
  return (
    <div className="theme-software-development">
      <main>
        <Hero />
        <WhyBase2Brand />
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
