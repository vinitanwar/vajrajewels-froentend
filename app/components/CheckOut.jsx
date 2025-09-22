"use client";
import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { baseurl } from "./utils/apis";
import AddressForm from "./AddressForm";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CheckOut() {
  const [shipDifference, setShipDifference] = useState(false);
  const [shipingproduct, setShipingProduct] = useState();
  const [totalprice, setTotalPrice] = useState(0);
  const [allAddress, setAlladdress] = useState();
  const [addressid, setAddressid] = useState();
  const [addnewAddress, setAddnewAddress] = useState(false);
  const [deleverymodethod, setDeleveryMethod] = useState("cod");
  const router =  useRouter()
   

  const fetchAlproduct = async (item) => {
    const response = await axios.post(
      `${baseurl}/getcheckoutproduct`,
      { ...item },
      { withCredentials: true }
    );

    const data = response.data;
    if (data.success) {
      setShipingProduct(data.products);
      const subtotal = data.products.reduce(
        (acc, dec) => acc + dec.total_amount,
        0
      );
      setTotalPrice(subtotal);
    }
  };

  const getAddress = async () => {
    const response = await axios.get(`${baseurl}/getaddress`, {
      withCredentials: true,
    });

    const data = await response.data;
    if (data.success) {
      setAlladdress(data.address);
      const selected = data.address.find((item) => item.selectAddress === 1);
      setAddressid(selected ? selected.id : null);
    }
  };

  const handleSelect = async (id) => {
    if (id == addressid) return;

    const response = await axios.get(`${baseurl}/updateaddress/${id}`, {
      withCredentials: true,
    });

    const data = await response.data;
    if (data.success) {
      getAddress();
    }
  };

  const handelRemove = async (id) => {
    if (!id) return;
    const response = await axios.get(`${baseurl}/deleteaddress/${id}`, {
      withCredentials: true,
    });
    const data = response.data;
    if (data.success) {
      getAddress();
    }
  };

  useEffect(() => {
    const checkoutid = JSON.parse(localStorage.getItem("checkoutitem"));
    fetchAlproduct(checkoutid);
    getAddress();
  }, []);

  const handelorder = async () => {
    const orderData = {
      product_details: shipingproduct,
      address_id: addressid,
      payment_method: deleverymodethod,
      total_amount: totalprice,
    };
    
    const response = await axios.post(
      `${baseurl}/add/oder`,
      { ...orderData },
      { withCredentials: true }
    );

    const data = await response.data;
    if(data.success){
      Swal.fire({
        title: "Order place",
  text: "You clicked the button!",
  icon: "success"

      })
  localStorage.clear("checkoutitem")
      router.push("/")
    
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative text-white">
        <div
          className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] 
          h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center"
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase text-[#FFD700] font-bold tracking-wider">
              Checkout
            </h1>
            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base text-white">
              <Link href="/" className="hover:text-[#FFD700] transition">
                Home
              </Link>
              <FaGreaterThan className="text-xs opacity-70 text-[#FFD700]" />
              <span className="font-medium">Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-5 md:px-12 xl:px-32 py-10 lg:py-16">
        <div className="grid relative lg:grid-cols-3 lg:gap-x-5 xl:gap-x-8">
          {/* Address Section */}
          <div className="lg:col-span-2">
            {!addnewAddress && (
              <div className="flex flex-col gap-4">
                {allAddress?.map((addr) => (
                  <div
                    key={addr.id}
                    className={`p-4 rounded-lg shadow-md border transition ${
                      addr.selectAddress
                        ? "border-[#FFD700] bg-gradient-to-r from-black to-gray-900"
                        : "border-gray-700 bg-gray-900"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="font-bold text-lg text-[#FFD700]">
                          {addr.first_name} {addr.last_name}
                        </h2>
                        <p className="text-sm text-gray-300">{addr.phone}</p>
                        <p className="text-sm text-gray-300">{addr.email}</p>
                      </div>
                      <button
                        onClick={() => handleSelect(addr.id)}
                        className={`px-4 py-2 rounded-md font-semibold ${
                          addr.selectAddress
                            ? "bg-[#FFD700] text-black"
                            : "bg-black border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
                        }`}
                      >
                        {addr.selectAddress ? "Default" : "Set Default"}
                      </button>
                    </div>
                    <p className="mt-2 text-gray-200">
                      {addr.house_no}, {addr.address}, {addr.landmark},{" "}
                      {addr.city}, {addr.state}, {addr.postcode},{" "}
                      {addr.country}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      {addr.order_notes && (
                        <p className="text-sm italic text-gray-400">
                          Notes: {addr.order_notes}
                        </p>
                      )}
                      <button
                        className="cursor-pointer text-sm text-red-400 hover:text-red-600"
                        onClick={() => handelRemove(addr.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div>
                  <button
                    onClick={() => setAddnewAddress(true)}
                    className="cursor-pointer px-4 py-2 bg-[#FFD700] text-black font-semibold rounded-xl shadow-md hover:bg-yellow-500"
                  >
                    Add Address
                  </button>
                </div>
              </div>
            )}

            {addnewAddress && (
              <AddressForm
                setAddnewAddress={setAddnewAddress}
                getAddress={getAddress}
              />
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 mt-8 md:mt-0 sticky top-1">
            <div className="order-area bg-gradient-to-br from-black via-gray-900 to-black text-white border border-[#FFD700] rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl border-b border-[#FFD700] pb-3 font-semibold mb-4 text-[#FFD700]">
                Your Order
              </h3>
              <ul className="pb-4 mb-4 space-y-2">
                {shipingproduct?.map((item, index) => (
                  <li
                    key={index}
                    className="flex border-b border-gray-700 pb-3 justify-between text-lg"
                  >
                    <span>{item.product.title}</span>
                    <span className="font-medium text-[#FFD700]">
                      ₹{item.amount} × {item.count}
                    </span>
                  </li>
                ))}

                <li className="flex border-b border-gray-700 pb-3 justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span className="text-[#FFD700]">₹{totalprice}</span>
                </li>
                <li className="flex border-b border-gray-700 pb-3 justify-between text-lg">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </li>
                <li className="flex border-b border-gray-700 pb-3 justify-between font-semibold text-xl">
                  <span>Total</span>
                  <span className="text-[#FFD700]">₹{totalprice}</span>
                </li>

                {/* Payment Options */}
                <li className="flex gap-4">
                  <button
                    className={`flex-1 px-6 py-3 rounded-xl border font-medium transition-all duration-200 ${
                      deleverymodethod === "cod"
                        ? "bg-[#FFD700] text-black border-[#FFD700] shadow-md scale-105"
                        : "bg-black text-white border-gray-700 hover:border-[#FFD700]"
                    }`}
                    onClick={() => setDeleveryMethod("cod")}
                  >
                    Cash on Delivery
                  </button>

                  <button
                    className={`flex-1 px-6 py-3 rounded-xl border font-medium transition-all duration-200 ${
                      deleverymodethod === "razorpay"
                        ? "bg-[#FFD700] text-black border-[#FFD700] shadow-md scale-105"
                        : "bg-black text-white border-gray-700 hover:border-[#FFD700]"
                    }`}
                    onClick={() => setDeleveryMethod("razorpay")}
                  >
                    Razorpay
                  </button>
                </li>
              </ul>

              <button
                onClick={handelorder}
                className="w-full bg-[#FFD700] hover:bg-yellow-500 text-black py-3 rounded-lg text-lg font-semibold transition shadow-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
