import { cn } from "@/lib/utils";

export function GradientOrb({ className, size = 600 }: { className?: string; size?: number }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl opacity-60 animate-float", className)}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 30% 30%, #38BDF8, #8B5CF6 50%, transparent 70%)",
      }}
    />
  );
}