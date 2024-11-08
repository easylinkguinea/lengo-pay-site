import React from 'react';
import { ArrowRight, Store, Shield, CreditCard, Smartphone, BarChart3, Clock, HeadphonesIcon } from 'lucide-react';

export function Tpe() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                TPE Lengo Pay
                <span className="text-[#F5A524] block mt-2">
                  La Solution de Paiement Moderne
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Acceptez tous types de paiements avec notre Terminal de Paiement Électronique nouvelle génération.
                Une solution complète, sécurisée et adaptée à tous les commerces.
              </p>
              <a 
                href="https://portal.lengopay.com/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A524] text-white rounded-lg font-medium hover:bg-[#E69516] hover:scale-105 transform transition-all duration-200"
              >
                Demander un TPE
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="relative flex justify-center">
              <img 
                src="https://i.ibb.co/yRsTNBL/P2LITESE.png"
                alt="TPE Lengo Pay"
                className="w-[362px] h-[370px] object-contain rounded-2xl"
                style={{ maxWidth: '362px', maxHeight: '370px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir le TPE Lengo Pay ?
            </h2>
            <p className="text-xl text-gray-600">
              Une solution complète pour moderniser votre point de vente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multimodes de Paiement</h3>
              <p className="text-gray-600">
                Acceptez les paiements par cartes bancaires (Visa, Mastercard) et mobile money 
                (Orange Money, MTN) en toute simplicité.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sécurité Maximale</h3>
              <p className="text-gray-600">
                Bénéficiez de protocoles de sécurité avancés et d'une validation par adresse IP 
                pour des transactions sûres.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <Store className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tarification Simple</h3>
              <p className="text-gray-600">
                Location à 80 000 GNF/mois avec seulement 2,9% de frais par transaction. 
                Une offre transparente et compétitive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion Simplifiée</h3>
              <p className="text-gray-600">
                Suivez vos ventes en temps réel et accédez à des rapports détaillés via votre 
                tableau de bord Lengo Pay.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installation Rapide</h3>
              <p className="text-gray-600">
                Configuration et installation prises en charge par notre équipe technique. 
                Soyez opérationnel en quelques minutes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <HeadphonesIcon className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Dédié</h3>
              <p className="text-gray-600">
                Bénéficiez d'un support client disponible pour vous accompagner et répondre 
                à toutes vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à Moderniser Votre Point de Vente ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez les nombreux commerces qui font confiance à Lengo Pay pour leurs paiements électroniques.
          </p>
          <a 
            href="https://portal.lengopay.com/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5A524] text-white rounded-lg font-medium hover:bg-[#E69516] hover:scale-105 transform transition-all duration-200"
          >
            Contactez-nous
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}