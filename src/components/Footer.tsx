import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  X, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Code2,
  // Activity,
  Info
} from 'lucide-react';
// import Logo from './Logo';
import LogoWhite from './LogoWhite';
import { StatusMonitor } from './StatusMonitor';

const PciLogo = () => (
  <img 
    src="https://i.ibb.co/jkbhgpc/pci-1.png" 
    alt="PCI DSS Compliant" 
    className="w-20 h-auto"
  />
);

export function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white mb-2">
                Restez informé
              </h3>
              <p className="text-gray-400">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et offres de Lengo Pay.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#F5A524] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#F5A524] text-white rounded-lg hover:bg-[#E69516] transition-colors flex items-center gap-2 hover:scale-105 transform duration-200"
                >
                  <Send size={20} />
                  <span className="hidden sm:inline">S'inscrire</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="space-y-6">
            <LogoWhite />
            <p className="text-sm">
              Votre partenaire de confiance pour les paiements en ligne en Afrique. 
              Simplifiez vos transactions avec Lengo Pay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F5A524] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#F5A524] transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="hover:text-[#F5A524] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#F5A524] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div>
              <PciLogo />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Nos Produits</h3>
            <ul className="space-y-4">
              <li>
                <a href="#paiement-marchand" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Paiement Marchand
                </a>
              </li>
              <li>
                <a href="#paiement-marchand" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Boutique en Ligne
                </a>
              </li>
              <li>
                <a href="#paiement-marchand" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Lengo Pay Freelance
                </a>
              </li>
              <li>
                <a href="/bulk-payment" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Bulk Payment
                </a>
              </li>
              <li>
                <a href="/tpe" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  TPE
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Liens utiles</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <Info size={16} className="group-hover:translate-x-1 transition-transform" />
                  Lengo Pay
                </a>
              </li>
              <li>
                <Link to="/conformite" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Conformité
                </Link>
              </li>
              <li>
                <a href="/a-propos" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Notre histoire
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Développeur</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://portal.lengopay.com/register" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <Code2 size={16} className="group-hover:translate-x-1 transition-transform" />
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F5A524] transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Plugins
                </a>
              </li>
              <li>
                <StatusMonitor />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#F5A524] flex-shrink-0" />
                <span>Taouyah, Conakry, République de Guinée</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#F5A524]" />
                <span>+224 626 30 39 13</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#F5A524]" />
                <span>infos@lengopay.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm">
                © {currentYear} Lengo Pay. Tous droits réservés.
              </p>
              <a 
                href="https://www.easylinkgn.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-gray-500 hover:text-[#F5A524] transition-colors border-l border-gray-800 pl-4"
              >
                Propulsé par EASY LINK GUINEA
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/conditions-utilisation" className="hover:text-[#F5A524] transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-[#F5A524] transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}