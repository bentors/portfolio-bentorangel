"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Motion values atualizam o transform direto, sem re-render do React a cada movimento
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = { stiffness: 800, damping: 35, mass: 0.05 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-6 w-6 rounded-full border border-purple-500/50 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)] md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
