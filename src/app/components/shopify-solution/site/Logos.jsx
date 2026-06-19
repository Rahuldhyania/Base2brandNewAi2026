// Brand logo SVGs (monochrome white). Used in TopNav, Hero orbit, Ecosystem, Footer.
// Each component accepts size + className props.
import { cn } from "@/lib/utils";

const base = "text-white";

export const ShopifyLogo = ({ size = 56, className = "" }) => (
  // Iconic Shopify shopping bag with S
  <svg
    viewBox="0 0 110 124"
    width={size}
    height={size}
    fill="currentColor"
    className={cn(base, className)}
    aria-label="Shopify"
  >
    <path d="M74.7 14.8s-1.4.4-3.7 1.1c-.4-1.3-1-2.8-1.7-4.4-2.4-4.6-6-7.1-10.4-7.1-.3 0-.6 0-.9.1-.1-.2-.3-.3-.4-.5-1.8-1.9-4.1-2.8-6.9-2.7-5.4.2-10.7 4.1-15 11C32.6 16.1 30.3 22 29.6 26.5c-6.5 2-11 3.4-11.1 3.5-3.3 1-3.4 1.1-3.8 4.2C14.3 36.6 5.4 105.4 5.4 105.4l74.5 12.9V14.5c-.4 0-.8.1-1.2.2-.3.1-2 .1-4 .1zM62.7 18c-3.5 1.1-7.3 2.2-11.1 3.4 1.1-4.1 3.1-8.3 5.6-11 .9-1 2.2-2.1 3.7-2.7 1.4 2.9 1.8 7.2 1.8 10.3zm-6.4-12.5c1.2 0 2.2.3 3.1.8-1.4.7-2.7 1.8-3.9 3.2-3.2 3.5-5.7 8.9-6.7 14.1-3.1 1-6.2 1.9-9 2.8 1.8-8.6 8.9-20.7 16.5-20.9zM48.6 70.9c.7 4.7 13.6 5.7 14.3 17.2.6 9-4.8 15.2-12.5 15.7-9.3.5-14.3-5-14.3-5L37.9 92s5.1 3.9 9.2 3.6c2.7-.2 3.6-2.4 3.5-3.9-.9-6.1-11.5-5.7-12.1-16.3-.5-8.8 5.3-17.7 18.1-18.5 4.9-.3 7.4 1 7.4 1l-2.9 11s-3.3-1.5-7.1-1.2c-5.6.3-5.6 3.9-5.4 5.2zm17.4-53.3c0-2.8-.3-6.7-1.7-10 4.4.8 6.5 5.8 7.5 8.8-1.7.5-3.7 1.1-5.8 1.2z"/>
  </svg>
);

export const ShopifyPlusLogo = ({ size = 56, className = "" }) => (
  // Shopify bag + small Plus
  <svg viewBox="0 0 140 124" width={size} height={size} className={cn(base, className)} aria-label="Shopify Plus">
    <g fill="currentColor">
      <path d="M74.7 14.8s-1.4.4-3.7 1.1c-.4-1.3-1-2.8-1.7-4.4-2.4-4.6-6-7.1-10.4-7.1-.3 0-.6 0-.9.1-.1-.2-.3-.3-.4-.5-1.8-1.9-4.1-2.8-6.9-2.7-5.4.2-10.7 4.1-15 11C32.6 16.1 30.3 22 29.6 26.5c-6.5 2-11 3.4-11.1 3.5-3.3 1-3.4 1.1-3.8 4.2C14.3 36.6 5.4 105.4 5.4 105.4l74.5 12.9V14.5c-.4 0-.8.1-1.2.2-.3.1-2 .1-4 .1zm-12 3.2c-3.5 1.1-7.3 2.2-11.1 3.4 1.1-4.1 3.1-8.3 5.6-11 .9-1 2.2-2.1 3.7-2.7 1.4 2.9 1.8 7.2 1.8 10.3zm-6.4-12.5c1.2 0 2.2.3 3.1.8-1.4.7-2.7 1.8-3.9 3.2-3.2 3.5-5.7 8.9-6.7 14.1-3.1 1-6.2 1.9-9 2.8 1.8-8.6 8.9-20.7 16.5-20.9zM48.6 70.9c.7 4.7 13.6 5.7 14.3 17.2.6 9-4.8 15.2-12.5 15.7-9.3.5-14.3-5-14.3-5L37.9 92s5.1 3.9 9.2 3.6c2.7-.2 3.6-2.4 3.5-3.9-.9-6.1-11.5-5.7-12.1-16.3-.5-8.8 5.3-17.7 18.1-18.5 4.9-.3 7.4 1 7.4 1l-2.9 11s-3.3-1.5-7.1-1.2c-5.6.3-5.6 3.9-5.4 5.2zm17.4-53.3c0-2.8-.3-6.7-1.7-10 4.4.8 6.5 5.8 7.5 8.8-1.7.5-3.7 1.1-5.8 1.2z"/>
    </g>
    <g transform="translate(96 30)" fill="#95BF47">
      <rect x="16" y="4" width="6" height="34" rx="1.5"/>
      <rect x="2" y="18" width="34" height="6" rx="1.5"/>
    </g>
  </svg>
);

