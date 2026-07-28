import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Picture } from "@/components/Picture";
import { Reveal } from "@/components/Reveal";

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
    <section className="container py-20 sm:py-28">
      <Reveal className="max-w-xl">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] text-ink">
          One call covers the glass and the board-up.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal
          as={Link}
          to="/board-up"
          className="group relative block aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]"
        >
          <Picture
            name="glass-hero"
            alt="Commercial storefront glass, representative of a board-up response job"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-copper-300">
              Available 24/7
            </span>
            <h3 className="mt-2 font-display text-2xl text-stone-50 sm:text-3xl">
              Board-Up Services
            </h3>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-stone-50/80">
              After-hours board-up for vandalized or damaged storefronts and
              windows &mdash; dispatched any time, day or night.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-stone-50">
              See how it works
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col divide-y divide-border border-t border-border lg:border-t-0">
          {SECONDARY_SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as={Link}
              to={service.to}
              delay={i * 70}
              className="group flex items-start justify-between gap-6 py-7 first:pt-0"
            >
              <div>
                <h3 className="font-display text-xl text-ink">{service.title}</h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper-500" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
