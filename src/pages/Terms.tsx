import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/motion/Reveal";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description={`The terms that apply to using the ${business.name} website.`}
        path="/terms"
      />
      <PageIntro
        eyebrow="Legal"
        title="Terms of Service"
        breadcrumbs={[{ name: "Terms of Service", path: "/terms" }]}
        compact
      >
        Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
      </PageIntro>

      <Reveal variant="up" className="container max-w-2xl py-20 sm:py-28">
        <div className="space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl text-ink">Use of this site</h2>
            <p className="mt-3">
              This website provides information about {business.name}'s
              services and a way to request an estimate. Content is provided
              for general informational purposes and doesn't constitute a
              binding quote until confirmed directly with us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Estimates and pricing</h2>
            <p className="mt-3">
              Estimates provided through this site or by phone are based on
              the information available at the time and may change once the
              job site has been assessed in person.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Service agreements</h2>
            <p className="mt-3">
              Any work performed is subject to the terms agreed to directly
              with {business.name} at the time of scheduling, which take
              precedence over the general information on this site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Limitation of liability</h2>
            <p className="mt-3">
              While we aim to keep this site accurate and up to date, it's
              provided as-is without warranties of any kind. {business.name}
              {" "}isn't liable for decisions made based solely on this
              website's content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Contact us</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${business.email}`} className="text-copper-600 hover:text-copper-700">
                {business.email}
              </a>{" "}
              or by calling {business.phone.display}.
            </p>
          </section>
        </div>
      </Reveal>
    </>
  );
}