export const KlaviyoLogo = ({ size = 56, className = "" }) => (
  // Klaviyo K-wave mark (stylized monochrome)
  <svg viewBox="0 0 64 64" width={size} height={size} className={cn(base, className)} aria-label="Klaviyo">
    <path
      fill="currentColor"
      d="M32 8c-9 0-17 4.5-22.7 11.7-.9 1.1.1 2.7 1.5 2.3 7.2-2 14.6-1 21.2 2.5 6.6 3.5 11.7 9 14.3 15.9.5 1.4 2.5 1.3 2.9-.1C52.7 30.5 49 18.5 39.6 12 37 10 34.5 8 32 8zm-1.6 16.4c-7 0-12.7 3.8-16.3 9.7-.7 1.2.5 2.6 1.7 2 4.1-2 8.8-2.7 13.5-1.5 4.7 1.2 8.7 4.1 11.3 8 .8 1.1 2.5.5 2.5-.9 0-9-5.3-16.3-12.7-17.3zm.1 17c-3 0-5.9 1.1-8.2 3.3-1 .9-.3 2.5 1 2.3 2-.2 4.2 0 6.3.9 2 .8 3.7 2.2 5 4 .8 1.1 2.5.5 2.5-.9 0-5.3-2.7-9.6-6.6-9.6z"
    />
  </svg>
);

export const RechargeLogo = ({ size = 56, className = "" }) => (
  // Recharge "R" lightning mark (stylized)
  <svg viewBox="0 0 64 64" width={size} height={size} className={cn(base, className)} aria-label="Recharge">
    <path
      fill="currentColor"
      d="M34 6 14 36h12L20 58l28-32H34l6-20z"
    />
  </svg>
);

export const MetaLogo = ({ size = 56, className = "" }) => (
  // Meta infinity-like mark (stylized monochrome)
  <svg viewBox="0 0 64 64" width={size} height={size} className={cn(base, className)} aria-label="Meta">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      d="M8 32C8 22 14 16 22 16s12 6 17 16 9 16 17 16 9-6 9-16-6-16-14-16-12 6-17 16-9 16-17 16S8 42 8 32z"
    />
  </svg>
);

export const GoogleLogo = ({ size = 56, className = "" }) => (
  // Google G (monochrome)
  <svg viewBox="0 0 64 64" width={size} height={size} className={cn(base, className)} aria-label="Google">
    <path
      fill="currentColor"
      d="M32 8c-13.3 0-24 10.7-24 24s10.7 24 24 24c14 0 23-9.8 23-23.6 0-1.6-.2-3.1-.4-4.4H32v9h13.2c-.6 3-2.4 5.5-5 7.2v6h8.1c4.7-4.3 7.4-10.7 7.4-18.2 0-1.6-.2-3.1-.4-4.4H32v9h13.2c-.6 3-2.4 5.5-5 7.2-4.6 3-13 1.8-16.6-3.8-3.6-5.6-1.8-13.6 4.2-17 5-2.8 10.8-1.8 14.2 2l6.4-6.4C44.7 10.6 38.6 8 32 8zm0 9c3.3 0 6 1.2 8.4 3.4l-3.6 3.6c-1.3-1.3-3-2-4.8-2-3.7 0-7 2.6-8 6.4-.5 1.5-.5 3.2 0 4.7 1 3.8 4.3 6.4 8 6.4 2 0 3.7-.7 5-2 1.4-1.3 2.2-3.3 2.4-5h-7.4v-5h12.8c.2 1 .3 2 .3 3 0 8.3-5.5 13.6-13.1 13.6-7.5 0-13.6-6.1-13.6-13.6S24.5 17 32 17z"
    />
  </svg>
);

export const Base2BrandWordmark = ({ className = "" }) => (
  <div className={cn("inline-flex items-center gap-2.5", className)}>
    <span className="relative inline-flex items-center justify-center h-7 w-7 rounded-md bg-white/5 border border-white/12">
      <span
        aria-hidden
        className="absolute inset-0 rounded-md"
        style={{ boxShadow: "inset 0 0 0 1px rgba(149,191,71,0.35)" }}
      />
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" className="text-[#95BF47]">
        <path
          d="M4 14 L10 4 L14 12 L20 4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="4" r="1.6" fill="currentColor" />
        <circle cx="20" cy="4" r="1.6" fill="currentColor" />
      </svg>
    </span>
    <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-white">
      Base<span className="text-[#95BF47]">2</span>Brand
    </span>
  </div>
);

// Logo registry for orbit nodes (used by Hero)
export const ORBIT_LOGOS = {
  "shopify-plus": ShopifyPlusLogo,
  klaviyo: KlaviyoLogo,
  recharge: RechargeLogo,
  meta: MetaLogo,
  google: GoogleLogo,
};
