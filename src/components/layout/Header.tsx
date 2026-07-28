import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { business } from "@/data/business";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
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
  const [hovered, setHovered] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-stone-50 focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 z-40 w-full transition-[background-color,backdrop-filter,box-shadow] duration-500",
          scrolled
            ? "bg-ink/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent",
        )}
      >
        <div className="container flex h-[76px] items-center justify-between">
          <Logo />

          <nav
            aria-label="Primary"
            onMouseLeave={() => setHovered(null)}
            className="hidden items-center gap-1 xl:flex"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onMouseEnter={() => setHovered(link.to)}
                className={({ isActive }) =>
                  cn(
                    "relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.05em] text-stone-50/75 transition-colors hover:text-stone-50",
                    isActive && "text-stone-50",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.label}</span>
                    {(hovered === link.to || (!hovered && isActive)) && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-sm bg-stone-50/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <a
              href={business.phone.href}
              className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-stone-50/90 hover:text-stone-50"
            >
              <Phone className="size-4 text-copper-400" aria-hidden="true" />
              {business.phone.display}
            </a>
            <Magnetic>
              <Button asChild size="sm" variant="accent" className="whitespace-nowrap">
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
            </Magnetic>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex size-11 items-center justify-center text-stone-50 xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="relative block h-4 w-6">
              <motion.span
                className="absolute left-0 top-0 h-[1.5px] w-6 bg-current"
                animate={mobileOpen ? { rotate: 45, top: "50%", y: "-50%" } : { rotate: 0, top: "0%", y: "0%" }}
                transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-[1.5px] w-6 bg-current"
                animate={mobileOpen ? { rotate: -45, bottom: "50%", y: "50%" } : { rotate: 0, bottom: "0%", y: "0%" }}
                transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} links={NAV_LINKS} />
    </>
  );
}
