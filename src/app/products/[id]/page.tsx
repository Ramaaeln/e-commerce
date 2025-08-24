import Navigation from "@/components/Navigations/page";
import Link from "next/link";

// data dummy (nanti bisa ganti fetch API/DB)
const products = [
  {
    id: 1,
    title: "Baju Atasan",
    key: "tops",
    src: "/products/products1.jpg",
    harga: 1500000,
    description: "Baju atasan yang nyaman.",
  },
  {
    id: 2,
    title: "Celana Bahan",
    key: "bottoms",
    src: "/products/products3.jpg",
    harga: 1500000,
    description: "Celana bahan yang stylish.",
  },
  {
    id: 3,
    title: "Kemeja",
    key: "outerwear",
    src: "/products/products2.jpg",
    harga: 1500000,
    description: "Kemeja formal untuk acara resmi.",
  },
  {
    id: 4,
    title: "Kacamata",
    key: "accessories",
    src: "/products/products4.jpg",
    harga: 1500000,
    description: "Kacamata trendy untuk melengkapi gaya.",
  },
];

// ✅ Next.js 15 App Router - params is now a Promise
export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Await the params Promise
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-8">Product not found</div>;
  }

  return (
    <div>
      <div className="bg-yellow-600">
        <Navigation />
      </div>

      <div className="ml-4">
        <Link href="/" className="font-bold text-yellow-600">
          Home
        </Link>
        <span> / </span>
        <Link href="/products" className="font-bold text-yellow-600">
          Products
        </Link>
        <span> / {product.title}</span>
      </div>

      <div className="p-8 flex gap-6 overpass">
        <img
          src={product.src}
          alt={product.title}
          className="w-[400px] h-[400px] object-cover rounded"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2">{product.description}</p>
          <p className="mt-4 text-yellow-600 font-bold text-xl">
            Rp {product.harga.toLocaleString("id-ID")}
          </p>

          <button className="mt-4 px-6 py-2 overpass uppercase w-64 bg-yellow-600 text-white rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}