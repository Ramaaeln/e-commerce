
import { Suspense } from "react";
import ProductsContent from "./ProductsContent ";
import Navigation from "@/components/Navigations/page";

export default function ProductsPage() {
  return (
    <div>
      <Navigation/>
      <div>
        <img src="/home/home6.png" className="w-full h-84 object-cover object-[center_20%] -mt-26" alt="" />
      </div>

      <Suspense fallback={<div className="p-4">Loading products...</div>}>
        <ProductsContent/>
      </Suspense>
    </div>
  );
}