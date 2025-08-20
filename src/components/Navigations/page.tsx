"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
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

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  // handler umum untuk link dengan hash (#)
  const handleHashClick = (e, href) => {
    e.preventDefault();
    const id = href.split("#")[1];
    if (pathname === "/") {
      // kalau sudah di home langsung scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // kalau masih di luar home → push ke /#id
      router.push("/#" + id);
    }
  };

  const navItems = [
    { href: "/", label: "Home", onClick: handleHomeClick },
    { href: "/products", label: "Products" },
    { href: "/#about", label: "About Us", onClick: (e) => handleHashClick(e, "/#about") },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`flex justify-between p-4 w-full sticky top-0 z-10 items-center transition-colors duration-300 ${
        scroll
          ? "bg-white/20 backdrop-blur-sm shadow-lg text-black/70 rounded-b-sm"
          : "bg-transparent text-white"
      }`}
    >
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
            scroll={false} // penting biar nggak auto reset scroll
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
    </nav>
  );
}
