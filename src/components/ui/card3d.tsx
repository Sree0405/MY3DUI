import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  depth?: "sm" | "md" | "lg";
  variant?: "glass" | "solid" | "neon" | "outline";
  disableTilt?: boolean;
}

export function Card3D({
  children,
  className,
  depth = "md",
  variant = "glass",
  disableTilt = false,
  ...props
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disableTilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (disableTilt) return;
    x.set(0);
    y.set(0);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "neon":
        return "bg-black/90 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)] text-cyan-50";
      case "solid":
        return "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl text-slate-900 dark:text-slate-100";
      case "outline":
        return "bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100";
      case "glass":
      default:
        return "bg-white/40 dark:bg-slate-900/60 backdrop-blur-xl border-white/40 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 text-slate-800 dark:text-white";
    }
  };

  const getDepthValue = () => {
    switch (depth) {
      case "sm": return 20;
      case "lg": return 80;
      case "md": default: return 40;
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative group cursor-pointer", className)}
      {...props as any}
    >
      <motion.div
        style={{
          rotateX: disableTilt ? 0 : rotateX,
          rotateY: disableTilt ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-full w-full rounded-xl border p-6 transition-colors duration-300",
          getVariantStyles()
        )}
      >
        {/* Depth Layer */}
        <div
          className="absolute inset-0 rounded-xl bg-black/10 dark:bg-black/40 blur-xl transition-all duration-300 -z-20"
          style={{
            transform: `translateZ(-${getDepthValue()}px) scale(0.95)`,
            opacity: 0.6
          }}
        />

        {/* Content Layer with slight Z push */}
        <div style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>

        {/* Dynamic Highlight/Sheen */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-transform"
          style={{ mixBlendMode: "overlay" }}
        />
      </motion.div>
    </motion.div>
  );
}
