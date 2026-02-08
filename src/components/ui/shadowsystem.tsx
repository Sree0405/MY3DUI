import React from "react";
import { SoftShadows } from "@react-three/drei";

export interface ShadowSystemProps {
    type?: "basic" | "soft" | "contact"; // Contact shadows not implemented in basic wrapper, using SoftShadows for 'soft'
    bias?: number;
    mapSize?: number; // Not used by SoftShadows but relevant if we were configuring lights directly
}

export function ShadowSystem({ type = "soft", bias = -0.0001, mapSize = 1024 }: ShadowSystemProps) {
    if (type === "soft") {
        return <SoftShadows />;
    }

    // For basic or contact, we might need other logic.
    // Three.js shadows are enabled on Canvas (<Canvas shadows>).
    // This component mainly configures SoftShadows.
    // ContactShadows is a separate component in Drei.

    if (type === "contact") {
        // We should probably import ContactShadows from Drei if we want to support it
        // But for now, returning null or SoftShadows as fallback
        return null;
    }

    return null; // Basic is default
}
