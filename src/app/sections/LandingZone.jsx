"use client";

import { StarsBackground } from "../components/visual/StarsBackground";
import GroundHorizon from "../components/visual/GroundHorizon";
import { FinalCTA } from "./FinalCTA";

export function LandingZone() {
  return (
    <div
      data-testid="landing-zone"
      className="relative overflow-hidden w-full bg-[radial-gradient(ellipse_at_top,_#0a0e2a_0%,_#02030a_60%,_#000000_100%)]"
    >
      <StarsBackground
        data-testid="landing-zone-stars"
        className="absolute inset-0 z-0 bg-transparent"
        starColor="#ffffff"
      />
      {/* <div className="absolute inset-x-0 bottom-[260px] sm:bottom-[320px] z-[1] pointer-events-none">
        <GroundHorizon />
      </div> */}
      <div className="relative z-10">
        <FinalCTA />
      </div>
    </div>
  );
}
