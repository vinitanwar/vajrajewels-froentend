"use client";
import { useState } from "react";
import axios from "axios";
import { baseurl } from "./utils/apis";

export default function AddressForm({setAddnewAddress,getAddress}) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    address: "",
    landmark: "",
    house_no: "", 
    postcode: "",
    city: "",
    order_notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
     
      const res = await axios.post( `${baseurl}/addaddress`,
        formData,
        {
         withCredentials:true
        }
      );

      alert(res.data.message);
      setFormData({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    address: "",
    landmark: "",
    house_no: "",
    postcode: "",
    city: "",
    order_notes: "",
  })
      setAddnewAddress(false)
      getAddress()
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to save address");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 my-8">
  <h2 className="text-3xl font-bold mb-6 text-gray-900">Checkout</h2>

  <form onSubmit={handleSubmit} className="space-y-6">
    {/* First & Last Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium text-gray-700">First Name *</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="First Name"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Last Name *</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Last Name"
          required
        />
      </div>
    </div>

    {/* Gender */}
    <div>
      <label className="block font-medium text-gray-700">Gender</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    {/* Email & Phone */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium text-gray-700">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example@mail.com"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Phone *</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="+91 9876543210"
          required
        />
      </div>
    </div>

    {/* Country */}
    <div>
      <label className="block font-medium text-gray-700">Country *</label>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="India"
        required
      />
    </div>

    {/* State & Address */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium text-gray-700">State *</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="State"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Address *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="123, Street Name"
          required
        />
      </div>
    </div>

    {/* Landmark & House No */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium text-gray-700">Landmark</label>
        <input
          type="text"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Near Temple"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">House No</label>
        <input
          type="text"
          name="house_no"
          value={formData.house_no}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="45B"
        />
      </div>
    </div>

    {/* Postcode & City */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium text-gray-700">Postcode</label>
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="171001"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">City *</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="City"
          required
        />
      </div>
    </div>

    {/* Order Notes */}
    <div>
      <label className="block font-medium text-gray-700">Order Notes</label>
      <textarea
        name="order_notes"
        value={formData.order_notes}
        onChange={handleChange}
        className="w-full border border-gray-300 text-gray-900 placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
        placeholder="Special notes for delivery..."
      ></textarea>
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition disabled:opacity-50"
    >
      {loading ? "Saving..." : "Place Order"}
    </button>
  </form>
</div>



  );
}
