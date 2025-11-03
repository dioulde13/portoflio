// "use client";
// import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function ThemeSwitcher() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
//       aria-label="Changer le thème"
//     >
//       {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//     </button>
//   );
// }


// "use client";

// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

// export default function ThemeSwitcher() {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
//     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//     const initialTheme = savedTheme || systemTheme;
    
//     setTheme(initialTheme);
//     document.documentElement.classList.toggle("dark", initialTheme === "dark");
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={toggleTheme}
//       className="h-8 w-8"
//     >
//       {theme === "light" ? (
//         <Moon className="h-4 w-4" />
//       ) : (
//         <Sun className="h-4 w-4" />
//       )}
//       <span className="sr-only">Changer le thème</span>
//     </Button>
//   );
// }