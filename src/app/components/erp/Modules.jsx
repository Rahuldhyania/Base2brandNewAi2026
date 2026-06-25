// "use client";

// import React, { useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import {
//     AnimatePresence,
//     motion,
//     useMotionValueEvent,
//     useReducedMotion,
//     useScroll,
//     useSpring,
//     useTransform,
// } from "framer-motion";
// import {
//     BarChart3,
//     Boxes,
//     Factory,
//     ShoppingCart,
//     Truck,
//     UserCog,
//     Users,
//     Wallet,
// } from "lucide-react";
// import { SectionHeading } from "./SectionHeading";

// const NAV_HEIGHT = 96;
// const SPLIT_PANEL_TOP = 27;
// const SCROLL_PER_STAGE_VH = 48;
// const INTRO_FRACTION = 0.14;

// /*
//  * Step animation speed:
//  * 0.34 seconds = neither too fast nor too slow.
//  */
// const STEP_ANIMATION_DURATION = 0.34;

// const WHEEL_MODULES = [
//     {
//         id: "inventory",
//         label: "Inventory",
//         desc: "Stock, SKUs, multi-warehouse",
//         icon: Boxes,
//         angle: 0,
//     },
//     {
//         id: "finance",
//         label: "Finance",
//         desc: "Ledger, AR / AP, treasury",
//         icon: Wallet,
//         angle: 45,
//     },
//     {
//         id: "crm",
//         label: "CRM",
//         desc: "Customers, leads, lifecycle",
//         icon: Users,
//         angle: 90,
//     },
//     {
//         id: "mfg",
//         label: "Manufacturing",
//         desc: "BOMs, MRP, shop floor",
//         icon: Factory,
//         angle: 135,
//     },
//     {
//         id: "procurement",
//         label: "Procurement",
//         desc: "Vendors, RFQs, POs",
//         icon: ShoppingCart,
//         angle: 180,
//     },
//     {
//         id: "analytics",
//         label: "Analytics",
//         desc: "KPIs, forecasts, insights",
//         icon: BarChart3,
//         angle: 225,
//     },
//     {
//         id: "logistics",
//         label: "Logistics",
//         desc: "Fleet, routing, delivery",
//         icon: Truck,
//         angle: 270,
//     },
//     {
//         id: "hr",
//         label: "HR",
//         desc: "Payroll, talent, attendance",
//         icon: UserCog,
//         angle: 315,
//     },
// ];

// const MODULES_SCROLL = [
//     WHEEL_MODULES.find((module) => module.id === "logistics"),
//     WHEEL_MODULES.find((module) => module.id === "hr"),
//     WHEEL_MODULES.find((module) => module.id === "inventory"),
//     WHEEL_MODULES.find((module) => module.id === "finance"),
//     WHEEL_MODULES.find((module) => module.id === "crm"),
//     WHEEL_MODULES.find((module) => module.id === "mfg"),
//     WHEEL_MODULES.find((module) => module.id === "procurement"),
//     WHEEL_MODULES.find((module) => module.id === "analytics"),
// ].filter(Boolean);
// const MODULE_IMAGES = {
//     logistics:
//         "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",

//     inventory:
//         "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1280&h=800&fit=crop&q=80",

//     finance:
//         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",

//     crm:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=800&fit=crop&q=80",

//     mfg:
//         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&h=800&fit=crop&q=80",

//     procurement:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=800&fit=crop&q=80",

//     analytics:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",

//     hr:
//         "https://images.unsplash.com/photo-1521737711862-e3b97375f902?w=1280&h=800&fit=crop&q=80",
// };

// const CENTER_X = 50;
// const CENTER_Y = 50;
// const ORBIT_RADIUS = 38;
// const TOP_ANGLE = 270;

// /*
//  * Angles ko unwrap kiya gaya hai taaki Logistics se Inventory
//  * jaate waqt indicator reverse direction mein rotate na kare.
//  *
//  * Example:
//  * Logistics = 270
//  * Inventory = 360 instead of 0
//  * Finance = 405 instead of 45
//  */
// const SCROLL_ANGLES = MODULES_SCROLL.reduce(
//     (angles, module, index) => {
//         const rawAngle = module?.angle ?? 0;

//         if (index === 0) {
//             angles.push(rawAngle);
//             return angles;
//         }

//         let nextAngle = rawAngle;
//         const previousAngle = angles[index - 1];

//         while (nextAngle < previousAngle) {
//             nextAngle += 360;
//         }

//         angles.push(nextAngle);

//         return angles;
//     },
//     [],
// );

// const getPolarPosition = (angle, radius) => {
//     const radians = (angle * Math.PI) / 180;

//     return {
//         x: CENTER_X + radius * Math.cos(radians),
//         y: CENTER_Y + radius * Math.sin(radians),
//     };
// };

// const getNodePosition = (angle, radius) => {
//     const position = getPolarPosition(angle, radius);

//     return {
//         left: `${position.x}%`,
//         top: `${position.y}%`,
//     };
// };

// /*
//  * Label ko button ke layout se alag rakha gaya hai.
//  * Isse button ka actual centre change nahi hoga aur SVG line
//  * icon ke exact centre mein connect hogi.
//  */
// const getNodeLabelClass = (angle) => {
//     /*
//      * Right side nodes:
//      * Inventory and HR
//      */
//     if (angle >= 315 || angle < 45) {
//         return [
//             "left-full",
//             "top-1/2",
//             "ml-3",
//             "-translate-y-1/2",
//             "text-left",
//         ].join(" ");
//     }

//     /*
//      * Bottom nodes:
//      * Finance and CRM
//      */
//     if (angle >= 45 && angle < 135) {
//         return [
//             "left-1/2",
//             "top-full",
//             "mt-3",
//             "-translate-x-1/2",
//             "text-center",
//         ].join(" ");
//     }

//     /*
//      * Left side nodes:
//      * Manufacturing and Procurement
//      */
//     if (angle >= 135 && angle < 225) {
//         return [
//             "right-full",
//             "top-1/2",
//             "mr-3",
//             "-translate-y-1/2",
//             "text-right",
//         ].join(" ");
//     }

//     /*
//      * Top nodes:
//      * Analytics and Logistics
//      */
//     return [
//         "left-1/2",
//         "bottom-full",
//         "mb-3",
//         "-translate-x-1/2",
//         "text-center",
//     ].join(" ");
// };

// const getScrollAngle = (progress) => {
//     if (progress <= INTRO_FRACTION) {
//         return SCROLL_ANGLES[0];
//     }

//     const normalizedProgress = Math.min(
//         1,
//         Math.max(
//             0,
//             (progress - INTRO_FRACTION) /
//             (1 - INTRO_FRACTION),
//         ),
//     );

//     const anglePosition =
//         normalizedProgress * (SCROLL_ANGLES.length - 1);

//     const currentIndex = Math.floor(anglePosition);
//     const fractionalProgress =
//         anglePosition - currentIndex;

//     const currentAngle =
//         SCROLL_ANGLES[currentIndex] ??
//         SCROLL_ANGLES[0];

//     const nextAngle =
//         SCROLL_ANGLES[
//         Math.min(
//             currentIndex + 1,
//             SCROLL_ANGLES.length - 1,
//         )
//         ];

//     return (
//         currentAngle +
//         (nextAngle - currentAngle) *
//         fractionalProgress
//     );
// };

// const modulePanelVariants = {
//     enter: (direction) => ({
//         opacity: 0,
//         x: direction > 0 ? 26 : -26,
//         y: 8,
//         scale: 0.99,
//     }),

//     active: {
//         opacity: 1,
//         x: 0,
//         y: 0,
//         scale: 1,
//     },

//     exit: (direction) => ({
//         opacity: 0,
//         x: direction > 0 ? -20 : 20,
//         y: -6,
//         scale: 0.99,
//     }),
// };

// function ModuleImagePanel({ module }) {
//     const Icon = module.icon;
//     const imageSource = MODULE_IMAGES[module.id];

//     return (
//         <div
//             className="
//                 relative
//                 w-full
//                 max-w-[640px]
//                 mx-auto
//                 lg:mx-0
//                 lg:ml-auto
//             "
//             data-testid={`module-panel-${module.id}`}
//         >
//             <div
//                 className="
//                     relative
//                     aspect-[16/10]
//                     rounded-2xl
//                     overflow-hidden
//                     border
//                     border-white/10
//                     erp-surface-panel
//                     shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)]
//                 "
//             >
//                 <Image
//                     src={imageSource}
//                     alt={`${module.label} module`}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 1024px) 100vw, 640px"
//                     priority={module.id === "logistics"}
//                 />

//                 <div
//                     className="
//                         absolute
//                         inset-0
//                         bg-gradient-to-t
//                         from-[var(--b2b-bg)]
//                         via-[var(--b2b-bg)]/35
//                         to-transparent
//                     "
//                 />

//                 <div
//                     className="
//                         absolute
//                         inset-0
//                         bg-gradient-to-r
//                         from-[var(--b2b-bg)]/20
//                         to-transparent
//                     "
//                 />
//             </div>

//             <div className="mt-6 flex items-start gap-5">
//                 <div
//                     className="
//                         w-12
//                         h-12
//                         shrink-0
//                         rounded-xl
//                         border
//                         border-white/12
//                         erp-surface-panel
//                         flex
//                         items-center
//                         justify-center
//                         text-brand
//                     "
//                 >
//                     <Icon
//                         className="w-5 h-5"
//                         strokeWidth={1.4}
//                     />
//                 </div>

//                 <div>
//                     <div
//                         className="
//                             font-mono
//                             text-[10px]
//                             uppercase
//                             tracking-[0.24em]
//                             text-white/45
//                         "
//                     >
//                         Active module
//                     </div>

//                     <h3
//                         className="
//                             mt-1.5
//                             font-display
//                             text-2xl
//                             sm:text-[28px]
//                             font-medium
//                             tracking-tight
//                             text-white
//                         "
//                     >
//                         {module.label}
//                     </h3>

//                     <p
//                         className="
//                             mt-2
//                             text-[15px]
//                             leading-relaxed
//                             text-white/55
//                             max-w-md
//                         "
//                     >
//                         {module.desc}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function ModulesWheel({
//     activeId,
//     onSelectModule,
//     scrollProgress,
// }) {
//     const reduceMotion = useReducedMotion();

//     const activeAngle = useTransform(
//         scrollProgress,
//         getScrollAngle,
//     );

//     const indicatorRotation = useTransform(
//         activeAngle,
//         (angle) => angle - TOP_ANGLE,
//     );

//     const activeScrollIndex =
//         activeId !== null && activeId !== undefined
//             ? MODULES_SCROLL.findIndex(
//                 (module) => module.id === activeId,
//             )
//             : -1;

//     return (
//         <div
//             className="
//                 relative
//                 aspect-square
//                 w-full
//                 max-w-[min(620px,94vw)]
//                 mx-auto
//                 p-5
//                 sm:p-7
//                 overflow-visible
//             "
//         >
//             <svg
//                 viewBox="0 0 100 100"
//                 preserveAspectRatio="xMidYMid meet"
//                 className="
//                     absolute
//                     inset-0
//                     w-full
//                     h-full
//                     pointer-events-none
//                     overflow-visible
//                 "
//                 aria-hidden="true"
//             >
//                 <defs>
//                     <radialGradient
//                         id="modules-core-bg"
//                         cx="50%"
//                         cy="50%"
//                         r="50%"
//                     >
//                         <stop
//                             offset="0%"
//                             stopColor="var(--b2b-accent-glow)"
//                         />

//                         <stop
//                             offset="60%"
//                             stopColor="transparent"
//                         />
//                     </radialGradient>
//                 </defs>

//                 <circle
//                     cx={CENTER_X}
//                     cy={CENTER_Y}
//                     r="30"
//                     fill="url(#modules-core-bg)"
//                 />

//                 <circle
//                     cx={CENTER_X}
//                     cy={CENTER_Y}
//                     r={ORBIT_RADIUS}
//                     fill="none"
//                     stroke="rgba(255,255,255,0.10)"
//                     strokeDasharray="0.5 1"
//                 />

//                 <circle
//                     cx={CENTER_X}
//                     cy={CENTER_Y}
//                     r={ORBIT_RADIUS - 7}
//                     fill="none"
//                     stroke="rgba(255,255,255,0.05)"
//                 />

//                 {WHEEL_MODULES.map((module) => {
//                     /*
//                      * Line aur icon dono same exact polar position
//                      * use kar rahe hain.
//                      */
//                     const nodeCenter = getPolarPosition(
//                         module.angle,
//                         ORBIT_RADIUS,
//                     );

//                     const scrollIndex =
//                         MODULES_SCROLL.findIndex(
//                             (item) =>
//                                 item.id === module.id,
//                         );

//                     const isActive =
//                         module.id === activeId;

//                     const isPast =
//                         activeScrollIndex >= 0 &&
//                         scrollIndex >= 0 &&
//                         activeScrollIndex > scrollIndex;

//                     return (
//                         <motion.line
//                             key={module.id}
//                             x1={CENTER_X}
//                             y1={CENTER_Y}
//                             x2={nodeCenter.x}
//                             y2={nodeCenter.y}
//                             strokeLinecap="round"
//                             animate={{
//                                 stroke: isActive
//                                     ? "rgba(255,255,255,0.42)"
//                                     : isPast
//                                         ? "rgba(255,255,255,0.18)"
//                                         : "rgba(255,255,255,0.08)",

