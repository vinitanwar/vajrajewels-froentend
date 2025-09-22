"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { baseurl, imgurl } from "./utils/apis";
import { useRouter } from "next/navigation";

const Cart = () => {
  const route = useRouter();
  const [cartdata, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const shipingprice = 30;

  const getCart = async () => {
    const response = await axios.get(`${baseurl}/getcart`, {
      withCredentials: true,
    });
    const data = response.data;
    if (data.success) {
      setCartData(data.carts);
      const subtotal = data.carts.reduce(
        (acc, dec) => acc + dec.total_amount,
        0
      );
      setSubtotal(subtotal);
    }
  };

  const handelCartadd = async (id) => {
    await axios.get(`${baseurl}/getcart/add/${id}`, { withCredentials: true });
    getCart();
  };
  const handelCartremove = async (id) => {
    await axios.get(`${baseurl}/getcart/remove/${id}`, { withCredentials: true });
    getCart();
  };

  useEffect(() => {
    getCart();
  }, []);

  if (cartdata?.length < 1) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center bg-[#111] p-10 rounded-2xl shadow-lg border border-yellow-600">
          <FaShoppingCart className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">Your Cart is Empty</h2>
          <p className="text-gray-400 mt-2">
            Looks like you haven't added anything yet.
          </p>
          <Link
            href="/all-products"
            className="mt-6 inline-block px-6 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handelCheckeout = () => {
    const item = cartdata?.map((item) => item.id);
    localStorage.setItem("checkoutitem", JSON.stringify({ item }));
    route.push("/checkout");
  };

  return (
   <div className="cart bg-gradient-to-b from-black to-gray-900 min-h-screen text-white py-10">
  <div className="container mx-auto px-4 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-yellow-500 border-b border-yellow-600 pb-3">
          Your Shopping Cart
        </h1>
        
        {cartdata?.length > 0 ? (
          cartdata.map(({ id, product, total_amount, amount, count }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center bg-[#111] p-5 rounded-xl border border-gray-700 hover:border-yellow-600 transition duration-300 shadow-md"
            >
              <img
                src={`${imgurl}/${product?.img1}`}
                alt={product?.title}
                className="w-24 h-24 object-cover rounded-lg border border-gray-700"
              />

              <div className="flex-1 md:ml-5 text-center md:text-left mt-3 md:mt-0">
                <h3 className="font-semibold text-lg">{product?.title}</h3>
                <p className="text-yellow-500 font-medium">₹ {amount}</p>
              </div>

              <div className="flex items-center justify-center border border-gray-600 rounded-lg w-28 mx-4">
                <button
                  onClick={() => handelCartremove(id)}
                  className="px-3 text-yellow-500 hover:text-yellow-400"
                >
                  -
                </button>
                <span className="px-2">{count}</span>
                <button
                  onClick={() => handelCartadd(id)}
                  className="px-3 text-yellow-500 hover:text-yellow-400"
                >
                  +
                </button>
              </div>

              <p className="font-semibold text-yellow-400 w-24 text-center">
                ₹ {total_amount}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-2xl border border-yellow-600 shadow-lg sticky top-6">
        <h2 className="text-2xl font-bold mb-4 text-yellow-500 border-b border-gray-700 pb-3">
          Cart Summary
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="text-yellow-500">₹{subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p className="text-yellow-500">₹{shipingprice}</p>
          </div>
        </div>

        <div className="flex justify-between text-xl font-bold border-t border-gray-700 pt-4 mt-4">
          <p>Total</p>
          <p className="text-yellow-500">₹{subtotal + shipingprice}</p>
        </div>

        <button
          onClick={handelCheckeout}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg mt-6 transition duration-300 shadow-md"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Cart;
