import React from "react";
import { Line, Text } from "@react-three/drei";
import { Vector3 } from "three";

export interface TimelineEvent {
    date: string;
    title: string;
    description?: string;
}

export interface Timeline3DProps {
    events: TimelineEvent[];
    orientation?: "horizontal" | "vertical";
    gap?: number;
}

export function Timeline3D({
    events,
    orientation = "horizontal",
    gap = 3,
}: Timeline3DProps) {

    const points = events.map((_, i) => {
        return orientation === "horizontal"
            ? new Vector3((i - (events.length - 1) / 2) * gap, 0, 0)
            : new Vector3(0, (i - (events.length - 1) / 2) * -gap, 0);
    });

    return (
        <group>
            <Line points={points} color="#555" lineWidth={1} />

            {events.map((ev, i) => (
                <group key={i} position={points[i]}>
                    <mesh>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color="#22d3ee" />
                    </mesh>
                    <group position={[0, 0.5, 0]}>
                        <Text
                            fontSize={0.3}
                            color="white"
                            anchorY="bottom"
                        >
                            {ev.date}
                        </Text>
                        <Text
                            position={[0, -0.3, 0]} // If above sphere, maybe title is above date?
                            // Let's put date top, title bottom of sphere if horizontal?
                            // For now stacking them above.
                            fontSize={0.25}
                            color="#ccc"
                            anchorY="top"
                        >
                            {ev.title}
                        </Text>
                    </group>
                </group>
            ))}
        </group>
    );
}
