import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star } from "lucide-react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Picture } from "@/components/Picture";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-100">
      <div className="container grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-0">
        <div className="lg:py-20">
          <div className="inline-flex items-center gap-2 border border-copper-500/30 bg-copper-50 px-3 py-1.5 text-[12.5px] font-medium text-copper-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-copper-500" />
            </span>
            Open 24 hours &mdash; emergency board-up dispatched anytime
          </div>

          <h1 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,5.2vw,3.75rem)] leading-[1.06] text-ink">
            Glass repair and board-up, day or night.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            AMPM Glass and Board Up handles emergency board-up, storefront
            glass, and glass replacement across {business.serviceArea.region}.
            Call any time &mdash; we call ahead before we arrive.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link to="/contact">
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={business.phone.href}>
                <Phone className="h-4 w-4 text-copper-500" />
                {business.phone.display}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2.5 text-sm text-muted-foreground">
            <div className="flex gap-0.5 text-copper-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span>
              {business.rating.value.toFixed(1)} rating on {business.rating.source}
            </span>
          </div>
        </div>

        <div className="relative -mx-5 aspect-[4/3] sm:mx-0 lg:aspect-auto lg:h-[560px]">
          <Picture
            name="glass-hero"
            alt="Storefront glass windows on a brick commercial building"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
