"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navigationItems = [
  { id: "home", label: "Accueil" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Expérience" },
  { id: "skills", label: "Compétences" },
  { id: "contact", label: "Contact" },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Changer le thème"
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    // Fermer le menu mobile si ouvert
    setIsOpen(false);

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    // Remplacer l’URL sans hash
    window.history.replaceState(null, "", window.location.pathname);
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 mb-5">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <h3 className="text-xl font-bold">
              Portfolio
            </h3>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="nav-link bg-transparent border-none p-0 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <ThemeSwitcher />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-out md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">Portfolio</h3>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-col p-6 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-base hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20 text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
