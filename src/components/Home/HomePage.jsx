"use client"; // must be at the top

import About from "../About/About";
import OurBrands from "../OurBrands/OurBrands";
import Footer from "../Footer/Footer";
import MissionVision from "../MissionVision/MissionVision";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

// Import client components normally
import Hero from "../Hero/Hero";
import Partners from "../Partners/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <About />
      <OurBrands />
      <WhyChooseUs />
      <Partners />
      <Footer />
    </>
  );
}
