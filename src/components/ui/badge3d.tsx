import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Badge3DProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "success" | "warning" | "danger" | "outline";
    size?: "sm" | "md" | "lg";
    pulse?: boolean;
}

export const Badge3D = React.forwardRef<HTMLDivElement, Badge3DProps>(
    ({ className, variant = "default", size = "md", pulse = false, children, ...props }, ref) => {
        const variants = {
            default: "bg-primary text-primary-foreground border-b-2 border-primary/80 shadow-sm",
            secondary: "bg-secondary text-secondary-foreground border-b-2 border-secondary/80 shadow-sm",
            success: "bg-emerald-500 text-white border-b-2 border-emerald-700 shadow-sm",
            warning: "bg-amber-500 text-white border-b-2 border-amber-700 shadow-sm",
            danger: "bg-red-500 text-white border-b-2 border-red-700 shadow-sm",
            outline: "border-2 border-border bg-background text-foreground border-b-4 shadow-sm",
        };

        const sizes = {
            sm: "px-2 py-0.5 text-xs",
            md: "px-2.5 py-1 text-sm",
            lg: "px-3 py-1.5 text-base",
        };

        return (
            <motion.div
                ref={ref}
                whileHover={{ y: -1, scale: 1.05 }}
                whileTap={{ y: 0, scale: 0.98 }}
                className={cn(
                    "inline-flex items-center rounded-md font-medium transition-all active:translate-y-[2px] active:border-b-0",
                    variants[variant],
                    sizes[size],
                    pulse && "animate-pulse",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Badge3D.displayName = "Badge3D";
