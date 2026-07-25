"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const DEFAULT_IMAGES = [];

export default function AppScreensMarquee({ images = DEFAULT_IMAGES }) {
  if (!images.length) return null;

  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <Marquee gradient={false} speed={40} pauseOnHover>
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative mx-1 md:mx-1.5 h-[380px] w-[180px] sm:h-[460px] sm:w-[218px] md:h-[570px] md:w-[270px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="150px"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
