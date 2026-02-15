"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Brilho sutil no fundo para dar profundidade ao Dark Mode */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="z-10 w-full max-w-4xl text-center">
        {/* Badge de Localização */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-purple-400"
        >
          <MapPin size={16} />
          <span>São Paulo, SP</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-black tracking-tight text-zinc-100 sm:text-7xl"
        >
          Bento Rangel.
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          Desenvolvedor Front-end focado em construir interfaces modernas, performáticas e experiências digitais memoráveis.
        </motion.h2>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="group flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-all hover:bg-purple-500">
            Ver Projetos
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button className="rounded-full border border-zinc-800 bg-transparent px-6 py-3 font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-900">
            Entrar em Contato
          </button>
        </motion.div>
      </div>
    </section>
  );
}