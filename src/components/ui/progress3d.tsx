import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Progress3DProps {
    value: number;
    max?: number;
    variant?: "default" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    showLabel?: boolean;
    label?: string;
    className?: string;
    animated?: boolean;
}

export function Progress3D({
    value,
    max = 100,
    variant = "default",
    size = "md",
    showLabel = false,
    label,
    className,
    animated = true,
}: Progress3DProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const variants = {
        default: "bg-primary border-primary/80",
        success: "bg-emerald-500 border-emerald-700",
        warning: "bg-amber-500 border-amber-700",
        danger: "bg-red-500 border-red-700",
    };

    const sizes = {
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
    };

    return (
        <div className={cn("w-full space-y-2", className)}>
            {(label || showLabel) && (
                <div className="flex items-center justify-between text-sm">
                    {label && <span className="font-medium">{label}</span>}
                    {showLabel && (
                        <span className="text-muted-foreground font-mono">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            )}
            <div
                className={cn(
                    "w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-inner border-b-2 border-slate-300 dark:border-slate-900",
                    sizes[size]
                )}
            >
                <motion.div
                    className={cn(
                        "h-full rounded-full border-b-2 shadow-sm",
                        variants[variant],
                        animated && "transition-all"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{
                        duration: animated ? 0.5 : 0,
                        ease: "easeOut",
                    }}
                />
            </div>
        </div>
    );
}
