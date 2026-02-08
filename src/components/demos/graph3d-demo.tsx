import React from "react";
import DemoStage from "./DemoStage";
import { Graph3D } from "@/components/ui/graph3d";

export default function Graph3DDemo() {
    const nodes = [
        { id: "1", label: "Root", x: 0, y: 2, z: 0, color: "#22d3ee" },
        { id: "2", label: "Child 1", x: -2, y: 0, z: 0 },
        { id: "3", label: "Child 2", x: 2, y: 0, z: 0 },
        { id: "4", label: "Leaf", x: 0, y: -2, z: 2 },
    ];

    const edges = [
        { source: "1", target: "2" },
        { source: "1", target: "3" },
        { source: "2", target: "4" },
        { source: "3", target: "4" },
    ];

    return (
        <DemoStage cameraPosition={[0, 0, 10]}>
            <Graph3D nodes={nodes} edges={edges} />
        </DemoStage>
    );
}
