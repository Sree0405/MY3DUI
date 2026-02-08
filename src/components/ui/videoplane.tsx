import React, { Suspense } from "react";
import { useVideoTexture } from "@react-three/drei";

export interface VideoPlaneProps {
    src: string;
    width?: number;
    height?: number; // Optional, calculated from aspect usually
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    opacity?: number;
    side?: "front" | "back" | "double";
}

export function VideoPlane({
    src,
    width = 4,
    height,
    autoPlay = true,
    loop = true,
    muted = true,
    opacity = 1,
    side = "double"
}: VideoPlaneProps) {
    return (
        <Suspense fallback={<mesh><planeGeometry args={[width, width * 0.56]} /><meshBasicMaterial color="gray" wireframe /></mesh>}>
            <VideoPlaneContent
                src={src}
                width={width}
                height={height}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                opacity={opacity}
                side={side}
            />
        </Suspense>
    );
}

function VideoPlaneContent({ src, width, height, autoPlay, loop, muted, opacity, side }: VideoPlaneProps) {
    const texture = useVideoTexture(src, {
        unsuspend: "canplay",
        muted: muted,
        loop: loop,
        start: autoPlay,
        crossOrigin: "Anonymous",
    });

    // Calculate generic aspect ratio if height not provided
    const aspect = texture.image ? texture.image.videoWidth / texture.image.videoHeight : 16 / 9;
    const planeHeight = height || width / aspect;

    return (
        <mesh>
            <planeGeometry args={[width, planeHeight]} />
            <meshBasicMaterial
                map={texture}
                toneMapped={false}
                transparent={opacity < 1}
                opacity={opacity}
                side={side === "double" ? 2 : side === "back" ? 1 : 0}
            />
        </mesh>
    );
}
