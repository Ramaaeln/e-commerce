import Link from "next/link";

export default function Products() {
  const datas = [
    {
      id: 1,
      name: "Tops",
      src: "/products/products1.jpg",
      src1: "/products/products3.jpg",
      description: "This is product 1",
    },
    {
      id: 2,
      name: "Bottoms",
      src: "/products/products2.jpg",
      src1: "/products/products4.jpg",
      description: "This is product 2",
    },
    {
      id: 3,
      name: "Outerwear",
      src: "/products/products3.jpg",
      src1: "/products/products1.jpg",
      description: "This is product 3",
    },
    {
      id: 4,
      name: "Accessories",
      src: "/products/products4.jpg",
      src1: "/products/products2.jpg",
      description: "This is product 4",
    },
    {
      id: 5,
      name: "Other",
      src: "/products/products4.jpg",
      src1: "/products/products2.jpg",
      description: "This is product 4",
    },
  ];
  return (
    <div className="mt-82 pt-8">
      <h1 className="text-5xl text-black/70  text-center ml-10 junge font-semibold">
        it`s your styles, find your clothes styles in here
      </h1>
      <p className="mx-10 text-center">
        Clothing is your story. Our curated collection inspires you to
        experiment with timeless classics and bold new trends. Start building a
        wardrobe that's authentically you.
      </p>

      <div className="grid grid-cols-5 gap-8 justify-around mx-12 mt-8">
        {datas.map((data) => (
          <Link href=''
            className="bg-white rounded-sm shadow-xl border border-black/50 group"
            key={data.id}
          >
            <div className="relative w-full h-96 overflow-hidden">
              <img
                src={data.src}
                alt={data.name}
                className="w-full h-full object-cover object-[center_1%] z-0 absolute top-0 left-0 rounded-sm transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={data.src1}
                alt={data.name}
                className="w-full h-full object-cover object-[center_1%] z-0 absolute top-0 left-0 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div className="w-[334px]  rounded-b-sm flex flex-col z-10 p-1 -mt-15 absolute  duration-300    group-hover:opacity-0">
              <h2 className="text-xl text-white font-bold">{data.name}</h2>
            </div>
            <div className="w-[334px]  rounded-b-sm flex flex-col z-10 p-1 -mt-15 absolute  bg-white/50 backdrop-blur-xs duration-300   opacity-0 group-hover:opacity-100">
              <h2 className="text-xl font-bold">{data.name}</h2>
              <p className="text-gray-600">{data.description}</p>                
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
