"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, BarChart3, Globe } from "lucide-react";

const projects = [
  {
    title: "Street Stars",
    category: "Engenharia de Software",
    description: "Plataforma e-commerce de vestuário com foco em performance extrema. Otimização de Lighthouse para 95+ e interface interativa com Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/bentors/site-streetstars", // Substitua pelo link real
    link: "https://streetstars.vercel.app/", // Substitua pelo link real
    image: "https://res.cloudinary.com/dmsvju9ca/image/upload/v1769730868/logo_fundopreto_y87j0h.png", 
  },
  {
    title: "Data Pipeline & BI Dashboard",
    category: "Engenharia de Dados",
    description: "Pipeline automatizado em Python para coleta de dados brutos, processamento com Pandas e visualização em Dashboard interativo de B.I.",
    tech: ["Python", "Pandas", "Power BI", "SQL"],
    github: "https://github.com/bentors",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Java Banking System",
    category: "Back-end",
    description: "API robusta para gerenciamento bancário desenvolvida em Java e Spring Boot, utilizando PostgreSQL para persistência e Docker para containerização.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/bentors",
    link: "#",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="relative bg-[#050505] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Projetos em <span className="text-purple-500">Destaque.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Uma seleção de trabalhos que unem arquitetura sólida e interfaces fluidas.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid gap-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/10 p-6 transition-all hover:border-purple-500/30 hover:bg-zinc-900/20 lg:grid-cols-2"
            >
              {/* Imagem do Projeto */}
              <div className="relative h-64 overflow-hidden rounded-2xl bg-zinc-800 lg:h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>

              {/* Conteúdo do Projeto */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400">
                  {project.category === "Engenharia de Software" ? <Code2 size={14} /> : <BarChart3 size={14} />}
                  {project.category}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                <p className="mb-6 text-zinc-400 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-lg bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/30">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-400 transition-colors hover:text-white"
                  >
                    <Github size={18} />
                    Código
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-purple-400 transition-colors hover:text-purple-300"
                  >
                    <Globe size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}