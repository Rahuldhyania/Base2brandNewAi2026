import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ShopifyLogo,
  ShopifyPlusLogo,
  KlaviyoLogo,
  RechargeLogo,
  MetaLogo,
  GoogleLogo,
} from "@/components/site/Logos";

/* Orbit Ring + Node primitives */

const NODE_LOGOS = {
  "Shopify Plus": ShopifyPlusLogo,
  Klaviyo: KlaviyoLogo,
  Recharge: RechargeLogo,
  Meta: MetaLogo,
  Google: GoogleLogo,
};

const MONOGRAMS = {
  Odoo: "Od",
  EasyEcom: "Ee",
  Unicommerce: "Uc",
  Increff: "In",
};

const NodeChip = ({ name, size, official }) => {
  const testId = `orbit-node-${name.toLowerCase().replace(/\s+/g, "-")}`;
  const Logo = official ? NODE_LOGOS[name] : null;
  const monogram = MONOGRAMS[name];

  return (
    <div
      data-testid={testId}
      role="button"
      tabIndex={0}
      aria-label={name}
      className={cn(
        "group relative grid place-items-center rounded-2xl",
        "bg-white/[0.05] backdrop-blur-xl border border-white/12",
        "shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:border-white/25",
        "transition-colors duration-200 outline-none",
        "focus-visible:ring-2 focus-visible:ring-[#95BF47]/45",
      )}
      style={{ width: size, height: size }}
    >
      {/* accent ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(149,191,71,0.22)" }}
      />
      {/* status dot top-right */}
      <span
        aria-hidden
        className="absolute -top-1 -right-1 h-2 w-2 rounded-full"
        style={{ backgroundColor: "#95BF47", boxShadow: "0 0 14px rgba(149,191,71,0.55)" }}
      />
      {/* content */}
      {official ? (
        <Logo size={Math.round(size * 0.5)} />
      ) : (
        <span className="font-display text-white text-[16px] font-[650] tracking-tight">
          {monogram}
        </span>
      )}
      {/* hover halo */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ boxShadow: "0 0 0 1px rgba(149,191,71,0.35), 0 0 28px rgba(149,191,71,0.25)" }}
      />
      {/* label tooltip */}
      <span
        className={cn(
          "absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap",
          "px-2 py-0.5 rounded-md bg-black/70 border border-white/10",
          "font-mono text-[10px] uppercase tracking-[0.18em] text-white/80",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
        )}
      >
        {name}
      </span>
    </div>
  );
};

/**
 * OrbitRing — a rotating circular ring with nodes at evenly distributed angles.
 * - radius (px)
 * - nodes: array of { name, official }
 * - duration (s) and direction
 * - nodeSize (px)
 */
const OrbitRing = ({
  radius,
  nodes,
  duration = 30,
  direction = 1,
  nodeSize = 52,
  dashed = false,
  reduced = false,
}) => {
  const total = nodes.length;
  const diameter = radius * 2;

  return (
    <div
      aria-hidden={false}
      className="absolute left-1/2 top-1/2"
      style={{
        width: diameter,
        height: diameter,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* The ring track (decorative) */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-full",
          dashed
            ? "border border-dashed border-white/12"
            : "border border-white/10",
        )}
      />

      {/* Rotating layer with nodes */}
      <m.div
        className="absolute inset-0"
        animate={
          reduced
            ? undefined
            : { rotate: 360 * direction }
        }
        transition={
          reduced
            ? undefined
            : { duration, repeat: Infinity, ease: "linear" }
        }
        style={{ transformOrigin: "50% 50%" }}
      >
        {nodes.map((node, i) => {
          const angle = (i / total) * 360;
          return (
            <div
              key={node.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
              }}
            >
              {/* Counter-rotation to keep upright */}
              <m.div
                animate={
                  reduced
                    ? undefined
                    : { rotate: -360 * direction }
                }
                transition={
                  reduced
                    ? undefined
                    : { duration, repeat: Infinity, ease: "linear" }
                }
                style={{ transformOrigin: "50% 50%" }}
              >
                {/* gentle vertical bobbing */}
                <m.div
                  animate={
                    reduced
                      ? undefined
                      : { y: [0, -6, 0] }
                  }
                  transition={
                    reduced
                      ? undefined
                      : {
                          duration: 3.6 + i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.25,
                        }
                  }
                  style={{ width: nodeSize, height: nodeSize, marginLeft: -nodeSize / 2, marginTop: -nodeSize / 2 }}
                >
                  <NodeChip name={node.name} size={nodeSize} official={node.official} />
                </m.div>
              </m.div>
            </div>
          );
        })}
      </m.div>
    </div>
  );
};

