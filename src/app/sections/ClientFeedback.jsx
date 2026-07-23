"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const TESTIMONIALS = [
  {
    name: "BROOKLYNSTOKELY",
    role: "E-COMMERCE STORE OWNER",
    company: null,
    quote:
      "So I got my Shopify website built on Base2Brand. I'm, I'm glad to have contacted these guys as they helped me in identifying and understanding different aspects of, e-commerce, which I was totally unaware of. Now, I'm, getting a good amount of conversions through the website, which they designed and developed for me. So, I totally recommend everyone to get their e-commerce store designed by these guys. Kudos to their team.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    video: "https://res.cloudinary.com/protected/video/upload/v1784706041/Base2brandNew2026/Video-two_1_gampmt.mp4",
  },
  {
    name: "Jahn Brazil",
    role: "CEO & Owner",
    company: null,
    quote:
      "Congratulations on 6 years in business. On behalf of Mara Lang, Nikki and I and everybody else, we want to wish you guys a very happy 6 years of being in business. Special thanks to Arti, Rakesh, Sara, Rahul, and Sam. Thank you guys.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    video: "https://res.cloudinary.com/protected/video/upload/v1784706418/Base2brandNew2026/VID-20260721-WA0011_2_gg5rsu.mp4",
  },
  {
    name: "Ronald Martin",
    role: "Founder & Operator",
    company: null,
    quote:
      "We have worked with Base2Brand for about 6 months now, from everything from social media to SEO. They've been unbelievably helpful, and also extremely responsive, which has been a huge priority for us, because obviously. Sometimes you need something done on very, very short notice, and they've always been able to provide, so we're very happy to recommend them.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    video: "https://res.cloudinary.com/protected/video/upload/v1784706626/Base2brandNew2026/Video_one_1_eyzvxq.mp4",
  },
  {
    name: "Deepak Dhingra",
    role: "Managing Director & CEO",
    company: null,
    quote:
      "Working with Base2Brand was a really great experience from start to finish. The communication was on point, the team was really communicative and able to deliver an exceptional branded sales orientated website.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    video: "https://res.cloudinary.com/protected/video/upload/v1784706867/Base2brandNew2026/video-three_1_1_zvurvo.mp4",
  },
  {
    name: "Seda Hos Bas",
    role: "Head of Marketing & Sales",
    company: "Coconut Stock · United States",
    quote:
      "The team approached every project with a clear strategy and attention to detail. From website improvements to marketing execution, Base2Brand consistently delivered solutions that supported stronger engagement.",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    video: "/videos/client_YoYo1.mp4",
  },
  {
    name: "Kevin Gada",
    role: "Founder & CEO",
    company: "SaaS Integration · Australia",
    quote:
      "Base2Brand understood the complexity of our business and translated it into a clear digital experience. Their work across branding, website development and lead generation created a more scalable platform.",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    video: "/videos/client_YoYo1.mp4",
  },
  {
    name: "Paul Singh",
    role: "Managing Director",
    company: "Scanfluence Software Inc · United States",
    quote:
      "Working with Base2Brand felt like having an extension of our own team. They aligned our website, messaging and digital campaigns into one cohesive strategy that improved visibility and lead quality.",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    video: "/videos/client_YoYo1.mp4",
  },
];

