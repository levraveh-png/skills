import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Picture } from "@/components/Picture";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const PREVIEW = [
  { image: "glass-hero", title: "Storefront glass replacement", tag: "Commercial" },
  { image: "glass-interior-detail", title: "Glass installation detail", tag: "Commercial" },
  { image: "frameless-shower", title: "Frameless shower glass", tag: "Residential" },
];

export function FeaturedProjects() {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <Eyebrow>The kind of work we handle</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] text-ink">
              Storefronts, showers, and everything in between.
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Photos below are representative of our work while we build out
              a gallery of real completed jobs.
            </p>
          </Reveal>
          <Button asChild variant="link" size="inline" className="mb-1">
            <Link to="/projects">
              View all work
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PREVIEW.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <Picture
                  name={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-copper-600">
                {item.tag}
              </p>
              <p className="mt-1 font-display text-lg text-ink">{item.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
