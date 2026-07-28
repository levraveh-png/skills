import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Picture } from "@/components/Picture";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const PREVIEW = [
  { image: "glass-hero", title: "Storefront glass replacement", tag: "Commercial" },
  { image: "glass-interior-detail", title: "Glass installation detail", tag: "Commercial" },
  { image: "frameless-shower", title: "Frameless shower glass", tag: "Residential" },
  { image: "glass-detail", title: "Commercial facade detail", tag: "Commercial" },
];

export function FeaturedProjects() {
  return (
    <section className="border-t border-border bg-white py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal variant="up" className="max-w-xl">
            <Eyebrow>The kind of work we handle</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] text-ink">
              Storefronts, showers,
              <br /> and everything between.
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Photos below are representative of our work while we build out
              a gallery of real completed jobs.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={0.15}>
            <Button asChild variant="link" size="inline">
              <Link to="/projects">
                View all work
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>

      <Reveal variant="fade" delay={0.2} className="mt-14">
        <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-[max(1.25rem,calc((100vw-1200px)/2+1.25rem))]">
          {PREVIEW.map((item) => (
            <div
              key={item.title}
              className="group w-[78vw] shrink-0 snap-start sm:w-[360px]"
            >
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
            </div>
          ))}
          <div className="w-px shrink-0" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
