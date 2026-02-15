import React, { lazy } from "react";

export const demoRegistry: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  // UI
  button3d: lazy(() => import("@/components/demos/button3d-demo")),
  card3d: lazy(() => import("@/components/demos/card3d-demo")),
  modal3d: lazy(() => import("@/components/demos/modal3d-demo")),
  menu3d: lazy(() => import("@/components/demos/menu3d-demo")),
  tooltip3d: lazy(() => import("@/components/demos/tooltip3d-demo")),
  slider3d: lazy(() => import("@/components/demos/slider3d-demo")),
  toggle3d: lazy(() => import("@/components/demos/toggle3d-demo")),
  badge3d: lazy(() => import("@/components/demos/badge3d-demo")),
  input3d: lazy(() => import("@/components/demos/input3d-demo")),
  select3d: lazy(() => import("@/components/demos/select3d-demo")),
  tabs3d: lazy(() => import("@/components/demos/tabs3d-demo")),
  accordion3d: lazy(() => import("@/components/demos/accordion3d-demo")),

  // Layouts
  grid3d: lazy(() => import("@/components/demos/grid3d-demo")),
  container3d: lazy(() => import("@/components/demos/container3d-demo")),

  // Data
  barchart3d: lazy(() => import("@/components/demos/barchart3d-demo")),
  linechart3d: lazy(() => import("@/components/demos/linechart3d-demo")),
  piechart3d: lazy(() => import("@/components/demos/piechart3d-demo")),
  scatterplot3d: lazy(() => import("@/components/demos/scatterplot3d-demo")),
  graph3d: lazy(() => import("@/components/demos/graph3d-demo")),
  map3d: lazy(() => import("@/components/demos/map3d-demo")),
  timeline3d: lazy(() => import("@/components/demos/timeline3d-demo")),

  // Media
  gallery3d: lazy(() => import("@/components/demos/gallery3d-demo")),
  modelviewer: lazy(() => import("@/components/demos/modelviewer-demo")),
  videoplane: lazy(() => import("@/components/demos/videoplane-demo")),
  imageplane: lazy(() => import("@/components/demos/imageplane-demo")),
  audiovisualizer: lazy(() => import("@/components/demos/audiovisualizer-demo")),

  // Effects
  particles: lazy(() => import("@/components/demos/particles-demo")),
  bloom: lazy(() => import("@/components/demos/bloom-demo")),
  fog: lazy(() => import("@/components/demos/fog-demo")),
  shadowsystem: lazy(() => import("@/components/demos/shadowsystem-demo")),
  gloweffect: lazy(() => import("@/components/demos/gloweffect-demo")),
  waveeffect: lazy(() => import("@/components/demos/waveeffect-demo")),
  noisefield: lazy(() => import("@/components/demos/noisefield-demo")),

  // Navigation
  stepper3d: lazy(() => import("@/components/demos/stepper3d-demo")),
  navbar3d: lazy(() => import("@/components/demos/navbar3d-demo")),

  // Feedback
  spinner3d: lazy(() => import("@/components/demos/spinner3d-demo")),
};
