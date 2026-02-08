import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Bloom } from "@/components/ui/bloom";
import { Button3D } from "@/components/ui/button3d";

// Bloom needs specific setup, using custom Stage here essentially or DemoStage might interfere with effects if not careful?
// DemoStage puts children in Stage. EffectComposer usually needs to be outside or at top level.
// Let's try putting it inside.

export default function BloomDemo() {
    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden bg-black relative">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                <group>
                    <Button3D position={[-2, 0, 0]} variant="default">Glow</Button3D>

                    {/* Emissive Mesh */}
                    <mesh position={[2, 0, 0]}>
                        <boxGeometry />
                        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={4} />
                    </mesh>
                </group>

                <Bloom intensity={1.5} radius={0.5} threshold={1} />
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
}
