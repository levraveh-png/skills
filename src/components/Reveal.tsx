import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
  delay?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  children,
  as,
  className,
  delay = 0,
  style,
  ...props
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...(style as object) }}
      {...props}
    >
      {children}
    </Tag>
  );
}
