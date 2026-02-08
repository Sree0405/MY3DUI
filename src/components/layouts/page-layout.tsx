import React from "react";
import { cn } from "@/lib/utils";

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    sidebar?: React.ReactNode;
    sidebarPosition?: "left" | "right";
}

export const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
    ({ className, header, footer, sidebar, sidebarPosition = "left", children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("min-h-screen flex flex-col", className)} {...props}>
                {header && (
                    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        {header}
                    </header>
                )}

                <div className="flex-1 flex">
                    {sidebar && sidebarPosition === "left" && (
                        <aside className="w-64 border-r bg-muted/40 p-4">
                            {sidebar}
                        </aside>
                    )}

                    <main className="flex-1">
                        {children}
                    </main>

                    {sidebar && sidebarPosition === "right" && (
                        <aside className="w-64 border-l bg-muted/40 p-4">
                            {sidebar}
                        </aside>
                    )}
                </div>

                {footer && (
                    <footer className="border-t bg-muted/40">
                        {footer}
                    </footer>
                )}
            </div>
        );
    }
);
PageLayout.displayName = "PageLayout";
