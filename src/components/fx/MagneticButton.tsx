import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
};

export function MagneticButton({ children, className, variant = "primary", onClick, type = "button" }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-shadow duration-500",
        variant === "primary"
          ? "bg-gradient-glow text-white shadow-glow hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.55)]"
          : "glass text-foreground hover:neon-ring",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}