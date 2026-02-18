"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulação de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula um delay de API de 1.5s
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reseta o botão de sucesso após 3 segundos
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contato" className="relative bg-[#050505] py-24 sm:py-32 overflow-hidden">
      
      {/* Luz de fundo decorativa */}
      <div className="absolute top-1/2 right-0 h-[30rem] w-[30rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Vamos <span className="text-purple-500">conversar?</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            Seja para discutir uma oportunidade de negócio, uma vaga na sua equipe ou apenas para trocar ideias sobre código e arquitetura, minha caixa de entrada está sempre aberta.
          </p>
        </motion.div>

        {/* 12 colunas: 5 para info e 7 para o formulário */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
                
        {/* COLUNA ESQUERDA: Informações e Redes (Ocupa 5 de 12 colunas) */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:col-span-5"
        >
            <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
                <MessageSquare className="text-purple-400" />
                Me mande um "Olá!"
            </h3>
            <p className="text-zinc-400 font-medium leading-relaxed max-w-md">
                Estou disponível para novos projetos e parcerias. Vamos transformar suas ideias em realidade técnica?
            </p>
            </div>

            {/* Cards de Contato Direto */}
            <div className="flex flex-col gap-4">
            <a 
                href="mailto:bento.rangel05@gmail.com" 
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-5 transition-all hover:border-purple-500/30 hover:bg-zinc-900/40"
            >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                <p className="text-sm font-semibold text-zinc-500">E-mail</p>
                <p className="text-base font-bold text-zinc-300 truncate transition-colors group-hover:text-purple-400">
                    bento.rangel05@gmail.com
                </p>
                </div>
            </a>

            {/* Botões empilhados em telas menores e lado a lado em telas maiores */}
            <div className="flex flex-col sm:flex-row gap-4">
                <a 
                href="https://linkedin.com/in/bento-rangel-1854432a6" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-1 items-center justify-center gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-5 transition-all hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] text-zinc-400 font-semibold"
                >
                <Linkedin size={22} />
                LinkedIn
                </a>
                <a 
                href="https://github.com/bentors" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-1 items-center justify-center gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-5 transition-all hover:border-white/50 hover:bg-white/10 hover:text-white text-zinc-400 font-semibold"
                >
                <Github size={22} />
                GitHub
                </a>
            </div>
            </div>
        </motion.div>

        {/* COLUNA DIREITA: Formulário (Ocupa 7 de 12 colunas) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-zinc-800/50 bg-zinc-900/30 p-8 shadow-xl backdrop-blur-sm">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-zinc-400 ml-1">Nome</label>
                <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-3 text-zinc-300 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-zinc-400 ml-1">E-mail</label>
                <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-3 text-zinc-300 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-zinc-400 ml-1">Sua mensagem</label>
                <textarea 
                id="message"
                required
                rows={5}
                placeholder="Olá Bento, gostaria de falar sobre..."
                className="w-full resize-none rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-3 text-zinc-300 placeholder:text-zinc-700 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-4 font-bold text-white transition-all hover:bg-purple-500 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Enviando...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 size={20} />
                    Mensagem Enviada!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar mensagem
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                )}
              </button>
            </form>
        </motion.div>
        </div>
      </div>
    </section>
  );
}