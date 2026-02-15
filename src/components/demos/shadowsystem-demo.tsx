import React from "react";
import DemoStage from "./DemoStage";
import { ShadowSystem ,Button3D} from "@sreedev/my3dui"

export default function ShadowSystemDemo() {
    return (
        <DemoStage cameraPosition={[0, 5, 5]} shadows={true}>
            <ShadowSystem type="soft" />

            <Button3D >Cast Shadow</Button3D>

            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#333" />
            </mesh>
        </DemoStage>
    );
}
