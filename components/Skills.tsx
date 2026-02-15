"use client";

import { motion } from "framer-motion";

// Organizando as skills em categorias para facilitar a manutenção
const skillCategories = [
  {
    title: "Dados & Back-end",
    skills: ["Python", "SQL", "Pandas", "Automação (ETL)", "Power BI / Dashboards"],
  },
  {
    title: "Front-end & UI",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"],
  },
  {
    title: "Ferramentas & Outros",
    skills: ["Git & GitHub", "Figma", "Lighthouse (SEO/Performance)", "Cloudinary"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="flex min-h-[70vh] flex-col items-center justify-center border-t border-zinc-800 bg-zinc-900/10 py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-black text-zinc-100 sm:text-4xl">
            Meu <span className="text-purple-500">Ecossistema.</span>
          </h2>
          <p className="mt-4 text-zinc-400">Tecnologias e ferramentas que uso no dia a dia.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8"
            >
              <h3 className="mb-6 text-xl font-bold text-zinc-200">{category.title}</h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-purple-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500/50"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}