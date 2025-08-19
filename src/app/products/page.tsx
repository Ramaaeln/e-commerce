import Navigation from "@/components/Navigations/page";
import Products from "@/components/Products/page";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
        <Navigation />
        <div>
          <img src="/home/home6.png" className="w-full h-84 object-cover object-[center_20%] -mt-26" alt="" />
        </div>
        <div className="ml-4">
          <Link href='/' className="font-bold text-black/50">Home</Link>{''}<span className="cursor-pointer">/Products</span>
        </div>
    </div>
  );
}
