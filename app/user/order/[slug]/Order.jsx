"use client";
import { baseurl, imgurl } from "@/app/components/utils/apis";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Order = ({ slug }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
const [showReturn,setShowreturn]=useState(false)
  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${baseurl}/getsingleorder/${slug}`, {
        withCredentials: true,
      });
     
      if (response.data.success) {
        setOrder(response.data.order);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-300">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Order Not Found</h2>
          <p className="text-gray-400">We couldn't find the order you're looking for.</p>
        </div>
      </div>
    );
  }

  // Status steps
  const steps = ["pending", "processing", "shipped", "delivered"];
  const currentStepIndex = steps.indexOf(order.status);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-10 px-4 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2">
            Order Details
          </h1>
          <p className="text-gray-400">Order #{order.id}</p>
          <p className="text-gray-400 mt-1">
            Placed on {new Date(order.createdAt || Date.now()).toLocaleDateString()}
          </p>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-800 rounded-xl p-6 mb-10 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-center">Order Status</h2>
          <div className="flex justify-between items-center relative mb-4">
            <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-700 -z-10 rounded-full"></div>
            <div
              className="absolute top-1/2 left-0 h-1.5 bg-yellow-500 -z-10 rounded-full transition-all duration-500"
              style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
            ></div>
            {steps.map((step, idx) => {
              const isActive = currentStepIndex >= idx;
              const isCurrent = currentStepIndex === idx;
              
              return (
                <div key={step} className="flex flex-col items-center relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold 
                      ${isActive ? "bg-yellow-500 text-black" : "bg-gray-700 text-gray-400"}
                      ${isCurrent ? "ring-4 ring-yellow-500/30" : ""}
                      transition-all duration-300`}
                  >
                    {idx + 1}
                  </div>
                  <p
                    className={`mt-3 text-sm font-medium ${isActive ? "text-yellow-500" : "text-gray-400"}`}
                  >
                    {step.charAt(0).toUpperCase() + step.slice(1)}
                  </p>
                  {isCurrent && (
                    <div className="absolute -bottom-8 text-center">
                      <p className="text-xs text-yellow-500 font-medium bg-yellow-500/10 px-2 py-1 rounded-full">
                        Current Status
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">Payment Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Payment Method:</span>
                <span className="font-medium">{order.payment_method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment Status:</span>
                <span className={`font-medium ${
                  order.payment_status === 'completed' 
                    ? 'text-green-500' 
                    : 'text-yellow-500'
                }`}>
                  {order.payment_status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Amount:</span>
                <span className="font-medium text-lg text-yellow-500">₹{order.final_amount}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">Shipping Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Tracking Number:</span>
                <span className="font-medium">
                  {order.tracking_number || (
                    <span className="text-gray-500">Not assigned yet</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping Method:</span>
                <span className="font-medium">Standard Delivery</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Estimated Delivery:</span>
                <span className="font-medium">
                  {order.status === 'delivered' 
                    ? 'Delivered' 
                    : new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 mb-10">
          <h2 className="text-xl font-semibold mb-6 text-yellow-500">Order Items</h2>
          
          <div className="space-y-4">
            {order?.items?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="relative">
                    <img
                      src={`${imgurl}/${item.product?.img1}`}
                      alt={item.product?.title}
                      className="w-20 h-20 object-cover rounded-lg border border-gray-700"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik01MCA0MEM1MCA0NC4xODI3IDQ2LjE4MjcgNDggNDIgNDhDMzcuODE3MyA0OCAzNCA0NC4xODI3IDM0IDBDMzQgNDQuMTgyNyAzMC4xODI3IDQ4IDI2IDQ4QzIxLjgxNzMgNDggMTggNDQuMTgyNyAxOCA0MCIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTI2IDI0QzI4LjIwOTEgMjQgMzAgMjIuMjA5MSAzMCAyMEMzMCAxNy43OTA5IDI4LjIwOTEgMTYgMjYgMTZDMjMuNzkwOSAxNiAyMiAxNy43OTA5IDIyIDIwQzIyIDIyLjIwOTEgMjMuNzkwOSAyNCAyNiAyNFoiIGZpbGw9IiM2NjYiLz4KPHBhdGggZD0iTTU0IDI0QzU2LjIwOTEgMjQgNTggMjIuMjA5MSA1OCAyMEM1OCAxNy43OTA5IDU2LjIwOTEgMTYgNTQgMTZDNTEuNzkwOSAxNiA1MCAxNy43OTA5IDUwIDIwQzUwIDIyLjIwOTEgNTEuNzkwOSAyNCA1NCAyNFoiIGZpbGw9IiM2NjYiLz4KPC9zdmc+";
                      }}
                    />
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {item.quantity}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.product?.title}</h3>
                    <p className="text-sm text-gray-400">SKU: {item.product?.sku || "N/A"}</p>
                  </div>
                </div>
                <div className="mt-3 md:mt-0 text-right w-full md:w-auto">
                  <p className="text-yellow-500 font-medium">₹{item.price} each</p>
                  <p className="text-gray-400">Subtotal: ₹{item.total}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-gray-300">₹{order.final_amount - 40}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Shipping</span>
              <span className="text-gray-300">₹40.00</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold mt-4 pt-4 border-t border-gray-700">
              <span>Total</span>
              <span className="text-yellow-500 text-xl">₹{order.final_amount}</span>
            </div>
          </div>
        </div>

        {/* Support Card */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">Need Help?</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about your order, our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-lg transition-colors">
              Contact Support
            </button>
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-medium py-2 px-4 rounded-lg transition-colors">
              View Order History
            </button>






            </div>

                  {order?.deleverd_date && (() => {
  const deliveredTime = new Date(order.deleverd_date).getTime();
  const now = Date.now();
  const diffInMs = now - deliveredTime;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays <= 1) {
    return (
      <button onClick={()=>setShowreturn(true)} className=" cursor-pointer bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md">
        Return Order
      </button>
    );
  }
  return null;
})()}



          </div>

{showReturn &&
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          {/* Popup content */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-semibold text-yellow-500 mb-4">
              Return Order
            </h2>

            <label
              htmlFor="returnReason"
              className="block text-sm text-gray-300 mb-2"
            >
              Reason for Return
            </label>
            <textarea
              id="returnReason"
              placeholder="Enter your reason..."
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowreturn(false)}
                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700">
                Confirm Return
              </button>
            </div>

            {/* Close button (X) in top-right corner */}
            <button
              onClick={() => setShowreturn(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

}

        </div>
      </div>
    </div>
  );
};

export default Order;