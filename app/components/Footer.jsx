"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook ,FaLinkedin,FaTwitter,FaYoutube} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useSelector } from "react-redux";
import { imgurl } from "./utils/apis";
import { FaThreads } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { GetLayout } from "../store/layoutSlice";

const Footer = () => {
const layout=useSelector(state=>state.layout)  
  const dispatch = useDispatch();


 useEffect(() => {
      dispatch(GetLayout());
  
  }, []);
 
  return (
    <footer className="bg-[#000] text-white pt-10  px-5 md:px-12 xl:px-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10  justify-between mb-8">
          <div className="space-y-4 lg:w-[30%]"> 
            <Link href="/" className="">
              <img
                src={`${imgurl}/${layout?.info?.layout?.logo}`}
                alt="logo"
                className="w-16 h-16 lg:h-20 lg:w-20"
              />
            </Link>
            <p className="mt-2">
              "At Vajra Jewels Bangalore, we blend tradition with innovation to
              create exquisite jewellery that reflects timeless beauty and
              unmatched craftsmanship."
            </p>
            <div className="flex items-center text-xl gap-x-2">
              {layout?.info?.layout?.insta_link && 
               <a
                href={`${layout?.info?.layout?.insta_link}`}
                target="_blank"
              >
                <RiInstagramFill className="text-2xl" />
              </a>  }



              {layout?.info?.layout?.fb_link && 
              <a 
                href={`${layout?.info?.layout?.fb_link}`}
                target="_blank"
              >
                <FaFacebook className="text-2xl" />
              </a>
}
           
           
           {layout?.info?.layout?.x_link &&    <a
                href={`${layout?.info?.layout?.x_link}`}
                target="_blank"
              >
                <FaTwitter className="text-2xl" />
              </a>
}
      {layout?.info?.layout?.yt_link &&         <a
                href={`${layout?.info?.layout?.yt_link}`}
                target="_blank"
              >
                <FaYoutube className="text-2xl" />
              </a>
}


 {layout?.info?.layout?.linkedin_link &&         <a
                href={`${layout?.info?.layout?.linkedin_link}`}
                target="_blank"
              >
                <FaLinkedin className="text-2xl" />
              </a>
}



 {layout?.info?.layout?.thread_link &&         <a
                href={`${layout?.info?.layout?.thread_link}`}
                target="_blank"
              >
                <FaThreads className="text-2xl" />
              </a>
}


            </div>
          </div>

          <div className="space-y-2 hidden lg:block">
            <h2 className="text-xl -ml-4 ">Our Links</h2> 
            <ul className="space-y-2 list-disc">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact-us/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 hidden lg:block">
            <h2 className="text-xl -ml-4 ">Our Products</h2>

            <ul className="space-y-2 hidden lg:block list-disc">
              <li>
                <Link href="/collections/rings">Rings</Link>
              </li>
              <li>
              <Link href="/collections/earrings">Earrings</Link>
              </li>
              <li>
              <Link href= "/collections/necklaces">Necklaces</Link>
              </li>
              <li>
              <Link href="/collections/bracelets">Bracelets</Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 lg:hidden pl-4 ">
            <div className="space-y-2 ">
              <h2 className="text-xl -ml-4 ">Our Links</h2>
              <ul className="space-y-2 list-disc">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact-us/">Contact Us</Link>
              </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl -ml-4 ">Our Prodcuts</h2>

              <ul className="space-y-2  list-disc">
              <li>
                <Link href="/collections/rings">Rings</Link>
              </li>
              <li>
              <Link href="/collections/earrings">Earrings</Link>
              </li>
              <li>
              <Link href= "/collections/necklaces">Necklaces</Link>
              </li>
              <li>
              <Link href="/collections/bracelets">Bracelets</Link>
              </li>
              </ul>
            </div>
          </div> 

          <div className="space-y-2 lg:w-[35%] xl:w-[30%] flex flex-col items-start ">
            <h2 className="text-xl  ">Our Address</h2>

            <h6>Head Office</h6>
            <div className="flex items-start gap-x-2 "><IoLocationOutline className="mt-2" />
            <p>{layout?.info?.layout?.address}</p>
</div> 
            <div className="flex flex-col gap-y-2 ">
              <a href="tel:+91 94483 87231" className="flex items-center gap-x-2"><MdOutlineLocalPhone  />
              {layout?.info?.layout?.number}</a>
              <a href="mailto:info@vajrajewels.com" className="flex items-center gap-x-2"><HiOutlineMail />
              {layout?.info?.layout?.email}</a>
            </div>

            <div className="flex justify-start  mt-5">
              <img
                src="/img/payments/Payements.webp"
                alt="Logo"
                className="h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-400" />
      <div className="py-5 container mx-auto ">
        <div className="md:flex flex-wrap lg:justify-between items-center text-sm text-white justify-center md">
          <p className="text-center">
            © {new Date().getFullYear()} Vajra Jewels . All rights reserved.
          </p>
          <p className="">
            <span className="flex md justify-center md">
              Designed by&nbsp;
              <a
                href="https://www.futuretouch.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Future IT Touch ❤️
              </a>
            </span>
          </p>
          <div className="space-x-4 mb-2 md:mb-0  flex md justify-center md">
            <Link href="/privacy-Policy">Privacy Policy |</Link>
            <Link href="/terms-condition">Terms & Conditions |</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
