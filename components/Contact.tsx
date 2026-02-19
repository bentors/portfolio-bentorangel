"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contato" className="relative py-20 sm:py-32">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-10 md:pb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-3 md:mb-4">
              <div className="h-[1px] w-12 bg-purple-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Conexão</span>
            </div>
            <h2 className="text-4xl font-black text-white sm:text-7xl tracking-tighter">
              Vamos <br className="hidden md:block" /> conversar<span className="text-purple-500">.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-medium text-base md:text-lg">
            Seja para discutir uma oportunidade de negócio, uma vaga na sua equipe ou apenas para trocar ideias sobre código e arquitetura.
          </p>
        </motion.div>

        {/* ALINHAMENTO (lg:grid-cols-2) */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                
          {/* LADO ESQUERDO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-3">
                <MessageSquare className="text-purple-400" size={24} />
                Me mande um "Olá!"
              </h3>
              <p className="text-zinc-400 font-medium leading-relaxed max-w-md text-sm md:text-base">
                Estou disponível para novos projetos e parcerias. Vamos transformar suas ideias em realidade técnica?
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <a 
                href="mailto:bento.rangel05@gmail.com" 
                className="group flex items-center gap-4 md:gap-5 rounded-2xl md:rounded-3xl border border-zinc-800 bg-[#0a0a0a] p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-purple-400 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 mb-0.5 md:mb-1">E-mail</p>
                  <p className="text-sm md:text-lg font-bold text-zinc-200 truncate transition-colors group-hover:text-purple-400">
                    bento.rangel05@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="https://linkedin.com/in/bento-rangel-1854432a6" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex flex-1 items-center justify-center gap-2 md:gap-3 rounded-2xl md:rounded-3xl border border-zinc-800 bg-[#0a0a0a] p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2]/50 hover:shadow-xl text-zinc-400 font-bold text-sm md:text-base"
                >
                  <Linkedin size={20} className="md:w-6 md:h-6 transition-colors group-hover:text-[#0A66C2]" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/bentors" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex flex-1 items-center justify-center gap-2 md:gap-3 rounded-2xl md:rounded-3xl border border-zinc-800 bg-[#0a0a0a] p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-xl text-zinc-400 font-bold text-sm md:text-base"
                >
                  <Github size={20} className="md:w-6 md:h-6 transition-colors group-hover:text-white" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO: FORMULÁRIO OTIMIZADO PARA MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2 md:gap-3">
                  <label htmlFor="name" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Nome</label>
                  {/* Paddings e arredondamentos dinâmicos */}
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full rounded-xl md:rounded-2xl border border-zinc-800 bg-[#0a0a0a] px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-zinc-200 outline-none transition-all placeholder:text-zinc-700 focus:border-purple-500 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-500"
                    placeholder="Como devo te chamar?"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <label htmlFor="email" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full rounded-xl md:rounded-2xl border border-zinc-800 bg-[#0a0a0a] px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-zinc-200 outline-none transition-all placeholder:text-zinc-700 focus:border-purple-500 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-3">
                <label htmlFor="message" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Sua mensagem</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  placeholder="Olá Bento, gostaria de falar sobre..."
                  className="w-full resize-none rounded-xl md:rounded-2xl border border-zinc-800 bg-[#0a0a0a] px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-zinc-200 placeholder:text-zinc-700 outline-none transition-all focus:border-purple-500 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="group mt-2 flex w-full md:w-auto md:self-end items-center justify-center gap-2 md:gap-3 rounded-full bg-purple-600 px-8 py-3.5 md:px-10 md:py-5 text-sm md:text-base font-bold text-white transition-all hover:bg-purple-500 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Enviando...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={18} className="md:w-5 md:h-5" />
                    Enviada!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar mensagem
                    <Send size={16} className="md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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