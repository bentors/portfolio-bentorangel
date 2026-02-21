"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, GraduationCap, Code2, Rocket, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-3xl font-black text-white sm:text-5xl md:text-6xl tracking-tight">
            Mais que código. <br />
            <span className="text-purple-500">Arquitetura de soluções.</span>
          </h2>
        </motion.div>

        {/* BOX GRID */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          
          {/* CARD 1: BIO PRINCIPAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="order-1 col-span-2 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-6 sm:p-8 transition-all hover:bg-zinc-900/40"
          >
            <div className="mb-4 sm:mb-8">
              <Code2 className="mb-4 text-purple-400" size={32} strokeWidth={1.5} />
              <h3 className="mb-4 text-2xl font-bold text-zinc-100 sm:text-3xl">A mentalidade por trás do motor.</h3>
              <p className="text-zinc-400 leading-relaxed text-base sm:text-lg font-medium">
                Acredito que interfaces brilhantes precisam de fundações indestrutíveis. Minha jornada na Engenharia de Software é focada em construir back-ends escaláveis com <span className="text-zinc-200">Java</span> e pipelines de dados eficientes com <span className="text-zinc-200">Python</span>. Eu não apenas conecto APIs, eu arquiteto a estrutura que faz o negócio rodar sem gargalos.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: FOTO PESSOAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-2 col-span-1 group relative h-48 sm:h-64 md:h-auto overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900"
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

          {/* CARD 3: ACADEMIA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="order-4 md:order-3 col-span-2 md:col-span-1 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-6 sm:p-8 transition-all hover:border-purple-500/30 hover:bg-zinc-900/40"
          >
            <GraduationCap className="mb-4 text-purple-400" size={32} strokeWidth={1.5} />
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-widest text-zinc-500">Formação</p>
              <h3 className="text-xl font-bold text-zinc-100">Engenharia de Software</h3>
              <p className="mt-2 font-medium text-zinc-400">FIAP - Faculdade de Informática e Administração Paulista</p>
            </div>
          </motion.div>

          {/* CARD 4: BUSINESS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-5 md:order-4 col-span-2 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-6 sm:p-8 transition-all hover:bg-zinc-900/40 md:flex-row md:items-center gap-6"
          >
            <div className="flex-1">
              <Rocket className="mb-4 text-purple-400" size={32} strokeWidth={1.5} />
              <h3 className="mb-2 text-xl font-bold text-zinc-100">Visão de Produto & Negócio</h3>
              <p className="font-medium text-zinc-400 leading-relaxed text-base sm:text-lg">
                Além do código, sou cofundador da <strong className="text-zinc-200">Street Stars</strong>, uma marca de streetwear autêntica. Desenvolver o e-commerce do zero me deu a vivência real do lado do negócio: otimização de performance extrema, conversão de vendas e experiência do usuário na veia.
              </p>
            </div>
          </motion.div>

          {/* CARD 5: LOCALIZAÇÃO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="order-3 md:order-5 col-span-1 group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-4 sm:p-8 transition-all hover:bg-zinc-900/40 text-center"
          >
            <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-zinc-800/50 text-purple-400 transition-transform md:group-hover:scale-110 md:group-hover:bg-purple-500/20">
              <MapPin size={28} strokeWidth={1.5} className="sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-100 leading-tight">São Paulo, SP</h3>
            <p className="text-xs sm:text-sm font-medium text-zinc-500 mt-1">Brasil</p>
          </motion.div>

          {/* CARD 6: CTA PARA JORNADA COMPLETA */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("experiencia");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="order-6 col-span-2 block group w-full text-left cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-purple-500/20 bg-purple-600/5 p-6 sm:p-8 transition-all duration-300 md:group-hover:bg-purple-600/10 md:group-hover:border-purple-500/50 md:group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="mb-2 text-xl sm:text-2xl font-bold text-zinc-100 transition-colors md:group-hover:text-white">
                    Explore minha trajetória
                  </h3>
                  <p className="text-zinc-400 font-medium leading-relaxed max-w-lg text-sm sm:text-base">
                    Cursos complementares, diplomas detalhados, evolução técnica e a linha do tempo completa da minha carreira.
                  </p>
                </div>
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 transition-all duration-300 md:group-hover:bg-purple-500 md:group-hover:text-white md:group-hover:scale-110 sm:md:group-hover:translate-x-2">
                  <ArrowRight size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
                </div>
              </div>
            </motion.div>
          </button>

        </div>
      </div>
    </section>
  );
}