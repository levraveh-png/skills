import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

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
  return (
    <section className="border-t border-border bg-stone-100 py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-xl">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] text-ink">
            A few things worth knowing before you call.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="border-t border-border pt-6">
              <h3 className="font-display text-lg leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <Link
                to={item.to}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-copper-600 hover:text-copper-700"
              >
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
