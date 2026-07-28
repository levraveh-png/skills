import { business } from "@/data/business";
import { Reveal } from "@/components/Reveal";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-stone-100">
      <div className="container grid grid-cols-2 gap-x-8 gap-y-8 py-10 sm:grid-cols-4">
        {business.trustSignals.map((signal, i) => (
          <Reveal key={signal.label} delay={i * 60}>
            <p className="font-display text-lg leading-snug text-ink">
              {signal.label}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
              {signal.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
