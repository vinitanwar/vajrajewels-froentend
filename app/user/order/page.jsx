"use client"
import { baseurl, imgurl } from '@/app/components/utils/apis';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [allorders, setAllorders] = useState([]);

  const getOrder = async () => {
    try {
      const response = await axios.get(`${baseurl}/getorder`, {
        withCredentials: true
      });
      const data = response.data;
      if (data.success) {
        setAllorders(data.orders);
      }
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white py-10">
      <div className="container mx-auto px-4 lg:px-10">
        <h1 className="text-3xl font-bold text-yellow-500 mb-8 border-b border-yellow-600 pb-3">
          My Orders
        </h1>
<div className=''>

        {allorders?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full">
            {allorders.map((order) => (
              <div
                key={order.id}
                className="bg-[#111] border border-gray-700 rounded-xl p-6 shadow-md"
              >
                {/* Order Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">
                      Order ID: <span className="text-white">#{order.id}</span>
                    </p>
                    <p className="text-gray-400 text-sm">
                      Tracking:{" "}
                      <span className="text-yellow-500">
                        {order.tracking_number}
                      </span>
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "delivered"
                          ? "bg-green-600/20 text-green-400 border border-green-500/40"
                          : "bg-yellow-600/20 text-yellow-400 border border-yellow-500/40"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-4 border-t border-gray-700 pt-4">
                  {order.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/user/order/${order.id}`}
                      className="flex flex-col md:flex-row items-center justify-between bg-[#1a1a1a] p-4 rounded-lg border border-gray-700 hover:border-yellow-600 transition"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={`${imgurl}/${item.product?.img1}`}
                          alt={item.product?.title}
                          className="w-20 h-20 object-cover rounded-lg border border-gray-700"
                        />
                        <div>
                          <h3 className="font-semibold">{item.product?.title}</h3>
                          <p className="text-sm text-gray-400">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0 text-right">
                        <p className="text-yellow-500">₹ {item.price}</p>
                        <p className="text-gray-400 text-sm">
                          Subtotal: ₹ {item.total}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4 text-sm">
                  <p>
                    Payment:{" "}
                    <span className="text-yellow-500">{order.payment_method}</span> (
                    {order.payment_status})
                  </p>
                  <p className="font-bold text-lg text-yellow-500">
                    Total: ₹ {order.final_amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No orders found.</p>
        )}
      </div>

      </div>
    </div>
  );
};

export default OrdersPage;
