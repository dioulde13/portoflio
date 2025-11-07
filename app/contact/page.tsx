"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-11/12 md:w-[97%] mx-auto py-2 bg-card p-4 mt-4 rounded-xl shadow">
      <div className="flex justify-center">
       
        {/* ---- SECTION GAUCHE ---- */}
        <div >
         <h2 className="text-4xl font-bold text-blue-600 mb-3">Contactez-moi</h2>
        {/* <p className="text-gray-600 mb-10">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
          discuter !
        </p> */}
          <h3 className="font-semibold mb-4">Restons en contact</h3>
          <p className="text-gray-600 mb-8">
            Je suis toujours ouvert aux nouvelles opportunités et
            collaborations. Que ce soit pour un projet freelance, un poste
            permanent ou simplement pour échanger sur le développement web et mobile,
            n'hésitez pas à me contacter.
          </p>

          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-2xl text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-gray-600">baldedioulde992@gmail.com</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-2xl text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Téléphone</p>
                <p className="text-gray-600">+224 620-50-31-10 / 662-60-91-80</p>
              </div>
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-2xl text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Localisation</p>
                <p className="text-gray-600">Guinée, Conakry</p>
              </div>
            </div>

            {/* Card disponibilité */}
            <div className="p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-800">
                  Disponible pour de nouveaux projets
                </h4>
              </div>
              <p className="text-green-700 text-sm">
                Je suis actuellement disponible pour des missions freelance et
                des opportunités à temps plein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
