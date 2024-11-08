import React, { useEffect } from 'react';
import { Megaphone, X } from 'lucide-react';

export function NewsFlash() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [lastClosed, setLastClosed] = React.useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && isVisible) {
        setIsTransitioning(true);
        setTimeout(() => setIsVisible(false), 300);
      } else if (window.scrollY === 0 && !isVisible && (!lastClosed || Date.now() - lastClosed > 3000000)) {
        setIsVisible(true);
        setIsTransitioning(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, lastClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setLastClosed(Date.now());
  };

  if (!isVisible) return null;

  return (
    <div className={`bg-black text-[#f79e1b] transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-[-100%]' : 'opacity-100 translate-y-0'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2 text-sm">
            <Megaphone size={16} className="animate-pulse" />
            <span className="hidden sm:inline">
              🎉 Nouveau : Lengo Pay lance son service de paiement par TPE ! 
              <a href="#" className="underline ml-2 font-medium hover:text-[#F5A524] transition-colors">
                En savoir plus
              </a>
            </span>
            <span className="sm:hidden">
              🎉 Nouveau TPE Lengo Pay !
            </span>
          </div>
          <button 
            onClick={handleClose}
            className="p-1 hover:text-[#F5A524] transition-colors"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}