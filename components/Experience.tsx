"use client";

import RevealText from "@/components/RevealText";
import XRay from "@/components/xray/XRay";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Award, Briefcase, Rocket, MoveRight } from "lucide-react";

const courses = [
  {
    id: "01",
    specs: ["Refactor do Neoreport em 6 fases · testes ~110 → 187", "IA generativa: AWS Bedrock · saída validada por schema", "Trilhas de auditoria · sync Planner via Microsoft Graph", "PDF assíncrono com Celery · 173 testes levados ao CI", "Docs: Fumadocs → Zensical · RAM 3,1 GB → 123 MB"],
    period: "Set/2026 — Atual",
    title: "Estagiário de Engenharia de Software",
    institution: "Neotel Segurança Digital",
    icon: <Briefcase size={24} />,
    description: "Full stack nos produtos de cybersecurity da empresa. Refatorei sozinho o Neoreport, o microsserviço de relatórios que é o produto principal, e implementei trilhas de auditoria e integrações com Microsoft Graph. Mais de 140 PRs integrados em 4 produtos nos primeiros 3 meses.",
    tech: ["Python", "Django", "React", "TypeScript", "PostgreSQL", "Celery", "AWS Bedrock"],
  },
  {
    id: "02",
    specs: ["Papel: cofundador · tech lead", "Segurança: webhooks HMAC · preço validado no servidor", "Auth: Firebase custom claims", "Uploads assinados · rate limiting", "UX/SEO: auditoria do checkout"],
    period: "Dez/2024 — Atual",
    title: "Cofundador & Tech Lead",
    institution: "Street Stars",
    icon: <Rocket size={24} />,
    description: "Construí do zero o e-commerce da marca e lidero toda a parte técnica: arquitetura, auditorias de segurança e de UX/SEO, e decisões de produto orientadas a conversão.",
    tech: ["Next.js", "TypeScript", "Firebase", "Produto"],
  },
  {
    id: "03",
    specs: ["v1 · Jovem Aprendiz em Operações (2023–2024) · auditoria ISO 9001", "v2 · Estagiário em Dados (2024–2026)", "Excel e macros → Snowflake + Python · 500 mil+ linhas", "Pré-alerta de coleta no Power Automate", "Certificado CIS (Certified International Specialist)"],
    period: "Jun/2023 — Mai/2026",
    title: "Estagiário em Dados · Service Quality",
    institution: "DHL Express",
    icon: <Database size={24} />,
    description: "Evoluí o principal Power BI de Service Quality da DHL no Brasil, usado por todas as filiais. Troquei a atualização diária da base, feita em Excel e macros, por Snowflake e Python: de cerca de 2h para no máximo 30 min por dia. Entrei como Jovem Aprendiz em Operações (Jun/2023 — Mai/2024).",
    tech: ["Python", "SQL", "Snowflake", "Power BI", "Power Automate"],
  },
  {
    id: "04",
    specs: ["Conclusão: Dez/2027", "Bolsa integral ProUni · média acima de 8", "Projetos: Ford Vision · AlertaSP · REORBITA (top 15)", "Ênfase: SOA · DDD · cybersecurity · IA/ML"],
    period: "Graduação",
    title: "Engenharia de Software",
    institution: "FIAP · Conclusão Dez/2027",
    icon: <GraduationCap size={24} />,
    description: "Bolsa integral do ProUni pela nota do ENEM, com média acima de 8 em todos os semestres. Base em SOA, DDD com Java, cybersecurity, redes, sistemas operacionais e IA/ML. No REORBITA, previsão de tempestade solar com dados da NOAA, ficamos no top 15 entre todas as turmas.",
    tech: ["Java", "C#", "SOA", "DDD", "Machine Learning"],
  },
  {
    id: "05",
    specs: ["Carga: 523h (em andamento)", "Spring Boot · REST · segurança", "Clean Code · SOLID"],
    period: "Especialização",
    title: "Backend Java",
    institution: "Alura · 523h em andamento",
    icon: <Code2 size={24} />,
    description: "Formação em backend com Java e Spring Boot: APIs REST, tratamento de erros, segurança e boas práticas de Clean Code e SOLID.",
    tech: ["Java", "Spring Boot", "APIs", "OOP"],
  },
  {
    id: "06",
    specs: ["DHL Express · CIS (Nov/2025)", "FIAP · Desenvolvimento Java Enterprise (2026)", "FIAP · Java Development · Big Data (2026)", "Anthropic · Claude Code in Action · MCP (2026)", "Alura · Lean Six Sigma (2026)"],
    period: "Certificações",
    title: "Formação complementar",
    institution: "DHL · FIAP · Anthropic · Alura",
    icon: <Award size={24} />,
    description: "Certified International Specialist (CIS), programa global de formação da DHL Express. Java Enterprise, Java Development e Big Data pela FIAP. Claude Code in Action e Model Context Protocol pela Anthropic.",
    tech: ["Java", "Big Data", "IA generativa", "Logística internacional"],
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
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Trajetória</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-7xl tracking-tighter">
              <RevealText text="Minha trajetória" /><span className="text-zinc-600">.</span>
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
              description={`Ficha técnica: ${course.specs.join("; ")}`}
              demo={i === 0}
              className="group relative flex flex-col justify-between w-[85vw] sm:w-[400px] lg:w-[450px] shrink-0 snap-center rounded-[2rem] border border-zinc-800 bg-surface p-8 sm:p-10 transition-all duration-500 hover:border-purple-500/50 hover:bg-surface-2"
              blueprint={
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center sm:p-10">
                  <span className="bp-label">{`// FICHA TÉCNICA · ${course.id}`}</span>
                  <p className="font-mono text-lg font-bold text-purple-200">{course.title}</p>
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
                    <span key={t} className="rounded-full border border-zinc-800 bg-page px-4 py-1.5 text-xs font-semibold text-zinc-500 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300">
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