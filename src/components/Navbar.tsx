import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogIn, Menu, X, UserPlus } from 'lucide-react';
import Logo from './Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'A Propos' },
    { path: '/bulk-payment', label: 'Bulk Payment' },
    { path: '/tpe', label: 'TPE' },
    { path: '/nos-tarifs', label: 'Nos Tarifs' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <Logo />
            
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path} 
                  className={({ isActive }) => 
                    `text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      isActive 
                        ? 'text-[#F5A524]' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://portal.lengopay.com/register"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#F5A524] transition-all duration-200 hover:scale-105 group"
            >
              <UserPlus size={18} className="group-hover:text-[#F5A524] transition-colors" />
              Créer un compte
            </a>
            <a
              href="https://portal.lengopay.com"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#F5A524] text-white rounded-lg text-sm font-medium hover:bg-[#E69516] transition-all duration-200 hover:scale-105 transform hover:shadow-lg hover:shadow-[#F5A524]/20"
            >
              <LogIn size={18} />
              Se connecter
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-200 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                    isActive
                      ? 'bg-[#F5A524]/10 text-[#F5A524]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="border-t border-gray-100 my-2"></div>

            <a
              href="https://portal.lengopay.com/register"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#F5A524] rounded-lg transition-all duration-200 hover:scale-105 group"
            >
              <UserPlus size={18} className="group-hover:text-[#F5A524] transition-colors" />
              Créer un compte
            </a>
            <a
              href="https://portal.lengopay.com"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 bg-[#F5A524] text-white rounded-lg text-sm font-medium hover:bg-[#E69516] transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#F5A524]/20"
            >
              <LogIn size={18} />
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}