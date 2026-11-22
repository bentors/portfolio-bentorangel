"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Motion values atualizam o transform direto, sem re-render do React a cada movimento
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = { stiffness: 800, damping: 35, mass: 0.05 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX - 20);
      y.set(e.clientY - 20);
    };

    // Sobre um card com raio-x, o cursor vira um anel tracejado (sem estado React)
    const onOver = (e: PointerEvent) => {
      const on = !!(e.target as Element).closest?.("[data-xray]");
      ref.current?.setAttribute("data-xray", String(on));
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("pointerover", onOver);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className="group pointer-events-none fixed left-0 top-0 z-[999] hidden h-10 w-10 items-center justify-center md:flex"
      style={{ x: springX, y: springY }}
    >
      <div className="h-6 w-6 rounded-full border border-purple-500/50 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-200 group-data-[xray=true]:h-10 group-data-[xray=true]:w-10 group-data-[xray=true]:border-dashed group-data-[xray=true]:border-[#a855f7] group-data-[xray=true]:bg-transparent group-data-[xray=true]:shadow-none" />
    </motion.div>
  );
}
