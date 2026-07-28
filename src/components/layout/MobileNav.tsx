import * as DialogPrimitive from "@radix-ui/react-dialog";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

import { business } from "@/data/business";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { EASE_PREMIUM } from "@/lib/motion";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: { label: string; to: string }[];
}

export function MobileNav({ open, onOpenChange, links }: MobileNavProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-ink xl:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-0 z-50 flex flex-col xl:hidden"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              >
                <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
                <div className="flex h-[76px] items-center justify-between px-5">
                  <Logo />
                  <DialogPrimitive.Close
                    className="flex size-11 items-center justify-center text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
                    aria-label="Close menu"
                  >
                    <X className="size-6" />
                  </DialogPrimitive.Close>
                </div>

                <nav aria-label="Primary" className="flex flex-1 flex-col justify-center gap-1 px-6">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE_PREMIUM }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            "block border-b border-stone-50/10 py-4 font-display text-3xl text-stone-50/80 transition-colors",
                            isActive && "text-copper-300",
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: EASE_PREMIUM }}
                  className="space-y-4 px-6 py-8"
                >
                  <a
                    href={business.phone.href}
                    className="flex items-center gap-2 text-base font-medium text-stone-50"
                  >
                    <Phone className="size-4 text-copper-400" aria-hidden="true" />
                    {business.phone.display}
                  </a>
                  <Button asChild variant="accent" className="w-full">
                    <Link to="/contact">Get a Free Estimate</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
