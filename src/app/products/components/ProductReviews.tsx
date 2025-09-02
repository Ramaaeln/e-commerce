"use client";

import { useState } from "react";

interface ProductReviewsProps {
  productId: number;
  rating: number;
  reviewCount: number;
}

const dummyReviews = [
  {
    id: 1,
    name: "Ucup",
    rating: 5,
    date: "2024-01-15",
    comment: "Kualitas sangat bagus, bahan premium dan nyaman dipakai. Pengiriman cepat dan packaging rapi.",
    verified: true
  },
  {
    id: 2,
    name: "Joko",
    rating: 4,
    date: "2024-01-10",
    comment: "Desain minimalis yang saya cari. Ukuran pas di wajah, tapi mungkin agak berat untuk penggunaan lama.",
    verified: true
  },
  {
    id: 3,
    name: "Saha",
    rating: 5,
    date: "2024-01-08",
    comment: "Sangat puas dengan pembelian ini. Material berkualitas dan terlihat premium. Recommended!",
    verified: false
  },
  {
    id: 4,
    name: "Asep",
    rating: 4,
    date: "2024-01-05",
    comment: "Bagus, sesuai dengan deskripsi. Hanya saja delivery agak lama. Overall satisfied dengan produknya.",
    verified: true
  }
];

const ratingDistribution = [
  { stars: 5, count: 45, percentage: 62 },
  { stars: 4, count: 20, percentage: 27 },
  { stars: 3, count: 6, percentage: 8 },
  { stars: 2, count: 2, percentage: 3 },
  { stars: 1, count: 0, percentage: 0 }
];

export default function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? dummyReviews : dummyReviews.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-8 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl font-bold">{rating}</div>
            <div>
              <div className="flex text-yellow-400 text-xl">
                {"★".repeat(Math.floor(rating))}
                {"☆".repeat(5 - Math.floor(rating))}
              </div>
              <p className="text-sm text-gray-600">Based on {reviewCount} reviews</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Rating Breakdown</h3>
          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="text-sm w-8">{item.stars}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{review.name}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 ml-13">{review.comment}</p>
          </div>
        ))}
      </div>

      {dummyReviews.length > 3 && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="px-6 py-2 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors"
          >
            {showAllReviews ? 'Show Less Reviews' : 'Show All Reviews'}
          </button>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Share Your Experience</h3>
        <p className="text-gray-600 mb-4">
          Help other customers by sharing your thoughts about this product.
        </p>
        <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  );
}