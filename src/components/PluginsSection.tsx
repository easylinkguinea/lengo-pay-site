import React from 'react';

const plugins = [
  {
    name: 'WooCommerce',
    logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg"
  },
  {
    name: 'Shopify',
    logo: "https://cdn.worldvectorlogo.com/logos/shopify-2.svg"
  },
  {
    name: 'PrestaShop',
    logo: "https://cdn.worldvectorlogo.com/logos/prestashop.svg"
  },
  {
    name: 'Moodle',
    logo: "https://cdn.worldvectorlogo.com/logos/moodle-1.svg"
  },
  {
    name: 'Magento',
    logo: "https://cdn.worldvectorlogo.com/logos/magento.svg"
  },
  {
    name: 'OpenCart',
    logo: "https://cdn.worldvectorlogo.com/logos/opencart.svg"
  }
];

export function PluginsSection() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Plugins Lengo Pay</h3>
        <span className="px-3 py-1 text-xs font-semibold bg-[#F5A524] text-white rounded-full">
          PLUGINS
        </span>
      </div>
      
      <p className="text-gray-600 mb-8">
        Intégrez Lengo Pay facilement avec vos plateformes préférées. Nos plugins sont conçus 
        pour une installation rapide et une configuration simple.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {plugins.map((plugin, index) => (
          <div 
            key={index}
            className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105 cursor-pointer group"
          >
            <div className="h-12 flex items-center justify-center">
              <img 
                src={plugin.logo} 
                alt={`${plugin.name} logo`}
                className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{plugin.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500">
        Des modules prêts à l'emploi
      </div>
    </div>
  );
}