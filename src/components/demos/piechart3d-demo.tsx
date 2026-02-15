import React from "react";
import DemoStage from "./DemoStage";
import { PieChart3D } from "@sreedev/my3dui";

export default function PieChart3DDemo() {
    const data = [
        { value: 30, color: "#22d3ee", label: "A" },
        { value: 20, color: "#a78bfa", label: "B" },
        { value: 50, color: "#f472b6", label: "C" },
    ];

    return (
        <DemoStage cameraPosition={[0, 5, 5]}>
            <PieChart3D data={data} radius={3} depth={1} />
        </DemoStage>
    );
}
