import React from "react";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import RouteTransition from "./RouteTransition";
import Starfield from "./Starfield";


/**
 * Global page shell — applies the Base2Brand DNA (cosmic background, fixed
 * navbar, multi-column footer, route transition) to every page. The `tint`
 * prop drives the accent colour for the current page division.
 */
export default function Layout({ tint = "orange", children }) {
  return (
    <div className="relative md:min-h-screen bg-[#020408] text-white">
      {/* Cosmic background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,132,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,106,44,0.04)_0%,transparent_60%)]" />
      </div>
      <Starfield accent={tint} />

      <RouteTransition tint={tint} />

      {/* <Navbar tint={tint} /> */}
      <main className="relative z-10">{children}</main>
      {/* <Footer tint={tint} /> */}
    </div>
  );
}
