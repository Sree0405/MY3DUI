import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Tab {
    label: string;
    value: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}

export interface Tabs3DProps {
    tabs: Tab[];
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    variant?: "default" | "pills" | "underline";
}

export function Tabs3D({
    tabs,
    defaultValue,
    value: controlledValue,
    onValueChange,
    className,
    variant = "default",
}: Tabs3DProps) {
    const [internalValue, setInternalValue] = useState(defaultValue || tabs[0]?.value);
    const isControlled = controlledValue !== undefined;
    const activeValue = isControlled ? controlledValue : internalValue;

    const handleTabChange = (value: string) => {
        if (!isControlled) setInternalValue(value);
        onValueChange?.(value);
    };

    const activeTab = tabs.find((tab) => tab.value === activeValue);
    const activeIndex = tabs.findIndex((tab) => tab.value === activeValue);

    return (
        <div className={cn("w-full", className)}>
            {/* Tab List */}
            <div
                className={cn(
                    "flex gap-1 mb-4",
                    variant === "default" && "bg-muted p-1 rounded-lg",
                    variant === "pills" && "gap-2",
                    variant === "underline" && "border-b border-border"
                )}
            >
                {tabs.map((tab, index) => {
                    const isActive = tab.value === activeValue;
                    return (
                        <button
                            key={tab.value}
                            onClick={() => handleTabChange(tab.value)}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-all rounded-md",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                variant === "default" && [
                                    isActive
                                        ? "bg-background text-foreground shadow-sm border-b-2 border-primary"
                                        : "text-muted-foreground hover:text-foreground",
                                ],
                                variant === "pills" && [
                                    isActive
                                        ? "bg-primary text-primary-foreground border-b-2 border-primary/80"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80",
                                ],
                                variant === "underline" && [
                                    "rounded-none border-b-2",
                                    isActive
                                        ? "border-primary text-foreground"
                                        : "border-transparent text-muted-foreground hover:text-foreground",
                                ]
                            )}
                        >
                            <span className="flex items-center gap-2">
                                {tab.icon}
                                {tab.label}
                            </span>
                            {isActive && variant === "default" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-background rounded-md -z-10 shadow-sm"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeValue}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    {activeTab?.content}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
