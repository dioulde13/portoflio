import Home from "./components/Home";
import Projects from "./projects/page";
import Experience from "./experience/page";
import Competences from "./competences/page";
import Contact from "./contact/page";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen transition-colors duration-500">
        <section id="home" className="w-full">
          <Home />
        </section>

        <section id="projects" className="w-full">
          <Projects />
        </section>

        <section id="experience" className="w-full">
          <Experience />
        </section>

        <section id="skills" className="w-full">
          <Competences />
        </section>

        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    </>
  );
}
