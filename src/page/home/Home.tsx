import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Products />
      <Testimonials />
      {/* Additional sections can be added here */}
    </div>
  );
}
