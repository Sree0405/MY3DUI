import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Slider3DProps {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    label?: string;
    showValue?: boolean;
    className?: string;
    disabled?: boolean;
}

export function Slider3D({
    value: controlledValue,
    defaultValue = 50,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    label,
    showValue = true,
    className,
    disabled = false,
}: Slider3DProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (!isControlled) setInternalValue(newValue);
        onChange?.(newValue);
    };

    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className={cn("w-full space-y-2", className)}>
            {(label || showValue) && (
                <div className="flex items-center justify-between">
                    {label && <label className="text-sm font-medium">{label}</label>}
                    {showValue && (
                        <span className="text-sm font-mono text-muted-foreground">
                            {value}
                        </span>
                    )}
                </div>
            )}
            <div className="relative">
                {/* Track Background */}
                <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 border-b-2 border-slate-300 dark:border-slate-900 shadow-inner" />

                {/* Active Track */}
                <motion.div
                    className="absolute top-0 left-0 h-3 rounded-full bg-primary border-b-2 border-primary/80"
                    style={{ width: `${percentage}%` }}
                    initial={false}
                    animate={{ width: `${percentage}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                {/* Thumb */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    className="absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />

                <motion.div
                    className={cn(
                        "absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-primary shadow-lg pointer-events-none",
                        disabled && "opacity-50"
                    )}
                    style={{ left: `calc(${percentage}% - 12px)` }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                />
            </div>
        </div>
    );
}
