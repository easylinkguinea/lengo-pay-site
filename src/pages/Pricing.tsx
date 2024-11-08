import React, { useState } from 'react';
import { CountryFlags } from '../components/CountryFlags';
import { PricingTable } from '../components/PricingTable';

export function Pricing() {
  const [activeCountry, setActiveCountry] = useState('guinee');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nos Tarifs
              <span className="text-[#F5A524] block mt-2">
                Simples et Transparents
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Des solutions adaptées à tous les besoins avec une tarification claire et sans surprise.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <CountryFlags activeCountry={activeCountry} onCountryChange={setActiveCountry} />
          </div>
          <PricingTable country={activeCountry} />
        </div>
      </section>
    </div>
  );
}