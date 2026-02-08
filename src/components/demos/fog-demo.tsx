import React from "react";
import DemoStage from "./DemoStage";
import { Fog } from "@/components/ui/fog";
import { Grid3D } from "@/components/layouts/grid3d";

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
