import React from "react";
import DemoStage from "./DemoStage";
import { ImagePlane } from "@sreedev/my3dui";

export default function ImagePlaneDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 5]}>
            <ImagePlane
                src="https://picsum.photos/id/237/800/600"
                width={5}
                transparent={true}
                opacity={0.9}
            />
        </DemoStage>
    );
}
