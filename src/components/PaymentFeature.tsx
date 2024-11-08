import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PaymentFeatureProps {
  icon: LucideIcon;
  number: string;
  title: string;
}

export function PaymentFeature({ icon: Icon, number, title }: PaymentFeatureProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5A524] to-orange-600 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-200"></div>
      <div className="relative bg-black p-8 rounded-xl transform group-hover:-translate-y-1 transition-all duration-200">
        <Icon className="w-12 h-12 text-[#F5A524] mb-6 transform group-hover:scale-110 transition-transform duration-200" />
        <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-[#F5A524] transition-colors">
          {number}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {title}
        </p>
      </div>
    </div>
  );
}