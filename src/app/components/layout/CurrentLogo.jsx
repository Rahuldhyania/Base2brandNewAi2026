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
  { slug: "/enterprise-systems", logourl: "/images/enterprise-logonew.png" },
  { slug: "/e-commerce-solution", logourl: "/images/shopify-page.png" },
  { slug: "/industries/health-care", logourl: "/images/health-carelogo.png" },
  { slug: "/industries/manufacturing", logourl: "/images/manufacturing-logo.png" },
  { slug: "/industries/logistics", logourl: "/images/logistics-logo.png" },
  { slug: "/industries/education", logourl: "/images/education-logo.png" },
  { slug: "/industries/retail", logourl: "/images/retail-logo.png" },
  { slug: "/industries/automotive", logourl: "/images/automotive-logo.png" },
  { slug: "/industries/government", logourl: "/images/governments-logo233.png" },
  { slug: "/industries/ngo", logourl: "/images/ngos-logo.png" },
];

export function CurrentLogo({ className = "max-w-46" }) {
  const currentPath = usePathname();
  console.log('currentPath currentlogo',currentPath);
  
  const matched = logosList.find((logo) => logo.slug === currentPath);
  console.log('matched currentlogo',matched);
  const [src, setSrc] = useState(matched?.logourl ?? DEFAULT_LOGO);

  useEffect(() => {
    setSrc(matched?.logourl ?? DEFAULT_LOGO);
  }, [matched?.logourl]);
  console.log('logourlsrc', src);
  
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