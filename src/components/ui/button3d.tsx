import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

export interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "destructive" | "outline" | "ghost" | "glass";
    size?: "sm" | "md" | "lg" | "icon" | "default";
    asChild?: boolean;
    loading?: boolean;
    shadowColor?: string;
}

// Helper function for pagination compatibility
export const buttonVariants = cva(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
    {
        variants: {
            variant: {
                primary: "bg-slate-900 text-slate-50 hover:bg-slate-800 border-b-4 border-slate-950 active:border-b-0 active:translate-y-1 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 dark:border-slate-300",
                secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700 dark:border-slate-950",
                accent: "bg-cyan-500 text-white hover:bg-cyan-400 border-b-4 border-cyan-700 active:border-b-0 active:translate-y-1",
                destructive: "bg-red-500 text-white hover:bg-red-600 border-b-4 border-red-800 active:border-b-0 active:translate-y-1",
                outline: "bg-transparent border-2 border-slate-200 hover:bg-slate-100/50 text-slate-900 border-b-4 border-slate-300 active:border-b-2 active:translate-y-[2px] dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800",
                ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg active:scale-95",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 px-3 text-xs",
                md: "h-10 px-4 py-2 text-sm",
                lg: "h-12 px-8 text-base",
                icon: "h-10 w-10 p-0",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

const Button3D = React.forwardRef<HTMLButtonElement, Button3DProps>(
    ({
        className,
        variant = "primary",
        size = "md",
        asChild = false,
        loading = false,
        shadowColor,
        style,
        children,
        ...props
    }, ref) => {
        // Base styles essential for structure
        const baseStyles = "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]";

        // Variant mapping
        const variantStyles = {
            primary: `
        bg-slate-900 text-slate-50 
        hover:bg-slate-800 
        border-b-4 border-slate-950 
        active:border-b-0 active:translate-y-1
        dark:bg-slate-50 dark:text-slate-900 
        dark:hover:bg-slate-200 
        dark:border-slate-300 dark:border-b-4
      `,
            secondary: `
        bg-slate-100 text-slate-900 
        hover:bg-slate-200 
        border-b-4 border-slate-300
        active:border-b-0 active:translate-y-1
        dark:bg-slate-800 dark:text-slate-50 
        dark:hover:bg-slate-700
        dark:border-slate-950
      `,
            accent: `
        bg-cyan-500 text-white 
        hover:bg-cyan-400 
        border-b-4 border-cyan-700
        active:border-b-0 active:translate-y-1
      `,
            destructive: `
        bg-red-500 text-white 
        hover:bg-red-600 
        border-b-4 border-red-800
        active:border-b-0 active:translate-y-1
      `,
            outline: `
        bg-transparent border-2 border-slate-200 
        hover:bg-slate-100/50 text-slate-900 
        border-b-4 border-slate-300
        active:border-b-2 active:translate-y-[2px]
        dark:border-slate-700 dark:text-slate-100
        dark:border-b-4 dark:hover:bg-slate-800
      `,
            ghost: `
        hover:bg-slate-100 
        hover:text-slate-900 
        dark:hover:bg-slate-800 
        dark:hover:text-slate-50
        border-none shadow-none translate-y-0
      `,
            glass: `
        bg-white/10 backdrop-blur-md 
        border border-white/20 
        text-white 
        hover:bg-white/20 
        shadow-lg
        active:scale-95
      `
        };

        const sizeStyles = {
            default: "h-10 px-4 py-2 text-sm",
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 py-2 text-sm",
            lg: "h-12 px-8 text-base",
            icon: "h-10 w-10 p-0"
        };

        // We handle the motion props manually if not using 'asChild'
        const motionProps = {
            whileTap: { scale: 0.97 },
            transition: { type: "spring", stiffness: 400, damping: 15 }
        };

        const buttonContent = (
            <>
                {loading && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                )}
                {children}
            </>
        );

        const buttonClassName = cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className
        );

        const buttonStyle = {
            ...style,
            ...(shadowColor ? { borderColor: shadowColor } : {})
        };

        if (asChild) {
            return (
                <Slot
                    ref={ref}
                    className={buttonClassName}
                    style={buttonStyle}
                    {...props}
                >
                    {children}
                </Slot>
            );
        }

        return (
            <motion.button
                ref={ref}
                className={buttonClassName}
                style={buttonStyle}
                disabled={props.disabled || loading}
                {...motionProps}
                {...props}
            >
                {buttonContent}
            </motion.button>
        );
    }
);
Button3D.displayName = "Button3D";

export { Button3D };
