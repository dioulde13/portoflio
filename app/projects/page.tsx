"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GGLOTTO (Back Office de Guinée Games)",
    tech: "Angular, Node.js, MSSQL",
    description:
      "Plateforme fournissant des statistiques sur les SMS par opérateur, tableau de bord par mois/jour, gestion des résultats et utilisateurs.",
    link: "https://gg-backoffice.ecash-guinee.com",
  },
  {
    title: "Livraison de colis",
    tech: "Flutter, MSSQL",
    description:
      "Application mobile pour l’enregistrement des colis, historique, favoris, paiements via Orange Money/Mobile Money et gestion de livraison.",
    // link: "#",
  },
  {
    title: "Gnfex (Conversion de devises)",
    tech: "HTML, CSS, ReactJS, PostgreSQL",
    description:
      "Plateforme de gestion des taux de change en Guinée pour convertir devises (USD, CFA → GNF) en temps réel.",
    // link: "#",
  },
  {
    title: "Cliqneat (Commande de nourriture)",
    tech: "HTML, CSS, ReactJS, PostgreSQL",
    description:
      "Plateforme de commande pour clients et restaurants, intégration QR code pour commandes simplifiées.",
    // link: "#",
  },
  {
    title: "Plaguifor (Plateforme de formation)",
    tech: "HTML, CSS, ReactJS, PostgreSQL",
    description:
      "Plateforme guinéenne de formation pour élèves et enseignants, gestion d’assignation des enseignants.",
    // link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 mb-5">
      <h3 className="text-2xl font-semibold text-primary mb-6">Projets réalisés</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-card p-5 rounded-2xl shadow"
          >
            <h4 className="text-lg font-bold text-primary">{p.title}</h4>
            <p className="text-sm text-gray-500">{p.tech}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{p.description}</p>
            {p.link && (
              <a href={p.link} className="mt-3 inline-block text-primary hover:underline">
                Voir le projet
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
