"use client";

import { motion , Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

// Variantes para a animação em cascata (Stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { y: "100%", opacity: 0, rotate: 2 },
  show: { 
    y: 0, 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-16 flex flex-col justify-between"
    >

      {/* CONTEÚDO PRINCIPAL */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 relative z-10">

        {/* TÍTULOS GIGANTES */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col relative"
        >
          {/* Linha 1 */}
          <div className="overflow-hidden pb-2">
            <motion.h1 
              variants={textVariants}
              className="text-6xl font-black tracking-tighter text-zinc-100 sm:text-8xl md:text-[8rem] lg:text-[10rem] leading-[0.85]"
            >
              BENTO
            </motion.h1>
          </div>
          
          {/* Linha 2 (Com indentação e cor de destaque) */}
          <div className="overflow-hidden pb-2 flex items-center gap-4 sm:gap-8 md:pl-16">
            <motion.h1 
              variants={textVariants}
              className="text-6xl font-black tracking-tighter text-zinc-100 sm:text-8xl md:text-[8rem] lg:text-[10rem] leading-[0.85]"
            >
              RANGEL<span className="text-purple-500">.</span>
            </motion.h1>
            
            {/* O SELO GIRATÓRIO */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
              className="hidden md:flex relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 items-center justify-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-500 fill-current">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[11px] font-bold uppercase tracking-[0.2em]">
                    <textPath href="#circlePath" startOffset="0%">
                      Data • Software Engineer •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              {/* Ícone no centro do selo */}
              <ArrowDownRight size={24} className="text-purple-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* SUBTÍTULO E DESCRIÇÃO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-2xl md:pl-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-zinc-200 mb-4">
            Engenheiro de Software & Dados.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-medium">
            Graduando na FIAP, unindo arquitetura robusta e análises inteligentes para construir soluções de alto impacto. Foco em <span className="text-zinc-200">Java</span>, <span className="text-zinc-200">Python</span> e interfaces fluidas.
          </p>
        </motion.div>
      </div>

      {/* RODAPÉ DO HERO (Indicador de Scroll e Infos Secundárias) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 pb-8 relative z-10"
      >
        {/* Lado Esquerdo: Scroll Info */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Scroll para explorar
          </span>
          <div className="h-[2px] w-16 bg-zinc-800 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-purple-500"
            />
          </div>
        </div>

        {/* Lado Direito: Links */}
        <div className="flex w-full md:w-auto justify-between md:justify-end gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <a href="#sobre" className="transition-colors hover:text-purple-400">01. Perfil</a>
          <a href="#projetos" className="transition-colors hover:text-purple-400">02. Cases</a>
        </div>
      </motion.div>
      
    </section>
  );
}