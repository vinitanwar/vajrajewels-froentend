"use client";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";
import { baseurl } from "./utils/apis";
import { useRouter } from "next/navigation";
import { FaApple, FaGoogle } from 'react-icons/fa';
export default function LoginPage() {
  const route = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    if(!email || !password || password.length < 6 ){
      Swal.fire({
  icon: "warning",
  title: "Oops...",
  text: "All Fealds Required",
  footer: '<a href="#">Why do I have this issue?</a>'
});
return ;
    }

 const response = await  axios.post(`${baseurl}/user/login`,{email,password},{
  withCredentials:true
 })
 const data = await response.data;
 if(data.success){
  Swal.fire({
  title: "Login successfully",
  icon: "success",  
  draggable: true

  })
  location.href="/"
// route.push("/")

 }
 else{

  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: data.message,

});

 }


  };

  return (
  


  <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left Side Image (2/3) */}
      <div className="hidden md:block md:w-2/3 h-screen relative">
        <img
          src="/pexels-pixabay-248077.jpg" // replace with your jewelry image
          alt="Jewelry Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/25">

        </div>
      </div>

      {/* Right Side Form (1/3) */}
      <div className="w-full md:w-1/3   flex justify-center items-center shadow-2xl">
        <div className="w-full  p-8 md:p-14 ">

          {/* Greeting */}
          <p className="text-center font-bold text-3xl md:text-4xl mb-2">👋 Hello Again!</p>
          <p className="text-center text-gray-500 mb-8">Please log in to continue</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="rounded-full border border-gray-300 px-5 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            />
            <input
              type="password"
               value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="rounded-full border border-gray-300 px-5 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            />

            <p className="text-right text-xs text-gray-500 underline cursor-pointer hover:text-purple-600">
              Forgot Password?
            </p>

            <button   type="submit" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 font-semibold shadow-lg transition active:scale-95">
              Log in
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?
            <Link href="/user/sign-up">
              <span className="ml-1 text-purple-600 font-bold underline hover:text-purple-700 cursor-pointer">
                Sign up
              </span>
            </Link>
          </p>

          {/* Social Login */}
          <div className="flex flex-col mt-6 gap-4">
            <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-black text-white text-sm font-medium border-2 border-black cursor-pointer shadow-md hover:scale-105 transition-transform">
              <FaApple className="text-lg" />
              <span>Log in with Apple</span>
            </div>

            <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-full text-sm font-medium border-2 border-gray-300 cursor-pointer shadow-md hover:scale-105 transition-transform hover:bg-gray-50">
              <FaGoogle className="text-lg text-gray-700" />
              <span>Log in with Google</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
