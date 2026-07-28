import { Picture } from "@/components/Picture";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

const POINTS = [
  {
    title: "We call ahead",
    body: "You'll get a call before we show up on site, so you know exactly when to expect us.",
  },
  {
    title: "Fast turnaround",
    body: "Board-up gets dispatched right away. Glass and shower jobs are scheduled around when you actually need them done.",
  },
  {
    title: "Clean, careful work",
    body: "Job sites get cleaned up after — old glass and debris don't get left behind for you to deal with.",
  },
  {
    title: "Straightforward pricing",
    body: "You'll know the cost before work starts. No inflated emergency markup just because it's after hours.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-stone-100">
      <span
        className="pointer-events-none absolute -left-10 top-10 select-none font-display text-[clamp(6rem,16vw,13rem)] leading-none text-ink/[0.04]"
        aria-hidden="true"
      >
        TRUST
      </span>
      <div className="container relative grid gap-12 py-24 sm:py-32 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="right" className="order-2 lg:order-1">
          <Eyebrow>Why call AMPM</Eyebrow>
          <h2 className="mt-4 max-w-md font-display text-[clamp(2rem,4vw,2.9rem)] leading-[1.05] text-ink">
            What our customers actually notice.
          </h2>

          <RevealGroup as="dl" stagger={0.1} className="mt-10 space-y-8">
            {POINTS.map((point, i) => (
              <RevealItem as="div" key={point.title} variant="up" className="flex gap-5">
                <span className="font-display text-2xl text-copper-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <dt className="font-display text-lg text-ink">{point.title}</dt>
                  <dd className="mt-1.5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {point.body}
                  </dd>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <Reveal
          variant="scale"
          className="order-1 aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11] lg:order-2 lg:aspect-auto"
        >
          <Parallax speed={0.18} className="h-full w-full">
            <Picture
              name="glass-detail"
              alt="Close detail of a modern glass building facade"
              className="h-full w-full object-cover"
            />
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
