import React from 'react';
import { 
  ArrowRight, 
  FileSpreadsheet, 
  Upload, 
  CheckCircle2, 
  Clock, 
  Shield, 
  BarChart3, 
  DollarSign,
  Building2,
  Users,
  Briefcase,
  FileCheck,
  LockKeyhole,
  Send,
  Building,
  GraduationCap,
  HandCoins
} from 'lucide-react';

export function BulkPayment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Solution de Paiement de Masse
                <span className="text-[#F5A524] block mt-2">
                  Simple, Rapide et Sécurisée
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Optimisez vos paiements en masse avec Lengo Pay Bulk Payment. 
                La solution idéale pour la gestion des salaires, primes et paiements groupés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://portal.lengopay.com/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A524] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#E69516] hover:scale-105 transform transition-all duration-200"
                >
                  Commencer maintenant
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transform transition-all duration-200"
                >
                  Comment ça marche ?
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img 
                src="https://i.ibb.co/9sN1LrW/Capture-d-e-cran-2024-11-04-a-12-27-14.png"
                alt="Bulk Payment Illustration"
                className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir le Bulk Payment de Lengo Pay ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution complète pour simplifier vos paiements en masse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gain de Temps</h3>
              <p className="text-gray-600">
                Automatisez vos paiements en masse et réduisez considérablement le temps de traitement
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sécurité Maximale</h3>
              <p className="text-gray-600">
                Validation IP et protocoles de sécurité avancés pour des transactions sûres
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suivi en Temps Réel</h3>
              <p className="text-gray-600">
                Suivez vos transactions et générez des rapports détaillés instantanément
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-[#F5A524]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">0% Commission</h3>
              <p className="text-gray-600">
                Aucun frais de commission sur vos transactions en masse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple en 4 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#F5A524] rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                  <FileSpreadsheet className="w-6 h-6 text-[#F5A524]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inscription</h3>
                <p className="text-gray-600">
                  Créez votre compte et recevez vos identifiants de connexion sécurisés
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#F5A524] rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                  <Upload className="w-6 h-6 text-[#F5A524]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Import des Données</h3>
                <p className="text-gray-600">
                  Téléchargez votre fichier Excel avec la liste des bénéficiaires
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#F5A524] rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                  <LockKeyhole className="w-6 h-6 text-[#F5A524]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Validation IP</h3>
                <p className="text-gray-600">
                  Enregistrez votre adresse IP pour une sécurité renforcée
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#F5A524] rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 text-[#F5A524]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Envoi</h3>
                <p className="text-gray-600">
                  Effectuez vos paiements en masse en un seul clic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Qui Peut Utiliser Bulk Payment ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une solution adaptée à tous types d'organisations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Building2 className="w-12 h-12 text-[#F5A524] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Grandes Entreprises</h3>
              <p className="text-gray-400">
                Idéal pour le paiement des salaires et la gestion des primes pour un grand nombre d'employés
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Building className="w-12 h-12 text-[#F5A524] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">PME</h3>
              <p className="text-gray-400">
                Simplifiez vos opérations financières et automatisez vos paiements récurrents
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <GraduationCap className="w-12 h-12 text-[#F5A524] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Établissements Éducatifs</h3>
              <p className="text-gray-400">
                Gérez facilement les bourses et les paiements aux enseignants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5A524] to-orange-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prêt à Optimiser vos Paiements en Masse ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez les entreprises qui font confiance à Lengo Pay pour leurs paiements de masse
            </p>
            <a 
              href="https://portal.lengopay.com/register"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 hover:scale-105 transform transition-all duration-200"
            >
              Commencer maintenant
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}