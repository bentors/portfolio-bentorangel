"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu mobile quando o usuário clica em um link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        
        {/* LOGO */}
        <a href="#" className="text-xl font-black tracking-tighter text-zinc-100">
          BR<span className="text-purple-500">.</span>
        </a>

        {/* BOTÃO MOBILE COM LUCIDE ICONS */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white md:hidden"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:text-white"
          >
            Falar Comigo
          </a>
        </nav>
      </div>

      {/* DROPDOWN MOBILE */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[400px] border-t border-zinc-800/50 bg-zinc-950/95" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-zinc-400 transition-colors hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={handleLinkClick}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-all hover:bg-purple-500"
          >
            Falar Comigo
          </a>
        </nav>
      </div>
    </header>
  );
}