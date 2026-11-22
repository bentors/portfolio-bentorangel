"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

type XRayProps = {
  blueprint: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  radius?: number;
  demo?: boolean;
};

export default function XRay({ blueprint, children, className = "", radius = 90, demo }: XRayProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const setActive = (on: boolean) => {
    const el = ref.current;
    if (!el) return;
    el.dataset.active = String(on);
    if (on) delete el.dataset.demo; // hover assume o controle
  };

  return (
    <div
      ref={ref}
      data-xray
      data-demo={demo ? "" : undefined}
      data-inview={inView ? "true" : undefined}
      className={"xray relative overflow-hidden " + className}
      style={{ "--xr-max": radius + "px" } as React.CSSProperties}
      onPointerMove={onPointerMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
    >
      {children}
      <div aria-hidden className="xray-layer blueprint pointer-events-none absolute inset-0 z-20 rounded-[inherit]">
        {blueprint}
      </div>
    </div>
  );
}
