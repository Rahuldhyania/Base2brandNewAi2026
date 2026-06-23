import React from "react";

export default function PageMeta({ children }) {
  // Thin wrapper for sections needing consistent base spacing.
  return <div className="relative py-24 md:py-32">{children}</div>;
}
