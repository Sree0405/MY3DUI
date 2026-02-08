import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Instances, Instance } from "@react-three/drei";
import { Color, Vector3 } from "three";
import { cn } from "@/lib/utils";

export interface BarData {
    label: string;
    value: number;
    color?: string;
}

export interface BarChart3DProps {
    data: BarData[];
    orientation?: "vertical" | "horizontal";
    barSize?: number;
    gap?: number;
    animated?: boolean;
    className?: string; // For container if wrapped, but R3F components don't use className
}

export function BarChart3D({
    data,
    orientation = "vertical",
    barSize = 0.5,
    gap = 0.2,
    animated = true,
}: BarChart3DProps) {
    const maxValue = useMemo(() => Math.max(...data.map((d) => d.value)), [data]);

    return (
        <group>
            {/* Base Plane Grid */}
            <gridHelper args={[data.length * (barSize + gap) + 2, 10]} position={[0, 0, 0]} />

            <Instances range={data.length}>
                <boxGeometry args={[barSize, 1, barSize]} />
                <meshStandardMaterial roughness={0.3} metalness={0.6} />

                {data.map((item, index) => {
                    const height = item.value / maxValue * 5; // Normalize to max height 5
                    const x = (index - data.length / 2) * (barSize + gap);

                    return (
                        <group key={index} position={[x, 0, 0]}>
                            <BarInstance
                                height={height}
                                color={item.color || "#8884d8"}
                                animated={animated}
                            />
                            {/* Label */}
                            <Text
                                position={[0, -0.5, 0]}
                                fontSize={0.2}
                                color="black"
                                anchorX="center"
                                anchorY="top"
                            >
                                {item.label}
                            </Text>
                        </group>
                    );
                })}
            </Instances>
        </group>
    );
}

function BarInstance({ height, color, animated }: { height: number; color: string; animated: boolean }) {
    const ref = useRef<any>(null);
    const [hovered, setHover] = useState(false);

    // Pivot adjustment: Scale is applied from center, so we shift position Y
    // Ideally we use a geometry shifted up, but with Instance we can just position it at height/2

    useFrame((state, delta) => {
        if (ref.current) {
            // Animate growth
            const targetHeight = height;
            const targetY = height / 2;

            if (animated) {
                ref.current.scale.y += (targetHeight - ref.current.scale.y) * delta * 5;
                ref.current.position.y += (targetY - ref.current.position.y) * delta * 5;
            } else {
                ref.current.scale.y = targetHeight;
                ref.current.position.y = targetY;
            }

            // Hover effect
            if (hovered) {
                // ref.current.color.lerp(new Color("white"), 0.1); // Instance coloring requires manipulating the color attribute
            }
        }
    });

    return (
        <Instance
            ref={ref}
            color={hovered ? "orange" : color}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        />
    );
}
