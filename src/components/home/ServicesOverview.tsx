import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Picture } from "@/components/Picture";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

const SECONDARY_SERVICES = [
  {
    title: "Glass Replacement",
    description: "Storefront panes, entry glass, and general glass replacement.",
    to: "/glass-replacement",
  },
  {
    title: "Storefronts",
    description: "New storefront glass installation and repair for retail and commercial spaces.",
    to: "/glass-replacement#storefronts",
  },
  {
    title: "Frameless Shower Glass",
    description: "Custom frameless shower enclosures, measured and installed on site.",
    to: "/glass-replacement#frameless-shower",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-stone-50 py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal variant="up" className="max-w-xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] text-ink">
              One call covers the
              <br />
              <span className="italic font-editorial text-copper-600">glass</span> and the board-up.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal
            variant="scale"
            className="relative aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[460px]"
          >
            <Link to="/board-up" className="group relative block h-full w-full">
              <Parallax speed={0.12} className="absolute inset-0">
                <Picture
                  name="glass-hero"
                  alt="Commercial storefront glass, representative of a board-up response job"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-copper-300">
                  Available 24/7
                </span>
                <h3 className="mt-2 font-display text-2xl text-stone-50 sm:text-3xl">
                  Board-Up Services
                </h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-stone-50/80">
                  After-hours board-up for vandalized or damaged storefronts and
                  windows — dispatched any time, day or night.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-stone-50">
                  See how it works
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <RevealGroup className="flex flex-col divide-y divide-border border-t border-border lg:border-t-0" stagger={0.08}>
            {SECONDARY_SERVICES.map((service) => (
              <RevealItem key={service.title} variant="right">
                <Link
                  to={service.to}
                  className="group flex items-start justify-between gap-6 py-8 first:pt-0"
                >
                  <div>
                    <h3 className="font-display text-xl text-ink transition-colors group-hover:text-copper-600">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-copper-500" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
