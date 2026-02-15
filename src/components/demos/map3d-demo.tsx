import React from "react";
import DemoStage from "./DemoStage";
import { Map3D } from "@sreedev/my3dui";

export default function Map3DDemo() {
    const markers = [
        { lat: 40.7128, lng: -74.0060, label: "NYC", color: "#22d3ee" }, // New York
        { lat: 51.5074, lng: -0.1278, label: "London", color: "#f472b6" }, // London
        { lat: 35.6762, lng: 139.6503, label: "Tokyo", color: "#a78bfa" }, // Tokyo
    ];

    return (
        <DemoStage cameraPosition={[0, 0, 12]}>
            <Map3D markers={markers} radius={5} />
        </DemoStage>
    );
}
