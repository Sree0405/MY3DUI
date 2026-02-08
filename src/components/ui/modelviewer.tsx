import React, { Suspense, useRef } from "react";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export interface ModelViewerProps {
    src: string;
    autoRotate?: boolean;
    scale?: number;
    environment?: string; // HDRI preset
    position?: [number, number, number];
}

export function ModelViewer({
    src,
    autoRotate = true,
    scale = 1,
    environment = "studio",
    position = [0, 0, 0],
}: ModelViewerProps) {
    return (
        <group position={position}>
            <Suspense fallback={null}>
                <Model src={src} scale={scale} autoRotate={autoRotate} />
                <Environment preset={environment as any} />
            </Suspense>
        </group>
    );
}

function Model({ src, scale, autoRotate }: { src: string; scale: number; autoRotate: boolean }) {
    const { scene } = useGLTF(src);
    const ref = useRef<any>(null);

    useFrame((state, delta) => {
        if (ref.current && autoRotate) {
            ref.current.rotation.y += delta * 0.5;
        }
    });

    return <primitive object={scene} scale={scale} ref={ref} />;
}
