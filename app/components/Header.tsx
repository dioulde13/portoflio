"use client";

import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navigationItems = [
  { href: "/projects", label: "Projets" },
  { href: "/experience", label: "Expérience" },
  { href: "/competences", label: "Compétences" },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Changer le thème"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 mb-5">
        {/* --- Partie gauche avec la photo --- */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/dioulde.jpg"
            alt="Photo de Mamadou Diouldé Baldé"
            width={50}
            height={40}
            className="rounded-full border-2  object-cover"
          />
          <div>
            <h1 className="text-lg font-bold text-primary">
              Mamadou Diouldé Baldé
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              Ingénieur Logiciel • Développeur Full Stack
            </p>
          </div>
        </div>

        {/* --- Navigation desktop --- */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>

        {/* --- Navigation mobile --- */}
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

      {/* --- Sidebar mobile --- */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={handleNavClick}
          />
          <div className="fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-out md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-lg font-semibold text-primary">
                    Mamadou Diouldé Baldé
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Ingénieur Logiciel • Développeur Full Stack
                  </p>
                </div>
                <button
                  onClick={handleNavClick}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-col p-6 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="text-base hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
