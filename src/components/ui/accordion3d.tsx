import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Box, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---

export interface AccordionItem {
    title: string;
    content: React.ReactNode;
    value?: string;
    icon?: React.ReactNode;
}

export interface Accordion3DProps {
    items: AccordionItem[];
    className?: string;
    variant?: "glass" | "solid" | "neon" | "minimal";
    defaultOpenIndex?: number | null;
    allowMultiple?: boolean;
}

/**
 * Accordion3D
 * 
 * A 3D-inspired accordion component that uses CSS transforms and shadows
 * to create depth without WebGL.
 */
export const Accordion3D: React.FC<Accordion3DProps> = ({
    items,
    className,
    variant = "glass",
    defaultOpenIndex = null,
    allowMultiple = false,
}) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>(
        defaultOpenIndex !== null ? [defaultOpenIndex] : []
    );

    const toggleItem = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    const getVariantStyles = () => {
        switch (variant) {
            case "neon":
                return "bg-slate-900/90 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] text-cyan-50";
            case "solid":
                return "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl text-slate-900 dark:text-slate-100";
            case "minimal":
                return "bg-white/80 dark:bg-black/50 border-transparent shadow-sm backdrop-blur-md text-slate-800 dark:text-slate-200 hover:bg-white/95 dark:hover:bg-slate-900/80";
            case "glass":
            default:
                return "bg-white/40 dark:bg-slate-900/60 backdrop-blur-xl border-white/40 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 text-slate-800 dark:text-white";
        }
    };

    const getDepthLayerStyles = () => {
        switch (variant) {
            case "neon": return "bg-cyan-900/40";
            case "minimal": return "hidden";
            case "solid": return "bg-slate-200 dark:bg-slate-900";
            case "glass": default: return "bg-slate-900/10 dark:bg-black/40";
        }
    };

    return (
        <div className={cn("flex flex-col gap-4 w-full max-w-2xl mx-auto", className)}>
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index);

                return (
                    <motion.div
                        key={index}
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        className="relative group perspective-[1000px] z-0"
                    >
                        {/* 3D Depth Layer (The physical 'thickness' behind the card) */}
                        <motion.div
                            className={cn(
                                "absolute inset-0 rounded-xl translate-y-2 translate-x-0 -z-10 transition-colors duration-300",
                                getDepthLayerStyles()
                            )}
                            variants={{
                                open: {
                                    translateY: 4,
                                    scale: 0.99
                                },
                                closed: {
                                    translateY: 8,
                                    scale: 0.96
                                }
                            }}
                            transition={{ duration: 0.2 }}
                        />

                        {/* Main Interactive Card Surface */}
                        <motion.div
                            className={cn(
                                "relative overflow-hidden rounded-xl border transition-all duration-300 will-change-transform z-10",
                                getVariantStyles()
                            )}
                            whileHover={{
                                y: -2,
                                scale: 1.005,
                                transition: { type: "spring", stiffness: 400, damping: 25 },
                            }}
                            whileTap={{ scale: 0.995, y: 0 }}
                            variants={{
                                open: { y: 0 },
                                closed: { y: 0 }
                            }}
                        >
                            {/* Header / Trigger */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-xl"
                                aria-expanded={isOpen}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Icon Container with subtle 3D pop */}
                                    {item.icon && (
                                        <div
                                            className={cn(
                                                "flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br transition-all duration-500 shadow-inner",
                                                variant === "neon" ? "from-cyan-500/20 to-blue-600/20 text-cyan-400" :
                                                    variant === "solid" ? "from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-600 dark:text-slate-300" :
                                                        "from-white/50 to-white/10 dark:from-white/10 dark:to-white/5 text-slate-700 dark:text-slate-200"
                                            )}
                                        >
                                            <span className={cn("transition-transform duration-300", isOpen ? "scale-110" : "scale-100")}>
                                                {item.icon}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex flex-col">
                                        <span className={cn(
                                            "text-lg font-semibold tracking-tight transition-colors",
                                            isOpen ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                                        )}>
                                            {item.title}
                                        </span>
                                        {isOpen && item.value && (
                                            <span className="text-xs opacity-60 font-mono">{item.value}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Chevron Area */}
                                <div className="flex items-center gap-3">
                                    {/* Status Indicator (Glow Dot) */}
                                    <div className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-500",
                                        isOpen
                                            ? (variant === "neon" ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]")
                                            : "bg-slate-400/30"
                                    )} />

                                    <motion.div
                                        variants={{
                                            open: { rotate: 180 },
                                            closed: { rotate: 0 }
                                        }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className={cn(
                                            "p-1 rounded-full",
                                            variant === "neon" ? "text-cyan-400" : "text-slate-500 dark:text-slate-400"
                                        )}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </div>
                            </button>

                            {/* Collapsible Content */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { opacity: 1, height: "auto" },
                                            collapsed: { opacity: 0, height: 0 },
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.04, 0.62, 0.23, 0.98],
                                        }}
                                    >
                                        <div className="px-5 pb-6 pt-0">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.1, duration: 0.3 }}
                                                className="relative"
                                            >
                                                {/* Seamless Divider */}
                                                <div className="h-px w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-10 mb-5" />

                                                <div className="text-base sm:text-[15px] opacity-80 leading-relaxed font-normal pl-14">
                                                    {item.content}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Glassmorphism Shine Effect on Hover */}
                            <div
                                className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                style={{ mixBlendMode: 'overlay' }}
                            />
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};
