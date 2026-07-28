import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

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
    <section className="bg-ink text-stone-50">
      <div className="container grid gap-10 py-20 lg:grid-cols-[1.2fr_auto] lg:items-center lg:py-24">
        <Reveal>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-stone-50/70">
            {description}
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <Button asChild size="lg" variant="accent" className="justify-between">
            <Link to="/contact">
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline-light" className="justify-between">
            <a href={business.phone.href}>
              <Phone className="h-4 w-4" />
              {business.phone.display}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
