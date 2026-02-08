import React from "react";

export interface FogProps {
    color?: string;
    near?: number;
    far?: number;
    density?: number; // For exp2 fog if preferred, but Registry implies linear by default props (near/far)
    type?: "linear" | "exponential";
}

export function Fog({
    color = "#000",
    near = 5,
    far = 30,
    type = "linear",
    density = 0.02,
}: FogProps) {
    if (type === "exponential") {
        return <fogExp2 attach="fog" args={[color, density]} />;
    }
    return <fog attach="fog" args={[color, near, far]} />;
}
