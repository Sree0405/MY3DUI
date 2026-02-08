import React, { useState } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

export interface NavBarItem {
    label: string;
    href: string;
}

export interface NavBar3DProps {
    items: NavBarItem[];
    activeHref?: string;
}

export function NavBar3D({ items, activeHref = "/" }: NavBar3DProps) {
    // Simple floating bar
    return (
        <group position={[0, -2, 0]}>
            {/* Background Bar */}
            <mesh position={[0, 0, -0.1]}>
                <boxGeometry args={[items.length * 2, 1, 0.2]} />
                <meshStandardMaterial color="#1a1a1a" transparent opacity={0.8} />
            </mesh>

            {/* Items */}
            {items.map((item, i) => {
                const x = (i - (items.length - 1) / 2) * 2;
                const isActive = activeHref === item.href;

                return (
                    <NavBarItemMesh key={i} item={item} x={x} isActive={isActive} />
                );
            })}
        </group>
    );
}

function NavBarItemMesh({ item, x, isActive }: { item: NavBarItem; x: number; isActive: boolean }) {
    const [hovered, setHover] = useState(false);

    return (
        <group position={[x, 0, 0]}>
            <mesh
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={() => window.location.href = item.href} // Rudimentary nav
            >
                <planeGeometry args={[1.8, 0.8]} />
                <meshStandardMaterial color={isActive ? "#22d3ee" : hovered ? "#333" : "transparent"} transparent opacity={isActive ? 0.3 : hovered ? 0.5 : 0} />
            </mesh>
            <Text
                fontSize={0.2}
                color={isActive || hovered ? "white" : "#888"}
                anchorX="center"
                anchorY="middle"
            >
                {item.label}
            </Text>
        </group>
    );
}
