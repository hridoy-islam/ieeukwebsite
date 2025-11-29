"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  target: number;
}

export default function Counter({ target }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // 1. Create a motion value starting at 0
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    damping:60,
    stiffness: 80,
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>0</span>;
}