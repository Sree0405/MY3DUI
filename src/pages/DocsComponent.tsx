import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getComponentBySlug } from "@/data/component-registry";
import { usePageMeta } from "@/hooks/use-page-meta";
import PropsTable from "@/components/docs/PropsTable";
import CodeBlock from "@/components/shared/CodeBlock";

export default function DocsComponent() {
  const { name } = useParams<{ name: string }>();
  const comp = getComponentBySlug(name || "");

  usePageMeta({
    title: comp ? `${comp.name} Docs` : "Component",
    description: comp?.description,
  });

  if (!comp) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-foreground mb-2">Component not found</h1>
        <Link to="/components" className="text-primary hover:underline">← Browse components</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Link to="/docs" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Docs
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-2">{comp.name}</h1>
      <p className="text-muted-foreground text-lg mb-8">{comp.longDescription}</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Props</h2>
        <PropsTable props={comp.props} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Examples</h2>
        <div className="space-y-4">
          {comp.codeExamples.map((ex) => (
            <CodeBlock key={ex.title} code={ex.code} title={ex.title} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">Performance</h2>
        <p className="text-muted-foreground text-sm">{comp.performanceNotes}</p>
      </section>
    </motion.div>
  );
}
