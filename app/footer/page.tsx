"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 mt-12">
      <div className="w-11/12 md:w-3/4 mx-auto text-center">
        {/* Titre */}
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>

        {/* Email */}
        <p className="flex justify-center items-center gap-2 text-gray-100">
          <FaEnvelope className="text-yellow-300" />
          <a
            href="mailto:baldedioulde992@gmail.com"
            className="underline hover:text-yellow-300 transition-colors"
          >
            baldedioulde992@gmail.com
          </a>
        </p>

        {/* Téléphone */}
        <p className="mt-2 flex justify-center items-center gap-2 text-gray-100">
          <FaPhone className="text-yellow-300" />
          +224 620-50-31-10 / 662-60-91-80
        </p>

        {/* Liens sociaux */}
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mamadou-diould%C3%A9-bald%C3%A9-031530290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mt-8 pt-4">
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Mamadou Diouldé Baldé</span> —
            Ingénieur Logiciel
          </p>
        </div>
      </div>
    </footer>
  );
}
