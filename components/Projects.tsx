"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowUpRight, Code2, Database, Layers } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Street Stars",
    subtitle: "E-commerce & Performance",
    icon: <Layers size={24} />,
    description: "Desenvolvimento do e-commerce oficial da marca. Foco absoluto em conversão e atingindo métricas de excelência no Lighthouse.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/bentors", 
    link: "https://streetstars.com.br", 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "02",
    title: "Core Banking",
    subtitle: "Back-end Architecture",
    icon: <Code2 size={24} />,
    description: "Arquitetura robusta para sistema financeiro focado em escalabilidade transacional e segurança absoluta dos dados.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/bentors",
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "03",
    title: "Data Pipeline",
    subtitle: "Engenharia de Dados",
    icon: <Database size={24} />,
    description: "Pipeline automatizado (ETL) para dados estruturados, culminando em dashboards analíticos interativos para decisão em tempo real.",
    tech: ["Python", "Pandas", "Power BI", "SQL"],
    github: "https://github.com/bentors",
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
  }
];

export default function Projects() {
  return (
    // Voltamos com o overflow-hidden por segurança!
    <section id="projetos" className="relative w-full py-24 sm:py-32 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
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

        {/* LISTA BRUTALISTA DE PROJETOS (Estilo Farzin Zaman) */}
        <div className="flex flex-col border-b border-zinc-800">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between border-t border-zinc-800 py-12 lg:py-16 gap-8 transition-colors hover:bg-zinc-900/20"
            >
              
              {/* BLOCO ESQUERDO: Número e Imagem (A imagem fica "escondida" e salta no Desktop) */}
              <div className="flex w-full lg:w-5/12 items-center gap-8">
                <span className="text-2xl font-black text-zinc-700 transition-colors group-hover:text-purple-500">
                  {project.id}
                </span>
                
                {/* Imagem (visível no mobile, ou como preview no desktop) */}
                <div className="relative aspect-video w-full max-w-[280px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-500 lg:scale-95 lg:opacity-70 group-hover:scale-100 group-hover:opacity-100 group-hover:border-purple-500/30">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* BLOCO CENTRAL: Título Gigante e Stack */}
              <div className="flex w-full lg:w-5/12 flex-col justify-center">
                <div className="mb-3 flex items-center gap-3 text-purple-400">
                  {project.icon}
                  <span className="text-sm font-bold uppercase tracking-widest">{project.subtitle}</span>
                </div>
                
                <h3 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-zinc-100 transition-all duration-500 lg:-translate-x-4 group-hover:translate-x-0 group-hover:text-white">
                  {project.title}
                </h3>
                
                <p className="mb-6 max-w-md text-base text-zinc-400 font-medium leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-zinc-900/80 px-3 py-1.5 text-xs font-semibold text-zinc-300 border border-zinc-800/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BLOCO DIREITO: Botões de Ação */}
              <div className="flex w-full lg:w-2/12 flex-row lg:flex-col items-center lg:items-end justify-start gap-4 mt-4 lg:mt-0">
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition-all hover:scale-110 hover:bg-purple-500 hover:text-white"
                  aria-label="Acessar projeto"
                >
                  <ArrowUpRight size={24} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
                
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 bg-transparent text-zinc-400 transition-all hover:scale-110 hover:border-zinc-300 hover:text-white"
                  aria-label="Ver repositório"
                >
                  <Github size={22} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}