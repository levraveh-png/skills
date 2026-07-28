import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    title: "Call or request online",
    body: "Tell us what happened — a break-in, a cracked storefront pane, a shower remodel. We're on 24 hours a day.",
  },
  {
    title: "We assess the job",
    body: "For emergencies, we get there fast. For glass and shower work, we schedule a time that works for you.",
  },
  {
    title: "The work gets done",
    body: "Board-up, glass replacement, or a new frameless shower enclosure — installed correctly the first time.",
  },
  {
    title: "We clean up and confirm",
    body: "Job site cleaned, everything checked before we leave. You'll know who to call if anything comes up.",
  },
];

export function ProcessSteps() {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] text-ink">
            From the call to the walkthrough.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative border-t-2 border-ink pt-6">
              <span className="font-display text-4xl text-copper-500">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
