"use client";
import React, { useRef } from "react";
import RocketNavigator from "@/components/portfolio-animation/RocketNavigator";
import HeroLaunch from "@/components/portfolio-animation/sections/HeroLaunch";
import { useMedia } from "@/hooks/useMedia";
import Services from "@/components/portfolio-animation/sections/Services";
import "./portfoliodemo.css";
import StarField from "@/components/portfolio-animation/StarField";
import Solutions from "@/components/portfolio-animation/sections/Solutions";
import Industries from "@/components/portfolio-animation/sections/Industries";
import Work from "@/components/portfolio-animation/sections/Work";
import Resources from "@/components/portfolio-animation/sections/Resources";
import About from "@/components/portfolio-animation/sections/About";
import Contact from "@/components/portfolio-animation/sections/Contact";

const page = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const containerRef = useRef(null);

  return (
    <>
      {/* <StarField density={isMobile ? "med" : "high"} />
      <main
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <RocketNavigator containerRef={containerRef} mobile={isMobile} />

        <div
          className="grain"
          style={{ position: "fixed", zIndex: 3, opacity: 0.04 }}
        />

        <HeroLaunch />
        <Services />
        <Solutions />
        <Industries />
        <Work />
        <Resources />
        <About />
        <Contact /> 
      </main>*/}
    </>
  );
};

export default page;
