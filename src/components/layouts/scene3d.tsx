import React, { ReactNode } from "react";
import { Color } from "three";

export interface Scene3DProps {
    children: ReactNode;
    className?: string;
    background?: string;
    fog?: boolean;
}

export function Scene3D({
    children,
    className, // className is unused in R3F scene structure usually, but kept for API consistency
    background = "transparent",
    fog = false,
}: Scene3DProps) {
    return (
        <group>
            {background && background !== "transparent" && (
                <color attach="background" args={[background]} />
            )}
            {fog && <fog attach="fog" args={["#000", 5, 30]} />}

            {/* Default Camera and Lights if needed, but Scene3D is described as minimal. 
          The registry says "provides basic lighting and a camera without opinionated presets".
      */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} castShadow />

            {children}
        </group>
    );
}
