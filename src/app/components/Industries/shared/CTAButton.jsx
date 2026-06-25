import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTAButton({
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "upright",
  onClick,
  className = "",
  ...rest
}) {
  const sizes = {
    sm: "!px-4 !py-2 text-xs",
    md: "",
    lg: "!px-7 !py-4 text-[15px]",
  };
  const cls = `${variant === "primary" ? "btn-primary !bg-(--b2b-primary)" : "btn-secondary"} ${sizes[size]} ${className}`;
  const Icon = icon === "right" ? ArrowRight : ArrowUpRight;

  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link href={to} className={`${cls} group`} >
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`${cls} group`} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`${cls} group`} {...rest}>
      {inner}
    </button>
  );
}
