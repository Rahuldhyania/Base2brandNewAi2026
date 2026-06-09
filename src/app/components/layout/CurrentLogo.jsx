"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const logosList = [
  {
    slug: "/",
    logourl: "/images/homeLogo.avif",
  },
  {
    slug: "/ai-automation",
    logourl: "/images/aiLogo.png",
  },
];
export function CurrentLogo() {
  const currentPath = usePathname();

  const currentLogo = logosList.find((logo) => logo.slug === currentPath);
  return (
    <div>
      {currentLogo ? (
        <Image src={currentLogo.logourl} alt="Logo" width={200} height={100} />
      ) : (
        <Image
          src="/images/homeLogo.avif"
          alt="Logo"
          width={200}
          height={100}
        />
      )}
    </div>
  );
}
