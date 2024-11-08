import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { PaymentSection } from '../components/PaymentSection';
import { ServicesSection } from '../components/ServicesSection';
import { TrustedPartners } from '../components/TrustedPartners';
import { SuccessStories } from '../components/SuccessStories';
import { VideoModal } from '../components/VideoModal';
import { StatsSection } from '../components/StatsSection';
import { ImageSlider } from '../components/ImageSlider';

export function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F7F5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[85vh] pt-12">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              Lengo Pay
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              La Solution de Paiement <br />
              <span className="text-[#F5A524]">Africaine</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Notre mission est de révolutionner la façon dont vous effectuez vos transactions quotidiennes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transform transition-all duration-200">
                Inscrivez-vous à Lengo Pay
              </button>
              
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 group"
              >
                <Play size={20} className="text-[#F5A524] group-hover:scale-110 transition-transform" />
                <span>Lengo Pay en vidéo</span>
              </button>
            </div>
          </div>
          
          <div className="relative h-full">
            <ImageSlider />
          </div>
        </div>
      </div>
      
      <TrustedPartners />
      <PaymentSection />
      <StatsSection />
      <ServicesSection />
      <SuccessStories />

      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="YOUR_YOUTUBE_VIDEO_ID"
      />
    </div>
  );
}