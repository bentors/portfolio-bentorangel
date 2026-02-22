"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Layers, Target, Network, ArrowDown } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-32">

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-20"
        >
          <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl tracking-tight">
            Mais que código. <br />
            <span className="text-purple-500">Arquitetura de soluções.</span>
          </h2>
        </motion.div>

        {/* O GRID INTELIGENTE: */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          
          {/* CARD 1: BIO PRINCIPAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            // Mobile: Ocupa as 2 colunas / Desktop: Ocupa 4 colunas (fica na Linha 1)
            className="order-1 col-span-2 md:order-1 md:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-5 sm:p-8 transition-all hover:bg-zinc-900/40"
          >
            <div className="mb-2 sm:mb-8">
              <Terminal className="mb-3 sm:mb-4 text-purple-400 w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
              <h3 className="mb-3 sm:mb-4 text-xl font-bold text-zinc-100 sm:text-3xl leading-tight">Da curiosidade ao código que impacta.</h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-lg font-medium">
                Minha jornada com tecnologia começou na pandemia, movido por pura curiosidade de explorar novos mundos. O que era experimentação virou fascínio: descobri que resolver problemas complexos com código é onde me sinto no meu elemento. Hoje, curso Engenharia de Software na <span className="text-zinc-200">FIAP</span> e trago essa mesma curiosidade para cada projeto, seja arquitetando backends robustos ou construindo pipelines de dados que contam histórias.
              </p>
            </div>
          </motion.div>

          {/* CARD 3: MENTALIDADE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            // Mobile: Ocupa as 2 colunas / Desktop: Ocupa 3 colunas (fica na Linha 2)
            className="order-2 col-span-2 md:order-3 md:col-span-3 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-5 sm:p-8 transition-all hover:border-purple-500/30 hover:bg-zinc-900/40"
          >
            <Layers className="mb-3 sm:mb-4 text-purple-400 w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-zinc-100 leading-tight">A mentalidade por trás do motor.</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
                Não basta funcionar — precisa escalar. Minha abordagem: arquitetura sólida (Java/Spring Boot) + dados inteligentes (Python/SQL). Fundações robustas para resultados sustentáveis.
              </p>
            </div>
          </motion.div>

          {/* CARD 4: DHL/DADOS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            // Mobile: Ocupa as 2 colunas / Desktop: Ocupa 3 colunas (fica na Linha 2)
            className="order-3 col-span-2 md:order-4 md:col-span-3 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-5 sm:p-8 transition-all hover:bg-zinc-900/40"
          >
            <Network className="mb-3 sm:mb-4 text-purple-400 w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
            <div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-2xl font-bold text-zinc-100">Da operação aos dados.</h3>
              <p className="font-medium text-zinc-400 leading-relaxed text-sm sm:text-base">
                Atualmente estou na DHL Express: de operações a engenharia de dados. Aprendi a entender o problema antes de escrever código. Sistemas existem para resolver dores reais, não só para funcionar.
              </p>
            </div>
          </motion.div>

          {/* CARD 5: BUSINESS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            // Mobile: Ocupa as 2 colunas / Desktop: Ocupa 4 colunas (fica na Linha 3)
            className="order-4 col-span-2 md:order-5 md:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-5 sm:p-8 transition-all hover:bg-zinc-900/40"
          >
            <Target className="mb-3 sm:mb-4 text-purple-400 w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-zinc-100 leading-tight">Produto, arte e disciplina.</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
                Cofundador da <strong className="text-zinc-200">Street Stars</strong>, onde desenvolvi vivência real de negócio. Músico, praticante do jiu jitsu. Arte e esporte ensinam o que bootcamp não ensina: disciplina, criatividade e resiliência.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: FOTO PESSOAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            // Mobile: Ocupa 1 coluna (lado a lado com o CTA) / Desktop: Ocupa 2 colunas (fica na Linha 1)
            className="order-5 col-span-1 md:order-2 md:col-span-2 group relative aspect-square md:aspect-auto overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900"
          >
            <Image 
              src="/fotopessoalBento.jpeg" 
              alt="Bento Rangel" 
              fill 
              className="object-cover transition-all duration-700 md:grayscale md:group-hover:scale-105 md:group-hover:grayscale-0"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 transition-opacity md:group-hover:opacity-20" />
          </motion.div>

          {/* CARD 6: CTA */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("experiencia");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            // Mobile: Ocupa 1 coluna (lado a lado com a Foto) / Desktop: Ocupa 2 colunas (fica na Linha 3)
            className="order-6 col-span-1 md:order-6 md:col-span-2 block group w-full text-left cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative flex h-full min-h-[160px] md:min-h-0 flex-col justify-center items-center text-center overflow-hidden rounded-3xl border border-purple-500/20 bg-purple-600/5 p-4 sm:p-8 transition-all duration-300 md:group-hover:bg-purple-600/10 md:group-hover:border-purple-500/50 md:group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <h3 className="mb-3 sm:mb-4 text-base sm:text-xl font-bold text-zinc-100 transition-colors md:group-hover:text-white leading-tight">
                Explore<br className="block sm:hidden" /> formação
              </h3>
              
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 transition-all duration-300 md:group-hover:bg-purple-500 md:group-hover:text-white md:group-hover:scale-110 md:group-hover:translate-y-2">
                <ArrowDown strokeWidth={2} className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
            </motion.div>
          </button>

        </div>
      </div>
    </section>
  );
}