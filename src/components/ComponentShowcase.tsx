import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Text, MeshDistortMaterial, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

function Button3DDemo() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.scale.lerp(
        new THREE.Vector3(hovered ? 1.1 : 1, hovered ? 1.1 : 1, hovered ? 1.1 : 1),
        0.1
      );
    }
  });

  return (
    <Float speed={2} floatIntensity={0.3}>
      <group>
        <RoundedBox
          ref={ref}
          args={[2.5, 0.8, 0.3]}
          radius={0.15}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={hovered ? "#22d3ee" : "#0e7490"}
            roughness={0.2}
            metalness={0.8}
            emissive={hovered ? "#22d3ee" : "#000"}
            emissiveIntensity={hovered ? 0.3 : 0}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.2]}
          fontSize={0.22}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqUtEw.woff"
        >
          Click Me
        </Text>
      </group>
    </Float>
  );
}

function Card3DDemo() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.3}>
      <group ref={ref}>
        <RoundedBox args={[2.8, 2, 0.15]} radius={0.12} smoothness={4}>
          <meshStandardMaterial
            color="#1a1a2e"
            roughness={0.3}
            metalness={0.5}
            transparent
            opacity={0.9}
          />
        </RoundedBox>
        <mesh position={[0, 0.4, 0.1]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <MeshDistortMaterial color="#22d3ee" distort={0.4} speed={3} roughness={0.2} />
        </mesh>
        <Text
          position={[0, -0.25, 0.1]}
          fontSize={0.18}
          color="#e2e8f0"
          anchorX="center"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqUtEw.woff"
        >
          Card3D
        </Text>
        <Text
          position={[0, -0.55, 0.1]}
          fontSize={0.11}
          color="#64748b"
          anchorX="center"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqUtEw.woff"
        >
          Interactive • Animated • Accessible
        </Text>
      </group>
    </Float>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#a78bfa" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

const components = [
  {
    name: "Button3D",
    description: "Interactive 3D buttons with hover states, focus rings, and haptic feedback support.",
    code: `<Button3D\n  variant="primary"\n  size="lg"\n  onClick={handleClick}\n>\n  Click Me\n</Button3D>`,
    scene: Button3DDemo,
  },
  {
    name: "Card3D",
    description: "Floating 3D cards with depth, shadows, and tilt-on-hover interactions.",
    code: `<Card3D\n  depth={0.15}\n  tilt={true}\n  shadow="lg"\n>\n  <Card3D.Header />\n  <Card3D.Body />\n</Card3D>`,
    scene: Card3DDemo,
  },
  {
    name: "Particles",
    description: "GPU-instanced particle systems with physics simulation and custom emitters.",
    code: `<Particles\n  count={1000}\n  size={0.03}\n  color="#a78bfa"\n  physics="attract"\n  emitter="sphere"\n/>`,
    scene: ParticleField,
  },
];

export default function ComponentShowcase() {
  return (
    <section id="components" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            50+ <span className="text-gradient">3D Components</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From buttons to data visualizations — every component is interactive, animated, and production-ready.
          </p>
        </motion.div>

        <div className="space-y-20">
          {components.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="glass rounded-2xl overflow-hidden aspect-[4/3] border-glow">
                  <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.4} />
                      <pointLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
                      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#a78bfa" />
                      <comp.scene />
                      <Environment preset="night" />
                    </Suspense>
                  </Canvas>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{comp.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{comp.description}</p>
                <div className="glass rounded-xl p-4 border-glow">
                  <pre className="text-sm font-mono text-primary overflow-x-auto">
                    <code>{comp.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
