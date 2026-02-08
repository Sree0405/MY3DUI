import React, { Suspense } from "react";
import { demoRegistry } from "@/data/demo-registry";
import { Loader2 } from "lucide-react";

type LivePreviewProps = {
  slug: string;
};

export default function LivePreview({ slug }: LivePreviewProps) {
  const DemoComponent = demoRegistry[slug];

  if (!DemoComponent) {
    return (
      <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
        Live preview coming soon
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-black/60 relative">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center text-white/50">
            <Loader2 className="animate-spin w-8 h-8" />
          </div>
        }
      >
        <DemoComponent />
      </Suspense>
    </div>
  );
}
