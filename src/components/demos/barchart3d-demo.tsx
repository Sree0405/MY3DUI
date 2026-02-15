import React from "react";
import DemoStage from "./DemoStage";
import { BarChart3D } from "@sreedev/my3dui";

export default function BarChart3DDemo() {
    const data = Array.from({ length: 10 }, (_, i) => ({
        label: `Item ${i}`,
        value: Math.random() * 10,
        color: i % 2 === 0 ? "#22d3ee" : "#a78bfa"
    }));

    return (
        <DemoStage cameraPosition={[5, 5, 10]}>
            <BarChart3D data={data} barSize={0.5} gap={0.2} />
        </DemoStage>
    );
}
