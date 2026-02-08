import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    fullWidth?: boolean;
    background?: "default" | "muted" | "brand" | "glass";
    containerSize?: "sm" | "md" | "lg" | "xl" | "full";
    noPadding?: boolean;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({
        className,
        children,
        fullWidth = false,
        background = "default",
        containerSize = "lg",
        noPadding = false,
        ...props
    }, ref) => {

        const backgrounds = {
            default: "bg-background text-foreground",
            muted: "bg-muted text-muted-foreground",
            brand: "bg-primary text-primary-foreground",
            glass: "bg-background/80 backdrop-blur-sm border-y border-border/50",
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "relative w-full",
                    !noPadding && "py-12 md:py-24 lg:py-32",
                    backgrounds[background],
                    className
                )}
                {...props}
            >
                {fullWidth ? (
                    children
                ) : (
                    <Container size={containerSize}>
                        {children}
                    </Container>
                )}
            </section>
        );
    }
);
Section.displayName = "Section";
