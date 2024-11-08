import React from 'react';

interface PricingTabsProps {
  activeCountry: string;
  onCountryChange: (country: string) => void;
}

const countries = [
  { code: 'guinee', name: 'Guinée', flag: '🇬🇳', currency: 'GNF' },
  { code: 'sierra-leone', name: 'Sierra Leone', flag: '🇸🇱', currency: 'SLL' },
  { code: 'maroc', name: 'Maroc', flag: '🇲🇦', currency: 'MAD' },
  { code: 'ghana', name: 'Ghana', flag: '🇬🇭', currency: 'GHS' },
  { code: 'gambie', name: 'Gambie', flag: '🇬🇲', currency: 'GMD' },
  { code: 'mali', name: 'Mali', flag: '🇲🇱', currency: 'XOF' },
  { code: 'cote-ivoire', name: "Côte d'Ivoire", flag: '🇨🇮', currency: 'XOF' }
];

export function PricingTabs({ activeCountry, onCountryChange }: PricingTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {countries.map((country) => (
        <button
          key={country.code}
          onClick={() => onCountryChange(country.code)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeCountry === country.code
              ? 'bg-[#F5A524] text-white shadow-lg shadow-[#F5A524]/20 scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="text-xl">{country.flag}</span>
          <span>{country.currency}</span>
        </button>
      ))}
    </div>
  );
}