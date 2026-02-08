import { useState, useEffect } from "react";
import { Progress3D } from "@/components/ui/progress3d";
import { Stack } from "@/components/layouts/stack";
import { Button3D } from "@/components/ui/button3d";

export default function Progress3DDemo() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 0;
                return prev + 1;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen  bg-slate-950 p-10 flex flex-col gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Progress 3D</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Visual progress indicators with smooth animations and 3D depth effects.
                </p>
            </div>

            <div className="grid gap-8 max-w-2xl mx-auto w-full">
                {/* Variants */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Variants
                    </h3>
                    <Stack gap={4}>
                        <Progress3D value={75} variant="default" showLabel />
                        <Progress3D value={60} variant="success" showLabel />
                        <Progress3D value={45} variant="warning" showLabel />
                        <Progress3D value={30} variant="danger" showLabel />
                    </Stack>
                </div>

                {/* Sizes */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Sizes
                    </h3>
                    <Stack gap={4}>
                        <Progress3D value={70} size="sm" label="Small" showLabel />
                        <Progress3D value={70} size="md" label="Medium" showLabel />
                        <Progress3D value={70} size="lg" label="Large" showLabel />
                    </Stack>
                </div>

                {/* With Labels */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        With Custom Labels
                    </h3>
                    <Stack gap={4}>
                        <Progress3D value={85} label="Download Progress" showLabel variant="success" />
                        <Progress3D value={42} label="Upload Progress" showLabel variant="default" />
                        <Progress3D value={15} label="Processing" showLabel variant="warning" />
                    </Stack>
                </div>

                {/* Animated Progress */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Animated Progress
                    </h3>
                    <Progress3D
                        value={progress}
                        label="Auto-incrementing Progress"
                        showLabel
                        variant={progress > 75 ? "success" : progress > 50 ? "default" : progress > 25 ? "warning" : "danger"}
                    />
                </div>

                {/* Real-world Examples */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Real-world Examples
                    </h3>

                    <Stack gap={6}>
                        {/* File Upload */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">document.pdf</span>
                                <span className="text-muted-foreground">2.4 MB / 3.2 MB</span>
                            </div>
                            <Progress3D value={75} variant="default" size="sm" />
                        </div>

                        {/* Installation */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Installing dependencies...</span>
                                <span className="text-muted-foreground">45%</span>
                            </div>
                            <Progress3D value={45} variant="warning" size="md" />
                        </div>

                        {/* Completion */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Build completed</span>
                                <span className="text-emerald-600 font-medium">100%</span>
                            </div>
                            <Progress3D value={100} variant="success" size="md" />
                        </div>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
