import { Phone, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";
import { SplitText } from "@/components/motion/SplitText";
import { Button } from "@/components/ui/button";
import { Picture } from "@/components/Picture";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EstimateCta } from "@/components/EstimateCta";

const FAQS = [
  {
    question: "What's the difference between tempered and laminated glass?",
    answer:
      "Tempered glass is heat-treated to break into small, rounded pieces rather than sharp shards — the standard for most storefronts and doors. Laminated glass has an inner layer that holds the pane together even when cracked, which adds a layer of security worth considering for higher-risk locations.",
  },
  {
    question: "Can you match the glass in my existing storefront?",
    answer:
      "In most cases, yes. We'll look at the thickness, tint, and frame system already in place before ordering replacement glass so the new pane fits and looks right.",
  },
  {
    question: "How long does a storefront glass replacement take?",
    answer:
      "It depends on the size and whether the glass is a standard stock size or a custom cut. We'll give you a realistic timeline once we've seen the opening.",
  },
  {
    question: "Do you install frameless shower doors in an existing bathroom?",
    answer:
      "Yes — we measure the space on site and have the glass cut to fit, rather than working from a stock size that may not match your shower.",
  },
  {
    question: "Is emergency glass replacement available?",
    answer:
      "For urgent situations we can often turn around a replacement quickly, though timing depends on parts availability. If the opening needs to be secured right away, board-up covers the gap in the meantime.",
  },
];

export default function GlassReplacement() {
  return (
    <>
      <Seo
        title="Glass Replacement, Storefronts & Frameless Showers"
        description={`Glass replacement, storefront glass installation, and frameless shower glass across ${business.serviceArea.region}.`}
        path="/glass-replacement"
        jsonLd={[
          breadcrumbSchema([{ name: "Glass Replacement", path: "/glass-replacement" }]),
          serviceSchema({
            name: "Glass Replacement",
            description:
              "Glass replacement, storefront glass installation and repair, and frameless shower glass.",
            path: "/glass-replacement",
          }),
          faqSchema(FAQS),
        ]}
      />

      <section className="relative overflow-hidden bg-ink text-stone-50">
        <div
          className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] translate-x-1/3 opacity-20 blur-[110px]"
          style={{ background: "radial-gradient(circle, #9C5F35 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -left-6 bottom-0 select-none font-display text-[clamp(6rem,16vw,12rem)] leading-none text-stroke-copper text-transparent opacity-[0.14]"
          aria-hidden="true"
        >
          GLASS
        </span>

        <div className="container relative">
          <nav aria-label="Breadcrumb" className="pt-32 text-xs text-stone-50/45">
            <span>Home</span> <span className="mx-1.5">/</span>{" "}
            <span className="text-stone-50/80">Glass Replacement</span>
          </nav>

          <div className="grid gap-10 pb-24 pt-8 sm:pb-32 lg:grid-cols-2 lg:items-center">
            <Reveal variant="scale" className="order-2 aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
              <Parallax speed={0.12} className="h-full w-full">
                <Picture
                  name="glass-interior-detail"
                  alt="Large black-framed glass windows in a modern interior"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </Parallax>
            </Reveal>

            <Reveal variant="up" className="order-1 lg:order-2">
              <Eyebrow light>Glass replacement</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] font-medium leading-[1.0]">
                <SplitText text="Glass replaced right," />
                <br />
                <span className="italic font-editorial text-copper-300">
                  <SplitText text="storefront" delay={0.2} />
                </span>{" "}
                <SplitText text="to shower." delay={0.35} />
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-50/70">
                From a cracked storefront pane to a new frameless shower
                enclosure, glass gets measured, cut, and installed to fit the
                space it's going into.
              </p>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <Magnetic>
                  <Button asChild size="lg" variant="accent">
                    <a href="/contact">
                      Get a Free Estimate
                      <ArrowRight className="size-4" />
                    </a>
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
      </section>

      <section className="container py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal variant="right">
            <Eyebrow>General glass replacement</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.12] text-ink">
              Cracked, broken, or foggy glass, replaced.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Not every glass job is an emergency. Cracked panes, foggy
              double-glazed units, and worn or outdated glass all get
              measured and replaced with the right glass for the opening —
              matched to the existing thickness and frame wherever possible.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={0.1} className="aspect-video overflow-hidden rounded-sm lg:aspect-auto">
            <Parallax speed={0.12} className="h-full w-full">
              <Picture
                name="glass-detail"
                alt="Detail of a modern glass building facade"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <section id="storefronts" className="border-t border-border bg-stone-100 py-24 sm:py-32 scroll-mt-24">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="scale" className="order-2 aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
            <Parallax speed={0.12} className="h-full w-full">
              <Picture
                name="glass-hero"
                alt="Storefront glass windows in a commercial brick building"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </Reveal>
          <Reveal variant="left" delay={0.1} className="order-1 lg:order-2">
            <Eyebrow>Storefronts</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.12] text-ink">
              New storefront glass, installed and sealed properly.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Whether it's a full storefront system or a single damaged
              pane, glass gets set into the existing frame or a new one,
              sealed against the weather, and left clean.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="frameless-shower" className="py-24 sm:py-32 scroll-mt-24">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="right">
            <Eyebrow>Frameless shower glass</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.12] text-ink">
              A custom fit, not a stock size.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Frameless shower enclosures are measured on site so the glass
              fits your shower exactly — not the other way around. Hardware
              and glass thickness are chosen to suit the space.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={0.1} className="aspect-[4/3] overflow-hidden rounded-sm">
            <Parallax speed={0.12} className="h-full w-full">
              <Picture
                name="frameless-shower"
                alt="Modern frameless glass shower enclosure with tile"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-stone-100 py-24 sm:py-32 scroll-mt-24">
        <div className="container">
          <Reveal variant="up" className="max-w-xl">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.9rem)] leading-[1.05] text-ink">
              Glass replacement, answered plainly.
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <EstimateCta />
    </>
  );
}
