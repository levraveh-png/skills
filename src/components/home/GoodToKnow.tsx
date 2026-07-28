import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { EASE_PREMIUM } from "@/lib/motion";

const ITEMS = [
  {
    title: "What to do right after a break-in or storefront damage",
    body: "Photograph the damage for insurance, clear broken glass away from doorways, and get it boarded up before weather or theft becomes a second problem.",
    to: "/board-up#faq",
  },
  {
    title: "Tempered vs. laminated glass",
    body: "Tempered glass breaks into small, rounded pieces and suits most storefronts. Laminated glass holds together when cracked — better where security matters more.",
    to: "/glass-replacement#faq",
  },
  {
    title: "How fast board-up needs to happen",
    body: "The sooner the better — an open storefront invites weather damage and repeat break-ins. That's why board-up runs 24 hours a day.",
    to: "/board-up#faq",
  },
  {
    title: "Signs your storefront glass needs replacing",
    body: "Cracks that spread, foggy double-pane glass, and worn or damaged frames are all signs it's time to replace rather than patch.",
    to: "/glass-replacement#faq",
  },
];

export function GoodToKnow() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-stone-100 py-24 sm:py-32">
      <div className="container">
        <Reveal variant="up" className="max-w-xl">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] text-ink">
            A few things worth knowing before you call.
          </h2>
        </Reveal>

        <RevealGroup as="div" stagger={0.06} className="mt-14 max-w-3xl">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <RevealItem as="div" key={item.title} variant="up" className="border-t border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-5">
                    <span className="font-display text-lg text-copper-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                    className="mt-1 shrink-0 text-copper-500"
                  >
                    <Plus className="size-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-xl pb-8 pl-[2.9rem]">
                        <p className="text-[15px] leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                        <Link
                          to={item.to}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-copper-600 hover:text-copper-700"
                        >
                          Read more
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
