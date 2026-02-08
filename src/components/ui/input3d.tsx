import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Input3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export const Input3D = React.forwardRef<HTMLInputElement, Input3DProps>(
    ({ className, label, error, icon, type = "text", ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium text-foreground">
                        {label}
                    </label>
                )}
                <motion.div
                    animate={{
                        y: isFocused ? -2 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative"
                >
                    {icon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        type={type}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={cn(
                            "flex h-11 w-full rounded-lg border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all",
                            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                            "placeholder:text-muted-foreground",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-primary",
                            "disabled:cursor-not-allowed disabled:opacity-50",
                            "border-b-4 border-b-slate-300 dark:border-b-slate-700",
                            "focus:border-b-primary",
                            error && "border-red-500 focus-visible:ring-red-500",
                            icon && "pl-10",
                            className
                        )}
                        {...props}
                    />
                </motion.div>
                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}
            </div>
        );
    }
);
Input3D.displayName = "Input3D";
