"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "/#sobre", id: "sobre" },
  { name: "Trajetória", href: "/#experiencia", id: "experiencia" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Projetos", href: "/#projetos", id: "projetos" },
  { name: "Contato", href: "/#contato", id: "contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // OBSERVER DA SEÇÃO ATIVA (Scroll Spy)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" } 
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setIsAtTop(window.scrollY < 60); // Controla a pílula
      if (window.scrollY < 100) {
        setActiveSection("");
      }
      else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("contato");
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (pathname === "/" && href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Wrapper fixado: removido animate={isHidden} para ele ficar sempre visível */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        className="fixed left-0 right-0 top-6 z-[100] flex justify-center px-4 pointer-events-none"
      >
        <motion.div
          layout
          className={`relative pointer-events-auto flex items-center justify-between overflow-hidden transition-colors duration-500 ${
            isAtTop
              ? "w-full max-w-5xl rounded-none border-b border-transparent bg-transparent py-2 px-2 shadow-none backdrop-blur-none"
              : "w-full md:w-auto max-w-full gap-6 rounded-full border border-zinc-800/60 bg-[#050505]/80 px-4 py-2 shadow-2xl backdrop-blur-md"
          }`}
        >
          
          {/* LADO ESQUERDO: Crossfade Logo <-> Foto */}
          <div className="flex shrink-0 items-center">
            <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="relative flex h-10 w-10 items-center justify-start">
              <motion.div
                initial={false}
                animate={{ opacity: isAtTop ? 1 : 0, scale: isAtTop ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 flex items-center"
              >
                <span className="text-xl font-black tracking-tighter text-zinc-100">
                  BR<span className="text-purple-500">.</span>
                </span>
              </motion.div>
              <motion.div
                initial={false}
                animate={{ opacity: isAtTop ? 0 : 1, scale: isAtTop ? 0.5 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 flex items-center justify-center pointer-events-none"
              >
                <div className={`relative h-9 w-9 overflow-hidden rounded-full border-2 border-zinc-700/50 transition-colors ${!isAtTop && 'pointer-events-auto hover:border-purple-500'}`}>
                  <Image src="/fotopessoalBento.jpeg" alt="Bento" fill className="object-cover" />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* CENTRO DESKTOP: Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-purple-400 ${
                    isActive ? "text-white" : isAtTop ? "text-zinc-400" : "text-zinc-300"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-purple-500"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CENTRO MOBILE: Indicador Dinâmico */}
          {!isAtTop && (
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center md:hidden pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSection}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500"
                >
                  {navLinks.find(l => l.id === activeSection)?.name || ""}
                </motion.span>
              </AnimatePresence>
            </div>
          )}

          {/* LADO DIREITO: Ícones */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="mailto:bento.rangel05@gmail.com"
              className={`flex items-center justify-center h-9 w-9 rounded-full transition-all duration-300 ${
                isAtTop
                  ? "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                  : "bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              }`}
              aria-label="Enviar E-mail Direto"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`group relative z-[110] flex h-9 w-9 items-center justify-center rounded-full transition-all md:hidden ${
                isAtTop 
                  ? "text-zinc-400 hover:text-purple-400" 
                  : "bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-purple-500 hover:text-purple-400"
              }`}
              aria-label="Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </motion.div>
      </motion.div>

      {/* OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 z-[90] flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isOpen ? "bg-[#050505]/95 backdrop-blur-xl opacity-100 pointer-events-auto" : "bg-[#050505]/0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start gap-6">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ transitionDelay: `${isOpen ? i * 75 : 0}ms` }}
                className={`text-4xl font-black tracking-tight transition-all duration-500 hover:text-purple-400 ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                } ${isActive ? "text-white" : "text-zinc-600"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}