import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "p" | "span";
}

/** Reveals text word-by-word, each word sliding up out of a clipped mask. */
export function SplitText({ text, className, delay = 0, stagger = 0.045, as = "span" }: SplitTextProps) {
  const words = text.split(" ");
  const Tag = as;

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: EASE_PREMIUM,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
