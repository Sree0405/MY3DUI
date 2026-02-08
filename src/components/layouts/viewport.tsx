import React, { ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";

export interface ViewportProps {
    children: ReactNode;
    className?: string;
    aspect?: number;
    fallback?: ReactNode;
    dpr?: [number, number];
}

export function Viewport({
    children,
    className,
    aspect = 16 / 9,
    fallback = null,
    dpr = [1, 2],
}: ViewportProps) {
    return (
        <div
            className={cn("relative w-full overflow-hidden rounded-xl bg-muted/20", className)}
            style={{ aspectRatio: aspect }}
        >
            <Suspense fallback={fallback}>
                <Canvas
                    dpr={dpr}
                    camera={{ position: [0, 0, 5], fov: 50 }}
                    shadows
                    className="h-full w-full touch-none"
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: "high-performance",
                    }}
                >
                    {children}
                </Canvas>
            </Suspense>
        </div>
    );
}
