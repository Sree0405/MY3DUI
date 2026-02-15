import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Box, Search, ChevronDown, ExternalLink } from "lucide-react";
import { megaMenuGroups, type NavGroup } from "@/data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeout = useRef<NodeJS.Timeout>();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (label: string) => {
    clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const handleSearchClick = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2.5 text-foreground font-bold text-xl">
          <Box className="w-6 h-6 text-primary" />
          <span>My3DUI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {megaMenuGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => handleMenuEnter(group.label)}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
                {group.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === group.label ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === group.label && (
                  <MegaMenuDropdown group={group} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={handleSearchClick}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="hidden xl:inline">Search</span>
            <kbd className="hidden xl:inline text-[10px] font-mono glass px-1.5 py-0.5 rounded">⌘K</kbd>
          </button>
          <a
            href="https://github.com/sree0405/my3dui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <Github className="w-5 h-5" />
          </a>
          <Link
            to="/docs/getting-started"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/30 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
              {megaMenuGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {group.label}
                  </h4>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <MobileNavItem key={item.label} item={item} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-border/30">
                <Link
                  to="/docs/getting-started"
                  className="block w-full text-center bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function MegaMenuDropdown({ group }: { group: NavGroup }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 pt-2"
    >
      <div className="glass rounded-xl p-2 min-w-[220px] shadow-xl border-glow">
        {group.items.map((item) => {
          const isExternal = item.external;
          const Comp = isExternal ? "a" : Link;
          const props = isExternal
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : { to: item.href };

          return (
            <Comp
              key={item.label}
              {...(props as any)}
              className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-primary/10 transition-colors group"
            >
              <div>
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                )}
              </div>
              {isExternal && <ExternalLink className="w-3 h-3 text-muted-foreground/50" />}
            </Comp>
          );
        })}
      </div>
    </motion.div>
  );
}

function MobileNavItem({ item }: { item: { label: string; href: string; external?: boolean } }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
      >
        {item.label}
        <ExternalLink className="w-3 h-3 opacity-50" />
      </a>
    );
  }

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-lg text-sm transition-colors ${
          isActive
            ? "text-primary bg-primary/10 font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`
      }
    >
      {item.label}
    </NavLink>
  );
}
