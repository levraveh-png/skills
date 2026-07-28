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

      <Breadcrumbs items={[{ name: "Board-Up Services", path: "/board-up" }]} />

      <section className="bg-ink text-stone-50">
        <div className="container grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow light>Available 24 hours a day</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,4.8vw,3.5rem)] leading-[1.06]">
              Board-up, dispatched any time, day or night.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-50/70">
              Break-ins, vandalism, accidents &mdash; a damaged storefront
              needs to be secured fast. We board it up properly so the
              property stays protected until the glass can be replaced.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Button asChild size="lg" variant="accent">
                <a href={business.phone.href}>
                  <Phone className="h-4 w-4" />
                  Call {business.phone.display}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href="/contact">
                  Request service
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="aspect-[4/3] overflow-hidden">
            <Picture
              name="glass-hero"
              alt="Commercial storefront glass and framing on a brick building"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </Reveal>
        </div>
      </section>

      <section className="container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>What gets boarded up</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
              Storefronts, entries, and windows after damage of any kind.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Broken or vandalized storefront glass, shattered entry doors,
              windows damaged in a break-in or accident &mdash; we secure the
              opening with plywood cut and fitted to the space, not a loose
              patch job.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Why speed matters</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
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

      <section className="border-t border-border bg-stone-100 py-20 sm:py-28">
        <div className="container">
          <Reveal className="max-w-xl">
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.1] text-ink">
              From your call to a secured storefront.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Call any time", body: "Tell us what happened and where. We're on 24 hours a day." },
              { title: "We head over", body: "Board-up gets dispatched right away, with a call ahead of arrival." },
              { title: "Storefront secured", body: "Plywood cut and fitted to the opening, weatherproofed and locked down." },
              { title: "Plan the repair", body: "We'll talk through scheduling the permanent glass replacement." },
            ].map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="border-t-2 border-ink pt-6">
                <span className="font-display text-4xl text-copper-500">{i + 1}</span>
                <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="container py-20 sm:py-28">
        <Reveal className="max-w-xl">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.1] text-ink">
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
