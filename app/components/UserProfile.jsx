"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { baseurl, imgurl } from "./utils/apis";
import Addresss from "./Adresss";
import Image from "next/image";
import { FiUser, FiShoppingBag, FiShoppingCart, FiMapPin, FiLogOut } from "react-icons/fi";


export default function UserProfile() {
  const { info, isLoading, isError } = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dummy review data (replace with API later)
  const reviews = [
    {
      id: 1,
      product: "Gold Necklace",
      desc: "Elegant design with premium finish.",
      date: "2025-08-12",
      rating: 4,
      images: ["/img/review1.jpg", "/img/review2.jpg"],
    },
    {
      id: 2,
      product: "Silver Ring",
      desc: "Comfortable fit and shiny look.",
      date: "2025-08-01",
      rating: 5,
      images: ["/img/review3.jpg"],
    },
  ];
const [alladdress,setAddress]=useState();
  const [cartdata,setCartData]=useState()
  const [subtotal,setSubtotal]=useState()
  const [allorders,setAllorders]=useState();


const getAddress= async()=>{
  const response = await axios.get(`${baseurl}/getaddress`,{
    withCredentials:true
  })
  const data = await response.data;
  if(data.success){
setAddress(data.address)
  }
}



const getCart=async()=>{
  const response = await axios.get(`${baseurl}/getcart`,{
    withCredentials:true
  })
  const data = await response.data;
  if(data.success){
setCartData(data.carts)

 const subtotal = data.carts.reduce(
    (acc, dec) => acc + dec.total_amount,
    0
  );
  setSubtotal(subtotal)

}

}


const getOrder=async()=>{
  const response = await axios.get(`${baseurl}/getorder`,{
    withCredentials:true
  });
const data = response.data;
if(data.success){
  setAllorders(data.orders)
}



}

const handellogout= async()=>{
const response= await axios.post(`${baseurl}/user/logout`,{},{
  withCredentials:true
});
const data = response.data;
if(data.success){
  location.href="/"
}


}




useEffect(()=>{
  getCart()
  getOrder()
  getAddress()
},[])




  if (isLoading) return <p className="text-center py-20">Loading profile...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 py-20">Failed to load profile.</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
    <aside className="w-64 bg-gradient-to-b from-black via-gray-900 to-gray-800 p-6 hidden md:block shadow-xl text-yellow-400">
  <div className="text-center mb-10">
    <div className="w-28 h-28 rounded-full mx-auto border-4 border-yellow-500 shadow-lg flex justify-center items-center text-5xl font-bold uppercase bg-gradient-to-br from-gray-900 to-black text-yellow-400">
      {info?.name?.[0] || "U"}
    </div>
    <h2 className="mt-4 font-semibold text-yellow-300 text-lg">
      {info?.name || "Guest User"}
    </h2>
    <p className="text-sm text-gray-400">{info?.email}</p>
  </div>

  <ul className="space-y-3 font-medium">
    {[
      { key: "dashboard", label: "Dashboard", icon: <FiUser /> },
      { key: "orders", label: "Order History", icon: <FiShoppingBag /> },
      { key: "cart", label: "Cart Details", icon: <FiShoppingCart /> },
      { key: "address", label: "Address", icon: <FiMapPin /> },
      { key: "logout", label: "Logout", icon: <FiLogOut /> },
    ].map((item) => (
      <li
        key={item.key}
        className={`cursor-pointer flex items-center gap-3 px-3 py-2 rounded-lg transition ${
          activeTab === item.key
            ? "bg-yellow-500 text-black font-semibold"
            : "hover:bg-gray-700 hover:text-yellow-300"
        }`}
        onClick={() => setActiveTab(item.key)}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </li>
    ))}
  </ul>
</aside>

      {/* Main Content */}
      <main className="flex-1 ">
        {/* Dashboard */}
        {/* {activeTab === "dashboard" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome back, {info?.name || "User"} 👋
            </h3>
            <p className="text-gray-600">
              Manage your account, orders, reviews, and more from your profile
              dashboard.
            </p>
          </div>
        )} */}

        {/* Account Details */}
        {activeTab === "dashboard" && (
  <div className="min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-black text-gold-400 flex items-center justify-center p-6">
    <div className="w-full max-w-3xl bg-black/80 backdrop-blur-lg border border-yellow-600/30 rounded-2xl shadow-2xl p-10">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-center mb-8 tracking-wider border-b border-yellow-600/30 pb-4">
        ✨ Account Details ✨ 
      </h3>

      {/* User Info */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
        <li className="bg-black/50 p-4 rounded-xl border border-yellow-600/20 shadow-md">
          <span className="block text-sm text-gray-400">Name</span>
          <span className="font-semibold">{info?.name || "N/A"}</span>
        </li>

        <li className="bg-black/50 p-4 rounded-xl border border-yellow-600/20 shadow-md">
          <span className="block text-sm text-gray-400">Email</span>
          <span className="font-semibold">{info?.email || "N/A"}</span>
        </li>

        <li className="bg-black/50 p-4 rounded-xl border border-yellow-600/20 shadow-md">
          <span className="block text-sm text-gray-400">Phone</span>
          <span className="font-semibold">{info?.number || "Not Added"}</span>
        </li>

        <li className="bg-black/50 p-4 rounded-xl border border-yellow-600/20 shadow-md">
          <span className="block text-sm text-gray-400">Status</span>
          <span
            className={`font-semibold ${
              info?.status === 1 ? "text-green-400" : "text-red-400"
            }`}
          >
            {info?.status === 1 ? "Active" : "Inactive"}
          </span>
        </li>

        <li className="bg-black/50 p-4 rounded-xl border border-yellow-600/20 shadow-md">
          <span className="block text-sm text-gray-400">Joined</span>
          <span className="font-semibold">
            {new Date(info?.created_at).toLocaleDateString()}
          </span>
        </li>

        <li className="bg-black/50 p-4 rounded-xl border border-yellow-600/20 shadow-md">
          <span className="block text-sm text-gray-400">Last Updated</span>
          <span className="font-semibold">
            {new Date(info?.updated_at).toLocaleDateString()}
          </span>
        </li>
      </ul>
    </div>
  </div>
)}


        {/* To Review */}
        {activeTab === "address" && (
          <div className="text-center text-gray-500 flex flex-col gap-5 bg-black min-h-screen ">
            {alladdress?.map((addr,index)=>{
              return(
            <Addresss  address={addr} key={index}/>

              )
            })}
          </div>
        )}

        {/* Review History */}
        {activeTab === "cart" && (
          <div className="">
           
             <Orders orders={cartdata} subtotal={subtotal} />
          
          </div>
        )}


 {activeTab === "orders" && (
          <div className="">
           {allorders?.map((item,index)=>(
<OrderCard order={item} key={index} />
           ))}
          
          </div>
        )}


      
        {activeTab === "logout" && (
<div className="min-h-screen bg-black ">

          <div className="bg-black p-6 rounded-xl shadow-lg text-center border border-yellow-500">
  <h3 className="text-xl font-bold text-yellow-400 mb-4">Logout</h3>
  <p className="text-gray-300 mb-4">
    Are you sure you want to log out?
  </p>
  <button onClick={handellogout} className="bg-yellow-500 text-black cursor-pointer font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-400 transition duration-300">
    Confirm Logout
  </button>
</div>

</div>

        )}
      </main>
    </div>
  );
}
















 function Orders({ orders,subtotal }) {
  return (
    <div className="min-h-screen bg-black text-gold-400 p-8">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10 tracking-widest">
        🛍️ My Luxury Orders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {orders?.map((order) => (
          <div
            key={order.id}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-lg border border-yellow-700 p-6 flex flex-col md:flex-row gap-6 hover:scale-[1.02] transition"
          >
            {/* Product Image */}
            <div className="w-full md:w-40 h-40 flex-shrink-0">
              <img
                src={`${imgurl}/${order.product.img1}`}
                alt={order.product.title}
                className="w-full h-full object-cover rounded-xl border border-yellow-500 shadow-md"
              />
            </div>

            {/* Order Info */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {order.product.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Ordered on {new Date(order.created_at).toLocaleDateString()}
              </p>

              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Quantity:</span>
                <span className="font-semibold text-yellow-300">
                  {order.count}
                </span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Price:</span>
                <span className="font-semibold text-yellow-300">
                  ₹{order.amount.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center border-t border-gray-700 pt-3 mt-3">
                <span className="text-sm text-gray-300">Total:</span>
                <span className="text-2xl font-bold text-yellow-400">
                  ₹{order.total_amount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-yellow-400 m-3 text-2xl font-bold">
            <p>SubTotal</p>
            <p>{subtotal}</p>
          </div>
    </div>
  );
}


 function OrderCard({ order }) {
  return (
    <div className="bg-black min-h-screen text-white text-gold-400  p-6">
      {/* Order Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-yellow-600/30 pb-4 mb-4">
        <div>
          <h2 className="text-xl font-bold tracking-wide">Order #{order.id}</h2>
          <p className="text-sm text-gray-400">
            Placed on {new Date(order.created_at).toLocaleDateString()}
          </p>
          <p className="text-sm">Status: <span className="font-semibold capitalize">{order.status}</span></p>
          <p className="text-sm">Payment: <span className="font-semibold capitalize">{order.payment_method} ({order.payment_status})</span></p>
          <p className="text-sm">Tracking: <span className="font-semibold">{order.tracking_number}</span></p>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-lg font-bold">Total: ₹{order.final_amount}</p>
          {order.discount > 0 && (
            <p className="text-sm text-green-500">Discount: ₹{order.discount}</p>
          )}
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {order.items.map((item) => (
          <div
            key={item.id}
            className=" flex items-center bg-black/50 border text-white  border-yellow-600/20 rounded-xl p-4 hover:shadow-lg hover:shadow-yellow-600/20 transition"
          >
            {/* Product Image */}
            <div className="w-20 h-20 relative mr-4">
              <Image
                src={`${imgurl}/${item.product.img1}`}
                alt={item.product.title}
                fill
                className="object-cover rounded-lg border border-yellow-600/20"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.product.title}</h3>
              <p className="text-sm text-gray-400">{item.product.type}</p>
              <p className="text-sm mt-1">Qty: {item.quantity}</p>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-lg font-bold">₹{item.total}</p>
              {item.product.old_price && (
                <p className="text-sm line-through text-gray-500">₹{item.product.old_price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


