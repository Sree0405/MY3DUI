import React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "row" | "col";
    gap?: number | string;
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    wrap?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({
        className,
        direction = "col",
        gap = 4,
        align = "stretch",
        justify = "start",
        wrap = false,
        style,
        ...props
    }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex",
                    direction === "col" ? "flex-col" : "flex-row",
                    wrap && "flex-wrap",
                    {
                        "items-start": align === "start",
                        "items-center": align === "center",
                        "items-end": align === "end",
                        "items-stretch": align === "stretch",
                        "justify-start": justify === "start",
                        "justify-center": justify === "center",
                        "justify-end": justify === "end",
                        "justify-between": justify === "between",
                        "justify-around": justify === "around",
                        "justify-evenly": justify === "evenly",
                    },
                    className
                )}
                style={{
                    gap: typeof gap === 'number' ? `${gap * 0.25}rem` : gap,
                    ...style
                }}
                {...props}
            />
        );
    }
);
Stack.displayName = "Stack";
