import { Link } from "react-router-dom";
import { Box, ExternalLink } from "lucide-react";
import { footerNav } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-foreground font-bold text-lg mb-4">
              <Box className="w-5 h-5 text-primary" />
              My3DUI
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enterprise-grade 3D components for React.
            </p>
          </div>

          {Object.entries(footerNav).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-foreground font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {item.label}
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 My3DUI. MIT License.</span>
          <span>Built with React Three Fiber</span>
        </div>
      </div>
    </footer>
  );
}
