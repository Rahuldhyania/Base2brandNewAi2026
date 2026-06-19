import { cn } from "@/lib/utils";

export const Container = ({ className, children, wide = false, ...props }) => {
  return (
    <div
      className={cn(
        "mx-auto px-5 sm:px-6 lg:px-8",
        wide ? "max-w-[1320px]" : "max-w-[1200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
