import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mamadou Saliou Diallo',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    name: 'Aissatou Barry',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Thierno Baldé',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Fatoumata Camara',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    name: 'Alpha Oumar Bah',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Mariama Sylla',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com'
    }
  }
];

export function TeamSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée et dévouée qui travaille pour révolutionner les paiements en Afrique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#F5A524] font-medium mb-4">
                    {member.role}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin}
                        className="text-white hover:text-[#F5A524] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a 
                        href={member.socials.twitter}
                        className="text-white hover:text-[#F5A524] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={20} />
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a 
                        href={member.socials.facebook}
                        className="text-white hover:text-[#F5A524] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook size={20} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a 
                        href={member.socials.github}
                        className="text-white hover:text-[#F5A524] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}