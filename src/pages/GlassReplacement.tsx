import { Phone, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
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

      <Breadcrumbs items={[{ name: "Glass Replacement", path: "/glass-replacement" }]} />

      <section className="bg-stone-100">
        <div className="container grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Glass replacement</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,4.8vw,3.5rem)] leading-[1.06] text-ink">
              Glass replaced right, storefront to shower.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              From a cracked storefront pane to a new frameless shower
              enclosure, glass gets measured, cut, and installed to fit the
              space it's going into.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <a href="/contact">
                  Get a Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={business.phone.href}>
                  <Phone className="h-4 w-4 text-copper-500" />
                  {business.phone.display}
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="aspect-[4/3] overflow-hidden">
            <Picture
              name="glass-interior-detail"
              alt="Large black-framed glass windows in a modern interior"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </Reveal>
        </div>
      </section>

      <section className="container py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>General glass replacement</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
              Cracked, broken, or foggy glass, replaced.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Not every glass job is an emergency. Cracked panes, foggy
              double-glazed units, and worn or outdated glass all get
              measured and replaced with the right glass for the opening —
              matched to the existing thickness and frame wherever possible.
            </p>
          </Reveal>
          <Reveal delay={100} className="aspect-video overflow-hidden lg:aspect-auto">
            <Picture
              name="glass-detail"
              alt="Detail of a modern glass building facade"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section id="storefronts" className="border-t border-border bg-stone-100 py-20 sm:py-28 scroll-mt-20">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="order-2 aspect-[4/3] overflow-hidden lg:order-1">
            <Picture
              name="glass-hero"
              alt="Storefront glass windows in a commercial brick building"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <Eyebrow>Storefronts</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
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

      <section id="frameless-shower" className="py-20 sm:py-28 scroll-mt-20">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Frameless shower glass</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
              A custom fit, not a stock size.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Frameless shower enclosures are measured on site so the glass
              fits your shower exactly — not the other way around. Hardware
              and glass thickness are chosen to suit the space.
            </p>
          </Reveal>
          <Reveal delay={100} className="aspect-[4/3] overflow-hidden">
            <Picture
              name="frameless-shower"
              alt="Modern frameless glass shower enclosure with tile"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-stone-100 py-20 sm:py-28 scroll-mt-20">
        <div className="container">
          <Reveal className="max-w-xl">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.1] text-ink">
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
