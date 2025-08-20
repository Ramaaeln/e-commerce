import Hero from "@/components/Hero/page";
import Navigation from "@/components/Navigations/page";
import Products from "@/components/Products/page";
import About from "@/components/About/page";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <Products/>
      <About/>
    </div>
  );
}