/**
 * OrbitSystem — composes the central Shopify hub + three orbit rings.
 * Sizes scale via the `scale` prop (1 for desktop, 0.78 for tablet, 0.6 for mobile).
 */
export const OrbitSystem = ({ scale = 1 }) => {
  const reduced = useReducedMotion();

  // Inner: Shopify Plus, Recharge, Klaviyo
  // Mid: Meta, Google, Odoo
  // Outer: EasyEcom, Unicommerce, Increff
  const inner = [
    { name: "Shopify Plus", official: true },
    { name: "Recharge", official: true },
    { name: "Klaviyo", official: true },
  ];
  const mid = [
    { name: "Meta", official: true },
    { name: "Google", official: true },
    { name: "Odoo", official: false },
  ];
  const outer = [
    { name: "EasyEcom", official: false },
    { name: "Unicommerce", official: false },
    { name: "Increff", official: false },
  ];

  const r1 = 150 * scale;
  const r2 = 230 * scale;
  const r3 = 320 * scale;
  const nodeSize = Math.round(56 * scale);
  const hubSize = Math.round(150 * scale);

  const containerSize = (r3 + nodeSize / 2) * 2 + 20;

  return (
    <div
      className="relative mx-auto"
      style={{ width: containerSize, height: containerSize }}
      aria-label="Shopify-centered ecosystem orbit"
    >
      {/* radial glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(149,191,71,0.22), rgba(5,5,5,0) 65%)",
        }}
      />

      {/* faint outer ring */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.06]"
        style={{
          width: (r3 + 60) * 2,
          height: (r3 + 60) * 2,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Three orbit rings */}
      <OrbitRing
        radius={r1}
        nodes={inner}
        duration={26}
        direction={1}
        nodeSize={nodeSize}
        dashed={true}
        reduced={reduced}
      />
      <OrbitRing
        radius={r2}
        nodes={mid}
        duration={34}
        direction={-1}
        nodeSize={nodeSize}
        reduced={reduced}
      />
      <OrbitRing
        radius={r3}
        nodes={outer}
        duration={44}
        direction={1}
        nodeSize={nodeSize}
        dashed={true}
        reduced={reduced}
      />

      {/* Central Shopify Hub */}
      <div
        data-testid="hero-shopify-hub"
        className={cn(
          "absolute left-1/2 top-1/2 grid place-items-center rounded-3xl",
          "bg-white/[0.06] border border-white/15 backdrop-blur-xl b2b-shadow-glow",
        )}
        style={{
          width: hubSize,
          height: hubSize,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* conic highlight ring */}
        <m.span
          aria-hidden
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "conic-gradient(from 90deg, rgba(149,191,71,0.0), rgba(149,191,71,0.35), rgba(149,191,71,0.0) 60%)",
            WebkitMaskImage:
              "radial-gradient(transparent 60%, black 62%, black 66%, transparent 70%)",
            maskImage:
              "radial-gradient(transparent 60%, black 62%, black 66%, transparent 70%)",
            opacity: 0.7,
          }}
          animate={reduced ? undefined : { rotate: 360 }}
          transition={reduced ? undefined : { duration: 14, repeat: Infinity, ease: "linear" }}
        />
        <ShopifyLogo size={Math.round(hubSize * 0.55)} className="text-[#95BF47]" />
      </div>

      {/* Mission control tiny strings */}
      <span
        aria-hidden
        className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.18em] uppercase text-white/35"
      >
        SECTOR&nbsp;01 / CORE
      </span>
      <span
        aria-hidden
        className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.18em] uppercase text-white/35"
      >
        T+00:14 · NOMINAL
      </span>
    </div>
  );
};

export default OrbitSystem;
