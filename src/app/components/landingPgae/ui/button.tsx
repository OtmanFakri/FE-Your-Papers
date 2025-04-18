import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-blue-600 text-white shadow hover:bg-blue-600/90",
                destructive:
                    "bg-red-600 text-white shadow-sm hover:bg-red-600/90",
                outline:
                    "border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900",
                secondary:
                    "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80",
                ghost: "hover:bg-gray-100 hover:text-gray-900",
                link: "text-blue-600 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const buttonClass = cn(buttonVariants({ variant, size, className }));

        if (asChild) {
            return (
                <Button  className={buttonClass} {...props}>
                    {children}
                </Button>
            );
        }

        return (
            <button className={buttonClass} ref={ref} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };