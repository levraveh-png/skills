import { business } from "@/data/business";
import { Picture } from "@/components/Picture";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export function ServiceArea() {
  return (
    <section className="border-t border-border bg-white">
      <div className="container grid gap-12 py-24 sm:py-32 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="scale" className="aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11] lg:aspect-auto">
          <Parallax speed={0.15} className="h-full w-full">
            <Picture
              name="service-area-la"
              alt="A Los Angeles street lined with palm trees and storefronts"
              className="h-full w-full object-cover"
            />
          </Parallax>
        </Reveal>

        <Reveal variant="left">
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="mt-4 max-w-md font-display text-[clamp(2rem,4vw,2.9rem)] leading-[1.05] text-ink">
            Based in North Hollywood, serving {business.serviceArea.region}.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Board-up gets dispatched anywhere we can reach quickly. Glass
            replacement and shower installs run throughout the same area on
            a scheduled visit.
          </p>
          <RevealGroup as="ul" stagger={0.04} className="mt-7 flex flex-wrap gap-2.5">
            {business.serviceArea.cities.map((city) => (
              <RevealItem as="li" key={city} variant="scale">
                <span className="inline-block border border-border px-3.5 py-1.5 text-sm text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-copper-400 hover:text-copper-600">
                  {city}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
