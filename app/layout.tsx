// import "./globals.css";
// import type { Metadata } from "next";
// import { ThemeProvider } from "next-themes";

// export const metadata: Metadata = {
//   title: "Portfolio - Mamadou Diouldé Baldé",
//   description: "Portfolio personnel - Développeur Full Stack (Next.js, Node.js)",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="fr" suppressHydrationWarning>
//       <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer"; // si tu as un footer

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

