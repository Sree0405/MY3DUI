import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
// import { cn } from "../../lib/utils";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Toggle3DProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  variant?: "glass" | "neon" | "pill";
  label?: string;
}

export const Toggle3D = forwardRef<HTMLButtonElement, Toggle3DProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      variant = "pill",
      label,
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] =
      useState(defaultChecked);

    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled
      ? controlledChecked
      : internalChecked;

    const handleToggle = () => {
      if (disabled) return;

      const newChecked = !isChecked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onChange?.(newChecked);
    };

    const getVariantStyles = () => {
      switch (variant) {
        case "neon":
          return isChecked
            ? "bg-black border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            : "bg-black border border-slate-700";

        case "glass":
          return "bg-white/20 backdrop-blur-md border border-white/30";

        case "pill":
        default:
          return isChecked
            ? "bg-primary"
            : "bg-muted";
      }
    };

    const toggleWidth = 56;
    const knobSize = 24;
    const padding = 4;
    const travel = toggleWidth - knobSize - padding * 2;

    return (
      <div className="flex items-center gap-3">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-disabled={disabled}
          disabled={disabled}
          onClick={handleToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggle();
            }
          }}
          className={cn(
            "relative h-8 w-14 rounded-full transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            disabled && "opacity-50 cursor-not-allowed",
            getVariantStyles()
          )}
        >
          <motion.div
            className={cn(
              "absolute top-1 left-1 h-6 w-6 rounded-full shadow-md",
              variant === "neon" && isChecked
                ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                : "bg-white"
            )}
            animate={{
              x: isChecked ? travel : 0,
              scale: disabled ? 0.9 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />
        </button>

        {label && (
          <span className="text-sm font-medium">
            {label}
          </span>
        )}
      </div>
    );
  }
);

Toggle3D.displayName = "Toggle3D";