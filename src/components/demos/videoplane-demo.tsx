import React from "react";
import DemoStage from "./DemoStage";
import { VideoPlane } from "@/components/ui/videoplane";

export default function VideoPlaneDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 5]}>
            {/* Using a sample video */}
            <VideoPlane
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                width={5}
                muted={true}
                autoplay={true}
                loop={true}
            />
        </DemoStage>
    );
}
