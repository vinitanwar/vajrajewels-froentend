"use client";

import React, { useEffect, useState } from "react";
import {
  IoIosSearch,
  IoIosArrowDown,
} from "react-icons/io";
import {
  MdOutlineShoppingBag,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SearchProduct from "./SearchProduct";
import { getUser } from "../store/userSlice";
import { GetLayout } from "../store/layoutSlice";

import {
  IoHeartCircleSharp,
  IoLogOutOutline,
} from "react-icons/io5";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaRegUser,
  FaRegUserCircle,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";

import { baseurl, imgurl } from "./utils/apis";

export default function Nav() {
  const { info } = useSelector((state) => state.user);
  const layout = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const [allcat, setAllcat] = useState([]);
  const [navproduct, setNavproduct] = useState([]);
  const [navproduct2, setNavproduct2] = useState([]);
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [userLinkToggle, setUserLinkToggle] = useState(false);
  const [userLinkToggle2, setUserLinkToggle2] = useState(false);
  const [changeNavBg, setChangeNavBg] = useState(false);
  const [searchtoggle, setSearchToogle] = useState(false);
  const [active, setActive] = useState("");

  const pathName = usePathname();

  // Fetch user & layout data
  useEffect(() => {
    dispatch(GetLayout());
    dispatch(getUser());
  }, [dispatch]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setChangeNavBg(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch categories
  const fetchCat = async () => {
    try {
      const { data } = await axios.get(`${baseurl}/getnavcat`);
      if (data.success) {
        setAllcat(data.cat);
        fetchJproduct(data.cat[0].id);
      }
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  // Fetch products by category
  const fetchJproduct = async (id) => {
    try {
      const { data } = await axios.get(`${baseurl}/getnavProductj/${id}`);
      if (data.success) {
        setNavproduct(data.products);
      } else {
        setNavproduct([]);
      }
    } catch (error) {
      console.error("Error fetching jewellery products:", error.message);
    }
  };

  // Fetch other product types
  const fetchOtherproduct = async (navtype, fortype) => {
    try {
      const { data } = await axios.post(`${baseurl}/getnavProductfor`, {
        for: fortype,
        type: navtype,
      });
      if (data.success) {
        setNavproduct2(data.products);
      } else {
        setNavproduct2([]);
      }
    } catch (error) {
      console.error("Error fetching other products:", error.message);
    }
  };

  // Fetch categories on mount
  useEffect(() => {
    fetchCat();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        `${baseurl}/user/logout`,
        {},
        { withCredentials: true }
      );
      if (data.success) {
        location.href = "/";
      }
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const userLinkList = [
    { link: "/user/login", name: "Login" },
    { link: "/user/sign-up", name: "Sign Up" },
  ];

  const userLinkList2 = [
    { link: "/user/profile", name: "Profile", icon: <ImProfile /> },
    { link: "/user/wishlist", name: "Wishlist", icon: <IoHeartCircleSharp /> },
    { link: "/user/order", name: "Orders", icon: <FaBoxOpen /> },
    { link: "/cart", name: "Cart", icon: <FaShoppingCart /> },
  ];

  // Sidebar Component
  const SideBar = () => (
    <motion.div
      initial="hidden"
      animate={sideBarToggle ? "visible" : "hidden"}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed z-[100] top-0 left-0 w-screen h-full lg:hidden bg-black/50 transition-transform duration-700 ease-in-out ${
        sideBarToggle ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-5 md:px-12 h-full md:w-[400px] bg-[#000] text-white shadow-lg">
        <ul className="space-y-5 pt-24 text-center uppercase text-sm">
          <li>
            <Link href="/" onClick={() => setSideBarToggle(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-products" onClick={() => setSideBarToggle(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setSideBarToggle(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={() => setSideBarToggle(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={() => setSideBarToggle(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );

  const UserLinks = () => (
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

  const UserLinks2 = () => (
    <ul
      onMouseLeave={() => setUserLinkToggle2(false)}
      className="absolute -right-10 top-8 w-32 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden"
    >
      {userLinkList2.map((elm, index) => (
        <li key={index}>
          <Link
            href={elm.link}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 hover:text-blue-600 transition-all"
          >
            <span className="text-lg">{elm.icon}</span>
            <span>{elm.name}</span>
          </Link>
        </li>
      ))}
      <li className="border-t border-gray-200 my-1"></li>
      <li>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2 text-red-600 text-sm font-medium hover:bg-red-50 transition-all"
        >
          <IoLogOutOutline className="text-lg" />
          <span>Logout</span>
        </button>
      </li>
    </ul>
  );

  return (
    <>
      <header
        className={`top-0 w-full z-[200] py-3 transition-all duration-300 mx-auto ${
          pathName === "/"
            ? changeNavBg
              ? "fixed bg-black text-white shadow-2xl"
              : "fixed bg-black text-white hover:bg-[#000]"
            : "sticky bg-black text-white shadow-2xl"
        }`}
      >
        <div className="px-5 md:px-12 xl:px-32 flex justify-between items-center relative container mx-auto">
          {/* Logo */}
          <Link href="/">
            <img
              src={`${imgurl}/${layout?.info?.layout?.logo}`}
              alt="logo"
              className="w-16 h-16 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <ul
            className="hidden lg:flex gap-x-5 absolute left-1/2 -translate-x-1/2"
            onMouseLeave={() => setActive("")}
          >
            {/* Jewellery Dropdown */}
            <li
              className="flex items-center uppercase gap-x-1 text-sm relative"
              onMouseEnter={() => setActive("jewellery")}
            >
              <Link href="#">Jewellery</Link>
              <IoIosArrowDown className="transition-transform" />
              {active === "jewellery" && (
                <div
                  className="absolute z-10 top-[54px] -left-[100px] w-[800px] bg-white shadow-lg overflow-hidden"
                  onMouseLeave={() => setActive("")}
                >
                  <div className="flex justify-between items-start p-5">
                    <ul className="space-y-4">
                      {allcat.map((sub, index) => (
                        <li
                          key={index}
                          className="text-gray-700 hover:bg-gray-100 px-4 cursor-pointer"
                          onMouseEnter={() => fetchJproduct(sub.id)}
                        >
                          <Link href="#">{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-x-4">
                      {navproduct.map((item, i) => (
                        <Link
                          href={`/product/${item.slug}`}
                          key={i}
                          className="text-center"
                        >
                          <img
                            src={`${imgurl}/${item.img1}`}
                            alt={item.slug}
                            className="w-36 h-36 object-cover"
                          />
                          <p>{item.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Engagement Dropdown */}
            <li
              className="flex items-center uppercase gap-x-1 text-sm relative"
              onMouseEnter={() => {
                fetchOtherproduct("engagement", "her");
                setActive("engagement");
              }}
            >
              <Link href="#">Engagement</Link>
              <IoIosArrowDown />
              {active === "engagement" && (
                <div
                  className="absolute z-10 top-[54px] -left-[100px] w-[800px] bg-white shadow-lg overflow-hidden"
                  onMouseLeave={() => setActive("")}
                >
                  <div className="flex justify-between items-start p-5">
                    <ul className="space-y-4">
                      {["Her", "Him"].map((sub, i) => (
                        <li
                          key={i}
                          className="text-gray-700 hover:bg-gray-100 px-4 cursor-pointer"
                          onMouseEnter={() =>
                            fetchOtherproduct("engagement", sub.toLowerCase())
                          }
                        >
                          <Link href="#">{sub}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-x-4">
                      {navproduct2.map((item, i) => (
                        <Link
                          href={`/product/${item.slug}`}
                          key={i}
                          className="text-center"
                        >
                          <img
                            src={`${imgurl}/${item.img1}`}
                            alt={item.slug}
                            className="w-36 h-36 object-cover"
                          />
                          <p>{item.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Gifting Dropdown */}
            <li
              className="flex items-center uppercase gap-x-1 text-sm relative"
              onMouseEnter={() => {
                fetchOtherproduct("gifting", "her");
                setActive("gifting");
              }}
            >
              <Link href="#">Gifting</Link>
              <IoIosArrowDown />
              {active === "gifting" && (
                <div
                  className="absolute z-10 top-[54px] -left-[100px] w-[800px] bg-white shadow-lg overflow-hidden"
                  onMouseLeave={() => setActive("")}
                >
                  <div className="flex justify-between items-start p-5">
                    <ul className="space-y-4">
                      {["Her", "Him"].map((sub, i) => (
                        <li
                          key={i}
                          className="text-gray-700 hover:bg-gray-100 px-4 cursor-pointer"
                          onMouseEnter={() =>
                            fetchOtherproduct("gifting", sub.toLowerCase())
                          }
                        >
                          <Link href="#">{sub}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-x-4">
                      {navproduct2.map((item, i) => (
                        <Link
                          href={`/product/${item.slug}`}
                          key={i}
                          className="text-center"
                        >
                          <img
                            src={`${imgurl}/${item.img1}`}
                            alt={item.slug}
                            className="w-36 h-36 object-cover"
                          />
                          <p>{item.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/all-products">Products</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>

          {/* Right Icons */}
          <ul className="flex items-center gap-x-4 text-2xl relative">
            <button onClick={() => setSearchToogle(!searchtoggle)}>
              <IoIosSearch />
            </button>

            {!info?.id ? (
              <div className="relative hidden lg:block">
                <button
                  onMouseEnter={() => setUserLinkToggle(true)}
                  className="flex items-center"
                >
                  <FaRegUser />
                  {userLinkToggle && <UserLinks />}
                </button>
              </div>
            ) : (
              <div className="relative hidden lg:block">
                <button
                  onMouseEnter={() => setUserLinkToggle2(true)}
                  className="flex items-center"
                >
                  <FaRegUserCircle />
                  {userLinkToggle2 && <UserLinks2 />}
                </button>
              </div>
            )}

            <Link href="/cart">
              <MdOutlineShoppingBag />
            </Link>

            <button
              onClick={() => setSideBarToggle(!sideBarToggle)}
              className="lg:hidden text-3xl"
            >
              {sideBarToggle ? <RiCloseLargeFill /> : <HiMenu />}
            </button>
          </ul>
        </div>
      </header>

      <SideBar />
      {searchtoggle && <SearchProduct setSearchToogle={setSearchToogle} />}
    </>
  );
}
