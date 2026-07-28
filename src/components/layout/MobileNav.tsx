import * as DialogPrimitive from "@radix-ui/react-dialog";
import { NavLink, Link } from "react-router-dom";
import { Phone, X } from "lucide-react";

import { business } from "@/data/business";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: { label: string; to: string }[];
}

export function MobileNav({ open, onOpenChange, links }: MobileNavProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/60 xl:hidden" />
        <DialogPrimitive.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-stone-50 shadow-lifted focus:outline-none xl:hidden"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
          <div className="flex h-[76px] items-center justify-between border-b border-border px-5">
            <Logo />
            <DialogPrimitive.Close
              className="flex h-11 w-11 items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </DialogPrimitive.Close>
          </div>

          <nav aria-label="Primary" className="flex flex-1 flex-col gap-1 px-5 py-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => onOpenChange(false)}
                className={({ isActive }) =>
                  cn(
                    "border-b border-border py-4 font-display text-2xl text-ink/85",
                    isActive && "text-copper-600",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="space-y-4 border-t border-border px-5 py-6">
            <a
              href={business.phone.href}
              className="flex items-center gap-2 text-base font-medium text-ink"
            >
              <Phone className="h-4 w-4 text-copper-500" aria-hidden="true" />
              {business.phone.display}
            </a>
            <Button asChild variant="accent" className="w-full">
              <Link to="/contact" onClick={() => onOpenChange(false)}>
                Get a Free Estimate
              </Link>
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
