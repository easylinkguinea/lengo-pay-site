import React from 'react';
import { 
  Webhook, 
  Lock, 
  Zap, 
  Code2,
  ArrowRight 
} from 'lucide-react';

export function ApiSection() {
  return (
    <div className="bg-black rounded-2xl p-8 shadow-lg h-full text-white">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-bold">Lengo Pay API</h3>
        <span className="px-3 py-1 text-xs font-semibold bg-[#F5A524] text-white rounded-full">
          DEV
        </span>
      </div>
      
      <p className="text-gray-300 mb-8">
        Intégrez facilement les paiements dans vos applications avec notre API robuste et flexible. 
        Documentation complète et support technique disponible.
      </p>

      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-3 text-gray-300">
          <Webhook size={20} className="text-[#F5A524]" />
          API RESTful moderne
        </li>
        <li className="flex items-center gap-3 text-gray-300">
          <Lock size={20} className="text-[#F5A524]" />
          Sécurité renforcée
        </li>
        <li className="flex items-center gap-3 text-gray-300">
          <Zap size={20} className="text-[#F5A524]" />
          Temps de réponse &lt; 1s
        </li>
        <li className="flex items-center gap-3 text-gray-300">
          <Code2 size={20} className="text-[#F5A524]" />
          SDKs multiples plateformes
        </li>
      </ul>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-[#F5A524] font-medium hover:text-[#E69516] transition-colors"
      >
        Accéder à la documentation
        <ArrowRight size={16} />
      </a>
    </div>
  );
}