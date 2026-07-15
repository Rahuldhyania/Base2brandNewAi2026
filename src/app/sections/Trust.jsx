// 'use client';

// import React from "react";
// import { motion } from "framer-motion";
// import { InfiniteSlider } from "../components/visual/InfiniteSlider";
// import {
//   ShoppingBag,
//   Store,
//   HeartPulse,
//   GraduationCap,
//   Cloud,
//   Building2,
//   Factory,
//   BriefcaseBusiness,
//   ShoppingCart,
//   UsersRound,
//   TrendingUp,
//   Smartphone,
// } from "lucide-react";
// import Marquee from "react-fast-marquee";

// const PARTNERS = [
//   {
//     icon: ShoppingBag,
//     text: "D2C Brands",
//   },
//   {
//     icon: Store,
//     text: "Shopify Stores",
//   },
//   {
//     icon: HeartPulse,
//     text: "Healthcare Businesses",
//   },
//   {
//     icon: GraduationCap,
//     text: "Education Platforms",
//   },
//   {
//     icon: Cloud,
//     text: "SaaS Companies",
//   },
//   {
//     icon: Building2,
//     text: "Real Estate Brands",
//   },
//   {
//     icon: Factory,
//     text: "Manufacturing Firms",
//   },
//   {
//     icon: BriefcaseBusiness,
//     text: "Professional Services",
//   },
//   {
//     icon: ShoppingCart,
//     text: "Retail & Ecommerce",
//   },
//   {
//     icon: UsersRound,
//     text: "Enterprise Teams",
//   },
//   {
//     icon: TrendingUp,
//     text: "Lead Generation Brands",
//   },
//   {
//     icon: Smartphone,
//     text: "App-Based Businesses",
//   },
// ];

// function Pill({ item }) {
//   const Icon = item.icon;

//   return (
//     <div
//       className="mx-3 px-3 xl:px-5 py-2 xl:py-3 rounded-full border border-line text-mute font-mono-display text-xs sm:text-sm uppercase tracking-[0.18em] whitespace-nowrap hover:text-white hover:border-line-strong transition flex items-center gap-2"
//       data-testid={`trust-pill-${item.text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
//     >
//       <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-brand shrink-0" strokeWidth={1.8} />
//       <span>{item.text}</span>
//     </div>
//   );
// }

// export function Trust() {
//   return (
//     <section
//       id="trust"
//       data-testid="trust-section"
//       className="relative py-12 border-y border-line"
//     >
//       <div className="mx-auto max-w-7xl px-5 sm:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="grid md:grid-cols-[1fr_2fr] gap-5 md:gap-16 items-center mb-8"
//         >
//           <div>
//             <div className="text-xs font-mono-display uppercase tracking-[0.25em] text-mute">
//               <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand mr-2 align-middle shadow-[0_0_10px_#ff6a00]" />
//               Trusted across sectors
//             </div>

//             <h2 className="mt-4 font-display text-white text-2xl sm:text-3xl tracking-tight">
//               Confidential partners
//               <span className="block text-mute">Public outcomes</span>
//             </h2>
//           </div>

//           <p className="text-mute text-base sm:text-lg max-w-2xl">
//             We work with ambitious startups, growing D2C brands, enterprises,
//             healthcare companies, education businesses, SaaS platforms, and
//             service-led organizations.
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#02030a] to-transparent z-10" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#02030a] to-transparent z-10" />

//           <Marquee gap={16} speed={55} speedOnHover={120}>
//             {PARTNERS.map((item) => (
//               <Pill key={item.text} item={item} />
//             ))}
//           </Marquee>

//           <div className="h-4" />

//           <Marquee gap={16} speed={70} speedOnHover={140} direction="rtl">
//             {[...PARTNERS].reverse().map((item) => (
//               <Pill key={`r-${item.text}`} item={item} />
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const TrustSection = () => {
  return (
    <div className='max-w-[1800px] ms-auto'>
      <div className='grid grid-cols-[1fr_2fr] gap-8 items-center pt-12 '>
        <div className="border-r-[3px] border-white/60">
          <div>
            <div className="text-2xl font-mono-display uppercase tracking-[0.25em] text-mute">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand mr-2 align-middle shadow-[0_0_10px_#ff6a00]" />
              VOICES FROM THE BRIDGE
            </div>

            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.10] uppercase">
              Confidential partners
              <span className="block text-mute">Public outcomes</span>
            </h2>
          </div>
        </div>
        <div className="relative ">
          <Marquee gap={0}>
            <Image
              src="/images/home_marquee_imagelistv2.png"
              alt=""
              className="w-auto h-full"
              width={1000}
              height={500}
            />
            <Image
              src="/images/home_marquee_imagelistv2.png"
              alt=""
              className="w-auto h-full"
              width={1000}
              height={500}
            />
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default TrustSection