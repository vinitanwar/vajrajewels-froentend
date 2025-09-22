"use client"
import React from "react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";
import {
  FaMapLocationDot,
  FaPhoneVolume,
  FaEnvelopeCircleCheck,
} from "react-icons/fa6";
import CommonForm from "./CommonForm";
import { useSelector } from "react-redux";

export default function Contact() {
  const layout=useSelector(state=>state.layout)  

  const contactInfo = [
    {
      icon: <FaMapLocationDot />,
      link: "#",
      title: "Head Office",
      text: `${layout?.info?.layout?.address}`,
    },
    {
      icon: <FaPhoneVolume />,
      link: `tel:${layout?.info?.layout?.number}`,
      title: "Call Us",
      text: `${layout?.info?.layout?.number}`,
    },
    {
      icon: <FaEnvelopeCircleCheck />,
      link: "info@vajrajewels.com",
      title: "Email Us",
      text: `${layout?.info?.layout?.email}`,
    },
  ];
  return (
    <>
      <div className="">
        <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] h-[25vh] md:h-[35vh]   xl:h-[40vh] flex flex-col justify-center items-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative text-center px-6 md:px-16 xl:px-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase">
                Contact Us
              </h1>

              <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
                <Link href="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
                <FaGreaterThan className="text-xs opacity-70" />
                <span className="font-medium">Contact Us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form bg-[#F3F1EC] ">
          <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-24 justify-between py-10 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-info text-center p-6 shadow-md"
                >
                  <div className="icon text-[#003F72] text-4xl mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <div className="content">
                    <h5 className="text-lg text-[#003F72] font-semibold mb-2">
                      {info.title}
                    </h5>
                    <Link href={info.link}>
                      <p className="text-[#003F72]">{info.text}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* form  */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="w-full lg:w-1/2">
                <img
                  src="/img/contact-us/1.webp"
                  alt="Contact Us"
                  className="w-full h-auto lg:h-[40%]"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <CommonForm />
              </div>
            </div>
          </div>

          {/* map  */}

          <section className="mt-[60px]">
            <div style={{ width: "100%", height: "450px", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.209006059291!2d77.64270267507622!3d12.958473687355697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1405814daf83%3A0xcd86b42b2a8e8a68!2s44%2C%20KGA%20Rd%2C%20ISRO%20Colony%2C%20Kodihalli%2C%20Bengaluru%2C%20Karnataka%20560008!5e0!3m2!1sen!2sin!4v1741583222912!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
