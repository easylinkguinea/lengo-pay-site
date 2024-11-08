import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conditions Générales
              <span className="text-[#F5A524] block mt-2">
                d'Utilisation
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Shield className="w-5 h-5" />
              <span>Dernière mise à jour : Mars 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Les présentes Conditions Générales d'Utilisation (les « Conditions ») régissent l'accès et l'utilisation de Lengo Pay, une solution de paiement en ligne développée par EASY LINK GUINEA, immatriculée sous le numéro RCCM / GN.TCC.2022.B.13396 et dont le siège social est situé à Taouyah, commune de Ratoma, République de Guinée.
              </p>

              <div className="bg-yellow-50 border-l-4 border-[#F5A524] p-6 rounded-r-lg mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#F5A524] flex-shrink-0 mt-1" />
                  <p className="text-gray-800">
                    En accédant ou en utilisant Lengo Pay, vous acceptez les dispositions suivantes. Si vous n'êtes pas d'accord avec l'une de ces Conditions, vous devez cesser immédiatement d'utiliser ce service.
                  </p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {/* 1. Nos Services */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Nos Services</h2>
                  <p className="text-gray-600 mb-4">
                    Lengo Pay permet aux utilisateurs d'effectuer et de recevoir des paiements sécurisés à travers plusieurs méthodes de paiement, notamment les cartes bancaires, le mobile money, ainsi que d'autres solutions de paiement locales et internationales.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>La gestion des transactions</li>
                    <li>La génération de factures électroniques</li>
                    <li>L'intégration de solutions de paiement via API et plugins pour les plateformes e-commerce</li>
                    <li>La gestion des flux financiers pour entreprises et commerçants</li>
                  </ul>
                </section>

                {/* 2. Droits de Propriété Intellectuelle */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Droits de Propriété Intellectuelle</h2>
                  <p className="text-gray-600">
                    Tous les droits de propriété intellectuelle liés à Lengo Pay, incluant logiciels, contenus, marques déposées, logos et designs, appartiennent à EASY LINK GUINEA ou à ses concédants de licence. Ces droits sont protégés par les lois applicables en matière de propriété intellectuelle. Aucune disposition des présentes ne vous confère un droit de propriété ou une licence autre que celle expressément accordée pour l'utilisation des services.
                  </p>
                </section>

                {/* 3. Activités Interdites */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Activités Interdites</h2>
                  <p className="text-gray-600 mb-4">Il est strictement interdit d'utiliser Lengo Pay pour :</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Toute activité frauduleuse ou criminelle, y compris le blanchiment d'argent</li>
                    <li>La vente de produits ou services illégaux (drogues, armes, contenus pornographiques, etc.)</li>
                    <li>Toute activité portant atteinte aux droits de propriété intellectuelle de tiers</li>
                    <li>Des transactions liées à la fraude ou à l'usurpation d'identité</li>
                  </ul>
                </section>

                {/* 4. Gestion des Services */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gestion des Services</h2>
                  <p className="text-gray-600 mb-4">
                    EASY LINK GUINEA se réserve le droit de gérer et de superviser l'utilisation de Lengo Pay, y compris la suspension, la limitation ou la résiliation de comptes en cas de non-respect des Conditions.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>La maintenance technique régulière</li>
                    <li>Les mises à jour et améliorations des logiciels</li>
                    <li>La résolution des problèmes techniques et la sécurité des transactions</li>
                  </ul>
                </section>

                {/* 5. Informations de Contact */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Informations de Contact</h2>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">EASY LINK GUINEA</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Adresse : Taouyah, commune de Ratoma, République de Guinée</li>
                      <li>Email : conformite@easylinkgn.com</li>
                      <li>Téléphone : +224 626 303 913</li>
                    </ul>
                  </div>
                </section>

                {/* Remaining Sections */}
                {[
                  {
                    title: "6. Déclaration de Garantie",
                    content: "Lengo Pay est fourni « tel quel » et sans aucune garantie expresse ou implicite. EASY LINK GUINEA ne garantit pas que le service sera exempt d'erreurs, de bogues ou d'interruptions, ni qu'il répondra parfaitement à vos besoins spécifiques. Vous reconnaissez utiliser ce service à vos propres risques."
                  },
                  {
                    title: "7. Limitation de Responsabilité",
                    content: "Dans la mesure permise par la loi, EASY LINK GUINEA décline toute responsabilité pour les dommages directs ou indirects, y compris les pertes de données, d'opportunités commerciales ou toute autre perte liée à l'utilisation ou à l'impossibilité d'utiliser Lengo Pay."
                  },
                  {
                    title: "8. Indemnisation",
                    content: "Vous acceptez d'indemniser et de dégager EASY LINK GUINEA de toute responsabilité en cas de réclamations, pertes, dommages ou frais (y compris les frais d'avocat) résultant de votre utilisation de Lengo Pay ou de votre violation des présentes Conditions."
                  },
                  {
                    title: "9. Transactions Frauduleuses et Rétro-Facturations",
                    content: "En cas de fraude avérée liée à une transaction sur Lengo Pay, EASY LINK GUINEA se réserve le droit de suspendre votre compte et d'ouvrir une enquête. Le marchand sera tenu responsable en cas de fraude sur son point de vente et devra rembourser toutes les pertes résultant de cette fraude."
                  },
                  {
                    title: "10. Loi Applicable et Juridiction",
                    content: "Les présentes Conditions sont régies par les lois de la République de Guinée. Tout litige résultant de l'utilisation de Lengo Pay sera soumis à la compétence exclusive des tribunaux guinéens."
                  },
                  {
                    title: "11. Révision des Conditions",
                    content: "EASY LINK GUINEA se réserve le droit de modifier ces Conditions à tout moment. Les utilisateurs seront informés des modifications importantes par e-mail ou via le site de Lengo Pay. Toute modification prendra effet immédiatement après notification."
                  }
                ].map((section, index) => (
                  <section key={index}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-gray-600">{section.content}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}