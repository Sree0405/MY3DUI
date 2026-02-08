import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export interface Spinner3DProps {
    size?: "sm" | "md" | "lg";
    color?: string;
    speed?: number;
}

export function Spinner3D({
    size = "md",
    color = "#22d3ee",
    speed = 1,
}: Spinner3DProps) {
    const ref = useRef<any>(null);

    const scale = size === "sm" ? 0.5 : size === "lg" ? 1.5 : 1;

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z -= delta * speed * 3;
            ref.current.rotation.x -= delta * speed * 1;
        }
    });

    return (
        <group ref={ref} scale={[scale, scale, scale]}>
            {/* Ring 1 */}
            <mesh rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[0.5, 0.05, 16, 32]} />
                <meshStandardMaterial color={color} emissive={color} />
            </mesh>
            {/* Ring 2 */}
            <mesh rotation={[-Math.PI / 4, 0, 0]}>
                <torusGeometry args={[0.4, 0.05, 16, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </group>
    );
}
