"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { baseurl, imgurl } from "./utils/apis";



function formatDate(timestamp) {
  // Convert timestamp to Date object (replace space with T for ISO format)
  const date = new Date(timestamp.replace(" ", "T"));

  // Format options
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Format in British style (Day Month Year)
  let formatted = date.toLocaleDateString("en-GB", options);

  // Add comma before year
  formatted = formatted.replace(/(\d{4})$/, ", $1");

  return formatted;
}



const Blogs = () => {
  const blogList = [
    {
      id: 1,
      title: "The Beauty of Natural Diamonds",
      description:
        "Discover why natural diamonds are treasured for their timeless beauty and brilliance.",
      image:
        "/img/blogs/1.webp",
      date: "26 March,2025",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Diamond",
      description: "A guide to selecting the perfect diamond for any occasion.",
      image:
      "/img/blogs/2.webp",
      date: "26 March,2025",
    },

    {
      id: 3,
      title: "Diamond Jewelry Trends 2024",
      description:
        "Explore the latest trends in diamond jewelry this year. and best ",
      image:
      "/img/blogs/3.webp",
      date: "26 March,2025",
    },
  ];
const [allBlog,setAllblog]=useState()

const fetchBlog=async()=>{
  const response = await axios.get(`${baseurl}/blogs/random`)
  const data = await response.data;

  setAllblog(data.blogs)
}

useEffect(()=>{
fetchBlog()

},[])
  return (
   <div className="bg-[#F3F1EC]">
     <div className="py-10 px-5 md:px-12 xl:px-32 ">
    

    <div className="text-center mb-10  px-6">
      <p className="text-xl text-gray-800">Our Blogs </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl  italic text-gray-900">Vajra Jewels latest blogs</h2>
    </div>



    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 container mx-auto">
      {allBlog?.map((blog) => (
        <Link href={`/blogs/${blog.slug}`} key={blog.id}>
          <div className="  overflow-hidden group cursor-pointer">
            <img
              src={`${imgurl}/${blog.image}`}
              alt={blog.title}
              className="w-full h-60 object-cover group-hover:scale-110 duration-200 "
            />
            <div className="p-5">
              {/* <h3 className="text-xl font-semibold mb-2">{blog.title}</h3> */}
              <p className="text-gray-600">{blog.short_des}</p>
              <p className="text-gray-400">{formatDate(blog.created_at)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
   </div>
  );
};

export default Blogs;
