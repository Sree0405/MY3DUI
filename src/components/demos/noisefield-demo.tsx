import React from "react";
import DemoStage from "./DemoStage";
import { NoiseField } from "@/components/ui/noisefield";

export default function NoiseFieldDemo() {
    return (
        <DemoStage cameraPosition={[0, 5, 5]}>
            <NoiseField scale={2} speed={0.5} />
        </DemoStage>
    );
}
