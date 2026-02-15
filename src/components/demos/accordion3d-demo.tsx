import { Accordion3D } from "@sreedev/my3dui";
import { Sparkles, Zap, Shield, Box, LayoutTemplate, Palette, Cpu } from "lucide-react";

export default function Accordion3DDemo() {
    const items = [
        {
            title: "Design System Integration",
            icon: <Palette className="w-5 h-5" />,
            content: (
                <div className="space-y-3">
                    <p>
                        Seamlessly integrates with your existing design system using Tailwind CSS tokens.
                        Everything is customizable via props and CSS variables.
                    </p>
                    <div className="flex gap-2">
                        <div className="h-6 w-6 rounded-md bg-blue-500 shadow-sm" />
                        <div className="h-6 w-6 rounded-md bg-purple-500 shadow-sm" />
                        <div className="h-6 w-6 rounded-md bg-pink-500 shadow-sm" />
                    </div>
                </div>
            ),
        },
        {
            title: "High Performance Animations",
            icon: <Zap className="w-5 h-5" />,
            content: (
                <div className="space-y-3">
                    <p>
                        Powered by Framer Motion for 60fps gpu-accelerated transitions.
                        No layout thrashing or jank using FLIP animations.
                    </p>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>
                    <div className="flex justify-between text-xs font-mono opacity-70">
                        <span>CPU: 2%</span>
                        <span className="text-emerald-500 font-bold">60 FPS</span>
                    </div>
                </div>
            ),
        },
        {
            title: "Accessibility First",
            icon: <Shield className="w-5 h-5" />,
            content: (
                <p>
                    Fully accessible with keyboard navigation support (Tab, Space, Enter).
                    Follows WAI-ARIA patterns for accordion components to ensure screen reader compatibility.
                </p>
            ),
        },
        {
            title: "Zero Dependencies",
            icon: <Cpu className="w-5 h-5" />,
            content: (
                <p>
                    No heavy 3D libraries required. Does not use Three.js, React-Three-Fiber, or WebGL.
                    Uses pure CSS3 3D transforms (`perspective`, `rotateX`, `box-shadow`) for a lightweight footprint.
                </p>
            ),
        }
    ];

    return (
        <div className="min-h-screen w-full  bg-slate-950 flex flex-col items-center justify-center p-8 font-sans">
            <div className="w-full max-w-2xl space-y-12">

                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                        Accordion 3D
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                        A premium, hardware-accelerated accordion component with depth perception and glassmorphism.
                    </p>
                </div>

                {/* Glass Variant (Default) */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-600 pl-2">Glass Variant</h3>
                    <Accordion3D items={items} variant="glass" />
                </div>

                {/* Neon Variant */}
                <div className="space-y-4 pt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-600/70 pl-2">Neon Variant</h3>
                    <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl">
                        <Accordion3D items={items.slice(0, 2)} variant="neon" />
                    </div>
                </div>

                {/* Minimal Variant */}
                <div className="space-y-4 pt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 pl-2">Minimal Variant</h3>
                    <Accordion3D items={items.slice(1, 3)} variant="minimal" />
                </div>

            </div>
        </div>
    );
}
