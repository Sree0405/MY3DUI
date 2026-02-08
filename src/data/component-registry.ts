export interface PropDef {
  name: string;
  type: string;
  default: string;
  required: boolean;
  description: string;
}

export interface CodeExample {
  title: string;
  code: string;
}

export type ComponentCategory =
  | "layout"
  | "ui"
  | "data"
  | "media"
  | "effects"
  | "navigation"
  | "feedback"
  | "overlay";

export interface ComponentDef {
  name: string;
  slug: string;
  category: ComponentCategory;
  description: string;
  longDescription: string;
  props: PropDef[];
  codeExamples: CodeExample[];
  tags: string[];
  performanceNotes: string;
  relatedComponents: string[];
  hasLiveDemo: boolean;
}

export const categoryLabels: Record<ComponentCategory, string> = {
  layout: "Layout",
  ui: "UI Elements",
  data: "Data Visualization",
  media: "Media",
  effects: "Effects",
  navigation: "Navigation",
  feedback: "Feedback",
  overlay: "Overlay",
};

export const categoryColors: Record<ComponentCategory, string> = {
  layout: "bg-blue-500/20 text-blue-400",
  ui: "bg-primary/20 text-primary",
  data: "bg-green-500/20 text-green-400",
  media: "bg-purple-500/20 text-purple-400",
  effects: "bg-accent/20 text-accent",
  navigation: "bg-orange-500/20 text-orange-400",
  feedback: "bg-yellow-500/20 text-yellow-400",
  overlay: "bg-pink-500/20 text-pink-400",
};

const sharedLayoutProps: PropDef[] = [
  { name: "children", type: "ReactNode", default: "-", required: true, description: "Child elements to render inside the component." },
  { name: "className", type: "string", default: '""', required: false, description: "Additional CSS classes." },
];

const sharedInteractiveProps: PropDef[] = [
  { name: "onClick", type: "() => void", default: "-", required: false, description: "Click event handler." },
  { name: "disabled", type: "boolean", default: "false", required: false, description: "Whether the component is disabled." },
  { name: "className", type: "string", default: '""', required: false, description: "Additional CSS classes." },
];

