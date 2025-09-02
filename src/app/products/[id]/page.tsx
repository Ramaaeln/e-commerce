import Navigation from "@/components/Navigations/page";
import Link from "next/link";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductSpecs from "../components/ProductSpecs";
import ProductReviews from "../components/ProductReviews";
import RelatedProducts from "../components/RelatedProducts";
import AddToWishlist from "../components/AddToWishlist";

const products = [
  {
    id: 1,
    title: "Baju Atasan Premium",
    key: "tops",
    images: ["/products/products1.jpg", "/products/products2.jpg"],
    harga: 1500000,
    description: "Baju atasan premium dengan bahan cotton combed 30s yang lembut dan breathable. Desain modern dengan cutting yang pas di badan, cocok untuk daily wear maupun casual outing.",
    specifications: {
      material: "100% Cotton Combed 30s",
      sizes: ["S", "M", "L", "XL", "XXL"],
      weight: "200g",
      colors: ["White", "Black", "Navy", "Grey"],
      careInstructions: "Machine wash 30°C, Do not bleach, Iron low heat"
    },
    stock: 15,
    rating: 4.5,
    reviewCount: 89,
    shippingInfo: "Free shipping for orders above Rp 500.000"
  },
  {
    id: 2,
    title: "Celana Bahan Formal",
    key: "bottoms",
    images: ["/products/products3.jpg", "/products/products4.jpg"],
    harga: 1500000,
    description: "Celana bahan formal dengan material poly-rayon blend yang tidak mudah kusut. Perfect fit dengan desain slim fit yang elegan untuk tampilan profesional Anda.",
    specifications: {
      material: "65% Polyester, 35% Rayon",
      sizes: ["28", "30", "32", "34", "36", "38"],
      weight: "300g",
      colors: ["Black", "Navy", "Dark Grey", "Charcoal"],
      careInstructions: "Dry clean recommended, Iron medium heat"
    },
    stock: 8,
    rating: 4.7,
    reviewCount: 124,
    shippingInfo: "Express delivery available (1-2 days)"
  },
  {
    id: 3,
    title: "Kemeja Formal Executive",
    key: "outerwear",
    images: ["/products/products2.jpg", "/products/products1.jpg"],
    harga: 1500000,
    description: "Kemeja formal executive dengan bahan cotton blend premium. Dilengkapi dengan collar yang rapi dan button berkualitas tinggi. Ideal untuk meeting, presentasi, dan acara formal lainnya.",
    specifications: {
      material: "60% Cotton, 40% Polyester",
      sizes: ["S", "M", "L", "XL", "XXL"],
      weight: "250g",
      colors: ["White", "Light Blue", "Light Pink", "Cream"],
      careInstructions: "Machine wash 40°C, Iron high heat, Dry clean safe"
    },
    stock: 22,
    rating: 4.8,
    reviewCount: 156,
    shippingInfo: "Same day delivery available in Jakarta"
  },
  {
    id: 4,
    title: "Kacamata Stylish Pria – Frame Minimalis",
    key: "accessories",
    images: ["/products/products4.jpg", "/products/products3.jpg"],
    harga: 1500000,
    description: "Kacamata stylish dengan frame minimalis berbahan metal ringan. Didesain ergonomis sehingga nyaman dipakai seharian. Dilengkapi lensa anti-UV untuk melindungi mata Anda, cocok untuk gaya casual maupun formal.",
    specifications: {
      material: "Titanium Frame, CR-39 Lens",
      frameSize: "52-18-140mm",
      weight: "18g",
      colors: ["Black", "Silver", "Gold", "Rose Gold"],
      features: "UV400 Protection, Anti-glare coating, Scratch resistant",
      careInstructions: "Clean with microfiber cloth, Store in case"
    },
    stock: 5,
    rating: 4.6,
    reviewCount: 73,
    shippingInfo: "Free shipping nationwide + protective case included"
  },
];

const getRelatedProducts = (currentProductId: number, currentKey: string) => {
  return products
    .filter(p => p.id !== currentProductId && (p.key === currentKey || Math.random() > 0.5))
    .slice(0, 4);
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-8">Product not found</div>;
  }

  const relatedProducts = getRelatedProducts(product.id, product.key);

  return (
    <div>
      <div className="sticky top-0 z-100 ">
        <Navigation />
      </div>
      
      <div className="ml-4 py-4">
        <Link href="/" className="font-bold text-yellow-600 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="font-bold text-yellow-600 hover:underline">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{product.title}</span>
      </div>

      <div className="p-8 flex gap-8 overpass max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <ProductImageGallery images={product.images} title={product.title} />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <AddToWishlist productId={product.id} />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <span className="text-sm text-gray-500">{product.reviewCount} reviews</span>
            <div className={`px-2 py-1 rounded-full text-xs ${
              product.stock > 10 ? 'bg-green-100 text-green-800' : 
              product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'
            }`}>
              {product.stock > 10 ? 'In Stock' : 
               product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-6">
            <p className="text-3xl font-bold text-yellow-600">
              Rp {product.harga.toLocaleString("id-ID")}
            </p>
            <p className="text-sm text-gray-500 mt-1">{product.shippingInfo}</p>
          </div>

          {product.specifications.colors && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Available Colors:</h4>
              <div className="flex gap-2">
                {product.specifications.colors.map((color, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:border-yellow-600 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.specifications.sizes && (
            <div className="mb-6">
              <h4 className="font-medium mb-2">Size:</h4>
              <div className="flex gap-2">
                {product.specifications.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-yellow-600 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 mb-8">
            <button 
              disabled={product.stock === 0}
              className="flex-1 px-8 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <button 
              disabled={product.stock === 0}
              className="px-8 py-3 bg-yellow-700 text-white font-medium rounded-lg hover:bg-yellow-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Return Policy</h4>
            <p className="text-sm text-gray-600">
              30-day return policy. Items must be unused and in original packaging.
            </p>
          </div>
        </div>
      </div>

      <ProductSpecs specifications={product.specifications} />

      <ProductReviews 
        productId={product.id} 
        rating={product.rating}
        reviewCount={product.reviewCount}
      />

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}