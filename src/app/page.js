import dynamic from "next/dynamic";
import { Hero } from "./sections/Hero";
import { SectionFallback } from "./components/layout/SectionFallback";
import { DeferredRocketScrollNavigator } from "./components/layout/DeferredRocketScrollNavigator";
import { Toaster } from "./components/ui/toaster";
import TrustSection from "./sections/Trust";
import GrowthSystem from "./sections/GrowthSystem";
import FAQ from "./sections/FAQ";
import { WORK_CAROUSEL_CASES } from "./case-study/data/workCarouselData";


const ClientFootprint = dynamic(
  () => import("./sections/ClientFootprint").then((m) => m.ClientFootprint),
  { loading: () => <SectionFallback minHeight={720} /> },
);

// Pulls in the full Swiper carousel library — lazy-load since it's mid-page,
// not needed for initial paint.
const ClientFeedback = dynamic(() => import("./sections/ClientFeedback"), {
  loading: () => <SectionFallback minHeight={480} />,
});

const Services = dynamic(
  () => import("./sections/Services").then((m) => m.Services),
  { loading: () => <SectionFallback minHeight={640} /> },
);

const Solutions = dynamic(
  () => import("./sections/Solutions").then((m) => m.Solutions),
  { loading: () => <SectionFallback minHeight={560} /> },
);

const Testimonials = dynamic(
  () => import("./sections/Testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionFallback minHeight={720} /> },
);

// const Industries = dynamic(
//   () => import("./sections/Industries").then((m) => m.Industries),
//   { loading: () => <SectionFallback minHeight={520} /> },
// );

const Innovation = dynamic(
  () => import("./sections/Innovation").then((m) => m.Innovation),
  { loading: () => <SectionFallback minHeight={520} /> },
);

const CaseStudies = dynamic(
  () => import("./sections/CaseStudies").then((m) => m.CaseStudies),
  { loading: () => <SectionFallback minHeight={480} /> },
);

const GovtNGO = dynamic(
  () => import("./sections/GovtNGO").then((m) => m.GovtNGO),
  { loading: () => <SectionFallback minHeight={480} /> },
);


const GlobalPresence = dynamic(
  () => import("./sections/GlobalPresence").then((m) => m.GlobalPresence),
  { loading: () => <SectionFallback minHeight={680} /> },
);

const Insights = dynamic(
  () => import("./sections/Insights").then((m) => m.Insights),
  { loading: () => <SectionFallback minHeight={520} /> },
);

const LandingZone = dynamic(
  () => import("./sections/LandingZone").then((m) => m.LandingZone),
  { loading: () => <SectionFallback minHeight={640} /> },
);

const WorkCarousel = dynamic(
  () => import("@/components/portfolio-animation/sections/WorkCarousel"),
  { loading: () => <SectionFallback minHeight={640} /> },
);

const CommandCenter = dynamic(
  () => import("@/components/shopify-solution/site/CommandCenter"),
  { loading: () => <SectionFallback minHeight={560} /> },
);

const Industries = dynamic(
  () => import("@/components/ai/Industries"),
  { loading: () => <SectionFallback minHeight={520} /> },
);

const InsightsSection = dynamic(
  () => import("./resources-catgeories/insights/InsightsSection"),
  { loading: () => <SectionFallback minHeight={480} /> },
);

const SECTIONS = [
  { id: "top", label: "Welcome to Base2Brand" },
  { id: "trust", label: "How We Do Things" },
  { id: "footprint", label: "Clients Network" },
  { id: "services", label: "What We Build" },
  { id: "solutions", label: "Solutions in Motion" },
  { id: "voices", label: "Voices of Success" },
  { id: "industries", label: "Industries We Power" },
  { id: "innovation", label: "Innovation Lab" },
  { id: "case-studies", label: "Proof in Action" },
  { id: "govt", label: "Public Impact" },
  { id: "global", label: "Global Footprint" },
  { id: "insights", label: "Signals & Insights" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Let's Build Together" },
];

export default function page() {
  return (
    <main
      className="App relative bg-[#02030a] text-white min-h-screen overflow-x-hidden"
      data-testid="app-root"
    >
      <DeferredRocketScrollNavigator sections={SECTIONS} />
      <main>
        <Hero />
        <TrustSection />
        <GrowthSystem />
        <ClientFootprint />
        <ClientFeedback />
        {/* <Services /> */}
                 {/* <Solutions /> */}
        {/* <CaseStudies /> */}
                 {/* <Industries /> */}
        <Industries />
        {/* <Testimonials /> */}
                   {/* <Innovation /> */}
        <WorkCarousel cardsData={WORK_CAROUSEL_CASES} />
        <GovtNGO />
        <CommandCenter />
        <FAQ />
        <GlobalPresence />
        {/* <Insights /> */}
        <InsightsSection displayCount={3} />
        <LandingZone />
      </main>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#04061a",
            border: "1px solid rgba(255,106,0,0.35)",
            color: "#f5f7ff",
          },
        }}
      />
    </main>
  );
}
