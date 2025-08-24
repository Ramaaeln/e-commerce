"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const about = {
    title: "SHOPIFY",
    description:
      "This website is a fictional e-commerce project that I developed as part of my personal portfolio. The purpose of this project is to practice full-stack web development concepts by showcasing core features commonly found in online shopping platforms.",
  };

  const linkGroups = [
    {
      links: [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  const contacts = [
    { title:'Email',icon: Mail, text: "abdullahramadanelansary@gmail.com" },
    { title:'Phone',icon: Phone, text: "+62 856 9488 6349" },
    { title:'Address',icon: MapPin, text: "Depok, Indonesia" },
  ];

  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ramaelansary/",
      label: "Linkedin",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ramdneln/",
      label: "Instagram",
    },
    { icon: Github, href: "https://github.com/Ramaaeln", label: "Github" },
  ];

  return (
    <footer className="footer inset-shadow-sm  text-white overpass  pt-12 pb-6">
      <div className="flex  justify-between mx-30">
        <div className="flex items-center gap-20 justify-start">
        {about && (
          <div>
            <h1 className="text-5xl ">{about.title}</h1>
          </div>
        )}

        {linkGroups.map((group,idx)=>(
          <div key={idx} className="overpass ">
            <ul className="mt-2 space-y-1">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:underline hover:underline-offset-1 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>

        <div className="flex gap-20 item-start">

          <div>
          <h2 className="text-sm  text-white/50">Contact Us</h2>
          <ul className="mt-2 space-y-1">
            {contacts.map((contact) => (
              <li key={contact.text} className="flex text-sm items-center">
                <contact.icon className="mr-2" />
                <div className="flex flex-col">
                  <strong>{contact.title}</strong>{" "}
                <span>{contact.text}</span>
                </div>
              </li>
            ))}
          </ul>
          </div>

            <div className="text-sm">
              <h1 className="text-sm text-white/50">Social Media</h1>
              {socials.map((social)=>(
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-2 mt-4 text-white hover:underline hover:underline-offset-1 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </Link>
              ))}
            </div>

        </div>

        
      </div>

      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Shopify. All rights reserved.
      </div>
    </footer>
  );
}
