import Link from "next/link";

export default function About() {
  const datas = [
    {
      id: 1,
      title: "About Projects",
      description:
        "This website is a fictional e-commerce project that I developed as part of my personal portfolio. The purpose of this project is to practice full-stack web development concepts by showcasing core features commonly found in online shopping platforms.",
      headline: "Features",
      features: [
        "User authentication (login & register)",
        "Shopping cart system and simulated checkout",
        "Simple admin dashboard for product management",
        "Responsive design using TailwindCSS",
      ],
      headline1: "Tech Stack",
      stack: ["Frontend:", "Backend:", "Database:"],
    },
    {
      id: 2,
      title: "About Me",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid sed ipsa dolore, minima at deleniti qui quibusdam vero veritatis voluptatibus magnam id magni maiores perspiciatis cupiditate vitae, amet autem.",
    },
  ];

  return (
    <div id="about" className="pt-20 pb-20  h-screen ">
      <div className="bg-yellow-800/50  z-1 text-white text-xl  absolute w-full h-1/2 ">
        <div className="flex justify-around  text-justify">
          {datas.map((data) => (
            <div key={data.id} className="w-1/3">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              {data.headline && <h2 className="mt-1">{data.headline}</h2>}
              {data.features && (
                <ul className="list-disc pl-5">
                  {data.features.map((feature, index) => (
                    <div className="flex gap-3">
                      <img src="/icons/checklist.svg" height={20} width={20} alt="" />
                      <span key={index}>{feature}</span> <br />
                    </div>
                  ))}
                </ul>

              )}
              {data.headline1 && <h2 className="mt-1">{data.headline1}</h2>}
              {data.stack && (
                <ul className="list-disc pl-5">
                  {data.stack.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <img
        src="/home/home5.jpg"
        className="z-0 absolute y-20 w-full h-1/2 object-cover object-[top] "
        alt=""
      />
    </div>
  );
}
