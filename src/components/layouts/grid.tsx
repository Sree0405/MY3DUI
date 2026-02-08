import React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
    gap?: number | string;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    ({ className, cols = 1, gap = 4, style, ...props }, ref) => {

        // Helper to generate grid-template-columns style if simple number is passed
        const gridStyle = typeof cols === 'number'
            ? { gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }
            : {};

        const responsiveClasses = typeof cols === 'object' ? Object.entries(cols).map(([breakpoint, val]) => {
            return `${breakpoint}:grid-cols-${val}`;
        }).join(' ') : '';

        return (
            <div
                ref={ref}
                className={cn(
                    "grid",
                    typeof cols === 'number' ? "" : responsiveClasses, // using Tailwind's predefined grid-cols- if possible, but simplest is style override for arbitrary
                    className
                )}
                style={{
                    gap: typeof gap === 'number' ? `${gap * 0.25}rem` : gap,
                    ...gridStyle,
                    ...style
                }}
                {...props}
            />
        );
    }
);
Grid.displayName = "Grid";
