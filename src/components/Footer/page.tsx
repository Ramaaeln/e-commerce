"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const about = {
    title: "SHOPIFY",
    description:
      "This website is a fictional e-commerce project that I developed as part of my personal portfolio. The purpose of this project is to practice full-stack web development concepts by showcasing core features commonly found in online shopping platforms.",
  };

  const linkGroups = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Customer Service",
      links: [{ name: "Coming Soon", href: "#" }],
    },
  ];

  const contacts = [
    { icon: Mail, text: "abdullahramadanelansary@gmail.com" },
    { icon: Phone, text: "+62 856 9488 6349" },
    { icon: MapPin, text: "Depok, Indonesia" },
  ];

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
  ];

  return (
    <footer className="bg-yellow-600 text-gray-300 pt-12 pb-6" >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h1 className="text-white text-2xl font-bold mb-4">{about.title}</h1>
          <p className="text-sm leading-relaxed">{about.description}</p>
        </div>

        {/* Link Groups */}
        {linkGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-white font-semibold mb-4">{group.title}</h2>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            {contacts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon size={18} /> {text}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-yellow-700 mt-10 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Shopify. All rights reserved.
      </div>
    </footer>
  );
}
