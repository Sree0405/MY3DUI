import React from "react";
import { Text, Line } from "@react-three/drei";
import { Vector3 } from "three";

export interface Stepper3DProps {
    steps: string[];
    activeStep?: number;
    gap?: number;
}

export function Stepper3D({
    steps,
    activeStep = 0,
    gap = 2,
}: Stepper3DProps) {

    const points = steps.map((_, i) => new Vector3((i - (steps.length - 1) / 2) * gap, 0, 0));

    return (
        <group>
            {/* Connecting Line */}
            <Line
                points={points}
                color="#333"
                lineWidth={2}
            />

            {/* Active Line Progress */}
            {activeStep > 0 && (
                <Line
                    points={points.slice(0, activeStep + 1)}
                    color="#22d3ee"
                    lineWidth={4}
                />
            )}

            {/* Steps */}
            {steps.map((label, i) => (
                <group key={i} position={points[i]}>
                    <mesh>
                        <sphereGeometry args={[0.3, 32, 32]} />
                        <meshStandardMaterial color={i <= activeStep ? "#22d3ee" : "#333"} />
                    </mesh>
                    <Text
                        position={[0, -0.6, 0]}
                        fontSize={0.2}
                        color={i <= activeStep ? "white" : "#666"}
                        anchorX="center"
                        anchorY="top"
                    >
                        {label}
                    </Text>
                </group>
            ))}
        </group>
    );
}
