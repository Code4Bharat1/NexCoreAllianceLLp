"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OurBrands from "@/components/OurBrands/OurBrands";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <OurBrands />
      <Footer />
    </div>
  );
};

export default page;
