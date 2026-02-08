import React from "react";
import DemoStage from "./DemoStage";
import { Particles } from "@/components/ui/particles";

export default function ParticlesDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 10]}>
            <Particles count={2000} color="#22d3ee" size={0.05} speed={0.2} />
        </DemoStage>
    );
}
