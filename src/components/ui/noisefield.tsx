import React, { useMemo } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NoiseMaterial = shaderMaterial(
    { time: 0, scale: 1.0, color: new THREE.Color(0.2, 0.5, 1.0) },
    // Vertex
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment (Simple noise-like pattern via sine waves)
    `
    uniform float time;
    uniform float scale;
    uniform vec3 color;
    varying vec2 vUv;

    // Pseudo-random
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    void main() {
      float noise = rand(vUv * scale + time * 0.1);
      gl_FragColor = vec4(color * noise, 1.0);
    }
  `
);

extend({ NoiseMaterial });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            noiseMaterial: any;
        }
    }
}

export interface NoiseFieldProps {
    scale?: number;
    speed?: number;
    mode?: "displacement" | "color";
}

export function NoiseField({ scale = 1, speed = 0.5, mode = "color" }: NoiseFieldProps) {
    const material = useMemo(() => new NoiseMaterial(), []);

    useFrame((state, delta) => {
        if (material) {
            (material as any).time += delta * speed;
            (material as any).scale = scale;
        }
    });

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 10, 64, 64]} />
            {/* Attach custom material */}
            <primitive object={material} attach="material" />
        </mesh>
    );
}
