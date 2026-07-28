import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight, Star } from "lucide-react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitText } from "@/components/motion/SplitText";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EASE_PREMIUM } from "@/lib/motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {isDesktop ? (
          <video
            className="h-full w-full scale-[1.08] object-cover"
            poster="/video/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/video/hero-glass.webm" type="video/webm" />
            <source src="/video/hero-glass.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/video/hero-poster.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full scale-[1.08] object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
        <div
          className="absolute -top-1/4 right-0 h-[70%] w-[55%] opacity-40 blur-[100px]"
          style={{ background: "radial-gradient(circle, #9C5F35 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" aria-hidden="true" />
      </motion.div>

      <span
        className="pointer-events-none absolute right-[-2%] top-[6%] select-none font-display text-[clamp(6rem,22vw,15rem)] font-medium leading-none text-transparent text-stroke-copper opacity-[0.16]"
        aria-hidden="true"
      >
        24H
      </span>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10 pb-16 pt-40 sm:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_PREMIUM }}
          className="inline-flex items-center gap-2 border border-copper-300/30 bg-stone-50/5 px-3 py-1.5 text-[12.5px] font-medium text-stone-50/90 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-copper-400" />
          </span>
          Open 24 hours — emergency board-up dispatched anytime
        </motion.div>

        <h1 className="mt-7 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.75rem)] font-medium leading-[0.98] text-stone-50">
          <SplitText text="Glass repair and" delay={0.35} />
          <br />
          <span className="italic font-editorial text-copper-300">
            <SplitText text="board-up," delay={0.55} />
          </span>{" "}
          <SplitText text="day or night." delay={0.7} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASE_PREMIUM }}
          className="mt-6 max-w-md text-lg leading-relaxed text-stone-50/70"
        >
          AMPM Glass and Board Up handles emergency board-up, storefront
          glass, and glass replacement across {business.serviceArea.region}.
          Call any time — we call ahead before we arrive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE_PREMIUM }}
          className="mt-9 flex flex-col gap-3.5 sm:flex-row"
        >
          <Magnetic>
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Get a Free Estimate
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline-light">
              <a href={business.phone.href}>
                <Phone className="size-4" />
                {business.phone.display}
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-9 flex items-center gap-2.5 text-sm text-stone-50/60"
        >
          <div className="flex gap-0.5 text-copper-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <span>
            {business.rating.value.toFixed(1)} rating on {business.rating.source}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-stone-50/50" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-stone-50/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-copper-300"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
