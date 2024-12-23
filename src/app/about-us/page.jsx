"use client";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default page;
