import React from "react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";
import WhyChoose from "./WhyChoose";
import StoreLoction from "./StoreLoction";
import Faq from "../components/Faq";

export default function Aboutus() {
  return (
    <>
      <div className="">
      
        <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] h-[25vh] md:h-[35vh]   xl:h-[40vh] flex flex-col justify-center items-center">


            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative text-center px-6 md:px-16 xl:px-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase"> 
              about Us
              </h1>
 
              <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
                <Link href="/" className="hover:text-gray-300 transition">
                  Home 
                </Link>
                <FaGreaterThan className="text-xs opacity-70" />
                <span className="font-medium"> about Us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="About-us bg-[#F3F1EC] ">
          <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-24 justify-between py-10 lg:py-16">
            <div className="flex flex-col lg:flex-row relative  justify-betweens gap-x-5 lg:gap-x-10">
              <div className="w-full lg:w-[50%] relative">
                <img
                  src="/img/about/abouthero1.webp"
                  alt="about"
                  className="h-[45vh] md:h-[55vh] w-full lg:h-full "
                />
                <img
                  src="/img/about/abouthero2.webp"
                  alt="about"
                  className="absolute hidden lg:block top-[40%] -right-20 w-[40%] h-[50%]"
                />
              </div>
              <div className="w-full flex flex-col  justify-between py-5 lg:py-10  relative  lg:w-[50%]">
                <h1 className="text-center md:text-start text-3xl self-end md:text-4xl lg:text-5xl xl:text-6xl italic   text-gray-900 ">
                  It's All In The Feeling Diamond Jewellery Made To Delight
                </h1>
                <div className=" flex justify-end">
                  <p className="lg:w-[80%] mt-4 lg:mt-0 text-base lg:text-lg text-justify">
                    We believe diamonds should feel just as good as they look.
                    That’s why our lab-grown diamonds are crafted to offer
                    unmatched brilliance without compromise. With the IGI
                    certification, every piece is a reflection of beauty,
                    purity, and joy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <WhyChoose />

          <div className="relative px-5 md:px-12 xl:px-32 py-16 lg:h-[80vh] bg-[url('/img/heroSection/1swiper.webp')] bg-red-[400] flex items-center ">
            <div className="flex flex-col gap-y-10 lg:flex-row justify-between items-center text-white relative z-10 ">
            <div className="  justify-center gap-x-4 hidden md:flex lg:hidden ">
            <img src="/img/about/about.webp" alt="about" className="w-full md:max-w-[45%] lg:max-w-[30%]" />
            <img src="/img/about/aboutnew.webp" alt="about" className="w-full md:max-w-[45%] lg:max-w-[30%]" />
            </div>
            <img src="/img/about/about.webp" alt="" className="w-full md:hidden lg:block md:max-w-[45%] lg:max-w-[30%]" />


              <div className="w-full lg:w-[40%]">
                <h5 className="text-3xl md:text-4xl xl:text-5xl capitalize font-bold italic">Sparkle with Purpose</h5>
                <p className="text-base text-justify lg:text-lg mt-3 md:mt-5">
                Every Vajra Jewels purchase contributes to empowering women through education and skill development. More than just fine jewelry, it's a symbol of strength, resilience, and a brighter future. Wear your elegance with purpose and be a part of the change.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* visit store  */}

          <div className="px-5 md:px-12 xl:px-32 pt-5 pb-10 md:py-10  xl:py-16 text-center">
            <div className="flex flex-col items-center gap-y-4">
              <h6 className="text-2xl md:text-3xl lg:text-5xl italic font-semibold text-gray-800">
                Visit Our Store
              </h6>
              <p className="text-gray-600 max-w-2xl text-center">
                Choosing diamond jewelry is a cherished experience. Visit our
                Bengaluru store and find the perfect piece that resonates with
                your elegance.
              </p>

              <button className="mt-6 bg-[#13353F] text-white hover:bg-[#13313f] hover:text-black border border-black duration-300 transition-all text-lg px-6 py-2 shadow-md hover">
                Check Store Location
              </button>
            </div>

            <StoreLoction />
          </div>

          <Faq />
        </div>
      </div>
    </>
  );
}
