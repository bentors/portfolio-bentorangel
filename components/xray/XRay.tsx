"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type XRayProps = {
  blueprint: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  radius?: number;
  demo?: boolean;
  /** Texto da planta para leitores de tela (lido sem precisar de foco). */
  description?: string;
};

// Pausa/retoma as animações SMIL (pacotes dos diagramas) dentro da camada
const setSvgPlaying = (el: HTMLElement, on: boolean) =>
  el.querySelectorAll<SVGSVGElement>(".xray-layer svg").forEach((s) => (on ? s.unpauseAnimations() : s.pauseAnimations()));

// Animações CSS que revelam a planta sozinhas (demo no desktop, build no touch)
const isReveal = (name: string) => name === "xray-demo" || name === "xray-build";

export default function XRay({ blueprint, children, className = "", radius = 90, demo, description }: XRayProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  // Diagramas começam pausados; só animam enquanto a planta está visível
  useEffect(() => {
    if (ref.current) setSvgPlaying(ref.current, false);
  }, []);

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
    setSvgPlaying(el, on);
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
      onAnimationStart={(e) => isReveal(e.animationName) && ref.current && setSvgPlaying(ref.current, true)}
      onAnimationEnd={(e) => {
        const el = ref.current;
        // Não pausa se o hover ainda mantém a planta aberta
        if (isReveal(e.animationName) && el && el.dataset.active !== "true") setSvgPlaying(el, false);
      }}
    >
      {children}
      {description && <span className="sr-only">{description}</span>}
      <div aria-hidden className="xray-layer blueprint pointer-events-none absolute inset-0 z-20 rounded-[inherit]">
        {blueprint}
      </div>
    </div>
  );
}
