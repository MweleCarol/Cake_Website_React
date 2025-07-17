import React from 'react';

const Header = () => {
  return (
    <header 
      className="relative w-full min-h-[80vh] md:min-h-screen rounded-xl overflow-hidden mx-auto max-w-7xl my-4"
      id="header"
    >
      {/* Background Image - Clear and Full */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Header img.png')" }}
      ></div>

      {/* Text Content - Directly on Image */}
      <div className="relative z-10 h-full flex items-end pb-16 md:pb-24 lg:pb-32 px-6 md:px-8 lg:px-12">
        <div className="animate-fadeIn max-w-[600px] mt-18">
          <h2 className="font-medium text-black text-[max(4.5vw,22px)] sm:text-5xl md:text-6xl ">
            Delicious Cakes for Everyone
          </h2>
          
          <p className="mt-4 md:mt-6  text-lg sm:text-xl md:text-2xl text-black text-[15px]">
            Indulge in the irresistible charm of our freshly baked cakes—crafted with love, rich flavors, and the finest ingredients to sweeten every moment.
          </p>

          <button 
            className="mt-6 md:mt-8 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400/30 shadow-lg"
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