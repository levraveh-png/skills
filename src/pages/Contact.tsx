import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageIntro } from "@/components/PageIntro";
import { EstimateForm } from "@/components/EstimateForm";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Free Estimate"
        description={`Request a free estimate from ${business.name}, or call ${business.phone.display} for 24-hour board-up and glass service.`}
        path="/contact"
        jsonLd={breadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />

      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <PageIntro eyebrow="Get in touch" title="Tell us what's going on.">
        For anything urgent, call — that gets you the fastest response. For
        glass replacement, storefronts, or shower quotes, the form works
        just as well.
      </PageIntro>

      <section className="container pb-20 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="space-y-8">
            <div className="border border-border p-6">
              <Phone className="h-5 w-5 text-copper-500" />
              <p className="mt-3 font-display text-xl text-ink">
                <a href={business.phone.href} className="hover:text-copper-600">
                  {business.phone.display}
                </a>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Fastest way to reach us, especially for board-up.
              </p>
            </div>

            <div className="border border-border p-6">
              <Clock className="h-5 w-5 text-copper-500" />
              <p className="mt-3 font-display text-lg text-ink">{business.hours.note}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Board-up is dispatched any time. Glass and shower estimates
                are typically followed up on the next business hour.
              </p>
            </div>

            <div className="border border-border p-6">
              <MapPin className="h-5 w-5 text-copper-500" />
              <p className="mt-3 text-[15px] text-ink">{business.address.full}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Jobs are dispatched to your location — please call ahead
                rather than dropping by.
              </p>
            </div>

            <div className="flex items-start gap-3 text-[13.5px] leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" />
              <p>
                Your information is used only to respond to your request —
                see our <a href="/privacy" className="underline hover:text-copper-600">Privacy Policy</a> for details.
              </p>
            </div>
          </div>

          <div className="border border-border bg-white p-6 sm:p-10">
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
}
