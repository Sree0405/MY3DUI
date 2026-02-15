import LiveRunner, {
  LiveCodeEditor,
  LivePreviewPane,
} from "@/components/docs/LiveRunner";

import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Play, Copy, Check } from "lucide-react";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@sreedev/my3dui";

import LivePreview from "@/components/docs/LivePreview";
import ErrorBoundary from "@/components/docs/ErrorBoundary";
import { demoRegistry } from "@/data/demo-registry";

import {
  componentRegistry,
  getComponentBySlug,
} from "@/data/component-registry";

import { usePageMeta } from "@/hooks/use-page-meta";
import PropsTable from "@/components/docs/PropsTable";

export default function Playground() {
  const { component: componentParam } = useParams();

  const [selectedSlug, setSelectedSlug] = useState(
    componentParam || "button3d"
  );

  const [copied, setCopied] = useState(false);

  const comp = useMemo(
    () => getComponentBySlug(selectedSlug),
    [selectedSlug]
  );

  usePageMeta({
    title: "Playground",
    description: "Interactive sandbox for experimenting with My3DUI components.",
  });

  const code = comp?.codeExamples[0]?.code || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-16 h-screen flex flex-col">

      {/* Toolbar */}
      <div className="glass border-b border-border/30 px-4 py-2 flex items-center gap-3">

        <Play className="w-4 h-4 text-primary" />

        <select
          value={selectedSlug}
          onChange={(e) => setSelectedSlug(e.target.value)}
          className="bg-muted text-foreground text-sm rounded-lg px-3 py-1.5 border border-border/30 outline-none focus:ring-1 focus:ring-primary"
        >
          {componentRegistry.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>

        <div className="flex-1" />

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0">

        {code && (
          <LiveRunner code={code}>

            <ResizablePanelGroup direction="horizontal">

              {/* Editor */}
              <ResizablePanel defaultSize={45} minSize={25}>

                <div className="h-full p-3 bg-card/80 flex flex-col">

                  <div className="mb-3">
                    <h3 className="text-sm font-semibold">
                      {comp?.name}
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      {comp?.description}
                    </p>
                  </div>

                  <div className="flex-1 min-h-0">
                    <LiveCodeEditor />
                  </div>

                </div>

              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* Preview */}
              <ResizablePanel defaultSize={55} minSize={30}>

                <div className="h-full flex flex-col">

                  <div className="flex-1 p-4 bg-black/50 overflow-hidden relative">
                    <ErrorBoundary>
                      {demoRegistry[selectedSlug] ? (
                        <LivePreview slug={selectedSlug} />
                      ) : (
                        <LivePreviewPane />
                      )}
                    </ErrorBoundary>
                  </div>

                  {/* Props */}
                  {comp && comp.props.length > 0 && (
                    <div className="border-t border-border/30 max-h-64 overflow-auto">

                      <div className="p-4">

                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Props
                        </h4>

                        <PropsTable props={comp.props} />

                      </div>

                    </div>
                  )}

                </div>

              </ResizablePanel>

            </ResizablePanelGroup>

          </LiveRunner>
        )}

      </div>

    </div>
  );
}
