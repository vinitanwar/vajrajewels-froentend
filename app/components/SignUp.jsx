"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { baseurl } from "./utils/apis";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaApple, FaGoogle } from 'react-icons/fa'

export default function SignUp() {
  const route = useRouter()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loader,setLoader]=useState(false)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    setLoader(true)
    if (form.password !== form.confirmPassword) {
      setLoader(false)
      alert("Passwords do not match!");
      return;
    }
    else{
      const response = await axios.post(`${baseurl}/user/signup`,form, { withCredentials: true });
      const data = await response.data;
      if(data.success){


  Swal.fire({
  title: "Account Created",
  icon: "success",
  draggable: true
});
 location.href="/"

      }
      else{
        Swal.fire({
  title: data.message[0],
  icon: "error",
  text: "Something went wrong!",
});
      }
     setLoader(false)
    }
  };

  return (
      <div className="min-h-screen flex flex-col md:flex-row">

    
      <div className="hidden md:block md:w-2/3 h-screen relative">
      <div className="absolute top-0 left-0 h-full w-full bg-black/25 "></div>
        <img
          src="/pexels-pixabay-248077.jpg" // replace with your jewelry image
          alt="Jewelry Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form (1/3) */}
      <div className="w-full md:w-1/3 flex items-center justify-center shadow-lg">
        <div className="w-full p-15 ">

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loader}
              className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
              {loader ? "Loading..." : "Sign Up"}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/user/login" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
        </div>
      </div>

   
  );
}
