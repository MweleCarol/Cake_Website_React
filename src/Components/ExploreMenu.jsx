import React from 'react';
import { menu_list } from '../assets/assets';
import Title from './Title';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-16" id="explore-menu">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-10 lg:mb-8">
          <Title
            title="Explore Our Menu"
            subtitle="Choose from a diverse menu featuring mouth-watering desserts crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious treat at a time."
            alignment="left"
            className="max-w-3xl"
          />
        </div>

        {/* Menu Items Scrollable Row */}
        <div className="relative mt-8">
          <div className="grid auto-cols-[minmax(80px,1fr)] grid-flow-col gap-x-8 md:gap-x-10 lg:gap-x-12 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-8">
            {menu_list.map((item, index) => {
              const isActive = category === item.menu_name;

              return (
                <button
                  key={index}
                  onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
                  className="flex flex-col items-center justify-center transition-all duration-300 focus:outline-none group mt-8"
                  aria-label={`Select ${item.menu_name.replace(/_/g, ' ')} category`}
                >
                  <div
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden p-1 ${
                      isActive 
                        ? 'ring-4 ring-amber-500 shadow-lg ' 
                        : 'ring-1 ring-gray-200 group-hover:ring-2 group-hover:ring-amber-400'
                    } transition-all duration-300`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-10 rounded-full"></div>
                    <img
                      src={item.menu_image}
                      alt={item.menu_name}
                      className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {isActive && (
                      <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
                    )}
                  </div>
                  <p className={`mt-3 text-sm sm:text-base md:text-lg font-medium ${
                    isActive ? 'text-amber-600' : 'text-gray-700'
                  } capitalize tracking-wide transition-colors duration-300 group-hover:text-amber-600`}>
                    {item.menu_name.replace(/_/g, ' ')}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 lg:mt-16">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default ExploreMenu;