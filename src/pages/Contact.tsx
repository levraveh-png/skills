import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/structured-data";
import { PageIntro } from "@/components/PageIntro";
import { EstimateForm } from "@/components/EstimateForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Free Estimate"
        description={`Request a free estimate from ${business.name}, or call ${business.phone.display} for 24-hour board-up and glass service.`}
        path="/contact"
        jsonLd={breadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />

      <PageIntro
        eyebrow="Get in touch"
        title="Tell us what's going on."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      >
        For anything urgent, call — that gets you the fastest response. For
        glass replacement, storefronts, or shower quotes, the form works
        just as well.
      </PageIntro>

      <section className="container py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <RevealGroup as="div" stagger={0.08} className="space-y-8">
            <RevealItem as="div" variant="up" className="border border-border p-6 transition-shadow hover:shadow-soft">
              <Phone className="size-5 text-copper-500" />
              <p className="mt-3 font-display text-xl text-ink">
                <a href={business.phone.href} className="hover:text-copper-600">
                  {business.phone.display}
                </a>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Fastest way to reach us, especially for board-up.
              </p>
            </RevealItem>

            <RevealItem as="div" variant="up" className="border border-border p-6 transition-shadow hover:shadow-soft">
              <Clock className="size-5 text-copper-500" />
              <p className="mt-3 font-display text-lg text-ink">{business.hours.note}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Board-up is dispatched any time. Glass and shower estimates
                are typically followed up on the next business hour.
              </p>
            </RevealItem>

            <RevealItem as="div" variant="up" className="border border-border p-6 transition-shadow hover:shadow-soft">
              <MapPin className="size-5 text-copper-500" />
              <p className="mt-3 text-[15px] text-ink">{business.address.full}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Jobs are dispatched to your location — please call ahead
                rather than dropping by.
              </p>
            </RevealItem>

            <RevealItem as="div" variant="fade" className="flex items-start gap-3 text-[13.5px] leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-copper-500" />
              <p>
                Your information is used only to respond to your request —
                see our <a href="/privacy" className="underline hover:text-copper-600">Privacy Policy</a> for details.
              </p>
            </RevealItem>
          </RevealGroup>

          <Reveal variant="left" delay={0.1} className="border border-border bg-white p-6 sm:p-10">
            <EstimateForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
