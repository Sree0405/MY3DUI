import React from "react";
import DemoStage from "./DemoStage";
import { NavBar3D } from "@sreedev/my3dui";

export default function NavBar3DDemo() {
    return (
        <DemoStage>
            <NavBar3D
                items={[
                    { label: "Home", href: "#home" },
                    { label: "Products", href: "#products" },
                    { label: "About", href: "#about" },
                ]}
                activeHref="#products"
            />
        </DemoStage>
    );
}
