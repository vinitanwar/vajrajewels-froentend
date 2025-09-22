"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";
import axios from "axios";
import { baseurl, imgurl } from "./utils/apis";

export default function HeroSection() {
 

const [swiperData,setSwiperData]=useState()




const GetBanner=async()=>{
const response = await axios.get(`${baseurl}/getbanner`);
const data = await response.data;
if(data.success){
setSwiperData(data.banners)
}

}

useEffect(()=>{GetBanner()},[])


  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination,Autoplay]}
        className="mySwiper relative"
      >
        {swiperData?.map((elm, index) => (
          <SwiperSlide key={index} className="">
          <div className="h-[45vh] md:h-[57vh] xl:h-[68vh] 2xl:h-screen w-full">
  <img 
    src={`${imgurl}/${elm.banner}`} 
    alt="banner" 
    className="w-full h-full object-cover object-center md:object-center" 
  />
</div>

          </SwiperSlide>
        ))}
      </Swiper>


      
    </>
  );
}
