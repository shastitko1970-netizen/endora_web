"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
}

export function ScrollReveal({
  children,
  variants,
  className = "",
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
