import React from 'react';
import {
  LayoutDashboard,
  Receipt,
  Banknote,
  HeadphonesIcon,
  Code2,
  ShoppingCart,
  MessageSquare,
  Terminal
} from 'lucide-react';

export function MerchantModalContent({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-8 text-gray-600">
      <p className="text-lg leading-relaxed">
        Lengo Pay offre une solution complète et intuitive pour les marchands désireux de gérer 
        et d'accepter des paiements en ligne en Guinée et en Afrique. Le service marchand de 
        Lengo Pay vise à faciliter les transactions financières, améliorer la gestion des ventes 
        et optimiser l'expérience utilisateur tant pour les marchands que pour leurs clients.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Fonctionnalités
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <LayoutDashboard className="text-[#F5A524]" size={24} />
            <span>Tableau de bord</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <Receipt className="text-[#F5A524]" size={24} />
            <span>Gestion des transactions</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <Banknote className="text-[#F5A524]" size={24} />
            <span>Gestion des retraits</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <HeadphonesIcon className="text-[#F5A524]" size={24} />
            <span>Support client</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <Code2 className="text-[#F5A524]" size={24} />
            <span>Mode développeur avancé</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <ShoppingCart className="text-[#F5A524]" size={24} />
            <span>Plugins E-commerce</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <MessageSquare className="text-[#F5A524]" size={24} />
            <span>Module SMS intégré</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <Terminal className="text-[#F5A524]" size={24} />
            <span>Lengo Pay POS</span>
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed">
        L'objectif principal du service marchand de Lengo Pay est de simplifier les paiements 
        en ligne, de réduire les barrières à l'entrée pour les petites entreprises et les 
        entrepreneurs, et de fournir une solution de paiement complète, fiable et sécurisée 
        qui favorise la croissance et l'inclusion financière en Guinée et en Afrique.
      </p>

      <button
        onClick={onClose}
        className="w-full mt-8 bg-[#F5A524] text-white py-3 rounded-lg font-medium hover:bg-[#E69516] hover:scale-105 transform transition-all duration-200"
      >
        Commencer maintenant
      </button>
    </div>
  );
}