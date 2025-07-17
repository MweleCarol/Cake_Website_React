import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart, FiHeart, FiPlus, FiMinus } from 'react-icons/fi';

const CakeCard = ({ cake }) => {
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCart = () => setQuantity(prev => prev + 1);
  const removeFromCart = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  const toggleFavorite = () => setIsFavorite(prev => !prev);

  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Favorite Button */}
      <button 
        onClick={toggleFavorite}
        aria-label="Toggle Favorite"
        className={`absolute top-3 right-3 p-2 rounded-full z-10 transition-colors
          ${isFavorite ? 'bg-rose-100 text-rose-500' : 'bg-white/80 text-gray-400 hover:text-rose-500'}`}
      >
        <FiHeart className={isFavorite ? 'fill-current' : ''} />
      </button>

      {/* Cake Image */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={cake.image} 
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded-md text-xs font-medium">
          {cake.category}
        </span>
      </div>

      {/* Cake Details */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-gray-900">{cake.name}</h3>
          <p className="font-bold text-amber-600">${cake.price.toFixed(2)}</p>
        </div>
        
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{cake.description}</p>
        
        {/* Quantity Controls */}
        <div className="mt-4 flex items-center justify-between">
          {quantity > 0 ? (
            <div className="flex items-center space-x-3">
              <button 
                onClick={removeFromCart}
                aria-label="Remove One"
                className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <FiMinus size={16} />
              </button>
              <span className="font-medium">{quantity}</span>
              <button 
                onClick={addToCart}
                aria-label="Add One"
                className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <FiPlus size={16} />
              </button>
            </div>
          ) : (
            <button 
              onClick={addToCart}
              aria-label="Add to Cart"
              className="flex items-center justify-center space-x-2 w-full py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
            >
              <FiShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ Prop Validation
CakeCard.propTypes = {
  cake: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CakeCard;
