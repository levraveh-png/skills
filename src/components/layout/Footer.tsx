import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram, ArrowUpRight } from "lucide-react";

import { business } from "@/data/business";
import { Reveal } from "@/components/motion/Reveal";

const SERVICE_LINKS = [
  { label: "Board-Up Services", to: "/board-up" },
  { label: "Glass Replacement", to: "/glass-replacement" },
  { label: "Storefronts", to: "/glass-replacement#storefronts" },
  { label: "Frameless Shower Glass", to: "/glass-replacement#frameless-shower" },
];

const COMPANY_LINKS = [
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const hasSocial = business.social.facebook || business.social.instagram;

  return (
    <footer className="relative overflow-hidden bg-ink text-stone-50/90">
      <div
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #9C5F35 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container relative py-20 sm:py-28">
        <Reveal variant="up">
          <Link
            to="/contact"
            className="group block border-b border-stone-50/10 pb-10"
          >
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <span className="font-display text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-stone-50">
                Let&rsquo;s fix it.
              </span>
              <span className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-copper-300 transition-colors group-hover:text-stone-50">
                Get a free estimate
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8">
          <Reveal variant="fade" className="max-w-sm">
            <p className="font-display text-lg text-stone-50">{business.name}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-50/60">
              {business.tagline} Based in {business.address.city}, dispatched
              across {business.serviceArea.region}.
            </p>
            {hasSocial && (
              <div className="mt-6 flex gap-4">
                {business.social.facebook && (
                  <a
                    href={business.social.facebook}
                    aria-label="AMPM Glass and Board Up on Facebook"
                    className="text-stone-50/50 transition-colors hover:text-copper-400"
                  >
                    <Facebook className="size-5" />
                  </a>
                )}
                {business.social.instagram && (
                  <a
                    href={business.social.instagram}
                    aria-label="AMPM Glass and Board Up on Instagram"
                    className="text-stone-50/50 transition-colors hover:text-copper-400"
                  >
                    <Instagram className="size-5" />
                  </a>
                )}
              </div>
            )}
          </Reveal>

          <Reveal variant="fade" delay={0.05}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-copper-400">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-stone-50/70 transition-colors hover:text-stone-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade" delay={0.1}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-copper-400">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-stone-50/70 transition-colors hover:text-stone-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade" delay={0.15}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-copper-400">
              Reach us
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] text-stone-50/70">
              <li>
                <a href={business.phone.href} className="flex items-start gap-3 hover:text-stone-50">
                  <Phone className="mt-0.5 size-4 shrink-0 text-copper-400" />
                  {business.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-copper-400" />
                {business.address.full}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-copper-400" />
                {business.hours.note}
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-stone-50/10">
        <div className="container flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs text-stone-50/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-stone-50">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-stone-50">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
