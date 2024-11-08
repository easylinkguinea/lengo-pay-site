import React from 'react';

interface CountryFlagsProps {
  activeCountry: string;
  onCountryChange: (country: string) => void;
}

const countries = [
  { code: 'guinee', name: 'Guinée', flag: '🇬🇳' },
  { code: 'sierra-leone', name: 'Sierra Leone', flag: '🇸🇱' },
  { code: 'maroc', name: 'Maroc', flag: '🇲🇦' },
  { code: 'ghana', name: 'Ghana', flag: '🇬🇭' },
  { code: 'gambie', name: 'Gambie', flag: '🇬🇲' },
  { code: 'mali', name: 'Mali', flag: '🇲🇱' },
  { code: 'cote-ivoire', name: "Côte d'Ivoire", flag: '🇨🇮' }
];

export function CountryFlags({ activeCountry, onCountryChange }: CountryFlagsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {countries.map((country) => (
        <button 
          key={country.code}
          onClick={() => onCountryChange(country.code)}
          className={`px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
            activeCountry === country.code 
              ? 'bg-[#F5A524] text-white shadow-lg shadow-[#F5A524]/20 scale-105' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="text-xl">{country.flag}</span>
          <span>{country.name}</span>
        </button>
      ))}
    </div>
  );
}