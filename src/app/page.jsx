"use client";
// src/app/page.jsx
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import OurBrands from "../components/OurBrands/OurBrands";
import Footer from "../components/Footer/Footer";
import MissionVision from "@/components/MissionVision/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Partners from "@/components/Partners/Partners";

export default function Home() {
  return (
    <div>
      <Hero />
      <MissionVision />
      <About />
      <OurBrands />
      <WhyChooseUs />
      <Partners />
      <Footer />
    </div>
  );
}
