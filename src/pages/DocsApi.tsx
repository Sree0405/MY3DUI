import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getComponentBySlug } from "@/data/component-registry";
import { usePageMeta } from "@/hooks/use-page-meta";
import PropsTable from "@/components/docs/PropsTable";

export default function DocsApi() {
  const { name } = useParams<{ name: string }>();
  const comp = getComponentBySlug(name || "");

  usePageMeta({
    title: comp ? `${comp.name} API` : "API Reference",
    description: comp ? `API reference for ${comp.name}` : "API reference documentation.",
  });

  if (!comp) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-foreground mb-2">API not found</h1>
        <Link to="/docs" className="text-primary hover:underline">← Back to Docs</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Link to="/docs" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Docs
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-2">{comp.name} API</h1>
      <p className="text-muted-foreground mb-8">Complete API reference for the {comp.name} component.</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Import</h2>
        <div className="glass rounded-xl p-4 border-glow">
          <code className="text-sm font-mono text-primary">
            {`import { ${comp.name} } from '@my3dui/core'`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Props</h2>
        <PropsTable props={comp.props} />
      </section>

      {comp.relatedComponents.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">See Also</h2>
          <div className="flex flex-wrap gap-2">
            {comp.relatedComponents.map((slug) => (
              <Link key={slug} to={`/docs/api/${slug}`} className="glass px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors">
                {slug}
              </Link>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
