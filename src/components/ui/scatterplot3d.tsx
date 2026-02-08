import React, { useMemo, useRef, useState } from "react";
import { Instances, Instance } from "@react-three/drei";
import { Color, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export interface ScatterPoint {
    x: number;
    y: number;
    z: number;
    size?: number;
    color?: string;
    label?: string; // Optional label
}

export interface ScatterPlot3DProps {
    data: ScatterPoint[];
    pointSize?: number;
    colorScale?: string[]; // e.g. ["#22d3ee", "#a78bfa"]
}

export function ScatterPlot3D({
    data,
    pointSize = 0.1,
    colorScale = ["#22d3ee", "#a78bfa"],
}: ScatterPlot3DProps) {

    return (
        <group>
            <Instances range={data.length}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial />

                {data.map((point, i) => (
                    <ScatterPointInstance
                        key={i}
                        position={[point.x, point.y, point.z]}
                        scale={point.size || pointSize}
                        color={point.color || colorScale[i % colorScale.length]}
                    />
                ))}
            </Instances>

            {/* Axes */}
            <axesHelper args={[10]} />
            <gridHelper args={[20, 20]} position={[0, -5, 0]} />
        </group>
    );
}

function ScatterPointInstance({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) {
    const ref = useRef<any>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (ref.current) {
            const s = hovered ? scale * 1.5 : scale;
            // Correct lerp using Vector3
            const target = new Vector3(s, s, s);
            ref.current.scale.lerp(target, 0.1);
        }
    });

    return (
        <Instance
            ref={ref}
            position={position}
            scale={scale}
            color={hovered ? "white" : color}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        />
    );
}
