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
      stack: [
        "/icons/node.svg",
        "/icons/typescript.svg",
        "/icons/nextdotjs.svg",
        "/icons/react.svg",
        "/icons/go.svg",
        "/icons/tailwind.svg",
      ],
    },
    {
      id: 2,
      title: "About Me",
      description:
        "I am Rama, an Informatics Engineering student with a strong interest in full-stack web development. Through this project, I aim to demonstrate my ability to build modern web applications, implement user authentication systems, and design simple yet functional UI/UX.",
    },
  ];

  return (
    <div id="about" className="pt-20 mt-50 mb-200 text-lg  ">
      <div className="bg-yellow-800/50  z-1 text-white text-xl  absolute w-full h-136 ">
        <div className="flex justify-around my-10 text-justify ">
          {datas.map((data) => (
            <div
              key={data.id}
              className="w-1/3 p-4 shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-300  rounded-sm bg-white/20"
            >
              <h1 className="text-2xl text-center uppercase font-semibold">{data.title}</h1>
              <p className="leading-relaxed text-sm">{data.description}</p>
              {data.headline && <h2 className="mt-1">{data.headline}</h2>}
              {data.features && (
                <ul className="list-none pl-5">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <img
                        src="/icons/checklist.svg"
                        height={20}
                        width={20}
                        alt=""
                      />
                      <span className="text-sm">{feature}</span> <br />
                    </li>
                  ))}
                </ul>
              )}
              {data.headline1 && <h2 className="mt-1">{data.headline1}</h2>}
              {data.stack && (
                <ul className="flex gap-2 list-none pl-5">
                  {data.stack.map((item, index) => (
                    <li key={index} className="flex  items-center gap-2">
                      {item.endsWith(".svg") ||
                      item.endsWith(".png") ||
                      item.endsWith(".jpg") ? (
                        <img
                          src={item}
                          alt={`stack-${index}`}
                          className=" h-8 w-8 transition-transform hover:scale-110 hover:drop-shadow-[0_0_12px_#38bdf8]"
                        />
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <img
        src="/home/home5.jpg"
        className="z-0 absolute y-20 w-full h-136 object-cover object-[top] "
        alt=""
      />
    </div>
  );
}
