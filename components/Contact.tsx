"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="relative flex flex-col items-center justify-center border-t border-zinc-800 py-24 pb-12">
      {/* Brilho de fundo sutil na base da página */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[20rem] w-[40rem] -translate-x-1/2 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="z-10 mx-auto w-full max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-4xl font-black text-zinc-100 sm:text-5xl">
            Vamos <span className="text-purple-500">conversar?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
            Seja para falar sobre engenharia de software, projetos de dados ou até mesmo para trocar uma ideia sobre música e jiu-jitsu, minha caixa de entrada está sempre aberta.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Botão Principal: E-mail */}
            <a
              href="mailto:seu-email@exemplo.com"
              className="group flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-all hover:bg-purple-500"
            >
              <Mail size={18} />
              <span>Me mande um e-mail</span>
            </a>
            
            {/* Botões Secundários: Redes */}
            <a
              href="https://linkedin.com/in/seuperfil"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/seugithub"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Rodapé Simples */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-24 text-sm text-zinc-600"
      >
        <p>© {new Date().getFullYear()} Bento Rangel. Construído com Next.js & Tailwind.</p>
      </motion.div>
    </section>
  );
}