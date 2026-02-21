"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {

  {/* Array de Contatos */}
  const contacts = [
    {
      name: "E-mail",
      href: "mailto:bento.rangel05@gmail.com",
      icon: <Mail size={32} />,
      hoverBorderBg: "hover:border-purple-500/50 hover:bg-purple-500/5",
      hoverText: "group-hover:text-purple-400",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5511999942500",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      ),
      hoverBorderBg: "hover:border-[#25D366]/50 hover:bg-[#25D366]/5",
      hoverText: "group-hover:text-[#25D366]",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/bento-rangel-1854432a6",
      icon: <Linkedin size={32} />,
      hoverBorderBg: "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5",
      hoverText: "group-hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      href: "https://github.com/bentors",
      icon: <Github size={32} />,
      hoverBorderBg: "hover:border-white/50 hover:bg-white/5",
      hoverText: "group-hover:text-white",
    },
  ];

  return (
    <section id="contato" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-6 border-b border-zinc-800 pb-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-[1px] w-12 bg-purple-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Próximos Passos</span>
            </div>
            <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter mb-4">
              Vamos conversar<span className="text-purple-500">.</span>
            </h2>
            <p className="max-w-2xl text-zinc-400 font-medium text-base md:text-lg">
              Estou sempre aberto a discutir arquitetura de software, oportunidades de liderança técnica ou novos projetos. Respondo mais rápido do que meu código compila.
            </p>
          </div>
        </motion.div>

        {/* GRID DOS 4 BOTÕES LADO A LADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-zinc-800 bg-[#0a0a0a] py-10 px-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${contact.hoverBorderBg}`}
            >
              <div className={`text-zinc-500 transition-colors duration-300 ${contact.hoverText}`}>
                {contact.icon}
              </div>
              <span className={`text-sm font-bold uppercase tracking-widest text-zinc-400 transition-colors duration-300 ${contact.hoverText}`}>
                {contact.name}
              </span>
            </a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}