"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-11/12 md:w-4/5 lg:w-[97%] mx-auto text-center py-4 mb-4 flex flex-col items-center bg-gray-600 text-white">
      <div className="mb-6 overflow-hidden rounded-t-full rounded-b-2xl w-48 h-64 shadow-xl border-4 border-gray-800">
        <Image
          src="/images/dioulde.jpg"
          alt="Photo de Mamadou Diouldé Baldé"
          width={192}
          height={256}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nom */}
      <h3 className="text-xl font-semibold mt-2">Mamadou Diouldé Baldé</h3>

      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-primary mt-2"
      >
        Développeur Web & Mobile
      </motion.h2>

      {/* Sous-titre */}
      <p className="text-lg text-white-300">Ingénieur Logiciel</p>

      {/* Paragraphe de description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-base text-white-300 max-w-2xl mx-auto"
      >
         Titulaire d’une licence professionnelle en Génie Informatique/Génie Logiciel de l’Université Nongo Conakry. Développeur Web et mobile hautement qualifié, je cumule plus de 4 ans d’expérience dans les technologies telles que HTML, CSS, Tailwind et JavaScript. Ma maîtrise de frameworks comme Angular, Flutter et Node.js, ainsi que de la bibliothèque React.js, me permet de concevoir et d’optimiser des solutions logicielles performantes et ergonomiques.
      </motion.p>

      {/* Bouton vers projets */}
      <motion.a
        href="/projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block mt-8 px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:shadow-lg transition"
      >
        Voir mes projets
      </motion.a>
    </section>
  );
}
