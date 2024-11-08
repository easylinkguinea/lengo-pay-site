import React from 'react';

const Globe = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#000000] to-[#f79e1b] group-hover:from-[#f79e1b] group-hover:to-[#000000] transition-all duration-500">
        <div className="absolute inset-1 rounded-full bg-white/90">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#000000] to-[#f79e1b] group-hover:from-[#f79e1b] group-hover:to-[#000000] transition-all duration-500">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Animated meridians */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-[2px] bg-white/20 animate-spin-slow"
                  style={{
                    left: '50%',
                    transform: `translateX(-50%) rotate(${i * 30}deg)`,
                    animationDuration: '20s',
                    animationDelay: `${i * -3}s`
                  }}
                />
              ))}
              {/* Animated parallels */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-[2px] bg-white/20"
                  style={{
                    top: `${(i + 1) * 20}%`,
                  }}
                />
              ))}
              {/* Animated locations */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 animate-ping"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#f79e1b' : '#000000',
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Building = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-24 h-32 bg-gradient-to-br from-[#000000] to-[#f79e1b] group-hover:from-[#f79e1b] group-hover:to-[#000000] rounded-xl shadow-2xl transition-all duration-500 animate-float">
        {/* Modern windows grid */}
        <div className="absolute inset-4 grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="relative bg-white/10 rounded-sm overflow-hidden group-hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f79e1b]/20 to-transparent animate-pulse" 
                   style={{ animationDelay: `${i * 0.2}s` }} />
            </div>
          ))}
        </div>
        {/* Animated top */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#000000] to-[#f79e1b] rounded-full animate-pulse">
            <div className="absolute inset-1 rounded-full bg-white/20 animate-ping" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Transaction = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-28 h-28 rounded-full border-4 border-[#000000] group-hover:border-[#f79e1b] transition-colors duration-500 relative">
          {/* Inner rotating ring */}
          <div className="absolute inset-2 rounded-full border-4 border-dashed border-[#f79e1b] group-hover:border-[#000000] animate-spin-slow transition-colors duration-500" />
          
          {/* Floating coins */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-10 h-10"
              style={{
                animation: `moveCoin ${3 + i}s linear infinite`,
                animationDelay: `${i * -1}s`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#000000] to-[#f79e1b] group-hover:from-[#f79e1b] group-hover:to-[#000000] rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#f79e1b]/50 to-transparent flex items-center justify-center text-white font-bold">
                  $
                </div>
              </div>
            </div>
          ))}
          
          {/* Center pulse */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#000000] to-[#f79e1b] group-hover:from-[#f79e1b] group-hover:to-[#000000] animate-pulse transition-colors duration-500">
            <div className="absolute inset-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AnimatedIcons = {
  Globe,
  Building,
  Transaction,
};