"use client";

import { motion, Variants } from "framer-motion";

const letter: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: 0, transition: { duration: 0.7, delay: i * 0.035, ease: [0.16, 1, 0.3, 1] } }),
};

// Título que se monta letra a letra ao entrar na tela.
// O gatilho fica no título inteiro: cada letra começa recortada e nunca "entraria em vista" sozinha.
export default function RevealText({ text }: { text: string }) {
  const words = text.split(" ");
  let i = 0;
  return (
    <motion.span initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
      <span className="sr-only">{text}</span>
      {words.map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {[...word].map((ch) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span className="inline-block" variants={letter} custom={i++}>
                {ch}
              </motion.span>
            </span>
          ))}
          {w < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
