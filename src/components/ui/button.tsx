import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-stone-50 hover:bg-copper-600 rounded-sm",
        accent:
          "bg-copper-500 text-stone-50 hover:bg-copper-600 rounded-sm",
        outline:
          "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 rounded-sm",
        "outline-light":
          "border border-stone-50/40 text-stone-50 hover:border-stone-50 hover:bg-stone-50/10 rounded-sm",
        ghost: "text-ink hover:text-copper-500",
        link: "text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-copper-500 hover:text-copper-600",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-[13px]",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
        inline: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
