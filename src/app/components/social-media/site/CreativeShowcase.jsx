// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Play, ArrowUpRight } from "lucide-react";
// import Marquee from "react-fast-marquee";
// import Image from "next/image";

// const SHOWCASE = [
//   {
//     title: "Video Ads",
//     tag: "Performance Creative",
//     desc: "Short-form and long-form video ads built for hooks, retention and action.",
//     image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
//   },
//   {
//     title: "Social Media Creatives",
//     tag: "Static & Reels",
//     desc: "Platform-native creatives for Instagram, Facebook, LinkedIn and YouTube campaigns.",
//     image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
//   },
//   {
//     title: "Motion Graphics",
//     tag: "Explainer & Motion",
//     desc: "Animated visuals that simplify complex offers and improve ad engagement.",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
//   },
//   {
//     title: "Landing Page Experiences",
//     tag: "Conversion",
//     desc: "Conversion-focused landing pages designed around campaign intent and buyer action.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//   },
//   {
//     title: "UGC Ads",
//     tag: "Creator Content",
//     desc: "Human-led content built to create trust, relatability and faster audience connection.",
//     image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80",
//   },
//   {
//     title: "Brand Films",
//     tag: "Editorial",
//     desc: "Premium storytelling for launches, campaigns, positioning and trust-building.",
//     image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
//   },
// ];

// function FlipCard({ data, index }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     /* Hover tracked on the outer wrapper — it never rotates,
//        so the hover state stays alive throughout the full flip animation */
//     <div
//       className="relative h-[420px] sm:h-[480px]"
//       style={{ perspective: "1200px" }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <motion.div
//         className="relative w-full h-full"
//         animate={{ rotateY: hovered ? 180 : 0 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Front face */}
//         <div
//           className="absolute inset-0 rounded-2xl overflow-hidden border border-b2b-border bg-b2b-surface"
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           <img
//             src={data.image}
//             alt={data.title}
//             className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity"
//             style={{ opacity: hovered ? 0.9 : 0.8 }}
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-b2b-bg via-b2b-bg/30 to-transparent" />
//           <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />

//           <div className="absolute inset-0 p-6 lg:p-7 flex flex-col justify-between">
//             <div className="flex items-center justify-between">
//               <span
//                 className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold border bg-b2b-bg/60 backdrop-blur-md"
//                 style={{
//                   color: "var(--b2b-primary)",
//                   borderColor: "var(--b2b-glow-ring)",
//                 }}
//               >
//                 <span
//                   className="w-1 h-1 rounded-full"
//                   style={{ backgroundColor: "var(--b2b-primary)" }}
//                 />
//                 {data.tag}
//               </span>
//               <span className="text-[10px] uppercase tracking-[0.2em] text-b2b-muted font-semibold">
//                 {String(index + 1).padStart(2, "0")} / 06
//               </span>
//             </div>

//             <div>
//               <h3 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
//                 {data.title}
//               </h3>
//               <div className="mt-3 flex items-center gap-2 text-b2b-text-2 text-xs">
//                 <Play
//                   className="w-3.5 h-3.5"
//                   style={{ color: "var(--b2b-primary)" }}
//                   fill="currentColor"
//                 />
//                 Hover to preview
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Back face */}
//         <div
//           className="absolute inset-0 rounded-2xl overflow-hidden bg-b2b-surface flex flex-col items-center justify-center p-8 text-center"
//           style={{
//             backfaceVisibility: "hidden",
//             transform: "rotateY(180deg)",
//             border: "1px solid var(--b2b-glow-ring)",
//             boxShadow: "0 0 50px rgba(var(--b2b-primary-rgb), 0.15)",
//           }}
//         >
//           <div
//             className="absolute inset-0 opacity-40"
//             style={{
//               background:
//                 "radial-gradient(ellipse at center, rgba(var(--b2b-primary-rgb), 0.2), transparent 70%)",
//             }}
//           />
//           <div className="relative">
//             <span
//               className="inline-block uppercase tracking-[0.2em] text-[10px] font-bold mb-3"
//               style={{ color: "var(--b2b-primary)" }}
//             >
//               Creative Format
//             </span>
//             <h3 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
//               {data.title}
//             </h3>
//             <p className="mt-4 text-sm text-b2b-text-2 max-w-[260px] mx-auto">
//               {data.desc}
//             </p>
//             <a
//               href="#"
//               className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
//               style={{ color: "var(--b2b-primary)" }}
//             >
//               View sample <ArrowUpRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function CreativeShowcase() {
//   const [speed, setSpeed] = useState(40);
//   return (
//     <section
//       id="showcase"
//       className="relative py-12 border-t border-b2b-border"
//     >
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//         <div className="text-center">
//           <label className="label-mono">Creative Showcase</label>
//           <h2 className="mt-2 font-display text-2xl mx-auto sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
//             Creative engineered to convert.
//           </h2>
//           <p className="mt-2 text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
//             A modern performance studio producing ad creatives, brand films, videos, social assets and landing page experiences built for measurable campaign results.
//           </p>
//         </div>

