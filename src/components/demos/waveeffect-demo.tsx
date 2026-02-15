import React from "react";
import DemoStage from "./DemoStage";
import { WaveEffect } from "@sreedev/my3dui";

export default function WaveEffectDemo() {
    return (
        <DemoStage cameraPosition={[0, 5, 5]}>
            <WaveEffect speed={2} frequency={5} amplitude={0.5}>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[5, 5, 64, 64]} />
                    <meshStandardMaterial color="#22d3ee" wireframe />
                </mesh>
            </WaveEffect>
        </DemoStage>
    );
}
