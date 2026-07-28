import { Star } from "lucide-react";
import { business } from "@/data/business";
import { reviews } from "@/data/reviews";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function ReviewsSection() {
  return (
    <section className="border-t border-border bg-stone-100">
      <div className="container grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <Eyebrow>What customers say</Eyebrow>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-6xl text-ink">
              {business.rating.value.toFixed(1)}
            </span>
            <div>
              <div className="flex gap-0.5 text-copper-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Rated on {business.rating.source}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            These are real reviews from real customers, shown as they were
            written on Google.
          </p>
        </Reveal>

        <div className="divide-y divide-border">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 80}
              className="py-6 first:pt-0 last:pb-0"
            >
              <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {review.name} &middot; {review.source} review
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
