import React from 'react';
import { Shield, AlertCircle, Lock } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Politique de
              <span className="text-[#F5A524] block mt-2">
                Confidentialité
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Lock className="w-5 h-5" />
              <span>Dernière mise à jour : Mars 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                La présente politique de confidentialité explique comment EASY LINK GUINEA, opérateur de la solution Lengo Pay, collecte, utilise, conserve et protège vos données personnelles conformément aux dispositions légales en vigueur en République de Guinée.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-800">
                    Nous nous engageons à respecter la confidentialité de vos informations et à garantir leur protection.
                  </p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {/* 1. Responsable du Traitement */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du Traitement</h2>
                  <p className="text-gray-600 mb-4">
                    Le responsable du traitement des données personnelles collectées via Lengo Pay est le Directeur Général de EASY LINK GUINEA.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Email : conformite@easylinkgn.com</li>
                      <li>Téléphone : +224 626 303 913</li>
                    </ul>
                  </div>
                </section>

                {/* 2. Données Personnelles Collectées */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données Personnelles Collectées</h2>
                  <p className="text-gray-600 mb-4">Les données personnelles que nous collectons peuvent inclure :</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Informations d'identification</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Nom, prénom</li>
                        <li>Raison sociale</li>
                        <li>Nom de l'entreprise</li>
                        <li>Nom du gérant</li>
                        <li>Secteur d'activité</li>
                        <li>Numéro de téléphone, e-mail</li>
                        <li>RCCM, IFU</li>
                        <li>Pièce d'identité</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Données transactionnelles</h3>
                      <p className="text-gray-600">
                        Informations relatives aux paiements effectués et reçus via Lengo Pay.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. Finalités du Traitement */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du Traitement</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Gérer et traiter les paiements en ligne pour les marchands</li>
                    <li>Configurer et gérer les reversements de fonds aux marchands</li>
                    <li>Fournir des services de support technique et des mises à jour</li>
                    <li>Enquêter sur les cas de fraude</li>
                    <li>Envoyer des communications relatives à nos services</li>
                  </ul>
                </section>

                {/* 4. Destinataires des Données */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Destinataires des Données</h2>
                  <p className="text-gray-600 mb-4">
                    Les données personnelles sont partagées avec les services internes de EASY LINK GUINEA :
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Direction Commerciale : pour vérifier les informations des marchands</li>
                    <li>Direction Technique et Financière : pour surveiller et analyser les transactions</li>
                  </ul>
                </section>

                {/* 5. Transfert de Données */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Transfert de Données</h2>
                  <p className="text-gray-600 mb-4">
                    Les données personnelles peuvent être transférées et stockées à l'international :
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Cloud NY3 : Etats unis (New York)</li>
                    <li>Digital Ocean : États unis</li>
                  </ul>
                </section>

                {/* 6. Durée de Conservation */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de Conservation</h2>
                  <p className="text-gray-600">
                    Les données personnelles sont conservées aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées ou pour respecter les exigences légales.
                  </p>
                </section>

                {/* 7. Vos Droits */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos Droits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Droit à l'information", desc: "Être informé du traitement de vos données" },
                      { title: "Droit d'accès", desc: "Accéder à vos données personnelles" },
                      { title: "Droit de rectification", desc: "Corriger les données inexactes" },
                      { title: "Droit d'effacement", desc: "Demander la suppression de vos données" },
                      { title: "Droit à la limitation", desc: "Limiter le traitement de vos données" },
                      { title: "Droit à la portabilité", desc: "Recevoir vos données dans un format lisible" },
                      { title: "Droit d'opposition", desc: "S'opposer au traitement des données" },
                      { title: "Droit à la réparation", desc: "Demander réparation si traitement illégal" }
                    ].map((right, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-2">{right.title}</h3>
                        <p className="text-gray-600 text-sm">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 8. Sécurité des Données */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des Données</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      Nous prenons toutes les mesures nécessaires pour garantir la sécurité et la confidentialité de vos données personnelles, y compris la mise en place de protocoles de sécurité informatique pour prévenir tout accès non autorisé, altération ou divulgation.
                    </p>
                  </div>
                </section>

                {/* 9. Plaintes */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Plaintes</h2>
                  <p className="text-gray-600">
                    Si vous estimez que vos droits n'ont pas été respectés, vous avez le droit de déposer une plainte auprès de l'autorité compétente en matière de protection des données en République de Guinée.
                  </p>
                </section>

                {/* 10. Modifications */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications de la Politique de Confidentialité</h2>
                  <p className="text-gray-600">
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera communiquée via nos canaux habituels (email ou site web).
                  </p>
                </section>

                {/* Contact Section */}
                <section>
                  <div className="bg-gray-900 text-white p-8 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                    <p className="text-gray-300 mb-6">
                      Pour toute question supplémentaire concernant la gestion de vos données personnelles :
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>Email : conformite@lengopay.com</li>
                      <li>Téléphone : +224 626303913</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}