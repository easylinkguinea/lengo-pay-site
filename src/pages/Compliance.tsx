import React from 'react';
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  FileCheck, 
  Building2, 
  AlertTriangle,
  Server,
  Key,
  UserCheck,
  ShieldCheck,
  HardDrive,
  Network
} from 'lucide-react';

export function Compliance() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conformité et
              <span className="text-[#F5A524] block mt-2">
                Standards de Sécurité
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Lengo Pay s'engage à maintenir les plus hauts standards de sécurité pour protéger vos données et transactions.
            </p>
          </div>
        </div>
      </section>

      {/* PCI DSS Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://i.ibb.co/jkbhgpc/pci-1.png"
                  alt="PCI DSS Certified"
                  className="h-24 w-auto"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Certification PCI DSS
              </h2>
              <p className="text-xl text-gray-600">
                Lengo Pay est certifié PCI DSS (Payment Card Industry Data Security Standard), 
                garantissant le plus haut niveau de sécurité pour le traitement des paiements par carte.
              </p>
            </div>

            {/* Requirements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Network,
                  title: "Réseau Sécurisé",
                  description: "Maintenance d'un réseau sécurisé avec pare-feu et configurations sécurisées"
                },
                {
                  icon: Lock,
                  title: "Protection des Données",
                  description: "Cryptage des données sensibles lors du stockage et de la transmission"
                },
                {
                  icon: Shield,
                  title: "Gestion des Vulnérabilités",
                  description: "Programme de gestion des vulnérabilités avec mises à jour régulières"
                },
                {
                  icon: UserCheck,
                  title: "Contrôle d'Accès",
                  description: "Mesures strictes de contrôle d'accès et authentification forte"
                },
                {
                  icon: HardDrive,
                  title: "Surveillance Réseau",
                  description: "Surveillance et tests réguliers des systèmes et processus"
                },
                {
                  icon: FileCheck,
                  title: "Politique de Sécurité",
                  description: "Maintien d'une politique de sécurité de l'information complète"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#F5A524]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Security Measures */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mesures de Sécurité Supplémentaires
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Key,
                    title: "Authentification Multi-Facteurs",
                    description: "Protection renforcée des comptes utilisateurs"
                  },
                  {
                    icon: Server,
                    title: "Sauvegarde Automatique",
                    description: "Backup quotidien des données critiques"
                  },
                  {
                    icon: AlertTriangle,
                    title: "Détection des Fraudes",
                    description: "Système avancé de détection des activités suspectes"
                  },
                  {
                    icon: ShieldCheck,
                    title: "Audit de Sécurité",
                    description: "Audits réguliers par des experts indépendants"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F5A524]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#F5A524]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Statement */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#F5A524] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Notre Engagement</h3>
                  <p className="text-gray-300 mb-6">
                    Lengo Pay s'engage à maintenir les plus hauts standards de sécurité et de conformité 
                    dans l'industrie des paiements. Notre certification PCI DSS est régulièrement 
                    renouvelée pour garantir une protection optimale de vos données et transactions.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">PCI DSS v3.1</span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">ISO 27001</span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">GDPR Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}