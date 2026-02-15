import React, { useState } from "react";
import DemoStage from "./DemoStage";
import { Select3D } from "@sreedev/my3dui";
import { Text } from "@react-three/drei";

export default function Select3DDemo() {
    const [val, setVal] = useState("option1");

    return (
        <DemoStage>
            <group position={[0, 0.5, 0]}>
                <Select3D
                    options={[
                        { label: "Option 1", value: "option1" },
                        { label: "Option 2", value: "option2" },
                        { label: "Option 3", value: "option3" },
                    ]}
                    value={val}
                    onChange={setVal}
                />
            </group>

            <Text position={[0, -1, 0]} fontSize={0.3} color="white">
                Selected: {val}
            </Text>
        </DemoStage>
    );
}
