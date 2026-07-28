import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

interface EstimateCtaProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function EstimateCta({
  eyebrow = "Get started",
  title = "Tell us what happened — we'll take it from here.",
  description = "Share a few details and we'll follow up fast with next steps and pricing. For anything urgent, calling gets you the quickest response.",
}: EstimateCtaProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-stone-50">
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, #9C5F35 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" aria-hidden="true" />

      <div className="container relative grid gap-10 py-20 lg:grid-cols-[1.2fr_auto] lg:items-center lg:py-28">
        <Reveal variant="up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.08]">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-stone-50/65">
            {description}
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.1} className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <Magnetic>
            <Button asChild size="lg" variant="accent" className="w-full justify-between">
              <Link to="/contact">
                Get a Free Estimate
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline-light" className="w-full justify-between">
              <a href={business.phone.href}>
                <Phone className="size-4" />
                {business.phone.display}
              </a>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
