import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

import { business } from "@/data/business";
import { Logo } from "@/components/layout/Logo";

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
    <footer className="bg-ink text-stone-50/90">
      <div className="container grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-5 text-[15px] leading-relaxed text-stone-50/65">
            {business.tagline} Based in {business.address.city}, dispatched
            across {business.serviceArea.region}.
          </p>
          {hasSocial && (
            <div className="mt-6 flex gap-4">
              {business.social.facebook && (
                <a
                  href={business.social.facebook}
                  aria-label="AMPM Glass and Board Up on Facebook"
                  className="text-stone-50/60 hover:text-copper-400"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {business.social.instagram && (
                <a
                  href={business.social.instagram}
                  aria-label="AMPM Glass and Board Up on Instagram"
                  className="text-stone-50/60 hover:text-copper-400"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-copper-400">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-[15px] text-stone-50/75 hover:text-stone-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-copper-400">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-[15px] text-stone-50/75 hover:text-stone-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-copper-400">
            Reach us
          </h3>
          <ul className="mt-5 space-y-4 text-[15px] text-stone-50/75">
            <li>
              <a href={business.phone.href} className="flex items-start gap-3 hover:text-stone-50">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
                {business.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
              {business.address.full}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
              {business.hours.note}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-50/10">
        <div className="container flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs text-stone-50/55 sm:flex-row">
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