export const componentRegistry: ComponentDef[] = [
  // ═══════════════════ LAYOUT (6) ═══════════════════
  {
    name: "Stage",
    slug: "stage",
    category: "layout",
    description: "Pre-configured 3D scene with lighting, camera, and environment.",
    longDescription: "Stage provides a ready-to-use 3D scene environment with configurable lighting rigs, camera presets, and environment maps. It abstracts away boilerplate Canvas setup so you can focus on your 3D content.",
    props: [
      ...sharedLayoutProps,
      { name: "preset", type: '"rembrandt" | "portrait" | "upfront" | "soft"', default: '"rembrandt"', required: false, description: "Lighting preset configuration." },
      { name: "intensity", type: "number", default: "0.5", required: false, description: "Overall light intensity multiplier." },
      { name: "environment", type: "string", default: '"city"', required: false, description: "Environment map preset." },
      { name: "shadows", type: "boolean", default: "true", required: false, description: "Enable shadow rendering." },
    ],
    codeExamples: [
      { title: "Basic Usage", code: `<Stage preset="rembrandt" intensity={0.5}>\n  <mesh>\n    <boxGeometry />\n    <meshStandardMaterial color="orange" />\n  </mesh>\n</Stage>` },
      { title: "With Environment", code: `<Stage\n  preset="soft"\n  environment="sunset"\n  shadows\n>\n  <MyModel />\n</Stage>` },
    ],
    tags: ["ssr-safe", "composable"],
    performanceNotes: "Renders a single pass with optimized shadow maps. Use shadows={false} for +15% FPS on mobile.",
    relatedComponents: ["viewport", "scene3d", "camera-controller"],
    hasLiveDemo: true,
  },
  {
    name: "Viewport",
    slug: "viewport",
    category: "layout",
    description: "Responsive 3D viewport container with aspect ratio control.",
    longDescription: "Viewport wraps a Canvas with responsive sizing, aspect-ratio locks, and optional loading states. It ensures consistent rendering across devices and screen sizes.",
    props: [
      ...sharedLayoutProps,
      { name: "aspect", type: "number", default: "16/9", required: false, description: "Aspect ratio for the viewport." },
      { name: "fallback", type: "ReactNode", default: "null", required: false, description: "Loading fallback while the scene initializes." },
      { name: "dpr", type: "[number, number]", default: "[1, 2]", required: false, description: "Device pixel ratio range." },
    ],
    codeExamples: [
      { title: "Basic Usage", code: `<Viewport aspect={16/9}>\n  <Scene />\n</Viewport>` },
    ],
    tags: ["ssr-safe", "responsive"],
    performanceNotes: "Automatically adjusts DPR based on device capability. Set dpr={[1, 1]} for consistent performance.",
    relatedComponents: ["stage", "scene3d"],
    hasLiveDemo: true,
  },
  {
    name: "CameraController",
    slug: "camera-controller",
    category: "layout",
    description: "Configurable orbit, fly, and first-person camera controls.",
    longDescription: "CameraController provides multiple camera control modes with smooth damping, rotation limits, and zoom constraints. Supports keyboard and touch input.",
    props: [
      { name: "mode", type: '"orbit" | "fly" | "first-person"', default: '"orbit"', required: false, description: "Camera control mode." },
      { name: "damping", type: "number", default: "0.05", required: false, description: "Damping factor for smooth movement." },
      { name: "minDistance", type: "number", default: "1", required: false, description: "Minimum zoom distance." },
      { name: "maxDistance", type: "number", default: "100", required: false, description: "Maximum zoom distance." },
      { name: "autoRotate", type: "boolean", default: "false", required: false, description: "Enable auto-rotation." },
    ],
    codeExamples: [
      { title: "Orbit Controls", code: `<CameraController\n  mode="orbit"\n  damping={0.05}\n  autoRotate\n/>` },
    ],
    tags: ["interactive", "composable"],
    performanceNotes: "Minimal overhead. Uses requestAnimationFrame internally.",
    relatedComponents: ["stage", "viewport"],
    hasLiveDemo: true,
  },
  {
    name: "Grid3D",
    slug: "grid3d",
    category: "layout",
    description: "Infinite ground grid with customizable spacing and fade.",
    longDescription: "Grid3D renders an infinite ground plane grid using a shader-based approach. Supports configurable cell size, color, fade distance, and axis highlighting.",
    props: [
      { name: "cellSize", type: "number", default: "1", required: false, description: "Size of each grid cell." },
      { name: "cellColor", type: "string", default: '"#6f6f6f"', required: false, description: "Color of grid lines." },
      { name: "fadeDistance", type: "number", default: "50", required: false, description: "Distance at which the grid fades." },
      { name: "infiniteGrid", type: "boolean", default: "true", required: false, description: "Whether the grid extends infinitely." },
    ],
    codeExamples: [
      { title: "Basic Usage", code: `<Grid3D cellSize={1} fadeDistance={30} />` },
    ],
    tags: ["gpu-optimized", "composable"],
    performanceNotes: "Single-draw-call shader. Near-zero performance impact.",
    relatedComponents: ["stage", "scene3d"],
    hasLiveDemo: true,
  },
  {
    name: "Scene3D",
    slug: "scene3d",
    category: "layout",
    description: "Minimal 3D scene wrapper with sensible defaults.",
    longDescription: "Scene3D is a lightweight alternative to Stage — it provides basic lighting and a camera without opinionated presets. Ideal for custom scene setups.",
    props: [
      ...sharedLayoutProps,
      { name: "background", type: "string", default: '"transparent"', required: false, description: "Scene background color or null for transparent." },
      { name: "fog", type: "boolean", default: "false", required: false, description: "Enable distance fog." },
    ],
    codeExamples: [
      { title: "Basic Usage", code: `<Scene3D background="#000">\n  <mesh />\n</Scene3D>` },
    ],
    tags: ["ssr-safe", "lightweight"],
    performanceNotes: "Minimal setup cost. Prefer over Stage when you need full control.",
    relatedComponents: ["stage", "viewport"],
    hasLiveDemo: true,
  },
  {
    name: "Container3D",
    slug: "container3d",
    category: "layout",
    description: "Flex-like layout container for arranging 3D objects.",
    longDescription: "Container3D provides a layout primitive for positioning and spacing 3D children in rows, columns, or grids — bringing familiar layout patterns to 3D space.",
    props: [
      ...sharedLayoutProps,
      { name: "direction", type: '"row" | "column" | "grid"', default: '"row"', required: false, description: "Layout direction." },
      { name: "gap", type: "number", default: "1", required: false, description: "Spacing between children." },
      { name: "align", type: '"start" | "center" | "end"', default: '"center"', required: false, description: "Alignment of children." },
    ],
    codeExamples: [
      { title: "Row Layout", code: `<Container3D direction="row" gap={1.5}>\n  <Button3D />\n  <Button3D />\n</Container3D>` },
    ],
    tags: ["composable", "ssr-safe"],
    performanceNotes: "Pure transform-based positioning. No additional render cost.",
    relatedComponents: ["stage", "grid3d"],
    hasLiveDemo: true,
  },

  // ═══════════════════ UI ELEMENTS (12) ═══════════════════
  {
    name: "Button3D",
    slug: "button3d",
    category: "ui",
    description: "Interactive 3D button with hover states and haptic feedback.",
    longDescription: "Button3D renders a pressable 3D button with configurable materials, glow effects, and spring-based hover/press animations. Supports keyboard focus and screen readers.",
    props: [
      ...sharedInteractiveProps,
      { name: "variant", type: '"primary" | "secondary" | "ghost" | "outline"', default: '"primary"', required: false, description: "Visual style variant." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', required: false, description: "Button size preset." },
      { name: "color", type: "string", default: '"primary"', required: false, description: "Button color." },
      { name: "glow", type: "boolean", default: "false", required: false, description: "Enable glow effect on hover." },
      { name: "hoverScale", type: "number", default: "1.1", required: false, description: "Scale factor on hover." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Button label content." },
    ],
    codeExamples: [
      { title: "Basic Button", code: `<Button3D variant="primary" size="lg">\n  Click Me\n</Button3D>` },
      { title: "With Glow", code: `<Button3D\n  color="neon"\n  glow\n  hoverScale={1.2}\n  onClick={() => console.log("clicked")}\n>\n  Hover Me\n</Button3D>` },
    ],
    tags: ["interactive", "accessible", "gpu-optimized"],
    performanceNotes: "Single mesh with instanced material. Spring animations run on the GPU.",
    relatedComponents: ["card3d", "toggle3d", "badge3d"],
    hasLiveDemo: true,
  },
  {
    name: "Card3D",
    slug: "card3d",
    category: "ui",
    description: "Floating 3D card with depth, shadows, and tilt-on-hover.",
    longDescription: "Card3D creates an elevated card surface in 3D space with configurable depth, shadow casting, and mouse-tracking tilt interactions. Ideal for showcasing content in an immersive layout.",
    props: [
      ...sharedLayoutProps,
      { name: "depth", type: "number", default: "0.15", required: false, description: "Z-axis depth of the card." },
      { name: "tilt", type: "boolean", default: "true", required: false, description: "Enable tilt-on-hover effect." },
      { name: "shadow", type: '"none" | "sm" | "md" | "lg"', default: '"md"', required: false, description: "Shadow intensity." },
      { name: "material", type: '"standard" | "glass" | "metal"', default: '"standard"', required: false, description: "Surface material type." },
    ],
    codeExamples: [
      { title: "Basic Card", code: `<Card3D depth={0.15} tilt shadow="lg">\n  <Card3D.Header>Title</Card3D.Header>\n  <Card3D.Body>Content</Card3D.Body>\n</Card3D>` },
    ],
    tags: ["interactive", "composable", "gpu-optimized"],
    performanceNotes: "Tilt uses pointer events with throttled raycasting. Disable tilt for static displays.",
    relatedComponents: ["button3d", "modal3d"],
    hasLiveDemo: true,
  },
  {
    name: "Modal3D",
    slug: "modal3d",
    category: "ui",
    description: "3D modal dialog with depth animation and backdrop blur.",
    longDescription: "Modal3D presents content in a floating 3D panel that animates in from depth. Includes backdrop overlay, focus trapping, and escape-key dismissal.",
    props: [
      { name: "open", type: "boolean", default: "false", required: true, description: "Controls modal visibility." },
      { name: "onClose", type: "() => void", default: "-", required: true, description: "Callback when modal is closed." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Modal content." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', required: false, description: "Modal size." },
    ],
    codeExamples: [
      { title: "Basic Modal", code: `<Modal3D open={isOpen} onClose={() => setOpen(false)}>\n  <h2>Hello World</h2>\n  <p>Modal content here</p>\n</Modal3D>` },
    ],
    tags: ["accessible", "composable"],
    performanceNotes: "Only renders 3D content when open. Backdrop uses CSS blur, not 3D.",
    relatedComponents: ["dialog3d", "sheet3d", "card3d"],
    hasLiveDemo: true,
  },
  {
    name: "Menu3D",
    slug: "menu3d",
    category: "ui",
    description: "3D dropdown menu with animated item transitions.",
    longDescription: "Menu3D provides a context or dropdown menu that renders items in 3D space with staggered reveal animations and hover highlights.",
    props: [
      { name: "items", type: "MenuItem[]", default: "[]", required: true, description: "Array of menu items." },
      { name: "trigger", type: "ReactNode", default: "-", required: true, description: "Element that triggers the menu." },
      { name: "align", type: '"start" | "center" | "end"', default: '"start"', required: false, description: "Menu alignment." },
    ],
    codeExamples: [
      { title: "Basic Menu", code: `<Menu3D\n  trigger={<Button3D>Open</Button3D>}\n  items={[\n    { label: "Edit", onClick: handleEdit },\n    { label: "Delete", onClick: handleDelete },\n  ]}\n/>` },
    ],
    tags: ["accessible", "interactive"],
    performanceNotes: "Items are instanced. Menu is unmounted when closed.",
    relatedComponents: ["tooltip3d", "popover3d"],
    hasLiveDemo: true,
  },
  {
    name: "Tooltip3D",
    slug: "tooltip3d",
    category: "ui",
    description: "3D tooltip that floats near the target element.",
    longDescription: "Tooltip3D renders a small information overlay in 3D space, positioned relative to a target element. Supports delay, custom content, and multiple placement options.",
    props: [
      { name: "content", type: "ReactNode", default: "-", required: true, description: "Tooltip content." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Target element." },
      { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"top"', required: false, description: "Placement side." },
      { name: "delay", type: "number", default: "300", required: false, description: "Show delay in ms." },
    ],
    codeExamples: [
      { title: "Basic Tooltip", code: `<Tooltip3D content="More info" side="top">\n  <Button3D>Hover me</Button3D>\n</Tooltip3D>` },
    ],
    tags: ["accessible", "composable"],
    performanceNotes: "Lightweight. Only renders on hover after delay.",
    relatedComponents: ["popover3d", "menu3d"],
    hasLiveDemo: true,
  },
  {
    name: "Slider3D",
    slug: "slider3d",
    category: "ui",
    description: "3D range slider with draggable thumb and track.",
    longDescription: "Slider3D provides a 3D range input with a draggable thumb that moves along a track in 3D space. Supports value labels, steps, and range mode.",
    props: [
      { name: "value", type: "number", default: "0", required: false, description: "Current value." },
      { name: "onChange", type: "(value: number) => void", default: "-", required: false, description: "Value change handler." },
      { name: "min", type: "number", default: "0", required: false, description: "Minimum value." },
      { name: "max", type: "number", default: "100", required: false, description: "Maximum value." },
      { name: "step", type: "number", default: "1", required: false, description: "Step increment." },
    ],
    codeExamples: [
      { title: "Basic Slider", code: `<Slider3D\n  value={volume}\n  onChange={setVolume}\n  min={0}\n  max={100}\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Drag uses pointer lock for precision. Minimal raycasting.",
    relatedComponents: ["toggle3d", "input3d"],
    hasLiveDemo: true,
  },
  {
    name: "Toggle3D",
    slug: "toggle3d",
    category: "ui",
    description: "Animated 3D toggle switch.",
    longDescription: "Toggle3D renders an on/off switch in 3D space with spring-based thumb animation and customizable active/inactive materials.",
    props: [
      { name: "checked", type: "boolean", default: "false", required: false, description: "Checked state." },
      { name: "onChange", type: "(checked: boolean) => void", default: "-", required: false, description: "Change handler." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', required: false, description: "Toggle size." },
    ],
    codeExamples: [
      { title: "Basic Toggle", code: `<Toggle3D\n  checked={enabled}\n  onChange={setEnabled}\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Single mesh with animated material. Minimal cost.",
    relatedComponents: ["slider3d", "checkbox3d", "button3d"],
    hasLiveDemo: true,
  },
  {
    name: "Badge3D",
    slug: "badge3d",
    category: "ui",
    description: "Floating 3D badge for labels and status indicators.",
    longDescription: "Badge3D renders a small label or counter in 3D space. Useful for notification counts, status indicators, or category tags floating near other 3D objects.",
    props: [
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Badge content." },
      { name: "variant", type: '"default" | "success" | "warning" | "error"', default: '"default"', required: false, description: "Color variant." },
      { name: "pulse", type: "boolean", default: "false", required: false, description: "Enable pulse animation." },
    ],
    codeExamples: [
      { title: "Basic Badge", code: `<Badge3D variant="success">Online</Badge3D>` },
    ],
    tags: ["composable", "lightweight"],
    performanceNotes: "Text rendering uses SDF. Minimal draw calls.",
    relatedComponents: ["tooltip3d", "toast3d"],
    hasLiveDemo: true,
  },
  {
    name: "Input3D",
    slug: "input3d",
    category: "ui",
    description: "3D text input field with focus glow.",
    longDescription: "Input3D renders a text input as a 3D object with animated focus states, glow borders, and support for placeholder text and validation states.",
    props: [
      { name: "value", type: "string", default: '""', required: false, description: "Input value." },
      { name: "onChange", type: "(value: string) => void", default: "-", required: false, description: "Change handler." },
      { name: "placeholder", type: "string", default: '""', required: false, description: "Placeholder text." },
      { name: "error", type: "boolean", default: "false", required: false, description: "Show error state." },
    ],
    codeExamples: [
      { title: "Basic Input", code: `<Input3D\n  value={name}\n  onChange={setName}\n  placeholder="Enter your name"\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Text uses instanced glyphs. Re-renders only on value change.",
    relatedComponents: ["select3d", "slider3d"],
    hasLiveDemo: true,
  },
  {
    name: "Select3D",
    slug: "select3d",
    category: "ui",
    description: "3D dropdown select with animated option list.",
    longDescription: "Select3D provides a dropdown selector in 3D space with options that fan out or cascade when opened. Supports search, grouping, and multi-select.",
    props: [
      { name: "value", type: "string", default: '""', required: false, description: "Selected value." },
      { name: "onChange", type: "(value: string) => void", default: "-", required: false, description: "Change handler." },
      { name: "options", type: "{ label: string; value: string }[]", default: "[]", required: true, description: "Options list." },
    ],
    codeExamples: [
      { title: "Basic Select", code: `<Select3D\n  value={selected}\n  onChange={setSelected}\n  options={[\n    { label: "Option 1", value: "1" },\n    { label: "Option 2", value: "2" },\n  ]}\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Options are pooled and reused. Menu is culled when closed.",
    relatedComponents: ["menu3d", "input3d"],
    hasLiveDemo: true,
  },
  {
    name: "Tabs3D",
    slug: "tabs3d",
    category: "ui",
    description: "3D tab navigation with depth transitions.",
    longDescription: "Tabs3D renders a tabbed interface where switching tabs triggers a depth-based page transition in 3D space. Supports controlled and uncontrolled modes.",
    props: [
      { name: "tabs", type: "{ label: string; content: ReactNode }[]", default: "[]", required: true, description: "Array of tab definitions." },
      { name: "activeTab", type: "number", default: "0", required: false, description: "Active tab index." },
      { name: "onChange", type: "(index: number) => void", default: "-", required: false, description: "Tab change handler." },
    ],
    codeExamples: [
      { title: "Basic Tabs", code: `<Tabs3D\n  tabs={[\n    { label: "Preview", content: <Preview /> },\n    { label: "Code", content: <Code /> },\n  ]}\n/>` },
    ],
    tags: ["interactive", "composable"],
    performanceNotes: "Only active tab content is rendered. Transitions use GPU transforms.",
    relatedComponents: ["accordion3d", "stepper3d"],
    hasLiveDemo: true,
  },
  {
    name: "Accordion3D",
    slug: "accordion3d",
    category: "ui",
    description: "Expandable 3D accordion panels.",
    longDescription: "Accordion3D renders collapsible content panels that expand and collapse along the Z-axis in 3D space, revealing nested content with smooth spring animations.",
    props: [
      { name: "items", type: "{ title: string; content: ReactNode }[]", default: "[]", required: true, description: "Accordion items." },
      { name: "allowMultiple", type: "boolean", default: "false", required: false, description: "Allow multiple panels open." },
    ],
    codeExamples: [
      { title: "Basic Accordion", code: `<Accordion3D\n  items={[\n    { title: "Section 1", content: <p>Content 1</p> },\n    { title: "Section 2", content: <p>Content 2</p> },\n  ]}\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Collapsed panels are culled. Only expanded content renders.",
    relatedComponents: ["tabs3d", "collapsible"],
    hasLiveDemo: true,
  },

  // ═══════════════════ DATA VISUALIZATION (8) ═══════════════════
  {
    name: "BarChart3D",
    slug: "barchart3d",
    category: "data",
    description: "Animated 3D bar chart with hover tooltips.",
    longDescription: "BarChart3D renders vertical or horizontal bars in 3D space with configurable colors, spacing, and animated value transitions. Supports grouped and stacked modes.",
    props: [
      { name: "data", type: "{ label: string; value: number; color?: string }[]", default: "[]", required: true, description: "Chart data points." },
      { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', required: false, description: "Bar orientation." },
      { name: "animated", type: "boolean", default: "true", required: false, description: "Animate bar transitions." },
    ],
    codeExamples: [
      { title: "Basic Chart", code: `<BarChart3D\n  data={[\n    { label: "Jan", value: 30 },\n    { label: "Feb", value: 50 },\n    { label: "Mar", value: 80 },\n  ]}\n/>` },
    ],
    tags: ["gpu-optimized", "interactive"],
    performanceNotes: "Bars are instanced. Handles 1000+ data points at 60fps.",
    relatedComponents: ["linechart3d", "piechart3d"],
    hasLiveDemo: true,
  },
  {
    name: "LineChart3D",
    slug: "linechart3d",
    category: "data",
    description: "3D line chart with gradient fills and smooth curves.",
    longDescription: "LineChart3D renders data as smooth curves in 3D space with optional gradient fills, data point markers, and interactive crosshair tooltips.",
    props: [
      { name: "data", type: "{ x: number; y: number }[]", default: "[]", required: true, description: "Data points." },
      { name: "smooth", type: "boolean", default: "true", required: false, description: "Use smooth interpolation." },
      { name: "fill", type: "boolean", default: "false", required: false, description: "Show area fill." },
    ],
    codeExamples: [
      { title: "Basic Line Chart", code: `<LineChart3D\n  data={timeSeriesData}\n  smooth\n  fill\n/>` },
    ],
    tags: ["gpu-optimized", "interactive"],
    performanceNotes: "Uses buffer geometry for line rendering. Efficient for large datasets.",
    relatedComponents: ["barchart3d", "scatterplot3d"],
    hasLiveDemo: true,
  },
  {
    name: "PieChart3D",
    slug: "piechart3d",
    category: "data",
    description: "Explodable 3D pie chart with segments.",
    longDescription: "PieChart3D renders data as 3D pie segments that can be pulled apart on hover or click. Supports donut mode, custom colors, and animated transitions.",
    props: [
      { name: "data", type: "{ label: string; value: number; color?: string }[]", default: "[]", required: true, description: "Pie segments." },
      { name: "donut", type: "boolean", default: "false", required: false, description: "Render as donut chart." },
      { name: "explode", type: "boolean", default: "true", required: false, description: "Enable explode on hover." },
    ],
    codeExamples: [
      { title: "Basic Pie", code: `<PieChart3D\n  data={[\n    { label: "A", value: 40 },\n    { label: "B", value: 35 },\n    { label: "C", value: 25 },\n  ]}\n  explode\n/>` },
    ],
    tags: ["interactive", "gpu-optimized"],
    performanceNotes: "Segments use extruded geometry. Limit to 20 segments for best performance.",
    relatedComponents: ["barchart3d", "linechart3d"],
    hasLiveDemo: true,
  },
  {
    name: "ScatterPlot3D",
    slug: "scatterplot3d",
    category: "data",
    description: "3D scatter plot with clustered data points.",
    longDescription: "ScatterPlot3D plots data points as spheres in 3D space with configurable size, color mapping, and interactive selection. Great for multivariate data visualization.",
    props: [
      { name: "data", type: "{ x: number; y: number; z: number; size?: number }[]", default: "[]", required: true, description: "3D data points." },
      { name: "pointSize", type: "number", default: "0.1", required: false, description: "Default point size." },
      { name: "colorScale", type: "string[]", default: '["#22d3ee", "#a78bfa"]', required: false, description: "Color gradient for values." },
    ],
    codeExamples: [
      { title: "Basic Scatter", code: `<ScatterPlot3D\n  data={multivariateData}\n  pointSize={0.1}\n/>` },
    ],
    tags: ["gpu-optimized", "interactive"],
    performanceNotes: "Uses instanced meshes. Handles 10k+ points at 60fps.",
    relatedComponents: ["linechart3d", "graph3d"],
    hasLiveDemo: true,
  },
  {
    name: "Graph3D",
    slug: "graph3d",
    category: "data",
    description: "Force-directed 3D graph with nodes and edges.",
    longDescription: "Graph3D renders a force-directed graph layout in 3D space with draggable nodes, directional edges, and configurable physics. Ideal for network visualization.",
    props: [
      { name: "nodes", type: "GraphNode[]", default: "[]", required: true, description: "Array of graph nodes." },
      { name: "edges", type: "GraphEdge[]", default: "[]", required: true, description: "Array of graph edges." },
      { name: "physics", type: "boolean", default: "true", required: false, description: "Enable force simulation." },
    ],
    codeExamples: [
      { title: "Basic Graph", code: `<Graph3D\n  nodes={nodes}\n  edges={edges}\n  physics\n/>` },
    ],
    tags: ["interactive", "gpu-optimized"],
    performanceNotes: "Force simulation runs in a Web Worker. Renders via instancing.",
    relatedComponents: ["scatterplot3d", "map3d"],
    hasLiveDemo: true,
  },
  {
    name: "Table3D",
    slug: "table3d",
    category: "data",
    description: "3D data table with sortable columns and depth.",
    longDescription: "Table3D presents tabular data as floating 3D rows and columns. Supports sorting, filtering, row selection, and smooth scroll through large datasets.",
    props: [
      { name: "columns", type: "Column[]", default: "[]", required: true, description: "Column definitions." },
      { name: "data", type: "Record<string, any>[]", default: "[]", required: true, description: "Table data rows." },
      { name: "sortable", type: "boolean", default: "true", required: false, description: "Enable column sorting." },
    ],
    codeExamples: [
      { title: "Basic Table", code: `<Table3D\n  columns={[\n    { key: "name", label: "Name" },\n    { key: "value", label: "Value" },\n  ]}\n  data={tableData}\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Rows are virtualized. Only visible rows are rendered.",
    relatedComponents: ["barchart3d", "graph3d"],
    hasLiveDemo: true,
  },
  {
    name: "Map3D",
    slug: "map3d",
    category: "data",
    description: "Interactive 3D globe with data point overlays.",
    longDescription: "Map3D renders a 3D globe with texture-mapped surfaces and data point overlays. Supports rotation, zoom, country highlighting, and arc connections.",
    props: [
      { name: "markers", type: "{ lat: number; lng: number; label?: string }[]", default: "[]", required: false, description: "Map markers." },
      { name: "arcs", type: "{ from: [number, number]; to: [number, number] }[]", default: "[]", required: false, description: "Connection arcs." },
      { name: "autoRotate", type: "boolean", default: "true", required: false, description: "Enable auto-rotation." },
    ],
    codeExamples: [
      { title: "Basic Globe", code: `<Map3D\n  markers={[{ lat: 40.7, lng: -74, label: "NYC" }]}\n  autoRotate\n/>` },
    ],
    tags: ["interactive", "gpu-optimized"],
    performanceNotes: "Globe uses a single sphere with texture. Markers are instanced.",
    relatedComponents: ["graph3d", "scatterplot3d"],
    hasLiveDemo: true,
  },
  {
    name: "Timeline3D",
    slug: "timeline3d",
    category: "data",
    description: "3D timeline with animated event markers.",
    longDescription: "Timeline3D renders chronological events along a 3D path with animated transitions between time points. Supports zoom, pan, and event detail popups.",
    props: [
      { name: "events", type: "{ date: string; title: string; description?: string }[]", default: "[]", required: true, description: "Timeline events." },
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', required: false, description: "Timeline direction." },
    ],
    codeExamples: [
      { title: "Basic Timeline", code: `<Timeline3D\n  events={[\n    { date: "2024-01", title: "Launch" },\n    { date: "2024-06", title: "v2.0" },\n  ]}\n/>` },
    ],
    tags: ["interactive", "composable"],
    performanceNotes: "Events are pooled. Smooth scrolling uses spring physics.",
    relatedComponents: ["stepper3d", "progress3d"],
    hasLiveDemo: true,
  },

  // ═══════════════════ MEDIA (5) ═══════════════════
  {
    name: "Gallery3D",
    slug: "gallery3d",
    category: "media",
    description: "3D image gallery with carousel and lightbox.",
    longDescription: "Gallery3D displays images in a 3D carousel, grid, or wall layout. Supports touch/mouse navigation, lightbox zoom, and smooth transitions between items.",
    props: [
      { name: "images", type: "{ src: string; alt: string }[]", default: "[]", required: true, description: "Gallery images." },
      { name: "layout", type: '"carousel" | "grid" | "wall"', default: '"carousel"', required: false, description: "Gallery layout mode." },
      { name: "autoPlay", type: "boolean", default: "false", required: false, description: "Auto-advance slides." },
    ],
    codeExamples: [
      { title: "Image Carousel", code: `<Gallery3D\n  images={photos}\n  layout="carousel"\n  autoPlay\n/>` },
    ],
    tags: ["interactive", "gpu-optimized"],
    performanceNotes: "Images are lazily loaded. Only visible items are textured.",
    relatedComponents: ["imageplane", "videoplane", "modelviewer"],
    hasLiveDemo: true,
  },
  {
    name: "ModelViewer",
    slug: "modelviewer",
    category: "media",
    description: "GLTF/GLB 3D model viewer with orbit controls.",
    longDescription: "ModelViewer loads and displays 3D models (GLTF, GLB) with configurable camera, lighting, and interaction controls. Supports animations, materials, and AR preview.",
    props: [
      { name: "src", type: "string", default: "-", required: true, description: "Model file URL (GLTF/GLB)." },
      { name: "autoRotate", type: "boolean", default: "true", required: false, description: "Auto-rotate the model." },
      { name: "scale", type: "number", default: "1", required: false, description: "Model scale factor." },
      { name: "environment", type: "string", default: '"studio"', required: false, description: "Environment map for reflections." },
    ],
    codeExamples: [
      { title: "Basic Model", code: `<ModelViewer\n  src="/models/helmet.glb"\n  autoRotate\n  environment="studio"\n/>` },
    ],
    tags: ["interactive", "gpu-optimized"],
    performanceNotes: "Uses draco compression. Progressive loading for large models.",
    relatedComponents: ["gallery3d", "videoplane"],
    hasLiveDemo: true,
  },
  {
    name: "VideoPlane",
    slug: "videoplane",
    category: "media",
    description: "3D plane that plays video as texture.",
    longDescription: "VideoPlane renders a video on a 3D plane surface. Supports play/pause controls, loop, mute, and custom geometry for non-flat video surfaces.",
    props: [
      { name: "src", type: "string", default: "-", required: true, description: "Video file URL." },
      { name: "autoPlay", type: "boolean", default: "false", required: false, description: "Auto-play the video." },
      { name: "loop", type: "boolean", default: "true", required: false, description: "Loop playback." },
      { name: "width", type: "number", default: "4", required: false, description: "Plane width in 3D units." },
    ],
    codeExamples: [
      { title: "Video Texture", code: `<VideoPlane\n  src="/videos/demo.mp4"\n  autoPlay\n  loop\n  width={4}\n/>` },
    ],
    tags: ["gpu-optimized", "interactive"],
    performanceNotes: "Video texture updates per frame. Use lower resolutions for mobile.",
    relatedComponents: ["imageplane", "gallery3d"],
    hasLiveDemo: true,
  },
  {
    name: "ImagePlane",
    slug: "imageplane",
    category: "media",
    description: "Image displayed on a 3D plane with effects.",
    longDescription: "ImagePlane renders an image as a texture on a 3D plane. Supports parallax on scroll, hover zoom, and shader-based visual effects like displacement and grain.",
    props: [
      { name: "src", type: "string", default: "-", required: true, description: "Image URL." },
      { name: "width", type: "number", default: "3", required: false, description: "Plane width." },
      { name: "parallax", type: "boolean", default: "false", required: false, description: "Enable parallax effect." },
    ],
    codeExamples: [
      { title: "Basic Image", code: `<ImagePlane\n  src="/images/hero.jpg"\n  width={4}\n  parallax\n/>` },
    ],
    tags: ["gpu-optimized"],
    performanceNotes: "Texture is cached. Parallax adds minimal overhead.",
    relatedComponents: ["videoplane", "gallery3d"],
    hasLiveDemo: true,
  },
  {
    name: "AudioVisualizer",
    slug: "audiovisualizer",
    category: "media",
    description: "Real-time 3D audio visualization.",
    longDescription: "AudioVisualizer renders audio frequency data as animated 3D bars, waves, or particle systems. Connects to any audio source via the Web Audio API.",
    props: [
      { name: "audioSrc", type: "string | MediaStream", default: "-", required: true, description: "Audio source URL or stream." },
      { name: "mode", type: '"bars" | "wave" | "particles"', default: '"bars"', required: false, description: "Visualization mode." },
      { name: "fftSize", type: "number", default: "256", required: false, description: "FFT analysis size." },
    ],
    codeExamples: [
      { title: "Audio Bars", code: `<AudioVisualizer\n  audioSrc="/audio/track.mp3"\n  mode="bars"\n  fftSize={512}\n/>` },
    ],
    tags: ["gpu-optimized", "interactive"],
    performanceNotes: "FFT runs in AudioWorklet. Visualization uses instanced meshes.",
    relatedComponents: ["particles", "waveeffect"],
    hasLiveDemo: true,
  },

  // ═══════════════════ EFFECTS (8) ═══════════════════
  {
    name: "Particles",
    slug: "particles",
    category: "effects",
    description: "GPU-instanced particle system with physics.",
    longDescription: "Particles renders thousands of GPU-instanced particles with configurable emitters, forces, and behaviors. Supports attract, repel, vortex, and turbulence physics modes.",
    props: [
      { name: "count", type: "number", default: "1000", required: false, description: "Number of particles." },
      { name: "size", type: "number", default: "0.03", required: false, description: "Particle size." },
      { name: "color", type: "string", default: '"#a78bfa"', required: false, description: "Particle color." },
      { name: "physics", type: '"attract" | "repel" | "vortex" | "turbulence"', default: '"attract"', required: false, description: "Physics behavior." },
      { name: "emitter", type: '"sphere" | "box" | "point" | "ring"', default: '"sphere"', required: false, description: "Emitter shape." },
    ],
    codeExamples: [
      { title: "Basic Particles", code: `<Particles\n  count={1000}\n  size={0.03}\n  color="#a78bfa"\n  physics="attract"\n  emitter="sphere"\n/>` },
    ],
    tags: ["gpu-optimized", "interactive"],
    performanceNotes: "All computation on GPU. 10k particles at 60fps on mid-range hardware.",
    relatedComponents: ["bloom", "noisefield", "waveeffect"],
    hasLiveDemo: true,
  },
  {
    name: "Bloom",
    slug: "bloom",
    category: "effects",
    description: "Post-processing bloom/glow effect.",
    longDescription: "Bloom adds a post-processing glow effect to bright areas of the scene. Configurable intensity, threshold, and radius for cinematic light bleeding.",
    props: [
      { name: "intensity", type: "number", default: "1.5", required: false, description: "Bloom intensity." },
      { name: "threshold", type: "number", default: "0.8", required: false, description: "Brightness threshold for bloom." },
      { name: "radius", type: "number", default: "0.4", required: false, description: "Bloom spread radius." },
    ],
    codeExamples: [
      { title: "Basic Bloom", code: `<Bloom\n  intensity={1.5}\n  threshold={0.8}\n  radius={0.4}\n/>` },
    ],
    tags: ["gpu-optimized"],
    performanceNotes: "Adds one extra render pass. Reduce radius for better mobile performance.",
    relatedComponents: ["gloweffect", "particles", "reflection"],
    hasLiveDemo: true,
  },
  {
    name: "Reflection",
    slug: "reflection",
    category: "effects",
    description: "Real-time planar reflections.",
    longDescription: "Reflection adds a reflective ground plane that mirrors the scene in real-time. Configurable blur, opacity, and reflection quality.",
    props: [
      { name: "blur", type: "[number, number]", default: "[256, 256]", required: false, description: "Blur amount [x, y]." },
      { name: "opacity", type: "number", default: "0.5", required: false, description: "Reflection opacity." },
      { name: "resolution", type: "number", default: "512", required: false, description: "Reflection texture resolution." },
    ],
    codeExamples: [
      { title: "Floor Reflection", code: `<Reflection\n  blur={[300, 100]}\n  opacity={0.6}\n  resolution={512}\n/>` },
    ],
    tags: ["gpu-optimized"],
    performanceNotes: "Requires an extra render pass at configured resolution. Costly on mobile.",
    relatedComponents: ["bloom", "shadowsystem"],
    hasLiveDemo: true,
  },
  {
    name: "Fog",
    slug: "fog",
    category: "effects",
    description: "Distance-based and volumetric fog.",
    longDescription: "Fog adds atmospheric distance fog to the scene. Supports linear and exponential falloff, with optional volumetric rendering for dynamic light scattering.",
    props: [
      { name: "color", type: "string", default: '"#000"', required: false, description: "Fog color." },
      { name: "near", type: "number", default: "5", required: false, description: "Fog start distance." },
      { name: "far", type: "number", default: "30", required: false, description: "Fog end distance." },
      { name: "density", type: "number", default: "0.02", required: false, description: "Fog density (for exponential)." },
    ],
    codeExamples: [
      { title: "Linear Fog", code: `<Fog color="#0a0a0f" near={5} far={30} />` },
    ],
    tags: ["composable"],
    performanceNotes: "Built-in Three.js fog. Zero additional cost.",
    relatedComponents: ["bloom", "particles"],
    hasLiveDemo: true,
  },
  {
    name: "ShadowSystem",
    slug: "shadowsystem",
    category: "effects",
    description: "Configurable shadow rendering system.",
    longDescription: "ShadowSystem provides fine-grained control over shadow quality, bias, and map size for all lights in the scene. Supports contact shadows and soft shadow techniques.",
    props: [
      { name: "type", type: '"basic" | "soft" | "contact"', default: '"soft"', required: false, description: "Shadow rendering technique." },
      { name: "mapSize", type: "number", default: "1024", required: false, description: "Shadow map resolution." },
      { name: "bias", type: "number", default: "-0.0001", required: false, description: "Shadow bias to prevent acne." },
    ],
    codeExamples: [
      { title: "Soft Shadows", code: `<ShadowSystem type="soft" mapSize={2048} />` },
    ],
    tags: ["gpu-optimized"],
    performanceNotes: "Higher mapSize = better quality, more GPU memory. Use 512 for mobile.",
    relatedComponents: ["reflection", "fog"],
    hasLiveDemo: true,
  },
  {
    name: "GlowEffect",
    slug: "gloweffect",
    category: "effects",
    description: "Per-object glow/emission effect.",
    longDescription: "GlowEffect wraps a 3D object to add a customizable glow aura. Unlike Bloom (which is scene-wide), GlowEffect targets individual objects with precise control.",
    props: [
      { name: "color", type: "string", default: '"#22d3ee"', required: false, description: "Glow color." },
      { name: "intensity", type: "number", default: "1", required: false, description: "Glow intensity." },
      { name: "scale", type: "number", default: "1.2", required: false, description: "Glow spread scale." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Object to apply glow to." },
    ],
    codeExamples: [
      { title: "Glowing Sphere", code: `<GlowEffect color="#22d3ee" intensity={2}>\n  <mesh>\n    <sphereGeometry />\n    <meshStandardMaterial />\n  </mesh>\n</GlowEffect>` },
    ],
    tags: ["gpu-optimized", "composable"],
    performanceNotes: "Uses an additive blending shell mesh. Minimal overhead per object.",
    relatedComponents: ["bloom", "particles"],
    hasLiveDemo: true,
  },
  {
    name: "WaveEffect",
    slug: "waveeffect",
    category: "effects",
    description: "Animated wave displacement on surfaces.",
    longDescription: "WaveEffect applies vertex displacement waves to any mesh surface. Configurable amplitude, frequency, and speed for ocean, terrain, or abstract wave visuals.",
    props: [
      { name: "amplitude", type: "number", default: "0.3", required: false, description: "Wave height." },
      { name: "frequency", type: "number", default: "2", required: false, description: "Wave frequency." },
      { name: "speed", type: "number", default: "1", required: false, description: "Animation speed." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Mesh to apply waves to." },
    ],
    codeExamples: [
      { title: "Ocean Waves", code: `<WaveEffect amplitude={0.5} frequency={3} speed={0.8}>\n  <mesh>\n    <planeGeometry args={[10, 10, 64, 64]} />\n    <meshStandardMaterial color="#0ea5e9" />\n  </mesh>\n</WaveEffect>` },
    ],
    tags: ["gpu-optimized"],
    performanceNotes: "Vertex shader displacement. Performance depends on mesh segment count.",
    relatedComponents: ["noisefield", "particles"],
    hasLiveDemo: true,
  },
  {
    name: "NoiseField",
    slug: "noisefield",
    category: "effects",
    description: "Procedural noise-driven motion field.",
    longDescription: "NoiseField creates animated noise patterns that can drive particle movement, surface displacement, or color variation. Uses Simplex noise on the GPU.",
    props: [
      { name: "scale", type: "number", default: "1", required: false, description: "Noise scale." },
      { name: "speed", type: "number", default: "0.5", required: false, description: "Animation speed." },
      { name: "octaves", type: "number", default: "4", required: false, description: "Noise detail levels." },
      { name: "mode", type: '"displacement" | "color" | "motion"', default: '"motion"', required: false, description: "How noise is applied." },
    ],
    codeExamples: [
      { title: "Noise Motion", code: `<NoiseField\n  scale={1.5}\n  speed={0.3}\n  octaves={4}\n  mode="motion"\n/>` },
    ],
    tags: ["gpu-optimized"],
    performanceNotes: "Simplex noise computed in fragment shader. Very efficient.",
    relatedComponents: ["waveeffect", "particles"],
    hasLiveDemo: true,
  },

  // ═══════════════════ NAVIGATION (4) ═══════════════════
  {
    name: "Breadcrumb3D",
    slug: "breadcrumb3d",
    category: "navigation",
    description: "3D breadcrumb trail navigation.",
    longDescription: "Breadcrumb3D renders navigation breadcrumbs as floating 3D elements with click interactions and animated transitions between levels.",
    props: [
      { name: "items", type: '{ label: string; href?: string }[]', default: "[]", required: true, description: "Breadcrumb items." },
      { name: "separator", type: "string", default: '"/"', required: false, description: "Separator character." },
    ],
    codeExamples: [
      { title: "Basic Breadcrumb", code: `<Breadcrumb3D\n  items={[\n    { label: "Home", href: "/" },\n    { label: "Components", href: "/components" },\n    { label: "Button3D" },\n  ]}\n/>` },
    ],
    tags: ["accessible", "composable"],
    performanceNotes: "Lightweight text-based rendering. Minimal impact.",
    relatedComponents: ["navbar3d", "stepper3d"],
    hasLiveDemo: true,
  },
  {
    name: "Pagination3D",
    slug: "pagination3d",
    category: "navigation",
    description: "3D pagination controls.",
    longDescription: "Pagination3D renders page navigation controls in 3D space with animated page transitions and configurable page counts.",
    props: [
      { name: "page", type: "number", default: "1", required: false, description: "Current page." },
      { name: "totalPages", type: "number", default: "1", required: true, description: "Total page count." },
      { name: "onChange", type: "(page: number) => void", default: "-", required: true, description: "Page change handler." },
    ],
    codeExamples: [
      { title: "Basic Pagination", code: `<Pagination3D\n  page={currentPage}\n  totalPages={10}\n  onChange={setPage}\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Simple instanced buttons. Negligible performance cost.",
    relatedComponents: ["breadcrumb3d", "stepper3d"],
    hasLiveDemo: true,
  },
  {
    name: "Stepper3D",
    slug: "stepper3d",
    category: "navigation",
    description: "3D step indicator for multi-step flows.",
    longDescription: "Stepper3D visualizes progress through a multi-step process with connected 3D nodes showing completed, active, and upcoming steps.",
    props: [
      { name: "steps", type: 'string[]', default: "[]", required: true, description: "Step labels." },
      { name: "activeStep", type: "number", default: "0", required: false, description: "Current active step index." },
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', required: false, description: "Stepper direction." },
    ],
    codeExamples: [
      { title: "Basic Stepper", code: `<Stepper3D\n  steps={["Setup", "Configure", "Deploy"]}\n  activeStep={1}\n/>` },
    ],
    tags: ["composable", "accessible"],
    performanceNotes: "Static geometry with animated materials. Minimal overhead.",
    relatedComponents: ["progress3d", "breadcrumb3d", "timeline3d"],
    hasLiveDemo: true,
  },
  {
    name: "NavBar3D",
    slug: "navbar3d",
    category: "navigation",
    description: "Floating 3D navigation bar.",
    longDescription: "NavBar3D renders a floating navigation bar in 3D space with hover highlights, active indicators, and smooth scrolling behavior.",
    props: [
      { name: "items", type: '{ label: string; href: string; icon?: ReactNode }[]', default: "[]", required: true, description: "Navigation items." },
      { name: "activeHref", type: "string", default: '""', required: false, description: "Currently active route." },
      { name: "floating", type: "boolean", default: "true", required: false, description: "Enable floating animation." },
    ],
    codeExamples: [
      { title: "Basic NavBar", code: `<NavBar3D\n  items={[\n    { label: "Home", href: "/" },\n    { label: "About", href: "/about" },\n  ]}\n  activeHref={location.pathname}\n/>` },
    ],
    tags: ["interactive", "accessible"],
    performanceNotes: "Uses instanced rectangles. Smooth hover with GPU transitions.",
    relatedComponents: ["breadcrumb3d", "menu3d"],
    hasLiveDemo: true,
  },

  // ═══════════════════ FEEDBACK (4) ═══════════════════
  {
    name: "Toast3D",
    slug: "toast3d",
    category: "feedback",
    description: "3D notification toast with entrance animation.",
    longDescription: "Toast3D renders notification messages as floating 3D panels that slide in and auto-dismiss. Supports multiple severity levels and action buttons.",
    props: [
      { name: "message", type: "string", default: "-", required: true, description: "Toast message." },
      { name: "type", type: '"info" | "success" | "warning" | "error"', default: '"info"', required: false, description: "Toast severity." },
      { name: "duration", type: "number", default: "3000", required: false, description: "Auto-dismiss duration in ms." },
      { name: "position", type: '"top" | "bottom"', default: '"bottom"', required: false, description: "Toast position." },
    ],
    codeExamples: [
      { title: "Success Toast", code: `<Toast3D\n  message="Changes saved!"\n  type="success"\n  duration={3000}\n/>` },
    ],
    tags: ["accessible", "composable"],
    performanceNotes: "Rendered on demand. Unmounted after dismissal.",
    relatedComponents: ["badge3d", "progress3d"],
    hasLiveDemo: true,
  },
  {
    name: "Progress3D",
    slug: "progress3d",
    category: "feedback",
    description: "3D progress bar and circular progress.",
    longDescription: "Progress3D visualizes completion percentage as a 3D bar or ring with animated fill, gradient colors, and optional label display.",
    props: [
      { name: "value", type: "number", default: "0", required: false, description: "Progress value (0-100)." },
      { name: "variant", type: '"bar" | "ring" | "sphere"', default: '"bar"', required: false, description: "Visual style." },
      { name: "color", type: "string", default: '"primary"', required: false, description: "Fill color." },
      { name: "showLabel", type: "boolean", default: "true", required: false, description: "Show percentage label." },
    ],
    codeExamples: [
      { title: "Progress Ring", code: `<Progress3D value={65} variant="ring" color="primary" />` },
    ],
    tags: ["composable"],
    performanceNotes: "Simple geometry with animated uniform. Negligible cost.",
    relatedComponents: ["spinner3d", "stepper3d"],
    hasLiveDemo: true,
  },
  {
    name: "Spinner3D",
    slug: "spinner3d",
    category: "feedback",
    description: "Animated 3D loading spinner.",
    longDescription: "Spinner3D displays an animated loading indicator in 3D space. Multiple styles include orbital dots, rotating rings, and pulsing spheres.",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', required: false, description: "Spinner size." },
      { name: "variant", type: '"orbital" | "ring" | "pulse"', default: '"orbital"', required: false, description: "Animation style." },
      { name: "color", type: "string", default: '"primary"', required: false, description: "Spinner color." },
    ],
    codeExamples: [
      { title: "Orbital Spinner", code: `<Spinner3D variant="orbital" size="lg" />` },
    ],
    tags: ["composable"],
    performanceNotes: "Runs on requestAnimationFrame. Minimal overhead.",
    relatedComponents: ["progress3d", "skeleton3d"],
    hasLiveDemo: true,
  },
  {
    name: "Skeleton3D",
    slug: "skeleton3d",
    category: "feedback",
    description: "3D skeleton loading placeholder.",
    longDescription: "Skeleton3D renders placeholder shapes that pulse or shimmer while content is loading. Matches the dimensions of the expected content for smooth transitions.",
    props: [
      { name: "width", type: "number", default: "2", required: false, description: "Skeleton width." },
      { name: "height", type: "number", default: "0.5", required: false, description: "Skeleton height." },
      { name: "variant", type: '"rect" | "circle" | "text"', default: '"rect"', required: false, description: "Shape variant." },
      { name: "animate", type: "boolean", default: "true", required: false, description: "Enable shimmer animation." },
    ],
    codeExamples: [
      { title: "Loading Skeleton", code: `<Skeleton3D width={3} height={0.4} variant="text" />\n<Skeleton3D width={3} height={2} variant="rect" />` },
    ],
    tags: ["composable"],
    performanceNotes: "Simple animated material. Near-zero impact.",
    relatedComponents: ["spinner3d", "progress3d"],
    hasLiveDemo: true,
  },

  // ═══════════════════ OVERLAY (3) ═══════════════════
  {
    name: "Popover3D",
    slug: "popover3d",
    category: "overlay",
    description: "3D popover triggered by click or hover.",
    longDescription: "Popover3D renders contextual content in a floating 3D panel anchored to a trigger element. Supports multiple placements and configurable offset.",
    props: [
      { name: "trigger", type: "ReactNode", default: "-", required: true, description: "Trigger element." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Popover content." },
      { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"top"', required: false, description: "Placement side." },
      { name: "triggerOn", type: '"click" | "hover"', default: '"click"', required: false, description: "Trigger interaction." },
    ],
    codeExamples: [
      { title: "Click Popover", code: `<Popover3D trigger={<Button3D>Info</Button3D>} side="top">\n  <p>Additional information</p>\n</Popover3D>` },
    ],
    tags: ["accessible", "composable"],
    performanceNotes: "Content only rendered when visible. Uses portal for z-index management.",
    relatedComponents: ["tooltip3d", "menu3d"],
    hasLiveDemo: true,
  },
  {
    name: "Sheet3D",
    slug: "sheet3d",
    category: "overlay",
    description: "Slide-in 3D panel from screen edge.",
    longDescription: "Sheet3D renders a panel that slides in from any screen edge in 3D space. Used for navigation drawers, detail panels, and form sidebars.",
    props: [
      { name: "open", type: "boolean", default: "false", required: true, description: "Controls sheet visibility." },
      { name: "onClose", type: "() => void", default: "-", required: true, description: "Close callback." },
      { name: "side", type: '"left" | "right" | "top" | "bottom"', default: '"right"', required: false, description: "Slide-in direction." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Sheet content." },
    ],
    codeExamples: [
      { title: "Right Sheet", code: `<Sheet3D open={isOpen} onClose={() => setOpen(false)} side="right">\n  <nav>Navigation content</nav>\n</Sheet3D>` },
    ],
    tags: ["accessible", "composable"],
    performanceNotes: "Transitions use GPU transforms. Content is unmounted when closed.",
    relatedComponents: ["modal3d", "dialog3d"],
    hasLiveDemo: true,
  },
  {
    name: "Dialog3D",
    slug: "dialog3d",
    category: "overlay",
    description: "Accessible 3D dialog with focus trapping.",
    longDescription: "Dialog3D is a fully accessible modal dialog that renders in 3D space. Implements WAI-ARIA dialog pattern with focus trapping, escape dismissal, and backdrop overlay.",
    props: [
      { name: "open", type: "boolean", default: "false", required: true, description: "Controls dialog visibility." },
      { name: "onClose", type: "() => void", default: "-", required: true, description: "Close callback." },
      { name: "title", type: "string", default: "-", required: true, description: "Dialog title for accessibility." },
      { name: "children", type: "ReactNode", default: "-", required: true, description: "Dialog content." },
    ],
    codeExamples: [
      { title: "Confirmation Dialog", code: `<Dialog3D\n  open={showDialog}\n  onClose={() => setShowDialog(false)}\n  title="Confirm Action"\n>\n  <p>Are you sure?</p>\n  <Button3D onClick={handleConfirm}>Confirm</Button3D>\n</Dialog3D>` },
    ],
    tags: ["accessible", "composable"],
    performanceNotes: "Only renders when open. Focus trap uses DOM queries.",
    relatedComponents: ["modal3d", "sheet3d"],
    hasLiveDemo: true,
  },
];

export function getComponentBySlug(slug: string): ComponentDef | undefined {
  return componentRegistry.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: ComponentCategory): ComponentDef[] {
  return componentRegistry.filter((c) => c.category === category);
}

export function searchComponents(query: string): ComponentDef[] {
  const q = query.toLowerCase();
  return componentRegistry.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some((t) => t.includes(q)) ||
      c.category.includes(q)
  );
}
