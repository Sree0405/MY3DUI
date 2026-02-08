import React, { ReactNode, Children, useRef, useMemo } from "react";
import { Group } from "three";

export interface Container3DProps {
    children: ReactNode;
    direction?: "row" | "column" | "grid";
    gap?: number;
    align?: "start" | "center" | "end";
}

export function Container3D({
    children,
    direction = "row",
    gap = 1,
    align = "center",
}: Container3DProps) {
    const groupRef = useRef<Group>(null);

    // Convert children to array
    const childArray = Children.toArray(children);
    const count = childArray.length;

    // Calculate layout positions
    const positions = useMemo(() => {
        const pos: [number, number, number][] = [];

        // Grid dimensions
        const cols = Math.ceil(Math.sqrt(count));

        // Total dimensions for centering
        let totalWidth = 0;
        let totalHeight = 0;

        if (direction === "row") {
            totalWidth = (count - 1) * gap;
        } else if (direction === "column") {
            totalHeight = (count - 1) * gap;
        } else if (direction === "grid") {
            totalWidth = (cols - 1) * gap;
            totalHeight = (Math.ceil(count / cols) - 1) * gap;
        }

        // Offset to start position based on alignment
        const startX = align === "center" ? -totalWidth / 2 : align === "end" ? -totalWidth : 0;
        const startY = align === "center" ? totalHeight / 2 : align === "end" ? totalHeight : 0; // Note: Y usually goes up in 3D

        for (let i = 0; i < count; i++) {
            let x = 0;
            let y = 0;
            let z = 0;

            if (direction === "row") {
                x = startX + i * gap;
            } else if (direction === "column") {
                y = startY - i * gap; // Downwards for list logic usually, but 3D is variable. Assuming top-down similar to DOM
            } else if (direction === "grid") {
                const col = i % cols;
                const row = Math.floor(i / cols);
                x = startX + col * gap;
                y = startY - row * gap;
            }

            pos.push([x, y, z]);
        }
        return pos;
    }, [count, direction, gap, align]);

    return (
        <group ref={groupRef}>
            {childArray.map((child, index) => (
                <group key={index} position={positions[index]}>
                    {child}
                </group>
            ))}
        </group>
    );
}
