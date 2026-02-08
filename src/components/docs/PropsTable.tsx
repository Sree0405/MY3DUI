import type { PropDef } from "@/data/component-registry";

interface PropsTableProps {
  props: PropDef[];
}

export default function PropsTable({ props }: PropsTableProps) {
  if (!props.length) return null;

  return (
    <div className="overflow-x-auto rounded-xl glass border-glow">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/30">
            <th className="text-left p-4 text-foreground font-semibold">Prop</th>
            <th className="text-left p-4 text-foreground font-semibold">Type</th>
            <th className="text-left p-4 text-foreground font-semibold">Default</th>
            <th className="text-left p-4 text-foreground font-semibold hidden md:table-cell">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border/20 last:border-0">
              <td className="p-4">
                <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-1.5 text-destructive text-xs">*</span>
                )}
              </td>
              <td className="p-4">
                <code className="text-accent font-mono text-xs">{prop.type}</code>
              </td>
              <td className="p-4">
                <code className="text-muted-foreground font-mono text-xs">{prop.default}</code>
              </td>
              <td className="p-4 text-muted-foreground text-xs hidden md:table-cell max-w-xs">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
