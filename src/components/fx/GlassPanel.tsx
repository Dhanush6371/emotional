import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const GlassPanel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { strong?: boolean }>(
  ({ className, strong, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-3xl p-6 transition-all duration-500",
        className,
      )}
      {...props}
    />
  ),
);
GlassPanel.displayName = "GlassPanel";