import React, { useRef } from "react";
import {
    OrbitControls,
    FlyControls,
    FirstPersonControls
} from "@react-three/drei";

export interface CameraControllerProps {
    mode?: "orbit" | "fly" | "first-person";
    damping?: number;
    minDistance?: number;
    maxDistance?: number;
    autoRotate?: boolean;
}

export function CameraController({
    mode = "orbit",
    damping = 0.05,
    minDistance = 1,
    maxDistance = 100,
    autoRotate = false,
}: CameraControllerProps) {
    const controlsRef = useRef(null);

    switch (mode) {
        case "fly":
            return (
                <FlyControls
                    ref={controlsRef}
                    movementSpeed={10}
                    dragToLook
                />
            );
        case "first-person":
            return (
                <FirstPersonControls
                    ref={controlsRef}
                    lookSpeed={0.1}
                    movementSpeed={10}
                />
            );
        case "orbit":
        default:
            return (
                <OrbitControls
                    ref={controlsRef}
                    enableDamping
                    dampingFactor={damping}
                    minDistance={minDistance}
                    maxDistance={maxDistance}
                    autoRotate={autoRotate}
                    makeDefault
                />
            );
    }
}
