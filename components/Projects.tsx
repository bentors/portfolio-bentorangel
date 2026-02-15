"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projectsList = [
  {
    id: 1,
    title: "Street Stars",
    description: "Plataforma digital para marca própria de streetwear focada em São Paulo. O projeto exigiu alta otimização de imagens e animações fluidas, resultando em melhorias significativas de performance no Lighthouse e ajuste fino de SEO/Meta tags para compartilhamento social.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    githubUrl: "#", // Depois você coloca o link do seu repositório
    liveUrl: "https://streetstars.vercel.app",
  },
  {
    id: 2,
    title: "Pipeline de Dados & Automação",
    description: "Estruturação de pipeline de dados para extração, tratamento e carregamento (ETL). Foco em automação de processos internos e geração de inteligência de negócios (BI) para facilitar a tomada de decisão.",
    tags: ["Python", "Pandas", "SQL", "Automação"],
    githubUrl: "#",
    liveUrl: "",
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="flex min-h-screen flex-col items-center justify-center border-t border-zinc-800 py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black text-zinc-100 sm:text-4xl">
            Projetos em <span className="text-purple-500">Destaque.</span>
          </h2>
          <p className="mt-4 text-zinc-400">Cases onde uni código, design e resolução de problemas.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 transition-all hover:border-purple-500/50 hover:bg-zinc-900/50"
            >
              <div>
                <div className="mb-4 flex items-center justify-between text-zinc-100">
                  <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="mb-6 text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}