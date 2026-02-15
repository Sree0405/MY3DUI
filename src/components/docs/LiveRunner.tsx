import {
  LiveProvider,
  LiveEditor,
  LivePreview,
  LiveError,
} from "react-live";

import * as React from "react";
import { Suspense } from "react";

import * as My3DUI from "@sreedev/my3dui";
import * as Drei from "@react-three/drei";
import * as Fiber from "@react-three/fiber";

import { Canvas } from "@react-three/fiber";


const scope = {
  React,
  Suspense,

  ...My3DUI,
  ...Drei,
  ...Fiber,

  Canvas,
};


/* ---------------------------------------------
   Utils
--------------------------------------------- */

function needsCanvas(code: string) {
  return (
    code.includes("<mesh") ||
    code.includes("<Stage") ||
    code.includes("three") ||
    code.includes("useFrame")
  );
}

function wrapWithCanvas(code: string) {
  return `
() => (
  <Canvas
    camera={{ position: [3, 3, 3], fov: 50 }}
    shadows
  >
    <Suspense fallback={null}>
      ${code}
    </Suspense>
  </Canvas>
)
`;
}

/* ---------------------------------------------
   Types
--------------------------------------------- */

type Props = {
  code: string;
  children: React.ReactNode;
};

/* ---------------------------------------------
   Provider
--------------------------------------------- */

export default function LiveRunner({ code, children }: Props) {

  const finalCode = needsCanvas(code)
    ? wrapWithCanvas(code)
    : code;

  return (
    <LiveProvider
      code={finalCode}
      scope={scope}
    >
      <div className="h-full flex flex-col">
        {children}
      </div>
    </LiveProvider>
  );
}

/* ---------------------------------------------
   Helpers
--------------------------------------------- */

export function LiveCodeEditor() {
  return (
    <div className="h-full overflow-auto border border-border/40 rounded-lg">
      <LiveEditor className="text-xs font-mono bg-card p-3" />
    </div>
  );
}

export function LivePreviewPane() {
  return (
    <div className="flex-1 bg-black/60 rounded-xl p-4">
      <LivePreview />
      <LiveError className="text-red-400 text-xs mt-2 font-mono" />
    </div>
  );
}
