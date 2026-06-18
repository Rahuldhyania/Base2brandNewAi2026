"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DEFAULT_LOGO = "/images/homelogo.png";

const logosList = [
  { slug: "/", logourl: DEFAULT_LOGO },
  { slug: "/ai-automation", logourl: "/images/aiLogo.png" },
  { slug: "/apple-ecosystem", logourl: "/images/applelogo.png" },
  { slug: "/enterprise", logourl: "/images/applelogo.png" },
  { slug: "/growth-visibility", logourl: "/images/growth-visibility.png" },
  { slug: "/social-media-services", logourl: "/images/socialmedialogo.png" },
  { slug: "/emerging-technologies", logourl: "/images/emerging-technologiesLOGO.png" },
  { slug: "/operations-excellence", logourl: "/images/aiLogo.png" },
];

export function CurrentLogo({ className = "max-w-46" }) {
  const currentPath = usePathname();
  const matched = logosList.find((logo) => logo.slug === currentPath);
  const [src, setSrc] = useState(matched?.logourl ?? DEFAULT_LOGO);

  useEffect(() => {
    setSrc(matched?.logourl ?? DEFAULT_LOGO);
  }, [matched?.logourl]);

  useEffect(() => {
    if (currentPath !== "/social-media-services") return;

    const handler = (e) => {
      if (e.detail.logoUrl) setSrc(e.detail.logoUrl);
    };
    window.addEventListener("serviceActive", handler);
    return () => window.removeEventListener("serviceActive", handler);
  }, [currentPath]);

  return (
    <Image
      src={src}
      alt="Base2Brand"
      width={200}
      height={100}
      className={`${className} transition-all duration-500`}
      onError={() => setSrc(matched?.logourl ?? DEFAULT_LOGO)}
    />
  );
}