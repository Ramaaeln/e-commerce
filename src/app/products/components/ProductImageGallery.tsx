"use client";

import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

export default function ProductImageGallery({ 
  images, 
  title 
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-[400px] h-[400px] overflow-hidden rounded-lg">
        <img
          src={images[selectedImage]}
          alt={`${title} - Image ${selectedImage + 1}`}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      
      <div className="flex gap-2 max-w-[400px] overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              selectedImage === index
                ? "border-yellow-600 ring-2 ring-yellow-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <img
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}