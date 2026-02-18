"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// GERAÇÃO ESTRUTURADA DE PARTÍCULAS (Leve e distribuída)
const particleData = Array.from({ length: 40 }).map((_, i) => {
  let size = 2;
  let glow = "shadow-[0_0_8px_rgba(168,85,247,0.4)]";

  if (i % 6 === 0) {
    size = 6;
    glow = "shadow-[0_0_15px_rgba(168,85,247,1)]";
  } else if (i % 3 === 0) {
    size = 4;
    glow = "shadow-[0_0_10px_rgba(168,85,247,0.7)]";
  }

  return {
    id: i,
    size,
    glow,
    baseX: Math.random() * 100,
    baseY: Math.random() * 100,
    duration: Math.random() * 15 + 15,
    floatX: Math.random() * 30 - 15, 
    floatY: -(Math.random() * 50 + 20),
  };
});

// --- COMPONENTE DA PARTÍCULA INDIVIDUAL ---
function Particle({ p }: { p: any }) {
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ left: `${p.baseX}%`, top: `${p.baseY}%` }}
    >
      <motion.div
        className={`rounded-full bg-purple-400/80 ${p.glow}`}
        style={{ width: p.size, height: p.size }}
        animate={{
          x: [0, p.floatX, 0],
          y: [0, p.floatY, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

// --- HERO PRINCIPAL ---
export default function Hero() {
  
  // Força a página a carregar no topo no F5
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-16">
      
      {/* Fundo "Abismo" e Partículas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-[#050505]/80 to-[#050505]" />
        
        {particleData.map((p) => (
          <Particle key={p.id} p={p} />
        ))}
        
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-4xl text-center pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-black tracking-tight text-white sm:text-7xl"
        >
          Oi, eu sou o Bento{" "}
          <motion.span
            className="inline-block origin-bottom-right"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-2xl font-bold sm:text-4xl"
        >
          <span className="animate-gradient bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent">
            Engenheiro de Software & Analista de Dados
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-lg font-medium text-zinc-400 sm:text-xl leading-relaxed"
        >
          Entre dashboards, automações e códigos, eu construo pontes entre problemas e soluções. De São Paulo para o mundo, construindo o futuro uma linha de código por vez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a 
            href="#sobre" 
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-bold text-white transition-all hover:bg-purple-500 sm:w-auto shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1"
          >
            <Sparkles size={18} className="text-purple-200" />
            Conhecer mais
          </a>
          <a 
            href="#contato" 
            className="w-full rounded-full border-2 border-zinc-800 bg-[#050505]/50 px-8 py-4 font-bold text-zinc-300 transition-all hover:border-purple-500/50 hover:bg-zinc-900 hover:text-white sm:w-auto backdrop-blur-sm hover:-translate-y-1"
          >
            Vamos conversar?
          </a>
        </motion.div>
      </div>
    </section>
  );
}