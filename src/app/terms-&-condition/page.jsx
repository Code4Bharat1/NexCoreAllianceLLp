"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TermsAndConditions from "@/components/TermsAndCondition/TermsAndCondition";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default page;
