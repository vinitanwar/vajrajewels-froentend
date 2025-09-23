"use client";

import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import list from "../data";
import { BiDownArrow } from "react-icons/bi";
import { IoMdArrowDown } from "react-icons/io";
import axios from "axios";
import { baseurl } from "./utils/apis";

const categoriesList = [...new Set(list.map((elm) => elm.categorie))];


const CategoriesJwellery = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [allProduct,setAllproduct]=useState()

  


  const [categories,setCategories]=useState()



const fetchcategory=async()=>{
  const response = await axios.get(`${baseurl}/categories`)
  const data = await response.data;
  if(data.success){
    setCategories(data.categories)
setActiveCategory(data.categories[0].title)
  }
}



useEffect(()=>{
  fetchcategory()
},[])

const fetchProducts= async(cat)=>{

  const response = await axios.get(`${baseurl}/products?cat=${cat}`)
const data = await response.data;
if(data.success){
setAllproduct(data.products)

}
}


useEffect(()=>{
fetchProducts(activeCategory)

},[activeCategory])







  return (
    <div className="categories bg-[#F3F1EC] py-10 lg:pt-16">
      <div className="w-full container mx-auto   px-5 md:px-12 xl:px-32 ">
        <div className="text-center mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl  italic">
            Vajra Jewels Timeless Diamond Beauty
          </p>
          <p className="text-xl font-serif mt-2"></p>
        </div>

        <div className="flex justify-center space-x-6  pb-2 overflow-x-auto">
          {categories?.map((category) => (
            <button
              key={category}
              className={`text-lg px-3 pb-2  capitalize ${
                activeCategory === category.title
                  ? "font-normal border-b-1 border-black"
                  : "text-gray-600"
              }`}
              onClick={() => {
                setActiveCategory(category.title), setVisibleCount(4);
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-12">
          {allProduct?.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
        </div>

        {/* Load More Button */}
        {visibleCount <
          list.filter(
            (elm) =>
              elm.categorie.trim().toLowerCase() ==
              activeCategory.trim().toLowerCase()
          ).length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount(visibleCount + 4)}
              className=" text-gray-800 flex items-center gap-x-2 px-6 py-2 rounded-md  cursor-pointer transition"
            >
              Load More <IoMdArrowDown  className="animate-bounce mt-1"/>

            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesJwellery;
