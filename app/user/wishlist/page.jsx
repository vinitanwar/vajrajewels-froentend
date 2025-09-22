"use client";
import { baseurl, imgurl } from "@/app/components/utils/apis";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishlist from backend
  const fetchWishlist = async (list) => {
    if (!list || list.length === 0) {
      setWishlistProducts([]);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${baseurl}/getwishlist`,
        { wishlist: list },
        { withCredentials: true }
      );
      if (response.data.success) {
        setWishlistProducts(response.data.products);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter((item) => item !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWishlistProducts((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    fetchWishlist(wishlist);
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-white">Loading...</p>;
  }

  if (wishlistProducts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-xl font-semibold">Your wishlist is empty 😔</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-yellow-500 mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-yellow-600 relative group"
          >
            <div className="relative h-64">
              <img
                src={`${imgurl}/${product.img1}`}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full text-red-500 shadow hover:scale-110 transition-transform duration-300"
              >
                <FaHeart />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-yellow-500 text-xl font-bold">₹ {product.price}</p>
              {product.old_price && (
                <p className="line-through text-gray-400">₹ {product.old_price}</p>
              )}
              <p className="text-gray-300 text-sm truncate">
                {product.description.replace(/(<([^>]+)>)/gi, "")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
