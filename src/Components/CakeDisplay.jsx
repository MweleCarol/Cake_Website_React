import React from 'react';
import { food_list } from '../assets/assets';
import CakeCard from './CakeCard';
import Title from './Title';

const FoodDisplay = ({ category }) => {
  // Filter by category if not "All"
  const filteredCakes = category === "All"
    ? food_list
    : food_list.filter(item => item.category === category);

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title Section - Matching ExploreMenu style */}
        <div className="mb-10 lg:mb-14">
          <Title
            title={category === "All" ? "Our Signature Desserts" : `${category.replace(/_/g, ' ')} Collection`}
            subtitle="Indulge in our carefully crafted selection of desserts, each made with premium ingredients and artistic presentation. Every bite promises a moment of pure delight."
            alignment="left"
            className="max-w-3xl"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
          {filteredCakes.map(cake => (
            <CakeCard key={cake._id} cake={cake} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCakes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}

        {/* Divider - Matching ExploreMenu */}
        <div className="mt-12 lg:mt-16">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default FoodDisplay;