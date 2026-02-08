import React from "react";
import DemoStage from "./DemoStage";
import { ScatterPlot3D } from "@/components/ui/scatterplot3d";

export default function ScatterPlot3DDemo() {
    const data = Array.from({ length: 50 }, () => ({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        size: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "#22d3ee" : "#f472b6"
    }));

    return (
        <DemoStage cameraPosition={[10, 10, 10]}>
            <ScatterPlot3D data={data} />
        </DemoStage>
    );
}
