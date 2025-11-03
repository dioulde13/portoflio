export default function Skills() {
  const skills = {
    Langages: ["HTML", "CSS", "JavaScript", "Dart"],
    Frameworks: ["React.js", "Angular", "Flutter", "Node.js"],
    Libraries: ["Tailwind CSS", "Material-UI", "Bootstrap"],
    DB: ["PostgreSQL", "MySQL", "MSSQL"],
    Outils: ["Git", "VSCode", "Android Studio"],
  };

  return (
    <section id="skills" className="container mx-auto px-4 md:px-6">
      <h3 className="text-2xl font-semibold text-primary mb-4">Compétences techniques</h3>

      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([title, list]) => (
          <div key={title} className="bg-card p-4 rounded-xl shadow">
            <h4 className="font-semibold text-primary">{title}</h4>
            <ul className="mt-2 text-gray-700 dark:text-gray-300">
              {(list as string[]).map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
