"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

{/* ARRAY DE PROJETOS */}
const projects = [
  {
    id: "01",
    title: "Street Stars",
    subtitle: "E-commerce Full Stack",
    description: "E-commerce completo para marca de streetwear autêntica. Interface fluida e responsiva com foco em conversão e experiência do usuário. Integração com sistemas de pagamento e gerenciamento de produtos em tempo real.",
    tech: ["React", "Tailwind", "Firebase", "APIs"],
    github: "https://github.com/bentors/site-streetstars", 
    link: "https://streetstars.vercel.app/", 
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "02",
    title: "SmartInventory API",
    subtitle: "Backend Architecture",
    description: "API escalável desenvolvida com Java 21 e Spring Boot, focada em alta disponibilidade e integridade de dados. O projeto utiliza Docker, PostgreSQL e Flyway. Conta com documentação interativa via Swagger/OpenAPI e segurança robusta via Spring Security.",
    tech: ["Java", "Docker", "Flyway", "Spring Boot"],
    github: "https://github.com/bentors/smart-inventory-api", 
    link: "https://smartinventory-api-m3gr.onrender.com/swagger-ui/index.html",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "03",
    title: "Aurum Personal Finance",
    subtitle: "Full Stack Development & Data Analysis",
    description: "Plataforma completa de finanças pessoais com arquitetura robusta e segura. Possui API em Java com autenticação JWT, isolamento de dados por usuário e alta performance, integrada a um frontend em TypeScript e análises avançadas com Python para geração de insights e visualizações.",
    tech: ["Java", "Spring Boot", "TypeScript", "Python", "PostgreSQL"],
    github: "https://github.com/bentors/finance-dashboard",
    link: "#",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="projetos" className="relative pt-24 pb-12 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-800 pb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-purple-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Cases de Sucesso</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-7xl tracking-tighter">
              Trabalhos<span className="text-zinc-600">.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-medium text-lg">
            Uma seleção de projetos focados em performance, escalabilidade e arquitetura limpa.
          </p>
        </motion.div>


        {/* ========================================== */}
        {/* VERSÃO MOBILE: CARDS EMPILHADOS  */}
        {/* ========================================== */}
        <div className="block lg:hidden relative">
          {projects.map((project, index) => (
            <div
              key={`mobile-${project.id}`}
              className="sticky w-full max-w-sm mx-auto rounded-[2rem] border-t border-zinc-800 bg-[#0a0a0a] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
              style={{
                top: `calc(15vh + ${index * 24}px)`,
                marginBottom: index === projects.length - 1 ? '0' : '40vh',
              }}
            >
              {/* Metade Superior: Imagem */}
              <div className="relative h-48 sm:h-56 w-full border-b border-zinc-800">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Metade Inferior: Textos Compactos */}
              <div className="flex flex-col p-6 sm:p-8 gap-4 relative z-10 bg-[#0a0a0a]">
                <div className="flex items-center gap-3 text-purple-400">
                  <span className="font-mono text-sm font-bold">{project.id}</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">{project.subtitle}</span>
                </div>

                <h3 className="text-3xl font-black text-zinc-100 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold text-black transition-all active:scale-95"
                  >
                    Acessar
                    <ArrowUpRight size={14} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-transparent px-4 py-3 text-xs font-bold text-zinc-300 transition-all active:scale-95"
                  >
                    <Github size={14} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* ========================================== */}
        {/* VERSÃO DESKTOP: ROLAGEM EDITORIAL */}
        {/* ========================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start relative">
          
          {/* LADO ESQUERDO: A Lista de Projetos */}
          <div className="lg:col-span-7 flex flex-col">
            {projects.map((project, index) => (
              <div
                key={`desktop-${project.id}`}
                onMouseEnter={() => setHoveredIndex(index)}
                className="group relative flex flex-col border-b border-zinc-800 py-16 transition-colors duration-500 hover:border-purple-500"
              >
                <div className="absolute inset-0 -mx-6 rounded-3xl bg-zinc-900/0 transition-colors duration-500 group-hover:bg-zinc-900/40 -z-10" />

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-center gap-4 text-zinc-500 transition-colors duration-300 group-hover:text-purple-400">
                    <span className="font-mono text-sm font-bold">{project.id}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{project.subtitle}</span>
                  </div>

                  <h3 className="text-5xl md:text-6xl font-black text-zinc-300 transition-all duration-500 group-hover:translate-x-4 group-hover:text-white">
                    {project.title}
                  </h3>

                  <p className="max-w-lg text-zinc-400 font-medium leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={`tech-${t}`} className="rounded-full bg-[#0a0a0a] border border-zinc-800 px-4 py-1.5 text-xs font-semibold text-zinc-400 transition-colors duration-300 group-hover:border-purple-500/30 group-hover:text-zinc-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-purple-500 hover:text-white hover:scale-105"
                    >
                      Acessar
                      <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn flex items-center gap-2 rounded-full border border-zinc-700 bg-transparent px-6 py-3 text-sm font-bold text-zinc-300 transition-all hover:border-zinc-300 hover:text-white hover:scale-105"
                    >
                      <Github size={16} />
                      Repositório
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LADO DIREITO: A imagem fixa com Rolagem */}
          <div className="hidden lg:flex lg:col-span-5 sticky top-0 h-screen items-center justify-center pointer-events-none">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={hoveredIndex}
                  initial={{ y: "-100%", opacity: 0.5, filter: "blur(4px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "100%", opacity: 0.5, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={projects[hoveredIndex].image} 
                    alt="Preview do Projeto" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-[#050505]/20" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}