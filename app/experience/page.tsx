export default function Experience() {
  const experiences = [
    {
      company: "E-CASH - Guinée",
      period: "Octobre 2024 – maintenant",
      role: "Développeur FullStack (Node.js & Angular)",
      bullets: [
        "Utilisation de Node.js pour créer des applications serveur rapides et efficaces.",
        "Conception et développement des API RESTful.",
        "Développement d’applications web interactives avec Angular.",
      ],
    },
    {
      company: "E-CASH - Guinée",
      period: "Novembre 2023 – Septembre 2024",
      role: "Développeur Mobile (Flutter)",
      bullets: [
        "Création d’applications mobiles avec Dart & Flutter.",
        "Construction d'interfaces réactives et gestion des appels API.",
      ],
    },
    {
      company: "KIMBELI S.A.R.L.",
      period: "Mai 2021 – Octobre 2023",
      role: "Développeur ReactJS & React Native",
      bullets: [
        "Conception d’interfaces en React.js et React Native.",
        "Collaboration avec les designers et utilisation de Git en équipe.",
      ],
    },
    {
      company: "KIMBELI S.A.R.L.",
      period: "Novembre 2020 – Avril 2021",
      role: "Développeur React.js",
      bullets: [
        "Création de pages responsives avec React et Material-UI.",
        "Intégration d’API REST pour améliorer l’expérience utilisateur.",
      ],
    },
  ];

  return (
    <section id="experience" className="container mx-auto px-4 md:px-6 mb-5">
      <h3 className="text-2xl font-semibold text-primary mb-4">Expérience</h3>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-card p-5 rounded-2xl shadow">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-bold">{exp.company}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.role}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>

            <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
