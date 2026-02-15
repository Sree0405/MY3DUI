import React from "react";
import DemoStage from "./DemoStage";
import { Fog, Grid3D } from "@sreedev/my3dui";

export default function FogDemo() {
    return (
        <DemoStage cameraPosition={[0, 2, 10]}>
            <Fog color="#1a1a1a" near={2} far={15} />
            <Grid3D />
            {Array.from({ length: 5 }).map((_, i) => (
                <mesh key={i} position={[0, 0, -i * 3]}>
                    <boxGeometry />
                    <meshStandardMaterial color="#22d3ee" />
                </mesh>
            ))}
        </DemoStage>
    );
}
