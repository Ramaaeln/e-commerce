"use client";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const datas = [
    {
      id: 1,
      src: "/home/home3.png",
      height: 200,
      width: 1910,
      className: "-my-82",
    },
    {
      id: 2,
      src: "/home/home4.png",
      height: 200,
      width: 1910,
      className: "-my-82 ",
      className1:'translate-y-50',
    },
    {
      id: 3,
      src: "/home/home6.png",
      height: 200,
      width: 1910,
      className: "-my-82",
      className1:'translate-y-20',
    },
  ];
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scroll = (index) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.offsetWidth * index,
        behavior: "smooth",
      });
    }
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % datas.length;
      scroll(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const goPrev = () => {
    const prev = current === 0 ? datas.length - 1 : current - 1;
    scroll(prev);
  };
  const goNext = () => {
    const nextIndex = (current + 1) % datas.length;
    scroll(nextIndex);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-x-hidden  flex scroll-smooth overflow-hidden object-cover ${
        datas[current]?.className || ""
      }`}
    >
      {datas.map((data) => (
        <img
          key={data.id}
          src={data.src}
          alt=""
          className={` w-full flex-shrink-0 object-cover ${data.className1} `}
          height={data.height}
          width={data.width}
        />
      ))}
      
    </div>
  );
}
