import React, { useState } from 'react';
import logo from './../assets/logo.png';
import basket_icon from './../assets/basket_icon.png';
import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  const [menu, setMenu] = useState("home");
  
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm px-6 py-4 md:px-8 md:py-5 flex justify-between items-center z-auto">
      {/* Logo Section */}
      <div className="flex items-center gap-3 md:gap-4">
        <Link to="/">
          <img 
            className="w-14 h-14 md:w-[75px] md:h-[75px] rounded-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105" 
            src={logo} 
            alt="Cake Spot Logo" 
          />
        </Link> 
        <span className="font-bold text-2xl md:text-4xl text-gray-800 cursor-pointer hover:text-amber-600 transition-colors duration-300">
          Cake Spot
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex list-none gap-6 lg:gap-8 text-gray-700 text-[17px] lg:text-[18px]">
        <Link 
          to="/" 
          className={`cursor-pointer pb-1 transition-colors duration-300 hover:text-amber-600 ${
            menu === "home" ? "border-b-2 border-amber-500 text-amber-600" : ""
          }`}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a 
          href="#menu" 
          className="cursor-pointer pb-1 transition-colors duration-300 hover:text-amber-600"
        >
          Menu
        </a>
        <a 
          href="#mobile-app" 
          className="cursor-pointer pb-1 transition-colors duration-300 hover:text-amber-600"
        >
          Mobile App
        </a>
        <a 
          href="#contact" 
          className="cursor-pointer pb-1 transition-colors duration-300 hover:text-amber-600"
        >
          Contact Us
        </a>
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-5 md:gap-6 lg:gap-8">
        <Link to='/Cart' className="relative group">
          <img 
            src={basket_icon} 
            alt="Shopping Cart" 
            className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 hover:scale-110"
          />
          {/* Optional cart counter badge */}
          {/* <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span> */}
        </Link>
        
        <button 
          className="bg-transparent text-sm md:text-base text-gray-700 border border-amber-500 px-4 py-2 md:px-6 md:py-2.5 
          rounded-full cursor-pointer transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-600
          focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;