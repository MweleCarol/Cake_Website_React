import React from 'react';

const Header = () => {
  return (
    <header 
      className="relative w-full min-h-[80vh] md:min-h-screen rounded-none md:rounded-xl overflow-hidden mx-auto max-w-7xl my-0 md:my-4"
      id="header"
    >
      {/* Background Image - Clear and Full */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/Header img.png')" }}
      ></div>

      {/* Text Content - Directly on Image */}
      <div className="relative z-10 h-full flex items-end pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="animate-fadeIn max-w-[600px] mt-12 sm:mt-18">
          <h2 className="font-medium text-black text-[max(4.5vw,22px)] sm:text-5xl md:text-6xl lg:text-7xl">
            Delicious Cakes for Everyone
          </h2>
          
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black">
            Indulge in the irresistible charm of our freshly baked cakes—crafted with love, rich flavors, and the finest ingredients to sweeten every moment.
          </p>

          <button 
            className="mt-6 md:mt-8 px-6 py-3 md:px-8 md:py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400/30 shadow-lg"
            aria-label="View our menu"
          >
            View Menu
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;