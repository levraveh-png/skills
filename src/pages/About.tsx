import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageIntro } from "@/components/PageIntro";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Picture } from "@/components/Picture";
import { ReviewsSection } from "@/components/ReviewsSection";
import { EstimateCta } from "@/components/EstimateCta";

const VALUES = [
  {
    title: "Answer the phone",
    body: "Glass and board-up problems don't wait for business hours, so we don't either — we're reachable 24 hours a day.",
  },
  {
    title: "Say what it costs",
    body: "You'll know the price before the work starts, whether it's an emergency board-up or a scheduled shower install.",
  },
  {
    title: "Do it once, correctly",
    body: "Glass gets measured to the space it's going into, not fitted to a stock size and hoped for.",
  },
  {
    title: "Leave it clean",
    body: "Old glass, debris, and packaging leave with us — not for you to deal with after we're gone.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description={`${business.name} is a locally operated glass repair and board-up service based in ${business.address.city}, serving ${business.serviceArea.region}.`}
        path="/about"
        jsonLd={breadcrumbSchema([{ name: "About", path: "/about" }])}
      />

      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <PageIntro eyebrow="About" title="A local glass and board-up crew, on call.">
        AMPM Glass and Board Up is based in {business.address.city},
        handling board-up, glass replacement, storefronts, and frameless
        shower glass across {business.serviceArea.region}.
      </PageIntro>

      <section className="container pb-20 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
              Small enough to answer the phone yourself.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              We're a hands-on operation — the person who answers the call
              is often the person who shows up to do the work. That means
              fewer handoffs, and someone who actually knows the job when
              they arrive.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              We ask customers to call ahead rather than walk in, since jobs
              get dispatched to the site rather than run out of a storefront.
              We'll always call you back before we arrive, too.
            </p>
          </Reveal>
          <Reveal delay={100} className="aspect-[4/3] overflow-hidden">
            <Picture
              name="glass-detail"
              alt="Detail of a modern glass building facade"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-stone-100 py-20 sm:py-28">
        <div className="container">
          <Reveal className="max-w-xl">
            <Eyebrow>What we hold ourselves to</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.1] text-ink">
              Nothing complicated — just done right.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 70} className="border-t border-border pt-6">
                <h3 className="font-display text-lg text-ink">{value.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <EstimateCta />
    </>
  );
}
