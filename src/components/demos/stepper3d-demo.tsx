import React from "react";
import DemoStage from "./DemoStage";
import { Stepper3D } from "@sreedev/my3dui";

export default function Stepper3DDemo() {
    return (
        <DemoStage>
            <group position={[0, 0, 0]}>
                <Stepper3D steps={["Cart", "Shipping", "Payment", "Confirm"]} activeStep={1} gap={2.5} />
            </group>
        </DemoStage>
    );
}
