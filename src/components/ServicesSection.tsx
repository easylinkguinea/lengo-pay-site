import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { Modal } from './Modal';
import { ApiSection } from './ApiSection';
import { PluginsSection } from './PluginsSection';
import { MerchantModalContent } from './MerchantModalContent';
import { 
  Wallet, 
  Clock, 
  Link, 
  Share2, 
  Smartphone, 
  CreditCard, 
  Bitcoin,
  Landmark,
  Receipt,
  Shield
} from 'lucide-react';

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'merchant' | 'store' | 'freelance'>('merchant');

  const handleModalOpen = (type: 'merchant' | 'store' | 'freelance') => {
    if (type === 'store' || type === 'freelance') {
      window.location.href = 'https://portal.lengopay.com/register';
      return;
    }
    setActiveModal(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gray-50" id="paiement-marchand">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              title="Paiement Marchand"
              badge="PRO"
              description="Simplifiez vos Paiements en Toute Confiance. Conçue pour rendre l'expérience de transaction en ligne fluide et sécurisée."
              features={[
                { icon: Smartphone, text: "Mobiles Money" },
                { icon: Wallet, text: "Portefeuilles Électroniques" },
                { icon: CreditCard, text: "Cartes bancaires (Visa & MasterCard)" },
                { icon: Bitcoin, text: "Cryptomonnaies" }
              ]}
              ctaText="En savoir plus"
              onCtaClick={() => handleModalOpen('merchant')}
            />

            <ServiceCard
              title="Boutique en ligne intégrée"
              badge="NEW"
              description="Boostez Vos Ventes, Simplifiez Votre Commerce. Simplifiez la gestion de votre commerce en ligne grâce au module boutique de Lengo Pay."
              features={[
                { icon: Clock, text: "Création Rapide ( 1min )" },
                { icon: Link, text: "Génération de Lien de votre boutique" },
                { icon: Share2, text: "Promotion sur les Réseaux Sociaux" }
              ]}
              ctaText="Créer ma boutique"
              ctaClassName="mt-10"
              onCtaClick={() => handleModalOpen('store')}
            />

            <ServiceCard
              title="Lengo Pay Freelance"
              badge="PRO"
              description="Effectuez des demandes de paiement de manière fluide. Solution dédiée aux freelances pour simplifier la gestion de leurs services et paiements."
              features={[
                { icon: Receipt, text: "Suivi des paiements en temps réel" },
                { icon: Landmark, text: "Optimisez le recouvrement" },
                { icon: Shield, text: "Prévenez les Impayés" }
              ]}
              ctaText="Je m'inscris"
              ctaClassName="mt-10"
              onCtaClick={() => handleModalOpen('freelance')}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <ApiSection />
            <PluginsSection />
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          activeModal === 'merchant' ? 'Paiement Marchand' :
          activeModal === 'store' ? 'Boutique en ligne intégrée' :
          'Lengo Pay Freelance'
        }
      >
        <MerchantModalContent onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}