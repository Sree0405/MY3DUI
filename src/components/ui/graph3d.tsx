import React, { useMemo } from "react";
import { Line, Text } from "@react-three/drei";
import { Vector3 } from "three";

export interface GraphNode {
    id: string;
    label?: string;
    x?: number;
    y?: number;
    z?: number;
    color?: string;
}

export interface GraphEdge {
    source: string;
    target: string;
}

export interface Graph3DProps {
    nodes: GraphNode[];
    edges: GraphEdge[];
    physics?: boolean; // Stub property for API compatibility
}

export function Graph3D({ nodes, edges, physics = false }: Graph3DProps) {
    // Naive layout if no coords provided: Random or Grid
    const positionedNodes = useMemo(() => {
        return nodes.map((node, i) => ({
            ...node,
            vec: new Vector3(
                node.x ?? (Math.random() - 0.5) * 10,
                node.y ?? (Math.random() - 0.5) * 10,
                node.z ?? (Math.random() - 0.5) * 10
            )
        }));
    }, [nodes]);

    // Map for quick lookup
    const nodeMap = useMemo(() => {
        const map = new Map<string, Vector3>();
        positionedNodes.forEach(n => map.set(n.id, n.vec));
        return map;
    }, [positionedNodes]);

    return (
        <group>
            {/* Edges */}
            {edges.map((edge, i) => {
                const start = nodeMap.get(edge.source);
                const end = nodeMap.get(edge.target);
                if (!start || !end) return null;

                return (
                    <Line
                        key={i}
                        points={[start, end]}
                        color="#444"
                        lineWidth={1}
                        transparent
                        opacity={0.5}
                    />
                );
            })}

            {/* Nodes */}
            {positionedNodes.map((node, i) => (
                <group key={i} position={node.vec}>
                    <mesh>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color={node.color || "#22d3ee"} />
                    </mesh>
                    {node.label && (
                        <Text
                            position={[0, 0.3, 0]}
                            fontSize={0.2}
                            color="white"
                        >
                            {node.label}
                        </Text>
                    )}
                </group>
            ))}
        </group>
    );
}
