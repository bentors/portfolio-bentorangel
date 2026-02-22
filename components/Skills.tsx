"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  Coffee, 
  Leaf, 
  Box, 
  Table2, 
  FileSpreadsheet, 
  BarChart3, 
  Workflow, 
  LineChart,
  Zap,
  ArrowRight
} from "lucide-react";

const skillCategories = [
  {
    title: "Back-end & Arquitetura",
    items: [
      {
        name: "Java",
        color: "hover:border-[#E76F00]/50 hover:bg-[#E76F00]/10 text-[#E76F00]",
        icon: <Coffee size={32} strokeWidth={1.5} />,
      },
      {
        name: "Spring Boot",
        color: "hover:border-[#6DB33F]/50 hover:bg-[#6DB33F]/10 text-[#6DB33F]",
        icon: <Leaf size={32} strokeWidth={1.5} />,
      },
      {
        name: "SQL",
        color: "hover:border-[#336791]/50 hover:bg-[#336791]/10 text-[#336791]",
        icon: <Database size={32} strokeWidth={1.5} />,
      },
      {
        name: "MongoDB",
        color: "hover:border-[#2496ED]/50 hover:bg-[#2496ED]/10 text-[#2496ED]",
        icon: <Box size={32} strokeWidth={1.5} />,
      },
      {
        name: "Git",
        color: "hover:border-[#F05032]/50 hover:bg-[#F05032]/10 text-[#F05032]",
        icon: (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.775 2.775c.64-.219 1.383-.075 1.899.442.736.736.736 1.926 0 2.662-.736.736-1.926.736-2.662 0-.51-.51-.652-1.242-.44-1.882l-2.748-2.748v5.92c.218.21.358.503.358.828 0 .641-.52 1.161-1.161 1.161-.641 0-1.161-.52-1.161-1.161 0-.323.138-.614.353-.824V9.695c-.215-.21-.353-.502-.353-.823 0-.154.032-.301.087-.437L6.084 5.676 1.144 10.616c-.603.604-.603 1.583 0 2.189l10.479 10.478c.604.604 1.582.604 2.188 0l9.735-9.735c.603-.604.603-1.582 0-2.188z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      {
        name: "Python",
        color: "hover:border-[#FFD43B]/50 hover:bg-[#FFD43B]/10 text-[#FFD43B]",
        icon: (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12.031 0C5.467 0 5.467 5.467 5.467 5.467h6.634v1.658H4.634C.123 7.125.123 13.759.123 13.759h2.487v-2.487c0-2.825 2.29-2.81 2.29-2.81h6.635s2.487.037 2.487-2.487V2.487S14.022 0 12.031 0zm-2.487 1.658c.687 0 1.243.556 1.243 1.244 0 .687-.556 1.243-1.243 1.243-.687 0-1.244-.556-1.244-1.243 0-.688.557-1.244 1.244-1.244zM11.969 24c6.564 0 6.564-5.467 6.564-5.467h-6.634v-1.658h7.467c4.51 0 4.51-6.634 4.51-6.634h-2.487v2.487c0 2.825-2.29 2.81-2.29 2.81H5.455s-2.487-.037-2.487 2.487v3.487S5.978 24 11.969 24zm2.487-1.658c-.687 0-1.243-.556-1.243-1.244 0-.687.556-1.243 1.243-1.243.687 0 1.244.556 1.244 1.243 0 .688-.557 1.244-1.244 1.244z" />
          </svg>
        ),
      },
      {
        name: "Pandas",
        color: "hover:border-[#150458]/80 hover:bg-[#150458]/30 text-[#4053D6]",
        icon: <Table2 size={32} strokeWidth={1.5} />,
      },
      {
        name: "Power BI",
        color: "hover:border-[#F2C811]/50 hover:bg-[#F2C811]/10 text-[#F2C811]",
        icon: <BarChart3 size={32} strokeWidth={1.5} />,
      },
      {
        name: "Excel",
        color: "hover:border-[#217346]/50 hover:bg-[#217346]/10 text-[#217346]",
        icon: <FileSpreadsheet size={32} strokeWidth={1.5} />,
      },
      {
        name: "Power Automate",
        color: "hover:border-[#0078D4]/50 hover:bg-[#0078D4]/10 text-[#0078D4]",
        icon: <Workflow size={32} strokeWidth={1.5} />,
      },
    ],
  },
  {
    title: "Front-end",
    items: [
      {
        name: "React",
        color: "hover:border-[#61DAFB]/50 hover:bg-[#61DAFB]/10 text-[#61DAFB]",
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" width="32" height="32" fill="currentColor">
            <circle cx="0" cy="0" r="2.05" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        name: "Vite",
        color: "hover:border-[#646CFF]/50 hover:bg-[#646CFF]/10 text-[#646CFF]",
        icon: <Zap size={32} strokeWidth={1.5} fill="currentColor" className="fill-transparent" />,
      },
      {
        name: "Tailwind CSS",
        color: "hover:border-[#38B2AC]/50 hover:bg-[#38B2AC]/10 text-[#38B2AC]",
        icon: (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        ),
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
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
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Arsenal</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-7xl tracking-tighter">
              Stacks<span className="text-zinc-600">.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-medium text-lg">
            A fundação tecnológica que uso para construir motores robustos, analisar dados e criar interfaces ágeis.
          </p>
        </motion.div>

        {/* LISTA DE CATEGORIAS (Formato Duas Colunas Editoriais) */}
        <div className="flex flex-col border-b border-zinc-800">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="flex flex-col lg:flex-row border-t border-zinc-800 py-12 lg:py-16 gap-8 lg:gap-16"
            >
              
              {/* LADO ESQUERDO: Título Gigante da Categoria */}
              <div className="w-full lg:w-1/3 flex flex-col items-start justify-start">
                <span className="text-purple-500 font-black text-xl mb-2">0{idx + 1}</span>
                <h3 className="text-3xl sm:text-4xl font-black text-zinc-100 tracking-tight leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* LADO DIREITO: Grid de Cards */}
              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-zinc-800 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${skill.color}`}
                    >
                      <div className="text-zinc-500 transition-all duration-300 group-hover:scale-110 group-hover:text-inherit">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-zinc-400 transition-colors duration-300 group-hover:text-inherit text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}