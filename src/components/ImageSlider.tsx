import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../images/moyens/omghj.png';
import img2 from '../images/moyens/lpayimg1.png';
import img3 from '../images/moyens/im2-Lpay.png';

const slides = [
  {
    url: img1,
    title: "Paiement Mobile Simplifié",
    description: "Effectuez vos transactions en toute sécurité avec notre solution mobile"
  },
  {
    url: img2,
    title: "Commerce Digital",
    description: "Développez votre activité avec notre solution e-commerce intégrée"
  },
  {
    url: img3,
    title: "Solution Professionnelle",
    description: "Une plateforme complète pour gérer vos paiements professionnels"
  }
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [nextSlide]);

  return (
    <div className="relative h-[600px] w-full group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 rounded-2xl"
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-2xl">
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">{slides[currentIndex].title}</h3>
            <p className="text-lg text-white/90">{slides[currentIndex].description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
      </div> */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <button
          onClick={nextSlide}
          className="p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div> */}

      {/* Dots */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}