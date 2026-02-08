import { Outlet, NavLink, useLocation } from "react-router-dom";
import { docsSidebarNav } from "@/data/navigation";
import { ChevronRight } from "lucide-react";

export default function DocsLayout() {
  const { pathname } = useLocation();

  return (
    <div className="pt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-24 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
              {docsSidebarNav.map((group) => (
                <div key={group.title}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {group.title}
                  </h4>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <NavLink
                          to={item.href}
                          end={item.href === "/docs"}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                              isActive
                                ? "text-primary bg-primary/10 font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`
                          }
                        >
                          <ChevronRight className="w-3 h-3 opacity-50" />
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 max-w-3xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
