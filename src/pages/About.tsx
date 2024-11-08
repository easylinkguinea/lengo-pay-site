import React from 'react';
import { Check } from 'lucide-react';
import { TeamSection } from '../components/TeamSection';

const timeline = [
  {
    quarter: 'Q4',
    year: 2012,
    title: 'Création de EASY LINK GUINEA',
    description: 'Création de la société EASY LINK GUINEA, propriétaire de la solution Lengo Pay.'
  },
  {
    quarter: 'Q3',
    year: 2023,
    title: 'Début du développement',
    description: 'Lancement du développement de la solution Lengo Pay.'
  },
  {
    quarter: 'Q4',
    year: 2023,
    title: 'Solution Lengo Pay',
    description: 'Finalisation de la première version de Lengo Pay.'
  },
  {
    quarter: 'Q1',
    year: 2024,
    title: 'Partenariats Majeurs',
    description: 'Partenariats avec Orange Money, MTN Money, Paycard et Ecobank.'
  },
  {
    quarter: 'Q2',
    year: 2024,
    title: 'Expansion Régionale',
    description: 'Début de l\'expansion dans la région.'
  },
  {
    quarter: 'Q3',
    year: 2024,
    title: 'Certification BCRG',
    description: 'Obtention de l\'avis de non objection de la BCRG.'
  },
  {
    quarter: 'Q4',
    year: 2024,
    title: 'Lancement Officiel',
    description: 'Début des activités le 30 Novembre 2024.'
  }
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Notre Mission est de Révolutionner
                <span className="text-[#F5A524] block mt-2">
                  les Paiements en Afrique
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Chez Lengo Pay, nous construisons l'avenir des paiements numériques en Afrique,
                en rendant les transactions plus accessibles, plus sûres et plus efficaces pour tous.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <img 
                src="https://i.ibb.co/x3T579G/4568863.png"
                alt="Africa Illustration"
                className="w-[362px] h-[370px] object-contain animate-float"
                style={{ maxWidth: '362px', maxHeight: '370px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours d'innovation et de croissance
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-[#F5A524] to-black top-[50%] transform -translate-y-1/2"></div>

            {/* Timeline Events */}
            <div className="relative flex gap-8 overflow-x-auto pb-24 pt-48 px-4 snap-x snap-mandatory hide-scrollbar">
              {timeline.map((event, index) => (
                <div 
                  key={index}
                  className="flex-none w-80 snap-center"
                >
                  <div 
                    className={`relative ${
                      index % 2 === 0 
                        ? 'translate-y-[-200px]' 
                        : 'translate-y-8'
                    }`}
                  >
                    {/* Content */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                      {/* African Pattern Background */}
                      <div 
                        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-black font-bold">{event.quarter}</span>
                          <span className="text-black font-bold">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>

                    {/* Center Point */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[-12px]">
                      <div className="w-8 h-8 bg-[#F5A524] rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous repoussons constamment les limites pour créer des solutions de paiement 
                plus intelligentes et plus efficaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrité</h3>
              <p className="text-gray-600">
                La confiance est au cœur de notre activité. Nous maintenons les plus hauts 
                standards d'éthique et de transparence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600">
                Nous nous engageons à créer un impact positif sur l'inclusion financière 
                en Afrique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}