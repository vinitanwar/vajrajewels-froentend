"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGreaterThan, FaQ } from "react-icons/fa6";
import Blogs from "./Blogs";
import Faq from "../components/Faq";
import NewBanner from "./NewBanner";
import axios from "axios";
import { baseurl, imgurl } from "./utils/apis";

 





function formatDate(timestamp) {
  // Convert timestamp to Date object (replace space with T for ISO format)
  const date = new Date(timestamp);

  // Format options
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Format in British style (Day Month Year)
  let formatted = date.toLocaleDateString("en-GB", options);

  // Add comma before year
  formatted = formatted.replace(/(\d{4})$/, ", $1");

  return formatted;
}



export default function BlogPage() {
   
  const [blogList,setblogList]=useState()


const getAllblog=async()=>{
  const response = await axios.get(`${baseurl}/blogs`);
  const data = await response.data;
  if(data.success){
setblogList(data.blogs)
  }
};




useEffect(()=>{
  getAllblog()
},[])






  return (
    <>
      <div className="">
        <div className="relative text-white">
          <div
            className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center"
            style={{ backgroundImage: "" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative text-center px-6 md:px-16 xl:px-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase">
                Blogs
              </h1>

              <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
                <Link href="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
                <FaGreaterThan className="text-xs opacity-70" />
                <span className="font-medium">Blogs </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F3F1EC]">
          <div className="py-10 px-5 md:px-12 xl:px-32 ">
            <div className="text-center mb-10  px-6">
              <p className="text-xl text-gray-800">Our Blogs </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl  italic text-gray-900">
                Vajra Jewels latest blogs
              </h2>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 container mx-auto">
              {blogList?.map((blog) => (
                <Link
                  href={`/blogs/${blog.slug}`}
                  key={blog.id}
                >
                  <div className="rounded  overflow-hidden group cursor-pointer">
                    <img
                      src={`${imgurl}/${blog.image}`}
                      alt={blog.title}
                      className="w-full h-60 object-cover group-hover:scale-110 duration-200 "
                    />
                    <div className="p-5">
                      {/* <h3 className="text-xl font-semibold mb-2">{blog.title}</h3> */}
                      <p className="text-gray-600">{blog.short_des}</p>
                      <p className="text-gray-400">{formatDate(blog?.created_at)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <NewBanner />
        <Faq />
      </div>
    </>
  );
}
