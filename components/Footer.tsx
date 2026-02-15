"use client";

import { motion } from "framer-motion";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 z-40 flex w-full justify-center border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md"
    >
      <div className="flex h-16 w-full max-w-5xl items-center justify-between px-6">
        {/* Logo / Nome */}
        <a href="#" className="text-xl font-black tracking-tighter text-zinc-100">
          BR<span className="text-purple-500">.</span>
        </a>

        {/* Links de Navegação */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão de Contato direto no Header */}
        <a
          href="#contato"
          className="hidden rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:text-white sm:block"
        >
          Falar Comigo
        </a>
      </div>
    </motion.header>
  );
}