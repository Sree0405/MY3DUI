import React from "react";
import { demoRegistry } from "@/data/demo-registry";

type LivePreviewProps = {
  slug: string;
};

export default function LivePreview({ slug }: LivePreviewProps) {
    console.log("LivePreview slug:", slug);
  const DemoComponent = demoRegistry[slug];

  if (!DemoComponent) {
    return (
      <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
        Live preview coming soon
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-black/60">
      <DemoComponent />
    </div>
  );
}
