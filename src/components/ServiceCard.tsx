import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  badge: string;
  description: string;
  features: { icon: LucideIcon; text: string }[];
  ctaText: string;
  ctaClassName?: string;
  onCtaClick: () => void;
}

export function ServiceCard({
  title,
  badge,
  description,
  features,
  ctaText,
  ctaClassName,
  onCtaClick
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="px-3 py-1 text-xs font-semibold bg-[#F5A524] text-white rounded-full">
          {badge}
        </span>
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700">
            <feature.icon size={20} className="text-[#F5A524]" />
            {feature.text}
          </li>
        ))}
      </ul>

      <button 
        onClick={onCtaClick}
        className={`w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transform transition-all duration-200 text-center ${ctaClassName}`}
      >
        {ctaText}
      </button>
    </div>
  );
}