import React, { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { Color, Vector3 } from "three";

export interface MapMarker {
    lat: number;
    lng: number;
    label?: string;
    color?: string;
}

export interface Map3DProps {
    markers?: MapMarker[];
    radius?: number;
    textureSrc?: string; // URL for earth map
}

export function Map3D({
    markers = [],
    radius = 5,
    textureSrc = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
}: Map3DProps) {
    // Texture
    // We use a generic default or passed one
    // Note: useTexture might suspend.
    // We'll wrap in Suspense at usage site or here?
    // R3F components usually suspend.

    const texture = useTexture(textureSrc);

    return (
        <group>
            <mesh>
                <sphereGeometry args={[radius, 64, 64]} />
                <meshStandardMaterial map={texture} metalness={0.1} roughness={0.7} />
            </mesh>

            {markers.map((marker, i) => {
                // Convert Lat/Lng to Vector3
                const phi = (90 - marker.lat) * (Math.PI / 180);
                const theta = (marker.lng + 180) * (Math.PI / 180);

                const x = -(radius * Math.sin(phi) * Math.cos(theta));
                const z = (radius * Math.sin(phi) * Math.sin(theta));
                const y = (radius * Math.cos(phi));

                return (
                    <mesh key={i} position={[x, y, z]}>
                        <sphereGeometry args={[0.1, 16, 16]} />
                        <meshBasicMaterial color={marker.color || "red"} />
                    </mesh>
                );
            })}
        </group>
    );
}