//                                 strokeWidth: isActive
//                                     ? 0.22
//                                     : 0.14,
//                             }}
//                             transition={{
//                                 duration: reduceMotion
//                                     ? 0
//                                     : 0.3,

//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                         />
//                     );
//                 })}
//             </svg>

//             {!reduceMotion && (
//                 <motion.div
//                     className="
//                         absolute
//                         inset-0
//                         pointer-events-none
//                         z-[15]
//                     "
//                     style={{
//                         transformOrigin: "50% 50%",
//                         rotate: indicatorRotation,
//                     }}
//                     aria-hidden="true"
//                 >
//                     <div
//                         className="
//                             absolute
//                             left-1/2
//                             -translate-x-1/2
//                             -translate-y-1/2
//                         "
//                         style={{
//                             top: `${CENTER_Y -
//                                 ORBIT_RADIUS
//                                 }%`,
//                         }}
//                     >
//                         <span
//                             className="
//                                 block
//                                 w-2.5
//                                 h-2.5
//                                 rounded-full
//                                 bg-brand
//                                 shadow-brand-dot
//                                 ring-2
//                                 ring-white/20
//                             "
//                         />
//                     </div>
//                 </motion.div>
//             )}

//             <div
//                 className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     z-10
//                 "
//                 data-testid="modules-core-node"
//             >
//                 <div
//                     className="
//                         relative
//                         rounded-xl
//                         border
//                         border-white/12
//                         erp-surface-panel
//                         backdrop-blur-xl
//                         px-6
//                         py-4
//                         text-center
//                         min-w-[148px]
//                     "
//                 >
//                     <div
//                         className="
//                             flex
//                             items-center
//                             justify-center
//                             gap-1.5
//                         "
//                     >
//                         <span
//                             className="
//                                 w-1
//                                 h-1
//                                 rounded-full
//                                 status-dot
//                             "
//                         />

//                         <span
//                             className="
//                                 font-mono
//                                 text-[9px]
//                                 uppercase
//                                 tracking-[0.28em]
//                                 text-white/50
//                             "
//                         >
//                             Core
//                         </span>
//                     </div>

//                     <div
//                         className="
//                             mt-1.5
//                             font-display
//                             text-[18px]
//                             font-medium
//                             tracking-tight
//                             text-white
//                         "
//                     >
//                         ERP NUCLEUS
//                     </div>

//                     <div
//                         className="
//                             mt-0.5
//                             font-mono
//                             text-[8.5px]
//                             uppercase
//                             tracking-[0.18em]
//                             text-white/35
//                         "
//                     >
//                         8 modules · 1 ledger
//                     </div>
//                 </div>
//             </div>

//             {WHEEL_MODULES.map((module) => {
//                 const nodePosition = getNodePosition(
//                     module.angle,
//                     ORBIT_RADIUS,
//                 );

//                 const labelPositionClass =
//                     getNodeLabelClass(module.angle);

//                 const Icon = module.icon;

//                 const scrollIndex =
//                     MODULES_SCROLL.findIndex(
//                         (item) =>
//                             item.id === module.id,
//                     );

//                 const isActive =
//                     module.id === activeId;

//                 const isPast =
//                     activeScrollIndex >= 0 &&
//                     scrollIndex >= 0 &&
//                     activeScrollIndex > scrollIndex;

//                 return (
//                     <button
//                         key={module.id}
//                         type="button"
//                         onClick={() =>
//                             onSelectModule(scrollIndex)
//                         }
//                         className="
//                             absolute
//                             z-20
//                             w-[3.75rem]
//                             h-[3.75rem]
//                             sm:w-16
//                             sm:h-16
//                             -translate-x-1/2
//                             -translate-y-1/2
//                             rounded-full
//                             group
//                             focus:outline-none
//                             focus-visible:ring-1
//                             focus-visible:ring-white/40
//                             focus-visible:ring-offset-4
//                             focus-visible:ring-offset-[var(--b2b-bg)]
//                         "
//                         style={nodePosition}
//                         data-testid={`module-${module.id}`}
//                         aria-label={`${module.label}: ${module.desc}`}
//                         aria-current={
//                             isActive
//                                 ? "true"
//                                 : undefined
//                         }
//                     >
//                         <motion.span
//                             animate={{
//                                 scale: isActive
//                                     ? 1.1
//                                     : 1,

//                                 borderColor: isActive
//                                     ? "rgba(255,255,255,0.48)"
//                                     : isPast
//                                         ? "rgba(255,255,255,0.22)"
//                                         : "rgba(255,255,255,0.12)",

//                                 backgroundColor: isActive
//                                     ? "rgba(255,255,255,0.08)"
//                                     : "rgba(255,255,255,0.02)",
//                             }}
//                             transition={{
//                                 duration: reduceMotion
//                                     ? 0
//                                     : 0.32,

//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                             className={`
//                                 absolute
//                                 inset-0
//                                 rounded-full
//                                 border
//                                 erp-surface-panel
//                                 backdrop-blur-md
//                                 flex
//                                 items-center
//                                 justify-center
//                                 transition-colors
//                                 duration-300
//                                 ${isActive
//                                     ? "text-white shadow-[0_0_24px_-4px_rgba(255,255,255,0.35)]"
//                                     : "text-white/75 group-hover:border-white/28 group-hover:text-brand"
//                                 }
//                             `}
//                         >
//                             <Icon
//                                 className="
//                                     w-[18px]
//                                     h-[18px]
//                                     sm:w-5
//                                     sm:h-5
//                                 "
//                                 strokeWidth={1.35}
//                             />
//                         </motion.span>

//                         <span
//                             className={`
//                                 absolute
//                                 pointer-events-none
//                                 min-w-[90px]
//                                 sm:min-w-[104px]
//                                 max-w-[118px]
//                                 ${labelPositionClass}
//                             `}
//                         >
//                             <span
//                                 className={`
//                                     block
//                                     text-[11px]
//                                     sm:text-[12px]
//                                     font-medium
//                                     tracking-tight
//                                     leading-tight
//                                     transition-colors
//                                     duration-300
//                                     ${isActive
//                                         ? "text-white"
//                                         : isPast
//                                             ? "text-white/52"
//                                             : "text-white/40"
//                                     }
//                                 `}
//                             >
//                                 {module.label}
//                             </span>

//                             <span
//                                 className="
//                                     hidden
//                                     sm:block
//                                     font-mono
//                                     text-[8px]
//                                     uppercase
//                                     tracking-[0.11em]
//                                     text-white/34
//                                     mt-1
//                                     leading-snug
//                                 "
//                             >
//                                 {module.desc}
//                             </span>
//                         </span>
//                     </button>
//                 );
//             })}
//         </div>
//     );
// }

// export const Modules = ({title, description}) => {
    
//     const sectionRef = useRef(null);

