import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "./sections/Hero";
import WhyApple from "./sections/WhyApple";
import Capabilities from "./sections/Capabilities";
import PlatformExplorer from "./sections/PlatformExplorer";
import Technologies from "./sections/Technologies";
import AppleIntelligence from "./sections/AppleIntelligence";
import VisionPro from "./sections/VisionPro";
import Enterprise from "./sections/Enterprise";
import Process from "./sections/Process";
import Outcomes from "./sections/Outcomes";
import SeoBlock from "./sections/SeoBlock";
import FinalCta from "./sections/FinalCta";

/**
 * Apple Ecosystem Development — Base2Brand premium service page.
 * Section order matches the brief exactly.
 */
export default function AppleEcosystem() {
  return (
    <Layout tint="blue">
      <Hero />
      <WhyApple />
      <Capabilities />
      <PlatformExplorer />
      <Technologies />
      <AppleIntelligence />
      <VisionPro />
      <Enterprise />
      <Process />
      <Outcomes />
      <SeoBlock />
      <FinalCta />
    </Layout>
  );
}
