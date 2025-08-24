"use client";
import { useEffect, useState } from "react";

type NavigationProductsProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export default function NavigationProducts({ activeCategory, setActiveCategory }: NavigationProductsProps) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { key: "all", label: "All Products" },
    { key: "tops", label: "Tops" },
    { key: "bottoms", label: "Bottoms" },
    { key: "outerwear", label: "Outerwear" },
    { key: "accessories", label: "Accessories" },
  ];

  return (
    <div
      className={`gap-5 sticky top-17 rounded-b-sm p-4 flex items-center overpass  transition-colors duration-300 ${
        scroll ? "bg-gray-100/80 backdrop-blur-sm" : "bg-transparent text-black"
      }`}
    >
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => setActiveCategory(cat.key)}
          className={`hover:text-yellow-600  ${
            activeCategory === cat.key ? "text-yellow-600 font-bold" : ""
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
