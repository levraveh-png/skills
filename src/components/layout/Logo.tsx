import { Link } from "react-router-dom";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex items-center gap-2.5",
        className,
      )}
      aria-label={`${business.name} — home`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="48" height="48" rx="8" fill={light ? "#F5F1EA" : "#1C1B19"} />
        <rect
          x="10"
          y="10"
          width="28"
          height="28"
          fill="none"
          stroke={light ? "#1C1B19" : "#F5F1EA"}
          strokeWidth="2.4"
        />
        <rect x="10" y="10" width="13.2" height="13.2" fill="#9C5F35" />
        <line x1="24" y1="10" x2="24" y2="38" stroke={light ? "#1C1B19" : "#F5F1EA"} strokeWidth="2.4" />
        <line x1="10" y1="24" x2="38" y2="24" stroke={light ? "#1C1B19" : "#F5F1EA"} strokeWidth="2.4" />
      </svg>
      <span
        className={cn(
          "font-display text-[1.05rem] leading-none tracking-tight",
          light ? "text-stone-50" : "text-ink",
        )}
      >
        {business.shortName}
        <span className="block text-[0.6rem] font-sans font-medium uppercase tracking-[0.18em] text-copper-500">
          Glass &amp; Board-Up
        </span>
      </span>
    </Link>
  );
}
