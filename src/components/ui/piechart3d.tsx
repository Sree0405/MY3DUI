import React, { useMemo, useState } from "react";
import { Shape } from "three";
// React Spring removed (not in dependencies)
import { useFrame } from "@react-three/fiber";
// I should use useFrame for manual animation or pure CSS/HTML for overlays?
// But 3D pie explosion needs 3D transform.
// I'll use manual lerp in useFrame for "explode" effect.


import { Text } from "@react-three/drei";

export interface PieData {
    label: string;
    value: number;
    color?: string;
}

export interface PieChart3DProps {
    data: PieData[];
    radius?: number;
    depth?: number;
    explode?: boolean;
    donut?: boolean;
}

export function PieChart3D({
    data,
    radius = 5,
    depth = 1,
    explode = true,
    donut = false,
}: PieChart3DProps) {
    const total = useMemo(() => data.reduce((acc, cur) => acc + cur.value, 0), [data]);

    let startAngle = 0;

    return (
        <group rotation={[-Math.PI / 2, 0, 0]}> {/* Rotate to face camera if top-down, or adjust scene */}
            {data.map((item, index) => {
                const percent = item.value / total;
                const angle = percent * Math.PI * 2;
                const endAngle = startAngle + angle;

                const props = {
                    startAngle,
                    endAngle,
                    radius,
                    color: item.color || `hsl(${(index / data.length) * 360}, 70%, 50%)`,
                    depth,
                    explode,
                    innerRadius: donut ? radius * 0.5 : 0,
                };

                startAngle = endAngle;

                return <PieSegment key={index} {...props} label={item.label} />;
            })}
        </group>
    );
}

function PieSegment({ startAngle, endAngle, radius, color, depth, explode, innerRadius, label }: any) {
    const shape = useMemo(() => {
        const s = new Shape();
        if (innerRadius > 0) {
            // Donut shape - complex to do with simple MoveTo/Arc?
            // Easier: Arc outer, then Arc inner (hole).
            // Actually THREE.Shape supports holes.
            s.moveTo(Math.cos(startAngle) * radius, Math.sin(startAngle) * radius);
            s.absarc(0, 0, radius, startAngle, endAngle, false);
            // Hole
            const hole = new Shape();
            hole.absarc(0, 0, innerRadius, startAngle, endAngle, false);
            s.holes.push(hole);
        } else {
            s.moveTo(0, 0);
            s.arc(0, 0, radius, startAngle, endAngle, false);
            s.lineTo(0, 0);
        }
        return s;
    }, [startAngle, endAngle, radius, innerRadius]);

    const [hovered, setHover] = useState(false);
    const ref = React.useRef<any>(null);

    // Direction to explode
    const midAngle = (startAngle + endAngle) / 2;
    const explodeDir = [Math.cos(midAngle), Math.sin(midAngle), 0];

    useFrame((state, delta) => {
        if (ref.current && explode) {
            const targetDist = hovered ? 0.5 : 0;
            ref.current.position.x += (explodeDir[0] * targetDist - ref.current.position.x) * delta * 5;
            ref.current.position.y += (explodeDir[1] * targetDist - ref.current.position.y) * delta * 5;
        }
    });

    return (
        <group ref={ref}>
            <mesh
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <extrudeGeometry args={[shape, { depth: depth, bevelEnabled: false }]} />
                <meshStandardMaterial color={hovered ? "white" : color} />
            </mesh>
            {/* Label at center of segment */}
            {hovered && (
                <Text
                    position={[explodeDir[0] * radius * 0.8, explodeDir[1] * radius * 0.8, depth + 0.1]}
                    fontSize={0.5}
                    color="black"
                >
                    {label}
                </Text>
            )}
        </group>
    );
}
