import React from "react";
import DemoStage from "./DemoStage";
import { Gallery3D } from "@sreedev/my3dui";

export default function Gallery3DDemo() {
    // Using placeholder images
    const images = [
        { src: "https://picsum.photos/seed/1/400/400", alt: "Img 1" },
        { src: "https://picsum.photos/seed/2/400/400", alt: "Img 2" },
        { src: "https://picsum.photos/seed/3/400/400", alt: "Img 3" },
        { src: "https://picsum.photos/seed/4/400/400", alt: "Img 4" },
        { src: "https://picsum.photos/seed/5/400/400", alt: "Img 5" },
        { src: "https://picsum.photos/seed/6/400/400", alt: "Img 6" },
    ];

    return (
        <DemoStage cameraPosition={[0, 5, 10]}>
            <Gallery3D images={images} radius={6} layout="carousel" />
        </DemoStage>
    );
}
