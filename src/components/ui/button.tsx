import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium tracking-wide before:absolute before:inset-0 before:origin-left before:scale-x-0 before:transition-transform before:duration-[450ms] before:ease-[cubic-bezier(0.65,0,0.35,1)] hover:before:scale-x-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none [&>span]:relative [&>span]:z-10",
  {
    variants: {
      variant: {
        primary: "rounded-sm bg-ink text-stone-50 before:bg-copper-600",
        accent: "rounded-sm bg-copper-500 text-stone-50 before:bg-copper-700",
        outline: "rounded-sm border border-ink/25 text-ink before:bg-ink hover:text-stone-50 hover:border-ink",
        "outline-light": "rounded-sm border border-stone-50/40 text-stone-50 before:bg-stone-50 hover:text-ink",
        ghost: "text-ink transition-colors duration-200 hover:text-copper-500 before:hidden",
        link: "text-ink underline underline-offset-4 decoration-ink/30 transition-colors duration-200 hover:decoration-copper-500 hover:text-copper-600 before:hidden",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-[13px]",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
        inline: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ConflictingProps = "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ConflictingProps>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? MotionSlot : MotionButton;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as never}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <span className="inline-flex items-center gap-2">{children}</span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
