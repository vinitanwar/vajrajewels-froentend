"use client";
import React, { useEffect, useState } from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

import { MdOutlineArrowForwardIos, MdOutlineShoppingBag } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import SearchProduct from "./SearchProduct";
import { getUser } from "../store/userSlice";

import axios from "axios";
import { IoHeartCircleSharp, IoLogOutOutline } from "react-icons/io5";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaRegUser,
  FaRegUserCircle,
} from "react-icons/fa";

import { ImProfile } from "react-icons/im";

import { baseurl, imgurl } from "./utils/apis";
import { GetLayout } from "../store/layoutSlice";

export default function Nav() {
  const { info, isLoading, isError } = useSelector((state) => state.user);
  const layout = useSelector((state) => state.layout);
  const [allcat, setAllcat] = useState();
  const [navproduct, setNavproduct] = useState();
  const [navproduct2, setNavproduct2] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(GetLayout());
    dispatch(getUser());
  
  }, []);

  const [sideBarToogle, setSideBarToggle] = useState(false);

  const SideBar = () => {
    return ( <>
      <motion.div
        initial="hidden"
        animate={sideBarToogle ? "visible" : "hidden"}
        // variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className=" w-screen h-full fixed z-[100]  lg:hidden bg-black/50 lg:bg-[rgba(0,0,0,.7)] "
      >
        {/* <div className="  px-5 md:px-12  h-full   md:w-[400px]  bg-[#000]  text-white shadow-lg">
          <ul className="space-y-5 pt-24   uppercase text-sm text-center">
            {navItems.map((elm) => (
              <li key={elm.title} className="  relative  text-2xl  ">
                <div
                  onClick={() =>
                    setphoneNavDropDownTab((prev) =>
                      prev == elm.title ? "" : elm.title
                    )
                  }
                  className="flex items-center gap-x-4"
                >
                 {elm.link ? (
                    <Link
                      href={elm.link}
                      onClick={() => setSideBarToggle(false)}
                    >
                      {elm.title}
                    </Link>
                  ) : (
                    <span>{elm.title}</span>
                  )}

                  {!navLinks.includes(elm.title) && (
                    <MdOutlineArrowForwardIos
                      className={`${
                        phoneNavDropDownTab === elm.title
                          ? "rotate-90"
                          : "rotate-0"
                      } transition-transform duration-300 ease-in-out`}
                    />
                  )}
                </div>
                {phoneNavDropDownTab == elm.title && (
                  <div className="flex justify-center">
                    <ul className="  mt-3 flex flex-col items-start">
                    {elm.subcategories?.map((elm, index) => (
                        <li key={index} className="text-xl">
                          <Link
                            href={elm.link}
                            onClick={() => setSideBarToggle(false)}
                          >
                            {elm.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div> */}
      </motion.div>
      <div
        className={`${sideBarToogle ? "translate-x-0" : "-translate-x-full"} 
  w-screen h-full fixed top-0 left-0 z-[100] lg:hidden bg-black/50 lg:bg-[rgba(0,0,0,.7)] 
  transition-transform duration-700 ease-in-out`}
      >
        <div className="px-5 md:px-12 h-full md:w-[400px] bg-[#000] text-white shadow-lg">
          <ul className="space-y-5 pt-24 md:pt-24 uppercase text-sm text-center">
            {/* {navItems.map((elm) => (
        <li key={elm.title} className="relative text-2xl">
          <div
            onClick={(e) => {
              // If this item has subcategories, toggle dropdown only.
              if (elm.subcategories) {
                e.stopPropagation();
                setphoneNavDropDownTab((prev) =>
                  prev === elm.title ? "" : elm.title
                );
              }
            }}
            className="flex items-center gap-x-4"
          >
          
            {elm.link && !elm.subcategories ? (
              <Link
                href={elm.link}
                onClick={() => setSideBarToggle(false)}
              >
                {elm.title}
              </Link>
            ) : (
              <span>{elm.title}</span>
            )}

            {!navLinks.includes(elm.title) && (
              <MdOutlineArrowForwardIos
                className={`${
                  phoneNavDropDownTab === elm.title ? "rotate-90" : "rotate-0"
                } transition-transform duration-300 ease-in-out`}
              />
            )}
          </div>
          {phoneNavDropDownTab === elm.title && (
            <div className="flex justify-center">
              <ul className="mt-3 flex flex-col items-start">
                {elm.subcategories?.map((sub, index) => (
                  <li key={index} className="text-xl">
                    <Link
                      href={sub.link}
                      onClick={() => setSideBarToggle(false)}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))} */}
          </ul>
        </div>
      </div>
      </>
    );
  };

  const userLinkList = [
    {
      link: "/user/login",
      name: "login",
    },
    {
      link: "/user/sign-up",
      name: "sign-up",
    },
  ];

  const userLinkList2 = [
    {
      link: "/user/profile",
      name: "Profile",
      icon: <ImProfile />,
    },
    {
      link: "/user/wishlist",
      name: "WishList",
      icon: <IoHeartCircleSharp />,
    },
    {
      link: "/user/order",
      name: "Orders",
      icon: <FaBoxOpen />,
    },
    {
      link: "/cart",
      name: "Cart",
      icon: <FaShoppingCart />,
    },
  ];

  const handellogout = async () => {
    const response = await axios.post(
      `${baseurl}/user/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    const data = response.data;
    if (data.success) {
      location.href = "/";
    }
  };

  const UserLinks = () => {
    return (
      <ul
        onMouseLeave={() => setUserLinkToggle(false)}
        className="bg-white shadow-lg rounded-lg w-[150px] p-2 absolute -right-10 top-8 border border-gray-300"
      >
        {userLinkList.map((elm, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-100 rounded-md">
            <Link
              href={elm.link}
              className="block uppercase text-gray-700 text-base"
            >
              {elm.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const UserLinks2 = () => {
    return (
      <ul
        onMouseLeave={() => setUserLinkToggle2(false)}
        className="absolute -right-10 top-8 w-28 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2"
      >
        {userLinkList2.map((elm, index) => (
          <li key={index}>
            <Link
              href={elm.link}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
            >
              <span className="text-lg">{elm.icon}</span>
              <span className="whitespace-nowrap">{elm.name}</span>
            </Link>
          </li>
        ))}

        {/* Divider */}
        <li className="border-t border-gray-200 my-1"></li>

        {/* Logout */}
        <li>
          <button
            onClick={handellogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 text-sm font-medium hover:bg-red-50 transition-all duration-200"
          >
            <IoLogOutOutline className="text-lg" />
            <span className="whitespace-nowrap">Logout</span>
          </button>
        </li>
      </ul>
    );
  };

  const [userLinkToggle, setUserLinkToggle] = useState(false);
  const [userLinkToggle2, setUserLinkToggle2] = useState(false);

  const [changeNavBg, setChangeNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setChangeNavBg(true);
      } else {
        setChangeNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathName = usePathname();

  const [searchtoggle, setSearchToogle] = useState(false);

  const fetchCat = async () => {
    const response = await axios.get(`${baseurl}/getnavcat`);
    const data = await response.data;
    if (data.success) {
      setAllcat(data.cat);
      fetchJproduct(data.cat[0].id);
    }
  };

  const fetchJproduct = async (id) => {
    const response = await axios.get(`${baseurl}/getnavProductj/${id}`);
    const data = await response.data;
    if (data.success) {
      setNavproduct(data.products);
    } else {
      setNavproduct("");
    }
  };
  const fetchOtherproduct = async (navtype, fortype) => {
    const response = await axios.post(`${baseurl}/getnavProductfor`, {
      for: fortype,
      type: navtype,
    });
    const data = await response.data;
    if (data.success) {
      setNavproduct2(data.products);
    } else {
      setNavproduct2("");
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const [active, setActive] = useState("");

  return (
    <>
      <header
        className={`top-0 w-full z-[200] py-3 transition-all duration-300 mx-auto conatiner ${
          pathName === "/"
            ? changeNavBg
              ? "fixed bg-black text-white shadow-2xl"
              : "fixed bg-black text-white hover:text-white hover:bg-[#000] hover:shadow-2xl"
            : "sticky bg-black shadow-2xl text-white  "
        }`}
      >
        {" "}
        <div className="px-5 md:px-12 xl:px-32 flex justify-between items-center relative container mx-auto">
          <Link href="/" className="">
            <img
              src={`${imgurl}/${layout?.info?.layout?.logo}`}
              alt="logo"
              className="w-16 h-16 "
            />
          </Link>

          <ul
            className="hidden lg:flex  gap-x-5 absolute left-[50%] -translate-x-[50%]"
            onMouseLeave={() => setActive("")}
          >
            <li
              className="flex items-center uppercase gap-x-1 text-sm lg:text-nowrap  relative "
              onMouseEnter={() => setActive("jewellery")}
            >
              <Link href={"#"}>Jewellery</Link>

              <IoIosArrowDown className="group-hover:rotate-180 transition-transform" />

              <div
                className={`absolute z-10 top-[54px] -left-[100px] w-[800px] duration-500 transition-all ${
                  active === "jewellery" ? "h-[200px] " : "h-0"
                } bg-white    shadow-lg overflow-hidden`}
                onMouseLeave={() => setActive("")}
              >
                <div className="flex justify-between items-start p-5">
                  <ul className="space-y-4">
                    {allcat?.map((sub, index) => (
                      <li
                        key={index}
                        className="text-gray-700 hover:bg-[#b4a4b437]  px-4 hover:text-black cursor-pointer"
                        onMouseEnter={() => fetchJproduct(sub.id)}
                      >
                        <Link href={"#"}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-x-4">
                    {navproduct?.map((imgItem, imgIndex) => (
                      <Link
                        href={`/product/${imgItem?.slug}`}
                        key={imgIndex}
                        className="text-center"
                      >
                        <img
                          src={`${imgurl}/${imgItem?.img1}`}
                          alt={imgItem?.slug}
                          className="w-36 h-36 object-cover"
                        />
                        <p>{imgItem.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li
              className="flex items-center uppercase gap-x-1 text-sm lg:text-nowrap "
              onMouseEnter={() => {fetchOtherproduct("engagement", "her"),
                setActive("engagement");
              }}
            >
              <Link href={"#"}>Engagement</Link>

              <IoIosArrowDown className="group-hover:rotate-180 transition-transform" />

              <div
                className={`absolute z-10 top-[54px] -left-[100px] w-[800px] duration-500 transition-all ${
                  active === "engagement" ? "h-[200px] " : "h-0"
                } bg-white    shadow-lg overflow-hidden`}
                onMouseLeave={() => setActive("")}
              >
                <div className="flex justify-between items-start p-5">
                  <ul className="space-y-4">
                    {["Her", "Him"]?.map((sub, index) => (
                      <li
                        key={index}
                        className="text-gray-700 hover:bg-[#b4a4b437]  px-4 hover:text-black cursor-pointer"
                        onMouseEnter={() =>
                          fetchOtherproduct("engagement", sub.toLowerCase())
                        }
                      >
                        <Link href={"#"}>{sub}</Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-x-4">
                    {navproduct2?.map((imgItem, imgIndex) => (
                      <Link
                        href={`/product/${imgItem?.slug}`}
                        key={imgIndex}
                        className="text-center"
                      >
                        <img
                          src={`${imgurl}/${imgItem?.img1}`}
                          alt={imgItem?.slug}
                          className="w-36 h-36 object-cover"
                        />
                        <p>{imgItem.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li
              className="flex items-center uppercase gap-x-1 text-sm lg:text-nowrap "
              onMouseEnter={() => {
                setActive("gifting"), fetchOtherproduct("gifting", "her");
              }}
            >
              <Link href={"#"}>Gifting</Link>

              <IoIosArrowDown className="group-hover:rotate-180 transition-transform" />
              <div
                className={`absolute z-10 top-[54px] -left-[100px] w-[800px] duration-500 transition-all ${
                  active === "gifting" ? "h-[200px] " : "h-0"
                } bg-white    shadow-lg overflow-hidden`}
                onMouseLeave={() => setActive("")}
              >
                <div className="flex justify-between items-start p-5">
                  <ul className="space-y-4">
                    {["Her", "Him"]?.map((sub, index) => (
                      <li
                        key={index}
                        className="text-gray-700 hover:bg-[#b4a4b437]  px-4 hover:text-black cursor-pointer"
                        onMouseEnter={() =>
                          fetchOtherproduct("gifting", sub.toLowerCase())
                        }
                      >
                        <Link href={"#"}>{sub}</Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-x-4">
                    {navproduct2?.map((imgItem, imgIndex) => (
                      <Link
                        href={`/product/${imgItem?.slug}`}
                        key={imgIndex}
                        className="text-center"
                      >
                        <img
                          src={`${imgurl}/${imgItem?.img1}`}
                          alt={imgItem?.slug}
                          className="w-36 h-36 object-cover"
                        />
                        <p>{imgItem.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="flex items-center uppercase gap-x-1 text-sm lg:text-nowrap ">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="flex items-center uppercase gap-x-1 text-sm lg:text-nowrap ">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li className="flex items-center uppercase gap-x-1 text-sm lg:text-nowrap ">
              <Link href={"/all-products"}>products</Link>
            </li>
            <li className="flex items-center uppercase gap-x-1 text-sm lg:text-nowrap ">
              <Link href={"/contact-us"}>Contact us</Link>
            </li>
          </ul>

          <ul className="flex relative items-center gap-x-4 text-3xl sm:text-2xl font-normal">
            <button
              className="cursor-pointer text-3xl lg:text-2xl font-bold"
              onClick={() => setSearchToogle(!searchtoggle)}
            >
              <IoIosSearch />
            </button>

            {!info?.id && (
              <div className="relative hidden lg:block">
                <button
                  onMouseEnter={() => setUserLinkToggle(true)}
                  className="relative flex items-center justify-center"
                >
                  <FaRegUser className="hidden lg:block  text-3xl lg:text-2xl cursor-pointer" />
                  {userLinkToggle && <UserLinks />}
                </button>
              </div>
            )}

            {info?.id && (
              <div className="relative hidden lg:block">
                <button
                  onMouseEnter={() => setUserLinkToggle2(true)}
                  className="relative flex items-center justify-center"
                >
                  <FaRegUserCircle className="hidden lg:block  text-3xl lg:text-2xl cursor-pointer" />
                  {userLinkToggle2 && <UserLinks2 />}
                </button>
              </div>
            )}

            <Link href="/cart" className="relative">
              <div className="relative">
                <MdOutlineShoppingBag className="text-3xl lg:text-2xl" />
              </div>
            </Link>

            <button
              onClick={() => setSideBarToggle(!sideBarToogle)}
              className="text-2xl md:text-3xl lg:hidden duration-200"
            >
              {sideBarToogle ? <RiCloseLargeFill /> : <HiMenu />}
            </button>
          </ul>
        </div>
      </header>

      <SideBar />

      {searchtoggle && <SearchProduct setSearchToogle={setSearchToogle} />}
    </>
  );
}
