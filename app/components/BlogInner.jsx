"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";
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


export default function BlogInner({ slug }) {
 
  const [blog,setBlog]=useState()
  const [blogList,setblogList]=useState()
const getBlog= async()=>{
  const response = await axios.get(`${baseurl}/blog/${slug}`);
  const data = response.data;
  if(data.success){
setBlog(data.blog)
  }
  // console.log(data)
}


const getAllblog=async()=>{
  const response = await axios.get(`${baseurl}/blogs`);
  const data = await response.data;
  if(data.success){
setblogList(data.blogs)
  }
}


useEffect(()=>{
  getBlog()
  getAllblog()
},[])



  return (
    <>
      <div className="">
        <div className="relative text-white">
          <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] h-[25vh] md:h-[35vh]   xl:h-[40vh] flex flex-col justify-center items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative text-center px-6 md:px-16 xl:px-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase">
                blogs / {blog?.title}
              </h1>

              <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
                <Link href="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
                <FaGreaterThan className="text-xs opacity-70" />
                <span className="font-medium">blogs / {blog?.title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form bg-[#F3F1EC] ">
          <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-24 justify-between py-10 lg:py-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-5">
              <div className="lg:col-span-2">
                <div className="bg-white shadow rounded-lg p-6">
                <img
  src={`${imgurl}/${blog?.image}`}
  alt={blog?.title}
  className="w-full h-[24rem] rounded-md object-cover object-center"
/>


                  <h1 className="text-3xl font-bold mt-4">{blog?.title}</h1>
                  {/* <p className="text-lg text-gray-500 mt-2">{subtitle}</p> */}

                  <div className="flex flex-wrap items-center mt-2 space-x-4 text-sm text-gray-600">
                    <span>By {blog?.author}</span>
                    <span>{formatDate(blog?.created_at)}</span>
                    <span>{blog?.reading_time}Min</span>
                  </div>

                  <p className="mt-4 text-gray-800">{blog?.short_des}</p>
                  <div className="mt-6 text-gray-700">{blog?.description}</div>

                  <div className="mt-6">
                    <div>
                      <span className="font-semibold">Category: </span>
                      {/* {category} */}
                    </div>
                    <div className="mt-4">
                      <span className="font-semibold">Tags: </span>
                      {blog?.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-gray-600">
                      {/* <p>
                        {views} Views • {likes} Likes • {commentsCount} Comments
                      </p> */}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        Last updated on {formatDate(blog?.updated_at)}
                      </p>
                    </div>
                  </div>

                  {/* <div className="mt-6 border-t pt-4">
                    <h2 className="text-xl font-bold">About the Author</h2>
                    <p className="text-gray-700 mt-2">{authorBio}</p>
                  </div> */}
                </div>
              </div>

              <div className="lg:col-span-1">
                <ul className="space-y-4 sticky top-0">
                 {blogList?.map((blog) => (
                    <li
                      key={blog.id}
                      className="group shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="block p-4 bg-white hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={`${imgurl}/${blog.image}`}
                            alt={blog.title}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                             {formatDate(blog?.created_at)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))} 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
