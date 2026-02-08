import React, { Suspense } from "react";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export interface ImagePlaneProps {
    src: string;
    width?: number;
    height?: number;
    opacity?: number;
    transparent?: boolean;
    parallax?: boolean; // Placeholder for parallax logic if needed later
}

export function ImagePlane({
    src,
    width = 3,
    height, // if undefined, will infer
    opacity = 1,
    transparent = true,
    parallax = false,
}: ImagePlaneProps) {
    return (
        <Suspense fallback={<mesh><planeGeometry args={[width, width]} /><meshBasicMaterial wireframe color="gray" /></mesh>}>
            <ImageMesh
                src={src}
                width={width}
                height={height}
                opacity={opacity}
                transparent={transparent}
                parallax={parallax}
            />
        </Suspense>
    );
}

function ImageMesh({ src, width, height, opacity, transparent }: ImagePlaneProps) {
    const texture = useTexture(src);

    // Aspect ratio
    const aspect = texture.image ? texture.image.width / texture.image.height : 1;
    const h = height || width / aspect;

    return (
        <mesh>
            <planeGeometry args={[width, h]} />
            <meshBasicMaterial
                map={texture}
                transparent={transparent}
                opacity={opacity}
                side={DoubleSide}
                toneMapped={false}
            />
        </mesh>
    );
}
