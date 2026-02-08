import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

export interface ReflectionProps {
    blur?: [number, number];
    opacity?: number;
    resolution?: number;
    color?: string;
}

export function Reflection({
    blur = [300, 100],
    opacity = 0.5,
    resolution = 512,
    color = "#101010",
}: ReflectionProps) {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={blur}
                resolution={resolution}
                mixBlur={1}
                mixStrength={opacity * 10} // Empirically, mixStrength needs to be higher to see reflection clearly sometimes
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color={color}
                metalness={0.5}
                mirror={1} // 1 = perfect mirror
            />
        </mesh>
    );
}
