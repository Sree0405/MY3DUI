import React, { useMemo } from "react";
import { Line } from "@react-three/drei";
import { Vector3, CatmullRomCurve3 } from "three";

export interface LineChartData {
    x: number;
    y: number;
}

export interface LineChart3DProps {
    data: LineChartData[];
    smooth?: boolean; // Use spline interpolation
    color?: string;
    lineWidth?: number;
    showPoints?: boolean;
}

export function LineChart3D({
    data,
    smooth = true,
    color = "#22d3ee",
    lineWidth = 3,
    showPoints = true,
}: LineChart3DProps) {

    const points = useMemo(() => {
        // Normalize data? Assuming raw coords for now or normalized 0-10 range
        // If x is index, just map to space
        if (data.length === 0) return [];

        // Normalize logic could go here if needed. 
        // For now assuming data fits in 10x5 space.
        const maxX = Math.max(...data.map(d => d.x));
        const maxY = Math.max(...data.map(d => d.y));

        return data.map(d => new Vector3(
            (d.x / (maxX || 1)) * 10 - 5, // Center X
            (d.y / (maxY || 1)) * 5,      // Y up
            0
        ));
    }, [data]);

    const curve = useMemo(() => {
        if (points.length < 2 || !smooth) return null;
        return new CatmullRomCurve3(points);
    }, [points, smooth]);

    return (
        <group>
            {/* Line */}
            {smooth && curve ? (
                // Render curve
                <mesh>
                    <tubeGeometry args={[curve, 64, 0.05, 8, false]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
                </mesh>
            ) : (
                <Line
                    points={points}
                    color={color}
                    lineWidth={lineWidth}
                    segments
                />
            )}

            {/* Points */}
            {showPoints && points.map((p, i) => (
                <mesh key={i} position={p}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            ))}

            {/* Optional: Area Fill (complex to do generic, skipping for MVP) */}

            {/* Grid */}
            <gridHelper args={[12, 12]} rotation={[Math.PI / 2, 0, 0]} position={[0, 2.5, -0.1]} />
        </group>
    );
}
