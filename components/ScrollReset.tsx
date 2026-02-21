"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // 1. Avisa ao navegador para parar de tentar adivinhar a rolagem
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    
    // 2. Força a página para o pixel zero (topo absoluto) ao montar
    window.scrollTo(0, 0);
  }, []);

  return null;
}