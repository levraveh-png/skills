import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Phone, Menu } from "lucide-react";

import { business } from "@/data/business";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";

const NAV_LINKS = [
  { label: "Board-Up", to: "/board-up" },
  { label: "Glass Replacement", to: "/glass-replacement" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-stone-50"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-b border-border bg-stone-50/90 backdrop-blur-md shadow-soft"
            : "border-b border-transparent bg-stone-50",
        )}
      >
        <div className="container flex h-[76px] items-center justify-between">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 xl:flex"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "relative whitespace-nowrap py-2 text-[13px] font-medium uppercase tracking-[0.04em] text-ink/75 transition-colors hover:text-ink",
                    "after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-copper-500 after:transition-all after:duration-300 hover:after:w-full",
                    isActive && "text-ink after:w-full",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <a
              href={business.phone.href}
              className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-ink hover:text-copper-600"
            >
              <Phone className="h-4 w-4 shrink-0 text-copper-500" aria-hidden="true" />
              {business.phone.display}
            </a>
            <Button asChild size="sm" variant="accent" className="whitespace-nowrap">
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center text-ink xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        links={NAV_LINKS}
      />
    </>
  );
}
