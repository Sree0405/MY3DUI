import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { ImagePlane } from "./imageplane";
import { Group } from "three";

export interface GalleryImage {
    src: string;
    alt: string;
}

export interface Gallery3DProps {
    images: GalleryImage[];
    layout?: "carousel" | "grid" | "wall";
    radius?: number; // For carousel
    gap?: number;
}

export function Gallery3D({
    images,
    layout = "carousel",
    radius = 5,
    gap = 1.5,
}: Gallery3DProps) {

    const ref = useRef<Group>(null);

    useFrame((state, delta) => {
        if (ref.current && layout === "carousel") {
            // Slowly rotate whole carousel? Or allow user interaction?
            // Basic auto-rotate for wow factor
            ref.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group ref={ref}>
            {images.map((img, i) => {
                let position: [number, number, number] = [0, 0, 0];
                let rotation: [number, number, number] = [0, 0, 0];

                if (layout === "carousel") {
                    const angle = (i / images.length) * Math.PI * 2;
                    position = [
                        Math.cos(angle) * radius,
                        0,
                        Math.sin(angle) * radius
                    ];
                    rotation = [0, -angle + Math.PI / 2, 0]; // Face center? No, face outwards usually. -angle + PI/2 makes it tangent?
                    // To face center (inwards): -angle - PI/2
                    // To face outwards: -angle + PI/2
                    // Let's face *inwards* for a surrounding view, or *outwards* for a pillar view.
                    // Usually carousel assumes camera at center or outside?
                    // Registry: "Carousel... lightbox... smooth transitions".
                    // Assuming camera is outside looking at it spinning.
                    rotation = [0, -angle, 0]; // Face outwards
                } else if (layout === "grid") {
                    const cols = 3;
                    const x = (i % cols) * (3 + gap) - ((cols * 3) / 2);
                    const y = -Math.floor(i / cols) * (2 + gap);
                    position = [x, y, 0];
                }

                return (
                    <group key={i} position={position} rotation={rotation}>
                        <ImagePlane src={img.src} width={3} opacity={0.9} />
                        {/* Could add frame or title */}
                    </group>
                );
            })}
        </group>
    );
}
