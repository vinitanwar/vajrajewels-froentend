"use client";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CommonForm() {
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Service: "",
    Message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
 
const sendto=["info@vajrajewels.com"];
const subject= "Query For Contact";

  const response = await axios.post(`https://email.futuretouch.in/sendmail`,{formdata:formData,sendto,subject})
const data = await response.data;
if(data.success){
  Swal.fire({
    "icon":"success",
    "text":data.message,
    "theme":"dark"
  })
  setFormData({
    Name: "",
    Email: "",
    Phone: "",
    Service: "",
    Message: "",
  })
}
    setLoading(false)


  };

  return (
    <div className="w-full  p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Location */}

        {/* Service */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Service
          </label>
          <select
            name="Service"
            value={formData.Service}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            <option value="Rings">Rings</option>
            <option value="Earrings">Earrings</option>
            <option value="Necklaces">Necklaces</option>
            <option value="Bracelets">Bracelets</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Message
          </label>
          <textarea
            rows="4"
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#173842] px-4 py-2 text-white mt-3 rounded"
        >
          {loading?"Loading...":"Submit"}
          
        </button>
      </form>
    </div>
  );
}
