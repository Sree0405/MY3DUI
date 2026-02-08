import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Box, BookOpen, Layers, X } from "lucide-react";
import { useSearch, type SearchResult } from "@/hooks/use-search";

const typeIcons: Record<string, typeof Box> = {
  component: Box,
  blog: FileText,
  guide: BookOpen,
  page: Layers,
};

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const { query, setQuery, results } = useSearch();
  const navigate = useNavigate();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((o) => !o);
    }
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSelect = (result: SearchResult) => {
    navigate(result.href);
    setOpen(false);
    setQuery("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-lg mx-4 glass rounded-2xl overflow-hidden shadow-2xl border-glow animate-fade-up">
        <div className="flex items-center gap-3 px-4 border-b border-border/30">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components, docs, blog..."
            className="flex-1 py-4 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button onClick={() => setOpen(false)} className="p-1 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.map((result, i) => {
              const Icon = typeIcons[result.type] || Box;
              return (
                <button
                  key={`${result.type}-${i}`}
                  onClick={() => handleSelect(result)}
                  className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 text-left transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{result.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{result.description}</div>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/50 uppercase shrink-0 mt-0.5">{result.type}</span>
                </button>
              );
            })}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-8 text-center text-muted-foreground text-sm">
            No results for "{query}"
          </div>
        )}

        <div className="px-4 py-2 border-t border-border/30 text-xs text-muted-foreground/50 flex gap-4">
          <span><kbd className="glass px-1.5 py-0.5 rounded text-[10px]">↑↓</kbd> navigate</span>
          <span><kbd className="glass px-1.5 py-0.5 rounded text-[10px]">↵</kbd> select</span>
          <span><kbd className="glass px-1.5 py-0.5 rounded text-[10px]">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
