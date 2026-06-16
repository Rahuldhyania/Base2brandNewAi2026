import React from "react";
import { Warp } from "@paper-design/shaders-react";

/**
 * Hero Warp background — Base2Brand Software Red theme.
 * Slowed by ~30%, low opacity (~15%), engineering-feel checks shape.
 */
const WarpBackground = ({ opacity = 0.15, className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      <div style={{ opacity }} className="absolute inset-0">
        <Warp
          style={{ width: "100%", height: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={0.7}
          colors={[
            "hsl(4, 100%, 60%)",
            "hsl(8, 100%, 65%)",
            "hsl(0, 80%, 45%)",
            "hsl(12, 95%, 55%)",
          ]}
        />
      </div>
      {/* Vignette + base wash so it stays readable & on-brand */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050814_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050814]/30 via-transparent to-[#050814]" />
    </div>
  );
};

export default WarpBackground;
