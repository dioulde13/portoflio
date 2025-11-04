// import About from "./about/page";
import Home from "./components/Home";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Skills from "./competences/page";
import Contact from "./contact/page";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen transition-colors duration-500">
      <Home />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
