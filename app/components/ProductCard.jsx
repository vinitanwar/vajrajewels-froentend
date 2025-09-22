"use client"
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoHeartCircle } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { imgurl } from "./utils/apis";


import { FaRegHeart, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState,useEffect } from "react";

const ProductCard = ({ product, bg }) => {
  const { price, img1, img2, old_price, title, slug, id } = product;
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if this product is already in wishlist
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.includes(id));
  }, [id]);

  const handelwishList = (id) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(id)) {
      // Remove
      wishlist = wishlist.filter((item) => item !== id);
      setIsWishlisted(false);
    } else {
      // Add
      wishlist.push(id);
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  function calculateDiscount(old_price, price) {
    if (!old_price || !price || old_price <= price) {
      return 0;
    }
    const discount = ((old_price - price) / old_price) * 100;
    return Math.round(discount);
  }

  const rating = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="group h-[500px] transition-shadow duration-500 ease-in-out overflow-hidden relative">
      <div className="relative h-[300px] transition-all duration-500 ease-in-out">
        <div className="discount h-12 text-xs text-center flex items-center justify-center text-black w-12 absolute z-10 left-5 top-4 bg-white rounded-full">
          {calculateDiscount(old_price, price)}%
        </div>

        <img
          src={`${imgurl}/${img1}`}
          alt={title}
          className="w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out object-cover"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <img
            src={`${imgurl}/${img2}`}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
          <div className="absolute inset-0 translate-x-8 group-hover:translate-x-0 duration-500 ease-in-out transition-transform flex flex-col gap-y-4 items-end py-4 px-2 text-black text-lg">
            <div
              onClick={() => handelwishList(id)}
              className="p-2 bg-white rounded-full w-fit cursor-pointer transition-all duration-300"
            >
              {isWishlisted ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="hover:text-amber-700" />
              )}
            </div>
            <div className="p-2 bg-white hover:text-amber-700 rounded-full w-fit transition-all duration-300">
              <IoMdEye />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          bg == "bg-black" ? "bg-black text-white" : "bg-[#F3F1EC] text-black"
        } 
        absolute bottom-0 left-0 w-full flex flex-col items-center gap-y-4 py-4 
        overflow-hidden transition-transform duration-500 ease-in-out 
        translate-y-16 group-hover:translate-y-0`}
      >
        <h6 className="text-center text-lg">{title}</h6>
        <div className="flex items-center text-yellow-500 text-2xl">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
          {halfStar && <FaStarHalfAlt />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
        </div>

        <div className="flex items-center gap-x-3">
          <span className="text-xl font-bold text-[#CE967E]">₹ {price}</span>
          <span className="text-gray-400 line-through">₹ {old_price}</span>
        </div>

        <Link
          href={`/product/${slug}`}
          className={`${
            bg == "bg-black"
              ? "bg-[#F3F1EC] hover:bg-[#f0ebdf] hover:text-gray-400 text-black"
              : "bg-black hover:bg-gray-800 text-white hover:text-gray-100"
          } w-fit duration-500 ease-in-out px-8 py-2 mx-auto block capitalize`}
        >
          View product
        </Link>
      </div>
    </div>
  );
};



export default ProductCard;
