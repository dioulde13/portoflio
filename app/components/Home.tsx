"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="w-11/12 md:w-3/4 text-center py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-primary"
      >
        Développeur Web & Mobile • Ingénieur Logiciel
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Titulaire d’une licence professionnelle en Génie Informatique / Génie Logiciel.
        Je conçois des applications web et mobiles performantes avec React, Next.js, Node.js, Angular et Flutter.
      </motion.p>

      <motion.a
        href="/projects"
        whileHover={{ scale: 1.03 }}
        className="inline-block mt-8 px-6 py-3 rounded-lg bg-primary text-white"
      >
        Voir mes projets
      </motion.a>
    </section>
  );
}