function QuoteFace({ card, light = true }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col px-6 pt-6 pb-3 sm:px-7 sm:pt-7 sm:pb-3.5 ${
        light ? "bg-white" : "bg-transparent"
      }`}
    >
      <Image
        src={card.avatar}
        alt={card.name}
        width={52}
        height={52}
        className="h-[52px] w-[52px] shrink-0 rounded-full object-cover border border-black/10"
      />

      <blockquote className="mt-5 flex-1">
        <p
          className={`text-sm sm:text-[15px] leading-relaxed ${
            light ? "text-[#1c1c1c]" : "text-white"
          }`}
        >
          “{card.quote}”
        </p>
      </blockquote>

      <div className="mt-auto pt-5">
        <p
          className={`text-base sm:text-lg font-display font-semibold ${
            light ? "text-[#0b0b0b]" : "text-white"
          }`}
        >
          {card.name}
        </p>

        <p
          className={`mt-1 text-xs leading-snug ${
            light ? "text-black/50" : "text-white/70"
          }`}
        >
          {card.role} · {card.company}
        </p>
      </div>
    </div>
  );
}

function FeedbackCard({ card, isActive, isInView, onVideoEnd }) {
  const videoRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const hasVideo = Boolean(card.video);

  const showVideo = isActive && isInView && hasVideo && !hovering;

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !hasVideo) return;

    if (!isInView || !isActive) {
      video.pause();

      if (!isActive) {
        video.currentTime = 0;
      }

      return;
    }

    if (hovering) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [isActive, isInView, hovering, hasVideo]);

  useEffect(() => {
    if (!isActive) {
      setHovering(false);
    }
  }, [isActive]);

  const handleEnded = () => {
    if (!isInView) return;

    setHovering(false);

    const video = videoRef.current;

    if (video) {
      video.currentTime = 0;
    }

    onVideoEnd?.();
  };

  return (
    <div
      onMouseEnter={() => {
        if (isActive && hasVideo) {
          setHovering(true);
        }
      }}
      onMouseLeave={() => setHovering(false)}
      className={`relative h-full w-full overflow-hidden rounded-[22px] transition-shadow duration-300 ${
        isActive && showVideo
          ? "shadow-[0_0_0_1px_rgba(80,140,255,0.45),0_0_28px_rgba(80,140,255,0.2)]"
          : "bg-white"
      }`}
      data-testid={`client-feedback-card-${card.name
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-400 ${
          showVideo ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <QuoteFace card={card} light />
      </div>

      {hasVideo && (
        <div
          className={`absolute inset-0 transition-opacity duration-400 ${
            showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <video
            ref={videoRef}
            src={card.video}
            playsInline
            preload="auto"
            controls={false}
            controlsList="nodownload noplaybackrate nofullscreen"
            disablePictureInPicture
            onEnded={handleEnded}
            className="h-full w-full object-cover"
            data-testid="client-feedback-video"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 px-6 pt-6 pb-3 sm:px-7 sm:pb-3.5">
            <p className="text-lg font-display font-semibold text-white">
              {card.name}
            </p>

            <p className="mt-1 text-xs text-white/70 leading-snug">
              {card.role} · {card.company}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const INITIAL_SLIDE = Math.max(
  0,
  TESTIMONIALS.findIndex((item) => item.video),
);

const ClientFeedback = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const [scrollbarEl, setScrollbarEl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(INITIAL_SLIDE);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleVideoEnd = () => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="voices"
      data-testid="client-feedback-section"
      className="relative w-full overflow-x-clip py-16 sm:py-20 bg-[#02030a]"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-xs sm:text-sm font-mono-display text-orange-brand uppercase tracking-[0.25em]">
            VOICES FROM THE BRIDGE
          </div>

          <h2
            className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.10] uppercase tracking-tight"
            data-testid="client-feedback-heading"
          >
            Real <span className="text-orange-brand">outcomes</span>, from
            businesses{" "}
            <span className="text-orange-brand">who scaled with</span> us.
          </h2>
        </div>
      </div>

      <div className="relative z-10 mt-10 xl:mt-14 client-feedback-swiper w-full px-5 sm:px-8">
        {scrollbarEl && (
          <Swiper
            modules={[Scrollbar]}
            initialSlide={INITIAL_SLIDE}
            centeredSlides
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            spaceBetween={24}
            slidesPerView="auto"
            grabCursor
            loop
            speed={600}
            watchSlidesProgress
            scrollbar={{
              el: scrollbarEl,
              draggable: true,
              hide: false,
            }}
            className="client-feedback-swiper-track !overflow-visible"
          >
            {TESTIMONIALS.map((card, index) => (
              <SwiperSlide key={card.name} className="client-feedback-slide">
                <FeedbackCard
                  card={card}
                  isActive={index === activeIndex}
                  isInView={isInView}
                  onVideoEnd={handleVideoEnd}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="mx-auto max-w-[1440px]">
          <div
            ref={setScrollbarEl}
            className="mt-10 sm:mt-12 h-[2px] w-full bg-white/20"
          />
        </div>
      </div>

      <style>{`
        .client-feedback-swiper .swiper-scrollbar-drag {
          height: 100%;
          background: #fff;
          border-radius: 0;
        }

        .client-feedback-swiper {
          overflow: visible;
        }

        .client-feedback-swiper-track {
          overflow: visible !important;
          padding: 18px 0;
        }

        .client-feedback-swiper-track .swiper-wrapper {
          align-items: center;
        }

        .client-feedback-swiper-track .client-feedback-slide {
          width: 300px !important;
          height: 420px !important;
          transition: transform 0.4s ease;
          transform: scale(1);
        }

        .client-feedback-swiper-track
          .client-feedback-slide.swiper-slide-active {
          transform: scale(1.08);
          z-index: 2;
        }

        @media (min-width: 640px) {
          .client-feedback-swiper-track .client-feedback-slide {
            width: 340px !important;
            height: 460px !important;
          }
        }

        @media (min-width: 1024px) {
          .client-feedback-swiper-track .client-feedback-slide {
            width: 380px !important;
            height: 480px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientFeedback;