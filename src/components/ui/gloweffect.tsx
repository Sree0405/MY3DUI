import React, { Children, cloneElement, ReactElement } from "react";
import * as THREE from "three";

export interface GlowEffectProps {
    children: ReactElement; // Expect a single child mesh
    color?: string;
    intensity?: number;
    scale?: number;
}

export function GlowEffect({
    children,
    color = "#22d3ee",
    intensity = 1,
    scale = 1.2,
}: GlowEffectProps) {

    // Create a glow copy
    // Needs geometry from child. 
    // Since we can't easily extract geometry from ReactNode, we rely on the child being a mesh where we can attach a second material?
    // Or render a second copy of the child with a different material?
    // If child is <mesh><boxGeometry /></mesh>, rendering it again works.

    const glowMaterial = React.useMemo(() => {
        return new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.3 * intensity,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide, // Outline effect often uses BackSide with scaled mesh
        });
    }, [color, intensity]);

    return (
        <group>
            {/* Original Object */}
            {children}

            {/* Glow Shell */}
            <group scale={[scale, scale, scale]}>
                {/* We assume children is a mesh or contains geometry we want to glow. 
            Direct cloning of React Element might not clone the geometry if it's instanced inside.
            But for <mesh><boxGeometry/></mesh> it creates a new mesh with new geometry instance (or same args).
            However, we need to OVERRIDE the material.
        */}
                {Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return cloneElement(child as ReactElement<any>, {
                            material: glowMaterial,
                        });
                    }
                    return child;
                })}
            </group>
        </group>
    );
}
