import { motion, useReducedMotion } from "framer-motion";

/**
 * Atmosphere - lightweight smoke/shader-like atmospheric layer.
 * Pure CSS / SVG (no WebGL) so it costs little, pauses gracefully under
 * prefers-reduced-motion. Designed for very-low-opacity overlays inside
 * Research Lab, Architecture, and similar interior sections.
 */
const Atmosphere = ({ className = "", intensity = 0.35 }) => {
  const reduce = useReducedMotion();

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity: intensity }}
      aria-hidden="true"
    >
      {/* Drifting violet plume */}
      <motion.div
        initial={{ x: "-15%", y: "10%", scale: 1 }}
        animate={
          reduce
            ? {}
            : {
                x: ["-15%", "5%", "-10%"],
                y: ["10%", "-5%", "8%"],
                scale: [1, 1.15, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.35) 0%, rgba(109,40,217,0) 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Drifting violet plume 2 */}
      <motion.div
        initial={{ x: "0%", y: "0%", scale: 1 }}
        animate={
          reduce
            ? {}
            : {
                x: ["0%", "-12%", "8%"],
                y: ["0%", "12%", "-10%"],
                scale: [1, 1.2, 1],
              }
        }
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(168,85,247,0) 60%)",
          filter: "blur(70px)",
        }}
      />
      {/* Soft white veil */}
      <motion.div
        initial={{ x: "10%", y: "20%" }}
        animate={
          reduce
            ? {}
            : {
                x: ["10%", "-5%", "12%"],
                y: ["20%", "5%", "15%"],
              }
        }
        transition={{ duration: 44, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
          filter: "blur(40px)",
        }}
      />
      {/* Grain */}
      <div className="grain" />
    </div>
  );
};

export default Atmosphere;
