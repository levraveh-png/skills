import { Phone, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";
import { SplitText } from "@/components/motion/SplitText";
import { Button } from "@/components/ui/button";
import { Picture } from "@/components/Picture";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EstimateCta } from "@/components/EstimateCta";

const FAQS = [
  {
    question: "How fast can you board up my storefront?",
    answer:
      "Board-up is available 24 hours a day, including nights, weekends, and holidays. Call and we'll get details on the damage and get moving right away.",
  },
  {
    question: "Do I need to be on site when you arrive?",
    answer:
      "It helps, but it isn't required. We'll call ahead before we arrive either way, so you'll know when to expect us.",
  },
  {
    question: "Is board-up a permanent fix?",
    answer:
      "No — board-up is a temporary, secure seal to protect the property until permanent glass replacement can be scheduled. We can help arrange that follow-up work too.",
  },
  {
    question: "Will the board-up hold up in bad weather?",
    answer:
      "Yes. It's built to keep wind, rain, and anyone looking to get back in out, not just cover the opening.",
  },
  {
    question: "Do you take photos for insurance claims?",
    answer:
      "Take your own photos of the damage before we start if you're filing a claim — we're glad to work around that and answer questions about the work performed.",
  },
];

const PROCESS = [
  { title: "Call any time", body: "Tell us what happened and where. We're on 24 hours a day." },
  { title: "We head over", body: "Board-up gets dispatched right away, with a call ahead of arrival." },
  { title: "Storefront secured", body: "Plywood cut and fitted to the opening, weatherproofed and locked down." },
  { title: "Plan the repair", body: "We'll talk through scheduling the permanent glass replacement." },
];

export default function BoardUp() {
  return (
    <>
      <Seo
        title="24/7 Emergency Board-Up Services"
        description={`After-hours board-up for vandalized or damaged storefronts and windows across ${business.serviceArea.region}. Available 24 hours a day.`}
        path="/board-up"
        jsonLd={[
          breadcrumbSchema([{ name: "Board-Up Services", path: "/board-up" }]),
          serviceSchema({
            name: "Emergency Board-Up Services",
            description:
              "24-hour board-up for vandalized, broken, or storm-damaged storefronts and windows.",
            path: "/board-up",
          }),
          faqSchema(FAQS),
        ]}
      />

      <section className="relative overflow-hidden bg-ink text-stone-50">
        <div
          className="pointer-events-none absolute -left-1/4 top-0 h-[600px] w-[600px] opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #9C5F35 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[clamp(6rem,18vw,13rem)] leading-none text-stroke-copper text-transparent opacity-[0.14]"
          aria-hidden="true"
        >
          SOS
        </span>

        <div className="container relative">
          <nav aria-label="Breadcrumb" className="pt-32 text-xs text-stone-50/45">
            <span>Home</span> <span className="mx-1.5">/</span>{" "}
            <span className="text-stone-50/80">Board-Up Services</span>
          </nav>

          <div className="grid gap-10 pb-24 pt-8 sm:pb-32 lg:grid-cols-2 lg:items-center">
            <Reveal variant="up">
              <Eyebrow light>Available 24 hours a day</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.75rem)] font-medium leading-[1.0]">
                <SplitText text="Board-up, dispatched" />
                <br />
                <span className="italic font-editorial text-copper-300">
                  <SplitText text="any time," delay={0.2} />
                </span>{" "}
                <SplitText text="day or night." delay={0.35} />
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-50/70">
                Break-ins, vandalism, accidents — a damaged storefront
                needs to be secured fast. We board it up properly so the
                property stays protected until the glass can be replaced.
              </p>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <Magnetic>
                  <Button asChild size="lg" variant="accent">
                    <a href={business.phone.href}>
                      <Phone className="size-4" />
                      Call {business.phone.display}
                    </a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild size="lg" variant="outline-light">
                    <a href="/contact">
                      Request service
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal variant="scale" delay={0.15} className="aspect-[4/3] overflow-hidden rounded-sm">
              <Parallax speed={0.12} className="h-full w-full">
                <Picture
                  name="glass-hero"
                  alt="Commercial storefront glass and framing on a brick building"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="right">
            <Eyebrow>What gets boarded up</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.12] text-ink">
              Storefronts, entries, and windows after damage of any kind.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Broken or vandalized storefront glass, shattered entry doors,
              windows damaged in a break-in or accident — we secure the
              opening with plywood cut and fitted to the space, not a loose
              patch job.
            </p>
          </Reveal>
          <Reveal variant="left" delay={0.1}>
            <Eyebrow>Why speed matters</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.12] text-ink">
              An open storefront is a second problem waiting to happen.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Every hour a storefront sits open, it's exposed to weather and
              a second break-in. Getting it secured quickly protects
              inventory and equipment while you sort out the permanent
              repair and any insurance claim.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-stone-100 py-24 sm:py-32">
        <div className="container">
          <Reveal variant="up" className="max-w-xl">
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.9rem)] leading-[1.05] text-ink">
              From your call to a secured storefront.
            </h2>
          </Reveal>
          <RevealGroup as="ol" stagger={0.1} className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <RevealItem as="li" key={step.title} variant="up" className="border-t-2 border-ink pt-6">
                <span className="font-display text-4xl text-copper-500">{i + 1}</span>
                <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="faq" className="container py-24 sm:py-32 scroll-mt-24">
        <Reveal variant="up" className="max-w-xl">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.9rem)] leading-[1.05] text-ink">
            Board-up, answered plainly.
          </h2>
        </Reveal>
        <div className="mt-10">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <EstimateCta
        eyebrow="Need it boarded up now?"
        title="Call any time — we're already open."
        description="Board-up doesn't wait for business hours. Reach out now and we'll get you secured."
      />
    </>
  );
}
