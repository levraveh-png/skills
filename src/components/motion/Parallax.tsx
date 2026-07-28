import { useEffect, useRef, type ReactNode } from "react";
import { ensureGsap, prefersReducedMotion } from "@/lib/motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

/** Moves its content vertically at a fraction of scroll speed for a depth effect. */
export function Parallax({ children, className, speed = 0.15 }: ParallaxProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap } = ensureGsap();
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const distance = wrapper.offsetHeight * speed;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, wrapper);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={wrapperRef} className={className} style={{ overflow: "hidden" }}>
      <div ref={innerRef} className="h-[130%] w-full">
        {children}
      </div>
    </div>
  );
}
