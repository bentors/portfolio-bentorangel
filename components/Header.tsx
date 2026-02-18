"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Sobre", href: "/#sobre" },
  { name: "Skills", href: "/#skills" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Contato", href: "/#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Descobre em qual página estamos agora

  // SCROLL INTELIGENTE
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false); // Fecha o menu mobile se estiver aberto

    // Se estamos na Home e o link é uma âncora
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault(); // Impede a URL de mudar
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Desliza macio
      }
    }
    // Se o clique for na Logo ("/") e já estivermos na Home
    else if (pathname === "/" && href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full border-b border-zinc-900/50 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        
        {/* LOGO */}
        <div className="flex w-1/3 justify-start">
          <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="text-xl font-black tracking-tighter text-zinc-100 transition-colors hover:text-white">
            BR<span className="text-purple-500">.</span>
          </Link>
        </div>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden w-1/3 justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-purple-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÕES DIREITA */}
        <div className="flex w-1/3 justify-end">
          <Link
            href="/#contato"
            onClick={(e) => handleNavClick(e, "/#contato")}
            className="hidden rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-semibold text-zinc-300 transition-all hover:border-purple-500/50 hover:bg-zinc-900 hover:text-white md:block backdrop-blur-sm"
          >
            Falar Comigo
          </Link>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:border-purple-500/50 hover:text-purple-400 md:hidden"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-90"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* DROPDOWN MOBILE */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[400px] border-t border-zinc-800/50 bg-[#050505]/95 backdrop-blur-md" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-zinc-400 transition-colors hover:text-purple-400"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contato"
            onClick={(e) => handleNavClick(e, "/#contato")}
            className="mt-2 flex w-full max-w-xs items-center justify-center rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-all hover:bg-purple-500"
          >
            Falar Comigo
          </Link>
        </nav>
      </div>
    </header>
  );
}