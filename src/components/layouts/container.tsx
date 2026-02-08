import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = "lg", ...props }, ref) => {
        const sizeStyles = {
            sm: "max-w-3xl",
            md: "max-w-5xl",
            lg: "max-w-7xl",
            xl: "max-w-[1400px]",
            full: "max-w-full",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "w-full mx-auto px-4 md:px-6 lg:px-8",
                    sizeStyles[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Container.displayName = "Container";
