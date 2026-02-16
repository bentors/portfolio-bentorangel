"use client";

import { motion } from "framer-motion";
import { Database, Server, User } from "lucide-react"; // Tirei o Terminal daqui

export default function About() {
  return (
    <section id="sobre" className="relative bg-[#050505] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Título da Seção animado ao rolar a página */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Muito prazer, eu sou o <span className="text-purple-500">Bento.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Construindo a fundação sólida por trás de produtos digitais.
          </p>
        </motion.div>

        {/* Grid Estilo "Bento Box" */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Bloco 1: Texto Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 flex flex-col justify-center rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-8 transition-colors hover:bg-zinc-900/40 md:col-span-2 lg:col-span-2"
          >
            <User className="mb-6 text-purple-400" size={32} />
            <h3 className="mb-4 text-2xl font-bold text-zinc-100">O motor por trás da interface</h3>
            <div className="space-y-4 text-zinc-300 font-medium leading-relaxed text-lg">
              <p>
                Sou estudante de <strong className="text-purple-400">Engenharia de Software na FIAP</strong> e atuo como estagiário na área de dados, colocando a mão na massa todos os dias. Meu verdadeiro fascínio está no que acontece nos bastidores de uma aplicação.
              </p>
              <p>
                Embora eu também construa e valorize o Front-end, meu foco principal é garantir que a <strong className="text-zinc-100">arquitetura do back-end, a modelagem do banco de dados e os pipelines</strong> sejam escaláveis, seguros e performáticos. Gosto de resolver a complexidade direto na raiz.
              </p>
            </div>
          </motion.div>

          {/* Bloco 2: Sua Foto Oficial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="group relative col-span-1 min-h-[300px] overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/50 p-1 lg:col-span-1"
          >
            {/* Efeito de brilho roxo ao passar o mouse */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />
            
            {/* Div da Imagem carregando o seu arquivo */}
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] relative">
               <img 
                 src="/fotopessoalBento.jpeg" 
                 alt="Foto do Bento Rangel" 
                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
            </div>
          </motion.div>

          {/* Bloco 3: Especialidade Back-end */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="col-span-1 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-8 transition-colors hover:border-purple-500/30 hover:bg-zinc-900/40"
          >
            <Server className="mb-4 text-purple-400" size={28} />
            <h4 className="mb-2 text-xl font-bold text-zinc-100">Arquitetura Back-end</h4>
            <p className="text-sm text-zinc-400 font-medium">
              Desenvolvimento de APIs robustas, lógicas de negócios complexas e sistemas que aguentam o tranco, focando em segurança e alta disponibilidade.
            </p>
          </motion.div>

          {/* Bloco 4: Especialidade Dados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.3 }}
            className="col-span-1 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-8 transition-colors hover:border-purple-500/30 hover:bg-zinc-900/40 md:col-span-1 lg:col-span-2"
          >
            <Database className="mb-4 text-purple-400" size={28} />
            <h4 className="mb-2 text-xl font-bold text-zinc-100">Engenharia de Dados</h4>
            <p className="text-sm text-zinc-400 font-medium">
              Estruturação de bancos de dados relacionais e não-relacionais, pipelines de ETL e criação de inteligência para transformar números crus em decisões embasadas.
            </p>
          </motion.div>

        </div>

        {/* Botão para a Página Dedicada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.4 }}
          className="mt-12 flex justify-center md:justify-end"
        >
          <a 
            href="/sobre" 
            className="group flex items-center gap-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 font-semibold text-purple-300 transition-all hover:bg-purple-500 hover:text-white"
          >
            Ler minha história completa
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}