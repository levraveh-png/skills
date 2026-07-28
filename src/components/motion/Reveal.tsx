import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { EASE_PREMIUM } from "@/lib/motion";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "clip" | "fade";

const VARIANTS: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 56 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 64 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -64 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  clip: {
    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
    visible: { clipPath: "inset(0 0 0% 0)", opacity: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  stagger?: number;
  once?: boolean;
}

export function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  duration = 0.9,
  className,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const MotionTag = motion(as as ElementType) as ElementType;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </MotionTag>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
  amount?: number;
  once?: boolean;
}

const GROUP_VARIANTS: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.08,
  amount = 0.2,
  once = true,
}: RevealGroupProps) {
  const MotionTag = motion(as as ElementType) as ElementType;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={GROUP_VARIANTS}
      custom={stagger}
    >
      {children}
    </MotionTag>
  );
}

interface RevealItemProps {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  className?: string;
  duration?: number;
  [key: string]: unknown;
}

export function RevealItem({
  children,
  as = "div",
  variant = "up",
  className,
  duration = 0.7,
  ...rest
}: RevealItemProps) {
  const MotionTag = motion(as as ElementType) as ElementType;
  return (
    <MotionTag
      className={className}
      variants={VARIANTS[variant]}
      transition={{ duration, ease: EASE_PREMIUM }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
