import dynamic from "next/dynamic";
import Layout from "@/components/apple/Layout";
import Capabilities from "@/pages/AppleEcosystem/sections/Capabilities";
import Hero from "@/pages/AppleEcosystem/sections/Hero";
import WhyApple from "@/pages/AppleEcosystem/sections/WhyApple";
import { SectionFallback } from "@/components/layout/SectionFallback";

// Below-the-fold sections are lazy-loaded so their JS (and, for
// CommandCenter, its video) isn't parsed/executed on initial load.
const Work = dynamic(
  () => import("@/components/portfolio-animation/sections/Work"),
  { loading: () => <SectionFallback minHeight={640} /> },
);
const PlatformExplorer = dynamic(
  () => import("@/pages/AppleEcosystem/sections/PlatformExplorer"),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const Technologies = dynamic(
  () => import("@/pages/AppleEcosystem/sections/Technologies"),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const AppleIntelligence = dynamic(
  () => import("@/pages/AppleEcosystem/sections/AppleIntelligence"),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const VisionPro = dynamic(
  () => import("@/pages/AppleEcosystem/sections/VisionPro"),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const Industries = dynamic(() => import("@/components/ai/Industries"), {
  loading: () => <SectionFallback minHeight={520} />,
});
const Process = dynamic(
  () => import("@/pages/AppleEcosystem/sections/Process"),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const CommandCenter = dynamic(
  () => import("@/components/shopify-solution/site/CommandCenter"),
  { loading: () => <SectionFallback minHeight={560} /> },
);
const SeoBlock = dynamic(
  () => import("@/pages/AppleEcosystem/sections/SeoBlock"),
  { loading: () => <SectionFallback minHeight={400} /> },
);
const FinalCta = dynamic(
  () => import("@/pages/AppleEcosystem/sections/FinalCta"),
  { loading: () => <SectionFallback minHeight={400} /> },
);
const LandingZone = dynamic(
  () => import("@/sections/LandingZone").then((m) => m.LandingZone),
  { loading: () => <SectionFallback minHeight={640} /> },
);
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
    url: "https://www.base2brand.com/apple-ecosystem",
    preview: {
      accent: "#42A5FF",
      title: "Native iOS Platform — Workflow Console",
      screenshot: "/images/apple1.png",
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
    url: "https://www.base2brand.com/apple-ecosystem",
    preview: {
      accent: "#00B8FF",
      title: "Vision Pro — Spatial Experience Layer",
      screenshot: "/images/apple2.png",
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
    url: "https://www.base2brand.com/apple-ecosystem",
    preview: {
      accent: "#1E90FF",
      title: "Apple Enterprise — Deployment Dashboard",
      screenshot: "/images/apple3.png",
      lines: [
        { label: "Managed devices", value: "12,600" },
        { label: "Platform uptime", value: "99.95%" },
        { label: "Security posture", value: "SOC 2" },
      ],
      chart: [40, 44, 49, 55, 61, 66, 72, 78, 83, 89, 94, 99],
    },
  },
  {
    id: "case-04",
    n: "CASE 04",
    tag: "AI Workflow Engine — Enterprise Dashboard",
    title: "Creating intelligent automation for enterprise workflows.",
    metrics: [
      { v: "95%", l: "Decision accuracy" },
      { v: "<150ms", l: "Average execution time" },
    ],
    url: "https://www.base2brand.com/apple-ecosystem",
    preview: {
      accent: "#1E90FF",
      title: "Apple Enterprise — Deployment Dashboard",
      screenshot: "/images/apple4.png",
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
          imageBorderColor="#1E90FF"
        />
        <PlatformExplorer />
        <Technologies />
        <AppleIntelligence />
        <VisionPro />
        {/* <Enterprise /> */}
        <Industries />
        <Process />
        <CommandCenter
          title="Every touchpoint. Every workflow. One Apple experience."
          subtitle="From iPhone app development and enterprise iOS applications to Vision Pro, Apple Watch and CarPlay, we design connected products that feel native, perform flawlessly and scale securely across the Apple ecosystem."
        />
        <SeoBlock />
        <FinalCta
          eyebrow="Start an Apple engagement"
          titleLines={["Tell us what you need to build.", "We'll show you how to ship it."]}
          description="Need an iPhone app, enterprise iOS platform or Vision Pro experience? We'll map the Apple product your business needs next."
          checklist={[
            "No generic app proposal.",
            "No confusing development process.",
            "Just a clear plan built around your product goals.",
          ]}
          sidePanelLabel="What happens next"
          steps={[
            {
              title: "We review your brief",
              description: "Our team evaluates every product requirement.",
            },
            {
              title: "Custom roadmap crafted",
              description: "A focused Apple plan built for your goals.",
            },
            {
              title: "We get to work",
              description: "Clear milestones, native engineering, strong delivery.",
            },
          ]}
        />
        <LandingZone />
      </main>
    </Layout>
  );
}
