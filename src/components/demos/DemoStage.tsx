import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@sreedev/my3dui";
import { OrbitControls } from "@react-three/drei";

interface DemoStageProps {
    children: React.ReactNode;
    cameraPosition?: [number, number, number];
    preset?: "rembrandt" | "portrait" | "upfront" | "soft";
    intensity?: number;
    environment?: string;
    controls?: boolean;
    shadows?: boolean;
}

export default function DemoStage({
    children,
    cameraPosition = [0, 0, 5],
    preset = "rembrandt",
    intensity = 1,
    environment = "city",
    controls = true,
    shadows = true,
}: DemoStageProps) {
    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden bg-black/90 relative border border-white/10">
            <Canvas shadows camera={{ position: cameraPosition, fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage
                        preset={preset}
                        intensity={intensity}
                        environment={environment as any}
                        shadows={shadows}
                    >
                        {children}
                    </Stage>
                    {controls && <OrbitControls makeDefault />}
                </Suspense>
            </Canvas>
            <div className="absolute bottom-3 left-3 text-xs text-white/40 pointer-events-none">
                Interactive Demo
            </div>
        </div>
    );
}
