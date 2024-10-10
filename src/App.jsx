import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import Brands from "./components/Brands/Brands";
import InquiryForm from "./components/Pages/InquiryForm/InquiryForm";
import BannerSlider from "./components/Banner/BannerSlider";

const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden">
        <div className="relative overflow-hidden">
          <Hero />
          {/* <BannerSlider /> */}
        </div>
        <Services />
        {/* <Banner /> */}
        <Brands />
        <InquiryForm />
        <Gallery />
        {/* <Testimonial /> */}
      </div>
    </div>
  );
};

export default App;
