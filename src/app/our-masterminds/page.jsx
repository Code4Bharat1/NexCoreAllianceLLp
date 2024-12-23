"use client";

import React from "react";
import Directors from "@/components/Directors/Directors";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Directors />
      <Footer />
    </div>
  );
};

export default page;
