import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Copy, Check, Settings } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { componentRegistry, getComponentBySlug } from "@/data/component-registry";
import { usePageMeta } from "@/hooks/use-page-meta";
import CodeBlock from "@/components/shared/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";

export default function Playground() {
  const { component: componentParam } = useParams();
  const [selectedSlug, setSelectedSlug] = useState(componentParam || "button3d");
  const [copied, setCopied] = useState(false);

  const comp = useMemo(() => getComponentBySlug(selectedSlug), [selectedSlug]);

  usePageMeta({
    title: "Playground",
    description: "Interactive sandbox for experimenting with My3DUI components.",
  });

  const code = comp?.codeExamples[0]?.code || "// Select a component";

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
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <div className="flex-1" />
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0">
        <ResizablePanelGroup direction="horizontal">
          {/* Code Panel */}
          <ResizablePanel defaultSize={45} minSize={25}>
            <div className="h-full overflow-auto bg-card/80 p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-1">{comp?.name || "Component"}</h3>
                <p className="text-xs text-muted-foreground">{comp?.description}</p>
              </div>
              <pre className="text-sm font-mono leading-relaxed text-primary/90 whitespace-pre-wrap">{code}</pre>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Preview Panel */}
          <ResizablePanel defaultSize={55} minSize={30}>
            <div className="h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center bg-gradient-hero">
                <motion.div
                  key={selectedSlug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-8 text-center border-glow max-w-sm"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-10 h-10 text-primary animate-float" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">{comp?.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{comp?.description}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {comp?.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Props Panel */}
              {comp && comp.props.length > 0 && (
                <div className="border-t border-border/30 max-h-64 overflow-auto">
                  <div className="p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Props</h4>
                    <PropsTable props={comp.props} />
                  </div>
                </div>
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
