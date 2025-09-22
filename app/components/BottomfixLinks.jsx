import Link from "next/link";
import React from "react";
import { FaCog, FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";

export default function BottomfixLinks() {
  return (
    <div className="mobile-links fixed bottom-0 inset-x-0 md:hidden bg-[#000]">
      <div className="flex items-center px-5 justify-between text-white py-3 text-sm">
        
        <Link href="/" className="w-1/4 flex flex-col items-center">
        <FaHome size={22} />

          <span>Home</span>
        </Link>

        <Link href="/cart" className="w-1/4 flex flex-col items-center">
          <FaShoppingCart size={22} />
          <span>Cart</span>
        </Link>

        <Link href="/user/profile" className="w-1/4 flex flex-col items-center">
          <FaUserAlt size={22} />
          <span>Profile</span>
        </Link> 

        <Link href="/all-products" className="w-1/4 flex flex-col items-center">
        <img src="/img/bottomLogo/jewelry.webp" alt="" className="w-8 h-5 bottom-icon-image-filter" />
          <span>All Products</span>
        </Link>
        
      </div>
    </div>
  );
}
