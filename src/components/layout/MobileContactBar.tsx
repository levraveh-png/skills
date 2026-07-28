import { Link } from "react-router-dom";
import { Phone, ClipboardList } from "lucide-react";
import { business } from "@/data/business";

export function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-stone-300 bg-stone-50/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(23,22,19,0.08)] xl:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={business.phone.href}
        className="flex flex-1 items-center justify-center gap-2 border-r border-stone-300 py-3.5 text-[13.5px] font-semibold uppercase tracking-[0.04em] text-ink"
      >
        <Phone className="size-4 text-copper-500" aria-hidden="true" />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-copper-500 py-3.5 text-[13.5px] font-semibold uppercase tracking-[0.04em] text-stone-50"
      >
        <ClipboardList className="size-4" aria-hidden="true" />
        Free Estimate
      </Link>
    </div>
  );
}
