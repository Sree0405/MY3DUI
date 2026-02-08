import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Reflection } from "@/components/ui/reflection";
import { Button3D } from "@/components/ui/button3d";

export default function ReflectionDemo() {
    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden bg-black relative">
            <Canvas camera={{ position: [0, 2, 6] }}>
                <color attach="background" args={['#101010']} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                <group position={[0, 0.5, 0]}>
                    <Button3D position={[0, 0, 0]}>Reflected Button</Button3D>
                </group>

                {/* Floor Reflection */}
                <Reflection />

                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
}
