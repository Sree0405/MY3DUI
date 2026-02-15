import React from "react";
import DemoStage from "./DemoStage";
import { Grid3D } from "@sreedev/my3dui";

export default function Grid3DDemo() {
    return (
        <DemoStage cameraPosition={[5, 5, 5]}>
            <Grid3D cellSize={1} infiniteGrid={true} fadeDistance={20} />
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="#22d3ee" />
            </mesh>
        </DemoStage>
    );
}
