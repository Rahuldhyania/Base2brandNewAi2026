import Layout from "@/components/apple/Layout";
import Work from "@/components/portfolio-animation/sections/Work";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";
import AppleIntelligence from "@/pages/AppleEcosystem/sections/AppleIntelligence";
import Capabilities from "@/pages/AppleEcosystem/sections/Capabilities";
import Enterprise from "@/pages/AppleEcosystem/sections/Enterprise";
import Industries from "@/components/ai/Industries";

import FinalCta from "@/pages/AppleEcosystem/sections/FinalCta";
import Hero from "@/pages/AppleEcosystem/sections/Hero";
import PlatformExplorer from "@/pages/AppleEcosystem/sections/PlatformExplorer";
import Process from "@/pages/AppleEcosystem/sections/Process";
import SeoBlock from "@/pages/AppleEcosystem/sections/SeoBlock";
import Technologies from "@/pages/AppleEcosystem/sections/Technologies";
import VisionPro from "@/pages/AppleEcosystem/sections/VisionPro";
import WhyApple from "@/pages/AppleEcosystem/sections/WhyApple";
const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "Native iOS & iPadOS · Enterprise App",
    title: "Building a native app for high-performance workflows.",
    metrics: [
      { v: "60fps", l: "native interaction flow" },
      { v: "<200ms", l: "response latency" },
    ],
    url: "native-ios.b2b/case",
    preview: {
      accent: "#42A5FF",
      title: "Native iOS Platform — Workflow Console",
      lines: [
        { label: "Active app sessions", value: "18,420" },
        { label: "Interaction performance", value: "60fps" },
        { label: "Average response time", value: "<200ms" },
      ],
      chart: [30, 36, 42, 50, 57, 63, 69, 75, 81, 87, 92, 96],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "Vision Pro · Spatial Computing",
    title: "Creating immersive workflows for enterprise teams.",
    metrics: [
      { v: "4.7★", l: "average app rating" },
      { v: "30d", l: "release-to-review cycle" },
    ],
    url: "vision-pro.b2b/live",
    preview: {
      accent: "#00B8FF",
      title: "Vision Pro — Spatial Experience Layer",
      lines: [
        { label: "Spatial sessions", value: "6,814" },
        { label: "Average rating", value: "4.7★" },
        { label: "Review cycle", value: "30d" },
      ],
      chart: [22, 28, 35, 43, 51, 58, 64, 70, 76, 82, 88, 94],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Enterprise Apple · Security & Deployment",
    title: "Shipping secure Apple apps at enterprise scale.",
    metrics: [
      { v: "99.95%", l: "uptime" },
      { v: "SOC 2", l: "security-ready build" },
    ],
    url: "apple-enterprise.b2b/app",
    preview: {
      accent: "#1E90FF",
      title: "Apple Enterprise — Deployment Dashboard",
      lines: [
        { label: "Managed devices", value: "12,600" },
        { label: "Platform uptime", value: "99.95%" },
        { label: "Security posture", value: "SOC 2" },
      ],
      chart: [40, 44, 49, 55, 61, 66, 72, 78, 83, 89, 94, 99],
    },
  },
];
export default function page() {
  return (
    <Layout tint="blue">
      <main className="relative flex-1 min-h-screen overflow-x-hidden">
        <Hero />
        <WhyApple />
        <Capabilities />
        <Work
          title="Apple ecosystem cases."
          titleLower="Premium outcomes."
          cardsData={PROJECTS}
        />
        <PlatformExplorer />
        <Technologies />
        <AppleIntelligence />
        <VisionPro />
        {/* <Enterprise /> */}
        <Industries />
        <Process />
        <CommandCenter />
        <SeoBlock />
        <FinalCta />
      </main>
    </Layout>
  );
}
