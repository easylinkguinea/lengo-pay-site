import React, { useState } from 'react';
import { Smartphone, Wallet, CreditCard, Bitcoin } from 'lucide-react';
import { PaymentFeature } from './PaymentFeature';

export function PaymentSection() {
  const [activeTab, setActiveTab] = useState('innovation');

  const tabContent = {
    innovation: "Chez Lengo Pay, nous embrassons le défi continu d'innover. Nous sommes animés par la conviction que l'innovation est le moteur de la transformation dans le domaine des paiements numériques.",
    accessibilite: "Notre engagement envers l'accessibilité se traduit par des solutions de paiement inclusives, adaptées aux besoins de tous les utilisateurs en Afrique.",
    integrite: "L'intégrité est au cœur de notre mission. Nous garantissons des transactions sécurisées et transparentes pour tous nos utilisateurs."
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Title */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Façonnons ensemble
              <span className="text-[#F5A524] block mt-2">
                l'Avenir des Paiements
              </span>
            </h2>
            <div className="w-32 h-1 bg-[#F5A524] mt-8 mb-8"></div>
          </div>

          {/* Right side - Tabs */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 justify-end">
              <button
                onClick={() => setActiveTab('innovation')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === 'innovation'
                    ? 'bg-[#F5A524] text-white shadow-lg shadow-[#F5A524]/20 scale-105'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                Innovation
              </button>
              <button
                onClick={() => setActiveTab('accessibilite')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === 'accessibilite'
                    ? 'bg-[#F5A524] text-white shadow-lg shadow-[#F5A524]/20 scale-105'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                Accessibilité
              </button>
              <button
                onClick={() => setActiveTab('integrite')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === 'integrite'
                    ? 'bg-[#F5A524] text-white shadow-lg shadow-[#F5A524]/20 scale-105'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                Intégrité
              </button>
            </div>
            <div className="text-right">
              <p className="text-lg text-white/80 leading-relaxed">
                {tabContent[activeTab]}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group hover:scale-105 transform transition-all duration-300">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A524]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Smartphone className="w-12 h-12 text-[#F5A524] mb-6" />
              <h3 className="text-4xl font-bold text-white mb-3">2 +</h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                Méthodes de paiement Mobile
              </p>
            </div>
          </div>

          <div className="group hover:scale-105 transform transition-all duration-300">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A524]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Wallet className="w-12 h-12 text-[#F5A524] mb-6" />
              <h3 className="text-4xl font-bold text-white mb-3">+ 2</h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                Digital Wallet
              </p>
            </div>
          </div>

          <div className="group hover:scale-105 transform transition-all duration-300">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A524]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <CreditCard className="w-12 h-12 text-[#F5A524] mb-6" />
              <h3 className="text-4xl font-bold text-white mb-3">2</h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                Cartes Bancaires
              </p>
            </div>
          </div>

          <div className="group hover:scale-105 transform transition-all duration-300">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A524]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Bitcoin className="w-12 h-12 text-[#F5A524] mb-6" />
              <h3 className="text-4xl font-bold text-white mb-3">5 +</h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                Cryptomonnaies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}