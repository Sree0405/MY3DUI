import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, BufferAttribute } from "three";

export interface ParticlesProps {
    count?: number;
    size?: number;
    color?: string;
    speed?: number;
}

export function Particles({
    count = 1000,
    size = 0.03,
    color = "#a78bfa",
    speed = 0.1,
}: ParticlesProps) {
    const points = useRef<any>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Random usage
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    useFrame((state, delta) => {
        if (points.current) {
            // Simple rotation or movement
            points.current.rotation.y += delta * speed;
            // Maybe wave movement?
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={size}
                color={color}
                transparent
                depthWrite={false}
                blending={AdditiveBlending}
                sizeAttenuation
            />
        </points>
    );
}
