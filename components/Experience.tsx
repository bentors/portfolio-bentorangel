"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Layout, MoveRight } from "lucide-react";

// Trocamos as experiências por Cursos e Diplomas
const courses = [
  {
    id: "01",
    period: "Graduação",
    title: "Engenharia de Software",
    institution: "FIAP",
    icon: <GraduationCap size={24} />,
    description: "Formação completa focada em arquitetura de sistemas, design patterns e metodologias ágeis. Base sólida para construir aplicações escaláveis e indestrutíveis.",
    tech: ["Arquitetura", "Design Patterns", "Engenharia"],
  },
  {
    id: "02",
    period: "Especialização",
    title: "Arquitetura Back-end",
    institution: "Java & Spring Boot",
    icon: <Code2 size={24} />,
    description: "Aprofundamento na construção de motores transacionais seguros, APIs RESTful de alta performance e microsserviços blindados para o mercado financeiro.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    id: "03",
    period: "Certificação",
    title: "Engenharia de Dados & B.I.",
    institution: "Python & Analytics",
    icon: <Database size={24} />,
    description: "Domínio na criação de pipelines automatizados (ETL), manipulação de grandes volumes de dados e criação de dashboards interativos para tomada de decisão.",
    tech: ["Python", "Pandas", "Power BI", "SQL"],
  },
  {
    id: "04",
    period: "Bootcamp",
    title: "Front-end de Performance",
    institution: "React & Ecossistema",
    icon: <Layout size={24} />,
    description: "Desenvolvimento de interfaces modernas, fluidas e otimizadas para conversão e SEO, atingindo métricas de excelência no Google Lighthouse.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  }
];

export default function Experience() {
  return (
    // Se quiser, pode mudar o ID para "formacao", só não esqueça de mudar o link no About.tsx!
    <section id="experiencia" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-10"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-purple-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Jornada</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-7xl tracking-tighter">
              Minha trajetória<span className="text-zinc-600">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-zinc-500 md:pb-2">
            <span className="text-sm font-bold uppercase tracking-widest hidden sm:block">Deslize para explorar</span>
            <MoveRight className="animate-pulse" />
          </div>
        </motion.div>

        {/* CARROSSEL HORIZONTAL */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {courses.map((course) => (
            <div 
              key={course.id}
              // A MÁGICA ESTÁ AQUI: Trocamos o 'min-w' por larguras fixas ('w-[85vw]') para obrigar o texto a quebrar.
              className="group relative flex flex-col justify-between w-[85vw] sm:w-[400px] lg:w-[450px] shrink-0 snap-center rounded-[2rem] border border-zinc-800 bg-[#0a0a0a] p-8 sm:p-10 transition-all duration-500 hover:border-purple-500/50 hover:bg-[#0f0f0f]"
            >
              
              {/* Topo do Card: Período e Ícone */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs sm:text-sm font-bold text-zinc-400 whitespace-nowrap">
                  {course.icon}
                  {course.period}
                </div>
                <span className="font-black text-4xl sm:text-5xl text-zinc-800/50 transition-colors duration-500 group-hover:text-purple-500/10">
                  {course.id}
                </span>
              </div>

              {/* Centro do Card: Curso e Instituição */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-100 tracking-tight mb-2 text-wrap">
                  {course.title}
                </h3>
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-widest text-wrap">
                  {course.institution}
                </h4>
              </div>

              {/* Base do Card: Descrição e Techs */}
              <div className="mt-auto">
                <p className="text-zinc-400 font-medium leading-relaxed mb-8 text-wrap">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.tech.map((t) => (
                    <span key={t} className="rounded-full border border-zinc-800 bg-[#050505] px-4 py-1.5 text-xs font-semibold text-zinc-500 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}