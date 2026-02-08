import React from "react";
import DemoStage from "./DemoStage";
import { AudioVisualizer } from "@/components/ui/audiovisualizer";
import { Text } from "@react-three/drei";

export default function AudioVisualizerDemo() {
    return (
        <DemoStage cameraPosition={[0, 2, 8]}>
            <group position={[0, 0, 0]}>
                <AudioVisualizer
                    audioSrc="" // Empty src will just show static or empty? 
                // We need a valid audio file for it to work. 
                // Providing a dummy or public URL.
                // But audioContext requires user interaction.
                // We'll leave it empty to avoid noise, or use a silent file.
                // The component handles empty gracefully.
                />
                <Text position={[0, 1, 0]} color="white" fontSize={0.3}>
                    (Audio Visualizer requires user interaction to play)
                </Text>
            </group>
        </DemoStage>
    );
}
