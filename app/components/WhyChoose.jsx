"use client"; // Ensures it runs on the client in Next.js App Router

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Card data array
const whyChooseData = [
  {
    id: 1,
    title: "Exquisite Craftsmanship",
    description: "Each piece is meticulously handcrafted by expert artisans, ensuring elegance and perfection.",
    image: "/img/whychoose/1.webp",
  },
  { 
    id: 2,
    title: "Ethically Sourced Diamonds",
    description: "We use conflict-free, ethically sourced diamonds that meet the highest industry standards.",
    image: "/img/whychoose/2.webp",
  },
  {
    id: 3,
    title: "Timeless Elegance",
    description: "Our jewelry embodies timeless beauty and sophistication, perfect for every occasion.",
    image: "/img/whychoose/3.webp",
  },
  {
    id: 4,
    title: "Uncompromising Quality",
    description: "We ensure premium quality with certified gemstones and meticulous quality checks.",
    image: "/img/whychoose/4.webp",
  },
  {
    id: 5,
    title: "Bespoke Customization",
    description: "Personalize your jewelry with custom designs, engravings, and gemstone selections.",
    image: "/img/whychoose/5.webp",
  },
  {
    id: 6,
    title: "Sustainability & Responsibility",
    description: "Committed to eco-friendly practices and responsible sourcing for a better future.",
    image: "/img/whychoose/6.webp",
  },
];

const WhyChoose = () => {
  return (
    <div className="w-full bg-[#F3F1EC] pb-10 lg:py-16 ">
      <div className="text-center mb-10  px-6">
        <p className="text-xl text-gray-800">Why Choose</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl  italic text-gray-900">Vajra Jewels Diamond Jewellery</h2>
      </div>

   <div className="container mx-auto px-5 md:px-12 xl:px-32">
   <Swiper
    loop={true}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Default for mobile
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Large screens
        }}
        autoplay={{ delay: 2500 }}
        className="max-w-7xl mx-auto"
      >
        {whyChooseData.map((item) => (
          <SwiperSlide key={item.id} className="lg:p-4">
              <div className="w-full h-80 lg:h-96 flex flex-col  group rounded-lg shadow-md overflow-hidden">
                {/* Image Section */}
                <div className="h-[250px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Text Content */} 
                <div className="h-1/2 p-4 flex flex-col justify-center">
                  <h3 className="text-xl lg:text-2xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
   </div>
    </div>
  );
};

export default WhyChoose;
