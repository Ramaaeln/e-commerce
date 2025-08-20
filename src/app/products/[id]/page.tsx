import Link from "next/link";

interface ProductDetailProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
    const datas = [
      { id: 1, name: "Product 1", src: "/products/products1.jpg", description: "This is product 1", price: "$10.00" },
      { id: 2, name: "Product 2", src: "/products/products2.jpg", description: "This is product 2", price: "$20.00" },
      { id: 3, name: "Product 3", src: "/products/products3.jpg", description: "This is product 3", price: "$30.00" },
      { id: 4, name: "Product 4", src: "/products/products4.jpg", description: "This is product 4", price: "$40.00" },
    ];
  
    const product = datas.find((item) => item.id === Number(params.id));
  
    if (!product) {
      return(
      <div>
        <Link href='/products'>Back to Products</Link>
          <h1 className="text-center text-2xl mt-10">Product not found</h1>
      </div>
      )
    }
  
    return (
      <div className="  mt-10">
        <Link href='/'>Back</Link>
        <img
          src={product.src}
          alt={product.name}
          className="w-96 h-96 object-cover rounded-md shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-semibold mt-4">{product.price}</p>
      </div>
    );
  }
  