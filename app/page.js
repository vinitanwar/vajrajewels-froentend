// "use client";
import React from "react";

import HeroSection from "./components/HeroSection";
import MarqueeText from "./components/MarqueeText";
import JewellerySection from "./components/JewellerySection";
import CategoriesJwellery from "./components/CategoriesJwellery";
import Beauty from "./components/Beauty";
import Blogs from "./components/Blogs";
import WhyChoose from "./components/WhyChoose";
import Testmonails from "./components/Testmonails";
import Faq from "./components/Faq";
import Appointment from "./components/Appointment";
import Banner from "./components/Banner";
import HoteCategorries from "./components/HoteCategorries";
import NewCategoriesJwellery from "./components/NewCategoriesJwellery";
import NewBanner from "./components/NewBanner";
import BottomfixLinks from "./components/BottomfixLinks";
// import AOS from "aos";
// import "aos/dist/aos.css";

export const metadata = {
  title: "Vajra Jewels - Exquisite Jewelry Collection",
  description: "Explore Vajra Jewels for elegant and timeless jewelry pieces crafted with precision and luxury.",
};

export default function page() {
  
  return (
    <>
      <HeroSection />
      <NewCategoriesJwellery/>
       <JewellerySection />
      <MarqueeText /> 
     

      <CategoriesJwellery />
       {/* <WhyChoose /> */}
       <NewBanner/>
      <Banner/>

      <HoteCategorries/>

       <Appointment/>

     <Testmonails />

      <Blogs />
      <Faq/>
      <Beauty />

      <BottomfixLinks/>

    </>
  );
}
