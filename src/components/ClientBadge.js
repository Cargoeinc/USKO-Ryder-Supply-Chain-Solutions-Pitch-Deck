import React from 'react';

const ClientBadge = ({ clientName }) => {
  return (
    <div className="relative group">
      {/* Glassmorphism background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/60 blur-xl rounded-3xl transform group-hover:scale-105 transition-all duration-300" />
      
      {/* Main badge container */}
      <div className="relative backdrop-blur-sm bg-white/80 px-6 py-4 md:py-5 rounded-3xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[340px] md:max-w-md mx-auto">
        <div className="flex items-center justify-start gap-4">
          {/* Modern icon container with gradient */}
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#ce1126] to-[#cf202a] flex items-center justify-center text-white shadow-md transform group-hover:rotate-6 transition-all duration-300">
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
          </div>

          {/* Text content with subtle animation */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium mb-0.5 tracking-wide">
              PREPARED FOR
            </span>
            <span className="text-[#ce1126] font-bold text-lg md:text-xl tracking-tight group-hover:tracking-normal transition-all duration-300">
              {clientName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBadge; 