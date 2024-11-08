import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Story {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const stories: Story[] = [
  {
    title: "HalimaShop en Pleine Ascension",
    description: "Mariam, gérante de la boutique Halima Fashion, a boosté ses ventes en ligne grâce à la boutique intégrée de Lengo Pay, simplifiant le processus d'achat pour ses clients.",
    image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Boutique Halima Fashion"
  },
  {
    title: "Patricia Lamah - PAT'S Natural Beauty",
    description: "Patricia Lamah, gérante de PAT'S Natural Beauty, a optimisé les paiements en ligne avec le plugin WooCommerce de Lengo Pay, offrant une expérience de paiement rapide et sécurisée à ses clients.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "PAT'S Natural Beauty"
  },
  {
    title: "SP Mobile Élève l'Expérience Client",
    description: "Tahirou Bah, gérant de SP Mobile, a renforcé la satisfaction client en intégrant l'API de Lengo Pay, offrant une expérience de paiement transparente pour la vente de téléphones haut de gamme.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "SP Mobile Store"
  }
];

export function SuccessStories() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success stories de <br />
              nos utilisateurs
            </h2>
            <p className="text-xl text-gray-300">
              Découvrez comment nos utilisateurs ont transformé leur expérience financière avec Lengo Pay.
            </p>
          </div>
          
          <button className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transform transition-all duration-200">
            Voir + de Success Stories
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden group hover:scale-105 transform transition-all duration-200"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}