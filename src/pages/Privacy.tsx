import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/motion/Reveal";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`How ${business.name} collects, uses, and protects your information.`}
        path="/privacy"
      />
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
        compact
      >
        Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
      </PageIntro>

      <Reveal variant="up" className="container max-w-2xl py-20 sm:py-28">
        <div className="space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl text-ink">Information we collect</h2>
            <p className="mt-3">
              When you request an estimate or contact us through this site,
              we collect the information you provide — typically your name,
              phone number, email address, job site location, and details
              about the work you need done.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">How we use it</h2>
            <p className="mt-3">
              We use this information only to respond to your request,
              schedule and perform work, and follow up about a job in
              progress. We don't sell your information, and we don't use it
              for unrelated marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Sharing</h2>
            <p className="mt-3">
              We don't share your personal information with third parties
              except where necessary to complete a job (for example, a
              supplier providing glass to a custom size) or where required
              by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Cookies and analytics</h2>
            <p className="mt-3">
              This site may use basic analytics to understand how it's used
              and improve it over time. This data is aggregated and isn't
              used to identify you personally.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Contact us</h2>
            <p className="mt-3">
              Questions about this policy or your information can be sent to{" "}
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
