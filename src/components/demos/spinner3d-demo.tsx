import React from "react";
import DemoStage from "./DemoStage";
import { Spinner3D } from "@/components/ui/spinner3d";

export default function Spinner3DDemo() {
    return (
        <DemoStage>
            <Spinner3D size="lg" color="#22d3ee" speed={2} />
        </DemoStage>
    );
}
