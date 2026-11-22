"use client";

import XRay from "@/components/xray/XRay";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, BarChart3, Briefcase, Rocket, MoveRight } from "lucide-react";

const courses = [
  {
    id: "01",
    specs: ["Back-end: Django · Python", "Front-end: React · TSX", "Banco: PostgreSQL", "Ambiente: Linux", "Desde: Ago/2026"],
    period: "Ago/2026 — Atual",
    title: "Estágio em Desenvolvimento Full Stack",
    institution: "Neotel",
    icon: <Briefcase size={24} />,
    description: "Desenvolvimento full stack em produto real: back-end em Django/Python e interfaces em React/TSX sobre PostgreSQL, em ambiente Linux.",
    tech: ["Python", "Django", "TypeScript", "PostgreSQL", "Linux"],
  },
  {
    id: "02",
    specs: ["Papel: cofundador · tech lead", "Segurança: webhooks HMAC · preço validado no servidor", "Auth: Firebase custom claims", "Uploads assinados · rate limiting", "UX/SEO: auditoria do checkout"],
    period: "Dez/2024 — Atual",
    title: "Cofundador & Tech Lead",
    institution: "Street Stars",
    icon: <Rocket size={24} />,
    description: "Responsável por toda a tecnologia da marca: e-commerce full stack, auditorias de segurança e de UX/SEO, e decisões de produto orientadas a conversão.",
    tech: ["Next.js", "TypeScript", "Firebase", "Produto"],
  },
  {
    id: "03",
    specs: ["v1 · Jovem Aprendiz em Operações (2023)", "v2 · Estagiário em Dados (2024–2026)", "Automação: Python", "Pipelines: SQL → Snowflake", "BI: Power BI"],
    period: "Jun/2023 — Jun/2026",
    title: "Estagiário em Dados · Service Quality",
    institution: "DHL Express",
    icon: <Database size={24} />,
    description: "No time de Service Quality, automatizei rotinas com Python e construí pipelines SQL/Snowflake que eliminaram horas de trabalho manual. Entrei como Jovem Aprendiz em Operações (Jun/2023 — Mai/2024) e fui efetivado como estagiário de dados.",
    tech: ["Python", "SQL", "Snowflake", "Power BI"],
  },
  {
    id: "04",
    specs: ["Conclusão: Dez/2027", "Projetos: AlertaSP · Ford Vision · Aurum", "Ênfase: arquitetura · SOA · IA/ML"],
    period: "Graduação",
    title: "Engenharia de Software",
    institution: "FIAP · Conclusão Dez/2027",
    icon: <GraduationCap size={24} />,
    description: "Formação orientada a projetos e resolução de problemas. Base sólida em arquitetura de sistemas, design patterns e metodologias ágeis, com foco prático em construir aplicações corporativas escaláveis.",
    tech: ["Arquitetura", "Design Patterns", "OOP"],
  },
  {
    id: "05",
    specs: ["Carga: 523h (em andamento)", "Spring Boot · REST · segurança", "Clean Code · SOLID"],
    period: "Especialização",
    title: "Backend Java",
    institution: "Alura - 523h em andamento",
    icon: <Code2 size={24} />,
    description: "Aprofundamento na construção de motores digitais. Foco em microsserviços, consumo e criação de APIs RESTful, tratamento de erros, segurança e aplicação rigorosa de boas práticas (Clean Code / SOLID).",
    tech: ["Java", "Spring Boot", "APIs", "OOP"],
  },
  {
    id: "06",
    specs: ["Python · Pandas", "ETL · SQL", "Power BI · dashboards"],
    period: "Certificação",
    title: "Dados & Analytics",
    institution: "Python, Power BI & Big Data",
    icon: <BarChart3 size={24} />,
    description: "Capacitação voltada para a extração de inteligência de negócios. Domínio prático de Python para análise e automação, orquestração de rotinas ETL, manipulação de bancos SQL e construção de dashboards executivos.",
    tech: ["Python", "Pandas", "Power BI", "SQL"],
  },
];

export default function Experience() {
  return (
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
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth
            /* ESTILO PARA CHROME/SAFARI/EDGE */
            [&::-webkit-scrollbar]:h-[3px]           /* Altura mínima no Mobile */
            sm:[&::-webkit-scrollbar]:h-1.5         /* Altura um pouco maior no Desktop */
            
            [&::-webkit-scrollbar-track]:bg-zinc-900/50 
            [&::-webkit-scrollbar-track]:rounded-full
            
            [&::-webkit-scrollbar-thumb]:bg-purple-600/30 
            [&::-webkit-scrollbar-thumb]:rounded-full
            
            /* Hover apenas no Desktop para não poluir o toque no Mobile */
            sm:hover:[&::-webkit-scrollbar-thumb]:bg-purple-500/60
            
            /* Firefox */
            [scrollbar-width:thin]
            [scrollbar-color:rgba(168,85,247,0.3)_transparent]"
        >

          {courses.map((course, i) => (
            <XRay
              key={course.id}
              radius={170}
              demo={i === 0}
              className="group relative flex flex-col justify-between w-[85vw] sm:w-[400px] lg:w-[450px] shrink-0 snap-center rounded-[2rem] border border-zinc-800 bg-[#0a0a0a] p-8 sm:p-10 transition-all duration-500 hover:border-purple-500/50 hover:bg-[#0f0f0f]"
              blueprint={
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center sm:p-10">
                  <span className="bp-label">{`// FICHA TÉCNICA · ${course.id}`}</span>
                  <h3 className="font-mono text-lg font-bold text-purple-200">{course.title}</h3>
                  <ul className="flex flex-col gap-2 font-mono text-xs text-purple-300/90">
                    {course.specs.map((l) => (
                      <li key={l}>› {l}</li>
                    ))}
                  </ul>
                </div>
              }
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

            </XRay>
          ))}
        </motion.div>

      </div>
    </section>
  );
}