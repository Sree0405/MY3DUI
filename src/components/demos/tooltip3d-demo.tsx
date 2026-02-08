import React from "react";
import DemoStage from "./DemoStage";
import { Tooltip3D } from "@/components/ui/tooltip3d";
import { Button3D } from "@/components/ui/button3d";

export default function Tooltip3DDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 6]}>
            <Tooltip3D content="Top Tooltip" side="top">
                <Button3D position={[0, 1.5, 0]}>Hover Top</Button3D>
            </Tooltip3D>

            <Tooltip3D content="Bottom Tooltip" side="bottom">
                <Button3D position={[0, -1.5, 0]}>Hover Bottom</Button3D>
            </Tooltip3D>

            <Tooltip3D content="Left Tooltip" side="left">
                <Button3D position={[-2.5, 0, 0]}>Hover Left</Button3D>
            </Tooltip3D>

            <Tooltip3D content="Right Tooltip" side="right">
                <Button3D position={[2.5, 0, 0]}>Hover Right</Button3D>
            </Tooltip3D>
        </DemoStage>
    );
}
