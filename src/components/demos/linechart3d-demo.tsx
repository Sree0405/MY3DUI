import React from "react";
import DemoStage from "./DemoStage";
import { LineChart3D } from "@/components/ui/linechart3d";
import { Vector3 } from "three";

export default function LineChart3DDemo() {
    const data = Array.from({ length: 20 }, (_, i) => new Vector3(i - 10, Math.sin(i * 0.5) * 3, 0));

    return (
        <DemoStage cameraPosition={[0, 0, 15]}>
            <LineChart3D points={data} color="#22d3ee" thickness={0.2} curved={true} />
        </DemoStage>
    );
}
