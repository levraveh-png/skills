import { business } from "@/data/business";
import { Picture } from "@/components/Picture";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function ServiceArea() {
  return (
    <section className="border-t border-border bg-white">
      <div className="container grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal className="aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-auto">
          <Picture
            name="service-area-la"
            alt="A Los Angeles street lined with palm trees and storefronts"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="mt-4 max-w-md font-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.1] text-ink">
            Based in North Hollywood, serving {business.serviceArea.region}.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Board-up gets dispatched anywhere we can reach quickly. Glass
            replacement and shower installs run throughout the same area on
            a scheduled visit.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {business.serviceArea.cities.map((city) => (
              <li
                key={city}
                className="border border-border px-3.5 py-1.5 text-sm text-ink/80"
              >
                {city}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
