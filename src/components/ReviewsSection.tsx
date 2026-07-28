import { Star, Quote } from "lucide-react";
import { business } from "@/data/business";
import { reviews } from "@/data/reviews";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="w-[min(85vw,420px)] shrink-0 border border-border bg-white p-8">
      <Quote className="size-6 text-copper-400" aria-hidden="true" />
      <p className="mt-5 font-display text-xl leading-snug text-ink">
        &ldquo;{review.quote}&rdquo;
      </p>
      <p className="mt-5 text-sm font-medium text-muted-foreground">
        {review.name} &middot; {review.source} review
      </p>
    </div>
  );
}

export function ReviewsSection() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="border-t border-border bg-stone-100 py-24 sm:py-32">
      <div className="container">
        <Reveal variant="up" className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>What customers say</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] text-ink">
              Real reviews, real customers.
            </h2>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-6xl text-ink">
              {business.rating.value.toFixed(1)}
            </span>
            <div>
              <div className="flex gap-0.5 text-copper-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Rated on {business.rating.source}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal variant="fade" delay={0.2} className="mt-14 overflow-hidden">
        <div className="scrollbar-none flex w-max animate-marquee gap-6 [animation-duration:38s] hover:[animation-play-state:paused]">
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
