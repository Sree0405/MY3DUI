import React, { useMemo } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.5, 1.0) },
    // vertex shader
    `
    varying vec2 vUv;
    uniform float time;
    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.y += sin(pos.x * 2.0 + time) * 0.2;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    // fragment shader
    `
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ WaveMaterial });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            waveMaterial: any;
        }
    }
}

export interface WaveEffectProps {
    children?: React.ReactNode;
    amplitude?: number;
    frequency?: number;
    speed?: number;
}

export function WaveEffect({ children, amplitude = 0.3, frequency = 2, speed = 1 }: WaveEffectProps) {
    const group = React.useRef<THREE.Group>(null);
    const material = useMemo(() => new WaveMaterial(), []);

    useFrame((state, delta) => {
        if (material) {
            (material as any).time += delta * speed;
        }
    });

    React.useEffect(() => {
        if (group.current) {
            group.current.traverse((obj) => {
                if ((obj as THREE.Mesh).isMesh) {
                    (obj as THREE.Mesh).material = material;
                }
            });
        }
    }, [children, material]);

    return (
        <group ref={group}>
            {children}
        </group>
    );
}
