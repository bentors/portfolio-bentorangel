"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-[#050505] border-t border-zinc-800/50 py-10">
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row">
        
        {/* LADO ESQUERDO: Logo e Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-100">
            BR<span className="text-purple-500">.</span>
          </Link>
          <p className="text-sm font-medium text-zinc-500">
            © {currentYear} • Desenvolvido por Bento Rangel
          </p>
        </div>

        {/* CENTRO: Ícones de Contato */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/bentors" 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a 
            href="https://linkedin.com/in/bento-rangel-1854432a6" 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-500 transition-colors hover:text-[#0A66C2]"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a 
            href="mailto:bento.rangel05@gmail.com" 
            className="text-zinc-500 transition-colors hover:text-purple-400"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* LADO DIREITO: Botão Voltar ao Topo */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 rounded-full border border-zinc-800 bg-[#0a0a0a] px-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-400 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          aria-label="Voltar ao topo da página"
        >
          Voltar ao topo
          <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </button>

      </div>
    </footer>
  );
}