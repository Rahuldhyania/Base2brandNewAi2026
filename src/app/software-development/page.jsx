import Capabilities from "@/components/software-development/Capabilities";
import Hero from "@/components/software-development/Hero";
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
      </main>
    </div>
  );
};

export default page;
