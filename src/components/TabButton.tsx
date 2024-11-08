import React from 'react';

interface TabButtonProps {
  active?: boolean;
  children: React.ReactNode;
}

export function TabButton({ active, children }: TabButtonProps) {
  return (
    <button
      className={`px-8 py-3 text-lg font-medium transition-colors ${
        active 
          ? 'bg-[#F5A524] text-white' 
          : 'bg-white text-black hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}