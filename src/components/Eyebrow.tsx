import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, light = false }: { children: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-copper-500" aria-hidden="true" />
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.16em]",
          light ? "text-copper-400" : "text-copper-600",
        )}
      >
        {children}
      </span>
    </div>
  );
}
