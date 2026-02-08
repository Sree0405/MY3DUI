import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import { Stage } from "@/components/layouts/stage";

export default function StageDemo() {
  return (
    <div className="w-full h-full bg-black/40">

      <Canvas
        camera={{ position: [3, 3, 3], fov: 50 }}
        shadows
      >

        <Suspense fallback={null}>

          {/* My3DUI Stage */}
          <Stage
            preset="rembrandt"
            intensity={0.7}
            environment="city"
            shadows
          >

            {/* Controls */}
            <OrbitControls enableZoom />

            {/* Demo Object */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#22d3ee" />
            </mesh>

            {/* Ground */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, 0]}
              receiveShadow
            >
              <planeGeometry args={[20, 20]} />
              <shadowMaterial opacity={0.3} />
            </mesh>

          </Stage>

        </Suspense>

      </Canvas>

    </div>
  );
}
