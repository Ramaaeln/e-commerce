import Hero from "@/components/Hero/page";
import Navigation from "@/components/Navigations/page";
import Products from "@/components/ProductsCompo/page";
import About from "@/components/About/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Footer/>
    </div>
  );
}
