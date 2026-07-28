import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ensureGsap } from "@/lib/motion";

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const pinned = isDesktop && !reducedMotion;

  useEffect(() => {
    if (!pinned) return;
    const { gsap } = ensureGsap();
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - wrapper.offsetWidth;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, [pinned]);

  return (
    <section className="border-t border-border bg-white">
      <div className="container pt-24 sm:pt-32">
        <Reveal variant="up" className="max-w-xl pb-14">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] text-ink">
            From the call to the walkthrough.
          </h2>
        </Reveal>
      </div>

      {pinned ? (
        <div ref={wrapperRef} className="relative h-screen overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full items-center gap-24 pl-[max(1.25rem,calc((100vw-1200px)/2+1.25rem))] pr-[20vw]"
          >
            {STEPS.map((step, i) => (
              <div key={step.title} className="w-[min(70vw,560px)] shrink-0">
                <span className="font-display text-[7rem] leading-none text-copper-500/25">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-3xl text-ink">{step.title}</h3>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container pb-24 sm:pb-32">
          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t-2 border-ink pt-6">
                <span className="font-display text-4xl text-copper-500">{i + 1}</span>
                <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
