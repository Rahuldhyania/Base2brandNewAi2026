import React from "react";

export default function SectionLabel({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`eyebrow ${className}`}>
      {children}
    </Tag>
  );
}
