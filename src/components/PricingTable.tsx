import React from 'react';

interface PricingTableProps {
  country: string;
}

const columns = [
  {
    title: "Commission",
    subtitle: "Paiement à la demande"
  },
  {
    title: "Licence",
    subtitle: "Abonnement / An"
  },
  {
    title: "Free-lance",
    subtitle: "Paiement à la demande"
  },
  {
    title: "Lengo Store",
    subtitle: "Boutique Intégrée"
  }
];

const pricingData = {
  entryFee: "500.000 GNF",
  monthlySubscription: {
    commission: "NON",
    licence: "NON",
    freelance: "17.500 GNF",
    lengoStore: "30.570 GNF"
  },
  plugins: {
    commission: "OUI",
    licence: "OUI",
    freelance: "N/A",
    lengoStore: "N/A"
  },
  api: {
    commission: "OUI",
    licence: "OUI",
    freelance: "N/A",
    lengoStore: "N/A"
  },
  orangeMtn: {
    commission: "3,7% / Transaction",
    licence: "5.000.000 GNF",
    freelance: "3,7% / Transaction + 1000 GNF",
    lengoStore: "3,7% / Transaction"
  },
  visaMastercard: {
    commission: "4% supportée par le Marchand",
    licence: "5.000.000 GNF",
    freelance: "4% supportée par le Marchand",
    lengoStore: "4% supportée par le Marchand"
  },
  crypto: {
    commission: "4,5% / Transaction",
    licence: "5.000.000 GNF",
    freelance: "4,5% / Transaction + 1000 GNF",
    lengoStore: "4,5% / Transaction"
  }
};

export function PricingTable({ country }: PricingTableProps) {
  if (country !== 'guinee') {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-white rounded-xl shadow-xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">À venir</h3>
          <p className="text-gray-600">
            Les tarifs pour ce pays seront bientôt disponibles.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] bg-white rounded-xl shadow-xl border-collapse">
        <thead>
          <tr className="divide-x divide-[#E69516]">
            <th className="p-6 text-left bg-gray-200 border-b border-gray-300 rounded-tl-xl relative">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <div className="relative">
                <img 
                  src="https://portal.lengopay.com/public/images/logo_lengopay_black.png"
                  alt="Lengo Pay"
                  className="h-8 w-auto"
                />
              </div>
            </th>
            {columns.map((column, index) => (
              <th 
                key={index}
                className={`p-6 bg-[#F5A524] border-b border-[#E69516] ${
                  index === columns.length - 1 ? 'rounded-tr-xl' : ''
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{column.title}</h3>
                <p className="text-sm text-black font-medium">{column.subtitle}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="divide-x divide-gray-200">
            <td className="p-4 bg-gray-200 font-medium relative">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <span className="relative">Droit d'entrée (1x)</span>
            </td>
            <td className="p-4 text-center">{pricingData.entryFee}</td>
            <td className="p-4 text-center">{pricingData.entryFee}</td>
            <td className="p-4 text-center">{pricingData.entryFee}</td>
            <td className="p-4 text-center">{pricingData.entryFee}</td>
          </tr>
          <tr className="divide-x divide-gray-200">
            <td className="p-4 bg-gray-200 font-medium relative">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <span className="relative">Abonnement mensuel</span>
            </td>
            <td className="p-4 text-center">{pricingData.monthlySubscription.commission}</td>
            <td className="p-4 text-center">{pricingData.monthlySubscription.licence}</td>
            <td className="p-4 text-center">{pricingData.monthlySubscription.freelance}</td>
            <td className="p-4 text-center">{pricingData.monthlySubscription.lengoStore}</td>
          </tr>
          <tr className="divide-x divide-gray-200">
            <td className="p-4 bg-gray-200 font-medium relative">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <span className="relative">Nos Plugins</span>
            </td>
            <td className="p-4 text-center">{pricingData.plugins.commission}</td>
            <td className="p-4 text-center">{pricingData.plugins.licence}</td>
            <td className="p-4 text-center">{pricingData.plugins.freelance}</td>
            <td className="p-4 text-center">{pricingData.plugins.lengoStore}</td>
          </tr>
          <tr className="divide-x divide-gray-200">
            <td className="p-4 bg-gray-200 font-medium relative">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <span className="relative">API</span>
            </td>
            <td className="p-4 text-center">{pricingData.api.commission}</td>
            <td className="p-4 text-center">{pricingData.api.licence}</td>
            <td className="p-4 text-center">{pricingData.api.freelance}</td>
            <td className="p-4 text-center">{pricingData.api.lengoStore}</td>
          </tr>
          <tr className="divide-x divide-gray-200">
            <td className="p-4 bg-gray-200 font-medium relative">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <span className="relative">Orange Money / MTN Money</span>
            </td>
            <td className="p-4 text-center">{pricingData.orangeMtn.commission}</td>
            <td className="p-4 text-center">{pricingData.orangeMtn.licence}</td>
            <td className="p-4 text-center">{pricingData.orangeMtn.freelance}</td>
            <td className="p-4 text-center">{pricingData.orangeMtn.lengoStore}</td>
          </tr>
          <tr className="divide-x divide-gray-200">
            <td className="p-4 bg-gray-200 font-medium relative">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <span className="relative">Visa / Mastercard</span>
            </td>
            <td className="p-4 text-center">{pricingData.visaMastercard.commission}</td>
            <td className="p-4 text-center">{pricingData.visaMastercard.licence}</td>
            <td className="p-4 text-center">{pricingData.visaMastercard.freelance}</td>
            <td className="p-4 text-center">{pricingData.visaMastercard.lengoStore}</td>
          </tr>
          <tr className="divide-x divide-gray-200">
            <td className="p-4 bg-gray-200 font-medium relative rounded-bl-xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-300/30" style={{ 
                backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 1px, rgba(209, 213, 219, 0.3) 1px, rgba(209, 213, 219, 0.3) 2px)`,
                backgroundSize: '8px 100%',
                opacity: 0.5,
                mixBlendMode: 'multiply'
              }} />
              <span className="relative">Bitcoin / Crypto</span>
            </td>
            <td className="p-4 text-center">{pricingData.crypto.commission}</td>
            <td className="p-4 text-center">{pricingData.crypto.licence}</td>
            <td className="p-4 text-center">{pricingData.crypto.freelance}</td>
            <td className="p-4 text-center rounded-br-xl">{pricingData.crypto.lengoStore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}