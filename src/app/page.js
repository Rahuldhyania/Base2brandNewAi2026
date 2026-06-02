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
      <Navbar />
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