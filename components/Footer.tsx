"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-[#050505] py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Lado Esquerdo: Logo e Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-black tracking-tighter text-zinc-100">
            BR<span className="text-purple-500">.</span>
          </Link>
          <p className="text-sm text-zinc-500 font-medium">
            © {currentYear} • Desenvolvido por Bento Rangel
          </p>
        </div>

        {/* Lado Direito: Ícones de Contato */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/bentors" 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/bento-rangel-1854432a6" 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-500 transition-colors hover:text-[#0A66C2]"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:bento.rangel05@gmail.com" 
            className="text-zinc-500 transition-colors hover:text-purple-400"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}