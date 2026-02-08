import React, { useMemo } from "react";
import { Grid } from "@react-three/drei";

export interface Grid3DProps {
    cellSize?: number;
    cellColor?: string;
    fadeDistance?: number;
    infiniteGrid?: boolean;
}

export function Grid3D({
    cellSize = 1,
    cellColor = "#6f6f6f",
    fadeDistance = 50,
    infiniteGrid = true,
}: Grid3DProps) {
    // Config for Grid from drei
    const config = useMemo(() => ({
        cellSize: cellSize,
        cellThickness: 0.5,
        cellColor: cellColor,
        sectionSize: useMemo(() => cellSize * 10, [cellSize]),
        sectionThickness: 1,
        sectionColor: cellColor,
        fadeDistance: fadeDistance,
        fadeStrength: 1,
        followCamera: infiniteGrid,
        infiniteGrid: infiniteGrid,
    }), [cellSize, cellColor, fadeDistance, infiniteGrid]);

    return (
        <Grid
            position={[0, -0.01, 0]}
            args={[10.5, 10.5]}
            {...config}
        />
    );
}
