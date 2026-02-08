import React, { useEffect, useRef } from "react";
import { useThree, useFrame, extend, ReactThreeFiber, Object3DNode } from "@react-three/fiber";
import { EffectComposer, RenderPass, UnrealBloomPass } from "three-stdlib";
import { Vector2 } from "three";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

// Global types moved to src/three-elements.d.ts

export interface BloomProps {
    intensity?: number;
    radius?: number;
    threshold?: number;
}

export function Bloom({ intensity = 1.0, radius = 0.4, threshold = 0 }: BloomProps) {
    const { gl, scene, camera, size } = useThree();
    const composer = useRef<EffectComposer>(null);

    useEffect(() => {
        if (composer.current) {
            composer.current.setSize(size.width, size.height);
        }
    }, [size]);

    useFrame(() => {
        if (composer.current) {
            composer.current.render();
        }
    }, 1);

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attach="passes" args={[scene, camera]} />
            <unrealBloomPass attach="passes" args={[new Vector2(size.width, size.height), intensity, radius, threshold]} />
        </effectComposer>
    );
}