//         {/* <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {SHOWCASE.map((card, i) => (
//             <FlipCard key={card.title} data={card} index={i} />
//           ))}
//         </div> */}

//         <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           <div>
//             <div
//               onMouseEnter={() => setSpeed(200)}
//               onMouseLeave={() => setSpeed(40)}
//             >
//               <Marquee
//                 speed={speed}
//                 pauseOnHover={false}
//                 gradient={false}
//               >
//                 <Image
//                   src={'/images/Group 1707480466 (1).webp'}
//                   alt=""
//                   width={4000}
//                   height={500}
//                   className=""
//                 />
//               </Marquee>
//             </div>
//             <div className="pt-8">
//               <h3 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
//                 Social Media Creatives
//               </h3>
//               <div className="mt-3 flex items-center gap-2 text-b2b-text-2 text-xs">
//                 <Play
//                   className="w-3.5 h-3.5"
//                   style={{ color: "var(--b2b-primary)" }}
//                   fill="currentColor"
//                 />
//                 Hover to preview
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const cardsData = [
  {
    title: 'Social Media Creatives',
    imageUrl: '/images/Group 1707480466 (1).webp'
  },
  {
    title: 'Social Media Creatives',
    imageUrl: '/images/Group 1707480466 (1).webp'
  },
  {
    title: 'Social Media Creatives',
    imageUrl: '/images/Group 1707480466 (1).webp'
  },
  {
    title: 'Social Media Creatives',
    imageUrl: '/images/Group 1707480466 (1).webp'
  },

]


function SmoothMarquee({
  children,
  baseSpeed = 40,
  hoverSpeed = 1000,
  className = "",
}) {
  const trackRef = useRef(null);
  const firstRef = useRef(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(baseSpeed);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const step = (now) => {
      if (lastTimeRef.current == null) lastTimeRef.current = now;
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const width = firstRef.current?.offsetWidth || 0;

      offsetRef.current -= speedRef.current * delta;

      if (width > 0 && offsetRef.current <= -width) {
        offsetRef.current += width;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => (speedRef.current = hoverSpeed)}
      onMouseLeave={() => (speedRef.current = baseSpeed)}
    >
      <div ref={trackRef} className="flex w-max">
        <div ref={firstRef} className="flex shrink-0">
          {children}
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}


export default function CreativeShowcase() {
  return (
    <section
      id="showcase"
      className="relative py-12 border-t border-b2b-border bg-black"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <label className="label-mono">Creative Showcase</label>
          <h2 className="mt-2 font-display text-2xl mx-auto sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
            Creative engineered to convert.
          </h2>
          <p className="mt-2 text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
            A modern performance studio producing ad creatives, brand films, videos, social assets and landing page experiences built for measurable campaign results.
          </p>
        </div>

        {/* <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOWCASE.map((card, i) => (
            <FlipCard key={card.title} data={card} index={i} />
          ))}
        </div> */}

        <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
          {
            cardsData.map((card, i) => (
              <div key={i} className="bg-[url(/images/black_white_bg.png)] bg-center bg-cover rounded-2xl">
                <div className='flex items-center pt-14'>
                  <SmoothMarquee baseSpeed={0} hoverSpeed={200} className="max-h-[313px]">
                    <Image
                      src={card.imageUrl}
                      alt=""
                      width={4000}
                      height={500}
                      className=""
                    />
                  </SmoothMarquee>
                </div>

                <div className="pt-6 pb-8 px-6">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-b2b-text-2 text-xs">
                    <Play
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--b2b-primary)" }}
                      fill="currentColor"
                    />
                    Hover to preview
                  </div>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </section>
  );
}