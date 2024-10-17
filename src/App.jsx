import React from "react";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import Brands from "./components/Brands/Brands";
import InquiryForm from "./components/InquiryForm/InquiryForm";
// import BannerSlider from "./components/Banner/BannerSlider";
import Explore from "./components/Explore/Explore";
import Card from "./components/Explore/Card";
const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <div className="relative overflow-hidden">
        <Hero />
        {/* <BannerSlider /> */}
      </div>
      <Services />
      {/* <Banner /> */}
      <Brands />
      {/* <Explore /> */}
      <Card />
      <InquiryForm />
      <Gallery />
      {/* <Testimonial /> */}
    </div>
  );
};

export default App;
