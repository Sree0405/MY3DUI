import {
  Button3D,
  Stack,
  Grid,
} from "@sreedev/my3dui";

import {
  Send,
  Trash2,
  Save,
  ExternalLink,
  Loader2,
  Home,
  Zap,
  Star,
} from "lucide-react";

/* =====================================================
   Demo
===================================================== */

export default function Button3DDemo() {
  return (
    <div className="min-h-screen bg-slate-950 p-10 flex flex-col gap-20">

      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">

        <h2 className="text-4xl font-bold tracking-tight text-white">
          Button3D
        </h2>

        <p className="text-slate-400">
          Advanced 3D buttons with variants, theming,
          animations, and custom styling.
        </p>

      </div>

      {/* Showcase Grid */}
      <Grid
        cols={{ md: 2, lg: 4 }}
        gap={8}
        className="max-w-7xl mx-auto w-full"
      >

        {/* ----------------------------------
           Solid Variants
        ---------------------------------- */}
        <Stack
          gap={4}
          className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border shadow"
        >
          <h3 className="section-title">
            Solid
          </h3>

          <Button3D variant="primary">
            Primary
          </Button3D>

          <Button3D variant="secondary">
            Secondary
          </Button3D>

          <Button3D variant="accent">
            <Star size={16} />
            Accent
          </Button3D>

          <Button3D variant="destructive">
            <Trash2 size={16} />
            Delete
          </Button3D>

        </Stack>


        {/* ----------------------------------
           Style Variants
        ---------------------------------- */}
        <Stack
          gap={4}
          className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border shadow"
        >
          <h3 className="section-title">
            Styles
          </h3>

          <Button3D variant="outline">
            Outline
          </Button3D>

          <Button3D variant="ghost">
            Ghost
          </Button3D>

          <Button3D variant="glass">
            Glass
          </Button3D>

          <Button3D variant="soft">
            Soft
          </Button3D>

          <Button3D variant="link">
            Learn More
          </Button3D>

        </Stack>


        {/* ----------------------------------
           Gradient & Neon
        ---------------------------------- */}
        <Stack
          gap={4}
          className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border shadow"
        >
          <h3 className="section-title">
            Effects
          </h3>

          <Button3D variant="gradient">
            Gradient
          </Button3D>

          <Button3D variant="neon" glow>
            <Zap size={16} />
            Neon
          </Button3D>

          <Button3D
            variant="accent"
            glow
          >
            Glow Accent
          </Button3D>

          <Button3D
            bgColor="#22c55e"
            textColor="black"
            glow
          >
            Custom Glow
          </Button3D>

        </Stack>


        {/* ----------------------------------
           Sizes & Shapes
        ---------------------------------- */}
        <Stack
          gap={4}
          className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border shadow"
        >
          <h3 className="section-title">
            Size & Shape
          </h3>

          <Button3D size="sm">
            Small
          </Button3D>

          <Button3D size="md">
            Medium
          </Button3D>

          <Button3D size="lg">
            Large
          </Button3D>

          <Button3D size="xl">
            Extra Large
          </Button3D>

          <div className="flex gap-3">

            <Button3D
              size="icon"
              rounded="full"
            >
              <Home size={16} />
            </Button3D>

            <Button3D
              size="icon"
              variant="secondary"
              rounded="full"
            >
              <Send size={16} />
            </Button3D>

          </div>

        </Stack>


        {/* ----------------------------------
           States
        ---------------------------------- */}
        <Stack
          gap={4}
          className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border shadow"
        >
          <h3 className="section-title">
            States
          </h3>

          <Button3D disabled>
            Disabled
          </Button3D>

          <Button3D loading>
            Loading
          </Button3D>

          <Button3D
            loading
            variant="outline"
          >
            Submitting
          </Button3D>

          <Button3D
            variant="primary"
            rounded="full"
          >
            Pill Button
          </Button3D>

        </Stack>


        {/* ----------------------------------
           Custom Colors
        ---------------------------------- */}
        <Stack
          gap={4}
          className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border shadow"
        >
          <h3 className="section-title">
            Custom Colors
          </h3>

          <Button3D
            bgColor="#facc15"
            textColor="#000"
            borderColor="#ca8a04"
          >
            Yellow
          </Button3D>

          <Button3D
            bgColor="#ec4899"
            textColor="white"
            glow
          >
            Pink Glow
          </Button3D>

          <Button3D
            bgColor="#06b6d4"
            textColor="#042f2e"
            rounded="full"
          >
            Cyan Pill
          </Button3D>

          <Button3D
            bgColor="#8b5cf6"
            textColor="white"
            glow
          >
            Purple
          </Button3D>

        </Stack>


        {/* ----------------------------------
           Real-world Usage
        ---------------------------------- */}
        <Stack
          gap={4}
          className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border shadow"
        >
          <h3 className="section-title">
            Real Usage
          </h3>

          <Button3D
            variant="primary"
            className="w-full"
          >
            <Save size={16} />
            Save Changes
          </Button3D>

          <Button3D
            variant="outline"
            className="w-full"
          >
            <ExternalLink size={16} />
            Visit Site
          </Button3D>

          <Button3D
            variant="destructive"
            className="w-full"
          >
            <Trash2 size={16} />
            Delete Account
          </Button3D>

        </Stack>

      </Grid>
    </div>
  );
}

/* =====================================================
   Helpers
===================================================== */

/* Tailwind utility */
const sectionTitle =
  "text-xs font-semibold uppercase tracking-widest text-slate-500";

/* Optional global style */
declare module "react" {
  interface HTMLAttributes<T> {
    "data-section"?: string;
  }
}