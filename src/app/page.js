import { Navbar } from "./components/layout/Navbar";
import RocketScrollNavigator from "./components/layout/RocketScrollNavigator";
import { Toaster } from "./components/ui/toaster";
import GroundHorizon from "./components/visual/GroundHorizon";
import { StarsBackground } from "./components/visual/StarsBackground";
import { CaseStudies } from "./sections/CaseStudies";
import { ClientFootprint } from "./sections/ClientFootprint";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";
import { GlobalPresence } from "./sections/GlobalPresence";
import { GovtNGO } from "./sections/GovtNGO";
import { Hero } from "./sections/Hero";
import { Industries } from "./sections/Industries";
import { Innovation } from "./sections/Innovation";
import { Insights } from "./sections/Insights";
import { Services } from "./sections/Services";
import { Solutions } from "./sections/Solutions";
import { Testimonials } from "./sections/Testimonials";
import { Trust } from "./sections/Trust";

export default function page() {
  return (
    <main className="App relative bg-[#02030a] text-white min-h-screen overflow-x-hidden" data-testid="app-root">
      <RocketScrollNavigator />
      <main>
        <Hero />
        <Trust />
        <ClientFootprint />
        <Services />
        <Solutions />
        <Testimonials />
        <Industries />
        <Innovation />
        <CaseStudies />
        <GovtNGO />
        <GlobalPresence />
        <Insights />
        <div
          data-testid="landing-zone"
          className="relative overflow-hidden w-full bg-[radial-gradient(ellipse_at_top,_#0a0e2a_0%,_#02030a_60%,_#000000_100%)]"
        >
          <StarsBackground
            data-testid="landing-zone-stars"
            className="absolute inset-0 z-0 bg-transparent"
            starColor="#ffffff"
          />
          <div className="absolute inset-x-0 bottom-[260px] sm:bottom-[320px] z-[1] pointer-events-none">
            <GroundHorizon />
          </div>
          <div className="relative z-10">
            <FinalCTA />
          </div>
        </div>
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


// 1 #004bff
// DottedWorldMap / GlobalPresence
// next/dynamic se lazy load
// 2
// Sab sections eager import
// Below-fold sections ko dynamic() se defer
// 3
// StarsBackground x2
// Already optimized (canvas + IntersectionObserver)
// 4
// RocketScrollNavigator
// Minor, leave as-is