import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Toggle3DProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    variant?: "glass" | "neon" | "pill";
    label?: string;
}

export function Toggle3D({
    checked: controlledChecked,
    defaultChecked = false,
    onCheckedChange,
    disabled = false,
    variant = "pill",
    label,
}: Toggle3DProps) {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const handleToggle = () => {
        if (disabled) return;
        const newChecked = !isChecked;
        if (!isControlled) setInternalChecked(newChecked);
        onCheckedChange?.(newChecked);
    };

    const getVariantStyles = () => {
        switch (variant) {
            case "neon":
                return isChecked
                    ? "bg-slate-900 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-slate-900 border border-slate-700";
            case "glass":
                return "bg-white/20 backdrop-blur-md border border-white/30 shadow-inner";
            case "pill":
            default:
                return isChecked
                    ? "bg-primary shadow-inner"
                    : "bg-slate-200 dark:bg-slate-700 shadow-inner";
        }
    };

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={handleToggle}
                className={cn(
                    "relative h-8 w-14 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    disabled && "opacity-50 cursor-not-allowed",
                    getVariantStyles()
                )}
                role="switch"
                aria-checked={isChecked}
            >
                <motion.div
                    className={cn(
                        "absolute top-1 left-1 h-6 w-6 rounded-full shadow-md z-10",
                        variant === "neon" && isChecked ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-white"
                    )}
                    animate={{
                        x: isChecked ? 24 : 0,
                        scale: disabled ? 0.9 : 1
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                />
                {variant !== "neon" && (
                    <div
                        className={cn(
                            "absolute inset-0 rounded-full border-b-[3px] border-black/5 pointer-events-none",
                            isChecked ? "border-black/10" : "border-black/5"
                        )}
                    />
                )}
            </button>
            {label && <span className="text-sm font-medium">{label}</span>}
        </div>
    );
}
