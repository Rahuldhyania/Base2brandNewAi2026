import MetricsBar from "@/components/ai/MetricsBar";
import Hero from "../components/ai/Hero";
import Narrative from "@/components/ai/Narrative";
import Capabilities from "@/components/ai/Capabilities";
import BuildingNow from "@/components/ai/BuildingNow";
import Architecture from "@/components/ai/Architecture";
import TechStack from "@/components/ai/TechStack";
import Industries from "@/components/ai/Industries";
import MaturityFramework from "@/components/ai/MaturityFramework";
import ResearchLab from "@/components/ai/ResearchLab";
import EngagementModels from "@/components/ai/EngagementModels";
import SEOContent from "@/components/ai/SEOContent";
import FinalCTA from "@/components/ai/FinalCTA";

export default function page() {
  return (
    <main
      data-testid="ai-page"
      className="relative bg-[#03030A] text-white overflow-x-hidden"
    >
      <Hero />
      <MetricsBar />
      <Narrative />
      <Capabilities />
      <BuildingNow />
      <Architecture />
      <TechStack />
      <Industries />
      <MaturityFramework />
      <ResearchLab />
      {/* <EngagementModels /> */}
      <SEOContent />
      <FinalCTA />
    </main>
  );
}
