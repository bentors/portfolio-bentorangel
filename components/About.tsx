"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="flex min-h-screen items-center justify-center border-t border-zinc-800 py-24">
      <div className="mx-auto w-full max-w-4xl px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-black text-zinc-100 sm:text-4xl">
            Muito além do <span className="text-purple-500">código.</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Coluna da Trajetória Profissional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-zinc-400"
          >
            <p>
              Minha jornada na tecnologia começou movida pela curiosidade, dando os primeiros passos com <strong className="text-zinc-200">Python</strong>. Hoje, atuo profissionalmente na área de Dados, trabalhando diariamente com BI e automações.
            </p>
            <p>
              Atualmente, estou no 5º semestre de <strong className="text-zinc-200">Engenharia de Software na FIAP</strong>. Embora meu dia a dia seja guiado por dados, tenho um fascínio enorme por arquitetura Back-end e estou adorando me aventurar no Front-end. 
            </p>
            <p>
              Construir interfaces (como este portfólio) é algo que acho extremamente divertido e útil para consolidar meus conhecimentos e ter uma visão completa da engenharia de software.
            </p>
          </motion.div>

          {/* Coluna do Lado Humano */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8"
          >
            <h3 className="text-xl font-bold text-zinc-100">Fora das telas 🎸</h3>
            <p className="text-zinc-400">
              A arte assume o controle. Sou músico apaixonado por instrumentos de corda (violão, guitarra, ukulele, cavaco) e um grande consumidor de cinema, museus e shows.
            </p>
            <p className="text-zinc-400">
              Para manter o equilíbrio, você me encontra no tatame do <strong className="text-purple-400">Jiu-jitsu</strong>, na musculação ou vivendo minha paixão pelo futebol — seja assistindo, indo ao estádio ou jogando casualmente.
            </p>
            <p className="text-zinc-400">
              E claro, sou um bom apreciador da culinária, sempre explorando novos lugares para comer bem com a minha namorada e família.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}