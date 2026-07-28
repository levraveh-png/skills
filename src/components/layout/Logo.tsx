import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${business.name} — home`}
    >
      <motion.svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
        whileHover="hover"
      >
        <rect width="48" height="48" rx="8" fill="#F5F1EA" />
        <rect x="10" y="10" width="28" height="28" fill="none" stroke="#151412" strokeWidth="2.4" />
        <motion.rect
          x="10"
          y="10"
          width="13.2"
          height="13.2"
          fill="#9C5F35"
          variants={{ hover: { scale: 1.08, x: -0.5, y: -0.5 } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "16.6px 16.6px" }}
        />
        <line x1="24" y1="10" x2="24" y2="38" stroke="#151412" strokeWidth="2.4" />
        <line x1="10" y1="24" x2="38" y2="24" stroke="#151412" strokeWidth="2.4" />
      </motion.svg>
      <span className="font-display text-[1.05rem] leading-none tracking-tight text-stone-50">
        {business.shortName}
        <span className="block text-[0.6rem] font-sans font-medium uppercase tracking-[0.18em] text-copper-300">
          Glass &amp; Board-Up
        </span>
      </span>
    </Link>
  );
}
