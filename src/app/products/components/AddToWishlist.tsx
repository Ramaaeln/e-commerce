"use client";

import { useState } from "react";

interface AddToWishlistProps {
  productId: number;
}

export default function AddToWishlist({ productId }: AddToWishlistProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggleWishlist = () => {
    setIsAnimating(true);
    setIsWishlisted(!isWishlisted);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist:`, productId);
  };

  return (
    <button
      onClick={handleToggleWishlist}
      className={`p-2 rounded-full border transition-all duration-200 ${
        isWishlisted 
          ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
          : 'bg-gray-50 border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-red-500'
      } ${isAnimating ? 'scale-110' : 'scale-100'}`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <svg 
        className={`w-5 h-5 transition-all duration-200 ${isAnimating ? 'scale-125' : 'scale-100'}`} 
        fill={isWishlisted ? 'currentColor' : 'none'} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={isWishlisted ? 0 : 2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
    </button>
  );
}