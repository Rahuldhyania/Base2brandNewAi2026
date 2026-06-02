import React from "react";
import { cn } from "../../lib/utils";
import { OfficialLogo } from "../../components/visual/OfficialLogo";

/**
 * Small wordmark — used in the navbar and footer.
 * Renders the official Base2Brand lockup at a contained height.
 */
export function Base2BrandWordmark({ className, accent = "#ff6a00" }) {
  return (
    <div
      data-testid="base2brand-wordmark"
      className={cn("inline-flex items-center h-7 sm:h-8", className)}
    >
      <OfficialLogo accent={accent} className="h-full w-auto" />
    </div>
  );
}
