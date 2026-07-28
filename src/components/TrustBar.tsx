import { business } from "@/data/business";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-4 sm:pb-24">
      <div className="container">
        <RevealGroup
          as="div"
          stagger={0.1}
          className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-stone-50/10 pt-12 sm:grid-cols-4"
        >
          {business.trustSignals.map((signal) => (
            <RevealItem key={signal.label} variant="up">
              <p className="font-display text-lg leading-snug text-stone-50">
                {signal.label}
              </p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-stone-50/50">
                {signal.detail}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
      <Reveal variant="fade" delay={0.3} className="mt-16 hidden sm:block">
        <div className="overflow-hidden border-y border-stone-50/10 py-4">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-stone-50/25">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-10">
                Los Angeles
                <span className="text-copper-500">&middot;</span>
                24 Hours
                <span className="text-copper-500">&middot;</span>
                Glass &amp; Board-Up
                <span className="text-copper-500">&middot;</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
