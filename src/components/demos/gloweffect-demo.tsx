import React from "react";
import DemoStage from "./DemoStage";
import { GlowEffect } from "@/components/ui/gloweffect";
import { Button3D } from "@/components/ui/button3d";

export default function GlowEffectDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 5]}>
            <GlowEffect color="#00ff00" scale={1.2} intensity={2}>
                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </GlowEffect>
        </DemoStage>
    );
}
