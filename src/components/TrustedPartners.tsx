import React from 'react';
// import { Building2 } from 'lucide-react';
import OM from '../images/moyens/orangeMoney.png';
import MTN from '../images/moyens/mtn-momo.webp';
import Crypto from '../images/moyens/Bitcoin.webp';
import PayCard from '../images/moyens/pc-logo.jpg';
import masterCard from '../images/moyens/mastercard.png';
import visa from '../images/moyens/visa.png';
// import Akiba from '../images/moyens/akiba-logo.jpg';


export function TrustedPartners() {
  const partners = [
    { name: 'Orange Money', logo: OM },
    { name: 'MTN MoMo', logo: MTN },
    { name: 'PayCard', logo: PayCard },
    { name: 'MasterCard', logo: masterCard },
    { name: 'VISA', logo: visa },
    { name: 'Crypto', logo: Crypto },
    // { name: 'AKIBA', logo: Akiba },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Nos parténaires</h2>
          <div className="w-20 h-1 bg-[#F5A524] mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center group transition-transform hover:scale-110"
            >
            <img src={partner.logo} alt="Logo"className='rounded-[50px] w-16 h-auto'/>              
            
            {/* <partner.logo 
                size={48} 
                className="text-gray-400 group-hover:text-[#F5A524] transition-colors" 
              /> */}
              <span className="mt-2 text-sm text-gray-600 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}