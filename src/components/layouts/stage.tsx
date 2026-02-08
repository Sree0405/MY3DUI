import { ReactNode, useMemo } from "react";
import { Environment } from "@react-three/drei";

/* ---------------------------------------------
   Types
--------------------------------------------- */

export type StagePreset =
  | "rembrandt"
  | "portrait"
  | "upfront"
  | "soft";

export interface StageProps {
  children: ReactNode;

  preset?: StagePreset;

  intensity?: number;

  environment?: string;

  shadows?: boolean;
}

/* ---------------------------------------------
   Light Presets
--------------------------------------------- */

function getPresetLights(preset: StagePreset) {
  switch (preset) {
    case "portrait":
      return [
        { pos: [2, 3, 4], intensity: 1 },
        { pos: [-2, 2, 3], intensity: 0.5 },
      ];

    case "upfront":
      return [
        { pos: [0, 4, 4], intensity: 1.2 },
        { pos: [0, -2, -4], intensity: 0.4 },
      ];

    case "soft":
      return [
        { pos: [3, 3, 3], intensity: 0.6 },
        { pos: [-3, 2, 1], intensity: 0.4 },
      ];

    case "rembrandt":
    default:
      return [
        { pos: [4, 4, 4], intensity: 1 },
        { pos: [-4, 2, 1], intensity: 0.5 },
      ];
  }
}

/* ---------------------------------------------
   Stage Component
--------------------------------------------- */

export function Stage({
  children,

  preset = "rembrandt",

  intensity = 0.5,

  environment = "city",

  shadows = true,
}: StageProps) {

  /* Memoize lights (performance) */
  const lights = useMemo(
    () => getPresetLights(preset),
    [preset],
  );
  return (
    <group>

      {/* Ambient Base */}
      <ambientLight intensity={intensity * 0.5} />

      {/* Directional Lights */}
      {lights.map((light, i) => (
        <directionalLight
          key={i}
          position={light.pos as [number, number, number]}
          intensity={light.intensity * intensity}
          castShadow={shadows}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      ))}

      {/* HDRI Environment */}
      {environment && (
        <Environment preset={environment as any} />
      )}

      {/* Scene Content */}
      <group>{children}</group>

    </group>
  );
}
