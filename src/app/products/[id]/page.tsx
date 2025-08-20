import Link from "next/link";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetail({ params }: ProductDetailPageProps) {
  const { id } = await params;

  const datas = [
    { id: 1, name: "Product 1", src: "/products/products1.jpg", description: "This is product 1", price: "$10.00" },
    { id: 2, name: "Product 2", src: "/products/products2.jpg", description: "This is product 2", price: "$20.00" },
    { id: 3, name: "Product 3", src: "/products/products3.jpg", description: "This is product 3", price: "$30.00" },
  ];

  const product = datas.find((item) => item.id.toString() === id);

  if (!product) {
    return <p className="text-red-500">Product not found</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.src} alt={product.name} className="w-64 h-64 object-cover my-4" />
      <p>{product.description}</p>
      <p className="text-lg font-semibold">{product.price}</p>
      <Link href="/products" className="text-blue-500 underline mt-4 block">
        Back to Products
      </Link>
    </div>
  );
}