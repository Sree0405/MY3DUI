import { motion } from "framer-motion";

import { Toggle3D } from "@/components/ui/toggle3d";
import { Button3D } from "@/components/ui/button3d";
import { Card3D } from "@/components/ui/card3d";
import { Accordion3D } from "@/components/ui/accordion3d";
import { Badge3D } from "@/components/ui/badge3d";
import { Input3D } from "@/components/ui/input3d";
import { Slider3D } from "@/components/ui/slider3d";
import { Progress3D } from "@/components/ui/progress3d";
import { Tabs3D } from "@/components/ui/tabs3d";

/* Component Data */
const components = [
  {
    id: "button",
    name: "Button3D",
    description: "Interactive buttons with press depth and glow feedback.",
    code: `<Button3D variant="primary">Click</Button3D>`,
    render: () => (
      <div className="flex gap-4">
        <Button3D>Primary</Button3D>
        <Button3D variant="secondary">Secondary</Button3D>
      </div>
    ),
  },

  {
    id: "toggle",
    name: "Toggle3D",
    description: "Smooth animated toggle with glass and neon variants.",
    code: `<Toggle3D defaultChecked />`,
    render: () => (
      <div className="flex gap-6">
        <Toggle3D defaultChecked />
        <Toggle3D variant="glass" />
      </div>
    ),
  },

  {
    id: "card",
    name: "Card3D",
    description: "Perspective cards with hover tilt and depth.",
    code: `<Card3D>Content</Card3D>`,
    render: () => (
      <Card3D className="w-48 h-28 flex items-center justify-center">
        <span className="font-semibold">Hover Me</span>
      </Card3D>
    ),
  },

  {
    id: "accordion",
    name: "Accordion3D",
    description: "Expandable sections with smooth transitions.",
    code: `<Accordion3D items={[...]} />`,
    render: () => (
      <div className="w-full max-w-xs">
        <Accordion3D
          items={[
            { title: "First", content: "Content One" },
            { title: "Second", content: "Content Two" },
          ]}
        />
      </div>
    ),
  },

  {
    id: "badge",
    name: "Badge3D",
    description: "Status indicators with depth and glow.",
    code: `<Badge3D>Online</Badge3D>`,
    render: () => (
      <div className="flex gap-3">
        <Badge3D>Active</Badge3D>
        <Badge3D variant="success">Online</Badge3D>
        <Badge3D variant="danger">Offline</Badge3D>
      </div>
    ),
  },

  {
    id: "input",
    name: "Input3D",
    description: "Text inputs with focus glow and soft shadows.",
    code: `<Input3D placeholder="Email" />`,
    render: () => (
      <div className="w-56">
        <Input3D placeholder="Enter email" />
      </div>
    ),
  },

  {
    id: "slider",
    name: "Slider3D",
    description: "Draggable slider with animated thumb.",
    code: `<Slider3D value={40} />`,
    render: () => (
      <div className="w-52">
        <Slider3D defaultValue={40} />
      </div>
    ),
  },

  {
    id: "progress",
    name: "Progress3D",
    description: "Progress indicators with smooth fill motion.",
    code: `<Progress3D value={70} />`,
    render: () => (
      <div className="w-52">
        <Progress3D value={70} />
      </div>
    ),
  },

  {
    id: "tabs",
    name: "Tabs3D",
    description: "Animated tab navigation with depth effects.",
    code: `<Tabs3D items={[...]} />`,
    render: () => (
<Tabs3D
  tabs={[
    {
      label: "Dashboard",
      value: "dashboard",
      content: (
        <div className="space-y-2">
          <h4 className="font-semibold">Overview</h4>
          <p className="text-sm text-muted-foreground">
            Track usage, performance, and activity.
          </p>
        </div>
      ),
    },

    {
      label: "Profile",
      value: "profile",
      content: (
        <div className="space-y-2">
          <h4 className="font-semibold">User Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage your personal information and preferences.
          </p>
        </div>
      ),
    },

    {
      label: "Billing",
      value: "billing",
      content: (
        <div className="space-y-2">
          <h4 className="font-semibold">Subscription</h4>
          <p className="text-sm text-muted-foreground">
            View invoices and manage your plan.
          </p>
        </div>
      ),
    },

    {
      label: "Support",
      value: "support",
      content: (
        <div className="space-y-2">
          <h4 className="font-semibold">Help Center</h4>
          <p className="text-sm text-muted-foreground">
            Contact support or browse FAQs.
          </p>
        </div>
      ),
    },
  ]}
/>

    ),
  },
];

export default function ComponentShowcase() {
  return (
    <section
      id="components"
      className="py-28 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-white">
            Production Ready{" "}
            <span className="text-blue-500">3D UI</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Beautiful, accessible components with depth — no WebGL, no Canvas,
            just modern frontend engineering.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {components.map((comp, i) => (

            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all"
            >

              {/* Preview */}
              <div className="h-56 flex items-center justify-center bg-gradient-to-br from-slate-800/60 to-slate-900 border-b border-slate-800 p-6">
                {comp.render()}
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">

                <h3 className="text-lg font-semibold text-white">
                  {comp.name}
                </h3>

                <p className="text-slate-400 text-sm min-h-[42px]">
                  {comp.description}
                </p>

                {/* Code */}
                <div className="rounded-lg bg-black/60 border border-slate-800 p-3 overflow-x-auto">

                  <pre className="text-xs font-mono text-blue-400 leading-relaxed">
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
