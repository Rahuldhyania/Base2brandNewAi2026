import { cn } from "@/lib/utils";
import Reveal from "@/components/site/Reveal";
import MonoLabel from "@/components/shopify-solution/site/MonoLabel";

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  titleClassName = "",
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <MonoLabel dot>{eyebrow}</MonoLabel>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4 max-w-3xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-base md:text-lg text-white/65 leading-relaxed",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeader;
