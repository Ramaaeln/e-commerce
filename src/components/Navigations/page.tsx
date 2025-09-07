"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Navigation({ className }: { className?: string }) {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleHashClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.split("#")[1];
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#" + id);
    }
  };

  const navItems = [
    { href: "/", label: "Home", onClick: handleHomeClick },
    { href: "/products", label: "Products" },
    {
      href: "/#about",
      label: "About Us",
      onClick: (e: MouseEvent<HTMLAnchorElement>) =>
        handleHashClick(e, "/#about"),
    },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`flex flex-col justify-between ${className}  w-full sticky top-0 z-10 items-center transition-colors duration-300 ${
        scroll
          ? "bg-white/20 backdrop-blur-sm shadow-lg text-black/70 rounded-b-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="bg-yellow-600  w-full overpass ">
        <div className="mx-2 items-center flex justify-between">
          <div>
            <span>To purchase clothing here, you need an account.</span>
          </div>
          <div className="flex gap-2 justify-end p-1">
            <Link href="/auth" className="p-1">Login</Link>
            <Link href="/auth" className="bg-white text-yellow-600 p-1 rounded">Register</Link>
          </div>
        </div>
      </div>
      <div className="flex  p-4 justify-between w-full">
        <div>
          <h1 className="text-3xl font-[var(--font-header)] uppercase">
            Shopify
          </h1>
        </div>
        <div className="flex gap-3 uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={item.onClick}
              scroll={false}
              className={`transition-colors ${
                pathname === item.href
                  ? "font-bold border-b-2 border-black text-yellow-600"
                  : "hover:text-yellow-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
