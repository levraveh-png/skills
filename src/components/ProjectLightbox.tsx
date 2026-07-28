import { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Picture } from "@/components/Picture";
import type { Project } from "@/data/projects";

interface ProjectLightboxProps {
  projects: readonly Project[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}

export function ProjectLightbox({ projects, index, onIndexChange }: ProjectLightboxProps) {
  const open = index !== null;
  const project = open ? projects[index] : null;

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") onIndexChange(((index as number) + 1) % projects.length);
      if (e.key === "ArrowLeft") onIndexChange(((index as number) - 1 + projects.length) % projects.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, projects.length, onIndexChange]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(v) => !v && onIndexChange(null)}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/90 data-[state=open]:animate-fade-in" />
        <DialogPrimitive.Content
          className="fixed inset-4 z-50 flex flex-col items-center justify-center focus:outline-none sm:inset-10"
          aria-describedby={undefined}
        >
          {project && (
            <>
              <DialogPrimitive.Title className="sr-only">
                {project.title}
              </DialogPrimitive.Title>
              <div className="relative flex max-h-full max-w-3xl flex-col">
                <Picture
                  name={project.image}
                  alt={project.description}
                  className="max-h-[70vh] w-full object-contain"
                  loading="eager"
                />
                <div className="mt-4 text-center text-stone-50">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-copper-400">
                    {project.category} &middot; {project.scope}
                  </p>
                  <p className="mt-1 font-display text-lg">{project.title}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onIndexChange((index! - 1 + projects.length) % projects.length)}
                className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-stone-50/70 hover:text-stone-50 sm:left-4"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={() => onIndexChange((index! + 1) % projects.length)}
                className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-stone-50/70 hover:text-stone-50 sm:right-4"
                aria-label="Next project"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <DialogPrimitive.Close
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-stone-50/70 hover:text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
