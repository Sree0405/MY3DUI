import React, { useState } from "react";
import DemoStage from "./DemoStage";
import { Toggle3D } from "@/components/ui/toggle3d";
import { Text } from "@react-three/drei";

export default function Toggle3DDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <DemoStage>
            <group position={[0, 0, 0]}>
                <Toggle3D checked={checked} onChange={setChecked} />
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">
                    State: {checked ? "ON" : "OFF"}
                </Text>
            </group>
        </DemoStage>
    );
}
