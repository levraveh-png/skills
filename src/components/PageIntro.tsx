import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

interface Crumb {
  name: string;
  path: string;
}

interface PageIntroProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  breadcrumbs?: Crumb[];
  compact?: boolean;
}

export function PageIntro({ eyebrow, title, children, breadcrumbs = [], compact = false }: PageIntroProps) {
  return (
    <section className={`relative overflow-hidden bg-ink ${compact ? "pb-14 pt-32" : "pb-20 pt-36 sm:pb-28 sm:pt-44"}`}>
      <div
        className="pointer-events-none absolute -right-1/4 -top-1/3 h-[500px] w-[500px] opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, #9C5F35 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" aria-hidden="true" />

      <div className="container relative">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-stone-50/45">
            <li>
              <Link to="/" className="hover:text-stone-50">
                Home
              </Link>
            </li>
            {breadcrumbs.map((item, i) => (
              <li key={item.path} className="flex items-center gap-1.5">
                <ChevronRight className="size-3" aria-hidden="true" />
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page" className="text-stone-50/80">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.path} className="hover:text-stone-50">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal variant="up" className="max-w-2xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.05] text-stone-50">
            {title}
          </h1>
          {children && (
            <div className="mt-5 text-lg leading-relaxed text-stone-50/65">
              {children}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
