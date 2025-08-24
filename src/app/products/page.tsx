"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import NavigationProducts from "./components/NavigationProducts";
import Navigation from "@/components/Navigations/page";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (categoryFromURL) {
      setActiveCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const products = [
    { id: 1, title: "Baju Atasan", key: "tops", src: "/products/products1.jpg", harga: 1500000 },
    { id: 2, title: "Celana Bahan", key: "bottoms", src: "/products/products2.jpg", harga: 1500000 },
    { id: 3, title: "Kemeja", key: "outerwear", src: "/products/products3.jpg", harga: 1500000 },
    { id: 4, title: "Kacamata", key: "accessories", src: "/products/products4.jpg", harga: 1500000 },
  ];
  
  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.key === activeCategory);

  return (
    <div>
      <div className="bg-gray-800">
      <Navigation/>
      </div>
      <div className="ml-4">
        <Link href="/" className="font-bold text-yellow-600">Home</Link>
        <span> / Products</span>
      </div>

      <NavigationProducts activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <div className="flex gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg">
            <img src={product.src} alt={product.title} height={300} width={300} className="rounded-t-lg object-cover" />
            <div className="p-2">
              <h3 className="font-semibold overpass">{product.title}</h3>
              <p className="text-yellow-600 overpass font-bold">Rp {product.harga.toLocaleString()}</p>
              <Link href={`/products/${product.id}`} className="">
                <button className="mt-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-600/80 cursor-pointer text-white rounded">
                  Discovery More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}