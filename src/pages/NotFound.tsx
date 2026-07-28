import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noIndex
      />
      <div className="relative flex min-h-[100svh] flex-col items-start justify-center overflow-hidden bg-ink text-stone-50">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, #9C5F35 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-display text-[clamp(10rem,32vw,26rem)] leading-none text-stroke-copper text-transparent opacity-[0.18]"
          aria-hidden="true"
        >
          404
        </span>

        <div className="container relative">
          <Reveal variant="up">
            <Eyebrow light>Cracked, not broken</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,5.5vw,3.75rem)] font-medium leading-[1.02]">
              <SplitText text="This page didn't" />
              <br />
              <span className="italic font-editorial text-copper-300">
                <SplitText text="make it." delay={0.2} />
              </span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-50/65">
              The page you're looking for may have moved or the link's out of
              date. Let's get you back to solid ground.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Magnetic>
                <Button asChild size="lg" variant="accent">
                  <Link to="/">
                    Back to Home
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="lg" variant="outline-light">
                  <a href={business.phone.href}>
                    <Phone className="size-4" />
                    {business.phone.display}
                  </a>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