//     /*
//      * Ref active step comparison ke liye use ho raha hai.
//      * Isse unnecessary re-render aur repeated animation avoid hogi.
//      */
//     const activeRef = useRef(0);

//     const [active, setActive] = useState(0);
//     const [direction, setDirection] = useState(1);
//     const [pinPhase, setPinPhase] = useState("before");
//     const [layoutPhase, setLayoutPhase] =
//         useState("intro");

//     const reduceMotion = useReducedMotion();

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: [
//             `start ${NAV_HEIGHT}px`,
//             "end end",
//         ],
//     });

//     /*
//      * Spring sirf visual movement ke liye use hoga.
//      * Active content raw progress se change hoga, isliye delay nahi hoga.
//      */
//     const smoothScrollProgress = useSpring(
//         scrollYProgress,
//         {
//             stiffness: 100,
//             damping: 26,
//             mass: 0.5,
//         },
//     );

//     const panelOpacity = useTransform(
//         smoothScrollProgress,
//         [
//             INTRO_FRACTION * 0.82,
//             INTRO_FRACTION + 0.06,
//         ],
//         [0, 1],
//     );

//     const panelX = useTransform(
//         smoothScrollProgress,
//         [
//             INTRO_FRACTION * 0.82,
//             INTRO_FRACTION + 0.06,
//         ],
//         [40, 0],
//     );

//     const progressWidth = useTransform(
//         smoothScrollProgress,
//         [INTRO_FRACTION, 1],
//         ["0%", "100%"],
//     );

//     /*
//      * Raw scroll progress active step ke liye use ho raha hai.
//      * Isse step correct timing par change hoga.
//      */
//     /*
//   * Raw scroll sirf intro/split layout control karega.
//   */
//     useMotionValueEvent(scrollYProgress, "change", (progress) => {
//         const nextLayoutPhase =
//             progress < INTRO_FRACTION ? "intro" : "split";

//         setLayoutPhase((previousPhase) =>
//             previousPhase === nextLayoutPhase
//                 ? previousPhase
//                 : nextLayoutPhase,
//         );
//     });

//     /*
//      * Dot aur active module dono same smooth progress se control honge.
//      * Isse icon highlight aur moving dot sync mein rahenge.
//      */
//     useMotionValueEvent(
//         smoothScrollProgress,
//         "change",
//         (progress) => {
//             /*
//              * Section ke beginning par hamesha Logistics active hoga.
//              */
//             if (progress <= INTRO_FRACTION) {
//                 if (activeRef.current !== 0) {
//                     setDirection(-1);
//                     activeRef.current = 0;
//                     setActive(0);
//                 }

//                 return;
//             }

//             const normalizedProgress = Math.min(
//                 0.999999,
//                 Math.max(
//                     0,
//                     (progress - INTRO_FRACTION) /
//                     (1 - INTRO_FRACTION),
//                 ),
//             );

//             const nextActive = Math.min(
//                 MODULES_SCROLL.length - 1,
//                 Math.max(
//                     0,
//                     Math.round(
//                         normalizedProgress *
//                         (MODULES_SCROLL.length - 1),
//                     ),
//                 ),
//             );

//             if (nextActive === activeRef.current) {
//                 return;
//             }

//             setDirection(
//                 nextActive > activeRef.current ? 1 : -1,
//             );

//             activeRef.current = nextActive;
//             setActive(nextActive);
//         },
//     );

//     useLayoutEffect(() => {
//         const section = sectionRef.current;

//         if (!section) {
//             return undefined;
//         }

//         let animationFrameId = null;

//         const updatePinPhase = () => {
//             animationFrameId = null;

//             const sectionRect =
//                 section.getBoundingClientRect();

//             const viewportHeight =
//                 window.innerHeight;

//             let nextPinPhase = "pinned";

//             if (
//                 sectionRect.top > NAV_HEIGHT
//             ) {
//                 nextPinPhase = "before";
//             } else if (
//                 sectionRect.bottom <=
//                 viewportHeight
//             ) {
//                 nextPinPhase = "after";
//             }

//             setPinPhase((previousPhase) =>
//                 previousPhase === nextPinPhase
//                     ? previousPhase
//                     : nextPinPhase,
//             );
//         };

//         const requestPinPhaseUpdate = () => {
//             if (
//                 animationFrameId !== null
//             ) {
//                 return;
//             }

//             animationFrameId =
//                 window.requestAnimationFrame(
//                     updatePinPhase,
//                 );
//         };

//         updatePinPhase();

//         window.addEventListener(
//             "scroll",
//             requestPinPhaseUpdate,
//             {
//                 passive: true,
//             },
//         );

//         window.addEventListener(
//             "resize",
//             requestPinPhaseUpdate,
//         );

//         return () => {
//             window.removeEventListener(
//                 "scroll",
//                 requestPinPhaseUpdate,
//             );

//             window.removeEventListener(
//                 "resize",
//                 requestPinPhaseUpdate,
//             );

//             if (
//                 animationFrameId !== null
//             ) {
//                 window.cancelAnimationFrame(
//                     animationFrameId,
//                 );
//             }
//         };
//     }, []);

//     const jumpToModule = (index) => {
//         const section = sectionRef.current;

//         if (
//             !section ||
//             index < 0 ||
//             index >= MODULES_SCROLL.length
//         ) {
//             return;
//         }

//         const sectionRect =
//             section.getBoundingClientRect();

//         const sectionTop =
//             window.scrollY +
//             sectionRect.top -
//             NAV_HEIGHT;

//         const scrollableDistance = Math.max(
//             0,
//             sectionRect.height -
//             (window.innerHeight -
//                 NAV_HEIGHT),
//         );

//         const moduleProgress =
//             (index + 0.5) /
//             MODULES_SCROLL.length;

//         const targetProgress =
//             INTRO_FRACTION +
//             moduleProgress *
//             (1 - INTRO_FRACTION);

//         const targetScrollPosition =
//             sectionTop +
//             targetProgress *
//             scrollableDistance;

//         window.scrollTo({
//             top: targetScrollPosition,
//             behavior: reduceMotion
//                 ? "auto"
//                 : "smooth",
//         });
//     };

//     const scrollTrackHeight = `${(MODULES_SCROLL.length + 1) *
//         SCROLL_PER_STAGE_VH
//         }vh`;

//     const panelTop =
//         layoutPhase === "split"
//             ? SPLIT_PANEL_TOP
//             : NAV_HEIGHT;

//     const panelHeight = `calc(100vh - ${panelTop}px)`;

//     const panelClass =
//         pinPhase === "pinned"
//             ? "fixed left-0 right-0 z-20"
//             : pinPhase === "after"
//                 ? "absolute left-0 right-0 bottom-0 z-10"
//                 : "relative z-10";

//     const panelStyle =
//         pinPhase === "pinned"
//             ? {
//                 top: panelTop,
//                 height: panelHeight,
//             }
//             : {
//                 height: panelHeight,
//             };

//     const activeModule =
//         MODULES_SCROLL[active];

//     return (
//         <section
//             ref={sectionRef}
//             id="modules"
//             data-testid="modules-section"
//             className="
//                 relative
//                 overflow-hidden
//             "
//             style={{
//                 height: scrollTrackHeight,
//             }}
//         >
//             <div
//                 className="
//                     absolute
//                     inset-0
//                     tech-grid
//                     opacity-40
//                     pointer-events-none
//                 "
//             />

//             <div
//                 className={`
//                     ${panelClass}
//                     flex
//                     items-center
//                     overflow-hidden
                   
//                 `}
//                 style={panelStyle}
//             >
//                 <div
//                     className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-8"
//                 >
//                     <SectionHeading
//                         // eyebrow="Modules Ecosystem"
//                         title={title}
//                         description={description}
//                         align="center"
//                         testId="modules-heading"
//                     />

//                     <div
//                         className={`
//                             mt-8
//                             lg:mt-12
//                             items-center
//                             ${layoutPhase ===
//                                 "intro"
//                                 ? "flex flex-col justify-center"
//                                 : "grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 xl:gap-24"
//                             }
//                         `}
//                     >
//                         <motion.div
//                             layout
//                             className={
//                                 layoutPhase ===
//                                     "intro"
//                                     ? "w-full flex flex-col items-center justify-center"
//                                     : "flex justify-center lg:justify-start xl:pl-2"
//                             }
//                             transition={{
//                                 duration:
//                                     reduceMotion
//                                         ? 0
//                                         : 0.42,

//                                 ease: [
//                                     0.22,
//                                     1,
//                                     0.36,
//                                     1,
//                                 ],
//                             }}
//                         >
//                             <ModulesWheel
//                                 activeId={
//                                     layoutPhase ===
//                                         "split"
//                                         ? activeModule?.id
//                                         : null
//                                 }
//                                 onSelectModule={
//                                     jumpToModule
//                                 }
//                                 scrollProgress={
//                                     smoothScrollProgress
//                                 }
//                             />

//                             {layoutPhase ===
//                                 "intro" && (
//                                     <p
//                                         className="
//                                         mt-7
//                                         text-center
//                                         font-mono
//                                         text-[10px]
//                                         uppercase
//                                         tracking-[0.28em]
//                                         text-white/30
//                                     "
//                                     >
//                                         Scroll to explore
//                                         modules
//                                     </p>
//                                 )}
//                         </motion.div>

//                         <motion.div
//                             layout
//                             className={
//                                 layoutPhase ===
//                                     "intro"
//                                     ? "hidden"
//                                     : "relative min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] flex flex-col justify-center"
//                             }
//                             style={{
//                                 opacity:
//                                     layoutPhase ===
//                                         "split"
//                                         ? panelOpacity
//                                         : 0,

//                                 x: reduceMotion
//                                     ? 0
//                                     : panelX,
//                             }}
//                             transition={{
//                                 duration:
//                                     reduceMotion
//                                         ? 0
//                                         : 0.42,

//                                 ease: [
//                                     0.22,
//                                     1,
//                                     0.36,
//                                     1,
//                                 ],
//                             }}
//                         >
//                             <AnimatePresence
//                                 initial={false}
//                                 mode="popLayout"
//                                 custom={direction}
//                             >
//                                 {layoutPhase ===
//                                     "split" &&
//                                     activeModule && (
//                                         <motion.div
//                                             key={
//                                                 activeModule.id
//                                             }
//                                             custom={
//                                                 direction
//                                             }
//                                             variants={
//                                                 modulePanelVariants
//                                             }
//                                             initial={
//                                                 reduceMotion
//                                                     ? false
//                                                     : "enter"
//                                             }
//                                             animate="active"
//                                             exit={
//                                                 reduceMotion
//                                                     ? undefined
//                                                     : "exit"
//                                             }
//                                             transition={{
//                                                 duration:
//                                                     reduceMotion
//                                                         ? 0
//                                                         : STEP_ANIMATION_DURATION,

//                                                 ease: [
//                                                     0.22,
//                                                     1,
//                                                     0.36,
//                                                     1,
//                                                 ],
//                                             }}
//                                             className="w-full"
//                                         >
//                                             <ModuleImagePanel
//                                                 module={
//                                                     activeModule
//                                                 }
//                                             />
//                                         </motion.div>
//                                     )}
//                             </AnimatePresence>

//                             {layoutPhase ===
//                                 "split" && (
//                                     <>
//                                         <div
//                                             className="
//                                             mt-10
//                                             relative
//                                             h-px
//                                             rounded-full
//                                             bg-white/8
//                                             overflow-hidden
//                                             max-w-[640px]
//                                             lg:ml-auto
//                                             lg:w-full
//                                         "
//                                         >
//                                             <motion.div
//                                                 className="
//                                                 absolute
//                                                 inset-y-0
//                                                 left-0
//                                                 bg-gradient-to-r
//                                                 from-white/15
//                                                 via-white/45
//                                                 to-white/25
//                                             "
//                                                 style={{
//                                                     width: progressWidth,
//                                                 }}
//                                             />
//                                         </div>

//                                         <div
//                                             className="
//                                             mt-4
//                                             flex
//                                             items-center
//                                             justify-between
//                                             gap-2
//                                             max-w-[640px]
//                                             lg:ml-auto
//                                             lg:w-full
//                                         "
//                                         >
//                                             {MODULES_SCROLL.map(
//                                                 (
//                                                     module,
//                                                     index,
//                                                 ) => (
//                                                     <button
//                                                         key={
//                                                             module.id
//                                                         }
//                                                         type="button"
//                                                         aria-label={`Jump to ${module.label}`}
//                                                         onClick={() =>
//                                                             jumpToModule(
//                                                                 index,
//                                                             )
//                                                         }
//                                                         className={`
//                                                         flex-1
//                                                         text-center
//                                                         font-mono
//                                                         text-[9px]
//                                                         sm:text-[10px]
//                                                         uppercase
//                                                         tracking-[0.1em]
//                                                         sm:tracking-[0.14em]
//                                                         transition-colors
//                                                         duration-300
//                                                         py-1
//                                                         ${index <=
//                                                                 active
//                                                                 ? "text-white/72"
//                                                                 : "text-white/26"
//                                                             }
//                                                         hover:text-white
//                                                     `}
//                                                     >
//                                                         <span className="hidden sm:inline">
//                                                             {
//                                                                 module.label
//                                                             }
//                                                         </span>

//                                                         <span className="sm:hidden">
//                                                             {String(
//                                                                 index +
//                                                                 1,
//                                                             ).padStart(
//                                                                 2,
//                                                                 "0",
//                                                             )}
//                                                         </span>
//                                                     </button>
//                                                 ),
//                                             )}
//                                         </div>
//                                     </>
//                                 )}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Modules;



"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  BarChart3,
  Boxes,
  Factory,
  ShoppingCart,
  Truck,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const NAV_HEIGHT = 96;
const SPLIT_PANEL_TOP = 27;
const SCROLL_PER_STAGE_VH = 48;
const INTRO_FRACTION = 0.14;
const STEP_ANIMATION_DURATION = 0.34;

const CENTER_X = 50;
const CENTER_Y = 50;
const ORBIT_RADIUS = 38;
const TOP_ANGLE = 270;

const ICON_MAP = {
  boxes: Boxes,
  inventory: Boxes,

  wallet: Wallet,
  finance: Wallet,

  users: Users,
  crm: Users,

  factory: Factory,
  mfg: Factory,
  manufacturing: Factory,

  shoppingCart: ShoppingCart,
  procurement: ShoppingCart,

  barChart: BarChart3,
  analytics: BarChart3,

  truck: Truck,
  logistics: Truck,

  userCog: UserCog,
  hr: UserCog,
};

const getPreparedModules = (modules = []) => {
  return modules.map((module) => {
    const Icon =
      module.icon ||
      ICON_MAP[module.iconName] ||
      ICON_MAP[module.id] ||
      Boxes;

    return {
      ...module,
      icon: Icon,
    };
  });
};

const getScrollModules = (modules = [], scrollOrder = []) => {
  if (!Array.isArray(scrollOrder) || scrollOrder.length === 0) {
    return modules;
  }

  return scrollOrder
    .map((id) => modules.find((module) => module.id === id))
    .filter(Boolean);
};

const getScrollAngles = (modulesScroll = []) => {
  return modulesScroll.reduce((angles, module, index) => {
    const rawAngle = module?.angle ?? 0;

    if (index === 0) {
      angles.push(rawAngle);
      return angles;
    }

    let nextAngle = rawAngle;
    const previousAngle = angles[index - 1];

    while (nextAngle < previousAngle) {
      nextAngle += 360;
    }

    angles.push(nextAngle);

    return angles;
  }, []);
};

const getPolarPosition = (angle, radius) => {
  const radians = (angle * Math.PI) / 180;

  return {
    x: CENTER_X + radius * Math.cos(radians),
    y: CENTER_Y + radius * Math.sin(radians),
  };
};

const getNodePosition = (angle, radius) => {
  const position = getPolarPosition(angle, radius);

  return {
    left: `${position.x}%`,
    top: `${position.y}%`,
  };
};

const getNodeLabelClass = (angle) => {
  if (angle >= 315 || angle < 45) {
    return [
      "left-full",
      "top-1/2",
      "ml-3",
      "-translate-y-1/2",
      "text-left",
    ].join(" ");
  }

  if (angle >= 45 && angle < 135) {
    return [
      "left-1/2",
      "top-full",
      "mt-3",
      "-translate-x-1/2",
      "text-center",
    ].join(" ");
  }

  if (angle >= 135 && angle < 225) {
    return [
      "right-full",
      "top-1/2",
      "mr-3",
      "-translate-y-1/2",
      "text-right",
    ].join(" ");
  }

  return [
    "left-1/2",
    "bottom-full",
    "mb-3",
    "-translate-x-1/2",
    "text-center",
  ].join(" ");
};

const getScrollAngle = (progress, scrollAngles = []) => {
  if (!scrollAngles.length) {
    return 0;
  }

  if (progress <= INTRO_FRACTION) {
    return scrollAngles[0];
  }

  const normalizedProgress = Math.min(
    1,
    Math.max(0, (progress - INTRO_FRACTION) / (1 - INTRO_FRACTION))
  );

  const anglePosition = normalizedProgress * (scrollAngles.length - 1);

  const currentIndex = Math.floor(anglePosition);
  const fractionalProgress = anglePosition - currentIndex;

  const currentAngle = scrollAngles[currentIndex] ?? scrollAngles[0];

  const nextAngle =
    scrollAngles[Math.min(currentIndex + 1, scrollAngles.length - 1)];

  return currentAngle + (nextAngle - currentAngle) * fractionalProgress;
};

const modulePanelVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 26 : -26,
    y: 8,
    scale: 0.99,
  }),

  active: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },

  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -20 : 20,
    y: -6,
    scale: 0.99,
  }),
};

