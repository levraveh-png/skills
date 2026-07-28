import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <div className="container py-14 sm:py-20">
      <Reveal className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-ink">
          {title}
        </h1>
        {children && (
          <div className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {children}
          </div>
        )}
      </Reveal>
    </div>
  );
}
