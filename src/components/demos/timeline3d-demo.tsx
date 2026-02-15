import React from "react";
import DemoStage from "./DemoStage";
import { Timeline3D } from "@sreedev/my3dui";

export default function Timeline3DDemo() {
    const events = [
        { date: "2021", title: "Inception" },
        { date: "2022", title: "Launch" },
        { date: "2023", title: "Growth" },
        { date: "2024", title: "Scale" },
    ];

    return (
        <DemoStage cameraPosition={[0, 0, 8]}>
            <Timeline3D events={events} gap={3} orientation="horizontal" />
        </DemoStage>
    );
}