function ModuleImagePanel({ module }) {
  const Icon = module.icon;
  const imageSource = module.image;

  return (
    <div
      className="
        relative
        w-full
        max-w-[640px]
        mx-auto
        lg:mx-0
        lg:ml-auto
      "
      data-testid={`module-panel-${module.id}`}
    >
      <div
        className="
          relative
          aspect-[16/10]
          rounded-2xl
          overflow-hidden
          border
          border-white/10
          erp-surface-panel
          shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)]
        "
      >
        {imageSource && (
          <Image
            src={imageSource}
            alt={`${module.label} module`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 640px"
            priority={module.priority === true}
          />
        )}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[var(--b2b-bg)]
            via-[var(--b2b-bg)]/35
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[var(--b2b-bg)]/20
            to-transparent
          "
        />
      </div>

      <div className="mt-6 flex items-start gap-5">
        <div
          className="
            w-12
            h-12
            shrink-0
            rounded-xl
            border
            border-white/12
            erp-surface-panel
            flex
            items-center
            justify-center
            text-brand
          "
        >
          <Icon className="w-5 h-5" strokeWidth={1.4} />
        </div>

        <div>
          <div
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.24em]
              text-white/45
            "
          >
            Active module
          </div>

          <h3
            className="
              mt-1.5
              font-display
              text-2xl
              sm:text-[28px]
              font-medium
              tracking-tight
              text-white
            "
          >
            {module.label}
          </h3>

          <p
            className="
              mt-2
              text-[15px]
              leading-relaxed
              text-white/55
              max-w-md
            "
          >
            {module.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function ModulesWheel({
  modules,
  modulesScroll,
  scrollAngles,
  activeId,
  onSelectModule,
  scrollProgress,
}) {
  const reduceMotion = useReducedMotion();

  const activeAngle = useTransform(scrollProgress, (progress) =>
    getScrollAngle(progress, scrollAngles)
  );

  const indicatorRotation = useTransform(
    activeAngle,
    (angle) => angle - TOP_ANGLE
  );

  const activeScrollIndex =
    activeId !== null && activeId !== undefined
      ? modulesScroll.findIndex((module) => module.id === activeId)
      : -1;

  return (
    <div
      className="
        relative
        aspect-square
        w-full
        max-w-[min(620px,94vw)]
        mx-auto
        p-5
        sm:p-7
        overflow-visible
      "
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="
          absolute
          inset-0
          w-full
          h-full
          pointer-events-none
          overflow-visible
        "
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="modules-core-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--b2b-accent-glow)" />
            <stop offset="60%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle cx={CENTER_X} cy={CENTER_Y} r="30" fill="url(#modules-core-bg)" />

        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={ORBIT_RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeDasharray="0.5 1"
        />

        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={ORBIT_RADIUS - 7}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
        />

        {modules.map((module) => {
          const nodeCenter = getPolarPosition(module.angle, ORBIT_RADIUS);

          const scrollIndex = modulesScroll.findIndex(
            (item) => item.id === module.id
          );

          const isActive = module.id === activeId;

          const isPast =
            activeScrollIndex >= 0 &&
            scrollIndex >= 0 &&
            activeScrollIndex > scrollIndex;

          return (
            <motion.line
              key={module.id}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={nodeCenter.x}
              y2={nodeCenter.y}
              strokeLinecap="round"
              animate={{
                stroke: isActive
                  ? "rgba(255,255,255,0.42)"
                  : isPast
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(255,255,255,0.08)",

                strokeWidth: isActive ? 0.22 : 0.14,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          );
        })}
      </svg>

      {!reduceMotion && (
        <motion.div
          className="
            absolute
            inset-0
            pointer-events-none
            z-[15]
          "
          style={{
            transformOrigin: "50% 50%",
            rotate: indicatorRotation,
          }}
          aria-hidden="true"
        >
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
            style={{
              top: `${CENTER_Y - ORBIT_RADIUS}%`,
            }}
          >
            <span
              className="
                block
                w-2.5
                h-2.5
                rounded-full
                bg-brand
                shadow-brand-dot
                ring-2
                ring-white/20
              "
            />
          </div>
        </motion.div>
      )}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-10
        "
        data-testid="modules-core-node"
      >
        <div
          className="
            relative
            rounded-xl
            border
            border-white/12
            erp-surface-panel
            backdrop-blur-xl
            px-6
            py-4
            text-center
            min-w-[148px]
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-1.5
            "
          >
            <span
              className="
                w-1
                h-1
                rounded-full
                status-dot
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/50
              "
            >
              Core
            </span>
          </div>

          <div
            className="
              mt-1.5
              font-display
              text-[18px]
              font-medium
              tracking-tight
              text-white
            "
          >
            ERP NUCLEUS
          </div>

          <div
            className="
              mt-0.5
              font-mono
              text-[8.5px]
              uppercase
              tracking-[0.18em]
              text-white/35
            "
          >
            {modules.length} modules · 1 ledger
          </div>
        </div>
      </div>

      {modules.map((module) => {
        const nodePosition = getNodePosition(module.angle, ORBIT_RADIUS);
        const labelPositionClass = getNodeLabelClass(module.angle);
        const Icon = module.icon;

        const scrollIndex = modulesScroll.findIndex(
          (item) => item.id === module.id
        );

        const isActive = module.id === activeId;

        const isPast =
          activeScrollIndex >= 0 &&
          scrollIndex >= 0 &&
          activeScrollIndex > scrollIndex;

        return (
          <button
            key={module.id}
            type="button"
            onClick={() => {
              if (scrollIndex >= 0) {
                onSelectModule(scrollIndex);
              }
            }}
            className="
              absolute
              z-20
              w-[3.75rem]
              h-[3.75rem]
              sm:w-16
              sm:h-16
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              group
              focus:outline-none
              focus-visible:ring-1
              focus-visible:ring-white/40
              focus-visible:ring-offset-4
              focus-visible:ring-offset-[var(--b2b-bg)]
            "
            style={nodePosition}
            data-testid={`module-${module.id}`}
            aria-label={`${module.label}: ${module.desc}`}
            aria-current={isActive ? "true" : undefined}
          >
            <motion.span
              animate={{
                scale: isActive ? 1.1 : 1,

                borderColor: isActive
                  ? "rgba(255,255,255,0.48)"
                  : isPast
                    ? "rgba(255,255,255,0.22)"
                    : "rgba(255,255,255,0.12)",

                backgroundColor: isActive
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.02)",
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                absolute
                inset-0
                rounded-full
                border
                erp-surface-panel
                backdrop-blur-md
                flex
                items-center
                justify-center
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-white shadow-[0_0_24px_-4px_rgba(255,255,255,0.35)]"
                    : "text-white/75 group-hover:border-white/28 group-hover:text-brand"
                }
              `}
            >
              <Icon
                className="
                  w-[18px]
                  h-[18px]
                  sm:w-5
                  sm:h-5
                "
                strokeWidth={1.35}
              />
            </motion.span>

            <span
              className={`
                absolute
                pointer-events-none
                min-w-[90px]
                sm:min-w-[104px]
                max-w-[118px]
                ${labelPositionClass}
              `}
            >
              <span
                className={`
                  block
                  text-[11px]
                  sm:text-[12px]
                  font-medium
                  tracking-tight
                  leading-tight
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-white"
                      : isPast
                        ? "text-white/52"
                        : "text-white/40"
                  }
                `}
              >
                {module.label}
              </span>

              <span
                className="
                  hidden
                  sm:block
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.11em]
                  text-white/34
                  mt-1
                  leading-snug
                "
              >
                {module.desc}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export const Modules = ({
  title,
  description,
  modules = [],
  scrollOrder = [],
}) => {
  const sectionRef = useRef(null);
  const activeRef = useRef(0);

  const preparedModules = useMemo(() => {
    return getPreparedModules(modules);
  }, [modules]);

  const modulesScroll = useMemo(() => {
    return getScrollModules(preparedModules, scrollOrder);
  }, [preparedModules, scrollOrder]);

  const scrollAngles = useMemo(() => {
    return getScrollAngles(modulesScroll);
  }, [modulesScroll]);

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [pinPhase, setPinPhase] = useState("before");
  const [layoutPhase, setLayoutPhase] = useState("intro");

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    activeRef.current = 0;
    setActive(0);
    setDirection(1);
  }, [modulesScroll.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${NAV_HEIGHT}px`, "end end"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    mass: 0.5,
  });

  const panelOpacity = useTransform(
    smoothScrollProgress,
    [INTRO_FRACTION * 0.82, INTRO_FRACTION + 0.06],
    [0, 1]
  );

  const panelX = useTransform(
    smoothScrollProgress,
    [INTRO_FRACTION * 0.82, INTRO_FRACTION + 0.06],
    [40, 0]
  );

  const progressWidth = useTransform(
    smoothScrollProgress,
    [INTRO_FRACTION, 1],
    ["0%", "100%"]
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextLayoutPhase = progress < INTRO_FRACTION ? "intro" : "split";

    setLayoutPhase((previousPhase) =>
      previousPhase === nextLayoutPhase ? previousPhase : nextLayoutPhase
    );
  });

  useMotionValueEvent(smoothScrollProgress, "change", (progress) => {
    if (!modulesScroll.length) {
      return;
    }

    if (progress <= INTRO_FRACTION) {
      if (activeRef.current !== 0) {
        setDirection(-1);
        activeRef.current = 0;
        setActive(0);
      }

      return;
    }

    const normalizedProgress = Math.min(
      0.999999,
      Math.max(0, (progress - INTRO_FRACTION) / (1 - INTRO_FRACTION))
    );

    const nextActive = Math.min(
      modulesScroll.length - 1,
      Math.max(
        0,
        Math.round(normalizedProgress * (modulesScroll.length - 1))
      )
    );

    if (nextActive === activeRef.current) {
      return;
    }

    setDirection(nextActive > activeRef.current ? 1 : -1);

    activeRef.current = nextActive;
    setActive(nextActive);
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    let animationFrameId = null;

    const updatePinPhase = () => {
      animationFrameId = null;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let nextPinPhase = "pinned";

      if (sectionRect.top > NAV_HEIGHT) {
        nextPinPhase = "before";
      } else if (sectionRect.bottom <= viewportHeight) {
        nextPinPhase = "after";
      }

      setPinPhase((previousPhase) =>
        previousPhase === nextPinPhase ? previousPhase : nextPinPhase
      );
    };

    const requestPinPhaseUpdate = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updatePinPhase);
    };

    updatePinPhase();

    window.addEventListener("scroll", requestPinPhaseUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestPinPhaseUpdate);

    return () => {
      window.removeEventListener("scroll", requestPinPhaseUpdate);
      window.removeEventListener("resize", requestPinPhaseUpdate);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const jumpToModule = (index) => {
    const section = sectionRef.current;

    if (!section || index < 0 || index >= modulesScroll.length) {
      return;
    }

    const sectionRect = section.getBoundingClientRect();

    const sectionTop = window.scrollY + sectionRect.top - NAV_HEIGHT;

    const scrollableDistance = Math.max(
      0,
      sectionRect.height - (window.innerHeight - NAV_HEIGHT)
    );

    const moduleProgress = (index + 0.5) / modulesScroll.length;

    const targetProgress =
      INTRO_FRACTION + moduleProgress * (1 - INTRO_FRACTION);

    const targetScrollPosition =
      sectionTop + targetProgress * scrollableDistance;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  if (!preparedModules.length || !modulesScroll.length) {
    return null;
  }

  const scrollTrackHeight = `${
    (modulesScroll.length + 1) * SCROLL_PER_STAGE_VH
  }vh`;

  const panelTop = layoutPhase === "split" ? SPLIT_PANEL_TOP : NAV_HEIGHT;

  const panelHeight = `calc(100vh - ${panelTop}px)`;

  const panelClass =
    pinPhase === "pinned"
      ? "fixed left-0 right-0 z-20"
      : pinPhase === "after"
        ? "absolute left-0 right-0 bottom-0 z-10"
        : "relative z-10";

  const panelStyle =
    pinPhase === "pinned"
      ? {
          top: panelTop,
          height: panelHeight,
        }
      : {
          height: panelHeight,
        };

  const activeModule = modulesScroll[active];

  return (
    <section
      ref={sectionRef}
      id="modules"
      data-testid="modules-section"
      className="
        relative
        overflow-hidden
      "
      style={{
        height: scrollTrackHeight,
      }}
    >
      <div
        className="
          absolute
          inset-0
          tech-grid
          opacity-40
          pointer-events-none
        "
      />

      <div
        className={`
          ${panelClass}
          flex
          items-center
          overflow-hidden
        `}
        style={panelStyle}
      >
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-8">
          <SectionHeading
            title={title}
            description={description}
            align="center"
            testId="modules-heading"
          />

          <div
            className={`
              mt-8
              lg:mt-12
              items-center
              ${
                layoutPhase === "intro"
                  ? "flex flex-col justify-center"
                  : "grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 xl:gap-24"
              }
            `}
          >
            <motion.div
              layout
              className={
                layoutPhase === "intro"
                  ? "w-full flex flex-col items-center justify-center"
                  : "flex justify-center lg:justify-start xl:pl-2"
              }
              transition={{
                duration: reduceMotion ? 0 : 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ModulesWheel
                modules={preparedModules}
                modulesScroll={modulesScroll}
                scrollAngles={scrollAngles}
                activeId={layoutPhase === "split" ? activeModule?.id : null}
                onSelectModule={jumpToModule}
                scrollProgress={smoothScrollProgress}
              />

              {layoutPhase === "intro" && (
                <p
                  className="
                    mt-7
                    text-center
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.28em]
                    text-white/30
                  "
                >
                  Scroll to explore modules
                </p>
              )}
            </motion.div>

            <motion.div
              layout
              className={
                layoutPhase === "intro"
                  ? "hidden"
                  : "relative min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] flex flex-col justify-center"
              }
              style={{
                opacity: layoutPhase === "split" ? panelOpacity : 0,
                x: reduceMotion ? 0 : panelX,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AnimatePresence
                initial={false}
                mode="popLayout"
                custom={direction}
              >
                {layoutPhase === "split" && activeModule && (
                  <motion.div
                    key={activeModule.id}
                    custom={direction}
                    variants={modulePanelVariants}
                    initial={reduceMotion ? false : "enter"}
                    animate="active"
                    exit={reduceMotion ? undefined : "exit"}
                    transition={{
                      duration: reduceMotion ? 0 : STEP_ANIMATION_DURATION,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full"
                  >
                    <ModuleImagePanel module={activeModule} />
                  </motion.div>
                )}
              </AnimatePresence>

              {layoutPhase === "split" && (
                <>
                  <div
                    className="
                      mt-10
                      relative
                      h-px
                      rounded-full
                      bg-white/8
                      overflow-hidden
                      max-w-[640px]
                      lg:ml-auto
                      lg:w-full
                    "
                  >
                    <motion.div
                      className="
                        absolute
                        inset-y-0
                        left-0
                        bg-gradient-to-r
                        from-white/15
                        via-white/45
                        to-white/25
                      "
                      style={{
                        width: progressWidth,
                      }}
                    />
                  </div>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      gap-2
                      max-w-[640px]
                      lg:ml-auto
                      lg:w-full
                    "
                  >
                    {modulesScroll.map((module, index) => (
                      <button
                        key={module.id}
                        type="button"
                        aria-label={`Jump to ${module.label}`}
                        onClick={() => jumpToModule(index)}
                        className={`
                          flex-1
                          text-center
                          font-mono
                          text-[9px]
                          sm:text-[10px]
                          uppercase
                          tracking-[0.1em]
                          sm:tracking-[0.14em]
                          transition-colors
                          duration-300
                          py-1
                          ${
                            index <= active
                              ? "text-white/72"
                              : "text-white/26"
                          }
                          hover:text-white
                        `}
                      >
                        <span className="hidden sm:inline">
                          {module.label}
                        </span>

                        <span className="sm:hidden">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;