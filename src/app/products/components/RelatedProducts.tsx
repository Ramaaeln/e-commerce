import Link from "next/link";

interface Product {
  id: number;
  title: string;
  images: string[];
  harga: number;
  rating: number;
  reviewCount: number;
}

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto overpass px-8 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.id}`}
            className="group block"
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                  {product.title}
                </h3>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviewCount})</span>
                </div>
                
                <div className="font-bold text-yellow-600">
                  Rp {product.harga.toLocaleString("id-ID")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/products"
          className="inline-flex items-center px-6 py-3 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors"
        >
          View All Products
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}