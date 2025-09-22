// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';

// const testimonials = [
//   {
//     name: 'RUMYA MISQUITA',
//     text: 'I stumbled upon AUKERA while diamond shopping. My first purchase? An oval diamond ring that still has me swooning. Went back for stunning earrings, and now I have my sight set on their eternity necklace.',
//     image: '/friends-1.webp'
//   },
//   {
//     name: 'ISHA',
//     text: 'I stumbled upon AUKERA while diamond shopping. My first purchase? An oval diamond ring that still has me swooning. Went back for stunning earrings, and now I have my sight set on their eternity necklace.',
//    image: '/friends-1.webp'
//   },
//   {
//     name: 'NAMITA BALI',
//     text: 'I stumbled upon AUKERA while diamond shopping. My first purchase? An oval diamond ring that still has me swooning. Went back for stunning earrings, and now I have my sight set on their eternity necklace.',
//     image: '/friends-1.webp'
//   },
//   {
//     name: 'PRIYA SHARMA',
//     text: 'I stumbled upon AUKERA while diamond shopping. My first purchase? An oval diamond ring that still has me swooning. Went back for stunning earrings, and now I have my sight set on their eternity necklace.',
//      image: '/friends-1.webp'
//   },
//   {
//     name: 'AARUSHI MEHTA',
//     text: 'I stumbled upon AUKERA while diamond shopping. My first purchase? An oval diamond ring that still has me swooning. Went back for stunning earrings, and now I have my sight set on their eternity necklace.',
//    image: '/friends-1.webp'
//   },
//   {
//     name: 'VANSHIKA RAI',
//     text: 'I stumbled upon AUKERA while diamond shopping. My first purchase? An oval diamond ring that still has me swooning. Went back for stunning earrings, and now I have my sight set on their eternity necklace.',
//     image: '/friends-1.webp'
//   }
// ];

// const Testmonails = () => {
//   return (
// <div className='bg-[#F3F1EC] py-16'>
// <div className="h-auto w-full  px-5 md:px-12 xl:px-32  container mx-auto">

// <div className="text-center mb-10  px-6">
//         <p className="text-xl text-gray-800"> Hear From </p>
//         <h2 className="text-2xl md:text-3xl lg:text-4xl  italic text-gray-900">Our Cherished Clients</h2>
//       </div>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 }
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide
//             key={index}
//             className="min-h-[500px] flex flex-col bg-[#173943] text-white  shadow-lg px-12 py-10"
//           >
//             <div className="text-6xl text-center mb-6 font-serif">“</div>

//             <div className="flex-grow flex flex-col justify-center">
//               <p className="text-xl italic text-center leading-relaxed mb-12">
//                 {testimonial.text}
//               </p>
//             </div>

//             <div className="mt-auto flex flex-col items-center">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white shadow-md"
//               />
//               <span className="text-lg font-semibold tracking-wide">{testimonial.name}</span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
// </div>
//   );
// };

// export default Testmonails;

"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import axios from "axios";
import { baseurl, imgurl } from "./utils/apis";




const Happyclient = () => {
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 20,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);


  const [allTestimonial,setAllTestimonial]=useState()


const fetchTestimonial=async()=>{
  const response = await axios.get(`${baseurl}/testimonial`)
  const data= await response.data;
  if(data.success){
   setAllTestimonial(data.testimonials)
  }
}

useEffect(()=>{
fetchTestimonial()
},[])






  return (
    <div className="bg-[#F3F1EC] border-b border-gray-200">
      <div className="container mx-auto text-black xl:py-5 px-5  md:px-12 xl:px-32 flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-full md:w-[45%] text-left space-y-2">
          <p className="text-xl text-gray-800"> Hear From </p>
          <h2 className="text-2xl md:text-3xl lg:text-6xl  italic text-gray-900">
            Our Cherished Clients
          </h2>
          <p className="text-justify md:text-start">
          
            At Vajra Jewels Bangalore, we take pride in crafting timeless
            masterpieces that our clients cherish. Every piece is a testament to
            our dedication, blending tradition with modern elegance.
          
          </p>
        </div>

        <div className="w-full md:w-[50%] mt-10 md:mt-0 relative text-white">
          <div ref={sliderRef} className="keen-slider">
            {allTestimonial?.map((client, index) => (
              <div key={index} className="keen-slider__slide  py-5">
                <div className="relative  px-4 py-8 lg:p-10  text-center bg-[#000]  rounded-lg max-w-lg mx-auto border-t-1 border-b-1 border-slate-500 lg:h-80 flex flex-col justify-center">
                  <div className="absolute top-[18px] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-yellow-600 text-5xl font-bold lg:text-7xl">
                    “
                  </div>
                  <img
                    src={`${imgurl}/${client.image}`}
                    alt="Client"
                    width={80}
                    height={80}
                    className="rounded-full h-24 w-24  object-cover object-center mb-5 mx-auto"
                  />
                  <h4 className="text-lg font-bold mt-2 uppercase">{client.name}</h4>
                  <p className="text-yellow-500 mb-4 text-sm">{client.position}</p>
                  <p className="italic ">{client.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 w-full lg:flex justify-between px-4  hidden md">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="text-yellow-500 text-6xl cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="text-yellow-500 text-6xl cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happyclient;
