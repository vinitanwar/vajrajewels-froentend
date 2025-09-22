"use client";
import React, { act, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import jewelryItems from "../data";
import axios from "axios";
import { baseurl } from "./utils/apis";
export default function HoteCategorries() {

  const [activeTag, setActiveTag] = useState("Best Seller");
  const  [jewelryItems,setjewelryItems]= useState()

const fetchproduct=async(cat)=>{
  const response = await axios.get(`${baseurl}/products/${cat}`)
  const data = await response.data;
  if(data.success){
    setjewelryItems(data.products)
  }else{
    setjewelryItems("")
  }
}



useEffect(()=>{
fetchproduct(`new`)
},[])

useEffect(()=>{
  fetchproduct(activeTag)
},[activeTag])

  return (
    <div className=" bg-[#000]">
      <div className="px-5 md:px-16 xl:px-32 py-10 lg:pb-16 container mx-auto">
        <div className="flex text-nowrap overflow-x-auto  items-center gap-x-10 border-b border-b-gray-200 py-5 text-white ">
          {[{title:"New Arrival",cat:"new"},{title:"Best Seller",cat:"best"},{title:"Special Offer",cat:"offer"}].map((elm,index) => (
            <button
            key={index}
              onClick={() => setActiveTag(elm.cat)}
              className="text-xl cursor-pointer"
            >
              {elm.title} 
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10  md:gap-5 mt-5 lg:mt-10">
          {jewelryItems?.slice(0, 4).map((product, index) => (
              <ProductCard key={index} product={product} bg="bg-black"  />
            ))}
        </div>
      </div>
    </div>
  );
}
