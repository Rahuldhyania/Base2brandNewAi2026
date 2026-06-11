import Layout from "@/components/apple/Layout";
import AppleIntelligence from "@/pages/AppleEcosystem/sections/AppleIntelligence";
import Capabilities from "@/pages/AppleEcosystem/sections/Capabilities";
import Enterprise from "@/pages/AppleEcosystem/sections/Enterprise";
import FinalCta from "@/pages/AppleEcosystem/sections/FinalCta";
import Hero from "@/pages/AppleEcosystem/sections/Hero";
import PlatformExplorer from "@/pages/AppleEcosystem/sections/PlatformExplorer";
import Process from "@/pages/AppleEcosystem/sections/Process";
import SeoBlock from "@/pages/AppleEcosystem/sections/SeoBlock";
import Technologies from "@/pages/AppleEcosystem/sections/Technologies";
import VisionPro from "@/pages/AppleEcosystem/sections/VisionPro";
import WhyApple from "@/pages/AppleEcosystem/sections/WhyApple";
export default function page() {
  return (
    <Layout tint="blue">
      <main className="relative flex-1 min-h-screen overflow-x-hidden">
        <Hero />
        <WhyApple />
        <Capabilities />
        <PlatformExplorer />
        <Technologies />
        <AppleIntelligence />
        <VisionPro />
        <Enterprise />
        <Process />
       
        <SeoBlock />
        <FinalCta />
      </main>
    </Layout>
  );
}
