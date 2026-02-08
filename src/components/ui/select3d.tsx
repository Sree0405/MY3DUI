import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { cn } from "@/lib/utils";

export interface Select3DOption {
    label: string;
    value: string;
}

export interface Select3DProps {
    options: Select3DOption[];
    value?: string;
    onChange?: (val: string) => void;
    width?: number;
}

export function Select3D({
    options,
    value,
    onChange,
    width = 200,
}: Select3DProps) {
    return (
        <Html transform>
            <select
                className={cn(
                    "px-3 py-2 bg-background/80 backdrop-blur border rounded text-foreground outline-none focus:ring-2 focus:ring-primary",
                )}
                style={{ width }}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </Html>
    );
}
